<template>
  <div id="app">
    <h1>Button</h1>
    <!-- 默认按钮 -->
    <nlrx-button>默认按钮</nlrx-button>
    <br>
    <!-- 带类型的按钮 -->
    <nlrx-button type="primary" disabled>主要按钮</nlrx-button>
    <nlrx-button type="warning">警告按钮</nlrx-button>
    <nlrx-button type="danger">危险按钮</nlrx-button>
    <nlrx-button type="success">成功按钮</nlrx-button>
    <nlrx-button type="info">信息按钮</nlrx-button>
    <br>
    <!-- 带icon的按钮 -->
    <nlrx-button type="info" icon="sousuo">信息按钮</nlrx-button>
    <nlrx-button type="info" position="right" icon="sousuo">信息按钮</nlrx-button>
    <nlrx-button type="primary" icon="sousuo"></nlrx-button>
    <nlrx-button type="success" icon="sousuo" icon-position="right">内容</nlrx-button>
    <br>
    <!-- loading按钮 -->
    <nlrx-button type="success" :loading="true">加载中</nlrx-button>
    <br>
    <!-- 触发事件 -->
    <nlrx-button type="success" @click="fn">触发事件</nlrx-button>
    <br>

    <nlrx-button-group>
      <nlrx-button  icon="left" icon-position="left">上一页</nlrx-button>
      <nlrx-button  icon="right" icon-position="right">下一页</nlrx-button>
    </nlrx-button-group>

    <nlrx-icon icon="sousuo"></nlrx-icon>
    <nlrx-icon icon="edit"></nlrx-icon>
    <br>
    <hr>
    <h1>Input</h1>
    <nlrx-input></nlrx-input>
    <nlrx-input disabled></nlrx-input>
    <nlrx-input readonly></nlrx-input>
    <nlrx-input v-model="msg" show-password></nlrx-input>
    <nlrx-input v-model="msg" clearable @clear="fn"></nlrx-input>
    <nlrx-input v-model="msg" @change="fn"></nlrx-input>
    <nlrx-input prefixIcon="edit"></nlrx-input>
    <nlrx-input suffixIcon="edit"></nlrx-input>
    <hr>
    <h1>栅格系统</h1>
    <div style="">
      <nlrx-row>
        <nlrx-col :span="12"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="12"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row>
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row>
        <nlrx-col :span="2"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="10"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="4"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row>
        <nlrx-col :span="6" ><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="10"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row>
        <nlrx-col :span="2" ><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="10" :offset="4"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="2" :offset="2"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="4"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row :gutter="20">
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="4"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="4"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row :gutter="20">
        <nlrx-col :span="6" ><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="10"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row :gutter="20">
        <nlrx-col :span="2"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="20" :offset="2"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row :gutter="20">
        <nlrx-col :span="4"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="20"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>

      <nlrx-row>
        <nlrx-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>

      <nlrx-row type="flex" class="row-bg" justify="start">
        <nlrx-col :span="6"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="6"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="6"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row type="flex" class="row-bg" justify="center">
        <nlrx-col :span="6"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="6"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="6"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row type="flex" class="row-bg" justify="end">
        <nlrx-col :span="6"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="6"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="6"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row type="flex" class="row-bg" justify="space-between">
        <nlrx-col :span="6"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="6"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="6"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row type="flex" class="row-bg" justify="space-around">
        <nlrx-col :span="6"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="6"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="6"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
    </div>
    <h1>Container 布局容器</h1>
    <div>
      <nlrx-container>
        <nlrx-header>Header</nlrx-header>
        <nlrx-main>Main</nlrx-main>
        <nlrx-footer>footer</nlrx-footer>
      </nlrx-container>
      <hr>
      <nlrx-container>
        <nlrx-header>Header</nlrx-header>
        <nlrx-container>
          <nlrx-aside >aside </nlrx-aside >
          <nlrx-main>Main</nlrx-main>
        </nlrx-container>
        <nlrx-footer>footer</nlrx-footer>
      </nlrx-container>
      <nlrx-container>
        <nlrx-aside width="100px">aside </nlrx-aside >
        <nlrx-container>
          <nlrx-header height="100px">header</nlrx-header >
          <nlrx-main>Main</nlrx-main>
          <nlrx-footer height="100px">footer</nlrx-footer>
        </nlrx-container>
      </nlrx-container>
    </div>
    <h1>进度条Progress</h1>
    <div>
      <nlrx-progress :percentage="percentage" color="#520520"></nlrx-progress>
      <nlrx-button @click="increase">加</nlrx-button>
      <nlrx-button @click="decrease">减</nlrx-button>
    </div>
    <h1>轮播图carousel</h1>
    <div style="width:500px;margin:0 auto">
      <nlrx-carousel>
        <nlrx-carousel-item>
          <div class="carousel-content" style="background-color:red">
            <h1>1</h1>
          </div>
        </nlrx-carousel-item>
        <nlrx-carousel-item>
          <div class="carousel-content" style="background-color:blue" >
            <h1>2</h1>
          </div>
        </nlrx-carousel-item>
        <nlrx-carousel-item>
          <div class="carousel-content" style="background-color:yellow">
            <h1>3</h1>
          </div>
        </nlrx-carousel-item>
      </nlrx-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg:"",
      percentage:20
    }
  },
  methods:{
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
    fn(e){
      this.$message({
        dangerouslyUseHTMLString:true,
        message:'<h1>nlrx</h1>',
        type:'success',
        center:true,
        onClose:()=>{console.log('1111')},
        showClose:true,
        closeButtonText:'11111111'
      })
    },

  }
}
</script>
<style>
.nlrx-header, .nlrx-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .nlrx-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .nlrx-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
<style>
  .carousel-content {
    height:300px;
    text-align: center;
    line-height: 300px;
  }
</style>