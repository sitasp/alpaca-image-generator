import React, { useState, useContext } from 'react';
import DataContext from './DataContext';

const DataState = (props) => {

    const [bg, setBg] = useState(getImage("backgrounds", "blue50"));
    const [acc, setAcc] = useState(getImage("accessories", "headphone"));
    const [ear, setEar] = useState(getImage("ears", "default"));
    const [eye, setEye] = useState(getImage("eyes", "default"));
    const [hair, setHair] = useState(getImage("hair", "default"));
    const [leg, setLeg] = useState(getImage("leg", "default"));
    const [mouth, setMouth] = useState(getImage("mouth", "default"));
    const [neck, setNeck] = useState(getImage("neck", "default"));
    const nose = "./alpaca/nose.png";

    const eyesArr = [
        "Eyes",
        [
            { label: "Default", name: 'default' },
            { label: "Angry", name: 'angry' },
            { label: "Naughty", name: 'naughty' },
            { label: "Panda", name: 'panda' },
            { label: "Smart", name: 'smart' },
            { label: "Star", name: 'star' },
        ],
        "eyes"
    ]


    const earsArr = [
        "Ears",
        [
            { label: "Default", name: 'default' },
            { label: "Tilt Backward", name: 'tilt-backward' },
            { label: "Tilt Forward", name: 'tilt-forward' },
        ],
        "ears"
    ]

    const bgsArr = [
        "Backgrounds",
        [
            { label: "Blue", name: 'blue50' },
            { label: "Dark Blue", name: 'darkblue30' },
            { label: "Green", name: 'green50' },
            { label: "Grey", name: 'grey40' },
            { label: "Red", name: 'red50' },
            { label: "Yellow", name: 'yellow50' },
        ],
        "backgrounds"
    ]


    const accsArr = [
        "Accessories",
        [
            { label: "Earings", name: 'earings' },
            { label: "Flower", name: 'flower' },
            { label: "Glasses", name: 'glasses' },
            { label: "Headphone", name: 'headphone' },
        ],
        "accessories"
    ]

    const hairArr = [
        "Hair",
        [
            { label: "Default", name: 'default' },
            { label: "Bang", name: 'bang' },
            { label: "Curls", name: 'curls' },
            { label: "Elegant", name: 'elegant' },
            { label: "Fancy", name: 'fancy' },
            { label: "Quiff", name: 'quiff' },
            { label: "Short", name: 'short' },
        ],
        "hair"
    ]


    const legArr = [
        "Leg",
        [
            { label: "Default", name: 'default' },
            { label: "Bubble Tea", name: 'bubble-tea' },
            { label: "Cookie", name: 'cookie' },
            { label: "Game Console", name: 'game-console' },
            { label: "Tilt Backward", name: 'tilt-backward' },
            { label: "Tilt Forward", name: 'tilt-forward' },
        ],
        "leg"
    ]

    const mouthArr = [
        "Mouth",
        [
            { label: "Default", name: 'default' },
            { label: "Astonished", name: 'astonished' },
            { label: "Eating", name: 'eating' },
            { label: "Laugh", name: 'laugh' },
            { label: "Tongue", name: 'tongue' },
        ],
        "mouth"
    ]


    const neckArr = [
        "Neck",
        [
            { label: "Default", name: 'default' },
            { label: "Thick", name: 'thick' },
            { label: "Bend Backward", name: 'bend-backward' },
            { label: "Bend Forward", name: 'bend-forward' },
        ],
        "neck"
    ]

    function getImage(location, name) {
        return process.env.PUBLIC_URL + "alpaca/" + location + "/" + name + ".png";
    }

    const state = {
        bg,
        acc,
        ear,
        eye,
        hair,
        leg,
        mouth,
        neck,
        nose,
        eyesArr,
        earsArr,
        bgsArr,
        accsArr,
        hairArr,
        legArr,
        mouthArr,
        neckArr,
        getImage,
        setBg,
        setAcc,
        setEar,
        setEye,
        setHair,
        setLeg,
        setMouth,
        setNeck,
    }

    return (
        <DataContext.Provider value={state}>
            {props.children}
        </DataContext.Provider>
    )


}


export default DataState;