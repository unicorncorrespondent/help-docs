# 输入数据

> 上传 SMILES 分子进行 ADMET 预测

## 输入方式

### 方式一：文本框输入

在文本框中直接粘贴或输入 SMILES 序列，不同分子之间用换行符分隔。系统会自动识别每行内容并将其作为一个独立的分子进行处理。每次文本框输入最多支持 100 个 SMILES 分子。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5UAEcNucBNx64hjYURYj-d.png" style="zoom:50%;" />

### 方式二：分子绘制

点击“绘制分子”按钮打开绘制面板，使用绘制工具画出目标化合物的结构；确认结构无误后点击「确认」按钮，系统会自动将绘制的结构转换为 SMILES 并填入下方的文本框中。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4YX69QIRhEraOH4-6PoDfj.png" style="zoom:33%;" />

### 方式三：上传文档

对于需要预测大量分子（超过 100 个）的场景，建议通过上传文档的方式进行批量输入。您可以上传两种格式的分析数据：
- .csv文件：包含最多1000个SMILES表达式，每个SMILES分子独占一行
<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4XETKaHjtJwZ1vdrXV4Yx1.png" style="zoom:50%;" />
- .txt文件：包含最多1000个SMILES表达式，每个SMILES分子独占一行
<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA63k0WZl_pKXYebYuOC0IXw.png" style="zoom:50%;" />
> 可以点击“上传范本下载”查看示例文件


---

上一步：[HelixADMET](./D-01-00-HelixADMET.md)
下一步：[结果解读](./D-01-02-ADMETResults.md)

---
