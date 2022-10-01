import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Url {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({
        description: 'Id de la url',
        example: 'd8755db1-5d53-41e4-98e7-33b9ea0f607c'
    })
    id: string;

    @Column()
    @ApiProperty({
        description: 'Label de la imagen',
        example: 'Imagen de un fantasma con gafas'
    })
    label: string;

    @Column({
        unique: true
    })
    @ApiProperty({
        description: 'Url de la imagen',
        example: 'https://images.unsplash.com/photo-1664548726466-926d0ebea808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
    })
    url: string;
}
