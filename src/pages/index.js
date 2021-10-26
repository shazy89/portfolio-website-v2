import * as React from 'react';
import { Helmet } from 'react-helmet';
import { App } from '../components/app';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../infrastructure/theme';
import '../style/main.scss';
import { HeaderSectionBox } from '../components/styled.section.box';
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
      <HeaderSectionBox>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgb(47 47 47 / 60%)',
          }}
        >
          <h1>Hellooooo</h1>
        </div>
      </HeaderSectionBox>
    </ThemeProvider>
  );
};

export default indexPage;
