import * as React from 'react';
import { Helmet } from 'react-helmet';
import { App } from '../components/app';
import '../style/main.scss';
// markup]
const indexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Progress' || 'Gatsby Simplefolio'}</title>
        <html lang={'en' || 'en'} />
        <meta name="description" content={'My Site' || 'Gatsby Simplefolio'} />
      </Helmet>
      <h1>Hello There</h1>
    </>
  );
};

export default indexPage;
