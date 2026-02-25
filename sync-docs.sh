#!/bin/bash

# Sync markdown docs from ./files into Docusaurus ./paddlehelix-docs/docs
# Usage: ./sync-docs.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" 2>/dev/null && pwd)"
DOCS_SOURCE="$SCRIPT_DIR/files"
DOCUSAURUS_DIR="$SCRIPT_DIR/paddlehelix-docs"
TARGET_DIR="$DOCUSAURUS_DIR/docs"

if [ ! -d "$DOCS_SOURCE" ]; then
  echo "Error: docs source directory does not exist: $DOCS_SOURCE" >&2
  exit 1
fi

if [ ! -d "$DOCUSAURUS_DIR" ]; then
  echo "Error: Docusaurus directory does not exist: $DOCUSAURUS_DIR" >&2
  exit 1
fi

rm -f "$TARGET_DIR"/*.md

find "$DOCS_SOURCE" -name "*.md" -not -name "README.md" -exec cp {} "$TARGET_DIR/" \;

count="$(find "$TARGET_DIR" -maxdepth 1 -name "*.md" | wc -l | tr -d ' ')"
echo "Synced $count markdown files to $TARGET_DIR"

cd "$TARGET_DIR"
for f in *.md; do
  # Remove "## 原始来源" section to the next blank line.
  perl -0pi -e 's/\n## 原始来源.*?\n\s*\n/\n\n/sg' "$f"
  # Normalize relative paths and drop ".md" suffix in links.
  perl -pi -e 's|\.\./||g; s|\.md\b||g' "$f"
done

echo "Cleaned markdown metadata and links"
