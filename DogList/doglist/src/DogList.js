import React from 'react';
import Breeds from './Breeds';

const DogList=({list})=> {
    return(
        <div>
            {list.map((user, i)=> {
                return <Breeds key={i}  name={list[i].name} />;
            })}
        </div>
       
    );
};
console.log(DogList)

export default DogList;