import React from 'react';
import { Product, FooterBanner, HeroBanner } from '../components';

import { client } from '../lib/client'


export default function Home({ products, bannerData }) {
  return (
    <>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Best Seller Products!</h2>
        <p>Speackers of many variations</p>
      </div>

      <div className='products-container'>
        {
          products?.map((product, index) => {
            return (
              <Product key={index} product={product} />
            )
          })
        }
      </div>

      <FooterBanner bannerData={bannerData && bannerData[0]} />
    </>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

