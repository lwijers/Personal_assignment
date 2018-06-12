import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Exclude } from 'class-transformer';
import { MinLength, IsString, IsEmail, IsNumber } from 'class-validator';


@Entity()
export default class Student extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number
 
  @Column('integer')
  batchID: number
  
  @IsString()
  @MinLength(2)
  @Column('text')
  firstName: string

  @IsString()
  @MinLength(2)
  @Column('text')
  lastName: string

  @IsEmail()
  @Column('text')
  email: string

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
