import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/course_actions';

class CoursesPage extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      course: {title: "hello world"}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    this.setState({course: {title: event.target.value }});
  }

  onClickSave(event){
    this.props.createCourse(this.state.course);
    this.setState({course: {title: ''}});
  }

  courseRow(course, index) {
    return <li key={index}>{course.title}</li>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <ul>
          {this.props.courses.map(this.courseRow)}
        </ul>
        <input
          type="text"
          value={this.state.course.title}
          onChange={this.onTitleChange} />
        <input
          value="Submit"
          type="submit"
          className="btn"
          onClick={this.onClickSave} />

      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
