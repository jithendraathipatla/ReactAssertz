import React, { useState } from "react"
import { css, jsx } from "@emotion/core"
import Card from "./Cards";
import ModalComponent from '../Components/Modal';
import Image4 from "../Imagesa/Images/prestige-finsbury-banner1.jpg"
import Image1 from '../Imagesa/Images/songofsouth/slider-one.jpg';
import Image2 from '../Imagesa/Images/Kew/slider-three.jpg';
import Image3 from '../Imagesa/Images/parksquare/slider-one.jpg';
import Image5 from '../Imagesa/Images/jindal/exterior-one.jpg';
import Image6 from '../Imagesa/Images/Elysian/first.jpg';
import Image7 from '../Imagesa/Images/willo/slider-four.jpg';
import Image8 from '../Imagesa/Images/botanique/slider-one.jpg';
import Image9 from '../Imagesa/Images/parksquare/slider-one.jpg';
import Image10 from '../Imagesa/Images/fontainebleau/slider-one.jpg';
import Image11 from '../Imagesa/Images/dolcevita/slider-one.jpg';
import Image12 from '../Imagesa/Images/Coming-Soon-Project-.jpg'

const App = () => {
  const [state, setstate] = useState([
    {
      image: Image12,
      alt: "Prestige Waterford",
      unit_type: "3 & 4 BHK",
      price: "1.24 CR",
      towers: "Coming Soon",
      location: "Coming Soon",
      posession: "Coming Soon",
      link: "Coming Soon",
      brouchereName: "Coming Soon",
      page: "waterford",
    },
    {
      image: Image4,
      alt: "Prestige Finsbury Park",
      unit_type: "3 & 4 BHK",
      price: "1.24 CR",
      towers: "Coming Soon",
      location: "KIDAB Area, North Bangalore",
      posession: "Coming Soon",
      link: "Coming Soon",
      brouchereName: "Coming Soon",
      page: "finsbury_park",
    },
    {
      image: Image1,
      alt: "Prestige Song of the South",
      unit_type: "1,2,2.5,3,3.5,4 BHK",
      price: "39.4 Lakhs",
      towers: "16 Towers  G + 15,17,20 Floors",
      location: "Begur Road, Bangalore",
      posession: "2019 onwards",
      link:
        "https://drive.google.com/open?id=1S6RsDbGVtaIDhW5EY5jI-ZTsesoBjQkN",
      brouchereName: "Download Prestige Song of the South Brouchere",
      page: "song_of_south",
    },
    {
      image: Image2,
      alt: "Prestige lake ridge",
      unit_type: "1,2& 3 BHk",
      price: "40 lakhs",
      towers: "12 Towers Devasthanagalu",
      location: "Devasthanagalu, Bangalore",
      posession: "2019 onwards",
      link:
        "https://drive.google.com/open?id=13jPTHzIRfjsX0-Og8c1bJp0LcjTdim66",
      brouchereName: "Download prestige lake ridge Brouchere",
      page: "lake_ridge",
    },

    {
      image: Image3,
      alt: "Prestige Kew Gardens ",
      unit_type: "1,2 & 3 BHK",
      price: "94 Lakh",
      towers: "16 Towers G + 4 Floors",
      location: "Yemalur, Bangalore",
      posession: "2019 onwards",
      link:
        "https://drive.google.com/open?id=1S6RsDbGVtaIDhW5EY5jI-ZTsesoBjQkN",
      brouchereName: "Download Prestige Kew Gardens Brouchere",
      page: "kew_gardens",
    },
    {
      image: Image5,
      alt: "Prestige Jindal City",
      unit_type: "1,2,3 & 4 BHk",
      price: "48 lakhs",
      towers: "15 Towers G + 27,28 Floors",
      location: "Tumkur Road, Bangalore East",
      posession: "2021 Onwards (P1)",
      link:
        "https://drive.google.com/file/d/1-1vxZM_N147Yl9y2Iiza87xdtp2fOYYC/view?usp=sharing",
      brouchereName: "Download Prestige Jindal City Brouchere",
      page: "jindal_city",
    },
    {
      image: Image6,
      alt: "Prestige Elysian",
      unit_type: "2 Towers G + 16,18 Floors",
      price: "86 Lakhs",
      towers: "12 Blocks G+26 Floors",
      location: "Arekere, Bannerghatta Road",
      posession: "2022 onwards",
      // link:"https://drive.google.com/open?id=1gD1dqRdfmSLXclBQSC43a3VBY3CNOj84",
      brouchereName: "Download Prestige Elysian Brouchere",
      page: "elysian",
    },

    {
      image: Image7,
      alt: "Prestige Willow Tree",
      unit_type: "1,2,3,3.5 BHK",
      price: "46 Lakhs",
      towers: "5 Towers G + 10,11 Floors",
      location: "Vidyaranyapura, Bangalore",
      posession: "2022 onwards",
      link:
        "https://drive.google.com/open?id=1Luc7dPRqSMwT8T-GjDV64HpFFzCV90sc",
      brouchereName: "Download Prestige Willow Tree Brouchere",
      page: "willow_tree",
    },
    {
      image: Image8,
      alt: "Prestige Botanique",
      unit_type: "3, & 3 BHk",
      price: "1.6 cr",
      towers: "1 Towers 2B+G+8 Floors",
      location: "RV Road, Bangalore ",
      posession: "2021",
      link:
        "https://drive.google.com/open?id=1LXZB4htUXDk5aHt1-XmeVV5Gdtn4AWrl   ",
      brouchereName: "Download Prestige Botanique Brouchere",
      page: "botanique",
    },

    {
      image: Image9,
      alt: "Prestige Park Square",
      unit_type: "2 & 3 BHk",
      price: "95 Lakhs",
      towers: "3 Towers 3B + G + 27 Floors",
      location: "Bannerghatta Road, Bangalore",
      posession: "2021",
      link:
        "https://drive.google.com/open?id=1kuI8nfT50ujZIOJaNesfARsi9i-_tj9f",
      brouchereName: "Download Prestige Park Square Brouchere",
      page: "park_square",
    },

    {
      image: Image10,
      alt: "Prestige Fontaine Bleau",
      unit_type: "2 & 3 BHk",
      price: "83 Lakhs",
      towers: "2 Tower G + 10 Floors",
      location: "Whitefield, Bangalore",
      posession: "2021",
      link:
        "https://drive.google.com/open?id=1iiwgLyIHfwp2KkVayBE5T9-xEBmKi5wV",
      brouchereName: "Download Prestige Fontaine Bleau Brouchere",
      page: "fontaine_bleau",
    },
    {
      image: Image11,
      alt: "Prestige Dolce Vita",
      unit_type: "2 & 3 BHk",
      price: "94 lakhs",
      towers: "2 Towers G + 7,8 Floors",
      location: "Whitefield, Bangalore ",
      posession: "2021 onwards",
      link:
        "https://drive.google.com/open?id=1o92-nnA-kYMsE8U-e-TnknwW3Uvm24xR",
      brouchereName: "Download Prestige Dolce Vita Brouchere",
      page: "dolce_vita",
    },

  ])

  const displayingCards = () => {
    return state.map((item, i) => {
      return (
        <div key={i}>
          <Card
            image={item.image}
            alt={item.alt}
            unit={item.unit_type}
            price={item.price}
            towers={item.towers}
            location={item.location}
            possession={item.posession}
            link={item.link}
            brouchere={item.brouchereName}
            pages={item.page}
          />
        </div>
      )
    })
  }
  return (
      <div>
      <div css={card_container}>{displayingCards()}</div>
      </div>
      )
}

const card_container = css`
  padding: 0px 30px;
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  grid-gap: 20px;
  @media (max-width:600px){
    display:block;
    padding:0px 20px;
 }
`

export default App
