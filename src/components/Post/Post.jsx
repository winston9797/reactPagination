import React from 'react'
import './Post.css'

export default function Post(props) {
    return (
      <div className='col s6'>
        <div className="card">
          {props.id}
            <div className="card-image">
            <img src={props.img} />
            <span className="card-title">{props.title}</span>
            </div>
        <div className="card-content">
            <p>{props.content}</p>
        </div>
        <div className="card-action">
          <a href="#">Read More ></a>
        </div>
      </div>
      </div>
    )
}
