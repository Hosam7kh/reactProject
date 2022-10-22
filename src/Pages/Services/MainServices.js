import SelectedServices from "./SelectedServices";
import "./style.css";

function Services() {
  return (
    <>
      <div className="bg-dark text-light">
        <div className="container" id="hanging-icons">
          <div className="m-auto w-50">
            <h1 className="text-center">Services</h1>
            <p className="text-center fs-3">Choose services that you would like to get from BizAd</p>
          </div>
        </div>
      </div>

      <div className="bg-light p-3">
        <div className="services-sizing container">
          <h1 className="pb-2 border-bottom text-color-red">
            Add Your Service
          </h1>
          <SelectedServices />
        </div>
      </div>
    </>
  );
}

export default Services;
