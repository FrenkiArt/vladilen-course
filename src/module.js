console.log('Hello from module.js');

/**
 * It just test
 * @params {int} test - some number
 * @return {int} sum of test and 10
 */
async function start() {
  return await Promise.resolve('async working');
}

start().then(console.log);
