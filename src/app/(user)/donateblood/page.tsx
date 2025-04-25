"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./donate.css";

type FormData = {
  name: string;
  dob: string;
  phone: string;
  email: string;
  gender: string;
  bloodGroup: string;
  address: string;
};

type Errors = {
  name?: string;
  dob?: string;
  phone?: string;
  email?: string;
  gender?: string;
  bloodGroup?: string;
  address?: string;
};

const DonateBlood = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    dob: "",
    phone: "",
    email: "",
    gender: "",
    bloodGroup: "",
    address: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleUpcomingDonation = () => {
    router.push('/upcomingdonationevent');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
   
    if (errors[name as keyof Errors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };

  const validateDateOfBirth = (dob: string) => {
    if (!dob) return false;
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const minAgeDate = new Date();
    minAgeDate.setFullYear(currentDate.getFullYear() - 18);
    return birthDate <= minAgeDate;
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }
    
    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    } else if (!validateDateOfBirth(formData.dob)) {
      newErrors.dob = "You must be at least 18 years old to donate";
    }
    
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
    
    if (!formData.bloodGroup) {
      newErrors.bloodGroup = "Blood group is required";
    }
    
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    } else if (formData.address.trim().length < 10) {
      newErrors.address = "Please provide a more detailed address";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      
      console.log("Form submitted:", formData);
      alert("Thank you for your donation registration!");
    
      setFormData({
        name: "",
        dob: "",
        phone: "",
        email: "",
        gender: "",
        bloodGroup: "",
        address: "",
      });
  
    }
  };

  return (
    <div>
      <nav className="donate-blood-new">
        <h6>Donate Blood</h6>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 340">
          <path fill="#fff" fillOpacity="1" d="M0,32L80,64C160,96,320,160,480,170.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </nav>
      <div className="upcoming-description">
        <p>
          Register with us today to pledge to donate blood and we will notify you when donation events come up near your area OR let us know if you'd like to donate at a nearby blood bank.
        </p>
        <button className="upcomming-btn" onClick={handleUpcomingDonation}>Find upcoming Donation Events Here</button>
      </div>
      <div className="donate-blood-container">
        <div className="denote-blood-form-container">
          <div className="denote-blood-form-loop-container">
            <div className="img-hamro-life">
              <div>
                <img
                  src="https://hamrolifebank.com/contactform_external/images/New%20Project.png"
                  alt="Donate Blood"
                />
              </div>
            </div>
            <form className="form-details" onSubmit={handleSubmit}>
              <h1>Please send us your details</h1>

              <div className={`form-group ${errors.name ? 'error' : ''}`}>
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={errors.name ? 'invalid' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className={`form-group ${errors.dob ? 'error' : ''}`}>
                <label>Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  placeholder="Date of Birth"
                  className={errors.dob ? 'invalid' : ''}
                  max={new Date().toISOString().split('T')[0]} // Prevent future dates
                />
                {errors.dob && <span className="error-message">{errors.dob}</span>}
              </div>

              <div className={`form-group ${errors.phone ? 'error' : ''}`}>
                <label>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className={errors.phone ? 'invalid' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className={`form-group ${errors.email ? 'error' : ''}`}>
                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={errors.email ? 'invalid' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className={`form-group ${errors.gender ? 'error' : ''}`}>
                <label>Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`form-input ${errors.gender ? 'invalid' : ''}`}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <span className="error-message">{errors.gender}</span>}
              </div>

              <div className={`form-group ${errors.bloodGroup ? 'error' : ''}`}>
                <label>Blood Group</label>
                <select
                  id="blood-group"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className={`form-input ${errors.bloodGroup ? 'invalid' : ''}`}
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

              <div className={`form-group ${errors.address ? 'error' : ''}`}>
                <label>Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className={errors.address ? 'invalid' : ''}
                />
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>

              <div className="submit-button-container">
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateBlood;
