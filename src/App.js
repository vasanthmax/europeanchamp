import Widget1 from './components/widget1';
import Widget2 from './components/widget2';
import Widget3 from './components/widget3';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Widget1} exact />
          <Route path='/sport/:id' component={Widget2} />
          <Route path='/date/:id' component={Widget3}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
