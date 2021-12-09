import React from 'react'
import SvgHome from '../SvgHome'
import { ContainerHome } from './styled';
import icon from '../../icons/icon.svg'

const Body = ({ title, descrition, info, incentive}) => {
  return (
    <ContainerHome>
      <div>
        <h2>{ title }</h2>
        <h4>{ descrition }</h4>
        <p>{ info }</p>
        <p>{ incentive }</p>
      </div>
      <div>
        <SvgHome icon={icon}/>
      </div>
    </ContainerHome>

  )
}

export default Body
