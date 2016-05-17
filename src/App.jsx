import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return (
        <div>
            <h1>React Boilerplate</h1>
            {/*Application body*/}
        </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

render(<App />, document.querySelector('#app'));
