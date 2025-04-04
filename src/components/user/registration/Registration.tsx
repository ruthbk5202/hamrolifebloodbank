import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import './registration.css'; 

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  bloodType: string;
  birthDate: string;
  agreeToTerms: boolean;
};

const Registration = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    bloodType: '',
    birthDate: '',
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
    alert('Thank you for registering as a blood donor!');
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="dialog-backdrop">
     
      <div className="dialog-backdrop-overlay" aria-hidden="true" />
      
    
      <div className="dialog-container">
        <Dialog.Panel className="dialog-panel">
         
          <Dialog.Title className="dialog-header">
            Blood Donor Registration
          </Dialog.Title>
          
      
          <form onSubmit={handleSubmit} className="dialog-form">
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="bloodType" className="form-label">
                Blood Type *
              </label>
              <select
                id="bloodType"
                name="bloodType"
                required
                value={formData.bloodType}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select your blood type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="birthDate" className="form-label">
                Date of Birth *
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                required
                value={formData.birthDate}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-checkbox-group">
              <div className="checkbox-container">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  required
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="form-checkbox"
                />
              </div>
              <div className="checkbox-label">
                <label htmlFor="agreeToTerms" className="form-label">
                  I agree to the terms and conditions *
                </label>
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                onClick={onClose}
                className="cancel-button"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="submit-button"
              >
                Register as Donor
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Registration; 