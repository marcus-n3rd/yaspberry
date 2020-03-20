import supertest from 'supertest';
import * as stack from '../../bnd/aws-sdk/cfStack';

let serviceUrl;
describe('/domains/{id} PUT', () => {
  beforeAll(async () => {
    serviceUrl = await stack.getServiceEndpoint();
  });

  describe('happy paths', () => {
    it('send one', async () => {
      const id = '123';
      const entity = {};
      let type;

      type = 'Arbitrary Type';
      entity.type = type;

      let response = await supertest(serviceUrl)
        .put(`/domains/${id}`)
        .send(entity)
        .set('Accept', 'application/json');

      expect(response.status).toEqual(200);
      expect(response.body.type).toEqual(type);

      // Now, test that it can change
      type = 'Arbitrary Type 2';
      entity.type = type;

      response = await supertest(serviceUrl)
        .put(`/domains/${id}`)
        .send(entity)
        .set('Accept', 'application/json');

      expect(response.status).toEqual(200);
      expect(response.body.type).toEqual(type);
    });
  });
});
