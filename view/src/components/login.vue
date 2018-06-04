<template>
  <div id="app">
    <!-- <header>
      <router-link to="/com1">com1</router-link>
      <router-link to="/com2">com2</router-link>
    </header> -->
    <router-view></router-view> 
    <h1>网易云数据</h1>
    <input type="text" placeholder="手机号" v-model="phone">
    <input type="text" placeholder="密码" v-model="password">
    <button @click="login">登录</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data: function () {
    return {
      phone: '',
      password: '',
    }
  },
  mounted: function () {
    
  },
  methods: {
    login: function () {
      let that = this;
      axios.get('//localhost:3000/login/cellphone', {
      params: {
        phone: that.phone,
        password: that.password,
      }
    })
    .then(function (res) {
      if (res.status === 200) {
        console.log(res.data.account.id); // eslint-disable-line
        that.$router.push({path:"/musicList",query:{id: res.data.account.id}});
      } else {
        alert('出错了！')
      }
    })
    .catch(function (error) {
      console.log(error); // eslint-disable-line
    });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
