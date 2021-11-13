import Layout from '../layout/Layout'
import HeadingTitle from '../components/heading-title/HeadingTitle'
import FormInputSampah from '../components/form-input-sampah/FormInputSampah';
import { useEffect } from 'react';
import API from '../api/api';

const FormJualSampah = () => {

  return (
    <Layout>
      <HeadingTitle>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="#35BE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="heading-three main-color">Input Sampah</h3>
      </HeadingTitle>
      <FormInputSampah />
    </Layout>
  )
}

export default FormJualSampah;
