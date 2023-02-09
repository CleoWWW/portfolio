import './scss/main.scss'
//import './scss/marquee.scss'
//import './menu.js'


const datas = [
  {
    id: 1,
    //menu
    title: "VR/01",
    image: "dist/1-1s.png",
    menuTitle: "titleOne",
    //content
    svg: "dist/svg1.svg",
    category: "VR",
    contentImg: "dist/1-1.jpg",
    contentTitle: "標題<span>/VR01</span>",
    contentDesc: "use tool: PS<br>AI",
    contentTime: "2014",
    style: "1",

    //modal
    modalCategory: "UI",
    modalImgs: [
      "dist/1-1x.jpg",
      "https://source.unsplash.com/1000x800/?people",
      "https://source.unsplash.com/1000x800/?nature",
      "https://source.unsplash.com/1000x800/?kid"
    ],
    modalTitles: ["VR/m1", "VR/m2", "VR/m3", "VR/m4"],
    modalDesc: ["VR/desc1", "VR/desc2", "desc2", "desc4"],
    modalMovie:
      "https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4",
    movieTitle: "movietitle",
    movieDesc: "movie",
    hasMovie: "true"
  },
  {
    id: 2,
    title: "VR/02",
    image: "https://imgpile.com/images/5CsSF2.png",
    menuTitle: "titleOne",
    //content
    svg: `<path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z" />`,
    category: "VR",
    contentImg: "https://source.unsplash.com/1000x800/?food",
    contentTitle: "VR/02",
    contentDesc: "poabciiii",
    contentTime: "2014",
    style: "2",

    //modal
    modalCategory: "UI",
    modalImgs: [
      "https://source.unsplash.com/1000x800/?food",
      "https://source.unsplash.com/1000x800/?people",
      "https://source.unsplash.com/1000x800/?nature",
      "https://source.unsplash.com/1000x800/?kid"
    ],
    modalTitles: ["VR/m1", "VR/m2", "VR/m3", "VR/m4"],
    modalDesc: ["VR/desc1", "VR/desc2", "desc2", "desc4"],
    modalMovie:
      "https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4",
    movieTitle: "movietitle",
    movieDesc: "movie",
    hasMovie: "false"
  },
  {
    id: 3,
    title: "VR/03",
    image: "https://imgpile.com/images/5CsSF2.png",
    menuTitle: "titleTwo",
    //content
    svg: `<path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z" />`,
    category: "VR",
    contentImg: "https://source.unsplash.com/1000x800/?food",
    contentTitle: "VR/PoXin",
    contentDesc: "poabciiii",
    contentTime: "2014",
    style: 3,

    //modal
    modalCategory: "UI",
    modalImgs: [
      "https://source.unsplash.com/1000x800/?food",
      "https://source.unsplash.com/1000x800/?people",
      "https://source.unsplash.com/1000x800/?nature",
      "https://source.unsplash.com/1000x800/?kid"
    ],
    modalTitles: ["VR/m1", "VR/m2", "VR/m3", "VR/m4"],
    modalDesc: ["VR/desc1", "VR/desc2", "desc2", "desc4"],
    modalMovie:
      "https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4",
    movieTitle: "movietitle",
    movieDesc: "movie",
    hasMovie: "false"
  },
  {
    id: 4,
    title: "UI/01",
    image: "https://imgpile.com/images/5CsSF2.png",
    menuTitle: "titleTwo",

    //content
    svg: `<path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z" />`,
    category: "UI",
    contentImg: "https://source.unsplash.com/1000x800/?food",
    contentTitle: "VR/PoXin",
    contentDesc: "poabciiii",
    contentTime: "2014",
    style: 4,

    //modal
    modalCategory: "UI",
    modalImgs: [
      "https://source.unsplash.com/1000x800/?food",
      "https://source.unsplash.com/1000x800/?people",
      "https://source.unsplash.com/1000x800/?nature",
      "https://source.unsplash.com/1000x800/?kid"
    ],
    modalTitles: ["VR/m1", "VR/m2", "VR/m3", "VR/m4"],
    modalDesc: ["VR/desc1", "VR/desc2", "desc2", "desc4"],
    modalMovie:
      "https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4",
    movieTitle: "movietitle",
    movieDesc: "movie",
    hasMovie: "false"
  },
  {
    id: 5,
    title: "VR/PoXin05",
    image: "https://source.unsplash.com/300x300/?people",
    menuTitle: "titleTwo",

    //content
    svg: `<path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z" />`,
    category: "UI",
    contentImg: "https://source.unsplash.com/1000x800/?people",
    contentTitle: "VR/PoXin",
    contentDesc: "poabciiii",
    contentTime: "2014",
    style: 1,

    //modal
    modalCategory: "UI",
    modalImgs: [
      "https://source.unsplash.com/1000x800/?food",
      "https://source.unsplash.com/1000x800/?people",
      "https://source.unsplash.com/1000x800/?nature",
      "https://source.unsplash.com/1000x800/?kid"
    ],
    modalTitles: ["VR/m1", "VR/m2", "VR/m3", "VR/m4"],
    modalDesc: ["VR/desc1", "VR/desc2", "desc2", "desc4"],
    modalMovie:
      "https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4",
    movieTitle: "movietitle",
    movieDesc: "movie",
    hasMovie: "false"
  },
  {
    id: 6,
    title: "VR/06",
    image: "https://source.unsplash.com/300x300/?people",
    menuTitle: "titleThree",

    //content
    svg: `<path d="M1160 316.389C1160 183.291 1005.52 73.4069 805.632 56.9163C741.732 21.4691 658.178 0.00020027 566.743 0.000192276C476.424 0.000184381 393.795 20.9482 330.203 55.6244C167.628 65.7283 39.9999 165.087 39.9999 286.167C39.9999 413.96 182.171 517.556 357.548 517.556C396.581 517.556 433.969 512.424 468.51 503.036C541.874 549.402 642.451 578 753.41 578C977.963 578 1160 460.873 1160 316.389Z" fill="#3C3C3C"/>`,
    category: "UI ss dd sss",
    contentImg: "https://source.unsplash.com/1000x800/?people",
    contentTitle: "VR/PoXin",
    contentDesc: "poabciiii",
    contentTime: "2014",
    style: 1,

    //modal
    modalCategory: "UI",
    modalImgs: [
      "https://source.unsplash.com/1000x800/?food",
      "https://source.unsplash.com/1000x800/?people",
      "https://source.unsplash.com/1000x800/?nature",
      "https://source.unsplash.com/1000x800/?kid"
    ],
    modalTitles: ["VR/m1", "VR/m2", "VR/m3", "VR/m4"],
    modalDesc: ["VR/desc1", "VR/desc2", "desc2", "desc4"],
    modalMovie:
      "https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4",
    movieTitle: "movietitle",
    movieDesc: "movie",
    hasMovie: "false"
  },
  {
    id: 7,
    title: "VR/07",
    image: "https://source.unsplash.com/300x300/?people",
    menuTitle: "titleFour",

    //content
    svg: `<path d="M40 261.611C40 394.71 194.479 504.594 394.368 521.084C458.268 556.531 541.822 578 633.257 578C723.576 578 806.205 557.052 869.797 522.376C1032.37 512.272 1160 412.913 1160 291.833C1160 164.041 1017.83 60.4443 842.452 60.4443C803.419 60.4443 766.031 65.576 731.49 74.964C658.126 28.5982 557.549 0 446.59 0C222.037 0 40 117.127 40 261.611Z" fill="#3C3C3C"/>`,
    category: "motion",
    contentImg: "https://source.unsplash.com/1000x800/?people",
    contentTitle: "VR/PoXin",
    contentDesc: "poabciiii",
    contentTime: "2014",
    style: 2,

    //modal
    modalCategory: "motion",
    modalImgs: [
      "https://source.unsplash.com/1000x800/?food",
      "https://source.unsplash.com/1000x800/?people",
      "https://source.unsplash.com/1000x800/?nature",
      "https://source.unsplash.com/1000x800/?kid"
    ],
    modalTitles: ["VR/m1", "VR/m2", "VR/m3", "VR/m4"],
    modalDesc: ["VR/desc1", "VR/desc2", "desc2", "desc4"],
    modalMovie:
      "https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4",
    movieTitle: "movietitle",
    movieDesc: "movie",
    hasMovie: "false"
  }
];

