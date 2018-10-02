import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Administration</h1>
        <p>React, Redux and React Router..</p>
        <Link to="about" className="btn">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
