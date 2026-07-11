# Her Lib 她的书库

> 为刚入门女性主义的读者打造的系统化书籍索引网站

## 🌐 网站地址

部署后：`https://herlib.netlify.app`（可绑定自定义域名）

## 📂 文件说明

```
herlib.site/
├── index.html          # 首页 — 精选推荐、栏目导航、榜单、年度计划
├── category.html       # 分类列表页 — 6行筛选、搜索、卡片网格
├── book.html           # 书籍详情页 — 导读、避雷、金句、阅读链接
├── submit.html         # 读者投稿页 — 含草稿保存、URL校验
├── login.html          # 登录/注册页
├── profile.html        # 个人中心 — 置顶/收藏/阅读清单/语录
├── admin.html          # 管理后台 — 统计/CSV导出/审核
├── disclaimer.html     # 免责说明与建站初衷
├── 404.html            # 友好404页面
├── css/style.css       # 全站样式（含深色模式/极简模式/响应式）
├── js/
│   ├── data.js         # 100本书籍数据 ⭐ 日常维护主要修改此文件
│   ├── supabase.js     # Supabase 初始化（需替换项目URL和Key）
│   ├── main.js         # 首页交互逻辑
│   ├── category.js     # 分类页筛选/搜索/排序
│   └── book.js         # 详情页渲染/操作
├── images/logo.svg     # Her Lib Logo
├── manifest.json       # PWA 配置
├── sw.js               # Service Worker 离线缓存
├── robots.txt          # SEO 爬虫规则
└── README.md           # 本文件
```

## 🚀 部署指南（Netlify 免费部署）

### 第1步：注册 Netlify
访问 [netlify.com](https://www.netlify.com/) → 用 GitHub 账号注册

### 第2步：上传文件
1. 把整个 `herlib.site` 文件夹拖到 Netlify 部署页面
2. 或连接 GitHub 仓库自动部署

### 第3步：配置 Supabase
1. 注册 [supabase.com](https://supabase.com/) → 创建项目
2. 在 Supabase SQL Editor 中执行本 README 末尾的 SQL
3. 复制项目 URL 和 anon key
4. 替换 `js/supabase.js` 中的 `SUPABASE_URL` 和 `SUPABASE_ANON_KEY`

### 第4步：完成
网站自动上线！以后修改文件只需重新上传或 git push。

## 📝 日常维护

### 添加新书
编辑 `js/data.js`，在 `books` 数组中新增一条记录：
```javascript
{
  id: "新ID", title: "书名", author: "作者",
  category: "thought", categoryLabel: "思潮漫步",
  level: "beginner", levelLabel: "入门",
  tags: ["标签1", "标签2", "标签3"],
  // ... 其余字段参考已有书籍
}
```

### 修改书籍
直接编辑 `js/data.js` 中对应书籍的字段即可。

### 批量导入
1. 管理后台 → 下载空白CSV模板
2. 填好后发给 Claude 帮你生成 data.js 格式
3. 替换 data.js 中的 books 数组

## 🔧 技术栈

- 纯 HTML + CSS + Vanilla JS（零构建工具）
- Supabase（用户认证 + 数据库）
- Netlify（免费托管）
- PWA（可安装到桌面）

## 📋 Supabase 数据库初始化 SQL

在 Supabase 后台 SQL Editor 中执行：

```sql
CREATE TABLE submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL, author TEXT NOT NULL,
  category TEXT NOT NULL, level TEXT NOT NULL,
  tags TEXT[], region TEXT NOT NULL, genre TEXT NOT NULL,
  guide TEXT NOT NULL, cover_url TEXT,
  trigger_warning TEXT NOT NULL, read_link TEXT,
  submitter_name TEXT, submitter_email TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  book_id TEXT NOT NULL, user_id UUID REFERENCES auth.users(id),
  content TEXT NOT NULL, rating INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  type TEXT NOT NULL, message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE user_collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  book_id TEXT NOT NULL, is_top BOOLEAN DEFAULT false,
  read_status TEXT DEFAULT 'unread',
  saved_quotes JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS 安全策略
ALTER TABLE user_collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own collections" ON user_collections FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Anyone can read comments" ON comments FOR SELECT USING (true);
CREATE POLICY "Users manage own comments" ON comments FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own submissions" ON submissions FOR ALL USING (auth.uid() = (SELECT id FROM auth.users WHERE email = submitter_email));
CREATE POLICY "Users manage own feedback" ON feedback FOR ALL USING (auth.uid() = user_id);
```

---

© 2026 Her Lib 她的书库 · 为女性主义阅读而建
