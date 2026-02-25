# 输入靶点数据

**上传并配置靶蛋白结构**

在使用 HelixDesign-Binder 进行 Binder 设计之前，您需要首先上传并配置目标蛋白的结构数据。靶蛋白的结构数据是整个设计任务的输入基础，系统将根据靶蛋白的三维结构来生成能够特异性结合的 Binder 分子。本页面将详细介绍如何通过 PDB ID 搜索或本地文件上传的方式输入靶蛋白结构，以及如何选择和裁剪靶点链来聚焦功能区域。


## 上传靶点结构

### 方式一：搜索 PDB 数据库

1. 在 PDB ID 输入框中输入 4 位编号（如 `5O45`）
2. 从下拉列表中选择目标结构
3. 系统自动加载并预览结构

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1-%E8%BE%93%E5%85%A5-%E6%A3%80%E7%B4%A2pdb%E5%BA%93-%E4%B8%AD%E6%96%87-7873f8bb.jpg" style="zoom:100%;" />

### 方式二：上传 .cif 文件

1. 点击"文件上传"按钮
2. 选择 `.cif` 格式的结构文件
3. 系统自动加载并预览

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1-%E8%BE%93%E5%85%A5-%E4%B8%8A%E4%BC%A0%E9%9D%B6%E7%82%B9%E9%93%BE-%E4%B8%AD%E6%96%87-e7d3186b.jpg" style="zoom:100%;" />

> **提示（基于参考 Binder 模式）**：为了让模型更好地学习靶点与 binder 之间的空间关系，建议上传**包含靶点和 Binder 的复合体结构文件**，后续可直接从结构文件中导入 binder。

## 选择靶点链

结构加载完成后，在右侧链列表中选择用于设计的靶点链：

- **最多可选择 2 条链**作为靶点
- 被选中的靶点链，其残基 ID 范围会自动显示

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1-%E8%BE%93%E5%85%A5-%E9%80%89%E6%8B%A9%E9%9D%B6%E7%82%B9%E9%93%BE-%E4%B8%AD%E6%96%87-2e09fc83.jpg" style="zoom:100%;" />

## 裁剪靶点链

如果您只希望使用靶点中的**部分区域**参与设计，可以进行裁剪，这样可以帮助模型聚焦于您关注的功能区域，减少无关区域对设计结果的干扰：

1. 点击链后方的**铅笔图标**，打开序列编辑窗口
2. 在序列中点击起始和结束氨基酸，选择连续的残基范围
3. 点击「确定」保存裁剪结果

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1-%E8%BE%93%E5%85%A5-%E8%B0%83%E6%95%B4%E9%9D%B6%E7%82%B9%E9%93%BE%E5%8C%BA%E5%9F%9F-%E4%B8%AD%E6%96%87-55ced5d2.jpg" style="zoom:100%;" />

---
上一步：[选择设计模式](./C-02-01-SelectDesignMode.md)
下一步：[设置参考 Binder](./C-02-03-UploadReferenceBinder.md)

