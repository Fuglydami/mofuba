import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import { lazy } from 'react';

import Home from './pages/dashboard/home/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Protected from './components/protected';
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
      <Routes>
        {/* <Route element={<Home />}> */}
        <Route path='/' element={<Protected />}>
          <Route exact path='dashboard' element={<Home />} />
          <Route exact path='invoices' element={<Invoices />} />
          <Route exact path='my-wallets' element={<MyWallet />} />
          <Route exact path='recipients' element={<Recipients />} />
          <Route exact path='transactions' element={<Transactions />} />
          <Route exact path='my-account' element={<MyAccount />} />
        </Route>

        <Route exact path='/home' element={<LandingPage />} />

        {/* <Route path='*' element={<ErrorPage />} /> */}
      </Routes>
    </main>
  );
}

export default App;
