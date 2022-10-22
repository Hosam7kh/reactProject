import { useNavigate } from "react-router-dom";

export default function GoBack() {
  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ replace set to true
    navigate("/", { replace: true });
  };

  return (
    <div className="py-3">
      <button className="mt-3 btn btn-primary" onClick={handleClick}>
        Back
      </button>
    </div>
  );
}
