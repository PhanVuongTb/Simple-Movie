import { Link } from "react-router-dom";

const HeadersPage = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
      <Link to="/" className="text-primary">
        Home
      </Link>
      <Link to="movie">Movies</Link>
    </header>
  );
};

export default HeadersPage;
