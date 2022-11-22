/* eslint-disable prettier/prettier */
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' }) // table name: users
@ObjectType()
export class User {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  fullName: string;

  @Column({ unique: true })
  @Field(() => String)
  email: string;

  @Column()
  // @Field(() => String)  Field no va porque no necesitamos obtener el password
  password: string;

  @Column({
    type: 'text',
    array: true,
    default: ['user'],
  })
  @Field(() => [String])  // graphql
  roles: string[];        // typescript

  @Column({
    type: 'boolean',
    default: true,
  })
  @Field( () => Boolean )
  isActive: boolean;

  // TODO: realaciones y otras cosas...
}
