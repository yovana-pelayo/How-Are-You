import { Switch, Route } from 'react-router-dom';
import List from './components/List/List';
import Login from './views/Login/Login';

export default function App() {
  return (
    <>
      <h1>Hello Worlds</h1>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <List />
        </Route>
      </Switch>
    </>
  );
}
