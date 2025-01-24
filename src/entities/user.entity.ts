import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Farm } from "./farm.entity";
import { Message } from "./message.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Farm, (farm) => farm.user, {eager: true})
    farms: Farm[];

    @OneToMany(() => Message, (message) => message.sender )
    sentMessages: Message[];

    @OneToMany(() => Message, (message) => message.receiver )
    receivedMessages: Message[]
}