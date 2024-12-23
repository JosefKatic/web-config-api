import { Field, ObjectType } from '@nestjs/graphql';
import { FreeIPA } from './freeipa';
import { Keycloak } from './keycloak';

@ObjectType()
export class Auth {
  @Field(() => FreeIPA, { nullable: false })
    freeipa: FreeIPA;
  @Field(() => Keycloak, { nullable: false })
    keycloak: Keycloak;
}
