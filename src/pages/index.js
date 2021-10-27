import * as React from 'react';
import { Helmet } from 'react-helmet';
import { App } from '../components/app';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../infrastructure/theme';
import '../style/main.scss';
import {
  HeaderSectionBox,
  SectionBackground,
} from '../infrastructure/styled/styled.section';
import { Spacer } from '../components/spacer/spacer.component';
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
      <SectionBackground></SectionBackground>
    </ThemeProvider>
  );
};

export default indexPage;
