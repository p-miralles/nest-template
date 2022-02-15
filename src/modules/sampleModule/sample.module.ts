import { Module } from '@nestjs/common';
import { SampleController } from './controllers/sample.controller';
import { SampleService } from './services/sample.service';

@Module({
  imports: [],
  providers: [SampleService],
  controllers: [SampleController],
})
export class SampleModule {}
