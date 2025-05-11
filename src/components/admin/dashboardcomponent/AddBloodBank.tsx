import React from "react";
import "./addbloodbank.css";
interface AddBloodBankProps {
  onClose: () => void;
}
const AddBloodBank: React.FC<AddBloodBankProps> = ({ onClose }) => {
  return (
    <div className="model">
      <div className="model-container">
        <div className="model-header">
          <h1>Add Blood Banks</h1>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="model-body">
          <form>
            <div>
              <label>Bloodbank Name</label>
              <input type="text" placeholder="Bloodbank Name"></input>
            </div>
            <div>
              {" "}
              <label>Contact#</label>
              <input type="text" placeholder="Contact"></input>
            </div>

            <div>
              {" "}
              <label>Province</label>
              <select name="province " id="province">
                <option value="province1">Province 1 (koshi)</option>
                <option value="province2">Province 2(Madesh)</option>
                <option value="province3">Province 3(Bagmati)</option>

                <option value="province4">Province 4(Gandaki)</option>
                <option value="province5">Province 5(Lumbini)</option>
                <option value="province6">Province 6(Karnali)</option>
                <option value="province7">Province 7(Sudurpashchim)</option>
              </select>
            </div>
            <div>
              {" "}
              <label>District</label>
              <select name="district " id="district">
                <option value="morang">Province 1 (koshi)</option>
                <option value="ulabari">Province 2(Madesh)</option>
                <option value="bagmati">Province 3(Bagmati)</option>

                <option value="sunsari">Province 4(Gandaki)</option>
                
              </select>
            </div>
            <div>
              {" "}
              <label>City</label>
              <select name="city " id="city">
                <option value="ktm">Kathmandu</option>
                <option value="biratnagar">Biratnagar</option>
                <option value="itahari">Itahari</option>

                <option value="dharan">Dharan</option>
                
              </select>
            </div>

            <div>
              {" "}
              <label>Status</label>
             <select name="status"id="status">


              <option value="active">
Active
              </option>
              <option value="inactive">
                inactive
              </option>
              </select>
            </div>
          </form>
          <div className="save-btn">
            <button className="add-blood-bank-save-btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBloodBank;
