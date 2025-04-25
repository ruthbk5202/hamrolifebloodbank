import React from 'react';
import "./views.css";

interface ViewProps {
    onClose: () => void;
}

interface ViewDetails {
    id: number;
    name: string;
    regions: string[];
    addedBy: string;
    views: number;
    contactNumber: string;
    status: string;
    address: string;
    location: {
        name: string;
        coordinates: string;
    };
    memberSince: string;
    branches?: {
        name: string;
        city: string;
        state: string;
        country: string;
        contact: string;
        latitude: string;
    }[];
}

const Views: React.FC<ViewProps> = ({ onClose }) => {
   
    const bloodBankData: ViewDetails = {
        id: 13,
        name: "View Blood Bank",
        regions: ["Gujar Khan", "Lowa", "Qatar"],
        addedBy: "0",
        views: 0,
        contactNumber: "4444444444",
        status: "Address",
        address: "a",
        location: {
            name: "one location",
            coordinates: "33.3333, 73.2233"
        },
        memberSince: "26-08-2021 03:56:43 am",
        branches: [
            {
                name: "XXX",
                city: "Dindigul",
                state: "Tamil Nadu",
                country: "India",
                contact: "987643211",
                latitude: "10.3533"
            }
        ]
    };

    return (
        <div className='view-model'>
            <div className='view-model-container'>
                <div className='view-model-header'>
                    <h1>{bloodBankData.name}</h1>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <div className='view-model-body'>
                  <div className="blood-bank-div">
                    <div className='blood-bank-id'>
                        <h2>{bloodBankData.id}</h2>
                    </div>
                    
                    <div className='region-section'>
                        <h3>Region : - {bloodBankData.regions.join(", ")}</h3>
                    </div>
                    </div>
                    <div className='info-grid'>
                        <div className='grid-add'>
                            <div className='added-by'>
                                ADDED BY
                            </div>
                            <div className='views'>
                                {bloodBankData.addedBy} 
                                <p>Views</p>
                            </div>
                            <div className='contact'>
                                {bloodBankData.contactNumber} CONTACT#
                            </div>
                        </div>
                        
                        <div className='grid-row'>
                            <div className='grid-cell'>
                                <strong>Status</strong>
                            </div>
                            <div className='grid-cell'></div>
                            <div className='grid-cell'>
                                <strong>Active</strong>
                            </div>
                        </div>
                        
                        <div className='grid-row'>
                            <div className='grid-cell'>
                                {bloodBankData.status}
                            </div>
                            <div className='grid-cell'></div>
                            <div className='grid-cell'>
                                {bloodBankData.address}
                            </div>
                        </div>
                        
                        <div className='grid-row'>
                            <div className='grid-cell'>
                                <strong>Location</strong>
                            </div>
                            <div className='grid-cell'></div>
                            <div className='grid-cell'>
                                {bloodBankData.location.name} {bloodBankData.location.coordinates}
                            </div>
                        </div>
                        
                        <div className='grid-row'>
                            <div className='grid-cell'>
                                <strong>Member Since</strong>
                            </div>
                            <div className='grid-cell'></div>
                            <div className='grid-cell'>
                                {bloodBankData.memberSince}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Views;