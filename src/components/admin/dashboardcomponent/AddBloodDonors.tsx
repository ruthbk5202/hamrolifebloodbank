import React, { useState } from "react";
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
    fullName: "",
    contact: "",
    province: "",
    district: "",
    city: "",
    habits: "",
    lastDonationDate: "",
    dateOfBirth: "",
    bloodGroup: "",
    donorType: "",
    gender: "",
    status: "Active",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      setError("Full name is required");
      return false;
    }
    if (!formData.contact.trim()) {
      setError("Contact number is required");
      return false;
    }
    if (!formData.bloodGroup) {
      setError("Blood group is required");
      return false;
    }
    if (!formData.gender) {
      setError("Gender is required");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/V1/admin/bloodDonor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,

            habits: formData.habits || null,
            lastDonationDate: formData.lastDonationDate || null,
            donorType: formData.donorType || null,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit form");
      }

      const data = await response.json();

      if (data.success) {
        alert("Donor added successfully!");

        setFormData({
          fullName: "",
          contact: "",
          province: "",
          district: "",
          city: "",
          habits: "",
          lastDonationDate: "",
          dateOfBirth: "",
          bloodGroup: "",
          donorType: "",
          gender: "",
          status: "active",
        });
        onClose();
      } else {
        throw new Error(data.message || "Error adding donor");
      }
    } catch (error) {
      const err = error as Error;
      console.error("Submission error:", error);
      setError(
        err.message ||
          "There was an error submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const genders = ["Male", "Female", "Other"];
  const donorTypes = ["Regular", "First-time", "Volunteer", "Professional"];

  return (
    <div className="add-donor-model">
      <div className="add-donor-model-container">
        <div className="add-donor-model-header">
          <h1>Add Blood Donor</h1>
          <span className="donor-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="add-donor-model-body">
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <label>Contact# *</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact"
                required
              />
            </div>
            <div>
              <label>Province *</label>
              <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleChange}
                placeholder="Select province"
                required
              />
            </div>
            <div>
              <label>District *</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                placeholder="Select District"
                required
              />
            </div>
            <div>
              <label>City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Select City"
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
                placeholder="Habits"
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
              <label>Date of Birth *</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Blood Group *</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                required
              >
                <option value="">Select Blood Group</option>
                {bloodGroups.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Donor Type</label>
              <select
                name="donorType"
                value={formData.donorType}
                onChange={handleChange}
              >
                <option value="">Select Donor Type</option>
                {donorTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Gender *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                {genders.map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Status</label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                readOnly
              />
            </div>
            <div className="save-btn-blood-donor">
              <button
                type="submit"
                className="add-donor-save-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBloodDonors;
