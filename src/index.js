import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from  'react-router-dom';

// components
import Home from './components/home';
import Artist from './components/artist';
import FormsComponent from './components/formsComponent';
import HooksComponent from './components/hooksComponent';

const App = () =>{
  return(
    <BrowserRouter>
      <Fragment>
          <Route exact path="/" component={Home}/>
          <Route path="/artist/:artistid" component={Artist}/>
          <Route exact path="/forms" component={FormsComponent}/>
          <Route exact path="/hooks" component={HooksComponent}/>
      </Fragment>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));