const dataPanel = document.querySelector("#data-panel");
const dropdownBtn = document.getElementById("hamburger");
const dropdownMenu = document.getElementById("menu-list");

// Toggle dropdown function
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
  renderMenuList();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});

const menuMarquee = document.querySelector(".menu");
const contentNode = document.querySelector(".content__wrap");

function renderMenuList(data) {
  let rawHTML = "";
  let rawHTMLaa = `
    <div class="menu__item">
      <a href="#1" class="menu__item-link">titleO</a>
        <div class="marquee">
          <div class="marquee__inner-wrap">
            <div class="marquee__inner">`;
  datas.forEach((data) => {
    if (data.menuTitle === "titleOne") {
      rawHTMLaa += `
        <span>${data.title}</span>
        <img class="marquee__img" src="${data.image}" alt="">`;
    }
  });
  rawHTMLaa += `</div></div></div></div>`;

  let rawHTMLbb = `
    <div class="menu__item">
      <a href="#1" class="menu__item-link">title10</a>
        <div class="marquee">
          <div class="marquee__inner-wrap">
            <div class="marquee__inner">`;
  datas.forEach((data) => {
    if (data.menuTitle === "titleTwo") {
      rawHTMLbb += `
        <span>${data.title}</span>
        <img class="marquee__img" src="${data.image}" alt="">`;
    }
  });
  rawHTMLbb += `</div></div></div></div>`;

  let rawHTMLcc = `
    <div class="menu__item">
      <a href="#1" class="menu__item-link">title100</a>
        <div class="marquee">
          <div class="marquee__inner-wrap">
            <div class="marquee__inner">`;
  datas.forEach((data) => {
    if (data.menuTitle === "titleThree") {
      rawHTMLcc += `
        <span>${data.title}</span>
        <img class="marquee__img" src="${data.image}" alt="">`;
    }
  });
  rawHTMLcc += `</div></div></div></div>`;

  let rawHTMLdd = `
    <div class="menu__item">
      <a href="#1" class="menu__item-link">title299</a>
        <div class="marquee">
          <div class="marquee__inner-wrap">
            <div class="marquee__inner">`;
  datas.forEach((data) => {
    if (data.menuTitle === "titleFour") {
      rawHTMLdd += `
        <span>${data.title}</span>
        <img class="marquee__img" src="${data.image}" alt="">`;
    }
  });
  rawHTMLdd += `</div></div></div></div>`;
  menuMarquee.innerHTML = rawHTMLaa + rawHTMLbb + rawHTMLcc + rawHTMLdd;
}

