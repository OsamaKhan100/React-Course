import React from "react";


const Info = (props) => {
  return (
    <div>
       <h2 className='f'>Props Practice in Function Component</h2>
       <div class="p">
       <p>{props.name}</p>
       <p>{props.Age}</p>
       <p>{props.City}</p>
       <p>{props.Degree}</p>
       </div>
    </div>
   
  )
}

export default Info;
