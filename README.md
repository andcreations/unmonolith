# Unmonolith

Unmonolith is an example NestJS project that demonstrates how to structure a monolith so that its parts are split into packages, domains, services and gateways. This approach keeps the code in isolated components (services, service APIs, and gateways) and allows you to easily decompose the project into microservices in the future.

The repository targets developers familiar with NestJS who want clear boundaries between services and a migration path from a monolith to microservices with minimal code changes.

## Packages

The packages are defined in the `paths` section of `tsconfig.json` and allow importing using package names rather than relative paths:

```ts
import { LocalRequestTransporter } from '@unmonolith/transport';
// instead of
import { LocalRequestTransporter } from '../../transport';
```

This approach makes it easy to extract an npm package. It just takes creating the package and replacing `paths` in `tsconfig.json` with a proper dependency in `package.json`.

## Domains and services

The project is broken down into **domains** (for example, the `users` domain). Each domain in turn is broken down into **services**. Each service provides:

- a **service API** which defines the public contract,
- the **service implementation** which implements the API,
- optionally a **gateway** which exposes HTTP endpoints.

## Transport

The transport package (layer) provides the means of communication between services and gateways. There can be various implementations:

- **Local** - when services/gateways are contained in the monolith or in the same microservice. In this case, communication is performed via direct calls to the request handlers.
- **HTTP** - to communicate with a service running in a different microservice.
- **Other implementations** - if additional protocols are needed.

When a service is extracted from the monolith, its transporter is switched from the local one to the HTTP one. This should be the only change required (aside from extracting packages) to turn a service into a separate microservice.

## Service API

A service API is declared as a package in `tsconfig.json`. It is used by services and gateways that communicate with the service. It exposes a NestJS module which provides topics, DTOs, and a transporter to send requests to the service. A service or gateway communicating with a service imports the NestJS module. For example:

```ts
// The users auth service runs inside the monolith, so the local transporter is provided.
imports: [
  UsersAuthAPIModule.forRoot({}),
]
```

The function `resolveRequestTransporter` is responsible for resolving the protocol transporter for a given service API module. That is, it resolves how a service or gateway communicates with another service. The function picks the protocol based on an environment variable. It picks either:
- the local transporter for services within the monolith or the same microservice,
- HTTP for services listening on an HTTP port.

Now, a service or gateway using such a service API module knows how to communicate with the service behind the API and sets the appropriate environment variable.

## Extracting a service into a microservice

When a service runs inside the monolith, it uses the local transporter. When it is extracted into a microservice:
- The service API is extracted into an npm package and referenced from `package.json` instead of `tsconfig.json` paths.
- The transporter is changed to the HTTP transporter (by changing configuration/environment).

The rest of the application code (calling the service through its API) remains unchanged.

## Service as a server

A service handles all the requests defined in the corresponding service API. It uses the topics and DTOs defined in the service API and implements a request controller which handles the requests.

## Services and gateways as service clients

Gateways and services use service APIs to communicate with (other) services. Note that a service can also communicate with another service.

## Events

Typically, events are sent using event streaming platforms (e.g. Kafka). In this situation, a service (not the service API) emitting events must provide a transporter which sends events to a streaming platform. On the contrary, a service listening to events must also provide a transporter which subscribes to those events.

## The code

The code in `src` contains the shared packages:
- `@unmonolith/common` in `src/common`
- `@unmonolith/gateway-common` in `src/gateway-common`
- `@unmonolith/transport` in `src/transport`

The `@unmonolith/transport` package contains:
- request transporters, `LocalRequestTransporter` and `HTTPRequestTransporter`
- request decorators, `TransportController` and `RequestHandler`, used in controllers that handle the requests defined in a service API
- event transporters, `LocalEventTransporter` and `DefaultEventTransporter`, for services that emit events
- event decorators, `EventController` and `EventHandler`, used in controllers that listen to events emitted by other services

Currently, only one domain is implemented: `users`. It contains three services:
- `manager`, which provides an API and a dummy implementation for creating and reading users
- `auth`, which allows users to sign in; its gateway sends requests to the `auth` service, which then calls the `manager` service to read the signing-in user and emits an event when a user signs in
- `logger`, which listens to the user-signed-in event and logs it to the console