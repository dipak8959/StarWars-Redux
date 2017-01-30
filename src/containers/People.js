import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Row, CardDeck,Col, InputGroup, Input }
        from 'reactstrap';
import { fetchPeople } from '../actions/people';
import PeopleItem from '../components/PeopleItem';
import UrlParser from '../utils/urlParser';

class People extends Component {

  constructor(props) {
    super(props);
    this.state = {
        stateItems: [],
        dataAval: true,
      };
       this.handleChange = this.handleChange.bind(this);
  }

  // Once Component is Mounted
  componentDidMount() {
     this.goToHomePage();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.items){
      this.setState ({
        stateItems :  [...this.state.stateItems,
                        ...nextProps.items],
        dataAval : true
      });
    }
  }

  LoadMorePage() {
      if(this.props.next){
          this.props.dispatch(fetchPeople(UrlParser.getUrlParams(this.props.next)));
      }
      else{
        this.setState ({
          dataAval : false
        });
      }
  }

  handleChange(event) {
    this.setState({stateItems : []});
      if(event.target.value){
        this.props.dispatch(fetchPeople({'search':event.target.value}));
      }
      else{
         this.goToHomePage();
      }
  }

  goToHomePage(){
      this.props.dispatch(fetchPeople({'page':1}));
  }

  // Render component's UI
  render() {
    let items = this.state.stateItems;
    let style = {
      paddingTop:30
    };

    return (
      <Container>
        <Row>
          <h4>People</h4>
        </Row>
        <Row>
          <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
            <InputGroup>
              <Input type="text" onChange={this.handleChange} />
            </InputGroup>
          </Col>
        </Row>
        {items ?
          <CardDeck width="100%">
            {
                items.map(item => {
                  return <PeopleItem key={item.url} item={item} />;
                })
            }
          </CardDeck>
          : <p>Loading...</p>
        }
        <Row style={style}>
          <Col md={{ size:2, offset:5}}>
            <Button
              disabled={!this.state.dataAval}
              onClick={(e) => this.LoadMorePage(e)}> Load More</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

// Type Checking using React
People.propTypes = {
  dispatch: PropTypes.func,
  next: PropTypes.string,
  items: PropTypes.array,
  count: PropTypes.number,
  previous: PropTypes.string,
};

// items Mapping with State
const mapStateToProps = (state) => ({
  items: state.people.items,
  count: state.people.count,
  next: state.people.next,
  previous: state.people.previous,
});

// Export
export default connect(
  mapStateToProps
)(People);
