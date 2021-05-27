import React, { useState } from "react";
import { ProfilePhoto } from "./components/Profile/ProfilePhoto";
import FullName  from "./components/Profile/FullName";
import { Address } from "./components/Profile/Address";
import Layout from "./components/Layout";
import moment from 'momnet';
import moment_timezone from 'moment-timezone';
// import userImg from './user.png';
function App({apiData}) {
  console.log(apiData);
  const handleName = (value) => {
    alert(value);
  };
  const myCountry = "Bahrain";
  const fullAddress = "BLK 711, ROD Avenue 13, BLDG 450, Floor 2, Apartment 21";
  
  const [imgSrc, setimgSrc] = useState('./user.png');
  
  const [UserInfo, setUserInfo] = useState({
    userName: "Abdulla",
    userEmail: "abdulla@flashh.co.uk",
    userMobile: 32224585,
  });
  
  const [Bio, setBio] = useState(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type 
  specimen book. It has survived not only five centuries`);

  const [Profession, setProfession] = useState("Backend & API Creator");

  const [ShowState, setShowState] = useState(true);
  function handleShowState(e){
    e.preventDefault();
    setShowState(!ShowState);
    setinterval(moment_timezone().tz("Asia/Manama").format('YYYY-MM-DD HH:mm:ss'));
  }
  const [Interval, setinterval] = useState(moment_timezone().tz("Asia/Bahrain").format('YYYY-MM-DD HH:mm:ss'));

  return (
    <div className="container">
      <div className="row">
        <div className="padding">
        <button className="btn btn-info mb-3" style={{width: "100%"}} onClick={handleShowState}>Toggle Profile</button>
        <div className="mb-3">Component Mounted At: {Interval}</div>
          {ShowState ? <div className="col-md-12 shadeBox p-0">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <Layout>
                  <ProfilePhoto firstName={UserInfo.userName} userImg={imgSrc}/>
                </Layout>
                <div className="col-sm-8">
                  <div className="card-block">
                    <FullName
                      userInfo={UserInfo}
                      profession={Profession}
                      bio={Bio}
                    />
                    <Address myCountry={myCountry} fullAddress={fullAddress} firstName={UserInfo.userName} alertFn={handleName}/>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          : 
          <div className="card user-card-full">
            <div className="row m-l-0 m-r-0">
            <h3>Profile Hidden</h3>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const apiData = await res.json();
  return {
    props: {
      apiData,
    },
  }
}

export default App;
