import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";

export function IsNotEmptyString(validationOption?: ValidationOptions) {
  return function(object:object,propertyName:string) {
    registerDecorator({
      name:"IsNotEmptyString",
      target:object.constructor,
      propertyName:propertyName,
      options:validationOption,
      constraints:[],
      validator:{
        validate(value: unknown){
          return typeof value === 'string' && value.trim() !=="";
        },
        defaultMessage(validationArguments?: ValidationArguments): string {
          return `${validationArguments.property} must be a non-empty string. You provided ${validationArguments.value} to be empty.`
      }
    }

  })
}}


export function IsPositiveInteger(validationOption?: ValidationOptions) {
  return function(object:object,propertyName:string) {
    registerDecorator({
      name:"IsPositiveInteger",
      target:object.constructor,
      propertyName:propertyName,
      options:validationOption,
      constraints:[],
      validator:{
        validate(value: unknown){
          return typeof value === 'number' && value > 0
        },
        defaultMessage(arg?: ValidationArguments): string {
          return `${arg.property} must be a valid positive integer. You provided ${arg.value} which is not a valid integer.`
        }
      }
    })
  }
}
