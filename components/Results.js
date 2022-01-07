import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'

const Results = ({ results }) => {
  return (
    <FlipMove className="px-5 m-y-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((res) => (
        <Thumbnail key={res.id} item={res} />
      ))}
    </FlipMove>
  )
}

export default Results
