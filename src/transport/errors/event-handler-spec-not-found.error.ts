export class EventHandlerSpecNotFoundError extends Error {
  public constructor(topic: string) {
    super(`Event handler spec for topic '${topic}' not found`)
  }
}
