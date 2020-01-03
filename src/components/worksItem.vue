<template>
  <div class="contents">
  <div class="mv">
      <vue-particles class="particles"
    color="#4682b4"
    :particleOpacity="0.9"
    :particlesNumber="120"
    shapeType="polygon"
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
    <h2 class="heading02">Works</h2>
    <p class="btnwrap"><a href="#section" v-smooth-scroll="{ duration: 1500 }" class="scrollBtn"><span class="scrollBtn_link"></span>Scroll</a></p>
  </div>
  <section id="section">
      <p class="mb60">実務で作成したものについては、職務経歴書に記載させていただいております。</p>
      <div class="block03">
        <div class="block03_img">
          <a href="https://shinyakato86.github.io/janken/" target="blank" rel="noopener" class="block03_link"><img src="../static/portfolio.png" alt=""></a>
        </div>
        <div class="block03_text">
          <p class="block03_title">SHINYA KATO / PORTFOLIO</p>
          <p class="block03_sub">Sass / JavaScript / Vue.js</p>
          <p>現在ご覧のこのポートフォリオです。</p>
        </div>
      </div>
        <div class="block03">
          <div class="block03_img">
            <a href="https://shinyakato86.github.io/tips/" target="blank" rel="noopener" class="block03_link"><img src="../static/tips.png" alt=""></a>
          </div>
        <div class="block03_text">
          <p class="block03_title">Tips</p>
          <p class="block03_sub">Sass / jQuery / JavaScript</p>
          <p>制作でよく使うスタイルや情報を個人的にまとめています。</p>
        </div>
      </div>
      <div class="block03">
        <div class="block03_img">
          <a href="https://shinyakato86.github.io/janken/" target="blank" rel="noopener" class="block03_link"><img src="../static/janken.png" alt=""></a>
        </div>
        <div class="block03_text">
          <p class="block03_title">じゃんけんゲーム</p>
          <p class="block03_sub">Bootstrap / JavaScript</p>
          <p>JavaScriptの勉強のために作成したじゃんけんゲームです。</p>
        </div>
      </div>
      <div class="block03">
        <div class="block03_img">
          <a href="https://shinyakato86.github.io/todolist/" target="blank" rel="noopener" class="block03_link"><img src="../static/todo.png" alt=""></a>
        </div>
        <div class="block03_text">
          <p class="block03_title">Todo List</p>
          <p class="block03_sub">Bootstrap / JavaScript</p>
          <p>JavaScriptの勉強のために作成したTodo Listです。</p>
        </div>
      </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'worksItem',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/style.scss";

.block03 {
  display: flex;
  justify-content: space-between;
  & + & {
    margin-top: 30px;
  }
  @include mq(s) {
    display: block;
  }
}
.block03_img {
  width: calc(50% - 20px);
  outline: 1px solid #c6c6c6;
  @include mq(s) {
    width: 100%;
  }
  &:hover {
    opacity: 0.7;
    @include mq(m) {
      opacity: 1;
    }
  }
}
.block03_text {
  width: 50%;
  @include mq(s) {
    width: 100%;
  }
}
.block03_title {
  font-size: 2rem;
  margin-bottom: 10px;
  @include mq(s) {
    margin-top: 10px;
  }
}
.block03_sub {
  margin-bottom: 10px;
  font-size: 1.6rem;
}
.block03_link {
  display: block;
}
</style>
