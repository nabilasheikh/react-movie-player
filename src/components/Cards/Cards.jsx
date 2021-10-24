import "./Cards.css";
import { useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography/Typography.jsx'

const Cards = (props) => {
  const {activeCardId ,cardData,handleClick ,cardsHeading} = props;
  const [clicked,setClicked] =useState(activeCardId)

  useEffect(()=>{
   setClicked(activeCardId)
  }, [activeCardId]) 

   const handlePosterChange=(e)=>{
    const posterId = parseInt(e.target.id);
    setClicked(posterId)
    handleClick(posterId);
  } 
  return (
    <>
    <Typography variant={'h1'} text={cardsHeading}></Typography>
    <div className="cards">
      {cardData?.items.map((card) => {
        return(
           <div className={`card-potrait tooltip`} key={card.id}  > 
            <img src={card.image} alt={card.name} onClick={handlePosterChange} id={card.id} className={`card-potrait ${clicked === card.id && "active-card"}`}/>
            <Typography variant={'h2'} text={card.name}></Typography>
            <span class="tooltiptext">{card.description}</span>
          </div>
        ) 
        
      })}
      
    </div>
    </>
  );
};

Cards.propTypes={
  activeCardId:PropTypes.number.isRequired ,
  cardData:PropTypes.object.isRequired,
  handleClick:PropTypes.func.isRequired ,
  cardsHeading:PropTypes.string.isRequired
}

export default Cards;
