<template>
  <div class="DetailCommentInfo">
    <div class="Title">
      <span>用户评价</span>
      <span class="More ">更多</span>
    </div>
    <div v-if="commentInfo && commentInfo.list">
      <div class="uname">
        <img :src="commentInfo.list[0].user.avatar" alt="">
        <span>{{commentInfo.list[0].user.uname}}</span>
      </div>
      <div class="describe">
        <p>{{commentInfo.list[0].content}}</p>
      </div>
      <div class="udata">
        <span class="timer">{{commentInfo.list[0].created | formatDate("yyyy-MM-dd")}}</span>
        <span>{{commentInfo.list[0].style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters:{
    formatDate(date, fmt) {
      if (typeof date == 'string') {
        return date;
      }
      if (!fmt) fmt = "yyyy-MM-dd hh:mm:ss";
      if (!date || date == null) return null;
      // 将传入的date准换为时间对象，*1000是为了将秒转成毫秒；
      date = new Date(date *1000);
        var o = {
          'M+': date.getMonth() + 1, // 月份
          'd+': date.getDate(), // 日
          'h+': date.getHours(), // 小时
          'm+': date.getMinutes(), // 分
          's+': date.getSeconds(), // 秒
          'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
          'S': date.getMilliseconds() // 毫秒
        }
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
        return fmt;
    }
 }
}
</script>

<style scoped>
  .DetailCommentInfo {
    background-color: #fff;
    padding: 0 10px;
  }
  .Title {
    height: 60px;
    border-bottom: 2px solid rgba(100,100,100, .1);
    line-height: 60px;
    font-size: 14px;
  }
  .More  {
    float: right;
    margin-right: 10px;
  }
  .uname {
    margin: 10px 0;
  }
  .uname img {
    width: 50px;
    border-radius: 25px;
  }
  .uname span {
    position: relative;
    bottom: 18px;
    right: -12px;
  }
  .describe {
    font-size: 14px;
  }
  .udata {
    font-size: 13px;
    color: #adadad;
    padding: 10px 0 30px;
    border-bottom: 2px solid rgba(100,100,100, .1);
  }
  .timer {
    margin-right: 10px;
  }
</style>