import React from "react";
import "./Home.css";
import Services from "../Services/Services";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Attraction from "../Attraction/Attraction";

export default function Home() {
  return (
    <>
    <div className="homeContainer">
      <div className="homeImg">
        <img className="img1"
          src="https://plus.unsplash.com/premium_photo-1672883552113-e67e0d6884af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          height={500}
    
        />
        <img className="img2"
          src="https://plus.unsplash.com/premium_photo-1661764072587-0050cc57ac17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          height={300}
        />
      </div>
      <div className="homeTxtContainer">
              <div className="homeTitle"><h3>Dream Shop</h3></div>
              <div className="homeTxt">
                <p>
                    Do you want to feel happy after shopping ? If yes, then do shopping with us. We take varaity of products for your happiness in every day. So connect with us and give us a chance for your cute smile.
                </p>
              </div>
              <div style={{position:'relative', left:'-130px', top:'50px'}}>
                <NavLink to='/products'><Button variant="outlined">Shop Now</Button></NavLink>
              </div>
      </div>
      </div>
       
        <Services/>
        <Attraction/>
    </>
  );
}
