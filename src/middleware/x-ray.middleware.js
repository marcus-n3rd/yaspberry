import initXray from './initXray';

function xrayMiddleware() {
  return {
    before: (handler, next) => {
      initXray();

      return next();
    },
  };
}

export default xrayMiddleware;
