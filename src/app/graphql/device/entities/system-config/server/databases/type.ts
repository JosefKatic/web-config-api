import { Field, ObjectType } from '@nestjs/graphql';
import { Postgresql } from '../databases/postgresql';
import { Mysql } from '../databases/mysql';

@ObjectType()
export class Databases {
  @Field(() => Mysql, { nullable: false })
    mysql: Mysql;
  @Field(() => Postgresql, { nullable: false })
    postgresql: Postgresql;
}
