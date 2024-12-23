import { Field, ObjectType } from "@nestjs/graphql";
import { Gamemode } from "./gamemode";
import { Wayland } from "./wayland";

@ObjectType()
export class Desktop {
  @Field(() => Gamemode, { nullable: false })
    gamemode: Gamemode;

  @Field(() => Wayland, { nullable: false })
    wayland: Wayland;
}