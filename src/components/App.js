import React from 'react';
import VehicleList from './VehicleList';
import VehicleDetail from './VehicleDetail';
import VehicleListItem from './VehicleListItem';
import {BrowserRouter, Route} from 'react-router-dom';


class App extends React.Component {
    state = {vehicleList: [], selectedVehicle: null, showDetail: false};
    componentDidMount() {
        fetch('https://dl.dropboxusercontent.com/s/o9iiprxmkv2um27/snsw_registrations_api.json?dl=1')
        .then(response => response.json())
        .then(data => {
            console.log(data.registrations);
            this.setState({vehicleList: data.registrations, selectedVehicle: data.registrations[0]});
        });
    }

    onVehicleSelect = (vehicle) => {
        this.setState({selectedVehicle: vehicle});
        this.setState({showDetail: true});
    };

    backToHomePage = () => {
        this.setState({showDetail: false});
    };

    render() {
        return (
            <div className= "main-container"> 
            <h2>Vehicle Registrations</h2>          
               {this.state.showDetail ? (
                    <VehicleDetail vehicle={this.state.selectedVehicle} backToHomePage={this.backToHomePage}/>
                ) : (
                    <VehicleList onVehicleSelect={this.onVehicleSelect} vehicles={this.state.vehicleList} />
                )}
            </div>
        );
    };
}
export default App;