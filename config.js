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
      name: 'MyMathLab',
      icon: 'trello',
      link: 'https://www.mathxl.com/Student/DoAssignments.aspx?error_url=https%3a%2f%2fgallaudet.blackboard.com%2fultra%2fcourses%2f_171792_1%2foutline&isgradable=false&highlanderid=58050&person_batch_uid=0312361&legacy_context_id=520ccda9f92c554b1ae579a0e197a7caa9aa7e7066e1898661c6d73229e68599&source_tool_consumer_guid=9ae04c6a-6f0e-4496-9dee-98c5c2ce061a&tool_consumer_vendor=Blackboard&context_batch_uid=Fall2021-GSR104-04&tool_consumer_plugin_version=3900.21.0-rel.28+dd6c7ec&tool_consumer_application=Learn&placement=tools&isinstructoronly=false&user_uuid=b1886583e3f245a8b91491c1ce692c8e&context_uuid=1c716a25fce548d2a69457033c2ecd31&view=all&tool_consumer_time_zone=-0400&source_tool_consumer_id=3eded2e0911b794fa862210143a51601&person_username=donovan.holmes&legacy_user_id=88f12079d24acefa1bc3a513929fd629&tool_consumer_instance_installation_type=Production',
    },
    {
      id: '4',
      name: 'bison',
      icon: 'calendar',
      link: 'https://www.gallaudet.edu/gallaudet-technology-services/services/bison',
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
        name: 'MAT 130',
        link: 'https://gallaudet.blackboard.com/ultra/courses/_173670_1/outline',
      },
      {
        name: 'VEE 102',
        link: 'https://gallaudet.blackboard.com/ultra/courses/_173887_1/outline',
      },
      {
        name: 'ITS 105',
        link: 'https://gallaudet.blackboard.com/ultra/courses/_173621_1/outline',
      },
      {
        name: 'GSR 103',
        link: 'https://gallaudet.blackboard.com/ultra/courses/_171792_1/outline',
      },
    ],
    secondList: [
      {
        name: 'twitter',
        link: 'https://twitter.com/home',
      },
      {
        name: 'goodreads',
        link: 'https://www.goodreads.com/',
      },
      {
        name: 'wordle',
        link: 'https://www.nytimes.com/games/wordle/index.html',
      },
      {
        name: 'jomezpro',
        link: 'https://www.youtube.com/channel/UCmGyCEbHfY91NFwHgioNLMQ',
      },
    ],
  },
};
