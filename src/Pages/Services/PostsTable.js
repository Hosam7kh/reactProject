import Selections from "./Selections";

function PostsTable(props) {
  /*
      props = {
          services: [...]
      }
      */

  function handleDelete(selectService) {
    props.deletePost(selectService);
  }

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th className="w-25">Service Name</th>
          <th className="w-25">Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.services.map((service) => (
          <tr key={service.id} className="bg-light">
            <td>
              <Selections type={service.selectService} />
            </td>
            <td>
              <Selections type={service.status} />
            </td>
            <td>
              <button
                onClick={() => handleDelete(service)}
                className="btn btn-default"
              >
                <i className="bi-trash3"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PostsTable;
