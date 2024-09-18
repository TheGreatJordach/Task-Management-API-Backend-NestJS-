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
  @IsNotEmptyString()
  DATABASE_URL:string

// Number
  @IsPositiveInteger()
  APP_PORT:number
  @IsPositiveInteger()
  DATASOURCE_PORT:number

}

/**
 * Validates the provided configuration object against the `EnvironmentVariables` class schema.
 * Converts the provided configuration object to an instance of `EnvironmentVariables` using `plainToInstance`.
 * Validates the converted instance using `validateSync` from class-validator.
 * If any validation errors are found, throws an error with the number of invalid environment variables.
 * @param providedConfig The configuration object to validate
 * @returns The validated configuration object as an instance of `EnvironmentVariables`
 * @throws Error if any environment variable is invalid
 */
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
