import React, { Component, PropTypes } from 'react';
import {  Col, Card,CardBlock } from 'reactstrap';
import { browserHistory } from 'react-router';

class PeopleItem extends Component{

  constructor(props) {
    super(props);
    this.onClick=this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  handleClick() {
    const {item} = this.props;
    const fromIndex = item.url.lastIndexOf('people/') + 7;
    const id = parseInt(item.url.substring(fromIndex, item.url.length));
    browserHistory.push('/person/'+id);
  }

  render() {
    let style = {
      paddingTop:30,
    };
    const {item} = this.props;
    const fromIndex = item.url.lastIndexOf('people/') + 7;
    const id = parseInt(item.url.substring(fromIndex, item.url.length));


    let classNameById = "peopleCards" + "-" + id%10;
    return(
      <Col className={"visible"}  xs="4" sm="4" md="3" lg="2" style={style}>
        <Card onClick={this.onClick}>
          <CardBlock className={classNameById} />
          <CardBlock
            style={{"paddingLeft": "5px",
                      "paddingRight": "5px"}}>
            <small className="text-left"><b>{this.props.item.name}</b></small>
            <p><small>{this.props.item.gender},{this.props.item.birth_year}</small></p>
          </CardBlock>
        </Card>
      </Col>
    );
  }
}

PeopleItem.propTypes = {
  item: PropTypes.object
};

export default PeopleItem;
