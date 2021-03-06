import { JsonController, Post, Put, Param, Get, Body, HttpCode, NotFoundError } from 'routing-controllers'
import Evaluation from './entity';

@JsonController()
export default class evaluationsController {

    @Post('/evaluations')
@HttpCode(201)
createEvaluation(
  @Body() evaluation: Evaluation
) {
  
  return evaluation.save()
}

@Put('/evaluations/:id')
async updatePage(
  @Param('id') id: number,
  @Body() update: Partial<Evaluation>
) {
  const evaluation = await Evaluation.findOne(id)
  if (!evaluation) throw new NotFoundError('Cannot find student')

  return Evaluation.merge(evaluation, update).save()
}

@Get('/evaluations/:id([0-9]+)')
  getEvaluations(
    @Param('id') id: number
  ) {
    return Evaluation.findOne(id)
  }

  @Get('/evaluations')
  async allEvaluations() {
    const evaluation = await Evaluation.find()
    return { evaluation }
  }

  @Get('/studentEvaluations/:studentID([0-9]+)')
  getEvalByStudent(
    @Param('studentID') studentID: number
  ) {
    return Evaluation.find({where :{student: studentID}})
  }


// @Delete('/students/:id([0-9]+)')
// async deleteStudent(
//   @Param('id') id: number
//   ) {
//     return Student.delete(id)
//   }
}
