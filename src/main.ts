import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const Host = "https://bloggermedia.netlify.app" 
const Server = "http://localhost:3000"


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    "origin": Host ,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  })
  await app.listen(5000);
}
bootstrap();
