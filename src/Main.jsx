import React, { useEffect, useState } from 'react'
import './Main.css'
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import image from './img.jpg'
const Axios = require('axios').default;

const Main = () => {

  const url='https://reqres.in/api/login';
  const [data,setData] = useState({
    email:"",
    password:"",
  })

  const submit =(e) => {
    e.preventDefault();
    Axios.post(url, {
      email: data.email,
      password: data.password
    })
    .then(function (response) {
      console.log(response.data);
      alert(JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error.response.data);
      alert(JSON.stringify(error.response.data));
    });
  }

  const handle =(e)=>{
      const newData = {...data}
      newData[e.target.id] = e.target.value
      setData(newData)
      console.log(newData)
  }


  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);


  return (
    <div className='main'>
        
        <div className='form__content'>
        <div className='headings'>
        <h1>Welcome Back</h1>
        <p>Sub-title text goes here</p>
        </div>
        <form >
        <Input size="large" onChange={(e)=>handle(e)} value={data.email} id='email' type='email' placeholder="Email Address *" prefix={<UserOutlined />} />
        <br/>
        <br/>
        <Input type='password' onChange={(e)=>handle(e)} value={data.password} id='password' size="large" placeholder="Password *" prefix={<UserOutlined />} />
        <br/>
        <br/>
        <Button onClick={submit} type="primary" className='formBtn'>Login</Button>
        <div className='extra'>
        <p><Checkbox /> Remember Password</p> 
        <p>Forgot Password?</p>

        </div>
        </form>
        </div>
          
      { !isMobile ? <div className='image'> <img src={image} alt='no image to be loaded' />  </div>: <></> }
       
        
        </div>
  )
}

export default Main


