import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";

declare const module : any
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   if (module.hot) {
     module.hot.accept();
     module.hot.dispose(
       () => app.close()
     );
   }

  const configService = app.get(ConfigService)
  const port = configService.get<number>('APP_PORT')
  await app.listen(port);
}
bootstrap()
