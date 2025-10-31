import { CreateResponseInput } from 'src/domain/ports/create-response.input';
import { ResponseRepository } from '../domain/ports/response.repository';
import { PrismaService } from './prisma-service';
import { Injectable } from '@nestjs/common';
import { GetResponsesDto } from 'src/domain/get-responses.dto';
import {
  Q1Option as PQ1,
  Q2Option as PQ2,
  Q3Option as PQ3,
  Q4Option as PQ4,
  Q5Option as PQ5,
} from '@prisma/client';

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
        q1: data.q1,
        q2: data.q2,
        q3: data.q3,
        q4: data.q4,
        q5: data.q5,
      };
      await this.prismaService.response.create({ data: payload });
      return Promise.resolve();
    } catch (error) {
      console.error('Error creating response:', error);
      throw error;
    }
  }

  async getResponses(): Promise<GetResponsesDto> {
    const totalSubmissions = await this.prismaService.response.count();

    type QuestionField = 'q1' | 'q2' | 'q3' | 'q4' | 'q5';

    const group = async (field: QuestionField) => {
      const rows = await this.prismaService.response.groupBy({
        by: [field],
        _count: { _all: true },
      });
      return rows.map((r) => ({
        key: r[field] as string,
        count: r._count._all,
      }));
    };
    const enumKeys = <T extends Record<string, string>>(e: T) =>
      Object.keys(e) as (keyof T)[];

    const normalize = <T extends Record<string, string>>(
      data: { key: string; count: number }[],
      prismaEnum: T,
      labelEnum?: Record<keyof T, string>, 
    ) => {
      return enumKeys(prismaEnum).map((k) => ({
        option: labelEnum ? labelEnum[k] : (k as string),
        count: data.find((d) => d.key === (k as string))?.count ?? 0,
      }));
    };
    const [q1, q2, q3, q4, q5] = await Promise.all([
      group('q1'),
      group('q2'),
      group('q3'),
      group('q4'),
      group('q5'),
    ]);
    // uso:
    return {
      totalSubmissions,
      questions: [
        {
          key: 'q1',
          totals: normalize(q1, PQ1 /* , LabelQ1Option si quieres texto */),
        },
        { key: 'q2', totals: normalize(q2, PQ2) },
        { key: 'q3', totals: normalize(q3, PQ3) },
        { key: 'q4', totals: normalize(q4, PQ4) },
        { key: 'q5', totals: normalize(q5, PQ5) },
      ],
    };
  }
}
