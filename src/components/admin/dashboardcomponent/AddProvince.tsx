import React from 'react';
import "./addprovince.css";
interface AddProvinceProps{
    onClose: ()=>void;
}
const AddProvince:React.FC<AddProvinceProps> = ({onClose}) => {
  return (
    <div className='model'>
        <div className='model-container'>
         <div className='model-header'>
            <h1>Add Province</h1>
            <span className="close" onClick={onClose}>&times;</span>
         </div>
         <div className='model-body'>
            <form>
                <div>
                    <label>Province Name</label>
                    <input type="text" placeholder='Province Name'>
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

export default AddProvince;