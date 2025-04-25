// import React from 'react';
// import "./viewbloodrequest.css";

// interface ViewBloodRequestProps {
//     onClose: () => void;
// }

// interface ViewBloodRequestDetails {
//     id: number;
//     name: string;
//     regions: string[];
//     addedBy: string;
//     views: number;
//     contactNumber: string;
//     status: string;
//     address: string;
//     location: {
//         name: string;
//         coordinates: string;
//     };
//     memberSince: string;
//     branches?: {
//         name: string;
//         city: string;
//         state: string;
//         country: string;
//         contact: string;
//         latitude: string;
//     }[];
// }

// const ViewBloodRequest: React.FC<ViewBloodRequestProps> = ({ onClose }) => {
   
//     const viewbloodrequestData: ViewBloodRequestDetails = {
//         id: 13,
//         name: "View Blood Bank",
//         regions: ["Gujar Khan", "Lowa", "Qatar"],
//         addedBy: "0",
//         views: 0,
//         contactNumber: "4444444444",
//         status: "Address",
//         address: "a",
//         location: {
//             name: "one location",
//             coordinates: "33.3333, 73.2233"
//         },
//         memberSince: "26-08-2021 03:56:43 am",
//         branches: [
//             {
//                 name: "XXX",
//                 city: "Dindigul",
//                 state: "Tamil Nadu",
//                 country: "India",
//                 contact: "987643211",
//                 latitude: "10.3533"
//             }
//         ]
//     };

//     return (
//         <div className='view-request-model'>
//             <div className='view-request-model-container'>
//                 <div className='view-request-model-header'>
//                     <h1>{viewbloodrequestData.name}</h1>
//                     <span className="view-request-close" onClick={onClose}>&times;</span>
//                 </div>
//                 <div className='view-request-model-body'>
//                   <div className="view-request-blood-bank-div">
//                     <div className='view-request-blood-bank-id'>
//                         <h2>{viewbloodrequestData.id}</h2>
//                     </div>
                    
//                     <div className='view-request-region-section'>
//                         <h3>Region : - {viewbloodrequestData.regions.join(", ")}</h3>
//                     </div>
//                     </div>
//                     <div className='view-request-info-grid'>
//                         <div className='view-request-grid-add'>
//                             <div className='request-added-by'>
//                                 ADDED BY
//                             </div>
//                             <div className='request-views'>
//                                 {viewbloodrequestData.addedBy} 
//                                 <p>ViewBloodRequest</p>
//                             </div>
//                             <div className='view-request-contact'>
//                                 {viewbloodrequestData.contactNumber} CONTACT#
//                             </div>
//                         </div>
                        
//                         <div className='view-request-grid-row'>
//                             <div className='view-request-grid-cell'>
//                                 <strong>Status</strong>
//                             </div>
//                             <div className='view-request-grid-cell'></div>
//                             <div className='view-request-grid-cell'>
//                                 <strong>Active</strong>
//                             </div>
//                         </div>
                        
//                         <div className='view-request-grid-row'>
//                             <div className='view-request-grid-cell'>
//                                 {viewbloodrequestData.status}
//                             </div>
//                             <div className='view-request-grid-cell'></div>
//                             <div className='view-request-grid-cell'>
//                                 {viewbloodrequestData.address}
//                             </div>
//                         </div>
                        
//                         <div className='view-request-grid-row'>
//                             <div className='view-request-grid-cell'>
//                                 <strong>Location</strong>
//                             </div>
//                             <div className='view-request-grid-cell'></div>
//                             <div className='view-request-grid-cell'>
//                                 {viewbloodrequestData.location.name} {viewbloodrequestData.location.coordinates}
//                             </div>
//                         </div>
                        
//                         <div className='view-request-grid-row'>
//                             <div className='view-request-grid-cell'>
//                                 <strong>Member Since</strong>
//                             </div>
//                             <div className='view-request-grid-cell'></div>
//                             <div className='view-request-grid-cell'>
//                                 {viewbloodrequestData.memberSince}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ViewBloodRequest;