import React  from 'react';

import taxi from './images/taxi.png';
import food from './images/food.png';
import money from './images/money.png';

export const data = [  
    {  
       "date":"12.09.2019",
       "type":"food",
       "price":"145",
       "name":"Serv Einsten Pub - Piata Mica",
       "complited": true
    },
    {  
       "date":"12.09.2019",
       "type":"food",
       "price":"145",
       "name":"Fast Food Yummy Yang",
       "complited": false
    },
    {  
       "date":"12.09.2019",
       "type":"taxi",
       "price":"145",
       "name":"Conversion from EUR to RON",
       "complited": true
    },
    {  
       "date":"12.09.2019",
       "type":"money",
       "price":"145",
       "name":"Rc146 Rompetrol Sibi",
       "complited": false
    },
    {  
      "date":"12.09.2019",
      "type":"money",
      "price":"145",
      "name":"Rc146 Rompetrol Sibi",
      "complited": false
   }
 ];

 export const images = [
     {
         type: 'taxi',
         img: ()=> <img src={taxi} alt='taxi'/>
     },
     {
        type: 'food',
        img: ()=> <img src={food} alt='food'/>
    },
    {
        type: 'money',
        img: ()=> <img src={money} alt='money'/>
    }
 ]