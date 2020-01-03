<template>
  <header class="header">
    <div class="header_inner">
      <h1 class="heading01"><router-link to="/" class="heading01_link">SHINYA KATO / PORTFOLIO</router-link></h1>
      <p id="js-headerSpMenuBtn" class="headerSpMenuBtn" v-on:click="doAction">
        <button class="headerSpMenuBtn_lines">
          <span class="headerSpMenuBtn_line"></span>
          <span class="headerSpMenuBtn_line"></span>
          <span class="headerSpMenuBtn_line"></span>
        </button>
      </p>
      <nav id="js-headerNav" class="headerNav">
        <ul class="headerNav_list">
          <li class="js-headerNav headerNav_item" v-on:click="close"><router-link id="js-headerNav_link" class="headerNav_link" to="/about" v-on:click="navActive">About</router-link></li>
          <li class="js-headerNav headerNav_item" v-on:click="close"><router-link id="js-headerNav_link" class="headerNav_link" to="/works" v-on:click="navActive">Works</router-link></li>
          <li class="js-headerNav headerNav_item" v-on:click="close"><router-link id="js-headerNav_link" class="headerNav_link" to="/contact" v-on:click="navActive">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'headerItem',
  props: {
    msg: String
  },
  methods: {
    doAction: function () {
          document.getElementById('js-headerSpMenuBtn').classList.toggle('is-active');
          document.getElementById('js-headerNav').classList.toggle('is-active');
    },
    close: function () {
          document.getElementById('js-headerSpMenuBtn').classList.toggle('is-active');
          document.getElementById('js-headerNav').classList.toggle('is-active');
    },
    navActive: function () {
          document.getElementById('js-headerNav_link').classList.remove('is-active');
          (this).classList.add('is-active');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/style.scss";

.header {
  width: 100%;
  position: fixed;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.9);
}
.header_inner {
  width: 94%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include mq(s) {
    width: 100%;
    display: block;
  }
}
.headerNav {
  width: 50%;
  @include mq(s) {
    transform: translateX(100%) translate(100%);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    &.is-active {
      display: block;
      background-color: rgba(255, 255, 255, 0.9);
      transform: translateX(0);
      transition: .8s;
      overflow-y: auto;
    }
  }
}
.headerNav_list {
  display: flex;
  justify-content: flex-end;
  @include mq(s) {
    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%) translateY(-41px);
  }
}
.headerNav_item {
  width: 25%;
  &:hover > .headerNav_link {
    text-decoration: underline;
  }
  @include mq(s) {
    width: 100%;
  }
}
.headerNav_link {
  display: block;
  font-weight: bold;
  padding: 20px 0;
  color: #333;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  @include mq(s) {
    font-size: 1.8rem;
  }
}
.heading01 {
  padding: 20px 0;
  @include mq(s) {
   padding: 15px 0 10px 0;
   margin-left: 3%;
  }
}
.router-link-active {
    text-decoration: underline;
}
.heading01_link {
  color: #333;
  text-decoration: none;
}
</style>
