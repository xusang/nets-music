<template>
  <ul class="music-list">
    <li :key="item.index" v-for="(item, index) in items" @click="jump(index)">
      <img class="cover" :src="item.coverImgUrl">
      <div class="name">{{item.name}}</div>
    </li>  
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  name: 'music_list',
  data: function() {
    return {
      message: '音乐列表',
      items: [

      ]
    }
  },
  mounted: function () {
    let that = this;
    axios.get('//localhost:3000/user/playlist', {
      params: {
        uid: that.$route.query.id
      }
    })
    .then(function (res) {
      if (res.status === 200) {
        console.log(res); // eslint-disable-line
        that.items = res.data.playlist;
      } else {
        alert('出错了！')
      }
    })
    .catch(function (error) {
      console.log(error); // eslint-disable-line
    });
  },
  methods: {
    jump: function (index) {
      this.$router.push({path:"/musicDetailList",query:{id: this.items[index].id}});
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
.cover {
  width: 200px;
  height: 200px;
}
.name {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
a {
  color: #42b983;
}
</style>
