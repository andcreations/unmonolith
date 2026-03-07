import { Context } from '@unmonolith/common'

export abstract class EventTransporter {
  public abstract sendEvent<TEvent>(
    topic: string,
    event: TEvent,
    context: Context
  ): Promise<void>
}
