<template>
  <div class="page d-flex justify-content-center">
    <div class="row container text-white">
      <ul
        class="nav nav-tabs nav-dark justify-content-center h4 fw-bold pt-5"
        id="myTab"
        role="tablist"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1000"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#one"
            type="button"
            role="tab"
            aria-controls="one"
            aria-selected="true"
          >
            VUE/REACT
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#two"
            type="button"
            role="tab"
            aria-controls="two"
            aria-selected="false"
          >
            HTML/CSS
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#three"
            type="button"
            role="tab"
            aria-controls="three"
            aria-selected="false"
          >
            JavaScript
          </button>
        </li>
      </ul>
      <div class="tab-content pt-5" id="myTabContent">
        <div class="tab-pane fade show active" id="one" role="tabpanel" aria-labelledby="one-tab">
          <div class="row row-cols-lg-3 row-cols-1">
            <div class="p-3" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1500">
              <div class="card h-100 bg-black skill-content">
                <div class="m-3">
                  <img src="../../public/Image/GamerStore.png" alt="..." />
                </div>
                <div class="card-body text-white">
                  <h4 class="card-title pb-3">電商</h4>
                  <p class="card-text">
                    使用Vue開發一個電商網站，產品下單、新增刪除查詢等功能，最後付款送出訂單。
                  </p>
                </div>
                <div class="info">
                  <a href="https://k950212.github.io/GamerStore/dist/#/" target="_blank" class="btn"
                    >預覽</a
                  >
                </div>
              </div>
            </div>
            <div class="p-3" data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1500">
              <div class="card h-100 bg-black skill-content">
                <div class="m-3"><img src="../../public/Image/Website.png" alt="..." /></div>
                <div class="card-body text-white">
                  <h4 class="card-title pb-3">個人網站</h4>
                  <p class="card-text">個人經歷、所學統整</p>
                </div>
                <div class="info">
                  <a href="#" target="_blank" class="btn">預覽</a>
                </div>
              </div>
            </div>
            <div class="p-3" data-aos="fade-up" data-aos-delay="1400" data-aos-duration="1500">
              <div class="card h-100 bg-black skill-content">
                <div class="m-3"><img src="../../public/Image/PicSearch.png" alt="..." /></div>
                <div class="card-body text-white">
                  <h4 class="card-title pb-3">圖片搜尋網</h4>
                  <p class="card-text">使用React製作，串接API練習。</p>
                </div>
                <div class="info">
                  <a href="https://k950212.github.io/PicSearch/" target="_blank" class="btn"
                    >預覽</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">
          <div class="row row-cols-lg-3 row-cols-1">
            <div class="p-3">
              <div class="card h-100 bg-black skill-content">
                <div class="m-3">
                  <img src="../../public/Image/GO.png" alt="..." />
                </div>
                <div class="card-body text-white">
                  <h4 class="card-title pb-3">圍棋資訊網</h4>
                  <p class="card-text">初次製作網頁，簡單的HTML與CSS練習</p>
                </div>
                <div class="info">
                  <a href="https://k950212.github.io/project_Go/Go/" target="_blank" class="btn"
                    >預覽</a
                  >
                </div>
              </div>
            </div>
            <div class="p-3">
              <div class="card h-100 bg-black skill-content">
                <div class="m-3"><img src="../../public/Image/Japan.png" alt="..." /></div>
                <div class="card-body text-white">
                  <h4 class="card-title pb-3">日本旅遊資訊網</h4>
                  <p class="card-text">HTML與CSS進階運用</p>
                </div>
                <div class="info">
                  <a
                    href="https://k950212.github.io/project_JapanTravel/JapanTravel/"
                    target="_blank"
                    class="btn"
                    >預覽</a
                  >
                </div>
              </div>
            </div>
            <div class="p-3">
              <div class="card h-100 bg-black skill-content">
                <div class="m-3"><img src="../../public/Image/Restaurant.png" alt="..." /></div>
                <div class="card-body text-white">
                  <h4 class="card-title pb-3">餐酒館網站</h4>
                  <p class="card-text">練習排版與更多套件功能</p>
                </div>
                <div class="info">
                  <a
                    href="https://k950212.github.io/Restaurant/Restaurant/"
                    target="_blank"
                    class="btn"
                    >預覽</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="three" role="tabpanel" aria-labelledby="three-tab">
          <div class="row row-cols-lg-3 row-cols-1">
            <div class="p-3">
              <div class="card h-100 bg-black skill-content">
                <div class="m-3">
                  <img src="../../public/Image/Score.png" alt="..." />
                </div>
                <div class="card-body text-white">
                  <h4 class="card-title pb-3">GPA分數計算</h4>
                  <p class="card-text">輸入學分、課程來計算GPA</p>
                </div>
                <div class="info">
                  <a
                    href="https://k950212.github.io/project_Score/Score/"
                    target="_blank"
                    class="btn"
                    >預覽</a
                  >
                </div>
              </div>
            </div>
            <div class="p-3">
              <div class="card h-100 bg-black skill-content">
                <div class="m-3"><img src="../../public/Image/snake.png" alt="..." /></div>
                <div class="card-body text-white">
                  <h4 class="card-title pb-3">貪食蛇</h4>
                  <p class="card-text">小遊戲</p>
                </div>
                <div class="info">
                  <a href="https://k950212.github.io/Game_Snake/Snake/" target="_blank" class="btn"
                    >預覽</a
                  >
                </div>
              </div>
            </div>
            <div class="p-3">
              <div class="card h-100 bg-black skill-content">
                <div class="m-3"><img src="../../public/Image/Bounyball.png" alt="..." /></div>
                <div class="card-body text-white">
                  <h4 class="card-title pb-3">彈力球遊戲</h4>
                  <p class="card-text">小遊戲</p>
                </div>
                <div class="info">
                  <a
                    href="https://k950212.github.io/BouncyBall/BouncyBall/"
                    target="_blank"
                    class="btn"
                    >預覽</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navigation_dot">
      <a @click="gohead()"></a>
      <a @click="goskill()"></a>
      <a @click="goworks()" class="select"></a>
      <a @click="goexperience()"></a>
      <a @click="goabout()"></a>
    </div>
    <div class="background-text-right">WORK</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
  },
};
</script>
