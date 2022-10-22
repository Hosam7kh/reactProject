import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Input } from "semantic-ui-react";

export default function Posts() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios.get(`https://rapi.hananaev.tk/all-items/`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Input
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />

      <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
        {searchInput.length > 1
          ? filteredResults.map((items) => {
              return (
                <Card>
                  <Card.Content>
                    <Card.Header>{items.title}</Card.Header>
                    <Card.Description>{items.description}</Card.Description>
                  </Card.Content>
                </Card>
              );
            })
          : APIData.map((item) => {
              return (
                <Card>
                  <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Description>{item.email}</Card.Description>
                  </Card.Content>
                </Card>
              );
            })}
      </Card.Group>
    </div>
  );
}
