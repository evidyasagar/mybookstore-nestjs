import { Injectable } from '@nestjs/common';
import { LogManager } from 'nestjs-pino-logger';
import { Logger } from 'pino';
//import { LogManager } from './log-manager';

@Injectable()
export class AppService {
  private readonly log: Logger;
  constructor(logManager: LogManager){
    this.log = logManager.getLogger(AppService);
  }
  getHello(): string {
    this.log.info('fetching book gallery');
    return 'Hello BookStore World!';
  }
}
