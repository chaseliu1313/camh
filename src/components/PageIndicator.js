import React from 'react';
import styled from 'styled-components';
import {
  TertiaryColor_Tel,
  SecondaryColor_Tel,
  PrimaryColor,
} from '../theme/resource';
import { Link as L, useLocation } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const PageIndicator = (props) => {
  const { routes, titles } = props;
  const location = useLocation().pathname;
  console.log(location);

  return (
    <Container>
      {routes.map((route, index) => (
        <OverlayTrigger
          placement="top"
          key={titles[index]}
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip
              style={{ color: '#00A39B' }}
              id={'tooltip_' + titles[index]}
              className="tooltips"
            >
              {titles[index]}
            </Tooltip>
          }
        >
          <Link to={route} current={route === location}></Link>
        </OverlayTrigger>
      ))}
    </Container>
  );
};

export default PageIndicator;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 7px 0 3px 0;
  align-items: center;
`;

const Link = styled(L)`
  background-color: ${TertiaryColor_Tel};
  border-radius: 5px;
  margin: 0 3px;
  &:hover {
    transform: scale(1.5);
    transition: all 0.7s;
    margin: 0 5px;
    background-color: ${PrimaryColor};
  }
  ${({ current }) => `
  width: ${current ? '20px' : '15px'};
  height: ${current ? '20px' : '15px'};
  background-color:  ${current ? SecondaryColor_Tel : TertiaryColor_Tel};;
  `}
`;
