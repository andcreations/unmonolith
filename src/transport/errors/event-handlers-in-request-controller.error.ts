export class EventHandlersInRequestControllerError extends Error {
  public constructor(topics: string[]) {
    super(
      `Event handlers for topics '${topics.join(', ')}' in request controller`
    )
  }
}
