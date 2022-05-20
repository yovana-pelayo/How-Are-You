import { Switch, Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';
import List from './components/List/List';
import { EntryProvider } from './context/EntryContext/EntryContext';
import Journal from './views/Journal/Journal';
// import Login from './views/Login/Login';

export default function App() {
  return (
    <>
      <EntryProvider>
        <Switch>
          <Route exact path="/item/:id">
            <ItemDetail />
          </Route>
          <Route path="/items">
            <List />
          </Route>
          <Route path="/">
            <Journal />
          </Route>
        </Switch>
      </EntryProvider>
    </>
  );
}

// {/* <Route exact path="/login">
// <Login />
// </Route> */}
