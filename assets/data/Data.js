import image1 from "../images/box-office-1.jpg";
import image2 from "../images/box-office-2.jpg";
import image3 from "../images/box-office-3.jpg";
import image4 from "../images/box-office-4.jpg";
import image5 from "../images/box-office-5.jpg";

import imgNewMovie1 from "../images/new-movie-1.jpg";
import imgNewMovie2 from "../images/new-movie-2.jpg";
import imgNewMovie3 from "../images/new-movie-3.jpg";
import imgNewMovie4 from "../images/new-movie-4.jpg";
import imgNewMovie5 from "../images/new-movie-5.jpg";
import imgNewMovie6 from "../images/new-movie-6.jpg";
import imgNewMovie7 from "../images/new-movie-7.jpg";
import imgNewMovie8 from "../images/new-movie-8.jpg";
import imgNewMovie9 from "../images/new-movie-9.jpg";
import imgNewMovie10 from "../images/new-movie-10.jpg";

import imgFantasy1 from "../images/fantasy-1.jpg";
import imgFantasy2 from "../images/fantasy-2.jpg";
import imgFantasy3 from "../images/fantasy-3.jpg";
import imgFantasy4 from "../images/fantasy-4.jpg";

import imgHorror1 from "../images/horror-1.jpg";
import imgHorror2 from "../images/horror-2.jpg";
import imgHorror3 from "../images/horror-3.jpg";
import imgHorror4 from "../images/horror-4.jpg";

function generateUUID() {
  return Math.random().toString(36).substr(2, 9);
}

const BoxOffice = [
  {
    id: generateUUID(),
    title: "Spiderman : No Way Home",
    image: image1,
    genres: "Action",
  },
  {
    id: generateUUID(),
    title: "John Wick 3 : Parabellum",
    image: image2,
    genres: "Action, Thriller",
  },
  {
    id: generateUUID(),
    title: "Drive My Car",
    image: image3,
    genres: "Romance",
  },
  {
    id: generateUUID(),
    title: "Avengers Infinity War",
    image: image4,
    genres: "Action, Superhiro, Fantasy, Science Fiction, Adventure",
  },
  {
    id: generateUUID(),
    title: "Dungeons & Dragons: Honour Among Thieves (2023)",
    image: image5,
    genres: "Action, Fantasy, Adventure",
  },
];

const NewMovies = [
  {
    id: generateUUID(),
    image: imgNewMovie1,
  },
  {
    id: generateUUID(),
    image: imgNewMovie2,
  },
  {
    id: generateUUID(),
    image: imgNewMovie3,
  },
  {
    id: generateUUID(),
    image: imgNewMovie4,
  },
  {
    id: generateUUID(),
    image: imgNewMovie5,
  },
  {
    id: generateUUID(),
    image: imgNewMovie6,
  },
  {
    id: generateUUID(),
    image: imgNewMovie7,
  },
  {
    id: generateUUID(),
    image: imgNewMovie8,
  },
  {
    id: generateUUID(),
    image: imgNewMovie9,
  },
  {
    id: generateUUID(),
    image: imgNewMovie10,
  },
];

const Fantasy = [
  {
    id: generateUUID(),
    image: imgFantasy1,
  },
  {
    id: generateUUID(),
    image: imgFantasy2,
  },
  {
    id: generateUUID(),
    image: imgFantasy3,
  },
  {
    id: generateUUID(),
    image: imgFantasy4,
  },
];

const Horror = [
  {
    id: generateUUID(),
    image: imgHorror1,
  },
  {
    id: generateUUID(),
    image: imgHorror2,
  },
  {
    id: generateUUID(),
    image: imgHorror3,
  },
  {
    id: generateUUID(),
    image: imgHorror4,
  },
];

const Genres = [
  {
    id: generateUUID(),
    name: "All Movies",
  },
  {
    id: generateUUID(),
    name: "Action",
  },
  {
    id: generateUUID(),
    name: "Adventure",
  },
  {
    id: generateUUID(),
    name: "Comedy",
  },
  {
    id: generateUUID(),
    name: "Drama",
  },
  {
    id: generateUUID(),
    name: "Fantasy",
  },
  {
    id: generateUUID(),
    name: "Horror",
  },
  {
    id: generateUUID(),
    name: "Mystery",
  },
  {
    id: generateUUID(),
    name: "Romance",
  },
  {
    id: generateUUID(),
    name: "Sci-Fi",
  },
];

export { BoxOffice, NewMovies, Fantasy, Horror, Genres };
