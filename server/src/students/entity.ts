import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm'

import { MinLength, IsString } from 'class-validator';
import Batch from '../batches/entity'
import Evaluation from '../evaluations/entity'

@Entity()
export default class Student extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  pictureURL: string

  @IsString()
  @MinLength(2)
  @Column('text')
  firstName: string

  @IsString()
  @MinLength(2)
  @Column('text')
  lastName: string


  @ManyToOne(type => Batch, batch => batch.students)
  batch: Batch;

  @OneToMany(type => Evaluation, evaluation => evaluation.student)
  evaluations: Evaluation[];

  // http POST  :4000/students pictureURL="https://d3iw72m71ie81c.cloudfront.net/male-57.jpg" firstName="Test2 " lastName="test2" email="test2@test2.test"
// 

  // @IsString()
  // @MinLength(8)
  // @Column('text')
  // @Exclude({ toPlainOnly: true })
  // password: string

  
  // this is a relation, read more about them here:
  // http://typeorm.io/#/many-to-one-one-to-many-relations
//   @OneToMany(_ => Player, player => player.user) 
//   players: Player[]
}
