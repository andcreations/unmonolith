export class DuplicatedRequestHandlerError extends Error {
  public constructor(topic: string) {
    super(`Duplicated request handler for topic '${topic}'`);
  }
}
