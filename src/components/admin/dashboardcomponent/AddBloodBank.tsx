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
               
                <div> <label>Province</label>
                    <input type="text" placeholder='select province'>
                    </input></div>
                <div> <label>District</label>
                    <input type="text" placeholder='select province'>
                    </input></div>
                <div> <label>City</label>
                    <input type="text"placeholder='select City'>
                    </input></div>
               
            
                <div> <label>Status</label>
                    <input type="text" placeholder='active'>
                    </input></div>
              
            </form>
             <div className='save-btn'>
                <button className='add-blood-bank-save-btn'>Save</button>
                </div>

         </div>
        </div>
    </div>
  )
}

export default AddBloodBank;