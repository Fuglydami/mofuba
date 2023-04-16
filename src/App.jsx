import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import { lazy } from 'react';
import Entrypoint from './components/entrypoint';
import Home from './pages/dashboard/home/home';

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
      <Routes>
        {/* <Route element={<Home />}> */}
        <Route path='/' element={<Entrypoint />}>
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
