import React from "react";

export const ProfilePhoto = (props) => {
  return (
    <div className="col-sm-4 bg-c-lite-green user-profile">
      <div className="card-block text-center text-white">
        <div className="m-b-25">
          <img
            src={props.userImg}
            className="img-radius"
            alt="User-Profile"
          />
        </div>
        <h6 className="f-w-600">{props.firstName}</h6>
        <p>Web Designer</p>
        <i className="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
      </div>
    </div>
  );
};
