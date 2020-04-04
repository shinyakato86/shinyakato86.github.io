<template>
  <div class="contents">
  <div class="mv">
      <vue-particles class="particles"
    color="#f0e68c"
    :particleOpacity="0.9"
    :particlesNumber="120"
    shapeType="star"
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
    <h2 class="heading02">Contact</h2>
    <p class="btnwrap"><a href="#section" v-smooth-scroll="{ duration: 1500 }" class="scrollBtn"><span class="scrollBtn_link"></span>Scroll</a></p>
  </div>
  <section id="section">
      <div class="contactArea">
        <div class="contactArea_item">
          <a href="https://github.com/shinyakato86" class="contactArea_link" target="blank" rel="noopener"><img src="../static/git.png" alt=""></a>
        </div>
        <div class="contactArea_item">
          <a href="https://qiita.com/shinyakato86" class="contactArea_link" target="blank" rel="noopener"><img src="../static/qiita.png" alt=""></a>
        </div>
        <div class="contactArea_item">
          <a href="https://www.instagram.com/shinya_kato86" class="contactArea_link" target="blank" rel="noopener"><img src="../static/insta.png" alt=""></a>
        </div>
      </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'contactItem',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/style.scss";

.contactArea {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 161px);
    @include mq(s) {
      height: calc(100vh - 106px);
    }
}
.contactArea_item {
  width: 60px;
  margin-right: 50px;
  &:last-of-type {
    margin-right: 0;
  }
}
.contactArea_link {
  display: block;
  transition: 1s;
  transform: rotateY(0deg);
  &:hover {
    transform: rotateY(360deg);
  }
  @include mq(m) {
    &:hover {
      transform: rotateY(0deg);
    }
	}
}
</style>
