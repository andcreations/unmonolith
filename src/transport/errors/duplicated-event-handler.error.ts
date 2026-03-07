export class DuplicatedEventHandlerError extends Error {
  public constructor(topic: string) {
    super(`Duplicated event handler for topic '${topic}'`);
  }
}
