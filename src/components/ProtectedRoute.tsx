// ProtectedRoute.tsx
import {Navigate, useLocation} from 'react-router';
import {useUserContext} from '../hooks/ContextHooks';

const ProtectedRoute = ({children}: {children: React.ReactNode}) => {
  const {user} = useUserContext();
  const location = useLocation();

  console.log('lokaatio', location);

  if (!user) {
    return <Navigate to="/" replace state={{from: location}} />;
  }

  return children;
};

export default ProtectedRoute;
