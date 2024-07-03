import React, { useState } from 'react';
import moment from 'moment';

const Comic: React.FC = () => {
  const [comic, setComic] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchComic = async () => {
    setLoading(true);
    setError('');
    setComic(null);

    try {
      const email = "e.akimenko@innopolis.university";
      const idURL = `https://fwd.innopolis.university/api/hw2?email=${email}`;

      const idResponse = await fetch(idURL);
      if (!idResponse.ok) {
        throw new Error('Failed to fetch comic ID');
      }

      const comicId = await idResponse.json();
      const comicURL = `https://fwd.innopolis.university/api/comic?id=${comicId}`;

      const comicResponse = await fetch(comicURL);
      if (!comicResponse.ok) {
        throw new Error('Failed to fetch comic');
      }

      const comicData = await comicResponse.json();
      setComic(comicData);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch comic');
      console.error("Error fetching comic:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="comic-container">
      <button id="get-comic-btn" onClick={fetchComic} disabled={loading}>
        {loading ? 'Loading...' : 'Get Comic'}
      </button>
      {error && <p>{error}</p>}
      {comic && (
        <div className="comic-details" style={{ display: 'block' }}>
          <h1 id="comic-title">{comic.safe_title}</h1>
          <p id="comic-date">
            {isNaN(new Date(comic.year, comic.month - 1, comic.day).getTime())
              ? 'Invalid Date'
              : moment(new Date(comic.year, comic.month - 1, comic.day)).format('LL')}
          </p>
          <img id="comic-img" src={comic.img} alt={comic.alt} />
          <p id="comic-alt" className="active">{comic.alt}</p>
        </div>
      )}
    </div>
  );
};

export default Comic;
