import { MeiliSearch } from 'meilisearch'
import movies from './movies.json'

const client = new MeiliSearch({
    host: 'http://localhost:7700',
    apiKey: 'aSampleMasterKey'
  })
  client.index('movies').addDocuments(movies as Record<string, unknown>[])
    .then((res) => console.log(res))
  