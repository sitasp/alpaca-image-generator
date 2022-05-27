import React, { useContext } from 'react'
import './Image.css'
import DataContext from './context/DataContext';

const Image = () => {


    const data = useContext(DataContext);
    console.log(data);

    return (
        <div className="wrapper">
            <img className="bg" src={data.bg} alt="" />
            <img className="acc" src={data.acc} alt="" />
            <img className="ear" src={data.ear} alt="" />
            <img className="eye" src={data.eye} alt="" />
            <img className="hair" src={data.hair} alt="" />
            <img className="leg" src={data.leg} alt="" />
            <img className="mouth" src={data.mouth} alt="" />
            <img className="neck" src={data.neck} alt="" />
            <img className="nose" src={data.nose} alt="" />
        </div>
    )
}

export default Image