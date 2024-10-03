import { expect, test } from '@jest/globals';
import { taskFirst, taskNext } from './0-constants.js';

test('tasks are correctly defined', () => {
  expect(`${taskFirst()} ${taskNext()}`).toBe('I prefer const when I can. But sometimes let is okay');
});
