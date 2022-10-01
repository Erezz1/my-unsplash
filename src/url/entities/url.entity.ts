import { PrimaryGeneratedColumn, Column, Entity, BeforeInsert } from 'typeorm';

@Entity()
export class Url {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    label: string;

    @Column({
        unique: true
    })
    url: string;
}
