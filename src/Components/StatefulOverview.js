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
      sub_heading: "Comming Soon",
      image: TotalLandArea,
    },
    {
      main_title: "Total Units",
      sub_heading: "Comming Soon",
      image: TotalUnits,
    },
    {
      main_title: "Number Of Floors",
      sub_heading: "Comming Soon",
      image: NumberOfFloors,
    },
    {
      main_title: "Total Towers",
      sub_heading: "Comming Soon",
      image: TotalTowers,
    },
    {
      main_title: "Unit Varients",
      sub_heading: "Comming Soon",
      image: UnitVarients,
    },
    {
      main_title: "Possession Date",
      sub_heading: "Comming Soon",
      image: PossessionDate,
    },
    {
      main_title: "Location",
      sub_heading: "Comming Soon",
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
    <div>
      <div style={{ textAlign: "center" }}>
        <Title title={props.project} />
      </div>

      <div css={overview_main}>{displayingOverview()}</div>
    </div>
  )
}

const overview_main = css`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  grid-gap: 40px 50px;
  margin-left: 40px;
  margin-bottom:30px;
  padding: 10px;
  img {
    border: 2px solid #379ad4;
    padding: 15px;
    border-radius: 15%;
    background: linear-gradient(to bottom, #ff00000f, #ffff002e);
  }
`

const properly = css`
  display: flex;
`
const headings = css`
  padding-left: 20px;
  span {
    display: block;
    :nth-child(1) {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 18px;
      margin-bottom: 14px;
    }
  }
`

export default StatefulOverview
