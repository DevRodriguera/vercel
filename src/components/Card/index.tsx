import React from 'react'
import './styles.css'
import Icon from '../Icon'

const Card = (props: any) => {
  return (
    <div className="card">
      <img src={props.img} alt="" className="card-img" />
      <div className="card-icons">
        <Icon
          link={props.github}
          icon="bi bi-github"
        />
        <Icon
          link={props.vercel}
          icon="bi bi-link"
        />
      </div>
    </div>
  )
}

export default Card