import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import TrendingSlider from './TrendingSlider';
import { useParams, Link } from 'react-router-dom';

const SearchElement = () => {
  const { searchTerm } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const result = await api.json();
        
        if (result.meals) {
          setData(result.meals); // Set the meals data if available
        } else {
          setData([]); // Set an empty array if no meals are found
        }
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <div style={{
        width: '90%',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
        gridGap: '1rem',
        marginTop: '2rem'
      }}>
        {loading && <p>Loading...</p>} {/* Show a loading message */}
        {error && <p>{error}</p>} {/* Show an error message if any */}
        {data.length > 0 ? (
          data.map((d) => {
            return (
              <Link to={`/${d.idMeal}`} className='link' key={d.idMeal}>
                <div style={{ textAlign: 'center' }}>
                  <div className="img">
                    <img src={d.strMealThumb} alt={d.strMeal} style={{ width: '13rem' }} />
                  </div>
                  <h3>{d.strMeal}</h3>
                </div>
              </Link>
            );
          })
        ) : (
          !loading && <p>No results found for "{searchTerm}"</p> // Show message if no results are found
        )}
      </div>

      <TrendingSlider />
    </>
  );
};

export default SearchElement;
