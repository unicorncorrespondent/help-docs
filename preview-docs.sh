#!/bin/bash

# PaddleHelix 文档预览脚本
# 用法: ./preview-docs.sh [文档目录路径]
# 默认路径: 当前目录下的 B1-1-帮助文档页面内容/files 文件夹

# 配置
PORT=4000
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" 2>/dev/null || pwd)"
DOCS_DIR="${1:-$SCRIPT_DIR/B1-1-帮助文档页面内容/files}"
TEMP_DIR=$(mktemp -d)
PREVIEW_SERVER="$TEMP_DIR/server.js"

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 启动文档预览...${NC}"
echo -e "${YELLOW}📂 文档目录: $DOCS_DIR${NC}"
echo -e "${YELLOW}🌐 访问地址: http://localhost:$PORT${NC}"
echo ""

# 检查文档目录是否存在
if [ ! -d "$DOCS_DIR" ]; then
    echo -e "${RED}❌ 错误: 文档目录不存在: $DOCS_DIR${NC}"
    exit 1
fi

# 创建临时预览目录结构
PREVIEW_DIR="$TEMP_DIR/docs"
mkdir -p "$PREVIEW_DIR"

# 复制文档（排除 README.md）
echo "📋 复制文档文件..."
find "$DOCS_DIR" -name "*.md" -not -name "README.md" -exec cp {} "$PREVIEW_DIR/" \;

# 创建预览服务器
cat > "$PREVIEW_SERVER" << 'SERVERJS'
const http = require('http');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const PORT = 4000;
const POSTS_DIR = path.join(__dirname, 'docs');

// Configure marked
marked.use({
    gfm: true,
    breaks: true
});

function convertMarkdown(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return marked.parse(content);
}

function generateIndex() {
    const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));

    // Sort files
    files.sort();

    let indexHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>PaddleHelix 帮助文档</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px; line-height: 1.6; background: #f5f5f5; }
        h1 { color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px; }
        h2 { color: #555; margin-top: 30px; }
        a { color: #0066cc; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .file-list { list-style: none; padding: 0; }
        .file-list li { padding: 8px 0; border-bottom: 1px solid #e0e0e0; }
        .back-link { margin-bottom: 20px; }
        .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .hint { color: #888; font-size: 0.9em; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="card">
        <h1>📚 PaddleHelix 帮助文档</h1>
        <p>点击链接查看文档页面：</p>
        <ul class="file-list">
`;

    files.forEach(file => {
        const name = file.replace('.md', '');
        indexHtml += `            <li><a href="/${name}">${name}</a></li>\n`;
    });

    indexHtml += `        </ul>
        <p class="hint">💡 提示：按 Ctrl+C 停止服务器</p>
    </div>
</body>
</html>`;

    return indexHtml;
}

function generatePage(fileName) {
    const filePath = path.join(POSTS_DIR, fileName + '.md');
    if (!fs.existsSync(filePath)) {
        return null;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const htmlContent = marked.parse(content);

    // Remove the "原始来源" section
    const cleanContent = htmlContent.split(/##\s*原始来源/)[0];

    const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${fileName}</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px; line-height: 1.7; color: #333; background: #f5f5f5; }
        .container { background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        h1 { color: #1a1a1a; border-bottom: 2px solid #0066cc; padding-bottom: 10px; margin-top: 0; }
        h2 { color: #333; margin-top: 30px; border-bottom: 1px solid #eee; padding-bottom: 8px; }
        h3 { color: #555; margin-top: 24px; }
        blockquote { border-left: 4px solid #0066cc; margin: 20px 0; padding: 10px 20px; background: #f8f9fa; color: #555; }
        table { border-collapse: collapse; width: 100%; margin: 20px 0; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background: #f5f5f5; }
        code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-family: "SF Mono", Consolas, monospace; }
        pre { background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; }
        img { max-width: 100%; height: auto; }
        a { color: #0066cc; }
        .back-link { margin-bottom: 20px; padding: 10px; background: #f5f5f5; border-radius: 5px; display: inline-block; }
        .nav-links { display: flex; justify-content: space-between; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; }
    </style>
</head>
<body>
    <div class="container">
        <div class="back-link">
            <a href="/">← 返回目录</a>
        </div>
        ${cleanContent}
    </div>
</body>
</html>`;

    return html;
}

const server = http.createServer((req, res) => {
    let url = req.url;
    url = url.split('?')[0];

    if (url === '/' || url === '/index.html' || url === '/index.htm') {
        const indexHtml = generateIndex();
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(indexHtml);
    } else if (url.endsWith('/')) {
        const fileName = path.basename(url, '/');
        const pageHtml = generatePage(fileName);
        if (pageHtml) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(pageHtml);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('<h1>404</h1><p>File not found</p>');
        }
    } else {
        const fileName = path.basename(url);
        const pageHtml = generatePage(fileName);
        if (pageHtml) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(pageHtml);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('<h1>404</h1><p>File not found</p>');
        }
    }
});

// Handle shutdown
process.on('SIGINT', () => {
    console.log('\n\n🛑 正在停止服务器...');
    server.close(() => {
        console.log('✅ 服务器已停止');
        process.exit(0);
    });
});

server.listen(PORT, () => {
    console.log(`\n${'='.repeat(50)}`);
    console.log(`🌐 预览服务器运行中`);
    console.log(`📍 访问: http://localhost:${PORT}`);
    console.log(`${'='.repeat(50)}\n`);
});
SERVERJS

# 安装依赖并启动
echo "📦 安装依赖..."
cd "$TEMP_DIR"
npm init -y > /dev/null 2>&1
npm install marked --silent

# 启动服务器
echo ""
node "$PREVIEW_SERVER"
