import { Link } from "react-router-dom";

const HeadContent = ({ headerLink, headerText }) => {
  return (
    <div className="head-content">
      <div>Blogare</div>
      <div>
        <div>
          <Link to={headerLink} className="custom-link">
            {headerText}
          </Link>
        </div>
        <div>
          <a href="http://localhost:5173/home" className="custom-link">
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeadContent;
