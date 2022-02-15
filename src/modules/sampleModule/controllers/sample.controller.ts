import { Controller, Post, Body, ValidationPipe, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SampleService } from '../services/sample.service';
const fs = require('fs');

@ApiTags('Samples')


@Controller()
export class SampleController {
    constructor(private readonly services: SampleService) {}

    @Get('sample')
    async getSample() {
      //return await this.services.getIndicators();
      return ("sample");
    }

    
}
