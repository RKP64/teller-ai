export const genres = [
  {
    id: 1,
    genre: "Horror",
  },
  {
    id: 2,
    genre: "Comedy",
  },
  {
    id: 3,
    genre: "For Kids",
  },
  {
    id: 4,
    genre: "Adventure",
  },
  {
    id: 5,
    genre: "History",
  },
  {
    id: 6,
    genre: "Sci-Fi",
  },
  {
    id: 7,
    genre: "Fairytales",
  },
  {
    id: 8,
    genre: "Psychological",
  }
];

export const narratorData = [
  { name: "Allyson", model: "alloy" },
  { name: "Ethan", model: "echo" },
  { name: "Faith", model: "fable" },
  { name: "Owen", model: "onyx" },
  { name: "Natalie", model: "nova" },
  { name: "Samantha", model: "shimmer" },
]; 

export const ageRange = ["1-10","10-15", "15-20","20+"]

export const stepData = [
  {
    id: 1,
    title: "Step 1",
    paragraph:
      "Explore genres to set the tone. From mystery to fantasy, your choice molds the narrative canvas. Select and envision.",
      duration: "2000"
  },
  {
    id: 2,
    title: "Step 2",
    paragraph:
      "Consider your audience. Tailor the story for young minds or mature readers. Age range shapes the language, themes, and complexity.",
      duration: "2500"
  },
  {
    id: 3,
    title: "Step 3",
    paragraph:
      "Craft a prompt to ignite imagination. What's the story about? Even just a single sentence sparks the narrative, guiding your creative journey.",
      duration: "3000"
  },
];
export const popularData = [
  {
    id: 1,
    title: "Story First",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.pexels.com/photos/1652555/pexels-photo-1652555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Story First",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://image.tmdb.org/t/p/original/oqbcmZJJ1EWkOPiGjqABaUN18rI.jpg",
  },
  {
    id: 3,
    title: "Story First",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://image.tmdb.org/t/p/original/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg",
  },
  {
    id: 4,
    title: "Story First",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.pexels.com/photos/1652555/pexels-photo-1652555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
export const genresData = [
  {
    id: 1,
    title: "A slice of heaven",
    paragraph:
      "O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind the bicycle shed, Hercules Morse.",
    image:
      "/images/slika1.jpg",
  },
  {
    id: 2,
    title: "A slice of heaven",
    paragraph:
      "O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind the bicycle shed, Hercules Morse.",
    image:
      "/images/slika2.jpg"
  },
  {
    id: 3,
    title: "A slice of heaven",
    paragraph:
      "O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind the bicycle shed, Hercules Morse.",
    image:
      "/images/slika3.jpg",
  },
  {
    id: 4,
    title: "A slice of heaven",
    paragraph:
      "O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind the bicycle shed, Hercules Morse.",
    image:
      "/images/slika3.jpg",
  },
];
export const headerSettings = {
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};
export const popularSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  autoplaySpeed: 2500,
  cssEase: "linear",
  responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};
export const genresSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  autoplaySpeed: 5000,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};
export const headerData = [
  {
    id: 1,
    title: "Christopher Robin",
    date: "2018-08-03",
    time: "2h 7min",
    stars: [1, 2, 3, 4, 5],
    pararagraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gallery: [
      {
        id: 1,
        image: "/images/slika1.jpg",
      },
      {
        id: 2,
        image: "/images/slika2.jpg",
      },
      {
        id: 3,
        image: "/images/slika3.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Christopher Robin",
    date: "2018-08-03",
    time: "2h 7min",
    stars: [1, 2, 3, 4, 5],
    pararagraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gallery: [
      {
        id: 1,
        image: "/images/slika1.jpg",
      },
      {
        id: 2,
        image: "/images/slika2.jpg",
      },
      {
        id: 3,
        image: "/images/slika3.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Christopher Robin",
    date: "2018-08-03",
    time: "2h 7min",
    stars: [1, 2, 3, 4, 5],
    pararagraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gallery: [
      {
        id: 1,
        image: "/images/slika1.jpg",
      },
      {
        id: 2,
        image: "/images/slika2.jpg",
      },
      {
        id: 3,
        image: "/images/slika3.jpg",
      },
    ],
  },
];
export const stories = [
  {
    id: 1,
    storie: "Noteworthy technology acquisitions 2021",
    paragraph: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    imageUrl: "https://images.pexels.com/photos/1732370/pexels-photo-1732370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
{
    id: 2,
    storie: "Noteworthy technology acquisitions 2021",
    paragraph: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    imageUrl: "https://images.pexels.com/photos/1732370/pexels-photo-1732370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    storie: "Noteworthy technology acquisitions 2021",
    paragraph: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    imageUrl: "https://images.pexels.com/photos/1732370/pexels-photo-1732370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    storie: "Noteworthy technology acquisitions 2021",
    paragraph: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    imageUrl: "https://images.pexels.com/photos/1732370/pexels-photo-1732370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:6,
    storie: "Noteworthy technology acquisitions 2021",
    paragraph: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    imageUrl: "https://images.pexels.com/photos/1732370/pexels-photo-1732370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 7,
    storie: "Noteworthy technology acquisitions 2021",
    paragraph: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    imageUrl: "https://images.pexels.com/photos/1732370/pexels-photo-1732370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 8,
    storie: "Noteworthy technology acquisitions 2021",
    paragraph: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    imageUrl: "https://images.pexels.com/photos/1732370/pexels-photo-1732370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 9,
    storie: "Noteworthy technology acquisitions 2021",
    paragraph: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    imageUrl: "https://images.pexels.com/photos/1732370/pexels-photo-1732370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 10,
    storie: "Noteworthy technology acquisitions 2021",
    paragraph: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    imageUrl: "https://images.pexels.com/photos/1732370/pexels-photo-1732370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
]

export const storyData = [
  {
    id :1,
    title: "Little Heroes",
    paragraph :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,suscipit voluptatibus. Porro, debitis! Eligendi, vitae voluptates  fuga et explicabo quas quidem tenetur, assumenda commodi esse quam vero, ratione optio blanditiis illum aut. Eligendi quibusdam, quisquam quas optio totam necessitatibus voluptatibus, eveniet magnam quasi maxime reprehenderit. Odio soluta, harum in quaerat deserunt ducimus earum impedit, minus perferendis dolor pariatur voluptas neque excepturi dolorem, suscipit dignissimos quo quae tempore? Repellat aspernatur suscipit illum, natus facilis culpa asperiores consectetur sint a vel alias, voluptates impedit. Labore laborum aut, suscipit culpa expedita porro voluptate earum ab quibusdam velit non optio modi praesentium quae dignissimos."
  }
]