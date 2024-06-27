const activitiesData = [
  { 
    id: 1, 
    name: 'Hiking in Sulov', 
    length: 'Short', 
    difficulty: 'Easy', 
    rating: 4, 
    location: 'Sulov, Slovakia',
    description: 'A scenic hike through the Sulov rocks.',
    image: 'https://media.istockphoto.com/id/1423913494/photo/beautiful-landscape-of-rocks-and-hills-in-the-autumn-season.jpg?s=612x612&w=0&k=20&c=hStrnBbTDyul0UDbjdw1UVNO3J4iSVtbXEshEIcDSGQ=',
    images: [
      'https://media.istockphoto.com/id/1423913494/photo/beautiful-landscape-of-rocks-and-hills-in-the-autumn-season.jpg?s=612x612&w=0&k=20&c=hStrnBbTDyul0UDbjdw1UVNO3J4iSVtbXEshEIcDSGQ=',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmr49lODRHtK1hNTmNeRfjN7tHqvCtDakGg&s',
      'https://thumbs.dreamstime.com/b/amazing-drone-mountain-panorama-landscape-sunrise-slovakia-sulov-296665476.jpg'
    ]
  },
  { 
    id: 2, 
    name: 'Mountain Climbing in Vysoke Tatry', 
    length: 'Long', 
    difficulty: 'Difficult', 
    rating: 5, 
    location: 'Vysoke Tatry, Slovakia',
    description: 'Challenging mountain climbing experience.',
    image: 'https://www.panorama.sk/images/pict/21434.jpg',
    images: [
      'https://www.panorama.sk/images/pict/21434.jpg',
      'https://familiescantravel.com/wp-content/uploads/2019/10/Hiking-in-the-Tatra-Mountains-Skalnate-pleso-1024x472.jpg',
      'https://dag08uxs564ub.cloudfront.net/images/Tatra_hiking_routes.max-1280x768.jpg'
    ]
  },
  { 
    id: 3, 
    name: 'Hiking in Mala Fatra', 
    length: 'Medium', 
    difficulty: 'Moderate', 
    rating: 4, 
    location: 'Mala Fatra, Slovakia',
    description: 'A moderate hike through the beautiful Mala Fatra.',
    image: 'https://www.penguintravel.com/uploads/products/thumb/Th10_prbig_106.jpg',
    images: [
      'https://www.penguintravel.com/uploads/products/thumb/Th10_prbig_106.jpg',
      'https://example.com/path_to_image3_2.jpg',
      'https://example.com/path_to_image3_3.jpg'
    ]
  },
  { 
    id: 4, 
    name: 'Cycling in Slovak Paradise', 
    length: 'Long', 
    difficulty: 'Moderate', 
    rating: 4, 
    location: 'Slovak Paradise, Slovakia',
    description: 'Enjoy cycling through the scenic Slovak Paradise.',
    image: 'https://media.kosiceregion.com/assets/51365/l_a07a4959.jpg',
    images: [
      'https://media.kosiceregion.com/assets/51365/l_a07a4959.jpg',
      'https://example.com/path_to_image4_2.jpg',
      'https://example.com/path_to_image4_3.jpg'
    ]
  },
  { 
    id: 5, 
    name: 'Rock Climbing in Slovak Karst', 
    length: 'Short', 
    difficulty: 'Difficult', 
    rating: 5, 
    location: 'Slovak Karst, Slovakia',
    description: 'Experience the thrill of rock climbing in Slovak Karst.',
    image: 'https://en.infoglobe.cz/res/archive/669/075959_05_819834.jpg?seek=1388487605',
    images: [
      'https://en.infoglobe.cz/res/archive/669/075959_05_819834.jpg?seek=1388487605',
      'https://example.com/path_to_image5_2.jpg',
      'https://example.com/path_to_image5_3.jpg'
    ]
  },
  { 
    id: 6, 
    name: 'Skiing in Jasna', 
    length: 'Long', 
    difficulty: 'Difficult', 
    rating: 4, 
    location: 'Jasna, Slovakia',
    description: 'Ski on the stunning slopes of Jasna.',
    image: 'https://www.jasna.sk/fileadmin/resort_upload/jasna/Fotky_Jasna/Jasna_zima/jasna___68_.jpg',
    images: [
      'https://www.jasna.sk/fileadmin/resort_upload/jasna/Fotky_Jasna/Jasna_zima/jasna___68_.jpg',
      'https://example.com/path_to_image6_2.jpg',
      'https://example.com/path_to_image6_3.jpg'
    ]
  },
  { 
    id: 7, 
    name: 'Snowshoeing in High Tatras', 
    length: 'Short', 
    difficulty: 'Moderate', 
    rating: 4, 
    location: 'High Tatras, Slovakia',
    description: 'Explore the winter wonderland of High Tatras on snowshoes.',
    image: 'https://slovakia-explorer.com/uploads/tours/snowshoeing-high-tatras-zdiar-to-bachledova-valley/_galleryBig/snowshoeing-high-tatras-slovakia-winter-holiday-1.jpg',
    images: [
      'https://slovakia-explorer.com/uploads/tours/snowshoeing-high-tatras-zdiar-to-bachledova-valley/_galleryBig/snowshoeing-high-tatras-slovakia-winter-holiday-1.jpg',
      'https://example.com/path_to_image7_2.jpg',
      'https://example.com/path_to_image7_3.jpg'
    ]
  },
  { 
    id: 8, 
    name: 'Cross-country Skiing in Orava', 
    length: 'Medium', 
    difficulty: 'Moderate', 
    rating: 4, 
    location: 'Orava, Slovakia',
    description: 'Enjoy cross-country skiing in the beautiful Orava.',
    image: 'https://www.travelguide.sk/userfiles/stays/meander_ski_park_oravice_1473317644_02.jpg',
    images: [
      'https://www.travelguide.sk/userfiles/stays/meander_ski_park_oravice_1473317644_02.jpg',
      'https://example.com/path_to_image8_2.jpg',
      'https://example.com/path_to_image8_3.jpg'
    ]
  },
  { 
    id: 9, 
    name: 'Rafting in Dunajec Gorge', 
    length: 'Long', 
    difficulty: 'Moderate', 
    rating: 4, 
    location: 'Dunajec Gorge, Slovakia',
    description: 'Exciting rafting experience in the Dunajec Gorge.',
    image: 'https://tropster.pl/wp-content/uploads/2018/01/rafting-dunajec-river-735x400.jpg',
    images: [
      'https://tropster.pl/wp-content/uploads/2018/01/rafting-dunajec-river-735x400.jpg',
      'https://example.com/path_to_image9_2.jpg',
      'https://example.com/path_to_image9_3.jpg'
    ]
  },
  { 
    id: 10, 
    name: 'Paragliding in Liptov', 
    length: 'Short', 
    difficulty: 'Difficult', 
    rating: 5, 
    location: 'Liptov, Slovakia',
    description: 'Experience the thrill of paragliding in Liptov.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TtF9j0zTv5HrGfkXFV4BFeCqYtm5Qo8qhg&s',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TtF9j0zTv5HrGfkXFV4BFeCqYtm5Qo8qhg&s',
      'https://example.com/path_to_image10_2.jpg',
      'https://example.com/path_to_image10_3.jpg'
    ]
  },
  { 
    id: 11, 
    name: 'Fly Fishing in Poprad River', 
    length: 'Variable', 
    difficulty: 'Easy', 
    rating: 4, 
    location: 'Tatranska Lomnica, Slovakia',
    description: 'Enjoy fly fishing in the serene Poprad River.',
    image: 'https://www.fly-fishing-tours-slovakia.com/wp-content/uploads/2016/01/vah-river-fly-fishing-04.jpg',
    images: [
      'https://www.fly-fishing-tours-slovakia.com/wp-content/uploads/2016/01/vah-river-fly-fishing-04.jpg',
      'https://example.com/path_to_image11_2.jpg',
      'https://example.com/path_to_image11_3.jpg'
    ]
  },
  { 
    id: 12, 
    name: 'Wildlife Watching in Pieniny', 
    length: 'Short', 
    difficulty: 'Easy', 
    rating: 3, 
    location: 'Pieniny, Slovakia',
    description: 'Observe the diverse wildlife in Pieniny.',
    image: 'path_to_image12.jpg',
    images: [
      'path_to_image12.jpg',
      'https://example.com/path_to_image12_2.jpg',
      'https://example.com/path_to_image12_3.jpg'
    ]
  },
  { 
    id: 13, 
    name: 'Caving in Demanovska', 
    length: 'Medium', 
    difficulty: 'Difficult', 
    rating: 4, 
    location: 'Demanovska, Slovakia',
    description: 'Explore the fascinating caves of Demanovska.',
    image: 'path_to_image13.jpg',
    images: [
      'path_to_image13.jpg',
      'https://example.com/path_to_image13_2.jpg',
      'https://example.com/path_to_image13_3.jpg'
    ]
  },
  { 
    id: 14, 
    name: 'Canoeing in Oravsky Podzamok', 
    length: 'Medium', 
    difficulty: 'Moderate', 
    rating: 4, 
    location: 'Oravsky Podzamok, Slovakia',
    description: 'Canoe through the picturesque Oravsky Podzamok.',
    image: 'path_to_image14.jpg',
    images: [
      'path_to_image14.jpg',
      'https://example.com/path_to_image14_2.jpg',
      'https://example.com/path_to_image14_3.jpg'
    ]
  },
  { 
    id: 15, 
    name: 'Hot Air Ballooning in Spis Castle', 
    length: 'Short', 
    difficulty: 'Easy', 
    rating: 4, 
    location: 'Spis Castle, Slovakia',
    description: 'Take a hot air balloon ride over Spis Castle.',
    image: 'path_to_image15.jpg',
    images: [
      'path_to_image15.jpg',
      'https://example.com/path_to_image15_2.jpg',
      'https://example.com/path_to_image15_3.jpg'
    ]
  },
  { 
    id: 16, 
    name: 'Horseback Riding in Zdiar', 
    length: 'Medium', 
    difficulty: 'Moderate', 
    rating: 4, 
    location: 'Zdiar, Slovakia',
    description: 'Enjoy a scenic horseback ride in Zdiar.',
    image: 'path_to_image16.jpg',
    images: [
      'path_to_image16.jpg',
      'https://example.com/path_to_image16_2.jpg',
      'https://example.com/path_to_image16_3.jpg'
    ]
  },
  { 
    id: 17, 
    name: 'Zip Lining in Slovak Paradise', 
    length: 'Short', 
    difficulty: 'Moderate', 
    rating: 4, 
    location: 'Slovak Paradise, Slovakia',
    description: 'Experience the excitement of zip lining in Slovak Paradise.',
    image: 'path_to_image17.jpg',
    images: [
      'path_to_image17.jpg',
      'https://example.com/path_to_image17_2.jpg',
      'https://example.com/path_to_image17_3.jpg'
    ]
  },
  { 
    id: 18, 
    name: 'Waterfall Rappelling in Slovak Paradise', 
    length: 'Short', 
    difficulty: 'Difficult', 
    rating: 5, 
    location: 'Slovak Paradise, Slovakia',
    description: 'Rappel down stunning waterfalls in Slovak Paradise.',
    image: 'path_to_image18.jpg',
    images: [
      'path_to_image18.jpg',
      'https://example.com/path_to_image18_2.jpg',
      'https://example.com/path_to_image18_3.jpg'
    ]
  },
  { 
    id: 19, 
    name: 'Trekking in Tatra National Park', 
    length: 'Long', 
    difficulty: 'Moderate', 
    rating: 4, 
    location: 'Tatra National Park, Slovakia',
    description: 'Trek through the beautiful trails of Tatra National Park.',
    image: 'path_to_image19.jpg',
    images: [
      'path_to_image19.jpg',
      'https://example.com/path_to_image19_2.jpg',
      'https://example.com/path_to_image19_3.jpg'
    ]
  },
  { 
    id: 20, 
    name: 'Fishing in Orava River', 
    length: 'Variable', 
    difficulty: 'Easy', 
    rating: 4, 
    location: 'Orava River, Slovakia',
    description: 'Enjoy fishing in the peaceful Orava River.',
    image: 'path_to_image20.jpg',
    images: [
      'path_to_image20.jpg',
      'https://example.com/path_to_image20_2.jpg',
      'https://example.com/path_to_image20_3.jpg'
    ]
  },
  { 
    id: 21, 
    name: 'Bird Watching in Poloniny National Park', 
    length: 'Short', 
    difficulty: 'Easy', 
    rating: 3, 
    location: 'Poloniny National Park, Slovakia',
    description: 'Observe the diverse bird species in Poloniny National Park.',
    image: 'path_to_image21.jpg',
    images: [
      'path_to_image21.jpg',
      'https://example.com/path_to_image21_2.jpg',
      'https://example.com/path_to_image21_3.jpg'
    ]
  },
  { 
    id: 22, 
    name: 'Exploring Caves in Slovak Karst', 
    length: 'Medium', 
    difficulty: 'Difficult', 
    rating: 4, 
    location: 'Slovak Karst, Slovakia',
    description: 'Explore the fascinating caves in Slovak Karst.',
    image: 'path_to_image22.jpg',
    images: [
      'path_to_image22.jpg',
      'https://example.com/path_to_image22_2.jpg',
      'https://example.com/path_to_image22_3.jpg'
    ]
  },
  { 
    id: 23, 
    name: 'Cycling in Pieniny National Park', 
    length: 'Medium', 
    difficulty: 'Moderate', 
    rating: 4, 
    location: 'Pieniny National Park, Slovakia',
    description: 'Cycle through the scenic trails of Pieniny National Park.',
    image: 'path_to_image23.jpg',
    images: [
      'path_to_image23.jpg',
      'https://example.com/path_to_image23_2.jpg',
      'https://example.com/path_to_image23_3.jpg'
    ]
  },
  { 
    id: 24, 
    name: 'Paragliding in Low Tatras', 
    length: 'Short', 
    difficulty: 'Difficult', 
    rating: 5, 
    location: 'Low Tatras, Slovakia',
    description: 'Enjoy paragliding in the Low Tatras.',
    image: 'path_to_image24.jpg',
    images: [
      'path_to_image24.jpg',
      'https://example.com/path_to_image24_2.jpg',
      'https://example.com/path_to_image24_3.jpg'
    ]
  },
  { 
    id: 25, 
    name: 'Fishing in Liptovska Mara', 
    length: 'Variable', 
    difficulty: 'Easy', 
    rating: 4, 
    location: 'Liptovska Mara, Slovakia',
    description: 'Enjoy fishing in Liptovska Mara.',
    image: 'path_to_image25.jpg',
    images: [
      'path_to_image25.jpg',
      'https://example.com/path_to_image25_2.jpg',
      'https://example.com/path_to_image25_3.jpg'
    ]
  },
  { 
    id: 26, 
    name: 'Sightseeing in Bratislava Old Town', 
    length: 'Short', 
    difficulty: 'Easy', 
    rating: 4, 
    location: 'Bratislava Old Town, Slovakia',
    description: 'Explore the historic sites in Bratislava Old Town.',
    image: 'path_to_image26.jpg',
    images: [
      'path_to_image26.jpg',
      'https://example.com/path_to_image26_2.jpg',
      'https://example.com/path_to_image26_3.jpg'
    ]
  },
  { 
    id: 27, 
    name: 'Horseback Riding in Velka Fatra', 
    length: 'Medium', 
    difficulty: 'Moderate', 
    rating: 4, 
    location: 'Velka Fatra, Slovakia',
    description: 'Enjoy horseback riding in the scenic Velka Fatra.',
    image: 'path_to_image27.jpg',
    images: [
      'path_to_image27.jpg',
      'https://example.com/path_to_image27_2.jpg',
      'https://example.com/path_to_image27_3.jpg'
    ]
  },
  { 
    id: 28, 
    name: 'Rock Climbing in Low Tatras', 
    length: 'Long', 
    difficulty: 'Difficult', 
    rating: 5, 
    location: 'Low Tatras, Slovakia',
    description: 'Experience rock climbing in the Low Tatras.',
    image: 'path_to_image28.jpg',
    images: [
      'path_to_image28.jpg',
      'https://example.com/path_to_image28_2.jpg',
      'https://example.com/path_to_image28_3.jpg'
    ]
  },
  { 
    id: 29, 
    name: 'Hiking in Slovak Paradise', 
    length: 'Short', 
    difficulty: 'Easy', 
    rating: 4, 
    location: 'Slovak Paradise, Slovakia',
    description: 'Enjoy hiking through the beautiful Slovak Paradise.',
    image: 'path_to_image29.jpg',
    images: [
      'path_to_image29.jpg',
      'https://example.com/path_to_image29_2.jpg',
      'https://example.com/path_to_image29_3.jpg'
    ]
  },
  { 
    id: 30, 
    name: 'Mountain Biking in Malino Brdo', 
    length: 'Long', 
    difficulty: 'Moderate', 
    rating: 4, 
    location: 'Malino Brdo, Slovakia',
    description: 'Experience mountain biking in Malino Brdo.',
    image: 'path_to_image30.jpg',
    images: [
      'path_to_image30.jpg',
      'https://example.com/path_to_image30_2.jpg',
      'https://example.com/path_to_image30_3.jpg'
    ]
  },
  { 
    id: 31, 
    name: 'Ski Touring in High Tatras', 
    length: 'Long', 
    difficulty: 'Difficult', 
    rating: 4, 
    location: 'High Tatras, Slovakia',
    description: 'Experience ski touring in the High Tatras.',
    image: 'path_to_image31.jpg',
    images: [
      'path_to_image31.jpg',
      'https://example.com/path_to_image31_2.jpg',
      'https://example.com/path_to_image31_3.jpg'
    ]
  },
  { 
    id: 32, 
    name: 'Snowboarding in Donovaly', 
    length: 'Long', 
    difficulty: 'Difficult', 
    rating: 4, 
    location: 'Donovaly, Slovakia',
    description: 'Enjoy snowboarding in Donovaly.',
    image: 'path_to_image32.jpg',
    images: [
      'path_to_image32.jpg',
      'https://example.com/path_to_image32_2.jpg',
      'https://example.com/path_to_image32_3.jpg'
    ]
  },
  { 
    id: 33, 
    name: 'Ice Climbing in Mala Fatra', 
    length: 'Short', 
    difficulty: 'Difficult', 
    rating: 5, 
    location: 'Mala Fatra, Slovakia',
    description: 'Experience the thrill of ice climbing in Mala Fatra.',
    image: 'path_to_image33.jpg',
    images: [
      'path_to_image33.jpg',
      'https://example.com/path_to_image33_2.jpg',
      'https://example.com/path_to_image33_3.jpg'
    ]
  },
  { 
    id: 34, 
    name: 'Wine Tasting in Small Carpathians', 
    length: 'Short', 
    difficulty: 'Easy', 
    rating: 4, 
    location: 'Small Carpathians, Slovakia',
    description: 'Enjoy wine tasting in the Small Carpathians.',
    image: 'path_to_image34.jpg',
    images: [
      'path_to_image34.jpg',
      'https://example.com/path_to_image34_2.jpg',
      'https://example.com/path_to_image34_3.jpg'
    ]
  },
  { 
    id: 35, 
    name: 'Fishing in Zuberec', 
    length: 'Variable', 
    difficulty: 'Easy', 
    rating: 4, 
    location: 'Zuberec, Slovakia',
    description: 'Enjoy fishing in Zuberec.',
    image: 'path_to_image35.jpg',
    images: [
      'path_to_image35.jpg',
      'https://example.com/path_to_image35_2.jpg',
      'https://example.com/path_to_image35_3.jpg'
    ]
  },
  { 
    id: 36, 
    name: 'Cycling in Dunajska Streda', 
    length: 'Medium', 
    difficulty: 'Moderate', 
    rating: 4, 
    location: 'Dunajska Streda, Slovakia',
    description: 'Cycle through the scenic routes in Dunajska Streda.',
    image: 'path_to_image36.jpg',
    images: [
      'path_to_image36.jpg',
      'https://example.com/path_to_image36_2.jpg',
      'https://example.com/path_to_image36_3.jpg'
    ]
  },
  { 
    id: 37, 
    name: 'Paragliding in Chopok', 
    length: 'Short', 
    difficulty: 'Difficult', 
    rating: 5, 
    location: 'Chopok, Slovakia',
    description: 'Enjoy the thrill of paragliding in Chopok.',
    image: 'path_to_image37.jpg',
    images: [
      'path_to_image37.jpg',
      'https://example.com/path_to_image37_2.jpg',
      'https://example.com/path_to_image37_3.jpg'
    ]
  },
  { 
    id: 38, 
    name: 'Horseback Riding in Velky Rozsutec', 
    length: 'Medium', 
    difficulty: 'Moderate', 
    rating: 4, 
    location: 'Velky Rozsutec, Slovakia',
    description: 'Enjoy horseback riding in Velky Rozsutec.',
    image: 'path_to_image38.jpg',
    images: [
      'path_to_image38.jpg',
      'https://example.com/path_to_image38_2.jpg',
      'https://example.com/path_to_image38_3.jpg'
    ]
  },
  { 
    id: 39, 
    name: 'Mountain Climbing in Rohace', 
    length: 'Long', 
    difficulty: 'Difficult', 
    rating: 5, 
    location: 'Rohace, Slovakia',
    description: 'Experience mountain climbing in Rohace.',
    image: 'path_to_image39.jpg',
    images: [
      'path_to_image39.jpg',
      'https://example.com/path_to_image39_2.jpg',
      'https://example.com/path_to_image39_3.jpg'
    ]
  },
  { 
    id: 40, 
    name: 'Hiking in Vratna Valley', 
    length: 'Medium', 
    difficulty: 'Moderate', 
    rating: 4, 
    location: 'Vratna Valley, Slovakia',
    description: 'Enjoy hiking through the beautiful Vratna Valley.',
    image: 'path_to_image40.jpg',
    images: [
      'path_to_image40.jpg',
      'https://example.com/path_to_image40_2.jpg',
      'https://example.com/path_to_image40_3.jpg'
    ]
  }
];

export default activitiesData;
