import React from "react";
import "./Home.scss";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({
  title,
  arr = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAL3B5W8dFF7zq7r_9k_dCDjis3BuH5zCuoCt9TDJvw&s",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAL3B5W8dFF7zq7r_9k_dCDjis3BuH5zCuoCt9TDJvw&s",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAL3B5W8dFF7zq7r_9k_dCDjis3BuH5zCuoCt9TDJvw&s",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAL3B5W8dFF7zq7r_9k_dCDjis3BuH5zCuoCt9TDJvw&s",
    },
  ],
}) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item) => (
          <Card img={item.img} />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="banner"></div>
        <Row title={"Popular on Netflix"} />
        <Row title={"Movies"} />
        <Row title={"TV Shows"} />
        <Row title={"Recently Viewed"} />
        <Row title={"My List"} />
      </section>
    </>
  );
};

export default Home;
