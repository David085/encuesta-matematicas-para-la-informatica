import { GetResponsesDto } from "src/domain/get-responses.dto";
import { ResponseRepository } from "src/domain/ports/response.repository";

export class RetreiveDataUsecase{
    constructor(private readonly responseRepository: ResponseRepository){}

    async execute(): Promise<GetResponsesDto> {
        return await this.responseRepository.getResponses();
    }
}