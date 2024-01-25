import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutWeb from "./Layout/LayoutWeb";
import HomePage from "./Page/HomePage";
import MoviePage from "./Page/MoviePage";
import MovieDetailsPage from "./Page/MovieDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWeb />}>
          <Route index element={<HomePage />} />
          <Route path="movie" element={<MoviePage />} />
          <Route path="movie/:movieId" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
