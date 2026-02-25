# LinearPartition 输入

> 了解如何配置 LinearPartition 的输入数据


在进行 LinearPartition 预测之前，您需要准备符合要求的 RNA 序列。本页面按操作流程介绍输入方式、格式要求和参数建议，帮助您快速完成配对概率预测任务提交。

## 输入方式

### 方式一：文本框输入

适用于单条序列或快速验证场景：

1. 在输入框中粘贴 RNA 序列
2. 确保内容符合 FASTA 格式
3. 系统自动完成格式校验

示例：
```
>RNA_Sequence_1
AUCGGCAUCGGCAUCGGCAUCGGCAUCGGCAUCGGC...
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

![Input Interface](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6GCpV_KPJIDK29yR-lPqZA.png)
