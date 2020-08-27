import React, { useState } from "react"
import emailjs from "emailjs-com"
import "../GlobalStyles/styles.css"
// import LastScreen from './Finalscreen';

const Sidemenu = props => {
  const [state, setstate] = useState("popup closepopup")
  const [nextstep, setnextstep] = useState("buttonps")
  const [costone, setcostone] = useState("popupps closepopup")
  const [costtwo, setcosttwo] = useState("buttonps")

  const [phoneone, setphoneone] = useState(0)
  const [phonetwo, setphonetwo] = useState(0)

  const handelPopUp = () => {
    {
      state === "popup closepopup"
        ? setstate("popup")
        : setstate("popup closepopup")
    }
    {
      nextstep === "buttonps"
        ? setnextstep("buttonps button-closed")
        : setnextstep("buttonps")
    }

    if (costone === "popupps") {
      setcostone("popupps closepopup")
    } else if (costtwo === "buttonps") {
      setcosttwo("buttonps button-closed")
    }
  }

  const handelCostSheet = () => {
    {
      costone === "popupps closepopup"
        ? setcostone("popupps")
        : setcostone("popupps closepopup")
    }
    {
      costtwo === "buttonps"
        ? setcosttwo("buttonps button-closed1")
        : setcosttwo("buttonps")
    }
    if (state === "popup") {
      setstate("popup closepopup")
    } else if (nextstep === "buttonps button-closed") {
      setnextstep("buttonps")
    }
  }

  const restrictingone = e => {
    let value = e.target.value
    if (value.length > 10) {
      alert("You are not allowed to enter Fake Numbers")
      setphoneone(0)
    }
    setphoneone(value)
  }

  const restricingSecond = e => {
    let valueone = e.target.value
    if (valueone.length > 10) {
      alert("You are not allowed to enter more than 10 digits")
      setphonetwo(0)
    }
    setphonetwo(valueone)
  }

  const firstForm = e => {
    e.preventDefault()
    let vaueone = e.target.elements.email.value
    let templateParams1 = {
      name: vaueone,
      phonenumber: phoneone,
      PropertyName: "Prestige  Waterford",
    }
    var requiredData = JSON.stringify(templateParams1)

    var template_params = {
      from_name: "Waterford Lead",
      to_name: "Mahid Ali",
      message_html: requiredData,
    }

    emailjs
      .send(
        "default_service",
        "template_Be8dpfNK",
        template_params,
        "user_dL8CNNb8AnMR28qE6oOlM"
      )
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text)
        },
        function(err) {
          console.log("FAILED...", err)
        }
      )
  }

  const secondform = e => {
    e.preventDefault()
    let vaueone = e.target.elements.email.value
    let templateParams1 = {
      name: vaueone,
      phonenumber: phonetwo,
      PropertyName: "Prestige  Waterford",
    }

    var requiredData = JSON.stringify(templateParams1)

    var template_params = {
      from_name: "Waterford Lead",
      to_name: "Mahid Ali",
      message_html: requiredData,
    }

    emailjs
      .send(
        "default_service",
        "template_Be8dpfNK",
        template_params,
        "user_dL8CNNb8AnMR28qE6oOlM"
      )
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text)
        },
        function(err) {
          console.log("FAILED...", err)
        }
      )
  }

  return (
    <div>
      <div className={state} style={{ marginTop: `${props.height}` }}>
        <div className="popup-content">
          <div className="form-heada">
            <h1>Fill Form to Download Brouchure</h1>
          </div>
          <form
            name="brouchereform"
            onSubmit={firstForm}
            method="POST"
            id="frmdb"
          >
            <div id="sucess1"></div>
            <div className="form-groupa">
              <input
                required
                placeholder="Your emailId"
                type="email"
                name="email"
                id="email1"
              />
              <br />
            </div>
            <div className="form-groupa">
              <input
                onChange={restrictingone}
                required
                type="number"
                placeholder="Your Phone Number"
                name="mobile"
                id="mobile1"
                minLength="10"
                maxLength="20"
                title="Must have 10 digit numbers"
                pattern="^\d{10}$"
              />
              <br />
            </div>
            <div className="form-button">
              <button className="prestigecopyabcd" type="submit" name="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <a className={nextstep} onClick={handelPopUp}>
          Download Brouchure
        </a>
      </div>

      <div className={costone}>
        <div className="popup-content" style={{ height: "225px" }}>
          <div className="form-heada">
            <h1>Fill Form to Download cost sheet</h1>
          </div>
          <form
            action="./popup.php"
            method="POST"
            className="callRequest"
            id="frmps"
            onSubmit={secondform}
          >
            <div id="sucess2"></div>
            <div className="form-groupa">
              <input
                required
                type="email"
                placeholder="Your Emailid"
                name="email"
                id="email2"
              />
              <br />
            </div>
            <div className="form-groupa">
              <input
                onChange={restricingSecond}
                type="number"
                required
                placeholder="Your Number"
                name="mobile"
                id="mobile2"
                minLength="10"
                maxLength="20"
                title="Must have 10 digit numbers"
                pattern="^\d{10}$"
              />
              <br />
            </div>

            <div className="form-button">
              <button name="submit" className="prestigecopyabcd" type="submit">
                submit
              </button>
            </div>
          </form>
        </div>
        <a className={costtwo} onClick={handelCostSheet}>
          Download CostSheet
        </a>
      </div>
    </div>
  )
}

export default Sidemenu
