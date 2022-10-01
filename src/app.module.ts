import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { JoiValidationSchema } from './config';
import { UrlModule } from './url/url.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join( __dirname, '..', 'public'),
    }),
    ConfigModule.forRoot({
      validationSchema: JoiValidationSchema
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UrlModule
  ],
})
export class AppModule {}
