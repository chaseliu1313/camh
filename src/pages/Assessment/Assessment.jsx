import React, { useState } from 'react';
import Heading, { Paragraph } from '../../components/Text/Heading';
import styled from 'styled-components';
import './assessment.css';
import Intro from './intro';
import Simulation from './Simulation';
import SocialNetworks from './SocialNetwork';
import Button from '../../components/Buttons/Buttons';
import { TertiaryColor_Tel, SecondaryColor_Blk } from '../../theme/resource';
import { useHistory } from 'react-router-dom';
import { fontSize, margin } from '../../theme/resource';
export default function Assessment() {
  const initialState = [false, true, true];
  const [btnAppeal, setDisplay] = useState(false);
  const [pageState, setPageState] = useState(initialState);
  let history = useHistory();

  const viewSwicher = () => {
    if (!pageState[2]) {
      history.push('/assessment/pears');
      return;
    }

    const copyState = [...pageState];
    const index = copyState.indexOf(false);
    copyState[index] = !copyState[index];
    copyState[index + 1] = !copyState[index + 1];

    setPageState(copyState);

    setDisplay(copyState[0]);
  };

  const goBack = () => {
    const copyState = [...pageState];
    const index = copyState.indexOf(false);
    copyState[index] = !copyState[index];
    if (index > 0) {
      copyState[index - 1] = !copyState[index - 1];
    }

    setPageState(copyState);

    setDisplay(copyState[0]);

   
  };

  const getRouteName = ()=>{
    if(pageState[0] === true && pageState[1]===false && pageState[2]===true){
      return 'Simulation Video'
    }
    if(pageState[0] === true && pageState[1]===true && pageState[2]===false){
      return 'Tips for Assessing Depressed youth'
    }
  }

 

 
 
  return (
    <Container id="assess_landing">
      <div className="breadcrumb" style={{height: 20, position: 'absolute', top: 0, left: 0, paddingLeft: 10, display:'flex', boxSizing: 'border-box' }}>
        <p style={{fontSize: 14, cursor: 'pointer', color:'black'}} onClick={()=>{
      history.push('/')
        }}>Home</p>
        <p style={{fontSize: 14 , color:'black', marginLeft: 3, marginRight: 3}}>{' >> '}</p>
        <p style={{fontSize: 14, cursor: 'pointer', color:'black'}}   onClick={()=>{
          console.log('click')
          setPageState([false, true, true])
        }}>Assessment</p>
        {pageState[0]===true && <p style={{fontSize: 14 , color:'black', marginLeft: 3, marginRight: 3}}>{' >> '}</p>}
            <p style={{fontSize: 14 , color:'black'}}>{getRouteName()}</p>
      </div>
      <Heading
        size={fontSize.title}
        weight="bold"
        align="center"
        color={SecondaryColor_Blk}
        margin={`${margin}px 0`}
        
        type="h1"
        className="pageTitle"
      >
        Tips for Assessing Depressed Youth
      </Heading>
      <Intro hide={pageState[0]} />
      <Simulation hide={pageState[1]} />
      <SocialNetworks hide={pageState[2]} />

      <BtnGroup>
        <Button
          type="outlined"
          height="7vh"
          width="20vw"
          onClick={() => goBack()}
          primary={false}
          display={btnAppeal}
        >
          <Paragraph color={TertiaryColor_Tel}>Previous</Paragraph>
        </Button>
        <Button
          primary={true}
          type="outlined"
          height="7vh"
          width="20vw"
          onClick={() => viewSwicher()}
          display
        >
          <Paragraph>Next</Paragraph>
        </Button>
      </BtnGroup>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 100%;
`;

const BtnGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  bottom: 5vmin;
`;
