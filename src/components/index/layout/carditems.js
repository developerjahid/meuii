import React, { Fragment } from "react"
import { Card, CardImg } from 'reactstrap';

const Carditem = (props) => (
  <Fragment>
      <Card>
        <CardImg top width="100%" src={props.imageUrl} alt="Photos" />
      </Card>
  </Fragment>
)


export default Carditem