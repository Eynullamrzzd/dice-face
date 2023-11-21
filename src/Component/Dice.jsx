
import React,{useState} from 'react'
import './Dice.css'
import dice1 from './images/dice 1.jpg'
import dice2 from './images/dice 2.jpg'
import dice3 from './images/dice 3.jpg'
import dice4 from './images/dice 4.jpg'
import dice5 from './images/dice 5.jpg'
import dice6 from './images/dice 6.jpg'

 
const Dice = () => {
  const [currentFace, setCurrentFace] = useState(dice1);
  const [currentFace2, setCurrentFace2] = useState(dice1);
let arr=[dice1,dice2,dice3,dice4,dice5,dice6]
  const getNextFace = () => {
    setCurrentFace(arr[Math.floor(Math.random()*6)]);
  };

  const getNextFace2 = () => {
    setCurrentFace2(arr[Math.floor(Math.random()*6)]);
  };
  return (
    <div >
      <img src={currentFace} alt={`Dice Face ${currentFace}`} onClick={getNextFace}/>
      <img src={currentFace2} alt={`Dice Face ${currentFace}`} onClick={getNextFace2}/>

    </div>
  );
};

export default Dice