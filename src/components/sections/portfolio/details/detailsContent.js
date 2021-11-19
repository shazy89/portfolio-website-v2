import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Spacer } from '../../../spacer/spacer.component';
const DetailsContentView = styled.div`
  padding: 10px 35px;
  height: 37%;
  width: 100%;
`;
const Text = styled.p`
  font-size: 20px;
  line-height: 27px;
`;
const ListedTech = styled.li`
  margin-left: 10px;
  &:nth-child(1) {
    margin-left: 0px;
  }
`;
const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const DetailsContent = ({ children, technologies }) => {
  const technologiesUsed = technologies.map((tech, ind) => (
    <ListedTech key={ind}>{tech}</ListedTech>
  ));

  console.log(technologies);
  return (
    <DetailsContentView>
      <Text>{children}</Text>
      <Spacer size="xl" />
      <div>
        <ListContainer>{technologiesUsed}</ListContainer>
      </div>
    </DetailsContentView>
  );
};
