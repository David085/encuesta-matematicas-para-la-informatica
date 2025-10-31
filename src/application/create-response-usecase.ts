import { EmailValidator } from 'src/domain/email.validator';
import { CreateResponseInput } from 'src/domain/ports/create-response.input';
import { ResponseRepository } from 'src/domain/ports/response.repository';

export class CreateResponseUseCase {
  constructor(private readonly responseRepository: ResponseRepository) {}

  async execute(response: CreateResponseInput): Promise<void> {
    if (!EmailValidator.isValid(response.email)) {
      throw new Error('Invalid email format');
    }
    
    response.email = EmailValidator.toLowerCase(response.email);
    await this.responseRepository.create(response);
  }
}
