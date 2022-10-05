import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';

export class FindAllUrlDto {
    @IsOptional()
    @IsInt()
    @Min(0)
    @Transform(({ value }) => parseInt( value ))
    @ApiProperty({
        description: 'Offset para la paginacion',
        default: 0
    })
    offset?: number;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Transform(({ value }) => parseInt( value ))
    @ApiProperty({
        description: 'Limite de imagenes por peticion',
        default: 10
    })
    limit?: number;

    @IsOptional()
    @ApiProperty({
        description: 'Busqueda por label o id',
    })
    search?: string;
}
