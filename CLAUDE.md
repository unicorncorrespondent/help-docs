# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **documentation restructuring project** for Baidu's Paddle Helix (螺旋桨) - an AI-powered bioinformatics platform for life sciences and drug discovery. The repository contains markdown help documentation being reorganized from a single source file into a structured multi-page format.

**Paddle Helix Platform Features:**
- Protein structure prediction (HelixFold3, HelixFold-S1)
- mRNA drug design (LinearFold, LinearPartition, HelixUTRDesign, LinearDesign)
- Small molecule drug screening and design (HelixADMET, HelixVS, HelixVS-Syn)

## Documentation Structure

```
B1-1-帮助文档页面内容/
├── files/                          # Documentation pages (main content)
│   ├── A-00-Welcome.md             # Product introduction
│   ├── B-00-QuickStart.md          # Quick start guide
│   ├── C-00-00-ProteinMain.md      # Protein module main page
│   ├── C-01-*                      # HelixFold3/HelixFold-S1 structure prediction (10 pages)
│   ├── C-02-*                      # HelixDesign-Binder (小蛋白设计, 9 pages)
│   ├── C-03-*                      # HelixDesign-Antibody (抗体设计, 5 pages)
│   ├── C-10-*                      # Case tutorial (3 pages)
│   ├── D-00-00-ChemicalMain.md     # Small molecule module main page
│   ├── D-01-*                      # HelixADMET (ADMET prediction, 4 pages)
│   ├── D-02-*                      # HelixVS (virtual screening, 7 pages)
│   ├── D-03-*                      # MMGBSA (binding free energy, 4 pages)
│   ├── D-04-*                      # HelixVS-Syn (分子设计, 6 pages)
│   ├── E-00-00-mRNAMain.md         # mRNA module main page
│   ├── E-02-*                      # LinearFold (3 pages)
│   ├── E-03-*                      # LinearPartition (3 pages)
│   ├── E-04-*                      # HelixUTRDesign (3 pages)
│   ├── E-05-*                      # LinearDesign (4 pages)
│   ├── F-01-*                      # FAQ
│   ├── F-02-*                      # Account & pricing
│   ├── F-03-*                      # Updates
│   └── F-04-*                      # Contact us
├── images/                         # Documentation images
├── ref/                            # Reference files
│   ├── reference.md                # Source content from HelpDoc-20260126.md
│   └── Instruction.xlsx            # Transformation instructions
└── CLAUDE.md                       # This file

../preview-docs.sh                  # Preview script (in parent directory)
```

**Documentation Sections:**
- **A-series**: Product introduction
- **B-series**: Quick start guide
- **C-series**: HelixFold3/HelixFold-S1 protein structure prediction, HelixDesign-Binder, HelixDesign-Antibody
- **D-series**: HelixADMET (ADMET prediction), HelixVS (virtual screening), MMGBSA, HelixVS-Syn (molecular design)
- **E-series**: mRNA tools (LinearFold, LinearPartition, HelixUTRDesign, LinearDesign)
- **F-series**: Account management, pricing, FAQ, updates

## Standard Page Format

All documentation pages must follow this structure:

```markdown
# [Title]

>[Subtitle - what this page aims to do in 1-2 short sentences]

[Introduction paragraph: big picture context - what is this topic and why does it matter]

## TLDR

- [Key point 1]
- [Key point 2]
- [Key point 3]
- [Key point 4 - if needed]

[Rest of page content...]

---

上一页/下一页 Navigation

---

## 原始来源

**Source tracking information:**
- Source document: `../../../../../../../../02-Input/files/HelpDoc-20260126.md`
- Original section anchor ID and line numbers

**源文档完整路径**: `../../../../../../../../02-Input/files/HelpDoc-20260126.md`

| 章节标题 | 源文档锚点 ID | 行号范围 |
|----------|---------------|----------|
| [章节名] | [锚点ID]      | [行号]   |
```

## Navigation Format Requirements

### Navigation Section (Required)

At the end of each page (before "原始来源"), include:

```markdown
---

上一步：[Page Title](./Filename.md)
下一步：[Page Title](./Filename.md)

---

OR for end of section:

---

上一步：[Previous Page Title](./Filename.md)
下一步：[返回模块概述](../D-00-00-ChemicalMain.md)

---

OR for main page (X-00-00):

---

下一步：[First Page Title](./C-01-01-ChoosingModel.md)

---

OR for last page:

---

上一步：[Previous Page Title](./C-01-09-DownloadResults.md)
下一步：[返回结构预测概述](./C-01-00-StructurePredictionOverview.md)
```

### Navigation Rules

