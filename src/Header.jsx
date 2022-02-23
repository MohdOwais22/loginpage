import React, { useEffect, useState } from 'react'
import './Header.css'
import { Button } from 'antd';

const Header = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);

  return (
      <div className='header'>
        <div className='logo'>
            <h1>ATools<span>.</span></h1>
        </div>

        { !isMobile ?  <div className='header__right'>
        <Button type="primary" size='large' className='trial'>Start Free Trial</Button>
            <Button type="primary" size='large' className='login'>Login</Button>
        </div> : <></> }
       

    
    </div>
  )
}

export default Header