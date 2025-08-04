import { Provider } from '@nestjs/common';
import { Context } from '@unmonolith/common';

import { callRequestHandler } from '../spec';
import { RequestTransporter } from './RequestTransporter';

export class HTTPRequestTransporter extends RequestTransporter {
  public constructor(
    private readonly host: string,
    private readonly port: number,
  ) {
    super();
  }

  public async sendRequest<TRequest, TResponse>(
    topic: string,
    request: TRequest,
    context: Context,
  ): Promise<TResponse> {
    // TODO Make HTTP request.
    console.log(
      `[http] Sending request to ${this.host}:${this.port} to topic ${topic}`,
    );
    return callRequestHandler<TRequest, TResponse>(topic, request, context);
  }

  public static forFeature(options: ForFeatureOptions): HTTPRequestTransporter {
    return new HTTPRequestTransporter(options.host, options.port);
  }
}

export interface ForFeatureOptions {
  host: string;
  port: number;
}