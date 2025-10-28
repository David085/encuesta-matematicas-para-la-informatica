import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateResponseUseCase } from './application/create-response-usecase';
import { ResponseRepository } from './domain/ports/response.repository';
import { PrismaResponseRepository } from './infraestructure/ResponsePrismaRepository';
import { PrismaService } from './infraestructure/prisma-service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    { provide: 'ResponseRepository', useClass: PrismaResponseRepository },
    {
      provide: CreateResponseUseCase,
      useFactory: (repo: ResponseRepository) => new CreateResponseUseCase(repo),
      inject: ['ResponseRepository'],
    },
  ],
})
export class AppModule {}
