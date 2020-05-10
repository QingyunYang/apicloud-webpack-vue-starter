# apicloud-webpack-vue-starter

[apicloud](https://www.apicloud.com/)是一个混合app开发平台，有丰富的原生模块，可以云编译打包android和iOS应用，给web前端同学提供了快速高效的开发能力。随着前端开发体验的提升，基于webpack的工程化开发成为了日常开发形式，同样的，我们可以将两者结合起来，打造一个顺手的项目框架。

我们的最终目标：

- 一套代码，完美运行于h5，android和iOS端

### Features

- 使用受欢迎的vue框架
- 工程化开发，可以使用任意npm包
- 多页面同步vuex状态仓库
- 使用chrome调试业务代码
- 脱离apicloud-studio真机调试
- 多环境开发
- 集成移动端调试工具eruda

### Getting Started

```bash
# 克隆到本地
git clone git@github.com:QingyunYang/apicloud-webpack-vue-starter.git myproject

# 进入项目目录
cd myproject

# 安装依赖
yarn
```

### 真机调试

```bash
# 开启wifi同步服务
yarn wifi

# 同步代码
yarn sync

# 开启日志监听
yarn log
```

