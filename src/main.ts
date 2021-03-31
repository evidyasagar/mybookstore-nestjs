import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino-logger';
const opentelemetry = require('@opentelemetry/api');
const jaegerHost = process.env.JAEGER_HOST || "localhost";
const logger = require("pino")();
//const tracer = require("./tracer")("sample_app", jaegerHost, logger);

const port = 3000


async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: new Logger(),
  });
  await app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});

}
bootstrap();
