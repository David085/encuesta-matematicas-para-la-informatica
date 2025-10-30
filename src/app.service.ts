import { Injectable } from '@nestjs/common';
import { CreateResponseUseCase } from './application/create-response-usecase';
import { CreateResponseInput } from './domain/ports/create-response.input';
import { RetreiveDataUsecase } from './application/retrieve-data-usecase';

@Injectable()
export class AppService {
  constructor(
    private readonly createResponseUseCase: CreateResponseUseCase,
    private readonly retrieveDataUsecase: RetreiveDataUsecase,
  ) {}

  createResponse(createResponseInput: CreateResponseInput) {
    this.createResponseUseCase.execute(createResponseInput);
  }

  getResponses() {
    return this.retrieveDataUsecase.execute();
  }
}
