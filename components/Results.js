import Thumbnail from './Thumbnail'

const Results = ({ results }) => {
  console.log(results)
  return (
    <div className="px-5 m-y-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((res) => (
        <Thumbnail key={res.id} item={res} />
      ))}
    </div>
  )
}

export default Results
