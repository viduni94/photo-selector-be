import { AsyncLocalStorage } from 'async_hooks';

const context = new AsyncLocalStorage();

module.exports = context;
