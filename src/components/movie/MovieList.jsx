import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../Api/config";
import { useEffect, useState } from "react";

const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );
  const isLoading = !data && !error;

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);

  // console.log(movies);
  return (
    <div>
      <div className="movie-list">
        {!isLoading && (
          <Swiper grabCursor={"true"} spaceBetween={25} slidesPerView={"auto"}>
            {movies.length > 0 &&
              movies.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <MovieCard item={item} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default MovieList;
