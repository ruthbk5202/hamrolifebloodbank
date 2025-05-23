"use client";
import React, { useState, useMemo, useRef } from 'react';
import { Jodit } from 'jodit';
import JoditEditor from 'jodit-react';
import "./settings.css";

const Settings = () => {
    const [fileName, setFileName] = useState<string>("No file chosen");
    const [content, setContent] = useState('Enter your app description here...');
    const editor = useRef(null);

    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Enter your app description here...',
        // Add any other Jodit config options here
        buttons: ['bold', 'italic', 'underline', 'link', 'unlink', 'ul', 'ol', 'font', 'fontsize', 'image'],
        uploader: {
            insertImageAsBase64URI: true
        },
        height: 400
    }), []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName("No file chosen");
        }
    };

    return (
        <div>
            <div className='dashboard-settings'>
                {/* <h1>Dashboard</h1>
                <p>Settings</p>
                <a href="/">Home</a>/<a href="/settings">Settings</a> */}
            </div>
            <div className='settings-dashboard-container'>
                <div>
                    <div className='app-settings'>
                        <button className='app-settings-btn'>App Settings</button>
                        <div className='app-settings-child-btn'>
                            <a href="/admob-settings">Admob Settings</a>
                            <a href="/notification-settings">Notification Settings</a>
                            <a href="/api-keys">Api keys</a>
                            <a href="/privacy-policy">App Privacy Policy</a>
                        </div>
                    </div>
                    <form>
                        <div className='form-input'>
                            <label htmlFor="app-name">App Name:-</label>
                            <input id="app-name" type="text" placeholder='Blood Bank App' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="app-logo">App Logo:-</label>
                            <div className="file-input-container">
                                <input 
                                    type="file" 
                                    id="app-logo" 
                                    className="file-input" 
                                    onChange={handleFileChange} 
                                />
                                <label htmlFor="app-logo" className="file-input-label">Choose File</label>
                                <span className="file-name">{fileName}</span>
                            </div>
                        </div>
                        <div className="form-input">
                            <label>App Description:-</label>
                            <div className="text-editor-container">
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    config={config}
                                    onBlur={newContent => setContent(newContent)}
                                    onChange={newContent => {}}
                                />
                            </div>
                        </div>
                        <div className='form-input'>
                            <label htmlFor="app-version">App Version:-</label>
                            <input id="app-version" type="text" placeholder='3.11.1' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="author">Author:-</label>
                            <input id="author" type="text" placeholder='Muddasar' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="contact">Contact:-</label>
                            <input id="contact" type="tel" placeholder='+977 9800000001' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="email">Email:-</label>
                            <input id="email" type="email" placeholder='alma@gmail.com' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="website">Website:-</label>
                            <input id="website" type="url" placeholder='almaa.com' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="developed-by">Developed by:-</label>
                            <input id="developed-by" type="text" placeholder='almahub' />
                        </div>
                        <button type="submit" className="save-btn">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Settings;