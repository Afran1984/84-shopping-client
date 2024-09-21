import React from 'react';
import './About.css';

const About = () => {
    const name = 'Md. Abdur Razzak Jim';
    const contact= '+8801717663447';
    const gmail = 'afranrazzak1984@gmail.com';
    const university = 'Premier University, Chittagong';
    return (
        <div className='mainx'>
            <div className='product'>
            {/* <img src={logo} alt="" /> */}
        <img src="https://i.ibb.co.com/DKtzTWB/Jim.png" alt="Jim" border="0" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>{contact} </p>
                <p>{gmail} </p>
                <p>{university} </p>
            </div>
            <button className='btn-cart'>
                See All Info
                </button>
        </div>
        </div>
    );
};

export default About;