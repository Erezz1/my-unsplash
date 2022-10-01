import { IsString, IsUrl, IsOptional, MinLength, MaxLength } from 'class-validator';

export class CreateUrlDto {
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    label: string;

    @IsString()
    @IsUrl()
    url: string;

    @IsOptional()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    password: string;
}
