import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/course_actions';
import CourseForm from './course_form';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };
  }

  render() {
    return (
      <CourseForm
        allAuthors={[]}
        course={this.state.course}
        errors={this.state.errors} />
    );
  }
}

ManageCoursePage.propTypes = {

};

function mapStateToProps(state, ownProps) {
  let course = {id: '', watchHref: '', title: '', authorId: '',
                length: '', category: ''}
  return {
    course: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
