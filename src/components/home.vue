<template>
  <div>
    歌曲{{song}} 歌手{{singer}}
  </div>
</template>
<script>
export default {
  name: '小月月--五环',
  data () {
    return {
      song: '等你下课',
      singer: '周杰伦杨瑞代'
    }
  }
}
</script>
<style scoped>
div {
  color: red;
}
</style>
