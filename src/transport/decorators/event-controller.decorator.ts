import { RequestHandlersInEventControllerError } from '../errors'
import {
  getEventHandlerSpecs,
  getRequestHandlerSpecs,
  setEventHandlerClassInstance,
  addEventControllerSpec
} from '../spec'
import { EventControllerClass } from '../types'

export const EventController = (): ClassDecorator => {
  return (target: Function) => {
    const controllerClass = target as EventControllerClass
    addEventControllerSpec({
      clazz: controllerClass
    })

    const name = target.name
    const holder: { [key: string]: any } = {}
    holder[name] = class extends controllerClass {
      public constructor(...args: any[]) {
        super(...args)

        const requestHandlerSpecs = getRequestHandlerSpecs(controllerClass)
        if (requestHandlerSpecs.length > 0) {
          throw new RequestHandlersInEventControllerError(
            requestHandlerSpecs.map((spec) => spec.topic)
          )
        }

        const eventHandlerSpecs = getEventHandlerSpecs(controllerClass)
        for (const spec of eventHandlerSpecs) {
          setEventHandlerClassInstance(spec.topic, this)
        }
      }
    }
    return holder[name]
  }
}
