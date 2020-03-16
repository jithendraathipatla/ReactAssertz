import React, { useState } from "react"
import ProjectType from "../Images/svg/house.svg"
import TotalLandArea from "../Images/svg/mountain.svg"
import TotalUnits from "../Images/svg/binary-code.svg"
import NumberOfFloors from "../Images/svg/castle.svg"
import TotalTowers from "../Images/svg/cityscape.svg"
import UnitVarients from "../Images/svg/towel.svg"
import PossessionDate from "../Images/svg/calendar.svg"
import Location from "../Images/svg/location.svg"
import Title from "./Title"
import { css } from "@emotion/core"

const StatefulOverview = (props) => {
  const [state, setstate] = useState([
    {
      main_title: "Project Type",
      sub_heading: "Residential Apartment",
      image: ProjectType,
    },
    {
      main_title: "Total Land Area",
      sub_heading: props.area,
      image: TotalLandArea,
    },
    {
      main_title: "Total Units",
      sub_heading: props.units,
      image: TotalUnits,
    },
    {
      main_title: "Number Of Floors",
      sub_heading: props.floors,
      image: NumberOfFloors,
    },
    {
      main_title: "Total Towers",
      sub_heading: props.towers,
      image: TotalTowers,
    },
    {
      main_title: "Unit Varients",
      sub_heading: props.var,
      image: UnitVarients,
    },
    {
      main_title: "Possession Date",
      sub_heading: props.poss,
      image: PossessionDate,
    },
    {
      main_title: "Location",
      sub_heading: props.loc,
      image: Location,
    },
  ])

  const displayingOverview = () => {
    return state.map((item, i) => {
      return (
        <div key={i} css={properly}>
          <img src={item.image} alt={item.main_title} width="30px" />
          <div css={headings}>
            <span>{item.main_title}</span>
            <span>{item.sub_heading}</span>
          </div>
        </div>
      )
    })
  }
  return (
    <div css={media_main}>
      <div style={{ textAlign: "center" }}>
        <Title title={props.project} />
      </div>

      <div css={overview_main}>{displayingOverview()}</div>
    </div>
  )
}

const media_main= css`
  @media(max-width:600px){
    margin-top:-110px;
  }
`
const overview_main = css`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  grid-gap: 40px 20px;
  margin-left: 30px;
  margin-bottom:30px;
  padding: 10px 30px 10px 10px;
  img {
    box-shadow:0px 0px 1px 2px rgba(0,0,0,0.5);
    padding: 10px;
    border-radius: 15%;
    background: linear-gradient(to bottom, #ff00000f, #ffff002e);
  }
  @media(max-width:600px){
    display:block;
  }
`

const properly = css`
  display: flex;
  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.09);
    border-radius: 5px;
    padding: 10px 20px;
  @media(max-width:600px){
    margin-bottom:10px;
  }
`
const headings = css`
  padding-left: 20px;
  span {
    display: block;
    :nth-child(1) {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 18px;
      margin-bottom: 5px;
    }
  }
`

export default StatefulOverview
