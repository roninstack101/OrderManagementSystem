import { useEffect, useState } from 'react';
import './warning.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Warning() {

  const navigate = useNavigate();

  return (
    <>
      <p>password does not match</p>

      <button onClick={() => {navigate('/')}}>go back</button>
    </>
  )
}