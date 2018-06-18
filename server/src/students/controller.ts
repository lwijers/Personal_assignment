import { JsonController, Post, Put, Param, Get, Body, HttpCode, NotFoundError, Delete } from 'routing-controllers'
import Student from './entity';

@JsonController()
export default class StudentController {

    @Post('/student/createNew')
@HttpCode(201)
createStudent(
  @Body() student: Student
) {
  return student.save()
}

@Put('/students/:id')
async updatePage(
  @Param('id') id: number,
  @Body() update: Partial<Student>
) {
  const student = await Student.findOne(id)
  if (!student) throw new NotFoundError('Cannot find student')

  return Student.merge(student, update).save()
}
  @Get('/students')
  async allStudents() {
    const students = await Student.find()
    return { students }
  }

  @Get('/class/:batchID([0-9]+)')
  getStudentsByBatch(
    @Param('batchID') batchID: number
  ) {
    return Student.find({where :{batch: batchID}})
  }
  
  @Get('/students/getRandom/:color')
  async getrandomStudentByColor( 
    @Param('color') color: string ) {
      const students = await Student.find({where :{colorCode: color}})
      console.log(students, color)
      var randStud = students[Math.floor(Math.random() * students.length)];
      console.log(randStud)
      return randStud
      
    }

    @Delete('/student/deleteStudent/:id([0-9]+)')
    async deleteStudent(
      @Param('id') id: number
      ) {
        const stud = await Student.findOne(id)
        console.log(stud)
        if (!stud) throw new NotFoundError("Student doesn't exist")
        
        await Student.remove(stud)
      }
    
    

}

  



// @Get('/students/:id([0-9]+)')
//   getStudents(
//     @Param('id') id: number
//   ) {
//     return Student.findOneById(id)
//   }


