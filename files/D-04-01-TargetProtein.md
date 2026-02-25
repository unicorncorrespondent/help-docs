# 输入靶蛋白信息

> 上传或搜索靶蛋白进行虚拟筛选

在进行虚拟筛选之前，首先需要准备好靶蛋白的三维结构。蛋白结构是分子对接的基础，其质量直接影响筛选结果的可靠性。HelixVS-Syn 支持从 RCSB PDB 数据库搜索已有结构，也可以上传本地保存的蛋白文件。本节将详细介绍这两种输入方式的操作步骤、文件格式要求以及蛋白预处理的相关知识，帮助您正确准备虚拟筛选所需的蛋白结构数据。


## 输入方式
HelixVS 支持从 RCSB PDB 数据库搜索已有结构，也可以上传本地保存的蛋白文件。

### 方式一：搜索 PDB 结构库


1. **输入 PDB ID**：在搜索框中输入 4 位 PDB 编号（如 `4UYU`）

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5CtfL2dl1G_bTtnE7AzVwG.png" style="zoom:80%;" />

2. **选择目标蛋白**：从下拉菜单中选择目标结构。如果搜索结果有多个相似的结构，建议选择分辨率较高、完整度较好的那个

3. **预览结构**：下方的 3D 视窗会显示加载的蛋白质结构

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4RQ36KddhERogVjEOSNVnx.png" style="zoom:80%;" />

4. **预处理**：点击输入框旁的『预处理』按钮，平台将会对选中蛋白进行预处理，以便后续算法识别（可能耗时会十几秒至几分钟，请勿进行页面切换）

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5l3ijvhAxOk5edX5cGr0h_.png" alt="img" style="zoom:80%;" />


### 方式二：上传本地文件


1. 选择「上传文档」方式，页面会显示文件上传区域

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6R1EogxwtODrJfUZu4C40o.png" style="zoom:80%;" />

2. 点击「文件上传」按钮，在弹出的文件选择对话框中找到并选择 `.pdb` 蛋白结构文件

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6sfiSFOghOiJvnZCGJQl1c.png" style="zoom:80%;" />

3. 上传完成后，蛋白质结构会显示在下方的 3D 视窗中，您可以旋转、缩放查看结构细节

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA477fl4adBOjJBYrEkRksw7.png" style="zoom:80%;" />

4. 如果需要上传别的蛋白质文件，请将鼠标移到文件位置，点击右上角图标进行删除后重新上传。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7yPPW4GqJMYp7hI9N7mn3T.png" alt="img" style="zoom:50%;" />

## 使用示例

如果您是第一次使用 HelixVS-Syn，建议先点击「使用示例」按钮加载平台提供的示例靶蛋白。这可以帮助您快速熟悉整个虚拟筛选流程，而无需准备自己的蛋白结构。
