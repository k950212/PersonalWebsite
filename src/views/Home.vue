<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top m-2" id="navbar-top">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">個人網站</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav h3 fw-bold">
            <li class="nav-item px-2">
              <a
                class="nav-link active"
                aria-current="page"
                @click="gohead"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                >簡介</a
              >
            </li>
            <li class="nav-item px-2">
              <a
                class="nav-link"
                @click="goskill"
                data-aos="fade-up"
                data-aos-delay="350"
                data-aos-duration="1000"
                >技能</a
              >
            </li>
            <li class="nav-item px-2">
              <a
                class="nav-link"
                @click="goworks"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
                >作品</a
              >
            </li>
            <li class="nav-item px-2">
              <a
                class="nav-link"
                @click="goexperience"
                data-aos="fade-up"
                data-aos-delay="850"
                data-aos-duration="1000"
                >經歷</a
              >
            </li>
            <li class="nav-item px-2">
              <a
                class="nav-link"
                @click="goabout"
                data-aos="fade-up"
                data-aos-delay="1100"
                data-aos-duration="1000"
                >關於我</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section id="head">
      <div class="page d-flex align-items-center justify-content-center">
        <div class="row container text-white">
          <div
            class="col-lg-6 pt-5 d-flex align-items-center justify-content-center head-content"
            style="letter-spacing: 3px"
          >
            <div class="black"></div>
            <div class="px-5 words">
              <h1 class="pb-3">I'm Kevin <br /></h1>
              <h3>大同大學資工系畢業，目前自學前端中</h3>
              <h3>
                學習內容包括：<span class="typed-text">{{ typeValue }}</span
                ><span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
              </h3>
            </div>
          </div>
          <div class="col-lg-6 animate__animated animate__backInDown">
            <ul id="dice">
              <li class="front"><img src="../../public/Image/C.png" alt="" /></li>
              <li class="back"><img src="../../public/Image/python.png" alt="" /></li>
              <li class="right"><img src="../../public/Image/html.png" alt="" /></li>
              <li class="left"><img src="../../public/Image/css-3.png" alt="" /></li>
              <li class="top"><img src="../../public/Image/java-script.png" alt="" /></li>
              <li class="bottom"><img src="../../public/Image/Vue.js.png" alt="" /></li>
            </ul>
          </div>
        </div>
        <div class="navigation_dot">
          <a @click="gohead()" class="select"></a>
          <a @click="goskill()"></a>
          <a @click="goworks()"></a>
          <a @click="goexperience()"></a>
          <a @click="goabout()"></a>
        </div>
      </div>
    </section>
    <section id="skill">
      <div class="page2 d-flex align-items-center justify-content-center">
        <div class="row container text-white">
          <div class="col-lg-6">
            <div class="d-flex flex-wrap">
              <div
                class="icon p-3"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <img src="../../public/Image/C.png" alt="" />
                <div class="d-flex justify-content-center p-1"><p>C</p></div>
              </div>
              <div
                class="icon p-3"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img src="../../public/Image/python.png" alt="" />
                <div class="d-flex justify-content-center p-1"><p>Python</p></div>
              </div>
              <div
                class="icon p-3"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <img src="../../public/Image/html.png" alt="" />
                <div class="d-flex justify-content-center p-1"><p>HTML</p></div>
              </div>
              <div
                class="icon p-3"
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="1000"
              >
                <img src="../../public/Image/css-3.png" alt="" />
                <div class="d-flex justify-content-center p-1"><p>CSS</p></div>
              </div>
              <div
                class="icon p-3"
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="1000"
              >
                <img src="../../public/Image/java-script.png" alt="" />
                <div class="d-flex justify-content-center p-1"><p>JavaScript</p></div>
              </div>
              <div
                class="icon p-3"
                data-aos="fade-up"
                data-aos-delay="1100"
                data-aos-duration="1000"
              >
                <img src="../../public/Image/Vue.js.png" alt="" />
                <div class="d-flex justify-content-center p-1"><p>Vue</p></div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <h4>熟練度：</h4>
            <div class="pb-3">
              <p>C：</p>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  style="width: 60%"
                ></div>
              </div>
            </div>
            <div class="pb-3">
              <p>Python：</p>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                  style="width: 60%"
                ></div>
              </div>
            </div>
            <div class="pb-3">
              <p>HTML：</p>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  style="width: 90%"
                ></div>
              </div>
            </div>
            <div class="pb-3">
              <p>CSS：</p>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-aos="fade-right"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                  style="width: 85%"
                ></div>
              </div>
            </div>
            <div class="pb-3">
              <p>JavaScript：</p>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-aos="fade-right"
                  data-aos-delay="700"
                  data-aos-duration="1000"
                  style="width: 75%"
                ></div>
              </div>
            </div>
            <div class="pb-3">
              <p>Vue：</p>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-aos="fade-right"
                  data-aos-delay="800"
                  data-aos-duration="1000"
                  style="width: 70%"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="navigation_dot">
          <a @click="gohead()"></a>
          <a @click="goskill()" class="select"></a>
          <a @click="goworks()"></a>
          <a @click="goexperience()"></a>
          <a @click="goabout()"></a>
        </div>
        <div class="background-text-left">SKILL</div>
      </div>
    </section>
    <section id="works">
      <Work></Work>
    </section>
    <section id="experience">
      <div class="page2 p-5">
        <div class="container">
          <div class="timeline-block timeline-block-right">
            <div class="marker"></div>
            <div
              class="timeline-content"
              data-aos="zoom-in-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <h3>2018.9-2022.6</h3>
              <span>大同大學資工系</span>
              <p>就學時學習了C語言，為其他語言打下一定基礎。稍微接觸了JAVA、Python。</p>
            </div>
          </div>

          <div class="timeline-block timeline-block-left">
            <div class="marker"></div>
            <div
              class="timeline-content"
              data-aos="zoom-in-right"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <h3>2022.7-2022.11</h3>
              <span>兵役</span>
              <p>於成功嶺新訓後進台北市政府消防局服役</p>
            </div>
          </div>

          <div class="timeline-block timeline-block-right">
            <div class="marker"></div>
            <div
              class="timeline-content"
              data-aos="zoom-in-left"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h3>2022.12-2023.1</h3>
              <span>休息</span>
              <p></p>
            </div>
          </div>

          <div class="timeline-block timeline-block-left">
            <div class="marker"></div>
            <div
              class="timeline-content"
              data-aos="zoom-in-right"
              data-aos-delay="700"
              data-aos-duration="1000"
            >
              <h3>2023.2-2023.6</h3>
              <span>前端自學</span>
              <p>
                開始自學，接觸網頁製作，上 Udemy
                學習前端基礎，HTML、CSS、SCSS、JavaScript、React等等
              </p>
              <p>
                後續再接觸Vue3，在六角學院中學習Vue基礎，並使用學院提供的後端API來存放資料，已建立完整電商
              </p>
            </div>
          </div>
        </div>
        <div class="navigation_dot">
          <a @click="gohead()"></a>
          <a @click="goskill()"></a>
          <a @click="goworks()"></a>
          <a @click="goexperience()" class="select"></a>
          <a @click="goabout()"></a>
        </div>
        <div class="background-text-left">EXP</div>
      </div>
    </section>
    <section id="about">
      <div class="page pt-5 d-flex justify-content-center align-items-center">
        <div class="container py-5 row row-cols-lg-3 text-white">
          <div class="p-3" data-aos="zoom-in-down" data-aos-delay="500" data-aos-duration="1000">
            <div class="card-container">
              <div class="cover d-flex justify-content-center align-items-center h1">個人</div>

              <div class="back p-5">
                <p>
                  我是張允豪，畢業於大同大學資訊工程學系。目前持續學習前端技能中。<br />
                  <br />聯絡資訊：<br /><i class="bi bi-telephone"></i>：0909786383 <br /><i
                    class="bi bi-envelope"
                  ></i
                  >：k950212@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div class="p-3" data-aos="zoom-in-down" data-aos-delay="800" data-aos-duration="1000">
            <div class="card-container">
              <div class="cover d-flex justify-content-center align-items-center h1">經歷</div>
              <div class="back p-5">
                <p>
                  大學時期：就學時學習C語言、JAVA、PYTHON、基礎資料庫課程等。
                  <br /><br />自學時期：在Udemy學習HTML、CSS、JavaScript、Bootstrap，並製作了2個靜態網頁、成績計算網、2個小遊戲、嘗試用React串接API。六角學院學習前端框架Vue，並試著做出一個完整的電商。
                </p>
              </div>
            </div>
          </div>
          <div class="p-3" data-aos="zoom-in-down" data-aos-delay="1100" data-aos-duration="1000">
            <div class="card-container">
              <div class="cover d-flex justify-content-center align-items-center h1">未來展望</div>
              <div class="back p-5">
                <p>
                  未來工作希望走前端工程師，繼續學習相關技能，提升用戶體驗，實現更好的頁面互動，以自己所能完善工作所需。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="navigation_dot">
          <a @click="gohead()"></a>
          <a @click="goskill()"></a>
          <a @click="goworks()"></a>
          <a @click="goexperience()"></a>
          <a @click="goabout()" class="select"></a>
        </div>
        <div class="background-text-right">ABOUT</div>
      </div>
    </section>
  </div>
</template>

<script>
import Work from "../components/work.vue";

export default {
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["HTML", "CSS", "JavaScript", "Vue3"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  components: {
    Work,
  },
  methods: {
    gohead() {
      document.getElementById("head").scrollIntoView();
    },
    goskill() {
      document.getElementById("skill").scrollIntoView();
    },
    goworks() {
      document.getElementById("works").scrollIntoView();
    },
    goexperience() {
      document.getElementById("experience").scrollIntoView();
    },
    goabout() {
      document.getElementById("about").scrollIntoView();
    },
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length) this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>