function renderContentList(data) {
  let rawHTML = "";
  datas.forEach((item) => {
    rawHTML += `
      <section class="block" id="${item.id}">
        <div class="shape__wrap item-parallax-media">
   
          <object class="shape--svg" data="${item.svg}"> </object>
        </div>
        <h2 class="content__main__category ">${item.category}</h2>
        <div class="content content--layout content--layout-${item.style} item-parallax-content">
          <img class="content__img" src="${item.contentImg}" alt="" />
          <h3 class="content__title">${item.contentTitle}</h3>
          <p class="content__desc">${item.contentDesc}</p>
          <span class="content__time">${item.contentTime}</span>
          <button id="${item.id}" role="button" class="content__link" onclick="">See More</button>
 
        </div>
      </section>`;
  });
  rawHTML += ``;
  contentNode.innerHTML = rawHTML;
}

renderContentList();

// parallax
const body = document.body;
const content = document.querySelector(".js-content");
const blocks = document.querySelectorAll(".block");

const updateOffset = () => {
  requestAnimationFrame(updateOffset);
  content.style.setProperty("--y", content.scrollTop);
  updateProps();
};

const updateProps = () => {
  let i = -1;
  for (let block of blocks) {
    i += 1;
    let top = blocks[i].getBoundingClientRect().top;
    if (top < window.innerHeight * 1.1 && top > window.innerHeight * -1.1) {
      content.style.setProperty(`--yBlock-${i + 1}`, top);
    } else {
      content.style.setProperty(`--yBlock-${i + 1}`, 0);
    }
  }
};

