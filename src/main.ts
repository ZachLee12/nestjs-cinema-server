import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as morgan from 'morgan'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'))
  const config = new DocumentBuilder()
    .setTitle('NestJS Cinema Server')
    .setDescription('SWENG Project backend rewritten with NestJS')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
    .build();


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document)
  app.enableCors({ origin: "http://localhost:4200" })
  await app.listen(3000);
}
bootstrap();
