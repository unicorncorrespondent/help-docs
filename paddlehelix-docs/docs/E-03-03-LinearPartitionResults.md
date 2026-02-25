# LinearPartition 结果解读

> 理解 LinearPartition 输出的配对概率结果

完成 LinearPartition 预测后，您可以在在线页面查看配对概率结果，并下载 `.txt` 文件用于后续分析。

## 在线页面结果展示

### 配对概率成对视觉图（Pairwise Visual Diagram）

结果页左右分别展示机器学习模型（Machine-Learned Model）和动力学模型（Thermodynamic Model）的预测结果，便于对比两种模型在配对概率上的一致性。

![Results Interface](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6vfx9es5dJTq_MtyAsYxIF.png)

### 悬停查看配对详情

蓝色连线表示预测配对。将鼠标悬停到连线上，可查看对应碱基位置与配对置信度（概率值）。

![Hover Info](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4qop_R48VNtbRIveBwDviG.png)

## 配对概率解读

### 概率区间参考

| 概率范围 | 含义 | 解读建议 |
|----------|------|----------|
| 0.9 - 1.0 | 高度确定 | 稳定核心结构，可优先关注 |
| 0.7 - 0.9 | 较确定 | 多数结构中存在，通常具有意义 |
| 0.5 - 0.7 | 中等确定 | 可能受条件变化影响 |
| 0.3 - 0.5 | 不太确定 | 建议结合其他信息判断 |
| < 0.3 | 低置信度 | 通常不建议作为核心结论 |


## 数据下载


所有结果可通过结果页面下方的「下载」按钮导出，下载文件为 `.txt` 格式。

![Download Button](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7KwXUJ0aZJPakAmZmBwA9y.png)

---

上一步：[LinearPartition 输入与参数](./E-03-02-LinearPartitionInput)
下一步：[HelixUTRDesign 结果](./E-04-03-HelixUTRDesignResults)

