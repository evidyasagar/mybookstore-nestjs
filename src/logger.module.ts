import { Module, DynamicModule } from '@nestjs/common';
import { LoggerModuleOptions, LoggerModuleAsyncOptions } from './interfaces';
import { LoggerCoreModule } from './log-core.modules';

@Module({})
export class LoggerModule {
  static forRoot(options: LoggerModuleOptions = {}): DynamicModule {
    return {
      module: LoggerModule,
      imports: [LoggerCoreModule.forRoot(options)],
    };
  }

  static forRootAsync(options: LoggerModuleAsyncOptions): DynamicModule {
    return {
      module: LoggerModule,
      imports: [LoggerCoreModule.forRootAsync(options)],
    };
  }
}