import Image from 'next/image'
import Header from './pages/Header'
import Nav from './pages/Nav'
import Results from './pages/Results'
import requests from './utils/request'

export default function Home({results}) {
  return (
    <div>
      <Header />
      <Nav />
      <Results results={results}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then(res.json())

  return{
    props: {
      results: request.results,
    }
  }
}