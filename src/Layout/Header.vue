<!--  -->
<template>
  <div class="Header" :style="{ opacity: opacity }">头部Header</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      opacity: 0
    }
  },
  created () {

  },
  mounted () {
    // window.addEventListener('scroll', this.handleScroll) // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
      console.log('scrollTop: ', scrollTop / 10);
      this.opacity = scrollTop / 10

    }
  }
}
</script>
<style lang="scss" scoped>
.Header {
  position: fixed;
  height: 60px;
  width: 100%;
  top: 0;
  opacity: 0;
  background-color: black;
  z-index: 2;
  transition: all 1s;
}
</style>