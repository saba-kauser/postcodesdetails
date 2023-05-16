import React, { useEffect, useState } from "react";

import { getPostCodes } from '../postcodeAPI/postcodeAPI'

function DisplayPostCodes(props) {

    const postcode=props.match.params.postcode
    const [postCodeResult,setPostCodeResult]=useState({});

useEffect(()=>{
        setPostCodeResult(getPostCodes(postcode))
},[postcode])

console.log(postCodeResult)

return(
        <div>
            <div className='postcoderesults'>
              <h5>Country: <span className='resultValue'>{postCodeResult.country}</span></h5>
              <h5>Region: <span className='resultValue'>{postCodeResult.region}</span></h5>
            </div>
      </div>
    )
}

export default DisplayPostCodes;
