import React from 'react';
import "./RegistrationPage.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function RegistrationPage() {

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
                    <h3><strong>1</strong>व्यक्तिगत विवरण</h3>
                    <p>यहां सबटाइटल या संक्षेप लगा सकते हैं।</p>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input id="fullname" className="form-control" name="" placeholder=" पूरा नाम" type="text" required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="file"
                          name="filepond[]"
                          id="fileInput"
                          accept="image/*"  // यदि आप इमेज फ़ाइलों को प्रतिबंधित करना चाहते हैं तो यह जोड़ें
                          style={{ display: 'none' }}  // डिफ़ॉल्ट फ़ाइल इनपुट छुपाएँ
                          onChange={handleFileChange}
                        />
                        <label htmlFor="fileInput" style={{ cursor: 'pointer', padding: '9px 124px', border: '1px solid #DDDDDD', marginBottom: "20px" }}>
                          छवि चयन करें
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        id="fathername"
                        className="form-control"
                        name="email"
                        placeholder=" पिता / पति का नाम"
                        type="text"
                        required
                        style={{ '::placeholder': { color: 'red' }, color: 'black' }} // आवश्यकता के अनुसार रंग मानों को समायोजित करें
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">

                      <select id="sex" className="form-control" name="sex" type="" required >
                        <option value={0}>लिंग</option>
                        <option value={1}>पुरुष</option>
                        <option value={2}>महिला</option>
                        <option value={2}>ट्रांसजेंडर</option>

                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input id="email" className="form-control" name="phone" placeholder=" ईमेल" type="text" data-parsley-pattern="^\+{1}[0-9]+$" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input id="phone" className="form-control" name="phone" placeholder=" फ़ोन नंबर +91363012345" type="text" required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input id="fullname" className="form-control" name="" placeholder="ऊचाई" type="text" required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input id="fullname" className="form-control" name="" placeholder="चौड़ाई" type="text" required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">

                      <select id="sex" className="form-control" name="sex" type="" required >
                        <option value={0}>रंग</option>
                        <option value={1}>गोरा</option>
                        <option value={2}>मीडियम</option>
                        <option value={2}>गहरा</option>


                      </select>
                    </div>
                  </div>



                </div>
                {/* Personal Details End */}
                {/* Message */}
                <div className="row box">
                  <div className="box-header">
                    <h3><strong>2</strong>पता</h3>
                    <p>यहां सबटाइटल या संक्षेप लगा सकते हैं।</p>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input id="adderess" className="form-control" name="address" placeholder="शहर" type="text" required />
                    </div>
                  </div>


                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input id="adderess" className="form-control" name="address" placeholder="राज्य" type="text" required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input id="adderess" className="form-control" name="address" placeholder="देश" type="text" required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input id="adderess" className="form-control" name="address" placeholder="पिन कोड" type="text" required />
                    </div>
                  </div>


                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea id="inputMessage" className="form-control" name="message" placeholder="पता" data-parsley-pattern="^[a-zA-Z0-9\s.:,!?']+$" required defaultValue={""} />
                    </div>
                  </div>
                </div>
                <div className="row box">
                  <div className="box-header">
                    <h3><strong>3</strong>संदेश</h3>
                    <p>यहां सबटाइटल या संक्षेप लगा सकते हैं।</p>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea id="inputMessage" className="form-control" name="message" placeholder="संदेश दर्ज करें" data-parsley-pattern="^[a-zA-Z0-9\s.:,!?']+$" required defaultValue={""} />
                    </div>
                  </div>
                </div>
                {/* Message End */}
                {/* File Uploader */}
                <div className="row box">
                  <div className="box-header">
                    <h3><strong>4</strong>वीडियो अपलोड करें</h3>
                    <p>केवल वीडियो 30MB तक।</p>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">


                      <label htmlFor="videoInput" className="custom-file-upload">
                        वीडियो चयन करें
                      </label>
                      <input
                        type="file"
                        name="filepond[]"
                        id="videoInput"
                        accept="video/*"  // यदि आप वीडियो फ़ाइलों को प्रतिबंधित करना चाहते हैं तो यह जोड़ें
                        style={{ display: 'none' }}  // डिफ़ॉल्ट फ़ाइल इनपुट छुपाएँ
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </div>
                {/* File Uploader End */}
                {/* Terms */}
                <div className="row box">
                  <div className="box-header">
                    <h3><strong>5</strong>प्रस्तुति</h3>
                    <p>नीचे दिए गए नियम और शर्तों को स्वीकार करें।</p>
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
                        <span>नियम और शर्तें स्वीकार करें<a href="pdf/terms.pdf" className="terms-link" target="_blank">यहां</a>।</span>
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
                        <span className="btn-form-func-content">प्रस्तुत</span>
                        <span className="icon"><SendOutlinedIcon className="fa fa-paper-plane" aria-hidden="true" />
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
                    <LocationOnOutlinedIcon sx={{ color: "#53C4DA" }} />
                    <h2>पता</h2>
                    <a href="https://www.google.com/maps?ll=40.710128,-74.006227&z=14&t=m&hl=en-US&gl=BG&mapclient=embed&cid=13302823950184191043" target="_blank">भोपाल, म.प्र., भारत
                  </a>
                  </div>
                  <div className="contact-box">
                    <EmailOutlinedIcon sx={{ color: "#53C4DA" }} />
                    <h2>ईमेल</h2>
                    <a href="mailto:videohub@gmail.com">videohub@gmail.com</a>
                  </div>
                  <div className="contact-box">
                    <WifiCalling3OutlinedIcon sx={{ color: "#53C4DA" }} />
                    <h2>टेलीफ़ोन</h2>
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