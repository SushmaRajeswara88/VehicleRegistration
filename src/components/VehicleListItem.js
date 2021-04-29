import React from 'react';
import VehicleList from './VehicleList';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import VehicleDetail from './VehicleDetail';

import './VehicleListItem.css';
const VehicleListItem = ( {vehicle, onVehicleSelect}) => {
    function getImage(vehicle) {
        var imageURL = '';
        if(vehicle.vehicle.type === 'Wagon') {
            imageURL = 'https://images.unsplash.com/photo-1593460354583-4224ab273cfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80';
        } else if(vehicle.vehicle.type === 'Hatch') {
            imageURL = 'https://images.unsplash.com/photo-1587935357156-64e444af3914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80';
        } else if(vehicle.vehicle.type === 'Sedan') {
            imageURL = 'https://images.unsplash.com/photo-1597007029837-50500644a1d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
        } else if(vehicle.vehicle.type === 'SUV') {
            imageURL = 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80'
        }
        return imageURL;
    };
    return (
        <div onClick={() => onVehicleSelect(vehicle)} className="vehicleList-item item">
            <img className="ui image" src={getImage(vehicle)}/>
            <div className="content content-container">
                <div className="header">Registration Number: {vehicle.plate_number} </div>
                <div className="header">Car Details: {vehicle.vehicle.make} {vehicle.vehicle.model} </div>
                <div className="header">Expiry Date: {vehicle.registration.expiry_date} </div>
            </div>
        </div>    
    );
};

export default VehicleListItem;

