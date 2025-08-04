export class RequestHandlerSpecNotFoundError extends Error {
  public constructor(topic: string) {
    super(`Request handler spec for topic '${topic}' not found`);
  }
}
