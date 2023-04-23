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
            <Route
              exact
              path='dashboard'
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              exact
              path='invoices'
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Invoices />
                </Suspense>
              }
            />
            <Route
              exact
              path='my-wallets'
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <MyWallet />
                </Suspense>
              }
            />
            <Route
              exact
              path='recipients'
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Recipients />
                </Suspense>
              }
            />
            <Route
              exact
              path='transactions'
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Transactions />
                </Suspense>
              }
            />
            <Route
              exact
              path='my-account'
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <MyAccount />
                </Suspense>
              }
            />
          </Route>

          <Route exact path='/home' element={<LandingPage />} />
          <Route path='*' element={<ErrorScreen />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
