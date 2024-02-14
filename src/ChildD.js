import ChildB from './ChildB';
import React from 'react';
import {data, data1} from './App';

export default function ChildD(){
    return(
   <data.Consumer>{
    (name) => {
        return(
            <data1.Consumer>
                {
                    (age) =>{
                        return(
                            <p> my name is {name}  and my gender id {age}
                           </p> 
                        )
                    }
                }
            </data1.Consumer>
           
        );
       }
    }
  
   </data.Consumer>

    );
}