import { useState } from "react"
import { sculptureList } from "./data"
import './App.css';


export default function Gallery(){
  const [index,setIndex] = useState(0);
  const [showMore,setShowMore] = useState(false);

  const hasPrev = index > 0;
  const hasNext = index < sculptureList.length -1;

  function handleClickPrev(){
      if (hasPrev){
        setIndex(index - 1);
      }
  }

  function handleClickNext(){
    if(hasNext){
      setIndex(index + 1);
    }
  }

  function handleMoreClick(){
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
    <button onClick={handleClickPrev} disabled={!hasPrev}>Prev</button>
    <button onClick={handleClickNext} disabled={!hasNext}>Next</button>
    <h2>
      <i>{sculpture.name}</i>
      by {sculpture.artist}
    </h2>
    <h3>
      {index + 1} of {sculptureList.length}
    </h3>
    <button onClick={handleMoreClick}>
      {
        showMore?'show ':'hide '
      } details
    </button>
    {showMore&& <p>{sculpture.description}</p>}
    <img className='img' src={sculpture.url} alt={sculpture.alt} />
    
    </>
  )
}