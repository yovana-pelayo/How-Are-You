import { Switch, Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';
import List from './components/List/List';
import Login from './views/Login/Login';

export default function App() {
  return (
    <>
      <h1>Hello Worlds</h1>
      <Switch>
        <Route exact path="/item">
          <ItemDetail />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <List />
        </Route>
      </Switch>
    </>
  );
}
