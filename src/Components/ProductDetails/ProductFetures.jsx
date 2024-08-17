import React from 'react'
import './ProductFetures.css'

export default function ProductFetures({product}) {
    const features = product.features;
  return (
    <>
    <h3 className='features'> Features </h3>
    {
        features.map((cur)=>{
            return <li className='fetureText'> {cur}</li>
        })
    }
    </>
  )
}
