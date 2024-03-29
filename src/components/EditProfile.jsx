import React from 'react'
import imgg from '../images/jujutsukaisen.jpg'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function EditProfile() {
    const navigate=useNavigate()
    const [fullName, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [username, setUsername] = useState("")
    const [dateofbirth, setDateofbirth] = useState('')
    const [address, setAddress] = useState("")
    const [bio, setBio] = useState('')
    const [fLink, setfLink] = useState("")
    const [tLink, settLink] = useState("")
    const [iLink, setiLink] = useState("")
    const [gLink, setgLink] = useState("")
    const [wLink, setwLink] = useState("")
    const rusername=localStorage.username
    const everyDetail={
        fullName:fullName,
        email:email,
        phoneNumber:phone,
        userName:username,
        dateofbirth:dateofbirth,
        address:address,
        bio:bio,
        username:rusername,
        fbLink:fLink,
        twitterLink:tLink,
        igLink:iLink,
        gitHubLink:gLink,
        website:wLink
    }
    const send=()=>{
        axios.post('https://newsapp-dpv1.onrender.com/changeprofile', everyDetail).then((err,response)=>{
            if (err) {
                console.log(err.message)
                
            }
            else{
                console.log(response.body)

            }
        })
    }
  return (
    <>
    <div className="container">
    <div className="main-body">
    <div style={{paddingTop:"5vh"}}></div>
  
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">

              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <input className="col-sm-6 text-secondary" value={wLink} onChange={(e)=>{setwLink(e.target.value)}}/>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <input className="col-sm-6 text-secondary" value={gLink} onChange={(e)=>{setgLink(e.target.value)}}/>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <input className="col-sm-6 text-secondary" value={tLink} onChange={(e)=>{settLink(e.target.value)}}/>

                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <input className="col-sm-6 text-secondary" value={iLink} onChange={(e)=>{setiLink(e.target.value)}}/>

                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <input className="col-sm-6 text-secondary" value={fLink} onChange={(e)=>{setfLink(e.target.value)}}/>

                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8 ">
              <div className="card mb-3 px-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <input className="col-sm-6 text-secondary" id="fullName" value={fullName} onChange={(e)=>{setFullname(e.target.value)}}/>

                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <input className="col-sm-6 text-secondary" id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <input className="col-sm-6 text-secondary" id='phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>

                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Username</h6>
                    </div>
                    <input className="col-sm-6 text-secondary" id='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>

                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Age</h6>
                    </div>
                    <input type="date" className="col-sm-6 text-secondary" id='age' value={dateofbirth} onChange={(e)=>{setDateofbirth(e.target.value)}}/>

                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <input className="col-sm-6 text-secondary" id='address' value={address} onChange={(e)=>{setAddress(e.target.value)}}/>

                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Bio</h6>
                    </div>
                    <input className="col-sm-6 text-secondary" id='bio' value={bio} onChange={(e)=>{setBio(e.target.value)}}/>
                  </div>
                  <hr/>
                  <div className="row">

                  </div>
                </div>
                
                        <div className='pb-2 w-100 '>
                        <div>
                        <button className="btn btn-dark w-100 my-1" onClick={()=>{navigate('/profile')}}>Go back</button>
                        </div>
                        <div>
                        <button className="btn btn-dark w-100 my-1">Change image</button>
                        </div>
                        <div>
                        <button className="btn btn-dark w-100 my-1" onClick={send}>Confirm</button>
                        </div>
                        </div>
              </div>




            </div>
          </div>

        </div>
    </div>
    </>
  )
}

export default EditProfile