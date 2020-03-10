/* Business logic implemented with infrastructure specific modules */
import { getEntity, putEntity } from '../repositories/domain.repository';
import DomainModel from '../models/domain.model';

export const domainGet = async id => {
  const rawData = await getEntity(id);
  const entity = new DomainModel(rawData);
  return entity.view();
};

export const domainPut = async newData => {
  const entity = (new DomainModel()).fromInput(newData);
  await putEntity(entity);
  return entity.view();
};
