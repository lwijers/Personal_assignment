import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm'

import { MinLength, IsString } from 'class-validator';
import Batch from '../classes/entity'
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


// [
//   {
//       "name": "Justine Bateman",
//       "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjg4NDVmMzUtOWU4OC00ZDNmLWFjMWYtYmMwYjI0NzZjNGE2XkEyXkFqcGdeQXVyMzMwMDIwMA@@._V1_UY256_CR26,0,172,256_AL_.jpg"
//   },
//   {
//       "name": "Victoria Roach",
//       "photo": "https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?h=350&auto=compress&cs=tinysrgb"
//   },
//   {
//       "name": "Tzvi Blackman",
//       "photo": "https://images.pexels.com/photos/36479/man-stress-male-face.jpg?h=350&auto=compress&cs=tinysrgb"
//   },
//   {
//       "name": "Spencer Horton",
//       "photo": "https://d3iw72m71ie81c.cloudfront.net/male-64.jpg"
//   },
//   {
//       "name": "Olivia Munn",
//       "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2OTMyNTczMV5BMl5BanBnXkFtZTcwNDc5MzIzMw@@._V1_UY256_CR13,0,172,256_AL_.jpg"
//   },
//   {
//       "name": "Corey Feldman",
//       "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MDg0OTE0MV5BMl5BanBnXkFtZTcwNDY4OTg3MQ@@._V1_UY256_CR5,0,172,256_AL_.jpg"
//   },
//   {
//       "name": "Haley Joel Osment",
//       "photo": "https://images-na.ssl-images-amazon.com\images\M\MV5BZjY0MjRhNjEtNGVlYi00YzZhLWFhNDEtMjlhNjBiNzM3Y2RkXkEyXkFqcGdeQXVyMjQxMDQzMjA@._V1_UY256_CR84,0,172,256_AL_.jpg"
//   },
//   {
//       "name": "Matthew McConaughey",
//       "photo": "https:\\images-na.ssl-images-amazon.com\images\M\MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_UX172_CR0,0,172,256_AL_.jpg"
//   },
//   {
//       "name": "Lenny Kravitz",
//       "photo": "http://pbs.twimg.com/profile_images/1006244522332848145\/k5DYj360.jpg"
//   },
//   {
//       "name": "Gerard Butler",
//       "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4NDMwMzc4Ml5BMl5BanBnXkFtZTcwMDg4Nzg4Mg@@._V1_UY256_CR5,0,172,256_AL_.jpg"
//   },
//   {
//       "name": "Daphne Sterling",
//       "photo": "https://d3iw72m71ie81c.cloudfront.net/female-7.jpg"
//   },
//   {
//       "name": "Eliza Dushku",
//       "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNjM1OTc4MF5BMl5BanBnXkFtZTcwNDAzNzAzNA@@._V1_UY256_CR66,0,172,256_AL_.jpg"
//   },
//   {
//       "name": "M\u00c3\u00b3nica Ivonne",
//       "photo": "http://pbs.twimg.com/profile_images/643285411020718080/XYVACZHF.jpg"
//   },
//   {
//       "name": "eve leroy",
//       "photo": "https://randomuser.me/api/portraits/women/78.jpg"
//   },
//   {
//       "name": "Reyna Chung",
//       "photo": "https://images.unsplash.com/photo-1485960994840-902a67e187c8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=15adf15fac1de6fef639652034dce57a"
//   },
//   {
//       "name": "Mattie Leon",
//       "photo": "https://d3iw72m71ie81c.cloudfront.net/female-84.jpg"
//   },
//   {
//       "name": "Sami Glenn",
//       "photo": "https://d3iw72m71ie81c.cloudfront.net/male-87.jpg"
//   },
//   {
//       "name": "Brie Larson",
//       "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExODkxODU3NF5BMl5BanBnXkFtZTgwNTM0MTk3NjE@._V1_UY256_CR6,0,172,256_AL_.jpg"
//   },
//   {
//       "name": "Emma Watson",
//       "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3ODE2NTMxMV5BMl5BanBnXkFtZTgwOTIzOTQzMjE@._V1_UY256_CR18,0,172,256_AL_.jpg"
//   },
//   {
//       "name": "rosa lawson",
//       "photo": "https://randomuser.me/api/portraits/women/75.jpg"
//   }
// ]