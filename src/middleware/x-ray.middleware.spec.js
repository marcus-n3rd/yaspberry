import xrayMiddleware from './x-ray.middleware';
import initXray from './initXray';

jest.mock('./initXray');

const mockHandler = jest.fn();
const next = jest.fn();

beforeEach(() => {
  const { before } = xrayMiddleware();
  before(mockHandler, next);
});

describe('xrayMiddleware', () => {
  it('initializes Xray and runs the next method', () => {
    expect(initXray).toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
});
