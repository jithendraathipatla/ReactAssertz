import React from "react";
import ModalComponent from '../Components/Modal';
import { FaHome, FaRupeeSign, FaCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiEvilTower } from "react-icons/gi";
import { css, keyframes } from "@emotion/core";
import { Link } from "gatsby";


const Card = props => {

  return (
    <div>
      <div css={card}>
        <div css={card_image}>
        <Link to={`/${props.pages}`}><img src={props.image} alt="Placeholder image" /></Link>
        </div>
        <div css={card_content}>
          <div css={media_left}>
            <FaHome
              style={{
                borderRadius: "50%",
                border: "1px solid #eee",
                padding: "4px",
                boxShadow: "1px 2px 3px rgba(0,0,0,0.5)",
                fontSize: "1em",
              }}
            />
            <div className="text">
              <span
                style={{
                  marginLeft: "10px",
                  textTransform: "uppercase",
                  fontWeight: "500",
                  color: " #a88944",
                }}
              >
                {props.alt}
              </span>
            </div>
          </div>
          <div css={media_left}>
            <MdLocationOn
              style={{
                borderRadius: "50%",
                border: "1px solid #eee",
                padding: "4px",
                boxShadow: "1px 2px 3px rgba(0,0,0,0.5)",
                fontSize: "1em",
              }}
            />
            <div className="text">
              <span style={{ marginLeft: "10px" }}>{props.location}</span>
            </div>
          </div>

          <div css={media_left}>
            <FaRupeeSign
              style={{
                borderRadius: "50%",
                border: "1px solid #eee",
                padding: "4px",
                boxShadow: "1px 2px 3px rgba(0,0,0,0.5)",
                fontSize: "1em",
              }}
            />
            <div className="text">
              <span style={{ marginLeft: "10px" }}> {props.price}</span>
            </div>
          </div>
          <div css={media_left}>
            <GiEvilTower
              style={{
                borderRadius: "50%",
                border: "1px solid #eee",
                padding: "4px",
                boxShadow: "1px 2px 3px rgba(0,0,0,0.5)",
                fontSize: "1em",
              }}
            />
            <div className="text">
              <span style={{ marginLeft: "10px" }}>{props.towers}</span>
            </div>
          </div>
          <div css={media_left}>
            <FaCalendarAlt
              style={{
                borderRadius: "50%",
                border: "1px solid #eee",
                padding: "4px",
                boxShadow: "1px 2px 3px rgba(0,0,0,0.5)",
                fontSize: "1em",
              }}
            />
            <div className="text">
              <span style={{ marginLeft: "10px" }}>{props.possession}</span>
            </div>
          </div>

          <div css={buttons}>
            <button css={button}><Link to={`/${props.pages}`}><a>More details</a></Link></button>
            <button css={button}><ModalComponent title="Brouchure" project={props.alt}/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

const card = css`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.11);
  :hover {
    transform: translateY(-1px);
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.11);
  }
`

const card_image = css`
  img {
    width: 100%;
    height: 30vh;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background:#eeee;
    :hover {
      cursor: pointer;
    }
  }
`

const media_left = css`
  margin-bottom: 7px;
  padding: 3px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
  display: flex;
`
const card_content = css`
  padding: 10px;
`

const buttons = css`
  padding: 10px 7px;
  background: #eeee;
  text-align: center;
  display:flex;
  justify-content:space-between;
`


const button = css`
  font-size:medium;
  background: white;
  color: red;
  border-radius: 50px;
  border-color: #337ab7;
  color: #337ab7;
  padding: 8px 15px;
  a {
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
  :hover {
    transform: translateY(-1px);
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.5);
    cursor:pointer; 
  }
`

const bounce = keyframes`
from {background-color: rgba(255, 187, 0, 0.87);}
to {background-color: rgba(0, 255, 221, 0.856);}
`
export default Card;
