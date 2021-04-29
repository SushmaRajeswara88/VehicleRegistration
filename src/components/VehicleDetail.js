import React from 'react';
const VehicleDetail = ({vehicle, backToHomePage}) => {

    function formatDate(vehicle) {
        const expiryDate = new Date(vehicle.registration.expiry_date);
        const month = expiryDate.toLocaleString('default', { month: 'long' });
        return expiryDate.getDate() + ' ' + month + ' ' + expiryDate.getFullYear();
    };

    function monthsToExpiry(vehicle) {
        const expiryDate = new Date(vehicle.registration.expiry_date);
        const date1 = new Date();
        var months;
        var remaining;
        months = (date1.getFullYear() - expiryDate.getFullYear()) * 12;
        if (months <= 0) {
            remaining = months - expiryDate.getMonth();
            remaining = months + date1.getMonth();
        }
        return months > 0 ? 'Registration Expired. Please register again.' : remaining;
    };

    function getImageSrc(vehicle) {
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
    if (!vehicle) {
        return <div>Loading...</div>
    }
    return (

            <div className="car-detail">
                <img className="img-car" src={getImageSrc(vehicle)} />
                <div className="ui header">{vehicle.plate_number}</div>
                <div>
                    <label className="label">Registration Expiry: </label>
                    {formatDate(vehicle)}
                </div>
                <div><label className="label">Registration Status: </label> {vehicle.registration.expired}</div>
                <div><label className="label">Type: </label> {vehicle.vehicle.type}</div>
                <div><label className="label">Make: </label> {vehicle.vehicle.make}</div>
                <div><label className="label">Model: </label>{vehicle.vehicle.model}</div>
                <div><label className="label">Color: </label> {vehicle.vehicle.colour}</div>
                <div><label className="label">Vin: </label>{vehicle.vehicle.vin.toString().slice(-4)}</div>
                <div><label className="label">Tare Weight: </label>{vehicle.vehicle.tare_weight}</div>
                <div><label className="label">Gross Mass: </label>{vehicle.vehicle.gross_mass}</div>
                <div><label className="label">Insurer Name: </label>{vehicle.insurer.name}</div>
                <div><label className="label">Insurer Code: </label>{vehicle.insurer.code}</div>
                <div><label className="label">Months to expiry:  </label>{monthsToExpiry(vehicle)}</div>
                <button className="btn" onClick={() => backToHomePage()} >Back</button>
            </div>


    );
};
export default VehicleDetail;