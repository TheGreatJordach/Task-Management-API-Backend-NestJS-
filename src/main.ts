import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { OpenAPIObject, SwaggerModule } from "@nestjs/swagger";
import { swaggerConfig } from "./configuration/swagger-config.document";



declare const module : any
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService)


  //Create Swagger document and setup the Swagger UI
  const document: OpenAPIObject = SwaggerModule.createDocument(app,swaggerConfig);
  const swaggerPath: string = configService.get<string>("SWAGGER_PATH") || "specs"
  SwaggerModule.setup(swaggerPath,app,document)

   if (module.hot) {
     module.hot.accept();
     module.hot.dispose(
       () => app.close()
     );
   }
  const apiPrefix:string = configService.get<string>("API_PREFIX")
  const port = configService.get<number>('APP_PORT')
  app.setGlobalPrefix(apiPrefix);
  await app.listen(port);
}
bootstrap()
