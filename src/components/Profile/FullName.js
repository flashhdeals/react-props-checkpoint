import React from "react";
import PropTypes from 'prop-types';
function FullName(props){
  return (
    <>
      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
      <div className="row">
        <div className="col-sm-7">
          <p className="m-b-10 f-w-600">Name</p>
          <h6 className="text-muted f-w-400">{props.userInfo.userName}</h6>
        </div>
        <div className="col-sm-5">
          <p className="m-b-10 f-w-600">Profession</p>
          <h6 className="text-muted f-w-400">{props.profession}</h6>
        </div>
        <div className="col-sm-12 mt-3 mb-3">
          <p className="m-b-10 f-w-600">Bio</p>
          <h6 className="text-muted f-w-400" style={{textAlign: "justify"}}>{props.bio}</h6>
        </div>        
        <div className="col-sm-7">
          <p className="m-b-10 f-w-600">Email</p>
          <h6 className="text-muted f-w-400">{props.userInfo.userEmail}</h6>
        </div>
        <div className="col-sm-5">
          <p className="m-b-10 f-w-600">Phone</p>
          <h6 className="text-muted f-w-400">{props.userInfo.userMobile}</h6>
        </div>
      </div>
    </>
  );
}

FullName.propTypes = {
  userInfo: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    userMobile: PropTypes.number.isRequired
  })
}

FullName.defaultProps = {
  firstName: "Default firstName",
  userEmail: "Default userEmail",
  userMobile: "Default userMobile",
  profession: "Default Profession",
  bio: "Default Bio",  
}

export default FullName;