import { Provider } from '@nestjs/common';
import { Context } from '@unmonolith/common';

import { callRequestHandler } from '../spec';
import { RequestTransporter } from './RequestTransporter';

export class LocalRequestTransporter extends RequestTransporter {
  public constructor() {
    super();
  }

  public async sendRequest<TRequest, TResponse>(
    topic: string,
    request: TRequest,
    context: Context,
  ): Promise<TResponse> {
    console.log(`[local] Sending request to topic ${topic}`);
    return callRequestHandler<TRequest, TResponse>(topic, request, context);
  }

  public static forFeature(): LocalRequestTransporter {
    return new LocalRequestTransporter();
  }
}