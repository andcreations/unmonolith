export class RequestHandlerNotFoundError extends Error {
  public constructor(topic: string) {
    super(`Request handler for topic '${topic}' not found`);
  }
}
