/* eslint-disable prettier/prettier */
import { hash } from 'bcryptjs';
import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn, BeforeInsert, BeforeUpdate} from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 100})
  firstName: string;

  @Column({type: 'varchar', length: 100})
  SecondName: string;

  @Column({ type: 'varchar', length: 100 })
  lastName: string;

  @Column({type: 'varchar', length: 150})
  email: string;

  @Column({type: 'varchar', length: 50})
  phone: string;

  @Column({type: 'varchar', length: 128, nullable: false, select: false})
  password: string

  @Column({type: 'bool', default: true})
  status: boolean

  @CreateDateColumn({name:'created_at',type: 'timestamp'})
  createdAt: Date

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(){
    if(!this.password){
      return
    }
    this.password = await hash(this.password,10)
  }

}
