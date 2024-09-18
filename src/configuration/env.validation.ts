import { IsNotEmptyString, IsPositiveInteger } from "../common/decorators/validator.decotrator";
import { plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

export class EnvironmentVariables {

  // String
  @IsNotEmptyString()
  NODE_ENV:string
  @IsNotEmptyString()
  DATASOURCE_USERNAME:string
  @IsNotEmptyString()
  DATASOURCE_PASSWORD:string
  @IsNotEmptyString()
  DATASOURCE_DATABASE:string
  @IsNotEmptyString()
  DATASOURCE_HOST:string

// Number
  @IsPositiveInteger()
  APP_PORT:number
  @IsPositiveInteger()
  DATASOURCE_PORT:number
  @IsPositiveInteger()
  DATABASE_URL:number
}


export function envValidator(providedConfig:Record<string, unknown> ){
  const validatedConfig = plainToInstance(EnvironmentVariables,providedConfig,{
    enableCircularCheck:true
  })

  const errors = validateSync(validatedConfig, {
    skipMissingProperties:false
  })

  if (errors.length > 0) {
    throw new Error(`${errors.length} not valid environment variable found`)
  }

  return validatedConfig;
}
