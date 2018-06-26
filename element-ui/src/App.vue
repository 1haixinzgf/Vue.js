<template>
  <div id="app">
    <header class="header header-fixed">
      <el-row>
        <el-col :span="24">
          <el-menu class="el-menu-demo" mode="horizontal" default-active="1">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2">在线商城</el-menu-item>
            <el-menu-item index="3">客户管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <main>
      <div class="main-left">
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item>活动发布</el-menu-item>
          <el-menu-item>活动管理</el-menu-item>
        </el-menu>
      </div>
      <div class="main-right">
        <div class="activePublic">
          <el-steps :space="200" :active="step">
            <el-step title="活动信息"></el-step>
            <el-step title="报名签到"></el-step>
            <el-step title="分享设置"></el-step>
            <el-step title="个性设置"></el-step>
          </el-steps>
          <div class="step1">
            <el-form class="demo-ruleForm" ref="ruleForm" lable-position="top" :model="ruleForm">
              <!--ref-->
              <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name" size="large"></el-input>
              </el-form-item>
              <el-form-item lable="" prop="fenLei">
                <el-row style="height:35px;" type="flex" align="middle">
                  <el-col :span="3" style="width:90px;">
                    <div class="el-form-item__label">活动分类</div>
                  </el-col>
                  <el-col :span="2">
                    <el-button type="text" @click.prevent="dialogFormFenLeiVisible=true">设置</el-button>
                  </el-col>
                </el-row>
                <el-radio-group v-model="ruleForm.fenLei">
                  <el-radio v-for="item of ruleForm.fenLeis" :key="item.name" :label="item.name"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
            <el-dialog title="设置活动分类" :visible.sync="dialogFormFenLeiVisible">
              <el-form>
                <el-form-item>
                  <el-tag v-for="fenLei of ruleForm.fenLeis" :key="fenLei.name" type="primary" @close="handleClose(fenLei)" closable>{{fenLei.name}}</el-tag>
                </el-form-item>
              </el-form>
            </el-dialog>
            <el-form>
              <el-form-item>
                <el-row>
                  <div class="el-form-item__label">活动分类</div>
                </el-row>
                <el-row>
                  <el-col :span="2">
                    <el-tag v-for="tag in tags" :key="index" :closable="true" type="primary">{{tag.name}}</el-tag>
                  </el-col>
                  <el-col :span="3">
                    <el-button icon="el-icon-plus" size="small" type="primary" @click.native="showDialog" style="vertical-align: middle;"></el-button>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item>
                <transition name="fade">
                  <div class="el-form-item__error" v-show="tagsValid">{{ tagsError }}</div>
                </transition>
              </el-form-item>
              <el-form-item label="活动时间" style="width: 750px">
                <el-col :span="5">
                  <el-form-item prop="activeStartTimeDate">
                    <el-date-picker v-model="ruleForm.activeStartTimeDate" type="date" 
                    placeholder="活动日期开始"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="5">
                  <el-form-item prop="activeStartTimeTime">
                    <el-time-picker placeholder="请选择时间点" v-model="ruleForm.activeEndTimeTime"
                    :picker-options="{start: '00:00', step: '00:15', end: '23:45'}">
                    </el-time-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="1" style="text-align: center;">一</el-col>
                <el-col :span="5">
                  <el-form-item prop="activeEndTimeDate">
                    <el-date-picker v-model="activeEndTimeDate" type="date" placeholder="活动结束日期"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
            </el-form>
            <el-form>
              <el-form-item label="活动封面">
                 <el-upload action="http://jsonplaceholder.typicode.com/" type="drag" :multiple="true" :on-preview="handlePreview" :on-remove="handleRemove" :on-success="handleSuccess" :on-error="handleError">
                  <i class="el-icon-upload"></i>
                  <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2M</div>
                </el-upload>
              </el-form-item>
            </el-form>
          </div>
          <!-- 按钮组  上一步 下一步  发布活动 -->
          <el-button-group>
            <el-button @click.native.prevent="handlePreStep" :disabled="disabled" v-show="preStep" class="p-btn">上一步</el-button>
            <el-button type="primary" @click.native.prevent="handleNextStep" v-show="nextStep" class="p-btn">下一步</el-button>
            <el-button type="primary" class="p-btn">发布活动</el-button>
          </el-button-group>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  // import Elbutton from "@/components/Elbutton";
  // import ElButtonGroup from '@/components/ElButtonGroup';
  export default {
    name: "App",
    data() {
      return {
        disabled: false,
        isLoading: false,
        step: 2,
        disabled: false,
        preStep: true,
        nextStep: true,
        inputName: "活动",
        dialogFormFenLeiVisible: false,
        tags: [{ name: 'dd', type: '' },],
        ruleForm: {
          name: "",
          fenLeis: [
            {
              name: "未发布"
            },
            {
              name: "测试活动"
            },
            {
              name: "精彩活动"
            },
          ],
           activeStartTimeDate: '',
          activeStartTimeTime: '',
          activeEndTimeDate: '',
          activeEndTimeTime: '',
          fenLei: "测试活动",
          tags: [],
          tagsError: '未输入',
          tagsValid: false,
          activeStartTimeDate: [{required:true,message:'请选择活动开始日期',trigger:'change'}],
          activeStartTimeTime: [{required:true,message:'请选择活动开始时间',trigger:'change'}],
        }
      };
    },
    components: {
      // "el-button": Elbutton,
      // "el-button-group": ElButtonGroup
    },
    methods: {
      showDialog(){

      },
       doLoading() {
        console.log(414);
      },
      doSubmit(evt) {
        console.log(evt);
      },
      handlePreStep(evt) {
        console.log(evt);
        this.step--;
        this.goStep(this.step);
      },
      handleNextStep() {
        this.step++;
        this.goStep(this.step);
      },
      goStep(n) {
        switch (n) {
          case 1:
            this.preStep = false;
            this.nextStep = true;
            break;
          case 2:
          case 3:
            this.preStep = true;
            this.nextStep = true;
            break;
          case 4:
            this.preStep = true;
            this.nextStep = false;
            break;
        }
      },
      handleClose(fenLei) {
        this.dialogFormFenLeiVisible = false;
        console.log(fenLei);
        this.ruleForm.fenLeis.splice(this.ruleForm.fenLeis.indexOf(fenLei, 1));
      },

      mounted() {
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      }
    }
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    min-width: 1200px;
    margin: 0 auto;
    font-family: sans-serif;
  }

  header {
    z-index: 1000;
    min-width: 1200px;
    transform: all 0.5s ease;
    border-top: 4px solid #3091f2;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  }

  header.header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  header.el-menu-demo {
    padding-left: 300px !important;
  }

  main {
    margin-top: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 800px;
    border: solid 40px #e9ecf1;
    background-color: #fcfcfc;
  }

  main .main-left {
    text-align: center;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 200px;
    flex: 0 0 200px;
  }

  main .main-right {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background-color: #fff;
    padding: 50px 70px;
  }

  main .el-menu {
    background-color: transparent !important;
  }

  .p-btn {
    margin-right: 30px !important;
  }
</style>