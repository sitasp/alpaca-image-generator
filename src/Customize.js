import React, { useContext, useState } from 'react'
import DataContext from './context/DataContext';
import styled from 'styled-components';

import { FaDownload, FaRandom } from "react-icons/fa";

const Button = styled.button`
/* Same as above */
  background: ${props => props.primary ? "#24509C" : "white"};
  color: ${props => props.primary ? "white" : "24509C"};

  font-size: 1.5em;
  margin: 5px;
  margin-left: 20px;
  padding: 0.25em 1em;
  border: 2px solid #24509C;
  border-radius: 10px;
`;

const FinalButton = styled.button`
    background-color: white;
    margin: 20px;
  margin-left: 80px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 90px;
  border: 0px;
  font-size: 1.5em;
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-family: 'Cousine', monospace;
  color:#24509C;
`;

const TextHeader = styled.p`
    font-size:25px;
    color: black;
    margin-left: 20px;
    font-family: 'Cousine', monospace;
`;
const ButtonToggle = styled(Button)`
opacity: 0.4;
${({ active }) =>
        active &&
        `
  opacity: 1;
`}
`;
const ButtonGroup = styled.div`
display: flex;
flex-wrap: wrap;
`;

const Customize = () => {

    const data = useContext(DataContext);
    const availEntity = [
        data.eyesArr,
        data.earsArr,
        data.bgsArr,
        data.accsArr,
        data.hairArr,
        data.legArr,
        data.mouthArr,
        data.neckArr,
    ]

    const [activeLabel, setActiveLabel] = useState(availEntity[0][0]);
    const [activeChild, setActiveChild] = useState(availEntity[0][1][0])
    const [activeChildren, setActiveChildren] = useState(availEntity[0][1]);
    const [activeName, setActiveName] = useState(availEntity[0][2]);

    const actCrazy = (x) => {
        setActiveLabel(x[0]);
        setActiveChildren(x[1]);
        setActiveName(x[2]);
        // console.log(activeChildren);
    }

    const actDoubleCrazy = (x) => {
        setActiveChild(x);
        console.log(x)
        if (activeLabel === 'Ears') {
            data.setEar(data.getImage(activeName, x.name))
        } else if (activeLabel === 'Eyes') {
            data.setEye(data.getImage(activeName, x.name))
        } else if (activeLabel === 'Backgrounds') {
            data.setBg(data.getImage(activeName, x.name))
        } else if (activeLabel === 'Accessories') {
            data.setAcc(data.getImage(activeName, x.name))
        } else if (activeLabel === 'Hair') {
            data.setHair(data.getImage(activeName, x.name))
        } else if (activeLabel === 'Leg') {
            data.setLeg(data.getImage(activeName, x.name))
        } else if (activeLabel === 'Mouth') {
            data.setMouth(data.getImage(activeName, x.name))
        } else if (activeLabel === 'Neck') {
            data.setNeck(data.getImage(activeName, x.name))
        }
    }

    return (
        <>
            <div>
                <TextHeader>Accessorize the Alpaca's</TextHeader>
                <ButtonGroup>
                    {availEntity.map(type => (
                        <ButtonToggle
                            key={type[0]}
                            active={activeLabel === type[0]}
                            onClick={() => actCrazy(type)}
                            primary="white"
                        >
                            {type[0]}
                        </ButtonToggle>
                    ))}
                </ButtonGroup>
                <TextHeader>Style</TextHeader>
                <ButtonGroup>
                    {activeChildren.map(type => (
                        <ButtonToggle
                            key={type.name}
                            active={activeChild.name === type.name}
                            onClick={() => actDoubleCrazy(type)}
                            primary="white"
                        >
                            {type.label}
                        </ButtonToggle>
                    ))}
                </ButtonGroup>

                <ButtonGroup>
                    <FinalButton
                        onClick={() => console.log("Download Button Clicked")}
                    >
                        <FaDownload className='fontawesome' />
                        Download
                    </FinalButton>
                    <FinalButton
                        onClick={() => console.log("Download Button Clicked")}
                    >
                        <FaRandom className='fontawesome' />
                        Random
                    </FinalButton>
                </ButtonGroup>


                {/* <p>{activeChiildren}</p> */}
            </div>

        </>
    )
}

export default Customize;


{/* {availEntity.map(function (object, i) {
                return <AvailSingleEntity obj={object} key={i} />;
            })} */}
