import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Notificaton {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    madeAt: string;
}