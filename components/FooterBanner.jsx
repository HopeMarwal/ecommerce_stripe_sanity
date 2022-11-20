import React from 'react';
import { urlFor } from '../lib/client';
import Link from 'next/link'

export default function FooterBanner({ bannerData }) {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>

        <div className='left'>
          <p>{bannerData.discount}</p>
          <h3>{bannerData.largeText1}</h3>
          <h3>{bannerData.largeText2}</h3>
          <p>{bannerData.saleTime}</p>
        </div>

        <div className='right'>
          <p>{bannerData.smallText}</p>
          <h3>{bannerData.midText}</h3>
          <p>{bannerData.desc}</p>

          <Link href={`/product/${bannerData.product}`}>
            <button type="button">
              {bannerData.buttonText}
            </button>
          </Link>
        </div>

        <img
          src={urlFor(bannerData.image)}
          className="footer-banner-image"
        />

      </div>
    </div>
  )
}
