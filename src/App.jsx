import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import { lazy } from 'react';

import Home from './pages/dashboard/home/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Protected from './components/protected';
import { Suspense } from 'react';
import LoadingScreen from './pages/loadingScreen';
import ErrorScreen from './pages/errorScreen';
const Invoices = lazy(() => import('./pages/dashboard/invoices/invoices'));
const MyAccount = lazy(() => import('./pages/dashboard/my-account/myAccount'));
const Recipients = lazy(() =>
  import('./pages/dashboard/transfers/recipients/recipients')
);
const Transactions = lazy(() =>
  import('./pages/dashboard/transfers/transactions/transactions')
);
const LandingPage = lazy(() => import('./pages/landing-page/landing-page'));

const MyWallet = lazy(() => import('./pages/dashboard/my-wallets/myWallet'));
function App() {
  const location = useLocation();
  if (location.pathname === '/') {
    return <Navigate to='/home' replace={true} />;
  }

  const protectedRoutes = [
    { path: 'dashboard', element: <Home /> },
    { path: 'invoices', element: <Invoices /> },
    { path: 'my-wallets', element: <MyWallet /> },
    { path: 'recipients', element: <Recipients /> },
    { path: 'transactions', element: <Transactions /> },
    { path: 'my-account', element: <MyAccount /> },
  ];
  return (
    <main className='bg-[#fff] '>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme='light'
      />

      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path='/' element={<Protected />}>
            {protectedRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact
                  path={route.path}
                  element={
                    <Suspense fallback={<LoadingScreen />}>
                      {route.element}
                    </Suspense>
                  }
                />
              );
            })}
          </Route>

          <Route exact path='/home' element={<LandingPage />} />
          <Route path='*' element={<ErrorScreen />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
