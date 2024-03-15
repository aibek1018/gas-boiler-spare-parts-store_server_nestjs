import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'ivan' })
  username: string;

  @ApiProperty({ example: 'ivan123' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Ivan',
        password: 'ivan123',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'ivan' })
  username: string;

  @ApiProperty({ example: 'ivan@gmail.com' })
  email: string;
}

export class SignupResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'oleg' })
  username: string;

  @ApiProperty({
    example: '$2b$10$CTavHJVonGhYR6aijFop1.x9p6FMyOUrXi6/P6J831OxUt',
  })
  password: string;

  @ApiProperty({ example: 'oleg@gmail.com' })
  email: string;

  @ApiProperty({ example: '2024-03-14T09:48:04.567Z' })
  updatedAt: string;

  @ApiProperty({ example: '2024-03-14T09:48:04.567Z' })
  createdAt: string;
}
