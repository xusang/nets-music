<template>
  <ul class="music-list">
    <li :key="item.index" v-for="item in items" >
      <img class="cover" :src="item.al.picUrl">
      <div class="name">{{item.al.name}}</div>
    </li>  
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  name: 'playList',
  data: function() {
    return {
      message: '音乐列表',
      items: [

      ]
    }
  },
  mounted: function () {
    let that = this;
    axios.get('//localhost:3000/playlist/detail', {
      params: {
        id: that.$route.query.id
      }
    })
    .then(function (res) {
      if (res.status === 200) {
        console.log(res); // eslint-disable-line
        that.items = res.data.playlist.tracks;
      } else {
        alert('出错了！')
      }
    })
    .catch(function (error) {
      console.log(error); // eslint-disable-line
    });
  },
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
