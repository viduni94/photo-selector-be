const context = {};

export const setContext = (values) => {
  Object.keys(values).forEach((key) => (context[key] = values[key]));
};

const log = (message) => {
  console.log(
    JSON.stringify({
      timestamp: new Date().toUTCString(),
      application: 'Photo-Selector-BE',
      correlationId: context.correlationId,
      message: message,
    }),
  );
};

export default log;
