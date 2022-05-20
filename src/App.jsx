import { Switch, Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';
import List from './components/List/List';
import { EntryProvider } from './context/EntryContext/EntryContext';
// import Login from './views/Login/Login';

export default function App() {
  return (
    <>
      <EntryProvider>
        <h1>Hello Worlds</h1>
        <Switch>
          <Route exact path="/item">
            <ItemDetail />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </EntryProvider>
    </>
  );
}

// {/* <Route exact path="/login">
// <Login />
// </Route> */}
