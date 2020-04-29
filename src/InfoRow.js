import React from 'react';
import Collapsible from './Collapsible.js';
//import { Row, Col } from 'reactstrap';
import './InfoRow.css'


function InfoRow(props) {
    console.log(props.info);
    return (
    <div className='rowC'> 
            <Collapsible title={props.info[0].Title} children={props.info[0].Text} image={props.info[0].Image}/>
            <Collapsible title={props.info[1].Title} children={props.info[1].Text} image={props.info[1].Image}/>
            <Collapsible title={props.info[2].Title} children={props.info[2].Text} image={props.info[2].Image}/>

    </div>
  );

}

export default InfoRow;