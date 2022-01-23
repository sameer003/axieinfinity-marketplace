export default function Progress({breedCount, title = ''}) {
    return (
        <div className="flex justify-around py-3 cursor-pointer" title={title}>
          <div className={`w-2 h-2 rounded ${breedCount > 0 ? 'bg-red-600' : 'bg-green-500' } `}></div>
          <div className={`w-2 h-2 rounded ${breedCount > 1 ? 'bg-red-600' : 'bg-green-500' } `}></div>
          <div className={`w-2 h-2 rounded ${breedCount > 2 ? 'bg-red-600' : 'bg-green-500' } `}></div>
          <div className={`w-2 h-2 rounded ${breedCount > 3 ? 'bg-red-600' : 'bg-green-500' } `}></div>
          <div className={`w-2 h-2 rounded ${breedCount > 4 ? 'bg-red-600' : 'bg-green-500' } `}></div>
          <div className={`w-2 h-2 rounded ${breedCount > 5 ? 'bg-red-600' : 'bg-green-500' } `}></div>
          <div className={`w-2 h-2 rounded ${breedCount > 6 ? 'bg-red-600' : 'bg-green-500' } `}></div>
      </div>
    )
}
