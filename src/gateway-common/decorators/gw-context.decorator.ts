import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { v7 } from 'uuid';
import { Context } from '@unmonolith/common';

export const GWContext = createParamDecorator(
  (data: any, context: ExecutionContext): Context => {
    return {
      correlationId: v7(),
    }
  }
);