import { CreateResponseInput } from 'src/domain/ports/create-response.input';
import { ResponseRepository } from '../domain/ports/response.repository';
import { PrismaService } from './prisma-service';
import { Q1Option, Q2Option, Q3Option, Q4Option, Q5Option } from 'generated/prisma/enums';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaResponseRepository implements ResponseRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateResponseInput): Promise<void> {
    try {
      const payload: any = {
        clientHash: null,
        name: data.name,
        email: data.email,
        career: data.career,
        q1: Q1Option[data.q1],
        q2: Q2Option[data.q2],
        q3: Q3Option[data.q3],
        q4: Q4Option[data.q4],
        q5: Q5Option[data.q5],
      };
      await this.prismaService.response.create({ data: payload });
      return Promise.resolve();
    } catch (error) {
      console.error('Error creating response:', error);
      throw error;
    }
  }

  async getResponses(): Promise<any[]> {
    throw new Error('Method not implemented.');
  }
}
