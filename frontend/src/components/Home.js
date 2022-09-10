import React, { useEffect, useState } from 'react'
import Content from './Content'
import { userContext } from '../App';
import { useContext } from 'react';
import iii from './images/push.gif'
const Home = (props) => {
  const { state, dispatch } = useContext(userContext);
  if(state)
  return (
    <div>
          <Content data={props}/>
    </div>
  )
  else return (
    <div className='container homee'>
      <h1>Stay Home and Shop Online</h1>
      <img className='homeimg' src={iii} alt="..."/>
      <br/>
      <div className='btn btn-danger'>      
        <h3>SignUp of Login to continue...</h3></div>
    </div>
  )
}

export default Home