/* Business logic implemented with infrastructure specific modules */
import { getEntity, putEntity } from '../repositories/domain.repository';
import DomainModel from '../models/domain.model';

export const domainGet = async id => {
  const rawData = await getEntity(id);
  const entity = new DomainModel(rawData);
  return entity.view();
};

export const domainPut = async (id, newData) => {
  const entity = new DomainModel({ id, ...newData });
  await putEntity(entity.toDatabase());
  return entity.view();
};

export const domainPost = async (id, newData) => {
  const entity = new DomainModel({ id, ...newData });
  await postEntity(entity.toDatabase());
  return entity.view();
};
