import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal font-semibold footer-center bg-primary text-secondary p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Abu Hurayra Syam</p>
            </aside>
        </footer>
    );
};

export default Footer;