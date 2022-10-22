function About() {
  return (
    <>
    <div className="bg-dark text-light">
        <div className="container" id="hanging-icons">
          <div className="m-auto w-50">
            <h1 className="text-center">About This App</h1>
            <p className="text-center fs-3">What makes BizAd the #1 app for advertising businesses</p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="m-auto w-50 text-secondary">
            <p className="mt-5 text-center">Everyday many business owners choose to use our app to advertise their business and to gain more traction to their websites and online store</p>
            <div className="text-center">
              <button className=" bg-primary m-auto text-light border-0 rounded p-1">start today</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
