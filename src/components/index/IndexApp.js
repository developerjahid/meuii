import React from "react"
import { CardColumns } from 'reactstrap';
import Card from "./layout/card"


const IndexApp = () => (
  <div className="photos container">
      <CardColumns>
          <Card />
      </CardColumns>
  </div>
)


export default IndexApp
