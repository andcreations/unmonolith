import { Context } from '@unmonolith/common';

import { callRequestHandler } from '../spec';
import { RequestTransporter } from './request.transporter';

export class HTTPRequestTransporter extends RequestTransporter {
  public constructor(private readonly url: string) {
    super();
  }

  public async sendRequest<TRequest, TResponse>(
    topic: string,
    request: TRequest,
    context: Context,
  ): Promise<TResponse> {
    console.log(
      `[http] Sending request to ${this.url} to topic ${topic}`,
    );

    // TODO Make HTTP request.
    return null;
  }

  public static forFeature(options: ForFeatureOptions): HTTPRequestTransporter {
    return new HTTPRequestTransporter(options.url);
  }
}

export interface ForFeatureOptions {
  url: string;
}