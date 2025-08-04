export class TransportControllerSpecNotFoundError extends Error {
  public constructor(controllerName: string) {
    super(`Transport controller spec for '${controllerName}' not found`);
  }
} 