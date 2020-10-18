import React from'react';




const Person =(props)=> {
    return (
    <div className="User">
      
       <div className="Info">
           <img className="picture" src={props.author.pictureUrl}  />

           <div className="name"> {props.author.name}  </div>
             </div>

             <div className="description">{props.text}</div>
             <div className="Date">{props.date} </div>
                   </div>
   );
};
export default Person ;

