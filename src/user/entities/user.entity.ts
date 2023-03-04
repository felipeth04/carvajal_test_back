/* eslint-disable prettier/prettier */
import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm'

@Entity('posts')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 100})
  firstName!: string;

  @Column({type: 'varchar', length: 100})
  SecondName!: string;

  @Column({type: 'varchar', length: 150})
  email!: string;

  @Column({type: 'varchar', length: 50})
  phone!: string;

  @Column({type: 'varchar', length: 200})
  address: string;

  @Column({type: 'varchar', length: 50})
  homePhone: string;

  @Column({type: 'simple-array'})
  tags: string[];

  @CreateDateColumn({type: 'timestamp'})
  createdAt: Date
}