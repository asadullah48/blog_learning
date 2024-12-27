import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{marginTop:'50px', height: '25vh', backgroundColor: '#333', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px'  }}>
      <h3>Contact Me</h3>
      <p>Phone: +92 321 3771 445</p>
      <p>Email: asad</p>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
        <a href="https://www.facebook.com/asadullahshafique" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagram.com/shafiqueasadullah/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com/in/asadullah-shafique-a00679325/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
          <FaLinkedin size={24} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  );
}

export default Footer;