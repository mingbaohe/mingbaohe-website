# 铭宝和科技官网部署指南

## 方案一：使用 Vercel 部署（推荐）

1. 注册 Vercel 账号
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录或注册新账号

2. 部署步骤
   - 点击 "Import Project"
   - 选择 "Import Git Repository"
   - 授权并选择当前项目仓库
   - 点击 "Deploy"
   - 等待自动部署完成

3. 域名设置
   - 在 Vercel 控制台中选择项目
   - 进入 "Settings" -> "Domains"
   - 添加您的自定义域名
   - 按照提示配置 DNS 解析

## 方案二：使用传统虚拟主机部署

1. 构建项目
```bash
# 安装依赖
npm install

# 构建生产版本
npm run build

# 导出静态文件
npm run export
```

2. 上传文件
   - 将 `out` 目录下的所有文件
   - 上传到虚拟主机的根目录

3. 域名设置
   - 在域名服务商处添加解析记录
   - 将域名指向主机 IP 地址

## 方案三：使用云服务器部署

1. 服务器准备
   - 购买云服务器（阿里云/腾讯云等）
   - 安装 Node.js 环境
   - 安装 Nginx 服务器

2. 部署步骤
```bash
# 在服务器上安装 PM2
npm install -g pm2

# 克隆代码
git clone [项目地址]

# 安装依赖
npm install

# 构建项目
npm run build

# 使用 PM2 启动
pm2 start npm --name "mingbaohe" -- start
```

3. Nginx 配置
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 注意事项

1. 域名备案
   - 如果使用国内服务器，域名需要完成备案
   - 备案过程一般需要 5-20 个工作日

2. 安全配置
   - 配置服务器防火墙
   - 启用 HTTPS
   - 定期更新系统和依赖包

3. 性能优化
   - 启用 Gzip 压缩
   - 配置浏览器缓存
   - 使用 CDN 加速

4. 维护建议
   - 定期备份数据
   - 监控服务器状态
   - 保存部署文档和配置文件

## 技术支持

如需技术支持，请联系：
- 邮箱：448274855@qq.com
- 电话：13544287865 