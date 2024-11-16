import React, { useEffect, useRef, useState } from 'react';
import FormComponent from './form';

function App() {
  const img =useRef(null)
  
  const [userData, setUserData] = useState({
    name: "",
    profile:"",
    email: "",
    phoneNumber: "",
    password: "",
  });
  
  const [Redcord, setRedcord] = useState([]);
  console.log(userData, "userData");
  
  const handleSubmit = async(e) => {
    e.preventDefault();  // Capital 'D' in 'preventDefault'
    console.log(img,"img")
    const recordData = { ...userData, id: new Date().getTime().toString() };
    setRedcord([...Redcord, recordData]);  // Wrap in array
    if (userData.profile) {
      const imageURL = URL.createObjectURL(userData.profile);
  
      // setRedcord([...Redcord,imageURL])
      
      console.log("Image URL:", Redcord);
     
    }
  };
  
  const handleUpload=()=>{
    img.current.click()
  }
  // useEffect(()=>{
  //   if (userData.profile) {
  //     const imageURL = URL.createObjectURL(userData.profile);
  
  //     setRedcord([...Redcord,'dasda'])
      
  //     console.log("Image URL:", Redcord);
     
  //   }
  // },[userData.profile])
  return (
    <div className="App">
     
      <form onSubmit={handleSubmit}>
        <div>
          <p>Profile</p>
          {
        
        userData.profile?
        <img src={URL.createObjectURL(userData.profile) || ''} alt="Profile Preview" /> :""
        
        }
          <input
            // value={userData.profile}
            type="file"
            accept='image/*'
            name="Profile"
            ref={img}
            placeholder="Profile"
            style={{display:"none"}}
            onChange={async(e) => setUserData({ ...userData, profile:e.target.files[0] })}
          />
          <button onClick={handleUpload}>
        Upload image
          </button>
        </div>
        <div>
          <p>Name</p>
          <input
            value={userData.name}
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                  setUserData({ ...userData, profile: URL.createObjectURL(file) });
              }
          }}
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="email"  // Use 'email' for email input
            name="email"
            placeholder="Email"
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </div>
        <div>
          <p>Phone Number</p>
          <input
            type="tel"  // Use 'tel' for phone input
            name="phone"
            placeholder="Phone Number"
            onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
