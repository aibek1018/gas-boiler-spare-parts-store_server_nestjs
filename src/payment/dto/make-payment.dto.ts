import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class MakePaymentDto {
  @ApiProperty({ example: 50 })
  @IsNotEmpty()
  readonly amount: number;

  @ApiProperty({ example: 'Заказ №1' })
  @IsOptional()
  readonly description?: string;
}
