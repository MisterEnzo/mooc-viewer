import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import HomePage from './components/home/home_page';
import CoursesPage from './components/courses/courses_page';
import AboutPage from './components/about/about_page';
import ManageCoursePage from './components/courses/manage_course_page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
