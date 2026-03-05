import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css'
import { Button } from './Button';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        {/* <div className='container'> */}
            <img className='card-img' src = {props.src}/>
             <h2 className='title'>{props.title}</h2>
             <p className='card-info'>{props.info}</p>
             <div className='btn-container'>
                <Button className='btn' buttonStyle = "btn-outline" onClick={props.link1}>{props.btnLabel1}</Button> 
                <Button className='btn' buttonStyle = "btn-outline" onClick={props.link2}>{props.btnLabel2}</Button> 
             </div>
        {/* </div> */}
      </li>
    </>
  );
}

export default CardItem;