import React from "react";
import "./Attraction.css";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

export default function Attraction() {
  return (
    <>
      <div className="attraction">
        <div className="attractionImg">
          <img
            src="https://img.freepik.com/premium-photo/woman-black-kimono-stands-front-plant_133748-16182.jpg?size=626&ext=jpg"
            alt=""
            height={650}
          />
          <img
            src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman_23-2148316130.jpg?size=626&ext=jpg"
            height={550}
            style={{ position: "relative", left: "-70px", top: "100px" }}
            alt=""
          />

          <img
            src="https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2683.jpg?size=626&ext=jpg"
            alt=""
            height={450}
            style={{ position: "relative", left: "-100px", top: "200px" }}
          />
        </div>

        <div className="attractionText">
          <h3>Arrived Latest And Trending Products According Your Fashion </h3>
          <div>
            <NavLink to="/products">
              <Button variant="outlined">Check Now</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
