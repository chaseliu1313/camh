import styled, { keyframes, css } from 'styled-components';

export const exitAni = keyframes`
0%{
    opacity:100%;
    transform: translateY(0) scale(1);
}

50%{
    opacity:70%;
    transform: translateY(50vh) scale(0.5);
}
100%{
    opacity:0%;
    transform: translateY(100vh) scale(0.000000000001);
    display: none;
}


`;

export const enterAni = keyframes`


0%{
    opacity:0%;
    transform: translateY(100vh) scale(0.001);
    display: none;
}
50%{
    opacity:70%;
    transform: translateY(50vh) scale(0.5);
}
100%{
    opacity:100%;
    transform: translateY(0) scale(1);
}





`;

export const setDelay = (time) => {
  setTimeout(() => {
    return css`
      display: none;
    `;
  }, time);
};
