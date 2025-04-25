import React from 'react';
import "./editbloodreq.css";

interface EditBloodRequestProps {
    onClose: () => void;
}

const EditBloodRequest: React.FC<EditBloodRequestProps> = ({ onClose }) => {
    const handleCloseEdit= (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Close button clicked'); 
        onClose();
    };
    return (
        <div className='edit-blood-request-model'>
            <div className='edit-blood-request-model-container'>
                <div className='edit-blood-request-model-header'>
                    <h1>Add Blood Request</h1>
                    <span className="edit-blood-request-close" onClick={handleCloseEdit}>&times;</span>
                </div>
                <div className='edit-blood-request-model-body'>
                    <form>
                        <div>
                            <label>Full Name</label>
                            <input type="text" placeholder='Full Name' />
                        </div>
                        <div>
                            <label>Contact#</label>
                            <input type="text" placeholder='Contact' />
                        </div>
                        <div>
                            <label>Province</label>
                            <input type="text" placeholder='select province' />
                        </div>
                        <div>
                            <label>City</label>
                            <input type="text" placeholder='select City' />
                        </div>
                        <div>
                            <label> Hospital Address</label>
                            <input type="text" placeholder='Hospital Address' />
                        </div>
                        <div>
                            <label> No. of bags</label>
                            <input type="text" placeholder='No of Bags' />
                        </div>
                        <div>
                            <label> Blood Group</label>
                            <input type="text" placeholder='select Blood Group' />
                        </div>
                        <div>
                            <label> Your message</label>
                            <input type="text" placeholder='message' />
                        </div>
                        <div>
                            <label>Status</label>
                            <input type="text" placeholder='active' />
                        </div>
                        <div className='edit-blood-request-save-btn'>
                            <button type="button">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditBloodRequest;