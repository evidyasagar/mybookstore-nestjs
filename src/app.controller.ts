import { Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';
import { Log } from 'nestjs-pino-logger';
import { Logger } from 'pino';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Log() log: Logger): string {
    log.info('logging from appcontroller');
    return this.appService.getHello();
  }
}
