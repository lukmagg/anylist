/* eslint-disable prettier/prettier */
import { InputType, Float, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsPositive, IsOptional } from 'class-validator';

@InputType()
export class CreateItemInput {

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field(() => Float)
  @IsPositive()
  quantity: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  quantityUnits?: string;

  
}
