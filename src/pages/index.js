import * as React from 'react';
import { Helmet } from 'react-helmet';
import { theme } from '../infrastructure/theme';
import { App } from '../components/app';
import styled, { ThemeProvider } from 'styled-components';

import '../style/main.scss';

import { Spacer } from '../components/spacer/spacer.component';
import { HomePage } from '../components/sections';
// markup]
const indexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Progress' || 'Gatsby Simplefolio'}</title>
        <html lang={'en' || 'en'} />
        <meta name="description" content={'My Site' || 'Gatsby Simplefolio'} />
      </Helmet>
      <HomePage />
    </ThemeProvider>
  );
};

export default indexPage;
