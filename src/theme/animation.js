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

export const exitAni2 = keyframes`
0%{
    opacity:100%;
    transform: translateX(0) scale(1);
}

50%{
    opacity:70%;
    transform: translateX(50vw) scale(0.8);
}
100%{
    opacity:0%;
    transform: translateX(100vw) scale(0);
    display: none;
}


`;

export const exitAni3 = keyframes`
0%{
    opacity:100%;
    transform: translateX(0) scale(1);
}

50%{
    opacity:70%;
    transform: translateX(-50vw) scale(0.8);
}
100%{
    opacity:0%;
    transform: translateX(-100vw) scale(0);
    display: none;
}


`;

export const enterAni = keyframes`


0%{
    opacity:0%;
    transform: translateY(100vh) scale(0.001);
   
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

export const enterAni2 = keyframes`


0%{
    opacity:0%;
    transform: translateX(-100vw) scale(0);
   
}
50%{
    opacity:70%;
    transform: translateX(-50vw) scale(0.8);
}
100%{
    opacity:100%;
    transform: translateX(0) scale(1);
}



`;

export const enterAni3 = keyframes`


0%{
    opacity:0%;
    transform: translateX(100vw) scale(0);
   
}
50%{
    opacity:70%;
    transform: translateX(50vw) scale(0.8);
}
100%{
    opacity:100%;
    transform: translateX(0) scale(1);
}



`;

export const setDelay = (time) => {
  setTimeout(() => {
    return css`
      display: none;
    `;
  }, time);
};
