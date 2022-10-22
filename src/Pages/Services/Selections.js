function Selections(props) {
  function getBadgeCSS() {
    switch (props.type) {
      case "Active":
        return "bg-success";
      case "Pause":
        return "bg-warning";
      case "Stop":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  }

  return <span className={`badge ${getBadgeCSS()}`}>{props.type}</span>;
}

export default Selections;
