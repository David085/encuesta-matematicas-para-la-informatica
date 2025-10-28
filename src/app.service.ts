import { Injectable } from "@nestjs/common";
import { CreateResponseUseCase } from "./application/create-response-usecase";
import { CreateResponseInput } from "./domain/ports/create-response.input";

@Injectable()
export class AppService {
    constructor(private readonly createResponseUseCase: CreateResponseUseCase) {}

    createResponse(createResponseInput: CreateResponseInput) {
        this.createResponseUseCase.execute(createResponseInput);
    }
}