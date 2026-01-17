import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3 className="footer-logo">Alom Group <span>& Industry</span></h3>

                <p className="footer-disclaimer">
                    "এই ওয়েবসাইটটি শুধুমাত্র বিনোদনের উদ্দেশ্যে তৈরি একটি সার্কাজম প্রকল্প।"
                </p>

                <p className="footer-copyright">
                    &copy; {new Date().getFullYear()} Alom Group. All Rights Reserved (In Imagination).
                </p>
            </div>
        </footer>
    );
};

export default Footer;
