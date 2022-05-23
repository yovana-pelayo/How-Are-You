import { Redirect, Route, useLocation } from 'react-router-dom';
import { useUser } from '../../../context/UserContext/UserContext';

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useUser();
  const location = useLocation();
  return (
    <Route {...rest}>
      {user.email ? (
        children
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    </Route>
  );
}

//using the useLocation hook, this will redirect the user to desired page view, but if not successful then user is redirected to login page.

//honestly still a little confused about this. So it redirects the auth user to desired location but if not auth then teh location redirects to login?? OR

// does the use location hook redirect to desired location if login is successful and if not redirects to login?
