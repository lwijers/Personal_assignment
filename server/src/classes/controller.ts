import { JsonController, Post, Put, Param, Get, Body, HttpCode, NotFoundError } from 'routing-controllers'
import Batch from './entity';
import Student from '../students/entity'


@JsonController()
export default class ClassesController {

    @Post('/classes')
@HttpCode(201)
async createbatches(
  @Body() batch : Batch
) {
  return await batch.save()
}



@Put('/classes/:id')
async updatePage(
  @Param('id') id: number,
  @Body() update: Partial<Batch>
) {
  const batch = await Batch.findOne(id)

  if (!batch) throw new NotFoundError('Cannot find student')

  return Batch.merge(batch, update).save()
}

@Get('/classes/:id([0-9]+)')
  getbatch(
    @Param('id') id: number
  ) {
    return Batch.findOne(id)
  }

  @Get('/classes/giveAll')
    async allbatches() {
    console.log( 'afagfsg')
    const classes = [await Batch.find()]
    return { classes }
  }

  @Get('/getClass/:batchID([0-9]+)')
  getStudentsByBatch(
    @Param('batchID') batchID: number
  ) {
    return Student.find({where :{batch: batchID}})
  }

  @Get('/class/askRandom/:batchID([0-9]+)')
  async askRandom(
    @Param('batchID') batchID: number
  ) {
      const students = await Student.find({where :{batch: batchID}})
      
      students.map((student) => {

    })
  }

}