<template>
  <div class="works">
    <worksitem/>
  </div>
</template>
<script>
// @ is an alias to /src
import worksitem from '@/components/worksItem.vue'

export default {
  name: 'works',
  components: {
    worksitem
  }
}
</script>