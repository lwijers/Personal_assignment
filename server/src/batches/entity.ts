import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { MinLength, IsString} from 'class-validator';


@Entity()
export default class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number


  @IsString()
  @Column('text')
  batchNumber: string

 
  @Column('json')
  students: string[]

}
