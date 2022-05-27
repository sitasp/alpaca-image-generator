import React, { useState } from 'react'
import styled from 'styled-components';

const Button = styled.button`
/* Same as above */
`;
const ButtonToggle = styled(Button)`
opacity: 0.6;
${({ active }) =>
        active &&
        `
  opacity: 1;
`}
`;
const ButtonGroup = styled.div`
display: flex;
`;

const AvailSingleEntity = ({ obj }) => {



    const types = ['Cash', 'Credit Card', 'Bitcoin'];
    const [active, setActive] = useState(types[0]);


    const toggleClass = () => {
        setActive(!active);
    };

    return (
        //     className = { isActive? 'your_className': null } 
        //   onClick = { toggleClass }
        //     < button className = "btn" > { obj[0]}</button >


        <ButtonGroup>
            {types.map(type => (
                <ButtonToggle
                    key={type}
                    active={active === type}
                    onClick={() => setActive(type)}
                >
                    {type}
                </ButtonToggle>
            ))}
        </ButtonGroup>
    );

}
export default AvailSingleEntity
