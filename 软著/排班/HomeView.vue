<template>
  <header>
  <nav class="header-nav">

    <div class="nav-outer">

      <ul class="user-list" id="user-list">

        <li class="active" ><a href="#/store" id="--1">店铺</a></li>
        <li ><a href="#/rather" id="--2"> 偏好设置 </a> </li>
        <li ><a href="#/class" id="--3" >我的排班</a></li>
        <li ><a href="#/break"  id="--4">请假调休</a></li>
      </ul>

      <ul class="right-list">
        <li class="login">
          <a href="#" class="mine">我的</a>
        </li>
      </ul>
    </div>
  </nav>
  </header>
  <div class="content">
    <select class="store">
      <option>XXX门店</option>
      <option>XX门店</option>
      <option>X门店</option>
      <option>XXXx门店</option>
    </select>
    <div class="button-1">

      <button class="button-2"><a>按日查询</a></button>
      <button class="button-3"><a>按周查询</a></button>

    </div>
    <div class="edide">
      <select  class="driver">
        <option>按岗位分组</option>
        <option>按岗位分组</option>
        <option>按岗位分组</option>
      </select>



            <el-date-picker
                v-model="value"
                type="daterange"
                start-placeholder="Start date"
                end-placeholder="End date"
                :default-time="defaultTime"
            />

-
      <el-date-picker
          v-model="value"
          type="daterange"
          start-placeholder="Start date"
          end-placeholder="End date"
          :default-time="defaultTime"
      />




      <button class="backspace">删除</button>
      <button class="editor">编辑</button>
      <br>
    </div>

    <div class="clander">
      <form action="" method="post">
        <table border="1">

          <tr>
            <td id="" >XXX</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>XXX</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>XXX</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>XXX</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>XXX</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>XXX</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>XXX</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

        </table>
      </form>
    </div>






  </div>
</template>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 50%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 0 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.header-nav {
  width: 100%;
  height: 70px;
  background-color: #242424;
}
a{
  text-decoration-line: none;
}
.header-nav li{
  text-align: center;
}
.nav-outer {
  width: 1100px;
  height: 70px;
  line-height: 70px;
  margin: 0 auto;
}

li{
  list-style-type: none;
  width: 100px;
}




.user-list li {

  float: left;

}

.user-list li>a {
  display: inline-block;
  padding: 0 19px;
  color: #ccc;
  font: 14px Arial, Helvetica, sans-serif;
}



.user-list li:hover {
  background-color: #000000;
}


.hot {
  margin-top: 22px;
  margin-left: -12px;
  width: 28px;
  height: 19px;

  background-position: -190px 0;
}

/* 右侧搜索框区域 */
.right-list {
  margin: 0 0 0 0;
  float: right;
}

.right-list li {
  float: left;
}

.search-wrap {
  width: 158px;
  height: 32px;
  line-height: 32px;

  background-position: 0 -99px;
  background-color: #fff;
  border-radius: 32px;
  margin-top: 19px;
}

input {
  position: relative;
  width: 128px;
  height: 16px;
  outline: none;
  margin-left: 27px;
  top: -2px;
  border: none;
}

input::-webkit-input-placeholder {
  color: #9b9b9b;
  font: 12px Arial, Helvetica, sans-serif;
}

input:focus::-webkit-input-placeholder {
  content: ''
}

#maker {
  display: block;
  width: 90px;
  height: 32px;
  font-size: 12px;
  font: 12px Arial, Helvetica, sans-serif;
  margin: 19px 0 0 12px;
  box-sizing: border-box;
  padding-left: 16px;
  padding-top: 6px;
  border: 1px solid #4F4F4F;
  background-position: 0 -140px;
  color: #ccc;
  border-radius: 20px
}

#maker:hover {
  border-color: #ffffff;
  color: #ffffff;
}

.login {
  position: relative;
  top: -20px;
  width: 50px;
  height: 70px;
  margin: 19px 0 0 20px;
  padding: 0 22px 0 0;
}

.login>a {
  color: #787878;
  font: 15px Arial, Helvetica, sans-serif;
  margin-top:10px;
}

.login:hover a {
  text-decoration: underline;
  color: #999999;
}

/* 红色导航栏区域 */
.red-nav {
  width: 100%;
  height: 35px;
  background-color: #c20c0c;
}

.inner {
  width: 920px;
  height: 34px;
  margin: 0 auto;
  padding-left: 180px;
}

.inner li {
  float: left;
  height: 34px;
}

.inner li>a {
  display: block;
  height: 16px;
  line-height: 17px;
  font: 12px Arial, Helvetica, sans-serif;
  color: #ffffff;
  margin: 5px 17px 0px;
  padding: 3px 13px 3px 13px;
}

.inner li:first-of-type a {
  background-color: #9b0909;
  border-radius: 20px;
}

.inner li:hover a {
  background-color: #9b0909;
  border-radius: 20px;
}

.top-icon {
  width: 8px;
  height: 8px;
  position: relative;
  left: 54px;
  top: -23px;
}

/* 轮播图区域样式 */
.outer {
  position: relative;
  width: 100%;
  height: 285px;
}

.swiper-inner {
  position: relative;
  width: 984px;
  height: 285px;
  margin: 0 auto;
}

.swiper {
  width: 100%;
  height: 285px;
  overflow: hidden;
}

.swiper-wrapper>div>img {
  width: 730px;
  height: 285px;
}

.download-app {
  position: absolute;
  top: 0;
  left: 730px;
  width: 254px;
  height: 285px;

  z-index: 20;
}

.download-app p {
  margin-top: 255px;
  color: #8d8d8d;
  text-align: center;
  font: 12px Arial, Helvetica, sans-serif;
}
select.store{
  width: 150px;
  height: 60px;
  text-align: center;
  margin-left: 650px;
  margin-top: 20px;
  border-radius: 10px;

}
.button-1 .button-2{
  margin-left: 150px;
  margin-right: 0;
  height: 40px;
}
.button-1 .button-3{
  margin: 0;
  height: 40px;
}
select.driver{
  width: 90px;
  height: 40px;
  margin-top: 20px;
}
button.backspace{
  float: right;
  margin-top: 20px;
  width: 90px;
  height: 35px;
  margin-right:250px;
}
button.editor{
  float: right;
  margin-top: 20px;
  margin-right: 10px;
  width: 90px;
  height: 35px;

}
table{
  border-spacing: 0;
}
tr{border-left: none;
  border-right: none;
  display: table-row;

}
td{
  width: 128px;
  height: 50px;
}
.clander{
  margin-left: 150px;
}
.edide{
  margin-left: 150px;
}
.backspace{
  left: 500px;
}


</style>
<script lang="js" setup>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { ref } from 'vue'

const value = ref('')
const defaultTime = ref<[Date, Date]>([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
])

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
