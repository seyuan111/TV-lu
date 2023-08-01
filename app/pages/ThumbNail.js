import React from 'react'
import Image from 'next/image'
import {BiLike} from 'react-icons/bi'

const ThumbNail = ({result}) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'

  return (
    <div className="cursor-pointer p-2 transition-200 ease-in transform hover:z-50 sm:hover:scale-105">
      <Image layout="responsive" height={1080} width={1920} src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.backdrop_path}`} />

      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-2 text-2xl text-white transition-all ease-in">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center">
          {result.media_type && `${result.media_type} `}{" "}
          {result.release_date || result.first_air_date}{" "}
          <BiLike className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  )
}

export default ThumbNail