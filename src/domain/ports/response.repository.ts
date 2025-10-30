import { GetResponsesDto } from "../get-responses.dto";
import { CreateResponseInput } from "./create-response.input";

export interface ResponseRepository {
    create(data: CreateResponseInput): Promise<void>;
    getResponses(): Promise<GetResponsesDto>;
}