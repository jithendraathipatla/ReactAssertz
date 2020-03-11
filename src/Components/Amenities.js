import React,{ useState } from "react";
import {css} from '@emotion/core';
import Title from "../Components/Title"
import Swimming from "../Images/amensvg/swimming-pool.svg"
import Club from "../Images/amensvg/house.svg"
import Child from "../Images/amensvg/player.svg"
import Landscape from "../Images/amensvg/sprout.svg"
import Secur from "../Images/amensvg/royal-guard.svg"
import Bank from "../Images/amensvg/atm.svg"
import Basket from "../Images/amensvg/basketball.svg"
import Caft from "../Images/amensvg/coffee.svg"
import Conven from "../Images/amensvg/pet-shop.svg"
import Jogging from "../Images/amensvg/race-track.svg"
import Lands from "../Images/amensvg/path.svg"
import Meditation from "../Images/amensvg/meditation.svg"
import Convention from "../Images/amensvg/hall.svg"
import Piped from "../Images/amensvg/valve.svg"
import Power from "../Images/amensvg/battery.svg"
import Tennis from "../Images/amensvg/tennis-court.svg"
import Wifi from "../Images/amensvg/wifi.svg"

const Amenities = (props) => {
  const [state, setstate] = useState([
    {
      name: "Swimming Pool",
      img: Swimming,
    },
    {
      name: "Club House",
      img: Club,
    },
    {
      name: "Kid's Playing Area",
      img: Child,
    },
    {
      name: "Landscaped Garden",
      img: Landscape,
    },
    {
      name: "24/7 Security",
      img: Secur,
    },
    {
      name: "Bank/ ATM",
      img: Bank,
    },
    {
      name: "Basketball Court",
      img: Basket,
    },
    {
      name: "Cafeteria",
      img: Caft,
    },
    {
      name: "Convenience Store",
      img: Conven,
    },
    {
      name: "Jogging Track",
      img: Jogging,
    },
    {
      name: "Landscape",
      img: Lands,
    },
    {
      name: "Meditaion",
      img: Meditation,
    },
    {
      name: "Convention Hall",
      img: Convention,
    },
    {
      name: "Piped Gas",
      img: Piped,
    },
    {
      name: "Power Backup",
      img: Power,
    },
    {
      name: "Tennis Court",
      img: Tennis,
    },
    {
      name: "WiFi Facility",
      img: Wifi,
    },
    {
      name: "Garden",
      img: Lands,
    },
  ])

  const displayingAmenities = () => {
    return state.map((item, i) => {
      return (
        <div key={i} css={firstOne}>
          <img src={item.img} alt={item.name} width="30px" />
          <span>{item.name}</span>
        </div>
      )
    })
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Title title={props.project} />
      </div>
      <div css={Amenities_main}>{displayingAmenities()}</div>
    </div>
  )
}

const Amenities_main = css`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr 3fr 3fr;
  grid-gap: 30px;
  padding: 20px 2px 20px 100px;
  margin-bottom:30px;
  img{
    border: 2px solid #379ad4;
    padding: 15px;
    border-radius: 15%;
    background: linear-gradient(to bottom, #ff00000f, #ffff002e);
  }
`

const firstOne = css`
  span{
    padding-top:2px;
    display:block;
    color:black;
    font-size:17px;
  }
`

export default Amenities
