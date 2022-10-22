import { useState } from "react";
import ServicesHeader from "./ServicesHeader";
import Message from "./Message";
import PostsTable from "./PostsTable";

function SelectedServices() {
  // let idCount = 0;
  // const setID = () => { idCount++; return idCount; };

  // state hook
  const [servicesData, setPostsData] = useState([]);

  // lifting state up
  function addService(newService) {
    newService.id = Math.random() + "";

    const updated = [...servicesData, newService];
    setPostsData(updated);
  }

  function deletePost(service) {
    const updated = servicesData.filter(
      (serviceItem) => serviceItem.id !== service.id
    );
    setPostsData(updated);
  }

  return (
    <>
      <ServicesHeader addService={addService} />
      {/* conditional rendering */}
      {servicesData.length === 0 && <Message />}

      <PostsTable services={servicesData} deletePost={deletePost} />
    </>
  );
}

export default SelectedServices;
