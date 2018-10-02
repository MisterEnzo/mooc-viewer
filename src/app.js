import React, {PropTypes} from 'react';

class App extends from React {
  render() {
    return(
      <div>
        <p>Header here...</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
