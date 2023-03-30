import './scss/main.scss'
//import './scss/marquee.scss'
//import './menu.js'


const datas = [
  {
    id: 1,
    //menu
    title: "App redesign",
    image: "dist/0-1sx5.jpg",
    menuTitle: "titleOne",
    //content
    svg: "dist/svg1.svg",
    category: "App redesign",
    contentImg: "dist/0-1s.jpg",
    contentTitle: "ReDesig",
    contentDesc: "App ReDesig<br>使用軟體：Figma<br>負責項目：UI設計",
    contentTime: "2023",
    style: "1",

    //modal
    modalCategory: "UI",
    modalImgs: [
      "dist/0-1.jpg",
      "dist/0-2.jpg",
      "dist/0-3.jpg"
    ],
    modalTitles: ["UI/app redesign", "UI/app redesign", "UI/app redesign"],
    modalDesc: ["電商app redesign", "電商app redesign", "電商app redesign"],
    modalMovie:"dist/fin0.mp4",
    movieTitle: "prototype",
    movieDesc: "movie",
    hasMovie: "true"
  },
  {
    id: 2,
    title: "VR / UI",
    image: "dist/1-1sx5.jpg",
    menuTitle: "titleTwo",
    //content
    svg: "dist/svg2.svg",
    category: "VR / UI",
    contentImg: "dist/1-1s.jpg",
    contentTitle: "<span>VR<span> 日出印象",
    contentDesc: "VR 看房導覽<br>使用軟體：Figma,unreal,3Dvista<br>負責項目:unreal介面,UI設計,3Dvista功能開發,UI設計",
    contentTime: "2021",
    style: "2",

    //modal
    modalCategory: "VR",
    modalImgs: [
      "dist/1-1.jpg",
      "dist/1-2.jpg",
      "dist/1-3.jpg"
    ],
    modalTitles: ["康寶日出印象 VR看房導覽", "康寶日出印象 VR看房導覽", "康寶日出印象 VR360看房導覽"],
    modalDesc: [
      "此產品可以在4k大型螢幕上觀看操作,也能在手機上操作,電腦版本使用unreal開發,手機版本使用3Dvista開發", 
      "此產品可以在4k大型螢幕上觀看操作,也能在手機上操作,電腦版本使用unreal開發,手機版本使用3Dvista開發", 
      "手機版本使用3Dvista開發,可以手機線上專人聯絡引導看房"],
    modalMovie:"dist/fin4.mp4",
    movieTitle: "康寶日出印象 VR看房導覽",
    movieDesc: "看房導覽主要在4K螢幕，有另外開發手機版本",
    hasMovie: "true"
  },
  {
    id: 3,
    title: "VR / UI",
    image: "dist/2-1sx5.jpg",
    menuTitle: "titleTwo",
    //content
    svg: "dist/svg3.svg",
    category: "VR / UI",
    contentImg: "dist/2-1s.jpg",
    contentTitle: "寶欣上漾",
    contentDesc: "VR 看房導覽<br>使用軟體：Figma,unreal,3Dvista<br>負責項目:unreal介面,UI設計,3Dvista開發",
    contentTime: "2022",
    style: 1,

    //modal
    modalCategory: "UI",
    modalImgs: [
      "dist/2-1.jpg",
      "dist/2-2.jpg",
      "dist/2-3.jpg",
      "dist/2-4.jpg"
    ],
    modalTitles: [
      "寶欣上漾 VR看房導覽", 
      "寶欣上漾 VR看房導覽", 
      "寶欣上漾 VR看房導覽",
      "寶欣上漾 VR看房導覽"],
    modalDesc: [
      "此產品可以在4k大型螢幕上觀看操作,使用unreal開發",
      "此產品可以在4k大型螢幕上觀看操作,使用unreal開發",
      "此產品可以在4k大型螢幕上觀看操作,使用unreal開發",
      "此產品可以在4k大型螢幕上觀看操作,使用unreal開發"],
    modalMovie:
      "",
    movieTitle: "",
    movieDesc: "movie",
    hasMovie: "false"
  },
  {
    id: 4,
    title: "VR360",
    image: "dist/3-1sx5.jpg",
    menuTitle: "titleTwo",

    //content
    svg: "dist/svg4.svg",
    category: "VR360",
    contentImg: "dist/3-1s.jpg",
    contentTitle: "遠雄豐河",
    contentDesc: "VR360看房導覽<br>使用軟體：AdobeXD,3Dvista<br>負責項目:3Dvista介面,UI設計,3Dvista開發",
    contentTime: "2021",
    style: 2,

    //modal
    modalCategory: "VR",
    modalImgs: [
      "dist/3-1.jpg",
    ],
    modalTitles: ["VR360"],
    modalDesc: [
      "手機平板版本都使用3Dvista開發"
    ],
    modalMovie:
      "",
    movieTitle: "movietitle",
    movieDesc: "movie",
    hasMovie: "false"
  },
  {
    id: 5,
    title: "Web",
    image: "dist/6-1sx5.jpg",
    menuTitle: "titleThree",

    //content
    svg: "dist/svg1.svg",
    category: "Web",
    contentImg: "dist/6-1s.jpg",
    contentTitle: "cw portfolio",
    contentDesc: "作品集<br>使用軟體：Figma,VisualStudioCode<br>負責項目:介面UI設計,網頁前端開發",
    contentTime: "2023",
    style: 1,

    //modal
    modalCategory: "Web",
    modalImgs: [
      "dist/6-1.jpg",
      "dist/6-2.jpg"
    ],
    modalTitles: ["Web / portfolio", "Web / portfolio"],
    modalDesc: [
      "作品集規劃近期作品,類型從平面.插畫.動畫到介面設計.RWD網頁設計", 
      "作品集規劃近期作品,類型從平面.插畫.動畫到介面設計.RWD網頁設計"],
    modalMovie:
      "",
    movieTitle: "movietitle",
    movieDesc: "movie",
    hasMovie: "false"
  },
  {
    id: 6,
    title: "Web",
    image: "dist/7-1sx5.jpg",
    menuTitle: "titleThree",

    //content
    svg: "dist/svg2.svg",
    category: "Web",
    contentImg: "dist/7-1s.jpg",
    contentTitle: "遠雄幸福城",
    contentDesc: "RWD<br>使用軟體：AdobeXD<br>負責項目:介面UI設計",
    contentTime: "2021",
    style: 2,

    //modal
    modalCategory: "Web",
    modalImgs: [
      "dist/7-1.jpg",
      "dist/7-2.jpg"
    ],
    modalTitles: ["RWD", "RWD"],
    modalDesc: ["遠雄幸福城RWD設計", "遠雄幸福城RWD設計"],
    modalMovie:
      "https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4",
    movieTitle: "movietitle",
    movieDesc: "movie",
    hasMovie: "false"
  },
  {
    id: 7,
    title: "Board",
    image: "dist/4-1sx5.jpg",
    menuTitle: "titleFour",

    //content
    svg: "dist/svg3.svg",
    category: "Board",
    contentImg: "dist/4-1s.jpg",
    contentTitle: "精銳雲",
    contentDesc: "電子錶板<br>使用軟體：AdobeXD.Flash<br>負責項目:介面UI設計,FLASH開發",
    contentTime: "2015",
    style: 1,

    //modal
    modalCategory: "Board",
    modalImgs: [
      "dist/4-1.jpg",
      "dist/4-2.jpg",
      "dist/4-3.jpg"
    ],
    modalTitles: ["精銳雲", "精銳雲", "精銳雲"],
    modalDesc: ["精銳雲電子錶板", "精銳雲電子錶板", "精銳雲電子錶板"],
    modalMovie:
      "dist/fin6.mp4",
    movieTitle: "精銳雲",
    movieDesc: "精銳雲電子錶板",
    hasMovie: "true"
  },
  {
    id: 8,
    title: "Board",
    image: "dist/5-1sx5.jpg",
    menuTitle: "titleFour",

    //content
    svg: "dist/svg3.svg",
    category: "Board",
    contentImg: "dist/5-1s.jpg",
    contentTitle: "上碧潭",
    contentDesc: "電子錶板<br>使用軟體：AdobeXD.Flash<br>負責項目:介面UI設計,FLASH開發",
    contentTime: "2014",
    style: 2,

    //modal
    modalCategory: "Board",
    modalImgs: [
      "dist/5-1.jpg",
      "dist/5-2.jpg"  
    ],
    modalTitles: ["上碧潭", "上碧潭"],
    modalDesc: ["上碧潭電子錶板", "上碧潭電子錶板"],
    modalMovie:
      "dist/fin3.mp4",
    movieTitle: "上碧潭",
    movieDesc: "上碧潭電子錶板",
    hasMovie: "true"
  },
  {
    id: 9,
    title: "Banner",
    image: "dist/10-1sx5.jpg",
    menuTitle: "titleFour",

    //content
    svg: "dist/svg3.svg",
    category: "Banner",
    contentImg: "dist/10-1s.jpg",
    contentTitle: "國美珩月",
    contentDesc: "Banner<br>使用軟體：illustrator<br>負責項目:主視覺",
    contentTime: "2021",
    style: 1,

    //modal
    modalCategory: "Banner",
    modalImgs: [
      "dist/banner1-1.jpg",
      "dist/banner1-2.jpg",
      "dist/bag30.jpg",
      "dist/V1p1.jpg" 
    ],
    modalTitles: ["國美珩月", "國美珩月"],
    modalDesc: ["國美珩月banner", "國美珩月banner","國美珩月提袋","國美珩月戰旗"],
    modalMovie:
      "dist/fin3.mp4",
    movieTitle: "上碧潭",
    movieDesc: "上碧潭電子錶板",
    hasMovie: "false"
  },
  {
    id: 10,
    title: "Motion",
    image: "dist/8-1sx5.jpg",
    menuTitle: "titleFour",

    //content
    svg: "dist/svg3.svg",
    category: "Motion",
    contentImg: "dist/8-1s.jpg",
    contentTitle: "遠雄之星",
    contentDesc: "電子錶板開頭動畫<br>使用軟體：Photoshop.Flash.AE<br>負責項目:插畫設計，動畫製作",
    contentTime: "2016",
    style: 2,

    //modal
    modalCategory: "film",
    modalImgs: [
      "dist/8-1.jpg"
    ],
    modalTitles: ["遠雄之星"],
    modalDesc: ["電子錶板開頭動畫"],
    modalMovie:
      "dist/fin2.mp4",
    movieTitle: "遠雄之星",
    movieDesc: "電子錶板開頭動畫",
    hasMovie: "true"
  },
  {
    id: 11,
    title: "Motion",
    image: "dist/9-1sx5.jpg",
    menuTitle: "titleFour",

    //content
    svg: "dist/svg3.svg",
    category: "Motion",
    contentImg: "dist/9-1s.jpg",
    contentTitle: "技佳大河琉御",
    contentDesc: "電子錶板開頭動畫<br>使用軟體：Photoshop.Flash.AE<br>負責項目:插畫設計，動畫製作",
    contentTime: "2017",
    style: 1,

    //modal
    modalCategory: "film",
    modalImgs: [
      "dist/9-1.jpg",
      
    ],
    modalTitles: ["技佳大河琉御"],
    modalDesc: ["電子錶板開頭動畫"],
    modalMovie:
      "dist/fin.mp4",
    movieTitle: "技佳大河琉御",
    movieDesc: "電子錶板開頭動畫",
    hasMovie: "true"
  },
  
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
      <a href="#1" class="menu__item-link">#redesign</a>
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
      <a href="#2" class="menu__item-link">#UI VR/VR360 </a>
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
      <a href="#5" class="menu__item-link">#UI / Web</a>
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
      <a href="#7" class="menu__item-link">#Board #motion #illustration</a>
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
  modalBtn.innerHTML = `<a href="#${item.id}" class="btn-close" ></a>`;

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
    for (let i = 0; i < num; i++) {
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