import React from 'react';
import ReactDOM from 'react-dom';
import Person from "./author.js";
import './index.css';
import *as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Person
     author={{pictureUrl:"http://bp1.blogger.com/_PAHqWxm5mGc/SIdv7dPv9FI/AAAAAAAAAC4/vcny9073KG4/s320/eminescu_1[1].jpg" ,
               name:"Mihai Eminescu"}}
      text="  De-acuma nu te-oi mai vedea,
      Rămâi, rămâi, cu bine!
      Mă voi feri în calea mea
      De tine."
      date="Adio, 09.09.1870"

    />

<Person

   author={{pictureUrl:"http://upload.wikimedia.org/wikipedia/commons/f/f3/George_Cosbuc_-_Foto02.jpg" ,
              name:"George Cosbuc"}}
     text="Cad fulgii mari încet zburând,
     Si-n casa arde focul,
     Iar noi pe lânga mama stând
     De mult uitaram jocul.
     De mult si patul ne-astepta,
     Dar cine sa se culce?
     Rugata, mama repeta
     Cu glasul rar si dulce"
     date="Colindatorii, 20.12.1910"

   />

<Person
    
   author={{pictureUrl:"https://istoriiregasite.files.wordpress.com/2016/03/george-bacovia.png?w=357&h=473" ,
              name:"George Bacovia"}}
     text="Dormeau adânc sicriele de plumb,
     Și flori de plumb și funerar veștmânt -
     Stam singur în cavou… și era vânt…
     Și scârțâiau coroanele de plumb"
     date="Plumb, 25.07.1916"

   />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
