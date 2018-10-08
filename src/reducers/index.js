import {combineReducers} from 'redux';
import courses from './course_reducer';
// note courseReducer is imported as 'courses' to be able to use shorthand
// property naming for the courses { courses: courseReducer } => { courses }


const rootReducer = combineReducers({
  courses
});

export default rootReducer;
