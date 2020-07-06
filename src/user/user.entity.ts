import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid') id: string

    @Column('varchar', {unique: true})
    name: string

    @Column('varchar')
    password: string

    @Column('varchar', {unique: true})
    email: string   
}