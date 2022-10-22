import React, { useEffect, useState } from "react";
import GoBack from "../../Components/SiteNavigator/GoBack";

function Article() {
  const default_api_server = "https://rapioracle.hananaev.tk/get-post/";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(default_api_server + window.location.pathname.split("/").pop())
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function renderApiToHtml(yourApiCall) {
    const fullDescription = yourApiCall;

    return (
      <div
        className="container"
        dangerouslySetInnerHTML={{ __html: fullDescription }}
      ></div>
    );
  }

  return (
    <div className="my-3 container">
      {console.log(items.id)}
      <div className="d-flex flex-row">
        <div className="m-1">
          <img src={items.image_url} width={350} height={350} alt="Main" />
        </div>

        <div className="m-3">
          <div className="d-flex flex-row">
            <h1>{items.title}</h1>
            <div className="text-primary p-1">({items.id})</div>
          </div>
          <div>
            <b>{items.description}</b>
          </div>
          <div>{items.phone}</div>
          <div>{items.address}</div>
        </div>
      </div>

      {renderApiToHtml(items.fullDescription)}

      <GoBack />
    </div>
  );
}

export default Article;
