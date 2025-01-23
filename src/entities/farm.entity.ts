import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Farm {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    location: string;

    @Column()
    size: number;

    @ManyToOne(() => User, (user) => user.farms, { eager: false} )
    user: User;
}