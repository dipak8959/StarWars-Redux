import React, { PropTypes } from 'react';

const Vehicles = props => {

  const {vehiclesObj} = props;
  return (
    <ul>
      {
        vehiclesObj.items.map(vehicle => {
          return <li key={vehicle.name}>{vehicle.name}</li>;
        })
      }
    </ul>);
};

Vehicles.propTypes = {
  vehiclesObj: PropTypes.object
};

export default Vehicles;
