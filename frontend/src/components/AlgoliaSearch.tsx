import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Hits, InstantSearch, Pagination, RefinementList, SearchBox } from 'react-instantsearch';
import { ALGOLIA_INDEX_NAME, searchClient } from '../utils/algoliaClient';

interface AlgoliaSearchProps {
  initialQuery?: string;
}

// Product hit component
const ProductHit = ({ hit }: any) => (
  <div className="card bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <Image 
        src={hit.image || '/placeholder.jpg'} 
        alt={hit.name} 
        width={200} 
        height={200} 
        className="rounded-xl" 
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{hit.name}</h2>
      <p>${(hit.price / 100).toFixed(2)}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  </div>
);

export default function AlgoliaSearch({ initialQuery = '' }: AlgoliaSearchProps) {
  const searchBoxRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Set the initial query in the search box when component mounts or initialQuery changes
    if (initialQuery && searchBoxRef.current) {
      searchBoxRef.current.value = initialQuery;
      
      // Create and dispatch an input event to trigger the search
      const inputEvent = new Event('input', { bubbles: true });
      searchBoxRef.current.dispatchEvent(inputEvent);
    }
  }, [initialQuery]);

  return (
    <div className="container mx-auto p-4">
      <InstantSearch searchClient={searchClient} indexName={ALGOLIA_INDEX_NAME}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-2">Categories</h3>
            <RefinementList attribute="category" />
          </div>
          <div className="w-full md:w-3/4">
            <SearchBox 
              placeholder="Search products..." 
              className="mb-4"
              inputRef={searchBoxRef}
            />
            <Hits hitComponent={ProductHit} />
            <div className="mt-4 flex justify-center">
              <Pagination />
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  );
}


