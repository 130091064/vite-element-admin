<template>
  <div class="vi-container">
    <el-container class="login">
      <el-header class="header"></el-header>
      <el-main class="content">
        <div class="form">
          <div class="title">自动化管理平台</div>
          <el-form
            ref="loginFormRef"
            :model="loginForm"
            :rules="rules"
            label-width="90px"
            :size="formSize"
          >
            <el-form-item label="用户名" prop="name">
              <el-input v-model="loginForm.name" :prefix-icon="User" placeholder="用户名" />
            </el-form-item>

            <el-form-item label="密码" prop="password">
              <el-input v-model="loginForm.password" show-password type="password" :prefix-icon="Lock" placeholder="密码" />
            </el-form-item>
            <el-form-item class="control">
              <el-button type="primary" size="large" @click="submitForm(loginFormRef)">立即登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
      <el-footer class="footer"></el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'

const formSize = ref('large')
const loginFormRef = ref<FormInstance>()
const loginForm = reactive({
  name: '',
  password: '',
})

const rules = reactive({
  name: [
    { required: true, message: '请输入用户名' },
  ],
  password: [
    { required: true, message: '请输入密码' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>

<style lang="less" scoped>
.login {
  .header,
  .footer {
    background: #fff;
  }
  .content {
    height: calc(100vh - 120px);
    background: yellowgreen;
    position: relative;
    .form {
      width: 420px;
      height: 300px;
      background: #fff;
      padding: 0 30px 16px 10px;
      position: absolute;
      right: 100px;
      top: 50%;
      transform: translateY(-50%);
      .title {
        height: 80px;
        line-height: 80px;
        text-align: center;
        font-size: 24px;
      }
      .control {
        margin-top: 60px;
        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>