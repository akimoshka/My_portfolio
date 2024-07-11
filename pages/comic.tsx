import React from 'react';
import Layout from '../components/Layout';
import moment from 'moment';
import Head from 'next/head';

interface Comic {
  safe_title: string;
  year: number;
  month: number;
  day: number;
  img: string;
  alt: string;
  // Add any other properties that the comic object has
}

interface ComicProps {
  comic: Comic;
  error?: string;
}

const Comic: React.FC<ComicProps> = ({ comic, error }) => {
  if (error) {
    return (
      <Layout>
        <div className="comic-container">
          <p>{error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Comic</title>
        <meta
          name="description"
          content="A page where you can get a funny comic"
        />
      </Head>
      <div className="comic-container">
        <div className="comic-details" style={{ display: 'block' }}>
          <h1 id="comic-title">{comic.safe_title}</h1>
          <p id="comic-date">
            {isNaN(new Date(comic.year, comic.month - 1, comic.day).getTime())
              ? 'Invalid Date'
              : moment(new Date(comic.year, comic.month - 1, comic.day)).format(
                  'LL',
                )}
          </p>
          <img id="comic-img" src={comic.img} alt={comic.alt} />
          <p id="comic-alt" className="active">
            {comic.alt}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    const email = 'e.akimenko@innopolis.university';
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

    return { props: { comic: comicData } };
  } catch (err) {
    return { props: { error: 'Failed to fetch comic' } };
  }
}

export default Comic;
