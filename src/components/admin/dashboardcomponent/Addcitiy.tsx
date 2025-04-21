import React from 'react';
import "./addcity.css";
interface AddCityProps{
    onClose: () =>void;
}
const AddCity:React.FC<AddCityProps> = ({onClose}) => {
  return (
    <div className='city-model'>
        <div className='city-model-container'>
         <div className='city-model-header'>
            <h1>Add City</h1>
            <span className="close" onClick={onClose}>&times;</span>
         </div>
         <div className='city-model-body'>
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
                <div>
                    <label>City </label>
                    <input type="text" placeholder=''>
                    </input>
                </div>
           
        <div className='city-save-btn'>
            <button >Save</button>
        </div>
            </form>

         </div>
        </div>
    </div>
  )
}

export default AddCity;