<template>
  <el-row type="flex" class="row-bg" justify="center" align="middle">
    <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
      <el-form
        ref="loginForm"
        :model="form"
        label-width="80px"
        label-position="top"
        class="LoginFrom"
        :rules="rules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
// 点击登录后发送ajax，下载axios,导入
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          { min: 5, max: 12, message: "长度在 5 到 12 个字符", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
            url: "http://localhost:8888/api/private/v1/login",
            method: "post",
            data: this.form
          }).then(({ data: { data, meta } }) => {
            // console.log(res);
            // console.log(data, meta);
            // if (res.data.meta.status == 200) {
            //   console.log(res.data.meta.msg);
            // }
            if (meta.status == 200) {
              // 登陆成功后服务器会返回一个token
              // 我们需要将这个token保存到本地
              // 保存到localstorage中就可以
              localStorage.setItem("token", data.token);
              this.$router.push("/home");
              // console.log(11);
            }
          });
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
.row-bg {
  height: 100%;
  background-color: #2d434c;
}
.LoginFrom {
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 10px;
  min-width: 400px;
}
</style>