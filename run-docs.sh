#!/bin/bash

# PaddleHelix 文档预览启动脚本 (Docusaurus版本)
# 用法: ./run-docs.sh
# 自动同步最新文档并启动预览

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" 2>/dev/null && pwd)"
DOCUSARAUS_DIR="$SCRIPT_DIR/paddlehelix-docs"

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

if [ ! -d "$DOCUSARAUS_DIR" ]; then
    echo -e "${RED}❌ 错误: Docusaurus目录不存在: $DOCUSARAUS_DIR${NC}"
    exit 1
fi

echo -e "${GREEN}🔄 同步最新文档...${NC}"
"$SCRIPT_DIR/sync-docs.sh"

echo ""
echo -e "${GREEN}🚀 启动文档预览 (Docusaurus)...${NC}"
echo -e "${YELLOW}📍 访问地址: http://localhost:3000${NC}"
echo ""
echo "按 Ctrl+C 停止服务器"
echo ""

cd "$DOCUSARAUS_DIR"
npm start
