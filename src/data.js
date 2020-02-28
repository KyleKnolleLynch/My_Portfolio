import img1 from './assets/images/projects/resort-rentals.png';
import img2 from './assets/images/projects/online-cart-fix.png';
import img3 from './assets/images/projects/inertia.jpg';
import img4 from './assets/images/projects/glitchLog.png';
import img5 from './assets/images/projects/birders-journal.png';
import img6 from './assets/images/projects/tours.jpg';

import img3Vert from './assets/images/inertia-vert-sm.png';
import img4Vert from './assets/images/projects/glitchLog-light.png';
import img6Vert from './assets/images/projects/tours-vert.jpg';

export const projectsData = [
  {
    id: 1,
    title: 'Resort Rentals',
    subtitle: 'React',
    img: img1,
    link: 'https://inertiapage.netlify.com/index.html',
    gitLink: 'https://github.com/KyleKnolleLynch/Inertia',
    desc:
      "Welcome page built with vanilla Javascript. Local storage is used to let user save their name, daily focus, settings, and todo list as well. Background photos from Unsplash API are dynamically displayed to match user's time of day and refresh on page reload. Openweathermap API is utilized to display user's local weather. Random quotes are displayed upon page reload, brought in by the FavQ API. Impliments service worker and default local photos to allow offline use or in case of temporary Unsplash API server disruption. Icons by Font Awesome, weather icons by owfont/Deniz Fuchidzhiev."
  },
  {
    id: 2,
    title: 'Online Cart',
    subtitle: 'React',
    img: img2,
    link: 'https://inertiapage.netlify.com/index.html'
  },
  {
    id: 3,
    title: 'Inertia',
    subtitle: 'Javascript',
    img: img3,
    imgVert: img3Vert,
    link: 'https://inertiapage.netlify.com/index.html',
    gitLink: 'https://github.com/KyleKnolleLynch/Inertia',
    desc:
      "Welcome page built with vanilla Javascript. Local storage is used to let user save their name, daily focus, settings, and todo list as well. Background photos from Unsplash API are dynamically displayed to match user's time of day and refresh on page reload. Openweathermap API is utilized to display user's local weather. Random quotes are displayed upon page reload, brought in by the FavQ API. Impliments service worker and default local photos to allow offline use or in case of temporary Unsplash API server disruption. Icons by Font Awesome, weather icons by owfont/Deniz Fuchidzhiev."
  },
  {
    id: 4,
    title: 'Game Glitch Log',
    subtitle: 'React',
    img: img4,
    imgVert: img4Vert,
    link: 'https://kyleknollelynch.github.io/game-glitch-log',
    gitLink: 'https://github.com/KyleKnolleLynch/game-glitch-log',
    desc: 'Game method/glitch log using context API, hooks, and local storage. Toggleable light/dark theme.'
  },
  {
    id: 5,
    title: "Birder's Journal",
    subtitle: 'Javascript',
    img: img5,
    link: 'https://birders-journal.web.app',
    gitLink: 'https://github.com/KyleKnolleLynch/birders-journal',
    desc:
      'Progressive web app built with vanilla Javascript using Firebase/Firestore for the database. This app adds, stores, and deletes data entered by user about birding activites. Admin functionality used to add or delete other admins or users/data. Materialize and Material Icons used for styling.'
  },
  {
    id: 6,
    title: 'Central Texas Tours',
    subtitle: 'React',
    img: img6,
    imgVert: img6Vert,
    link: 'https://central-texas-tours.netlify.com',
    gitLink: 'https://github.com/KyleKnolleLynch/Central-Texas-Tours',
    desc: ''
  }
];
