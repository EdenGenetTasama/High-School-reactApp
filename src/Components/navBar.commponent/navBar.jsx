import reactDom from "react-dom";
import react from "react";

export default function navBar() {
  return (
    <div>
      <Link to="/">Home Page</Link>
      <Link to="/Students">Students</Link>
      <Link to="/Teacher">Teacher</Link>
      <Link to="/Parents">Parents</Link>
    </div>
  );
}
