export class RequestHandlerSpecAlreadyExistsError extends Error {
  public constructor(topic: string) {
    super(`Request handle spec for topic '${topic}' already exists`);
  }
}
