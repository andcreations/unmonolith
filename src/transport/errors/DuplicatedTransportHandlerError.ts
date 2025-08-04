export class DuplicatedTransportHandlerError extends Error {
  public constructor(topic: string) {
    super(`Duplicated transport handler for topic '${topic}'`);
  }
}
