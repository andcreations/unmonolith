export class TransportControllerSpecAlreadyExistsError extends Error {
  public constructor(controllerName: string) {
    super(`Transport controller spec for '${controllerName}' already exists`);
  }
}
