import React from 'react';
import "./adddistricts.css";
interface AddDistrictsProps{
    onClose: () =>void;
}
const AddDistricts:React.FC<AddDistrictsProps> = ({onClose}) => {
  return (
    <div className='districts-model'>
        <div className='districts-model-container'>
         <div className='districts-model-header'>
            <h1>Add Districts</h1>
            <span className="close" onClick={onClose}>&times;</span>
         </div>
         <div className='districts-model-body'>
            <form>
                <div>
                    <label>Province</label>
                    <input type="text" placeholder=''>
                    </input>
                </div>
                <div>
                    <label>Districts </label>
                    <input type="text" placeholder=''>
                    </input>
                </div>
           
        <div className='save-btn'>
            <button >Save</button>
        </div>
            </form>

         </div>
        </div>
    </div>
  )
}

export default AddDistricts;