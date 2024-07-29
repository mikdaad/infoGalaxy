import React from "react";
import "../Styles/AppointmentForm.css";
import "../Styles/search.css";

import ImageGallery from "./images";

function Getimages({images}) {
  return (
    <div>
        <h2 className="form-title">
<span>IMAGES Related to your search:  </span>
<span> </span>
<span> </span>
<span> </span>
<span> </span>

</h2>


<ImageGallery imageUrls = {images}/>
    </div>
  );
}

export default Getimages;

