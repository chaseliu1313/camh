import { useState, useEffect  } from 'react';
import { UAParser } from 'ua-parser-js'

export function useDevice(){

    let parser = new UAParser(); 
    const [state, setState] = useState({isMobile: false, isVertical: false});
   

    useEffect(()=>{
        const deviceType = parser.getDevice().type;
        const angle=window.screen.orientation.angle;
        let isV = false;
        let isM = false;

        if(deviceType && deviceType === 'mobile' || deviceType === 'tablet'){
            isM = true;
        }else {
            isM = false;
        }

        if(angle === 0 || angle === 180){
            isV = true
        }

        if(angle === 90 || angle === 270){
            isV =false
        }

     setState({isMobile: isM, isVertical: isV})
    },[window.screen.orientation.angle])

   
    return state;

}