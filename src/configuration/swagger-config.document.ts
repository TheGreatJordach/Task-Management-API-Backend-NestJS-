import { DocumentBuilder } from "@nestjs/swagger";
import { licence, swaggerServer, swaggerTitle } from "./swagger.const";

export const swaggerConfig = new DocumentBuilder()
  .setLicense("MIT",licence)
  .addServer(swaggerServer)
  .setTitle(swaggerTitle)
  .setVersion("1.0")
  .setDescription("API documentation for Task Management app")
  .build()
