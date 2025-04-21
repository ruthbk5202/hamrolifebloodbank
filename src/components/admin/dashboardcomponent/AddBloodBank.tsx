import React from 'react';
import "./addbloodbank.css";
interface AddBloodBankProps{
    onClose: ()=>void;
}
const AddBloodBank:React.FC<AddBloodBankProps> = ({onClose}) => {
  return (
    <div className='model'>
        <div className='model-container'>
         <div className='model-header'>
            <h1>Add Blood Banks</h1>
            <span className="close" onClick={onClose}>&times;</span>
         </div>
         <div className='model-body'>
            <form>
                <div>
                    <label>Bloodbank Name</label>
                    <input type="text" placeholder='Bloodbank Name'>
                    </input>
                </div>
                <div> <label>Contact#</label>
                    <input type="text" placeholder='Contact'>
                    </input></div>
                <div> <label>Country</label>
                    <input type="text" placeholder='select country'>
                    </input></div>
                <div> <label>Province</label>
                    <input type="text" placeholder='select province'>
                    </input></div>
                <div> <label>City</label>
                    <input type="text"placeholder='select City'>
                    </input></div>
                <div> <label>Address</label>
                    <input type="text" placeholder='Address'>
                    </input></div>
                <div> <label>Search Location</label>
                    <input type="text" placeholder='Enter a Location'>
                    </input></div>
                <div> <label>Latitude</label>
                    <input type="text" placeholder='0.000000'>
                    </input></div>
                <div> <label>Longtude</label>
                    <input type="text"placeholder='0.000000'>
                    </input></div>
                <div> <label>Status</label>
                    <input type="text" placeholder='active'>
                    </input></div>
                <div> <label>Bloodbank Name</label>
                    <input type="text">
                    </input></div>
                <div> <label>Bloodbank Name</label>
                    <input type="text">
                    </input></div>
            </form>

         </div>
        </div>
    </div>
  )
}

export default AddBloodBank;