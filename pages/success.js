//react 
import React, { useState, useEffect } from 'react';
//next
import Link from 'next/link';
import { useRouter } from 'next/router';
//icon
import { BsBagCheckFill } from 'react-icons/bs';
//confetti
import { runFireworks } from '../lib/utils'
//context
import { useStateContext } from '../context/StateContext';


export default function Success() {
  const [order, setOrder] = useState(null)

  const { setCartItems, setTotalPrice, setTotalQtys } = useStateContext()

  useEffect(() => {
    localStorage.clear();
    setCartItems([])
    setTotalPrice(0)
    setTotalQtys(0)
    runFireworks();
  }, [])

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>

        <h2>Thank you for your order!</h2>
        <p className='email-msg'>Check your email inbox for the receipt</p>
        <p className='description'>
          If you have any questions, please email
          <a className='email' href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href='/'>
          <button type="button" width="300px" className='btn'>
            Continue Shopping
          </button>
        </Link>
      </div>

    </div>
  )
}
