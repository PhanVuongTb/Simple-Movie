import { Fragment } from "react";
import MovieList from "../components/movie/MovieList";
import Banner from "../components/Banner/Banner";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <section className="movies-layout page-container mb-20">
        <h2 className="capitalize text-white my-5 text-3xl font-bold">
          Now playing
        </h2>
        <MovieList />
      </section>

      <section className="movies-layout page-container mb-20">
        <h2 className="capitalize text-white my-5 text-3xl font-bold">
          Top Rated
        </h2>

        <MovieList type="top_rated" />
      </section>

      <section className="movies-layout page-container mb-20">
        <h2 className="capitalize text-white my-5 text-3xl font-bold">
          Trending
        </h2>

        <MovieList type="popular" />
      </section>
    </Fragment>
  );
};

export default HomePage;
