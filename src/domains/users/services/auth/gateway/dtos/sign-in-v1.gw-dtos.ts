import { ApiProperty } from '@nestjs/swagger';

export class SignInV1GWRequest {
  @ApiProperty({  
    description: 'The email of the user',
  })
  public email: string;

  @ApiProperty({
    description: 'The password of the user',
  })
  public password: string;
}

export class SignInV1GWResponse {
  @ApiProperty({
    description: 'The access token of the user',
  })
  public accessToken: string;
}