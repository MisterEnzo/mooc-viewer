import * as types from './action_types';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
