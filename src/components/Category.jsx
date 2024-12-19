import  { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Category = () => {
  const { name } = useParams(); // Get the category name from the URL

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
        );
        const result = await response.json();
        if (result.meals) {
          setData(result.meals); // Set all meals for the category
          setError(false);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  return (
    <div style={{ width: '90%', margin: '2rem auto' }}>
      <h1 style={{ textAlign: 'center' }}>{name} Recipes</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Failed to load recipes for {name}.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {data.map((meal) => (
            <div
              key={meal.idMeal}
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '1rem',
                width: '200px',
                textAlign: 'center',
              }}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ width: '100%', borderRadius: '10px' }}
              />
              <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>{meal.strMeal}</h3>
              <Link
                to={`/recipe/${meal.idMeal}`}
                style={{
                  display: 'inline-block',
                  marginTop: '0.5rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#ff6347',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '5px',
                }}
              >
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
