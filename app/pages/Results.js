import React from 'react'
import ThumbNail from './ThumbNail'

const Results = ({results}) => {
  return (
    <div>
        {results.map((result) => (
            <ThumbNail key={result.id} result={result}/>
        ))}
    </div>
  )
}

export default Results