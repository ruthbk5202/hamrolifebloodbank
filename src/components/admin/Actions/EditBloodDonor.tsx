import React from 'react';
import "./editblooddonor.css";
interface EditBloodDonorsProps{
    onClose: ()=>void;
}
const EditBloodDonor:React.FC<EditBloodDonorsProps> = ({onClose}) => {
  return (
    <div className='edit-donor-model'>
        <div className='edit-donor-model-container'>
         <div className='edit-donor-model-header'>
            <h1>Edit Blood Donor</h1>
            <span className="edit-donor-close" onClick={onClose}>&times;</span>
         </div>
         <div className='edit-donor-model-body'>
            <form>
                <div>
                    <label>Full Name</label>
                    <input type="text" placeholder='Full Name'>
                    </input>
                </div>
                <div> <label>Contact#</label>
                    <input type="text" placeholder='Contact'>
                    </input></div>
               
                <div> <label>Province</label>
                    <input type="text" placeholder='select province'>
                    </input></div>
                <div> <label>District</label>
                    <input type="text" placeholder='select District'>
                    </input></div>
                <div> <label>City</label>
                    <input type="text"placeholder='select City'>
                    </input></div>
                <div> <label>Habits</label>
                    <input type="text"placeholder='Habits'>
                    </input></div>
                <div> <label>Last Donation date</label>
                    <input type="date"placeholder=''>
                    </input></div>
                <div> <label>Date of Birth</label>
                    <input type="date"placeholder=''>
                    </input></div>
                <div> <label>Blood Group</label>
                    <input type="text"placeholder=''>
                    </input></div>
                <div> <label>Donor Type</label>
                    <input type="text"placeholder=''>
                    </input></div>
                <div> <label>Gender</label>
                    <input type="text"placeholder=''>
                    </input></div>
               
            
                <div> <label>Status</label>
                    <input type="text" placeholder='active'>
                    </input></div>
              
            </form>
             <div className='edit-donor-save-btn'>
                <button className='add-donor-save-btn-edit'>Save</button>
                </div>

         </div>
        </div>
    </div>
  )
}

export default EditBloodDonor;