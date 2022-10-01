import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create( AppModule );

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('My Unsplash')
    .setDescription('Documentacion detallada de cada endpoint de la API de My Unsplash.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument( app, config );
  SwaggerModule.setup( 'docs', app, document );

  await app.listen( process.env.PORT );
  console.log(`App running in port ${ process.env.PORT }`);
}
bootstrap();
