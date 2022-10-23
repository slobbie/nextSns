import PropType from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';

import Wrapper from '../store/configureStore';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>nextSns</title>
      </Head>
      <Component />
    </>
  );
};

App.propType = {
  Component: PropType.elementType.isRequired,
};

export default Wrapper.withRedux(App);
