import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const TrendingSlider = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
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
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div
      style={{
        height: "26vh",
        width: "99%",
        margin: "auto",
      }}
    >
      {error ? (
        <p style={{ textAlign: "center", color: "red" }}>Failed to load data.</p>
      ) : data.length > 0 ? (
        <Slider
          {...settings}
          style={{
            margin: "1rem",
          }}
        >
          {data.map((d) => (
            <Link to={`/${d.idMeal}`} key={d.idMeal}>
              <div className="slider2">
                <img
                  src={d.strMealThumb}
                  alt={d.strMeal}
                  style={{ width: "10rem", height: "7rem" }}
                />
              </div>
            </Link>
          ))}
        </Slider>
      ) : (
        <p style={{ textAlign: "center" }}>Loading...</p>
      )}
    </div>
  );
};

export default TrendingSlider;
