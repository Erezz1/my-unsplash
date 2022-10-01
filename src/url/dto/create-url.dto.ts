import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, MinLength, MaxLength } from 'class-validator';

export class CreateUrlDto {
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    @ApiProperty({
        description: 'Label de la imagen',
        example: 'Imagen de un fantasma con gafas'
    })
    label: string;

    @IsString()
    @IsUrl()
    @ApiProperty({
        uniqueItems: true,
        description: 'Url de la imagen',
        example: 'https://images.unsplash.com/photo-1664548726466-926d0ebea808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
    })
    url: string;
}