1. **Cross-module navigation**: Use `../X-00-00-ModuleMain.md` to navigate between modules
2. **Same-module navigation**: Use `./Filename.md` within the same module
3. **Filename convention**: Use full descriptive filenames (e.g., `D-04-00-MolecularDesignOverview.md`, NOT `D-04-00.md`)
4. **Module Main pages**: Always link back to the module main page (e.g., `D-00-00-ChemicalMain.md`)

## Content Guidelines

- **Audience**: Biology graduate students (not CS experts)
- **Style**: Reader-oriented, explain "what" and "why" before "how"
- **Completeness**: Use full sentences in introductions, not fragment lists
- **TLDR integration**: Only add TLDR section for pages with substantive content; short pages should have TLDR merged into main content
- **Focus**: One topic per page; move FAQs to dedicated FAQ files
- **Links**: Use complete text links, not bare URLs

## Source Tracking Format

Each page must include a "原始来源" section at the end:

```markdown
## 原始来源

本文档内容整理自 PaddleHelix 帮助文档的 [章节名] 章节。以下是原始文档中的章节定位信息，供您追溯和参考：

| 章节标题 | 源文档锚点 ID | 行号范围 |
|----------|---------------|----------|
| [章节名] | [锚点ID]      | [行号]   |

**源文档完整路径**: `../../../../../../../../02-Input/files/HelpDoc-20260126.md`
```

## Key Transformation Rules

From `ref/prompt.txt` and `Instruction.xlsx`:

1. **Navigation Format**: Replace "## 了解更多" or "## 相关链接" sections with "上一页/下一页" navigation format
2. **Filename Convention**: Use descriptive filenames (e.g., `D-04-00-MolecularDesignOverview.md`, `C-01-07-OtherParameters.md`)
3. **Module Structure**: Each module (C, D, E, F) has a main page (X-00-00-ModuleMain.md) with overview and links to sub-pages
4. **Cross-module Navigation**: Use `../` prefix when navigating between modules
5. **Source Preservation**: Include detailed source tracking in "原始来源" section
6. **FAQ Consolidation**: Move scattered questions into dedicated FAQ files (e.g., `C-01-10-FAQ.md`)
7. **TLDR Integration**: For short pages (< 15 lines), integrate TLDR content into the main introduction

## Fact-Checking Process

When verifying documentation accuracy:

1. Cross-reference with `ref/reference.md` for source content
2. Check anchor IDs in source: `<a id="xxx">` format
3. Verify line number ranges match actual content
4. Update "原始来源" section if anchor IDs are incorrect
5. Document any suspected issues for human review

### Known Corrections Made

- **C-01-07-OtherParameters.md**: Changed anchor from `d2e8f41` to `927b1a6` (actual "其他计算参数" section)
- **D-04-00-MolecularDesignOverview.md**: Changed second anchor from `4f684ec` to `12578d0` ("使用说明" section)
- **D-04-02-BindingSite.md**: Changed anchor from `12578d0` to `4f684ec` (content under "数据录入")
- **D-04-03-Scaffold.md**: Verified anchor `4f684ec` is correct

## Preview Script

A preview script is available for testing documentation:

**Location:** `../preview-docs.sh`

**Usage:**
```bash
cd "/Users/wangyuanjin/Desktop/Frankie/Archive/03 Career/百度-Paddle Helix-内容运营/03-Output/Doc/B1-文档与教程结构重构"
bash preview-docs.sh
```

**Features:**
- Starts HTTP server on port 4000
- Copies latest docs from `B1-1-帮助文档页面内容/files`
- Renders markdown with styling
- Auto-cleanup on exit (Ctrl+C)

## Common Tasks

When updating documentation:

1. **Cross-reference**: Use `ref/reference.md` for source content verification
2. **Check instructions**: Review `ref/Instruction.xlsx` for latest transformation guidelines
3. **Verify filenames**: Use `ls` to confirm filenames before creating links
4. **Update main pages**: When adding new sub-pages, update the module main page
5. **Verify images**: Ensure images in `images/` are properly referenced
6. **Fact-check**: Run anchor ID verification against reference.md

## Module Main Pages

Each module has a main page that provides overview and navigation:

- `C-00-00-ProteinMain.md` - Protein/peptite drug development
- `D-00-00-ChemicalMain.md` - Small molecule drug development
- `E-00-00-mRNAMain.md` - mRNA drug development

## Quick Reference: Document Naming Convention

| Pattern | Example | Description |
|---------|---------|-------------|
| `X-00-00-Name.md` | `D-04-00-MolecularDesignOverview.md` | Module overview page |
| `X-01-01-Name.md` | `C-01-01-ChoosingModel.md` | First sub-page |
| `X-01-10-FAQ.md` | `C-01-10-FAQ.md` | FAQ page |
| `X-10-00-Tutorial.md` | `C-10-00-CaseTutorial.md` | Tutorial main page |
