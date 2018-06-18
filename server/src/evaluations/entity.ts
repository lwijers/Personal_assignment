import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import {IsString, IsNumber } from 'class-validator';
import {Type} from "class-transformer";
import Student from '../students/entity'

@Entity()
export default class Evaluation extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Type(() => Date)
  @Column('text')
  date: Date

  @IsNumber()
  @Column('integer')
  score: number

  @IsString()
  @Column('text')
  remark: string
  
  @ManyToOne(type => Student, student => student.evaluations, { onDelete: 'CASCADE'})
  student: Student;

}
