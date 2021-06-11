import log from './logger';

// Attach a unique ID to async requests
const setupContext = (req, res, next) => {
  if (req.header['correlationid']) {
    log.setContext({
      correlationId: req.header['correlationid'],
    });
  }
  next();
};

export default setupContext;
