if [[ -e ".git" ]]; then
    echo "目录已存在，直接更新"
    git checkout hugo-blog
    git pull github hugo-blog
    git log -n2
else
    echo "目录不存在，开始克隆"
    git clone git@github.com:linjonh/TechBlog.git .
    git checkout hugo-blog
fi
pwd && cd themes
if [[ -e "loveIt/.git" ]]; then
    echo "目录已存在，直接更新"
    cd loveIt && git pull
    git log -n2 && cd ..
else
    echo "目录不存在，开始克隆"
    git clone git@github.com:linjonh/hugo-theme-loveIt.git loveIt
fi
pwd && cd .. && pwd
git config --global --add safe.directory $(pwd)
git config --global --add safe.directory $(pwd)/themes/loveIt
git status

echo "开始构建"
echo "pwd && GOMAXPROCS=$(nproc) HUGO_ENVIRONMENT=production hugo --gc --minify --templateMetrics --templateMetricsHints"
pwd && GOMAXPROCS=$(nproc) HUGO_ENVIRONMENT=production hugo --gc --minify --templateMetrics --templateMetricsHints
