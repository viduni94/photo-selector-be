import log from './logger';

const setupContext = (req, res, next) => {
  if (req.header['correlationid']) {
    log.setContext({
      correlationId: req.header['correlationid'],
    });
  }
  next();
};

export default setupContext;
