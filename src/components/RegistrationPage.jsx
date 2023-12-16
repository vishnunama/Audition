import React from 'react'
import "./RegistrationPage.css"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { MenuItem, Select } from '@mui/material';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'; // You can replace this with the desired icon
import CheckIcon from '@mui/icons-material/Check';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import QrCode from './QrCode';




function RegistrationPage() {
  const navigate = useNavigate()
  
  const handleFileChange = (event) => {
    // Handle the file change event
    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile);
  };
  
  return (
   <div>
  <div className="contact">
    <div className="container">
      {/* Form */}
      <form method="POST" id="contactForm" name="contactForm" action="php/send_phpmailer_file_download_email_template.php">
        <div className="row">
          <div className="col-lg-8" id="mainContent">
            {/* Personal Details */}
            <div className="row box first">
              <div className="box-header">
                <h3><strong>1</strong>Personal Details</h3>
                <p>Subtitle or short description can be set here.</p>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <input id="fullname" className="form-control" name="" placeholder=" Full Name" type="text" required />
                </div>
              </div>
               <div className="col-lg-6 col-md-12">
                <div className="col-md-12">
                <div className="form-group">
                        <input
        type="file"
        name="filepond[]"
        id="fileInput"
        accept="image/*"  // Add this if you want to restrict to image files
        style={{ display: 'none' }}  // Hide the default file input
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput" style={{ cursor: 'pointer', padding:  '9px 124px', border: '1px solid #DDDDDD',marginBottom:"20px" }}>
        Choose Image
      </label> </div>
              </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
  <input
            id="fathername"
            className="form-control"
            name="email"
            placeholder=" Father's /Husband's Name"
            type="text"
            required
            style={{ '::placeholder': { color: 'red' }, color: 'black' }} // Adjust color values as needed
          />          </div>
              </div>
             
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  
                  <select id="sex" className="form-control" name="sex" type="" required >
                    <option value={0}>Sex</option>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                    <option value={2}>Transgender</option>

                    

                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <input id="email" className="form-control" name="phone" placeholder=" Email" type="text" data-parsley-pattern="^\+{1}[0-9]+$" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <input id="phone" className="form-control" name="phone" placeholder=" Phone No. +91363012345" type="text" required />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <input id="fullname" className="form-control" name="" placeholder="Height" type="text" required />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <input id="fullname" className="form-control" name="" placeholder="width" type="text" required />
                </div>
              </div>
               <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  
                   <select className="form-control" name="sex" type="" required>
        <option value={0}>
           <div className="">Complexion</div>
           
        </option>
        <option value={1}>Fair</option>
        <option value={2}>Medium</option>
        <option value={3}>Dark</option>
      </select>
                </div>
              </div>
              

              
            </div>
            {/* Personal Details End */}
            {/* Message */}
            <div className="row box">
              <div className="box-header">
                <h3><strong>2</strong>Address</h3>
                <p>Subtitle or short description can be set here.</p>
              </div>
              
              
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <input id="adderess" className="form-control" name="address" placeholder="City" type="text" required />
                </div>
              </div>
             
              
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <input id="adderess" className="form-control" name="address" placeholder="State" type="text" required />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <input id="adderess" className="form-control" name="address" placeholder="Country" type="text" required />
                </div>
              </div>
               <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <input id="adderess" className="form-control" name="address" placeholder="Pin Code" type="text" required />
                </div>
              </div>
              
              
              <div className="col-md-12">
                <div className="form-group">
                  <textarea id="inputMessage" className="form-control" name="message" placeholder="Address" data-parsley-pattern="^[a-zA-Z0-9\s.:,!?']+$" required defaultValue={""} />
                </div>
              </div>
            </div>
             <div className="row box">
              <div className="box-header">
                <h3><strong>3</strong>Audition Details</h3>
                <p>Subtitle or short description can be set here.</p>
              </div>

               <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  
                   <select className="form-control" name="" type="" required>
        <option value={0}>Audition Categories</option>
        
        <option value={1}>Dance Event</option>
        <option value={2}></option>
        <option value={3}>Dark</option>
      </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea id="inputMessage" className="form-control" name="message" placeholder="Past Experience" data-parsley-pattern="^[a-zA-Z0-9\s.:,!?']+$" required defaultValue={""} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea id="inputMessage" className="form-control" name="message" placeholder="Past Achievement" data-parsley-pattern="^[a-zA-Z0-9\s.:,!?']+$" required defaultValue={""} />
                </div>
              </div>
            </div>
            {/* Message End */}
            {/* File Uploader */}
            <div className="row box">
              <div className="box-header">
                <h3><strong>4</strong>Upload Video</h3>
                <p>Only Video 30Mb.</p>
              </div>
              <div className="col-md-12">
                <div className="form-group">
       
        
                  <label htmlFor="videoInput" className="custom-file-upload">
        Choose Video
      </label>
      <input
        type="file"
        name="filepond[]"
        id="videoInput"
        accept="video/*"  // Add this if you want to restrict to video files
        style={{ display: 'none' }}  // Hide the default file input
        onChange={handleFileChange}
      />
                </div>
              </div>
            </div>
            {/* File Uploader End */}
            {/* Terms */}
            <div className="row box">
              <div className="box-header">
                <h3><strong>5</strong>Submission</h3>
                <p>Please accept the terms and conditions below.</p>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="checkbox" id="cbx" className="inp-cbx" name="terms" defaultValue="yes" required />
                  <label className="cbx terms" htmlFor="cbx">
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1" />
                      </svg>
                    </span>
                    <span>Accept<a href="pdf/terms.pdf" className="terms-link" target="_blank">Terms and Conditions</a>.</span>
                  </label>
                </div>
              </div>
            </div>
            {/* Terms End */}
            {/* Submit*/}
            <div className="row box">
              <div className="col-12">
                <div className="form-group">
                  <button type="submit" name="submit" className="btn-form-func">
                    <span className="btn-form-func-content">Submit</span>
                    <span className="icon"><SendOutlinedIcon  className="fa fa-paper-plane" />
    <button><QrCode/></button>
                     
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* Submit */}
          </div>
          <div className="col-lg-4" id="sidebar">
            {/* Contact Info Container */}
            <div id="contactInfoContainer" className="theiaStickySidebar">
              <div className="contact-box">
                <LocationOnOutlinedIcon sx={{color:"#53C4DA"}}  />
                <h2>Address</h2>
                <a href="https://www.google.com/maps?ll=40.710128,-74.006227&z=14&t=m&hl=en-US&gl=BG&mapclient=embed&cid=13302823950184191043" target="_blank">Bhopal, M.P , India
                  </a>
              </div>
              <div className="contact-box">
                <EmailOutlinedIcon sx={{color:"#53C4DA"}} />
                <h2>Email</h2>
                <a href="mailto:videohub@gmail.com">videohub@gmail.com</a>
              </div>
              <div className="contact-box">
                <WifiCalling3OutlinedIcon sx={{color:"#53C4DA"}}/>
                <h2>Telephone</h2>
                <a href="tel:+3630123456789">+3630123456789</a>
              </div>
            </div>
            {/* Contact Info Container End */}
          </div>
        </div>
      </form>
      {/* Form End */}
    </div>
  </div>
</div>

  )
}

export default RegistrationPage;