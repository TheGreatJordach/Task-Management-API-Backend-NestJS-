import { IsNotEmptyString } from "../../common/decorators/validator.decotrator";
import { IsEmail, IsEnum, Length } from "class-validator";
import { UserRole } from "../entity/user-roles";

export class UserBaseDto {
  @Length(5,25)
  @IsNotEmptyString()
  readonly firstName:string
  @Length(5,25)
  @IsNotEmptyString()
  readonly lastName:string
  @IsEmail()
  readonly email:string
  @IsEnum(UserRole, { message: 'Role must be a valid UserRole (admin, user, moderator)' })
  readonly role: UserRole;  // Enforce enum validation for role
}
