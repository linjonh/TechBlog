# 开发调试 web 网页

## 更新checkout主题仓库

```bash
git submodule update --init --recursive
```

## Hugo 开发 框架

```bash
#release build
HUGO_ENVIRONMENT=production hugo server
#或者
echo "pwd && GOMAXPROCS=$(nproc) HUGO_ENVIRONMENT=production hugo --gc --minify --templateMetrics --templateMetricsHints"
pwd && GOMAXPROCS=$(nproc) HUGO_ENVIRONMENT=production hugo --gc --minify --templateMetrics --templateMetricsHints
```

## 部署firebase hosting
配置firebase.json

```json
{
  "hosting": {
    "site": "tech-blogs",

    "public": "public",
    ...
  }
}
```
```bash
firebase deploy --only hosting:tech-blogs
```