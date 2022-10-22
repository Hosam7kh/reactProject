import { useEffect, useState } from "react";
import PostsLook from "../../Layout/Posts/PostsLook";
import SearchBar from "../../Components/SearchBar/MainSearchBar";
import "./Home.css";

const default_api_server = "https://rapioracle.hananaev.tk";

function AllItems() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [offers, setOffers] = useState(items);
  const [display, setDisplay] = useState("grid");
  const [numberOfPages, setNumberOfPages] = useState("0");
  const [activePage, setActivePage] = useState("1");

  useEffect(() => {
    fetch(default_api_server + "/page/" + activePage)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [activePage]);

  useEffect(() => {
    fetch(default_api_server)
      .then((res) => res.json())
      .then((apiResult) => setNumberOfPages(apiResult.totalPages));
  }, []);

  // getting pages numbers, still need to make buttons "previous / next page" and the actual pages with fast-api.
  const getPagesNumbers = () => {
    const content = [];
    const previousButton = [];
    const nextButton = [];
    for (let i = 1; i < numberOfPages + 1; i++) {
      const page = i;

      content.push(
        <li className="page-item" onClick={() => setActivePage(String(page))}>
          <button className="page-link pointer">{page}</button>
        </li>
      );
    }
    if (Number(activePage) > 1) {
      previousButton.push(
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => setActivePage(String(Number(activePage) - 1))}
          >
            Previous
          </button>
        </li>
      );
    } else if (Number(activePage) === 1) {
      previousButton.push(
        <li className="page-item disabled">
          <button className="page-link">Previous</button>
        </li>
      );
    }
    if (Number(numberOfPages) === Number(activePage)) {
      nextButton.push(
        <li className="page-item disabled">
          <button className="page-link">Next</button>
        </li>
      );
    } else {
      nextButton.push(
        <li className="page-item">
          <button
            onClick={() => setActivePage(String(Number(activePage) + 1))}
            className="page-link"
          >
            Next
          </button>
        </li>
      );
    }
    return [content, previousButton, nextButton];
  };

  function searchItems(value) {
    let result = [...items];
    if (value.length > 0) {
      result = items.filter((offer) =>
        offer.title.toLowerCase().includes(value.toLowerCase())
      );
    }
    setOffers(result);
  }

  if (error) {
    return <div className="container p-1">Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="container p-1">
        <img className="loading" src="/loading.gif" alt="loading" />
      </div>
    );
  } else {
    return (
      <>
        <div className="bg-dark text-light">
        <div className="container" id="hanging-icons">
          <div className="m-auto w-50">
            <h1 className="text-center">BizAd</h1>
            <p className="text-center fs-3">Advertising your business</p>
          </div>
        </div>
      </div>
        <div className="container">
          <div className="d-flex justify-content-between container pt-2">
            <div className="">
              <button
                onClick={() => setDisplay("list")}
                className="btn btn-default"
              >
                <i className="bi-list-ul"></i>
              </button>
              <button
                onClick={() => setDisplay("grid")}
                className="btn btn-default display-type"
              >
                <i className="bi-grid-3x3-gap-fill"></i>
              </button>
            </div>

            <div className="d-flex justify-content-end search-bar">
              <div className="mx-2 col-12">
                <SearchBar search={searchItems} />
              </div>
            </div>
          </div>

          <div className={display}>
            {
              
              offers.length > 0
                ? offers.map((offers) => (
                    <PostsLook key={offers.id} data={offers} />
                  ))
                : items.map((offers) => (
                    <PostsLook key={offers.id} data={offers} />
                  ))
            }
          </div>
        </div>

        <div className="container d-flex justify-content-center mt-3">
          <nav aria-label="...">
            <ul className="pagination">
              {getPagesNumbers()[1]} {/* previous*/}
              {getPagesNumbers()[0]} {/* pages */}
              {getPagesNumbers()[2]} {/* pages */}
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default AllItems;
