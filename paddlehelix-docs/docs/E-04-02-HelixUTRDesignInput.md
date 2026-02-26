# HelixUTRDesign 输入与参数

<div class="doc-page-type doc-page-type--input"><span class="doc-page-type__icon">🧪</span><span>分类：输入</span></div>


> 了解如何配置 HelixUTRDesign 的输入数据和参数

在进行 HelixUTRDesign 任务提交前，您需要准备符合格式要求的 CDS 序列，并根据目标场景设置 UTR 长度等参数。

## 输入方式

### 方式一：文本框输入

适用于单条序列或快速验证场景：

1. 在输入框中粘贴 RNA 序列
2. 确保内容符合 FASTA 格式
3. 系统自动完成格式校验

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/5%E2%80%99utr%20%E8%BE%93%E5%85%A5%E9%A1%B5%20%E8%BE%93%E5%85%A5%E5%BA%8F%E5%88%97%20%E4%B8%AD%E6%96%87-71c4863b.jpg" style="zoom:50%;" />
```

### 方式二：上传文档

适用于长序列：

1. 点击「上传范本下载」获取模板
2. 准备 `.txt` 文件并保存为 UTF-8 编码
3. 上传文件后由系统自动解析

| 文件要求 | 说明 |
|----------|------|
| 文件格式 | `.txt` 纯文本 |
| 文件编码 | UTF-8 |
| 文件内容 | 一条 FASTA 格式 RNA 序列 |
| 序列长度 | 单条不超过 10 万 nt |

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7x5dJQBAlFeq0hxUH4vU9E.png" alt="img" style="zoom:50%;" />


## 参数配置

我们提供两种参数设置，帮助您更好地针对研究目的进行调整。

### UTR长度

请输入您期望的UTR长度，长度需要>10且不超过200，默认值为50。在长度超过100的情况下，模型预测的核糖体载量均值 MRL可能会不准确。

![](https://bml-test-test.bj.bcebos.com/helix_upload/5%E2%80%98utr%20%E9%95%BF%E5%BA%A6%20%E4%B8%AD%E6%96%87-e56cb428-46397c32.jpeg)

### 输入参考5'UTR

如果您有一条参考的5'UTR序列，并希望模型设计与此序列相似的结果，您可以勾选本选项并在展开的区域内输入您的5'UTR参考序列。您可以选择从文本框输入，也可以选择上传一个.txt的文件。

:::caution 注意
如果您上传的参考 5'UTR 序列长度与您设置的 UTR 长度不一致，模型将以您设置的 UTR 长度为准。
:::

![](https://bml-test-test.bj.bcebos.com/helix_upload/5%27utr%20%E8%BE%93%E5%85%A5%E9%A1%B5%20%E5%8F%82%E8%80%83%20%E4%B8%AD%E6%96%87-20332979-d1127fe7.jpeg)
