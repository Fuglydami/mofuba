import React, { useState } from 'react';

import Hero from '../../components/hero';
import Navbar from '../../components/navbar';

import { ModalWrapper } from '../../shared-lib/modal-wrapper';
import SmsLogin from '../onboarding/SmsLogin';
import Accounts from '../onboarding/account';
import AuthenticateLogin from '../onboarding/authenticateLogin';
import CreatePassword from '../onboarding/create-password';
import SecureAccount from '../onboarding/secure-account';
import SignUp from '../onboarding/sign-up';
import VerifyAuthenticator from '../onboarding/verify-authenticator';
import VerifyPhone from '../onboarding/verify-phone';
import SignIn from '../signIn/sign-in';

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [toggleModal, setToggleModal] = useState('accounts');

  function closeModal() {
    setIsOpen(false);
    setToggleModal('accounts');
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModalLogin() {
    setIsOpenLogin(false);
  }

  function openModalLogin() {
    setIsOpenLogin(true);
  }

  return (
    <main className='max-w-screen-xl  min-h-screen   mx-auto'>
      <Navbar openModal={openModal} openModalLogin={openModalLogin} />
      <Hero />

      <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
        {toggleModal === 'sign-up' ? (
          <SignUp setToggleModal={setToggleModal} />
        ) : null}
        {toggleModal === 'accounts' ? (
          <Accounts setToggleModal={setToggleModal} />
        ) : null}
        {toggleModal === 'create-password' ? (
          <CreatePassword setToggleModal={setToggleModal} />
        ) : null}
        {toggleModal === 'sign-in' ? (
          <SignIn setToggleModal={setToggleModal} />
        ) : null}
        {toggleModal === 'verify-phone' ? (
          <VerifyPhone setToggleModal={setToggleModal} />
        ) : null}
        {toggleModal === 'secure-account' ? (
          <SecureAccount setToggleModal={setToggleModal} />
        ) : null}
        {toggleModal === 'authenticate-login' ? (
          <AuthenticateLogin setToggleModal={setToggleModal} />
        ) : null}
        {toggleModal === 'verify-authenticator' ? (
          <VerifyAuthenticator setToggleModal={setToggleModal} />
        ) : null}
        {toggleModal === 'sms-login' ? (
          <SmsLogin setToggleModal={setToggleModal} />
        ) : null}
      </ModalWrapper>
      <ModalWrapper isOpen={isOpenLogin} closeModal={closeModalLogin}>
        <SignIn setToggleModal={setToggleModal} />
      </ModalWrapper>
    </main>
  );
};

export default LandingPage;
