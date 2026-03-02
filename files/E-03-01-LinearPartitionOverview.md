# LinearPartition 概述

<div class="doc-page-type doc-page-type--other"><span class="doc-page-type__icon">🧭</span><span>分类：其他</span></div>


> 世界最快的 RNA 碱基配对概率预测算法



RNA 在细胞内通常不是“只有一种结构”，而是在多个候选结构之间动态平衡。仅查看单一最低自由能结构，往往无法完整反映真实生物状态。因此，配对概率分析是 RNA 结构研究中的关键环节。与仅输出单一结构不同，概率分布能够帮助研究人员判断结构稳定区域与不确定区域，从而更可靠地支持功能分析和序列优化。

配对概率信息可以帮助您识别：

- 稳定且高置信的核心配对区域
- 可能发生构象切换的可变区域
- 需要进一步实验验证的低置信位点

然而，传统配分方程方法在长序列场景中常面临明显瓶颈：

- 计算复杂度高（常见为 O(n³)），长序列耗时显著增长
- 大规模任务下计算成本高，不利于迭代优化
- 长距离配对与全局概率分布分析效率不足

我们在这一背景下推出 LinearPartition：在保持预测质量的同时，将配分方程相关计算加速到线性时间级别，大幅提高了配对概率分析的速度。

## LinearPartition 核心能力

:::info
LinearPartition是世界上最快的RNA配分方程（Partition function）和碱基对概率（base paring probability）预测算法。作为LinearFold的进阶，LinearPartition不但继承了前者展示出的线性预测时间和更佳的准确率、覆盖率、灵敏度的优良表现，还能够模拟RNA序列在平衡态时成千上万种不同结构的分布。
:::


| 能力 | 说明 | 应用价值 |
|------|------|----------|
| 线性时间概率预测 | 基于集束剪枝的配分方程加速策略，复杂度降至 O(n) | 显著提升长序列可用性 |
| 配对概率矩阵输出 | 给出每对碱基在结构集合中的配对概率 | 支持结构不确定性分析 |
| 长序列与远程配对支持 | 更适用于长 RNA 与远距离互作分析 | 提升功能位点识别效率 |


<img src="https://bml-test-test.bj.bcebos.com/helix_upload/linearpartition-c989ac5b.png" style="zoom:50%;" />

<center>LinearPartition的二级结构预测只需要线性时间</center>

## 什么时候选择 LinearPartition？

如果您不仅需要一个单一结构结果，还希望模拟 RNA 序列在平衡态时成千上万种不同结构的分布，并查看每对碱基的配对概率，您可以选择使用LinearPartition。 

当您只需要一个单一结构结果时，您可以选择使用 [LinearFold](./E-02-01-LinearFoldOverview.md) 进行 RNA 二级结构预测。

简而言之：
- 需要快速获得单一二级结构：使用 LinearFold
- 需要结构分布与概率分析：使用 LinearPartition
