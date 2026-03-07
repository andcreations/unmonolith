import { Context } from '@unmonolith/common';
import { EventTransporter } from './event.transporter';
import { LocalEventTransporter } from './local.event-transporter';

export class DefaultEventTransporter extends EventTransporter {
  private readonly localEventTransporter = LocalEventTransporter.forFeature();

  public async sendEvent<TEvent>(
    topic: string,
    event: TEvent,
    context: Context,
  ): Promise<void> {
    // TODO Implement other transporters (e.g. Kafka) and
    // send the event to the other transporters.
    await this.localEventTransporter.sendEvent(topic, event, context);
  }

  public static forFeature(): DefaultEventTransporter {
    return new DefaultEventTransporter()
  }
}