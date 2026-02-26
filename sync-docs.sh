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

# Safer sync flow:
# 1) copy/update source files first
# 2) remove stale files that are no longer in source
# This avoids a "delete all then copy" window if the script is interrupted.
find "$DOCS_SOURCE" -name "*.md" -not -name "README.md" -exec cp {} "$TARGET_DIR/" \;

source_list="$(mktemp)"
target_list="$(mktemp)"
find "$DOCS_SOURCE" -maxdepth 1 -name "*.md" -not -name "README.md" -exec basename {} \; | sort > "$source_list"
find "$TARGET_DIR" -maxdepth 1 -name "*.md" -exec basename {} \; | sort > "$target_list"

while IFS= read -r stale; do
  rm -f "$TARGET_DIR/$stale"
done < <(comm -13 "$source_list" "$target_list")

rm -f "$source_list" "$target_list"

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
