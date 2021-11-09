import React from 'react';
import { Card } from '../../layout/shared/card/styled';
import styled from 'styled-components';
import Arrows from '../../../infrastructure/styled/assets/arrows.svg';
import Achievements from '../../../infrastructure/styled/assets/achievements.svg';
import GitHub from '../../../infrastructure/styled/assets/github.svg';
import { cardInfo } from './cardInfo';

const CardSectionView = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CardSection = () => {
  const displayCards = cardInfo.map((info, ind) => (
    <Card key={ind} header={info.header} icon={info.icon}>
      {info.content}
    </Card>
  ));
  return <CardSectionView>{displayCards}</CardSectionView>;
};
