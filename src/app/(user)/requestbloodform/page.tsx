"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./requestBloodForm.css";

type FormData = {
  patientName: string;
  bloodGroup: string;
  unitsRequired: string;
  contactPersonPhoneNumber: string;
  hospitalName: string; 
  hospitalAddress: string; 
  file: File | null; 
  notes: string;
};

type Errors = {
  patientName?: string;
  bloodGroup?: string;
  unitsRequired?: string;
  contactPersonPhoneNumber?: string;
  hospitalName?: string; 
  hospitalAddress?: string; 
  file?: string; 
  notes?: string;
};

const RequestBloodForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    patientName: "",
    bloodGroup: "",
    unitsRequired: "",
    contactPersonPhoneNumber: "",
    hospitalName: "", 
    hospitalAddress: "", 
    file: null, 
    notes: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof Errors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Validate file type and size (e.g., 5MB max)
      const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!validTypes.includes(file.type)) {
        setErrors({
          ...errors,
          file: "Please upload a PDF or Word document",
        });
        return;
      }
      
      if (file.size > maxSize) {
        setErrors({
          ...errors,
          file: "File size must be less than 5MB",
        });
        return;
      }
      
      setFormData({
        ...formData,
        file,
      });
      // Clear file error if validation passes
      if (errors.file) {
        setErrors({
          ...errors,
          file: undefined,
        });
      }
    }
  };

  const handleChangeNotes = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePhoneNumber = (phone: string) => {
    // Simple phone number validation (adjust based on your requirements)
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    
    if (!formData.patientName.trim()) {
      newErrors.patientName = "Patient name is required";
    } else if (formData.patientName.trim().length < 3) {
      newErrors.patientName = "Patient name must be at least 3 characters";
    }
    
    if (!formData.bloodGroup) {
      newErrors.bloodGroup = "Blood group is required";
    }
    
    if (!formData.unitsRequired) {
      newErrors.unitsRequired = "Units required is required";
    } else if (isNaN(Number(formData.unitsRequired)) ){
      newErrors.unitsRequired = "Please enter a valid number";
    } else if (Number(formData.unitsRequired) <= 0) {
      newErrors.unitsRequired = "Units must be greater than 0";
    } else if (Number(formData.unitsRequired) > 10) {
      newErrors.unitsRequired = "Maximum 10 units allowed per request";
    }
    
    if (!formData.contactPersonPhoneNumber) {
      newErrors.contactPersonPhoneNumber = "Contact phone is required";
    } else if (!validatePhoneNumber(formData.contactPersonPhoneNumber)) {
      newErrors.contactPersonPhoneNumber = "Please enter a valid phone number";
    }
    
    if (!formData.hospitalName.trim()) {
      newErrors.hospitalName = "Hospital name is required";
    } else if (formData.hospitalName.trim().length < 3) {
      newErrors.hospitalName = "Hospital name must be at least 3 characters";
    }
    
    if (!formData.hospitalAddress.trim()) {
      newErrors.hospitalAddress = "Hospital address is required";
    } else if (formData.hospitalAddress.trim().length < 10) {
      newErrors.hospitalAddress = "Please provide a more detailed address";
    }
    
    if (!formData.file) {
      newErrors.file = "File is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Here you would typically send the data to your API
        console.log("Form submitted:", formData);
        
        // Create FormData for file upload
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          if (value !== null) {
            formDataToSend.append(key, value instanceof File ? value : String(value));
          }
        });
        
        // Example API call (uncomment and implement your actual API endpoint)
        /*
        const response = await fetch('/api/blood-request', {
          method: 'POST',
          body: formDataToSend,
        });
        
        if (!response.ok) {
          throw new Error('Submission failed');
        }
        */
        
        alert("Blood request submitted successfully!");
        router.push("/");
      } catch (error) {
        console.error("Submission error:", error);
        alert("Failed to submit request. Please try again.");
      }
    }
  };

  return (
    <div>
      <nav className="blood-req-nav">
        <h6>Blood Request Form</h6>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,32L80,64C160,96,320,160,480,170.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </nav>
      <div className="request-blood-container">
        <div className="request-blood-form-container">
          <h1>Request Blood</h1>
          <form onSubmit={handleSubmit} className="request-blood-form" noValidate>
            <div className={`form-group ${errors.patientName ? 'error' : ''}`}>
              <label htmlFor="patientName">Patient Name</label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="Enter patient's name"
                className={errors.patientName ? 'invalid' : ''}
              />
              {errors.patientName && <span className="error-message">{errors.patientName}</span>}
            </div>

            <div className={`form-group ${errors.bloodGroup ? 'error' : ''}`}>
              <label htmlFor="bloodGroup">Blood Group</label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className={errors.bloodGroup ? 'invalid' : ''}
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              {errors.bloodGroup && <span className="error-message">{errors.bloodGroup}</span>}
            </div>

            <div className={`form-group ${errors.unitsRequired ? 'error' : ''}`}>
              <label htmlFor="unitsRequired">Units Required (1-10)</label>
              <input
                type="number"
                id="unitsRequired"
                name="unitsRequired"
                value={formData.unitsRequired}
                onChange={handleChange}
                placeholder="Enter units required"
                min="1"
                max="10"
                className={errors.unitsRequired ? 'invalid' : ''}
              />
              {errors.unitsRequired && <span className="error-message">{errors.unitsRequired}</span>}
            </div>

            <div className={`form-group ${errors.contactPersonPhoneNumber ? 'error' : ''}`}>
              <label htmlFor="contactPersonPhoneNumber">Contact Person Phone Number</label>
              <input
                type="tel"
                id="contactPersonPhoneNumber"
                name="contactPersonPhoneNumber"
                value={formData.contactPersonPhoneNumber}
                onChange={handleChange}
                placeholder="Enter contact phone number"
                className={errors.contactPersonPhoneNumber ? 'invalid' : ''}
              />
              {errors.contactPersonPhoneNumber && <span className="error-message">{errors.contactPersonPhoneNumber}</span>}
            </div>

            <div className={`form-group ${errors.hospitalName ? 'error' : ''}`}>
              <label htmlFor="hospitalName">Hospital Full Name</label>
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                placeholder="Enter hospital name"
                className={errors.hospitalName ? 'invalid' : ''}
              />
              {errors.hospitalName && <span className="error-message">{errors.hospitalName}</span>}
            </div>

            <div className={`form-group ${errors.hospitalAddress ? 'error' : ''}`}>
              <label htmlFor="hospitalAddress">Hospital Address</label>
              <input
                type="text"
                id="hospitalAddress"
                name="hospitalAddress"
                value={formData.hospitalAddress}
                onChange={handleChange}
                placeholder="Enter hospital address"
                className={errors.hospitalAddress ? 'invalid' : ''}
              />
              {errors.hospitalAddress && <span className="error-message">{errors.hospitalAddress}</span>}
            </div>

            <div className={`form-group ${errors.file ? 'error' : ''}`}>
              <label htmlFor="file">Upload Medical Document (PDF/DOC, max 5MB)</label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className={errors.file ? 'invalid' : ''}
              />
              {errors.file && <span className="error-message">{errors.file}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="notes">Additional Notes</label>
              <textarea 
                id="notes" 
                name="notes" 
                value={formData.notes} 
                onChange={handleChangeNotes} 
                placeholder="Enter any additional information"
                rows={4}
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestBloodForm;