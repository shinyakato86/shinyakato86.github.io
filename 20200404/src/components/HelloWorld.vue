<template>
  <div class="mv">
      <vue-particles class="particles"
        color="#dedede"
        :particleOpacity="0.9"
        :particlesNumber="120"
        shapeType="edge"
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
    <p class="hello_text">SHINYA KATO PORTFOLIO</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/style.scss";
.hello_text {
  font-size: 3.8rem;
  color: #333;
	width: 23ch;
	overflow: hidden;
	white-space: nowrap;
	border-right: .05em solid;
	animation: typing 3s steps(23),
  cursor 1s steps(1) infinite;
  font-weight: bold;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
  transform: translatex(-50%);
  text-align: center;
  @include mq(s) {
		font-size: 1.9rem;
	}
}
@keyframes typing {
	from { width: 0; }
}
@keyframes cursor {
	50% { border-right-color: transparent; }
}
</style>
