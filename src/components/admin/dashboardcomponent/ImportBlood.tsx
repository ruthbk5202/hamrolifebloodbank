 "use client";
 
 import React from 'react';
 import './importblood.css';
 interface ImportBloodBankProps{
    onClose: ()=>void;
 }
 

 const ImportBloodBanks: React.FC<ImportBloodBankProps> = ({onClose}) => {
  return (
  <div className="modal">
  <div className="modal-content">
  <div className="modal-header">
  <h2>Import Blood Banks</h2>
  <span className="close" onClick={onClose}>&times;</span>
  </div>
  <div className="modal-body">
  <div className="note-container">
  <div className="note-header">Note!</div>
  <p>Data will be imported as you will upload. (Your file may not contain duplicate entries)</p>
  </div>
  <p><b>Supported File formats are:</b> CSV, XLS, XLSX</p>
  <div className="file-upload">
  <input type="file" id="file-input" className="file-input" />
  <label htmlFor="file-input" className="file-label">Choose File</label>
  <span className="file-chosen">No file chosen</span>
  </div>
  </div>
  <div className="modal-footer">
  <button className="download-button">Download Sample File</button>
  <button className="upload-button">Upload</button>
  </div>
  </div>
  </div>
  );
 };
 

 export default ImportBloodBanks;
