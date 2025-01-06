import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Farm {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    location: string;
}