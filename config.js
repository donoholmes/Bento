// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'dv',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'good morning,',
  greetingAfternoon: 'good afternoon,',
  greetingEvening: 'good evening,',
  greetingNight: 'you should probably sleep, ',

  // Weather
  weatherKey: 'bb465cd65e2da7d1988c72578b8ee403',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  weatherLatitude: '38.905460',
  weatherLongitude: '-76.996510',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Blackboard',
      icon: 'book-open',
      link: 'https://gallaudet.blackboard.com/',
    },
    {
      id: '2',
      name: 'GMail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'Todoist',
      icon: 'trello',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'classes',
  secondListIcon: 'freetime',

  // Links
  lists: {
    firstList: [
      {
        name: 'vee 101',
        link: 'https://gallaudet.blackboard.com/ultra/courses/_172351_1/outline',
      },
      {
        name: 'gsr 102 eng',
        link: 'https://gallaudet.blackboard.com/ultra/courses/_171771_1/outline',
      },
      {
        name: 'gsr 103 asl',
        link: 'https://gallaudet.blackboard.com/ultra/courses/_171773_1/outline',
      },
      {
        name: 'gsr 104 math',
        link: 'https://gallaudet.blackboard.com/ultra/courses/_171792_1/outline',
      },
    ],
    secondList: [
      {
        name: 'gsr102home',
        link: 'https://docs.google.com/document/d/1hBo7HiQXCInZcE2EC5r8o2XHknGrOG6nRHCezTNwfXQ/edit',
      },
      {
        name: 'anime',
        link: 'https://animixplay.to/',
      },
      {
        name: 'mal',
        link: 'https://myanimelist.net/',
      },
      {
        name: 'jomezpro',
        link: 'https://www.youtube.com/channel/UCmGyCEbHfY91NFwHgioNLMQ',
      },
    ],
  },
};
