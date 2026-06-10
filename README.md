# 灵犀CMS

基于 Vue 3 全家桶 + Element Plus 构建的轻量级企业内容管理系统，支持文章发布、分类管理、富文本编辑、用户权限控制等功能。

## 技术栈

- **前端框架**：Vue 3（Composition API + `<script setup>`）
- **构建工具**：Vite
- **UI 组件库**：Element Plus
- **状态管理**：Pinia（持久化插件）
- **路由管理**：Vue Router（History 模式 + 导航守卫）
- **HTTP 请求**：Axios（拦截器统一处理 token、异常、401）
- **富文本编辑器**：Quill（@vueup/vue-quill）
- **代码规范**：ESLint + @stylistic/eslint-plugin

## 功能模块

| 模块 | 功能 |
|------|------|
| 用户认证 | 注册 / 登录 / JWT Token 鉴权 / 401 自动跳转 |
| 文章管理 | 列表分页 / 筛选搜索 / 发布草稿 / 封面图上传 |
| 分类管理 | 分类 CRUD / 弹窗表单校验 |
| 个人中心 | 修改昵称邮箱 / 更换头像 / 重置密码 |
| 权限控制 | 路由守卫 + 请求拦截器双重校验 |

## 项目结构

```
src/
├── api/          # 接口封装
├── assets/       # 静态资源（图片、全局样式）
├── router/       # 路由配置 + 导航守卫
├── stores/       # Pinia 状态管理
├── utils/        # 工具函数（axios 实例、时间格式化）
└── views/        # 页面组件
    ├── login/    # 登录注册
    ├── layout/   # 布局框架（侧边栏 + 头部 + 底部）
    ├── article/  # 文章管理 + 分类管理
    └── user/     # 个人中心
```

## 快速开始

```sh
pnpm install
pnpm dev
```
