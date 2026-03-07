export class EventHandlerNotFoundError extends Error {
  public constructor(topic: string) {
    super(`Event handler for topic '${topic}' not found`)
  }
}
