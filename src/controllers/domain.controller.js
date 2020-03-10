/* Business logic implemented with infrastructure specific modules */
import { getEntity, putEntity } from '../repositories/domain.repository';
import DomainModel from '../models/domain.model';

export const endpoint100GetHandler = async arbitraryValue => {
  const rawData = await getEntity(arbitraryValue);
  const entity = new DomainModel(rawData);
  return entity.view();
};

export const endpoint100PutHandler = async arbitraryValue => {
  const entity = (new DomainModel()).fromInput(arbitraryValue);
  await putEntity(entity);
  return entity.view();
};
