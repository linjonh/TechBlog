# 开发调试 web 网页

# Hugo 开发 框架

```bash
#release build
HUGO_ENVIRONMENT=production hugo server
#或者
echo "pwd && GOMAXPROCS=$(nproc) HUGO_ENVIRONMENT=production hugo --gc --minify --templateMetrics --templateMetricsHints"
pwd && GOMAXPROCS=$(nproc) HUGO_ENVIRONMENT=production hugo --gc --minify --templateMetrics --templateMetricsHints
```