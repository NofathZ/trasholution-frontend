import React from 'react';
import Layout from '../layout/Layout'
import HeadingShapeOne from '../components/heading-shape-one/HeadingShapeOne';
import LoginForm from '../components/login-form/LoginForm'

const HalamanLogin = () => {
  return (
    <>
      <Layout>
        <HeadingShapeOne />
        <LoginForm />
      </Layout>
    </>
  )
};

export default HalamanLogin;
