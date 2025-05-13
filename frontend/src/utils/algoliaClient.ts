
import { algoliasearch } from "algoliasearch";

// Use your Algolia credentials from environment variables
export const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ''
);

export const ALGOLIA_INDEX_NAME = 'algolia_products';





