import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateResponseInput } from './domain/ports/create-response.input';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('response')
  createResponse(@Body() createResponseInput: CreateResponseInput): any {
    this.appService.createResponse(createResponseInput);
  }

  @Get('export')
  exportResponses(): any {
    return 'This action exports all responses';
  }
}
