import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Container, Row, Col, Card ,CardBlock, CardText, CardDeck} from 'reactstrap';
import { fetchPerson } from '../actions/person';

class PersonPage extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {id} = this.props;
    this.props.dispatch(fetchPerson(id));
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'RESET_STATE'});
  }

  getSpecies(item,species){
    return(
        species ?
          <Card className="cardSuppress">
            <CardBlock>{"SPECIES"}</CardBlock>
            <CardBlock className="text-center small">
              <CardText>
                <Row >
                  <Col>
                    <b>Classification</b>:
                    {species.classification}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <b>Designation</b>:
                    {species.designation}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <b>Language</b>:
                    {species.language}
                  </Col>
                </Row>
              </CardText>
            </CardBlock>
          </Card>
        : <div>Loading species...</div>
      );
    }

  getVehiclesDiv(item,vehicles){
    return(
      <Card className="cardSuppress">
        <CardBlock className="cardHeader">{"VEHICLES"}</CardBlock>
        <CardBlock>
          {
            item.vehicles.length === 0 ?
              <div>none</div>:
              <CardText>
                {
                  !vehicles.isFetching && vehicles.receivedAt!==null ?
                    <div>
                      {
                        vehicles.items.map(vehicle =>
                          {
                            return(
                              <Row key={vehicle.name}>
                                <Col className="small">
                                  {vehicle.name}
                                </Col>
                              </Row>);
                          }
                        )
                      }
                    </div>
                  :<div>Loading vehicles...</div>
                }
              </CardText>
            }
        </CardBlock>
      </Card>);
    }

  getFilmsDiv(item,films){
    return(
      <Card className="cardSuppress">
        <CardBlock className="cardHeader">{"FILMS"}</CardBlock>
        <CardBlock>
          {
            item.films.length === 0 ?
              <div>none</div>:
              <CardText className="small">
                {!films.isFetching && films.receivedAt !== null ?
                  <div>
                    {
                      films.items.map(film => {
                        return(
                          <Row key={film.title}>
                            <Col lg="2" className="text-right">+
                            </Col>
                            <Col lg="10"className="text-left">
                              {film.title}
                            </Col>
                          </Row>);
                      })
                    }
                  </div>
                : <div>Loading species...</div>
                }
              </CardText>
          }
        </CardBlock>
      </Card>);
  }

  getHomeWordlDiv(item,homeworld){
    return(homeworld ?
      <Card className="cardSuppress">
        <CardBlock className="cardHeader">{"HOME"}</CardBlock>
        <CardBlock>
          <CardText>
            <Row>
              <Col className="small">
                <b>HomeWorld</b>: {homeworld.name}
              </Col>
            </Row>
            <Row>
              <Col className="small">
                <b>HomeWorld</b>: {homeworld.climate}
              </Col>
            </Row>
            <Row>
              <Col className="small">
                <b>Rotation Period</b>: {homeworld.rotation_period}
              </Col>
            </Row>
            <Row>
              <Col className="small">
                <b>Population</b>: {homeworld.population}
              </Col>
            </Row>
          </CardText>
        </CardBlock>
      </Card>
    : <div>Loading HomeWorl...</div>);
  }

  getStarShips(item,starships) {
      return(
        <Card className="cardSuppress">
          <CardBlock className="cardHeader">{"STARSHIPS"}</CardBlock>
          <CardBlock>
            {
              item.starships.length===0 ?
                <div>none</div>:
                <CardText className="small">
                  {!starships.isFetching && starships.receivedAt!==null ?
                    <div>
                      {
                        starships.items.map(starship => {
                          return(
                            <Row key={starship.name}>
                              <Col lg="2" className="text-right">
                              +</Col>
                              <Col lg="10"className="text-left">
                                {starship.name}
                              </Col>
                            </Row>);
                          })
                      }
                    </div>
                  : <div>Loading species...</div>
                  }
                </CardText>
            }
          </CardBlock>
        </Card>
      );
  }

  render()
  {
    const {item, species, vehicles, starships, films, homeworld} = this.props;
    return (
      <Container style={{"height": "100%"}}>
        {
          item ?
            <Row  className="personPagePersonHeader">
              <Col>
                <Row className="personPageInRowHelper">
                  <Col>
                    <div className="container">
                      <Row>
                        <div className="profileHeaderContainer">
                          <div className="profileHeaderImg">
                            <img
                              className="imgCircle"
                              src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Darth_Vader-128.png"
                              alt="NotFound" />
                            <div className="tagLabelContainer">
                              <span className="label labelDefault tagLabel">{item.name}</span>
                            </div>
                          </div>
                        </div>
                      </Row>
                    </div>
                    <Row className="personPageBirthYear">
                      <Col>
                        <b>Birth Year</b> {item.birth_year}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col className="text-right">
                            <label className="label labelDefault tagLabel">Height</label> {item.height}cm
                          </Col>
                          <Col>
                            <label className="label labelDefault tagLabel">Mass</label> {item.mass}pounds
                          </Col>
                          <Col className="text-left">
                            <label className="label labelDefault tagLabel">Hair colour</label> {item.hair_color}
                          </Col>
                        </Row>
                        <Row>
                          <Col className="text-right">
                            <label className="label labelDefault tagLabel">Skin colour</label> {item.skin_color}
                          </Col>
                          <Col>
                            <label className="label labelDefault tagLabel">Eye colour</label> {item.eye_color}
                          </Col>
                          <Col className="text-left">
                            <label className="label labelDefault tagLabel">Gender</label> {item.gender}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="personPageBottomRow">
                  <Col>
                    <CardDeck className="text-center personPageUpper">
                      { this.getSpecies(item,species)}
                      { this.getVehiclesDiv(item,vehicles) }
                      { this.getStarShips(item,starships) }
                      { this.getFilmsDiv(item,films) }
                      { this.getHomeWordlDiv(item,homeworld) }
                    </CardDeck>
                  </Col>
                </Row>
              </Col>
            </Row>
          :
          <div>Loading...</div>
      }
      </Container>);
    }
  }

PersonPage.propTypes = {
  id: PropTypes.string,
  item: PropTypes.object,
  species: PropTypes.object,
  vehicles: PropTypes.object,
  starships: PropTypes.object,
  films: PropTypes.object,
  homeworld : PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  item: state.person.item,
  species: state.species.speciesForPerson,
  vehicles: state.vehicles,
  starships: state.starships,
  films: state.films,
  homeworld : state.homeworld.homeForPerson,
  id: ownProps.params.id,
});

export default withRouter(connect(
  mapStateToProps
)(PersonPage));
