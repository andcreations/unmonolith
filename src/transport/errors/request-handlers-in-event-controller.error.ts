export class RequestHandlersInEventControllerError extends Error {
  public constructor(topics: string[]) {
    super(
      `Request handlers for topics '${topics.join(', ')}' in event controller`
    )
  }
}
