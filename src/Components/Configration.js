import React from "react"
import TitleComponent from "../Components/Title"
import Modal from "./Modal"
import "../GlobalStyles/styles.css"

const Tabel = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <TitleComponent title=" Waterford Configuration" />
      </div>

      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr
            className="is-selected"
            style={{ backgroundColor: "#a88944", border: "3px solid #eee" }}
          >
            <th>Project</th>
            <th style={{ background: "black" }}>Configuration</th>
            <th>Unit Carpet (Sq.Ft)</th>
            <th style={{ background: "black" }}>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td rowSpan={6} style={{ fontSize: "18px", fontWeight: "500" }}>
              <br />
              <br />
              Waterford
            </td>
          </tr>
          <tr>
            <td>1 BHk</td>
            <td>
              <Modal title="Know More" class="modalbuttonsmall" />
            </td>
            <td>
              <Modal title="Know More" class="modalbuttonsmall" />
            </td>
          </tr>
          <tr>
            <td>2 BHk</td>
            <td>
              <Modal title="Know More" class="modalbuttonsmall" />
            </td>
            <td>
              <Modal title="Know More" class="modalbuttonsmall" />
            </td>
          </tr>
          <tr>
            <td>3 BHK Small</td>
            <td>
              <Modal title="Know More" class="modalbuttonsmall" />
            </td>
            <td>
              <Modal title="Know More" class="modalbuttonsmall" />
            </td>
          </tr>
          <tr>
            <td>3 BHK Large</td>
            <td>
              <Modal title="Know More" class="modalbuttonsmall" />
            </td>
            <td>
              <Modal title="Know More" class="modalbuttonsmall" />
            </td>
          </tr>
          <tr>
            <td>4 BHk</td>
            <td>
              <Modal title="Know More" class="modalbuttonsmall" />
            </td>
            <td>
              <Modal title="Know More" class="modalbuttonsmall" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tabel
