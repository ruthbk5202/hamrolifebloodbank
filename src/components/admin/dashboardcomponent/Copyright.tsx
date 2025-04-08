"use client";
import React from 'react';
import './copyright.css';

const CopyrightFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="copyright-footer">
      <div className="copyright-content">
        <div>
        <p>
          Copyright © 2018-{currentYear} <a >almainlmab.com</a> by Nudassar. 
        </p>
        <div>
        <p className='copyright-p'> All rights reserved.</p>
       </div>
        </div>
        </div>
        <div>
        <p className="version">Version 3.1.1</p>
        </div>
   
    </footer>
  );
};

export default CopyrightFooter;