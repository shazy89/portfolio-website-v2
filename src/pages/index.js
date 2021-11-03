import * as React from 'react';
import { Helmet } from 'react-helmet';
import { theme } from '../infrastructure/theme';
import { ThemeProvider } from 'styled-components';
import favicon from '../images/favicon.ico';
import '../style/main.scss';

import { HomePage } from '../components/sections';
// markup]
const indexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{'Progress' || 'Gatsby Simplefolio'}</title>
        <html lang={'en' || 'en'} />
        <meta name="description" content={'My Site' || 'Gatsby Simplefolio'} />
        <link rel="icon" href={favicon} />
      </Helmet>
      <HomePage />
    </ThemeProvider>
  );
};

export default indexPage;
