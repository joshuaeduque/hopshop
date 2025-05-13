import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AlgoliaSearch from '../components/AlgoliaSearch';
import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';

export default function Search() {
  const router = useRouter();
  const { query } = router.query;
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    if (query && typeof query === 'string') {
      setSearchTerm(query);
    }
  }, [query]);

  return (
    <>
      <Head>
        <title>Search Products | HopShop</title>
      </Head>
      <Header />
      <Navigation />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Search Products</h1>
        <AlgoliaSearch initialQuery={searchTerm} />
      </main>
    </>
  );
}
