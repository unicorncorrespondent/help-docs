# 单项分析

<div class="doc-page-type doc-page-type--result"><span class="doc-page-type__icon">📊</span><span>分类：结果</span></div>


> 深入分析单个 Binder 设计结果

在完成 Binder 设计的批量筛选后，您可以对特定的高分候选进行深入分析，以确定哪些结果最值得进行实验验证。单项结果分析页面提供了丰富的可视化工具和详细指标，帮助您全面评估单个 Binder 设计结果的质量。本页面将介绍雷达图、警告区间、理化性质分析以及 PAE 图等功能模块的使用方法。


在结果总览页中，点击任意一行结果后的「查看」，即可进入对应的 **单项分析页面**。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E5%8D%95%E9%A1%B9-%E6%80%BB%E8%A7%88-fe19735b.jpg" style="zoom:50%;" />


页面主要包含导航栏、整体评价、三维结构图、详细分析四个核心模块。

## 导航栏

导航栏位于页面左上角，用于在不同设计结果之间快速切换。若您在结果总览页中设置了筛选或排序条件，导航栏中仅会展示**符合条件的结果**，并同时保持与结果总览页一致的排序顺序，方便对比相近结果。

## 整体评价

您可以通过本部分内容对当前结构质量进行快速判断。

**雷达图**展示当前结构与**全部结果平均水平**的对比：

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E5%8D%95%E9%A1%B9-%E9%9B%B7%E8%BE%BE%E5%9B%BE-%E4%B8%AD%E6%96%87-1d35f240.jpg" style="zoom:50%;" />

| 区域颜色 | 含义 |
|----------|------|
| 红色区域 | 警告区间，指标可能偏低 |
| 超出红色区域 | 不一定不可用，需结合具体需求判断 |

:::tip
其中**红色区域**表示对应指标的**警告区间**，提示该指标可能偏低，需要结合具体任务需求进行进一步判断或验证。红色警告区间对应的参考阈值与参数解读见[参数解读](./C-02-07-ResultsInterpretation.md)。
:::


结构质量描述（仅供参考）对当前结构给出简要的文字化评价，辅助理解整体表现。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E5%8D%95%E9%A1%B9-%E6%96%87%E6%A1%88%E6%8F%8F%E8%BF%B0-%E4%B8%AD%E6%96%87-644b2ba1.jpg" style="zoom:100%;" />

分数排名（仅在推理数量 > 1 或使用 HelixFold-S1 时显示）展示该结构在全部结果中的相对排名，帮助快速定位潜在的优选结果。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E5%8D%95%E9%A1%B9-%E6%8E%92%E5%90%8D-%E4%B8%AD%E6%96%87-c73d5f7d.jpg" style="zoom:100%;" />





## 三维结构图

预测结构以 **pLDDT 值进行着色**，反映不同区域的预测置信度：

- 蓝色/天蓝色区域：预测可靠
- 黄色/红色区域：需要关注或排查

您可以拖拽、旋转结构图，详细检查关键区域。



## 详细分析

在这里，您可以通过多个角度对 Binder 进行深入分析，包含 **理化性质、序列分析** 以及 **计算属性**，为进一步决策提供依据。

### 理化性质

**相互作用数量环形图**

展示不同类型残基相互作用的数量构成：

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E5%8D%95%E9%A1%B9-%E7%90%86%E5%8C%96%E6%80%A7%E8%B4%A8-%E4%B8%AD%E6%96%87-f48d1f49.jpg" style="zoom:100%;" />

| 相互作用类型 | 说明 |
|-------------|------|
| 带电/带电 | 静电相互作用 |
| 带电/极性 | 静电+氢键 |
| 带电/非极性 | 静电+疏水 |
| 极性/极性 | 氢键网络 |
| 极性/非极性 | 混合作用 |
| 非极性/非极性 | 疏水作用 |

相互作用越多、类型越丰富，结合强度通常越强。

**生物化学指标**

- 非相互作用表面残基占比：不参与相互作用的表面残基仍对亲和力有影响 
- 非极性表面残基占比：与结合强度正相关   


### 序列分析

#### 序列展示

展示 Binder 与靶点的序列信息，用颜色标注：

- 接触界面残基
- motif 区域
- hotspots 区域

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E5%8D%95%E9%A1%B9-%E5%BA%8F%E5%88%97%E5%88%86%E6%9E%90-%E4%B8%AD%E6%96%87-9d047b5a.jpg" style="zoom:100%;" />

#### 接触界面残基对

以表格形式列出潜在接触残基对：

- 勾选复选框可在三维结构中高亮显示

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E5%8D%95%E9%A1%B9-%E9%AB%98%E4%BA%AE%E7%9B%B8%E4%BA%92%E4%BD%9C%E7%94%A8-%E4%B8%AD%E6%96%87-f4af5af0.jpg" style="zoom:50%;" />

### 计算属性

#### PAE 图 

Predicted Aligned Error（预测对齐误差）热力图：

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%97%E4%BD%93%E8%AE%BE%E8%AE%A1%20%E7%BB%93%E6%9E%9C%20pae%20%E4%B8%AD%E6%96%87-e842a71c.jpg" style="zoom:67%;" />

| PAE 值 | 含义 |
|--------|------|
| 低（深色） | 模型对残基相对位置预测有信心 |
| 高（浅色） | 不确定性较高 |

#### 指标总览 

以横轴形式展示其他关键指标：

- 绿色区域：推荐/理想区间
- 红色区域：告警区间
- 竖线：当前 Binder 在该指标上的具体数值
