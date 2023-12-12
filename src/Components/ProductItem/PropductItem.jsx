import React from 'react';
import Button from "../Button/Button"
import "./style.css"

const PropductItem = (props) => {
  return (
    <div key={props.id} className='boxes text-center col-lg-3 col-md-6 col-sm-12'>
        <div className="box">
            <div className="square"></div>
            <div className="img">
                <img className='w-100' src={props.image} alt="" />
            </div>
        </div>
        <div className="item-desc">
                <span className='btn-wrap'> 
                    <Button className="addBtn" title="Add to Cart" />
                </span>
                <h2>{props.title}</h2>
                <p className="price">{props.price}$</p>
            </div>
    </div>
  )
}

export default PropductItem