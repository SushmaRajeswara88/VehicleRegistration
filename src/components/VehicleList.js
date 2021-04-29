import React from 'react';
import VehicleListItem from './VehicleListItem';

const VehicleList = ({ vehicles, onVehicleSelect }) => {

    const renderedList = vehicles.map((vehicle) => {
        return (
        <VehicleListItem  onVehicleSelect={onVehicleSelect} vehicle={vehicle} />
        );
    });
    return <div className="ui relaxed divided list list-car">{renderedList}</div>
};

export default VehicleList;