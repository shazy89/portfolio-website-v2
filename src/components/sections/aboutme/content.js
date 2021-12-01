import React from 'react';
import styled from 'styled-components';

const ContentView = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

export const Content = () => {
  return (
    <ContentView>
      <div>
        <h1>About Me</h1>
        <div></div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </ContentView>
  );
};
