<!--<template>
  <div class="hello">
    <p style="color:red">哈哈哈哈</p>
    <h1>{{ msg }}</h1>
    <h2>11,Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          22,Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          33,Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          44,Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          55,Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          66,Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          77,vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>
-->
<template>
  <div class="homePage">
      <header class="header">
         <img src="./../assets/timg.jpg" alt="图片路径不正确">
          <input type="text" class="search-input" placeholder="输入要搜索的目的地">
          <span class="fa fa-search icon-search"  @click="search"></span>
          <div class="icon-search" @click="search"></div>
      </header>
      <div class="main">
        <!--跳转页面 <router-link>标签的使用 、点击事件、a标签（？）-->
        <div><button @click="goToBootstrap">点击跳转到bootstrap</button></div>
        <a v-bind:href="'Bootstrap'">点击跳转到bootstrap</a>
        <span>阿的郭德纲的大哥大哥的过渡高科技的风格开发灌灌灌灌灌灌灌灌灌过过过过过的观点给的股份的还得会爽肤水给对方的加肥加大减肥大幅度就放假</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    search: function () { alert('点击进行搜索查询') },
    goToBootstrap: function () {
      this.$router.push({name: 'Bootstrap', path: 'Bootstrap'})
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 html,body{width:100%;height:100%;position:relative;}
.homePage{width:100%;height:100%;}
.header{width:100%;height:4rem;}
.search-input{
  width: 5.5rem;
  height: 0.3rem;
  border-radius: 0.15rem;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  outline: none;    /* 获得焦点时隐藏方角样式*/
  position: absolute;
  top: 0.15rem;
  left:1rem;
  font-size: 0.24rem;
  color: #ff9;
  padding: 0 0.4rem 0 0.1rem;
}

/* 搜索的图标*/
/*.icon-search{
  width: 0.16rem;
  height: 0.16rem;
  border-radius: 100%;
  border:2px solid currentcolor;
  position: absolute;
  top: 0.15rem;
  right:  0.6rem;
  color: #fff;
}
.icon-search:after{
  content: "";
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
  width:0.12rem;
  height: 2px;
  position: absolute;
  top:0.19rem;
  left:0.13rem;
  background-color: currentcolor;
  color: #fff;
}*/
.icon-search{
  position: absolute;
  top: 0.15rem;
  right:  0.6rem;
  color: #fff;
}

 @media screen and (max-width: 321px) {
    .main {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 321px) and (max-width:400px) {
    .main {
      font-size: 17px;
    }
  }
  @media screen and (min-width: 400px) {
    .main {
      font-size: 19px;
    }
  }

</style>
