import { IsString } from 'class-validator';

export class CreateMessageDto {
    @IsString() //decorator for asegure the prop is string
    content: string;
}