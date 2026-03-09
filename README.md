# Unmonolith

Unmonolith shows how to structure a NestJS project, so that its parts are split into packages, services and gateways. The described approach first of all keeps the code in isolated components (services, service APIs and gatewayes). Moreover, it allows to easily decompose the project into microservices in the future.

## Packages

The packages are defined in `paths` in `tsconfig.json` and allow to import using package names rather than relative paths:

```ts
import { LocalRequestTransporter } from `@unmonolith/transport`;
// instead of
import { LocalRequestTransporter } from `.../../transport`;
```

This approach makes it easy to extract an NPM package. It just takes creating the package and replacing `paths` in `tsconfig.json` with a proper dependency in `package.json`.

## Domains and services

The project is broken down into domains. Each domain in turn is broken down into services. Each service provides the service API, the service itself which implements the API and optionally a gateway which exposes HTTP endpoints.

## Transport

The transport package (layer) provides means of communication between services and gateways. There can be various implementations:
- **Local** when services/gateways are contained in the monolith or in the same microservice. The communication is performed by direct calls of the request handlers in this situation.
- **HTTP** to communicate with a service running in a different microservice.
- Others if other protocols should be used.

When a service is to be extracted from the monolith, the transporter is changed from the local to HTTP one. This should be the only thing to do (not counting extracting packages) to extract a service into a microservice.

## Service API

A service API is given as a package in `tsconfig.json`. It is used by services and gateways communicating with the service. It exposes a NestJS module which provides topics, DTOs and a transporter to send requests to the service. A service or gateway communicating with a service imports the NestJS module and provides a proper transporter. For example:

```ts
// The users auth service runs inside the monolith, so the local transporter is provided.
imports: [
  UsersAuthAPIModule.forRoot({}),
]
```

The function `resolveRequestTransporter` is responsible for resolving the protocol transporter for given service API module. That is, it resolves how a service or gateway communicates with another service. The function picks the protocol based on an environment variable. It picks either:
- local transporter for services within the monolith or the same microservice,
- HTTP for services listing on a HTTP port.

Now, a service or gateway using such a service API module knows how to communicate with service behind the API and sets the proper environment variable.

When a service runs inside the monolith it uses the local transporter. When it's extracted into a microservice:
* The service API is extracted into an NPM package.
* The transporter is changed to the HTTP one.

## Service as a server

A service handles all the requests defined in the corresponding service API. It uses the topics and DTOs defined in the service API and implements a request controller which handles the requests.

## Service & gateway as service clients

Gateways and services use service APIs to communicate with (other) services. Note that a service can communicate with another service.

## The code

The code in `src` encompasses the common packages:
- `@unmonolith/common` in `src/common`
- `@unmonolith/gateway-common` in `src/gateway-common`
- `@unmonolith/transport` in `src/transport`. The most important here are the transporters `LocalRequestTransporter` and `HTTPRequestTransporter`. It also provides the decorators `TransportController` and `RequestHandler` which are used in the controllers handling the requests defined in the service API.

The code implements one domain `users` with 2 services `auth` and `crud`. Compare the directory structure of the domain and the services with [Domains & services](#domains-and-services).

## Events

Typically events are sent using event streaming platforms (e.g. Kafka). In this situation a service (not service API) emitting events must provide a transporter which sends events to a streaming platform. On the other hand a service listening to events must also provide a transporter which listens to events.