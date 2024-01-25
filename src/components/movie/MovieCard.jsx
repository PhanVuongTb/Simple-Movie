import { IoPlayCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const formattedDate = (dateString) => {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };

  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();

  return (
    <div
      className="movie-card rounded-lg p-3 bg-slate-800 h-[600px] flex flex-col justify-between select-none"
      id={`${id}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[350px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col justify-between h-full">
        <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 text-white">
          <span>{formattedDate(release_date)}</span>
          <span>{vote_average}</span>
        </div>
        <button
          className="py-3 px-6 w-full rounded-lg capitalize bg-primary flex items-center justify-center text-white my-3"
          onClick={() => navigate(`/movie/${id}`)}
        >
          Watch now <IoPlayCircleOutline className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
