import React from "react";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import SupportIcon from '@mui/icons-material/Support';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import './Services.css'

export default function Services() {
  return (
    <>
      <div className="knownFor">
        <h1>We Are Known For</h1>
      </div>

      <div className="services">
      <div className="freeDel serviceName">
        <DeliveryDiningIcon sx={{fontSize:"60px"}} />
        <p>Free Delivery</p>
      </div>
      <div className="serviceName">
        <SupportIcon sx={{fontSize:"60px"}}   />
        <p>24/7 Customers Support</p>
      </div>
      <div className="serviceName">
        <FlashOnIcon sx={{fontSize:"60px"}}   />
        <p>Fast Delivery</p>
      </div>
      <div className="serviceName">
        <HighQualityIcon sx={{fontSize:"60px"}}   />
        <p>High Quality Products</p>
      </div>
      </div>

      <div style={{marginTop:'100px'}}></div>
    </>
  );
}
