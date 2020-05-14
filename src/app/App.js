import React, {Component, Fragment} from 'react';
import { Header, HolyGrail, Footer } from '../layouts'

class App extends Component {
  render(){
    return (
      <Fragment>
        <Header />
        <HolyGrail />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
