<template>
  <div class="contents">
  <div class="mv">
      <vue-particles class="particles"
    color="#02a388"
    :particleOpacity="0.9"
    :particlesNumber="120"
    shapeType="circle"
    :particleSize="6"
    linesColor="#00acd6"
    :linesWidth="0"
    :lineLinked="false"
    :lineOpacity="0.4"
    :linesDistance="100"
    :moveSpeed="6"
    :hoverEffect="false"
    hoverMode="bubble"
    :clickEffect="true"
    clickMode="repulse"
>
</vue-particles>
    <h2 class="heading02">About</h2>
    <p class="btnwrap"><a href="#section" v-smooth-scroll="{ duration: 1500 }" class="scrollBtn"><span class="scrollBtn_link"></span>Scroll</a></p>
  </div>
  <section id="section">
      <div class="block01">
          <div class="block01_item">
            <div class="profileBox">
              <p class="profileBox_img"><img src="../static/profile.jpg" alt=""></p>
              <div class="prfileBox_text">
                <p class="prfileBox_title">Shinya Kato</p>
                <p>2018年8月より半年間Web制作の職業訓練を受講し、Web制作会社に転職。<br>
                マークアップエンジニアとして業務を行う。<br>
                スキルアップのため、PHP/laravel・AWS等の勉強をしています。</p>
              </div>
            </div>
          </div>
          <div class="block01_item-02 block02">
            <div class="block02_item">
              <h3 class="heading03">Skill</h3>
            </div>
          <div class="block02_item-02">
            <ul class="block01List">
              <li class="block01List_list"><p class="block01_title">PHP/laravel</p>
              <p class="block01_text">バックエンドの部分に携わっていきたいと思い、独学で勉強中。laravelを使用したポートフォリオを複数作成しました。</p></li>
              <li class="block01List_list">
              <p class="block01_title">AWS</p>
              <p class="block01_text">クラウドプラクティショナーを取得。引き続き、上位資格取得に向け勉強中。</p></li>
              <li class="block01List_list">
              <p class="block01_title">Vue.js</p>
              <p class="block01_text">このポートフォリオを作るために使用しました、独学で勉強。</p></li>
              <li class="block01List_list"><p class="block01_title">Git</p>
              <p class="block01_text">Backlog、Bitbucket、Soucetreeを実務で使用。</p></li>
              <li class="block01List_list"><p class="block01_title">Sass</p>
                <p class="block01_text">Gulpを使ったコンパイルを実務で使用。</p></li>
              <li class="block01List_list"><p class="block01_title">JavaScript / jQuery</p>
                <p class="block01_text">Web制作の実務において、主にサイトの動的部分で使用。</p></li>
              <li class="block01List_list"><p class="block01_title">HTML / CSS</p>
                <p class="block01_text">Web業界へ転職しようと思った2018年1月より勉強を開始。Web制作実務において、複数サイト制作。</p></li>
              <li class="block01List_list"><p class="block01_title">Visual Studio Code / Atom</p>
                <p class="block01_text">DWより動作が軽く、プラグインが豊富なため実務で使用。</p></li>
              <li class="block01List_list"><p class="block01_title">Adobe</p>
                  <ul class="list-style01 mt10">
                    <li>Illustrator CC</li>
                    <li>Photoshop CC</li>
                    <li>Dreamweaver CC</li>
                    <li>XD CC</li>
                  </ul>
                </li>
            </ul>
            </div>
        </div>
    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'skill',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/style.scss";

.profileBox {
  display: flex;
}
.profileBox_img {
  width: 64px;
  > img {
    border-radius: 50%;
  }
}
.prfileBox_title {
  font-size: 2rem;
}
.prfileBox_text {
  margin-left: 20px;
}
</style>
