import React, { Component } from 'react'
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppComponent from './AppComponent';
import AppContent from './AppContent';

class App extends Component {
  render() {

    const message = "Hello World from React"
    const name = "Mayur"
   
    const footerProps = {
      website: "http://www.sapient.com",
      company: "Publicis Sapient",
      year: 2019
    }

    return (
      <div className="App">
        <AppHeader company="Publicis Sapient" createdBy="Mayur" />

        <AppComponent />
        <AppContent />
        {/* <div>
          <h1>{message}, {name}</h1>
          <h2>This is from ReactJS</h2>
        </div> */}
        <AppFooter {...footerProps}/>
      </div>
    );
  }
}
export default App