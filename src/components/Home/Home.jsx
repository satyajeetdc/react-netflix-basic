import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPlay } from "react-icons/bi";

const apiKey = "";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [upcomingMovies, setupcomingMovies] = useState([]);
  const [nowPlayingMovies, setnowPlayingMovies] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [topRatedMovies, settopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setupcomingMovies(results);
      console.log(upcomingMovies);
    };

    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setnowPlayingMovies(results);
      console.log(nowPlayingMovies);
    };

    const fetchpopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setpopularMovies(results);
      console.log(popularMovies);
    };

    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      settopRatedMovies(results);
      console.log(topRatedMovies);
    };

    const fetchGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
    };

    fetchUpcoming();
    fetchNowPlaying();
    fetchpopular();
    fetchTopRated();
    fetchGenre();
  }, []);

  return (
    <>
      <section className="home">
        <div
          className="banner"
          style={{
            backgroundImage: popularMovies[0]
              ? `url(${imgUrl}/${popularMovies[0].poster_path})`
              : "rgb(16, 16, 16)",
          }}
        >
          {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}

          {popularMovies[0] && <p>{popularMovies[0].overview}</p>}

          <div>
            <button>
              <BiPlay /> Play
            </button>
            <button>
              My List <AiOutlinePlus />
            </button>
          </div>
        </div>
        <Row title={"Now Playing"} arr={nowPlayingMovies} />
        <Row title={"Upcoming"} arr={upcomingMovies} />
        <Row title={"Popular"} arr={popularMovies} />
        <Row title={"Top Rated"} arr={topRatedMovies} />

        <div className="genreBox">
          {genre.map((item) => (
            <Link key={item.id} to={`/genre/${item.id}`}>
              {item.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
