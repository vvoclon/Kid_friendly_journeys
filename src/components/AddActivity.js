import React from 'react';
import Slider from "react-slick";

function AddActivity() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div>
      <h1>Add New Activity</h1>
      <input type="text" placeholder="Enter activity name" />
      <Slider {...settings}>
        <div>
          <img src="https://media.istockphoto.com/id/1141196125/photo/hiking-in-the-allgaeu-alps.jpg?s=612x612&w=0&k=20&c=scBnm6PxD4eJm49IKmP-EJiarbI_lds_z5QCWgViqTo=" alt="Hiking in the Allgäu Alps" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1358569473/photo/hiking-group-in-valley-of-umbalfaelle-on-grossvenediger-with-view-to-mountain-roetspitze-in.jpg?s=612x612&w=0&k=20&c=IWujsPeMj-d4pz_IGznudwDepLqYpHnodZ4Pvr5sqwE=" alt="Hiking group in Valley of Umbalfaelle" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1305177948/photo/family-with-small-children-hiking-outdoors-in-summer-nature-walking-in-high-tatras.jpg?s=612x612&w=0&k=20&c=Q9FvL7lEZGCcWe1PND0G9M57OUyCY332-V8NGliG4_U=" alt="Family hiking outdoors in High Tatras" />
        </div>
        {/* More slides as needed */}
      </Slider>
    </div>
  );
}

export default AddActivity;
