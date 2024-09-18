import { ConfigService } from "@nestjs/config";

export const databaseDevConfig = (configService:ConfigService) => ({
    type: "postgres",
    host: configService.getOrThrow<string>('DATASOURCE_HOST'),
    port: configService.getOrThrow<number>('DATASOURCE_PORT'),
    username: configService.getOrThrow<string>('DATASOURCE_USERNAME'),
    password: configService.getOrThrow<string>('DATASOURCE_PASSWORD'),
    database: configService.getOrThrow<string>('DATASOURCE_DATABASE'),
    synchronize: true,
    logging: true,
    entities: [],}
)
