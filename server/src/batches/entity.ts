import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
// import { MinLength, IsString} from 'class-validator';


@Entity()
export default class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('date', {nullable:false})
  startDate: Date

  @Column('date', {nullable:false})
  endDate: Date

}
