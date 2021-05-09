<template>
  <div class="about">
    <skill/>
  </div>
</template>
<script>
// @ is an alias to /src
import skill from '@/components/aboutItem.vue'

export default {
  name: 'about',
  components: {
    skill
  }
}
</script>