import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Assuming you have a CSS file for your Navbar styles
import { useNavigate } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QrCode from './QrCode';


function Navbar() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center', // Center items horizontally
    // marginTop: '1vh', // Adjust the margin based on your preference
  };
  
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className={`Navbar ${isFixed ? 'fixed' : ''}`}>
      <div>
        <div  style={{backgroundColor:"#435269"}}>
          <div style={{display:"flex",justifyContent:"space-between"}} className="">
            <div  style={{width:"200px",backgroundColor:"#435269"}} className="Navbar-logo">
      <img  src="/80.png" alt="logo" />
    </div>
            <div>
                <div className="menu-area">
                        <ul className="menu">
                            <li>
                                <a onClick={()=>navigate('/Home')} href="">Home</a>
                            </li>

                            <li>
                                <a onClick={()=>navigate('/VideoSection')} href="">About us</a>
                               
                            </li>
                            <li>
                                <a onClick={()=>navigate('/EventSchedule')} href="">Event Schedule</a>
                                
                            </li>
                            <li>
                                <a onClick={()=>navigate('/OurSpeaker')} href="">Speakers</a>
                                
                            </li>
                            <li>
                              <a className='register-now' onClick={()=>navigate('/SelectLanguage')} href="" ><AssignmentIcon sx={{color:"white"}}/><span style={{color:"white"}}>Register Now </span></a>

                              </li>
                        </ul>
                       
                    </div>
                        
                    <div className="header-bar d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                <div className="ellepsis-bar d-lg-none">
                            <i className="icofont-info-square"></i>
                        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// import React from 'react'

// function Navbar() {
//   return (
//    <div class="menu-area">
//                         <ul class="menu">
//                             <li>
//                                 <a href="index.html">Home</a>
//                             </li>

//                             <li>
//                                 <a href="javascript:void(0)">Features</a>
                               
//                             </li>
//                             <li>
//                                 <a href="javascript:void(0)">Speakers</a>
                                
//                             </li>
//                             <li>
//                                 <a href="javascript:void(0)">Blog</a>
                               
//                             </li>
//                             <li><a href="contact.html">Contact</a></li>
//                         </ul>
                        // <a href="signup.html" class="signup"><i class="icofont-ticket"></i> <span>Purchase Ticket</span>
                        // </a>

                        // <div class="header-bar d-lg-none">
                        //     <span></span>
                        //     <span></span>
                        //     <span></span>
                        // </div>
//                         <div class="ellepsis-bar d-lg-none">
//                             <i class="icofont-info-square"></i>
//                         </div>
//                     </div>

//   )
// }

// export default Navbar
