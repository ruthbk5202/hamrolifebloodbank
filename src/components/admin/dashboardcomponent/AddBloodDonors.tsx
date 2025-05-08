import React, { useState } from 'react';
import "./adddonor.css";

interface AddBloodDonorsProps {
    onClose: () => void;
}

interface DonorFormData {
    fullName: string;
    contact: string;
    province: string;
    district: string;
    city: string;
    habits: string;
    lastDonationDate: string;
    dateOfBirth: string;
    bloodGroup: string;
    donorType: string;
    gender: string;
    status: string;
}

const AddBloodDonors: React.FC<AddBloodDonorsProps> = ({ onClose }) => {
    const [formData, setFormData] = useState<DonorFormData>({
        fullName: '',
        contact: '',
        province: '',
        district: '',
        city: '',
        habits: '',
        lastDonationDate: '',
        dateOfBirth: '',
        bloodGroup: '',
        donorType: '',
        gender: '',
        status: 'active'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/donors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            
            if (data.success) {
                alert("Donor added successfully!");
                onClose(); // Close the modal after successful submission
            } else {
                alert("Error adding donor: " + (data.message || 'Please try again.'));
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("There was an error submitting the form. Please try again.");
        }
    };

    return (
        <div className='add-donor-model'>
            <div className='add-donor-model-container'>
                <div className='add-donor-model-header'>
                    <h1>Add Blood Donor</h1>
                    <span className="donor-close" onClick={onClose}>&times;</span>
                </div>
                <div className='add-donor-model-body'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder='Full Name'
                                required
                            />
                        </div>
                        <div>
                            <label>Contact#</label>
                            <input 
                                type="text" 
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                placeholder='Contact'
                                required
                            />
                        </div>
                        <div>
                            <label>Province</label>
                            <input 
                                type="text" 
                                name="province"
                                value={formData.province}
                                onChange={handleChange}
                                placeholder='select province'
                                required
                            />
                        </div>
                        <div>
                            <label>District</label>
                            <input 
                                type="text" 
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                                placeholder='select District'
                                required
                            />
                        </div>
                        <div>
                            <label>City</label>
                            <input 
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder='select City'
                                required
                            />
                        </div>
                        <div>
                            <label>Habits</label>
                            <input 
                                type="text"
                                name="habits"
                                value={formData.habits}
                                onChange={handleChange}
                                placeholder='Habits'
                            />
                        </div>
                        <div>
                            <label>Last Donation date</label>
                            <input 
                                type="date"
                                name="lastDonationDate"
                                value={formData.lastDonationDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Date of Birth</label>
                            <input 
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Blood Group</label>
                            <input 
                                type="text"
                                name="bloodGroup"
                                value={formData.bloodGroup}
                                onChange={handleChange}
                                placeholder='e.g., A+'
                                required
                            />
                        </div>
                        <div>
                            <label>Donor Type</label>
                            <input 
                                type="text"
                                name="donorType"
                                value={formData.donorType}
                                onChange={handleChange}
                                placeholder='e.g., Regular'
                            />
                        </div>
                        <div>
                            <label>Gender</label>
                            <input 
                                type="text"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                placeholder='e.g., Male, Female'
                                required
                            />
                        </div>
                        <div>
                            <label>Status</label>
                            <input 
                                type="text"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                placeholder='active'
                            />
                        </div>
                        <div className='save-btn-blood-donor'>
                            <button type="submit" className='add-donor-save-btn'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddBloodDonors;