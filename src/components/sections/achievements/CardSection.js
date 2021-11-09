import React, { useMemo } from 'react';
import { Card } from '../../layout/shared/card/styled';
import styled from 'styled-components';
import { cardInfo } from './cardInfo';

const CardSectionView = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CardSection = () => {
  const displayCards = useMemo(
    () =>
      cardInfo.map((info, ind) => (
        <Card key={ind} header={info.header} icon={info.icon}>
          {info.content}
        </Card>
      )),
    []
  );
  return <CardSectionView>{displayCards}</CardSectionView>;
};
