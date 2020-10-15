import React, { useEffect, useState } from 'react';

import sass from '../images/sass.png'
import ts from '../images/ts.png'
import react from '../images/react.png'
import { cpuUsage } from 'process';

export function Header() {
    const [num,setNum] = useState(shuffleArray([{id:'sass_1',img:sass}, {id:'sass_2',img:sass}, {id:'ts_1',img:ts}, {id:'ts_2',img:ts},{id:'react_1',img:react}, {id:'react_2',img:react}]))
    const [tempID,setTempID]=useState('')
    const useComponentDidMount = (func: React.EffectCallback) => useEffect(func, []);


    function shuffleArray(array:any[]) {
         let arr=array;
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
         return arr;
    }
    const chooseCard=(e:any)=>{
        const elem= document.getElementById(e.id);

        if(tempID===''){
            console.log('puste')
            setTempID(e.id)
            flipCard(e)
        }
        else{
           let e_id=e.id.substring(0,e.id.indexOf('_'))
           let temp_id= tempID.substring(0,tempID.indexOf('_'))
            if(e_id==temp_id){
                flipCard(e)
                setTempID('')
                let elem= document.getElementById(tempID)!.style.pointerEvents="none";
                e.style.pointerEvents='none';
                
                console.log
            }
            else{
               let elem= document.getElementById(tempID);
               console.log(e)
               console.log(e)
               setTimeout(function(){flipCard(elem)},1000);
               setTempID('')
                flipCard(e)
                setTimeout(function(){flipCard(e)},2000);

           }
        }
        // console.log(tempID)
    }
    const flipCard = (e: any) => {
            //    console.log(e.id)
        if (e.className === "card") {
            if (e.style.transform == "rotateY(180deg)") {
                e.style.transform = "rotateY(0deg)";
            }
            else {
                e.style.transform = "rotateY(180deg)";
            }
        }
       
    }
 

    return (
        <div className="firstP">
            Hello! I am Klaudia and this is my portfolio.
            <br />

but first...
            <br />
play quick memory game for fun
<div className="cont">

{num.map(m=>{
         return <button className="container">
         <div   className="card"  id={m.id} onClick={(e) => chooseCard(e.currentTarget)}> 
             <div className="front">
                 Front of the card
             </div>
             <div className="back">
                <img src={m.img} width="80px"/>
             </div>
         </div>
     </button>
     })}
     
                      

            </div>

          
        </div>
    )
}