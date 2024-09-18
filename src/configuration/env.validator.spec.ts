// Valid configuration returns validated configuration object
import { envValidator } from "./env.validation";

describe("Validator", () => {

  it('should return validated configuration object when provided with valid configuration', () => {
    const validConfig = {
      NODE_ENV: 'production',
      DATASOURCE_USERNAME: 'user',
      DATASOURCE_PASSWORD: 'password',
      DATASOURCE_DATABASE: 'database',
      DATASOURCE_HOST: 'localhost',
      DATABASE_URL: 'postgres://user:password@localhost:5432/database',
      APP_PORT: 3000,
      DATASOURCE_PORT: 5432
    };

    const result = envValidator(validConfig);

    expect(result).toEqual(expect.objectContaining(validConfig));
  });

  // Valid configuration passes without errors
  it('should pass without errors when provided with a valid configuration', () => {
    const validConfig = {
      NODE_ENV: 'production',
      DATASOURCE_USERNAME: 'user',
      DATASOURCE_PASSWORD: 'password',
      DATASOURCE_DATABASE: 'database',
      DATASOURCE_HOST: 'localhost',
      DATABASE_URL: 'postgres://user:password@localhost:5432/database',
      APP_PORT: 3000,
      DATASOURCE_PORT: 5432
    };

    expect(() => envValidator(validConfig)).not.toThrow();
  });

  // Missing required environment variables
  it('should throw an error when required environment variables are missing', () => {
    const invalidConfig = {
      NODE_ENV: 'production',
      DATASOURCE_USERNAME: 'user',
      DATASOURCE_PASSWORD: 'password',
      DATASOURCE_DATABASE: 'database',
      DATASOURCE_HOST: 'localhost',
      DATABASE_URL: 'postgres://user:password@localhost:5432/database',
      APP_PORT: 3000
    };
    expect(() => envValidator(invalidConfig)).toThrow("not valid environment variable found");
    //expect(() => envValidator(invalidConfig)).toThrowError("not valid environment variable found");
  });

  // Missing required environment variables
  it('should throw an error when required environment variables are missing', () => {
    const invalidConfig = {
      NODE_ENV: 'production',
      DATASOURCE_USERNAME: 'user',
      // Missing DATASOURCE_PASSWORD
      DATASOURCE_DATABASE: 'database',
      DATASOURCE_HOST: 'localhost',
      DATABASE_URL: 'postgres://user:password@localhost:5432/database',
      APP_PORT: 3000,
      DATASOURCE_PORT: 5432
    };

    expect(() => envValidator(invalidConfig)).toThrow('1 not valid environment variable found');
  });

  // Environment variables with incorrect data types
  it('should throw an error when environment variables have incorrect data types', () => {
    const invalidConfig = {
      NODE_ENV: 'production',
      DATASOURCE_USERNAME: 'user',
      DATASOURCE_PASSWORD: 'password',
      DATASOURCE_DATABASE: 'database',
      DATASOURCE_HOST: 'localhost',
      DATABASE_URL: 'postgres://user:password@localhost:5432/database',
      APP_PORT: 'not-a-number',
      DATASOURCE_PORT: 5432
    };

    expect(() => envValidator(invalidConfig)).toThrowError(/not valid environment variable found/);
  });

  // Environment variables with incorrect types
  it('should throw an error when environment variables have incorrect types', () => {
    const invalidConfig = {
      NODE_ENV: 'production',
      DATASOURCE_USERNAME: 'user',
      DATASOURCE_PASSWORD: 'password',
      DATASOURCE_DATABASE: 'database',
      DATASOURCE_HOST: 'localhost',
      DATABASE_URL: 'postgres://user:password@localhost:5432/database',
      APP_PORT: 'not-a-number', // Incorrect type
      DATASOURCE_PORT: 5432
    };

    expect(() => envValidator(invalidConfig)).toThrow('1 not valid environment variable found');
  });
})