updateProps();
updateOffset();

/////////////modal

const modalNode = document.querySelector("#modal-window");
const closeBtn = document.querySelector(".btn-close");

function showModal(id) {
  const item = datas[id - 1];
  const num = item.modalImgs.length;
  const modalCategoryTitle = document.querySelector("#category-title");
  const modalRenderNode = document.querySelector("#modal-panel");
  const modalBtn = document.querySelector("#button-close");

  modalCategoryTitle.innerText = item.modalCategory;
  modalBtn.innerHTML = `<a href="#${item.id}" class="btn-close" >← Back</a>`;

  let rawHTML = "";

  if (item.hasMovie === "true") {
    rawHTML += `
    <div class="blog-header" >
      <div class="blog-article header-article">
        <div class="blog-big__title">${item.contentTitle}</div>
        <div class="blog-menu small-title date">${item.contentTime}</div>
      </div>
      <div class="blog-article">
      <video autoplay="" loop="" controls="" width="100%" height="auto">
        <source type="video/mp4" src="${item.modalMovie}">
      </video>
      <h2>${item.movieTitle}</h2>
          <p>${item.movieTitle}</p>`;
    for (i = 0; i < num; i++) {
      rawHTML += `
          <img src="${item.modalImgs[i]}" alt="">
          <h2>${item.modalTitles[i]}</h2>
          <p>${item.modalDesc[i]}</p>`;
    }
  } else if (item.hasMovie === "false") {
    rawHTML += `
      <div class="blog-header" >
        <div class="blog-article header-article">
          <div class="blog-big__title">${item.contentTitle}</div>
          <div class="blog-menu small-title date">${item.contentTime}</div>
        </div>
        <div class="blog-article">`;
    for (let i = 0; i < num; i++) {
      rawHTML += `
          <img src="${item.modalImgs[i]}" alt="">
          <h2>${item.modalTitles[i]}</h2>
          <p>${item.modalDesc[i]}</p>`;
    }
  }
  rawHTML += `</div></div>`;

  modalRenderNode.innerHTML = rawHTML;
}

function closeM() {
  //let m = document.querySelector("#modal-window");
  //modalNode.classList.remove("showModal");
  modalNode.classList.toggle("showModal");
}

closeBtn.addEventListener("click", function (event) {
  if (event.target.matches("btn-close")) {
    closeM();
  }
});

// dataPanel.addEventListener("click", function onPanelClicked(event) {
//   if (event.target.matches(".content__link")) {
//     modalNode.classList.toggle("showModal");
//     showModal(event.target.id);
//     console.log(event.target.id);
//   }
// });

dataPanel.addEventListener("click", function onPanelClicked(event) {
  if (event.target.matches(".content__link")) {
    modalNode.classList.toggle("showModal");
    showModal(event.target.id);
  } else if (event.target.matches(".btn-close")) {
    //e.stopPropogation()
    modalNode.classList.toggle("showModal");
  }
});





console.log('JS loaded!')