import React from 'react'

export default function Rating({rating ,changeRating = () => {}}) {
    let arr=[];
    
        for (let i=0 ; i<5 ; i++){
            if(i<rating){
                arr.push(<span onClick={() => changeRating(i+1)  }>★</span>)}
            else{
                arr.push(<span onClick={() => changeRating(i+1)  }>☆</span>)}
        }

    
    return (
        <div>
      {arr}
        </div>
    )
}

