export class EventControllerSpecNotFoundError extends Error {
  public constructor(controllerName: string) {
    super(`Event controller spec for '${controllerName}' not found`)
  }
}
