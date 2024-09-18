import { Type } from "class-transformer";
import { IsPositive } from "class-validator";

export class IdDto {
  @Type(() => Number)
  @IsPositive()
  readonly id: number;
}
