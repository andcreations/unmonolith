import { Context } from '@unmonolith/common'

import { EventTransporter } from './event.transporter'
import { callEventHandlers } from '../spec'

export class LocalEventTransporter extends EventTransporter {
  public async sendEvent<TEvent>(
    topic: string,
    event: TEvent,
    context: Context
  ): Promise<void> {
    try {
      await callEventHandlers<TEvent>(topic, event, context)
    } catch (error) {
      const errorMsg = error instanceof Error ? error.stack : String(error)
      console.error(
        `Error sending event '${topic}' (correlationId: ${context.correlationId}): ${errorMsg}`
      )
    }
  }

  public static forFeature(): LocalEventTransporter {
    return new LocalEventTransporter()
  }
}
