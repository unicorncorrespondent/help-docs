# HelixUTRDesign 结果解读

<div class="doc-page-type doc-page-type--result"><span class="doc-page-type__icon">📊</span><span>分类：结果</span></div>


> 理解 HelixUTRDesign 输出结果和核糖载量指标

完成 HelixUTRDesign 预测后，您可以在在线页面查看候选 5'UTR 及其关键指标，并下载 `.txt` 结果文件用于后续筛选与实验设计。

## 在线页面结果展示

### 结果表格

结果表格按行展示候选 5'UTR 序列及关键指标，支持快速对比不同候选方案。在有参考5‘UTR的情况下，与参考序列不同的核苷酸会被高亮。

![Results Table](https://bml-test-test.bj.bcebos.com/helix_upload/5%27utr%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E4%B8%AD%E6%96%87-ae15e096-0a254780.jpeg)

常见字段包括：

| 字段 | 含义 | 解读建议 |
|------|------|----------|
| 预测 MRL | 核糖体载量均值 | 越高通常代表翻译效率潜力越高 |
| 配对数量 | 5'UTR 与 CDS 的配对统计 | 过高可能形成翻译阻碍结构 |
| 相似性 | 与参考 5'UTR 的相似度 | 迭代优化时可用于控制变化幅度 |
| GC 含量 | 序列中 GC 比例 | 建议优先关注适中范围（常见 30-70%） |


选中某条候选序列后，可在下方查看该 5'UTR 与 CDS 的二级结构图，辅助判断结构是否可能影响翻译起始。


## 数据下载

### 下载方式

点击结果区域下方的「下载」按钮导出结果，下载文件为 `.txt` 格式。

![Download Button](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7KwXUJ0aZJPakAmZmBwA9y.png)
