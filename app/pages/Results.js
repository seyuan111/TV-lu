import React from 'react'
import ThumbNail from './ThumbNail'

const Results = ({results}) => {
  return (
    <div>
    {results?.length ? (
      <div>
        {results.map((result) => (
          <ThumbNail key={result.id} result={result} />
        ))}
      </div>
    ) : (
      <p>No results available.</p>
    )}
    </div>
  )
}

export default Results