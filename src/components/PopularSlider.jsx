import  { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const PopularSlider = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s"
        );
        const result = await response.json();
        if (result.meals) {
          setData(result.meals);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };

    fetchData();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div
      style={{
        height: "56vh",
        width: "90%",
        margin: "auto",
      }}
    >
      {error ? (
        <p style={{ textAlign: "center", color: "red" }}>Failed to load data.</p>
      ) : (
        <Slider {...settings} style={{ margin: "1rem" }}>
          {data.map((d) => (
            <Link to={`/${d.idMeal}`} key={d.idMeal}>
              <div className="slider">
                <img
                  src={d.strMealThumb}
                  alt={d.strMeal}
                  style={{ width: "18rem", height: "17rem" }}
                />
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default PopularSlider;
