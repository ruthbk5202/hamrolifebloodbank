import React from 'react';
import "./bloodbankedit.css";

interface EditBloodBankProps {
    onCloseBtn: () => void;
}

const BloodBankEdit: React.FC<EditBloodBankProps> = ({ onCloseBtn }) => {
    const handleClose = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Close button clicked'); // For debugging
        onCloseBtn();
    };
    return (
        <div className='edit-model'>
            <div className='edit-model-container'>
                <div className='edit-model-header'>
                    <h1>Edit Blood Bank</h1>
                    <span className="edit-close" onClick={handleClose}>&times;</span>
                </div>
                <div className='edit-model-body'>
                    <form>
                        <div>
                            <label>Bloodbank Name</label>
                            <input type="text" placeholder='Bloodbank Name' />
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
                            <label>Address</label>
                            <input type="text" placeholder='Address' />
                        </div>
                        <div>
                            <label>Status</label>
                            <input type="text" placeholder='active' />
                        </div>
                        <div className='save-btn-edit'>
                            <button type="button">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BloodBankEdit;