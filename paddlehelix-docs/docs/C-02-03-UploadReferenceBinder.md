# 设置参考 Binder

<div class="doc-page-type doc-page-type--input"><span class="doc-page-type__icon">🧪</span><span>分类：输入</span></div>


**上传并配置参考 Binder 结构（仅基于参考模式）**

如果您选择使用基于参考 Binder 的设计模式，那么您需要上传并正确配置参考 Binder 结构。参考 Binder 是模型进行优化设计的起点，其结构质量和序列特征将直接影响最终设计结果。本页面将详细介绍如何上传参考 Binder 结构、选择 Binder 链以及设置 motif 来保留关键功能区域。


## 上传 Binder 结构

基于参考 Binder 模式支持三种结构上传方式：从复合物结构文件直接导入（推荐方式，因为模型可以直接学习靶点与 Binder 之间的空间构象关系）、通过 PDB ID 搜索数据库以及上传本地 .cif 格式文件。

### 方式一：从靶点结构文件导入（推荐）

:::tip
如果您在第一步上传的是**包含靶点和 Binder 的复合体结构文件**，建议使用此方式。
:::

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1-%E8%BE%93%E5%85%A5-%E4%B8%8A%E4%BC%A0binder%E9%93%BE-%E4%B8%AD%E6%96%87-5ec063c3.jpg" style="zoom:100%;" />

**优点**：模型可以直接学习靶点与 Binder 之间的空间构象关系，设计结果更稳定可靠。

### 方式二：搜索 PDB 数据库

1. 输入 4 位 PDB ID
2. 从下拉列表选择结构
3. 系统自动加载并预览

### 方式三：上传 .cif 文件

点击"文件上传"按钮，选择 `.cif` 格式文件。

## 选择 Binder 链

结构加载完成后，从右侧链列表中选择 **1 条链作为 Binder 链**。

:::caution 注意
Binder 的总长度需满足 **3–250 个氨基酸**的限制。

如果链长度不在此范围内，需要：
- 通过设置 motif 保留关键片段
- 或重新选择其他满足要求的链
:::

## 设置 Motif

Motif 是 Binder 中需要**保持不变**的关键结构或功能区域。

### 操作步骤

1. 打开 motif 开关，系统显示完整 Binder 序列
2. 点击起始和结束氨基酸，选中连续区域作为 motif
3. **最多可设置 5 个 motif**

您可以对 Motif 进行约束，以下是三种可选的约束方式：
- 保证结构不变（默认）
- 保证序列不变 
- 结构和序列都不变


## 调整连接区域长度

Motif 之间的区域称为**motif 连接区域**， 包括不同 motif 之间的连接片段，以及motif 前端和末端的非 motif 区域。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1-%E8%BE%93%E5%85%A5-%E8%AE%BE%E7%BD%AEmotif%E8%BF%9E%E6%8E%A5-%E4%B8%AD%E6%96%87-5afc1648.jpg" style="zoom:100%;" />

:::tip
motif 连接区域的长度默认与参考 Binder 中保持一致，如需调整，您可以点击 **铅笔样式的编辑按钮**，为每个连接区域分别设置长度范围。系统会根据 **motif + motif 连接区域** 自动计算 Binder 的总长度范围。具体长度设置建议见[设计参数](./C-02-04-DesignParameters)
:::

:::caution 注意
最终 Binder 总长度必须满足 **3–250 个氨基酸**的限制。
:::
