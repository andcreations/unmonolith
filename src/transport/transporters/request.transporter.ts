import { Context } from '@unmonolith/common';

export abstract class RequestTransporter {
  public abstract sendRequest<TRequest, TResponse>(
    topic: string,
    request: TRequest,
    context: Context,
  ): Promise<TResponse>;
}