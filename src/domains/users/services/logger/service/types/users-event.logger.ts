import { Context } from '@unmonolith/common';

export abstract class UsersEventLogger {
  public abstract logEvent(
    type: string,
    data: object,
    context: Context,
  ): Promise<void>;
}