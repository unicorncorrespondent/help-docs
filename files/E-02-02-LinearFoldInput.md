# LinearFold 输入与参数

> 了解如何配置 LinearFold 的输入数据和运行参数

在进行 LinearFold 预测之前，您需要先准备符合要求的 RNA 序列，并根据任务目标设置参数。本页面将按操作流程介绍输入方式、格式要求与关键参数，帮助您快速完成任务提交。

## 输入方式

### 方式一：文本框输入

适用于单条序列或快速验证场景：

1. 在输入框中直接粘贴 RNA 序列
2. 确保序列符合 FASTA 格式
3. 系统自动完成格式校验

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6GCpV_KPJIDK29yR-lPqZA.png)


### 方式二：上传文档

适用于长序列录入场景：

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


## 参数设置

LinearFold 提供三种参数，方便您根据实际情况进行选择与调整

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4Nk8Lz7p5FUbBkSEOoPd9d.png)


### Beam Size（集束大小）

用于控制搜索路径数量，是速度与精度平衡的核心参数：

| 参数 | 默认值 | 建议 |
|------|--------|------|
| Beam Size | 100 | 50 适合快速筛选；200+ 适合高精度分析 |

### 结构约束（Constraints，可选）

当您已有部分配对信息时，可输入约束条件提升预测可控性。

| 符号 | 含义 |
|------|------|
| `?` | 未知 |
| `.` | 不配对 |
| `(` | 配对起点 |
| `)` | 配对终点 |

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7S73c-M9xEsJd6jc6L2Kmo.png)

### 次优结构（Zuker，可选）

启用后可返回与 MFE 相近的次优结构，该结构的自由能与最低自由能结构（lowest free energy structure）的自由能相近。调整的能量差越小，则次优极与最低自由能结构的自由能差越接近。可以用于多结构比较分析。

> ⚠️ 注意：`结构约束` 与 `次优结构` 不能同时启用。


---

上一步：[LinearFold 概述](./E-02-01-LinearFoldOverview.md)
下一步：[LinearFold 结果解读](./E-02-03-LinearFoldResults.md)


