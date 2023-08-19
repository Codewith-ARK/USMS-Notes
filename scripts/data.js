const files = [
  {
    name: "Applied Physics (notes).pdf",
    dateModified: "7/5/2022 7:44 PM",
    img: "https://www.shutterstock.com/shutterstock/photos/472622533/display_1500/stock-vector-creative-hand-drawn-vector-physics-background-with-doodle-icons-arranged-in-a-circle-vector-472622533.jpg",
    link: "https://drive.google.com/file/d/1RGpk6BjggzJi_hFs2ccmIKMIDEePoFJQ/view?usp=sharing",
  },
  {
    name: "Basic Electronics - Finals (Notes).pdf",
    dateModified: "9/26/2022 10:51 AM",
    img: "https://img.freepik.com/free-photo/closeup-electronic-circuit-board-with-cpu-microchip-electronic-components-background_1387-819.jpg",
    link: "https://drive.google.com/file/d/1NvaIxRTxVVxsp4vjFgXE-A-UUXUws6-j/view?usp=sharing",
  },
  {
    name: "Basic Electronics (Notes).pdf",
    dateModified: "7/3/2022 1:27 PM",
    img: "https://img.freepik.com/free-photo/closeup-electronic-circuit-board-with-cpu-microchip-electronic-components-background_1387-819.jpg",
    link: "https://drive.google.com/file/d/1w_N_WRtSV-wKfDnE8V18AR5aWbaULFb_/view?usp=sharing",
  },
  {
    name: "Calculus & Analytical Geometry (Notes).pdf",
    dateModified: "3/4/2022 9:47 PM",
    img: "https://www.thoughtco.com/thmb/CxIHfXlNGJudzL69XMa5rxQePA4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/large-group-of-various-multi-colored-geometric-shapes-530022001-5a9ec575119fa80037446909.jpg",
    link: "https://drive.google.com/file/d/1KR5YkGb8guMfyiPY0qtwbMS8IYNBhTcl/view?usp=sharing",
  },
  {
    name: "DLD (Notes).pdf",
    dateModified: "11/2/2022 9:20 PM",
    img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/164402056/original/2a2d96ffa025b2d7675b7c952beedd302c5683f0/help-you-with-digital-logic-design.png",
    link: "https://drive.google.com/file/d/165iFdScqTVn4R5Gp4Vne_w85OV4IREmz/view?usp=sharing",
  },
  {
    name: "English (1st sem) Notes.pdf",
    dateModified: "5/29/2022 1:17 PM",
    img: "https://www.shutterstock.com/shutterstock/photos/1191427996/display_1500/stock-vector-english-open-book-with-language-hand-drawn-doodles-and-lettering-on-white-background-education-1191427996.jpg",
    link: "https://drive.google.com/file/d/1L2_Pco1OAVfJaQf1FcZ3nHXN5QH722hf/view?usp=sharing",
  },
  {
    name: "English Communication (notes).pdf",
    dateModified: "9/26/2022 10:53 AM",
    img: "https://www.shutterstock.com/shutterstock/photos/1191427996/display_1500/stock-vector-english-open-book-with-language-hand-drawn-doodles-and-lettering-on-white-background-education-1191427996.jpg",
    link: "https://drive.google.com/file/d/12tnn4ejnKV-LmEaY0J08-ZNw7rP0L015/view?usp=sharing",

  },
  {
    name: "English Composition & Comprehensive (Notes).pdf",
    dateModified: "3/3/2022 9:53 PM",
    img: "https://www.shutterstock.com/shutterstock/photos/1191427996/display_1500/stock-vector-english-open-book-with-language-hand-drawn-doodles-and-lettering-on-white-background-education-1191427996.jpg",
    link: "https://drive.google.com/file/d/1mkkETNXfZL6wD_3rugL5gJVlbFNBggrn/view?usp=sharing",
  },
  {
    name: "ICT-Finals (Notes).pdf",
    dateModified: "5/17/2022 7:32 PM",
    img: "https://cdn.vectorstock.com/i/preview-1x/20/94/abstract-futuristic-modern-concept-ict-vector-44882094.jpg",
    link: "https://drive.google.com/file/d/16tYMukfdxypnRWmSZXloJladGrngG2jJ/view?usp=sharing",
  },
  {
    name: "ICT (Notes) .pdf",
    dateModified: "3/10/2022 5:41 PM",
    img: "https://cdn.vectorstock.com/i/preview-1x/20/94/abstract-futuristic-modern-concept-ict-vector-44882094.jpg",
    link: "https://drive.google.com/file/d/1CqZ_H3MZkneg8ZhzzxFjX3gX4p09qBRU/view?usp=sharing",
  },
  {
    name: "Islamiat (Notes).pdf",
    dateModified: "3/4/2022 3:27 PM",
    img: "https://play-lh.googleusercontent.com/eIlL9f1BJdjGLDQeMQWKidl8Y7YEWiwG9r_j0YaRQf-8U_W8R4CMlXzwEejftdJE8L4",
    link: "https://drive.google.com/file/d/1hirv6MjgSm-fiK_3Gg130uYGoS_LB7ZM/view?usp=sharing",
  },
  {
    name: "Islamiat Mid-Term - English (Notes).pdf",
    dateModified: "3/12/2022 7:20 PM",
    img: "https://play-lh.googleusercontent.com/eIlL9f1BJdjGLDQeMQWKidl8Y7YEWiwG9r_j0YaRQf-8U_W8R4CMlXzwEejftdJE8L4",
    link: "https://drive.google.com/file/d/1uoLhTgUvsV8U02ySsIasXN2EBYlFc1UE/view?usp=sharing",
  },
  {
    name: "Islamiat Mid-Term - Urdu (Notes).pdf",
    dateModified: "3/12/2022 7:47 PM",
    img: "https://play-lh.googleusercontent.com/eIlL9f1BJdjGLDQeMQWKidl8Y7YEWiwG9r_j0YaRQf-8U_W8R4CMlXzwEejftdJE8L4",
    link: "https://drive.google.com/file/d/1PKbMWN131iwPnYclx4M0dODdTB1f018x/view?usp=sharing",
  },
  {
    name: "Notes for PSt. (Mid-Term).pdf",
    dateModified: "3/7/2022 8:33 PM",
    img: "https://www.arqumhouse.edu.pk/wp-content/uploads/2018/11/Pak.png",
    link: "https://drive.google.com/file/d/12R90idMjtVOgMhr-oz9TwdPInkp-z9nb/view?usp=sharing",
  },
  {
    name: "OOP Final Notes (Notes).pdf",
    dateModified: "9/17/2022 10:09 AM",
    img: "https://static.javatpoint.com/core/images/what-is-object-oriented-programming.png",
    link: "https://drive.google.com/file/d/1whCnEpdDehIdktAdNHmFK9VhvlF4941v/view?usp=sharing",
  },
  {
    name: "Programming Fundamentals - Finals (Notes).pdf",
    dateModified: "5/17/2022 7:31 PM",
    img: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    link: "https://drive.google.com/file/d/10NLtQst5Ekb8_X0YoVF7IriEycrjE5na/view?usp=sharing"
  }
];