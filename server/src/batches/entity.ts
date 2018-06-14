import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IsNumber } from 'class-validator';


@Entity()
export default class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsNumber()
  @Column('integer')
  batchNumber: number

  @Column('date', {nullable:false})
  startDate: Date

  @Column('date', {nullable:false})
  endDate: Date

}


// insert into batchs (start_date, end_date) values
// 	('2011-10-10', '2011-10-11'),
// 	('2011-10-10', '2011-10-11')
