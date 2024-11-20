import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field()
  name: string;

  @Field()
  status: string;

  @Field(() => Int, { nullable: true })
  img?: string;
}
