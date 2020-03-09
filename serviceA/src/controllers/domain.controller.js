import logger from '../services/logging.service';
import { getEntity, putEntity } from '../repositories/domain.repository';
import { somethingGet, somethingWrite } from '../../business/controllers/domain.controller.clientName';

export const endpoint100GetHandler = async (arbitraryValue, secret) => {
  logger.debug(`Arbitrary value`, { arbitraryValue });
  logger.debug(`Arbitrary secret`, { secret });
  const rawData = getEntity(arbitraryValue);
  return somethingGet(rawData);
};

export const endpoint100PutHandler = async arbitraryValue => {
  logger.debug(`Arbitrary value`, { arbitraryValue });
  const rawData = getEntity(arbitraryValue);
  const newEntity = somethingWrite(rawData); // Preps, doesn't write
  return putEntity(newEntity);
};
