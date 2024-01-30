import { Fragment, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Main from "./components/layout/Main";
import Banner from "./components/banner/Banner";

import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
// import MoviePage from "./pages/MoviePageV2";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <>
      <Fragment>
        <Suspense>
          <Routes>
            <Route path="Simple-Movie/" element={<Main></Main>}>
              <Route index element={<HomePage></HomePage>} />
              <Route path="movies" element={<MoviePage></MoviePage>} />
              <Route
                path="movie/:movieId"
                element={<MovieDetailsPage></MovieDetailsPage>}
              />
            </Route>
          </Routes>
        </Suspense>
      </Fragment>
    </>
  );
}

export default App;
