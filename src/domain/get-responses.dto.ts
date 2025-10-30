export type QuestionKey = 'q1' | 'q2' | 'q3' | 'q4' | 'q5';


export class GetResponsesDto {
    totalSubmissions: number;
    questions: { key: QuestionKey; totals: { option: string; count: number }[] }[];
}