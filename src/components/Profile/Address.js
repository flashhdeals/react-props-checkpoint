import React from "react";
export const Address = (props) => {
  const myCountry = props.myCountry;
  const fullAddress = props.fullAddress;

  return (
    <>
      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Address</h6>
      <div className="row">
        <div className="col-sm-7">
          <p className="m-b-10 f-w-600">{myCountry}</p>
          <h6 className="text-muted f-w-400" style={{ fontSize: "12px" }}>
            Tubli
          </h6>
        </div>
        <div className="col-sm-5">
          <p className="m-b-10 f-w-600">Office</p>
          <h6 className="text-muted f-w-400" style={{ fontSize: "12px" }}>
            {fullAddress}
          </h6>
        </div>
        <div className="col-sm-12 mt-5">
          <button className="btn btn-primary" style={{width: "100%"}} onClick={() => props.alertFn(props.firstName)}>Click Me!</button>
        </div>        
      </div>
    </>
  );
};
