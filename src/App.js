import { ProfilePhoto } from "./components/Profile/ProfilePhoto";
import FullName  from "./components/Profile/FullName";
import { Address } from "./components/Profile/Address";
import Layout from "./components/Layout";
function App() {
  const userInfo = {
    userName: "Abdulla",
    userEmail: "abdulla@flashh.co.uk",
    userMobile: 32224585,
  }
  const profession = "Backend & API Creator";
  const bio = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries`
  const handleName = (value) => {
    alert(value);
  };
  const myCountry = "Bahrain";
  const fullAddress = "BLK 711, ROD Avenue 13, BLDG 450, Floor 2, Apartment 21";
  return (
    <div className="container">
      <div className="row">
        <div className="padding">
          <div className="col-md-12 shadeBox p-0">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <Layout>
                  <ProfilePhoto firstName={userInfo.userName}/>
                </Layout>
                <div className="col-sm-8">
                  <div className="card-block">
                    <FullName
                      userInfo={userInfo}
                      profession={profession}
                      bio={bio}
                    />
                    <Address myCountry={myCountry} fullAddress={fullAddress} firstName={userInfo.userName} alertFn={handleName}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
