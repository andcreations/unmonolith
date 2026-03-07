export class EventControllerSpecAlreadyExistsError extends Error {
  public constructor(controllerName: string) {
    super(`Event controller spec for '${controllerName}' already exists`)
  }
}
