import React from 'react'
import routes from './routes/Routes'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        {routes.map((entry, index) => {return (<Route key={index+1} {...entry}/>)})}
      </Switch>
    </div>
  </BrowserRouter>

  );
}

export default App;
