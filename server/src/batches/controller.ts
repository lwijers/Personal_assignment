import { JsonController, Post, Put, Param, Get, Body, HttpCode, NotFoundError } from 'routing-controllers'
import Batch from './entity';

@JsonController()
export default class BatchesController {

    @Post('/batches')
@HttpCode(201)
createbatches(
  @Body() batch : Batch
) {
  return batch.save()
}

@Put('/batches/:id')
async updatePage(
  @Param('id') id: number,
  @Body() update: Partial<Batch>
) {
  const batch = await Batch.findOneById(id)
  if (!batch) throw new NotFoundError('Cannot find student')

  return Batch.merge(batch, update).save()
}

@Get('/batches/:id([0-9]+)')
  getbatch(
    @Param('id') id: number
  ) {
    return Batch.findOneById(id)
  }

  @Get('/batches')
  async allbatches() {
    const batches = await Batch.find()
    return { batches }
  }

}
