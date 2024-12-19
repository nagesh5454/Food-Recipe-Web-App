import  { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";
import { useParams } from "react-router-dom";

const Recipeid = () => {
  const { idMeal } = useParams(); // Get the meal ID from the URL
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        const result = await response.json();
        if (result.meals) {
          setData(result.meals[0]); // Extract the first meal object
          console.log(result.meals)
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };


    fetchData();
  }, [idMeal]); // Ensure the effect runs when `idMeal` changes

  return (
    <>
      <Navbar />
      
      <div style={{ width: "90%", margin: "2rem auto", textAlign: "center" }}>
        {error ? (
          <p style={{ color: "red" }}>Failed to load recipe details.</p>
        ) : data ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row", // Display items in a row
              alignItems: "flex-start",
              gap: "2rem", // Add spacing between image and details
              justifyContent: "center",
            }}
          >
            {/* Image Section */}
            <div>
              <img
                src={data.strMealThumb}
                alt={data.strMeal}
                style={{ width: "300px", borderRadius: "10px" }}
              />
            </div>

            {/* Details Section */}
            <div style={{ maxWidth: "600px", textAlign: "left" }}>
              <h2>{data.strMeal}</h2>
              <p>
                <b>Category:</b> {data.strCategory}
              </p>
              <p>
                <b>Area:</b> {data.strArea}
              </p>
              <p>
                <b>Instructions:</b>
              </p>
              <p style={{ textAlign: "justify" }}>{data.strInstructions}</p>
              <h4>Ingredients:</h4>
              <ul style={{ listStyleType: "circle" }}>
                {Object.keys(data)
                  .filter((key) => key.startsWith("strIngredient") && data[key])
                  .map((key) => (
                    <li key={key}>
                      {data[key]} - {data[`strMeasure${key.slice(13)}`]}
                    </li>
                  ))}
              </ul>
              <a
                href={data.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#ff6347",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "5px",
                }}
              >
                Watch Video
              </a>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <TrendingSlider />
    </>
  );
};

export default Recipeid;
