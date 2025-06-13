# React + Vite 前端项目练习 - Windsurf Prompt V1

## 项目目标
创建一个只包含前端的项目，使用 React + Vite 作为框架，要求支持本地开发预览，完成后可以部署到 Netlify 进行线上访问。  
该项目用于学习和练习 Netlify 的部署流程，不需要后端功能。

## 功能模块与分工
1. 前端框架（React + Vite）
   - 使用 Vite 快速初始化 React 应用。
   - 使用 TypeScript 或 JavaScript 皆可（推荐 TypeScript）。
   - 页面包含一个简单欢迎界面，显示“Hello Netlify!”。
   - 页面中可以加一个按钮，点击后弹出 Alert，验证 JS 交互是否正常。

2. 本地开发
   - 支持 `npm run dev` 本地开发预览，默认端口为 `5173`（Vite 默认端口）。
   - 支持 `npm run build` 生成生产版本。

3. 部署到 Netlify
   - 配置 Netlify 部署，支持一键发布。
   - 配置 Netlify 的 Build Command 为 `npm run build`。
   - 配置 Publish Directory 为 `dist`。
   - 本地需要先测试部署效果，确认页面能正常访问后再上线。

4. 配置文件
   - `.gitignore` 配置 Node.js / Vite / Netlify 不需要提交的文件。
   - `README.md` 说明本地开发和部署步骤。
   - 可选：添加 `netlify.toml` 配置文件，提前定义 Netlify 部署行为（非必需，但可以作为进阶学习）。

## 技术约束
- 前端框架：React + Vite
- 语言版本：Node.js >= 18，推荐 20 以上
- 包管理工具：npm（可选支持 pnpm / yarn）
- 无需后端，纯静态前端项目
- 本地开发必须可用 `npm run dev` 启动
- 部署目标平台为 Netlify，使用个人账号
- **必须通过 Vite 进行构建，不能直接用 React 脚手架（CRA）**
- 需要生成 `.gitignore`，忽略 `node_modules` 和 `dist` 等无关文件

## 本地开发和部署流程（写入 README.md）
1. 安装依赖：
   ```bash
   npm install
   ```
2. 本地启动：
   ```bash
   npm run dev
   ```
   浏览器访问 `http://localhost:5173`。

3. 生成生产版本：
   ```bash
   npm run build
   ```

4. 部署到 Netlify：
   - 将项目推送到 GitHub。
   - 在 Netlify 连接 GitHub 仓库。
   - 配置 Build Command 为 `npm run build`。
   - 配置 Publish Directory 为 `dist`。
   - 部署后访问 Netlify 分配的 URL，检查页面显示是否正常。

## 测试与部署建议
- 本地部署成功后，再进行 Netlify 部署，确保流程顺畅。
- 可以尝试修改页面内容、重新构建并部署，确认部署流程熟练掌握。
- 推荐尝试使用 `netlify-cli` 工具，支持本地模拟部署流程（可选进阶）。

## 备注
- 该项目主要目的是练习 Netlify 部署流程，页面功能保持简单即可。
- 可以作为未来 React/Vite 项目的基础模板复用。