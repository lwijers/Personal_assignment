import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm'
import {IsString, IsNumber } from 'class-validator';
import {Type} from "class-transformer";


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

}



  // @IsString()
  // @MinLength(8)
  // @Column('text')
  // @Exclude({ toPlainOnly: true })
  // password: string

  
  // this is a relation, read more about them here:
  // http://typeorm.io/#/many-to-one-one-to-many-relations
//   @OneToMany(_ => Player, player => player.user) 
//   players: Player[]



// studentId=1 color='red' remark='blablabla'