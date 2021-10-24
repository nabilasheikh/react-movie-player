import './App.css';
import {useEffect, useState} from 'react'
import VideoPlayer from '../Video/Video.jsx'
import Cards from '../Cards/Cards.jsx';
//import { debounce } from '../utils';

const App = () => {
  const [resData,setResData]=useState(null)
  const [activePoster,setActivePoster]=useState(null)

  /* WIP for rerender on resize
  
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  
   useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 500)

    window.addEventListener('resize', debouncedHandleResize)
    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
}
  }) */
  useEffect(()=>{
    fetch(
      "https://gist.githubusercontent.com/mohammedhammoud/cf7aca4c87462cd061d4f2b1184392a8/raw/ea14389e293b478bdbace627d776ba6f7d735f14/teliatestdata.json")
                  .then((res) => res.json())
                  .then((json) => {
                    setResData({
                          items: json,
                      });
                  })
                  .catch((error) => {
                    console.log(error)
                  })
  }, [])

  useEffect(()=>{
    setActivePoster(resData?.items[0])
  }, [resData?.items])

  const handleActivePosterChange= (posterId) =>{
    const found = resData.items.find(element =>(element.id === posterId));
    setActivePoster(found);
  }
  return (
    <div className="home-page">
      <div className="main-content">
        <VideoPlayer videoSource={activePoster?.video} />
        <Cards cardsHeading='Most watched movies' cardData={resData} activeCardId={activePoster?.id} handleClick={handleActivePosterChange}/>
        <Cards cardsHeading='Top Picks' cardData={resData} activeCardId={activePoster?.id} handleClick={handleActivePosterChange}/>
      </div>
    </div>
  )
}

export default App

