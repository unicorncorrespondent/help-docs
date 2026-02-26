# 结果查看与下载

<div class="doc-page-type doc-page-type--result"><span class="doc-page-type__icon">📊</span><span>分类：结果</span></div>

> 解读 ADMET 预测结果

完成 ADMET 预测后，正确解读预测结果是药物筛选工作的关键环节。HelixADMET 提供直观的可视化结果展示，包括分子卡片视图和详细的指标页面两种展示方式，帮助您快速识别具有良好成药性特征的候选分子。


## 在线页面结果展示

### 卡片视图

所有待预测分子按输入顺序以分子卡片形式展示在结果页面中。这种展示方式便于您快速浏览和比较多个分子的核心性质，快速筛选出初步符合要求的候选分子进行进一步分析。所有属性的具体含义与理解可以参看『[ADMET预测结果帮助文档](https://aipe-easydl-doc.cdn.bcebos.com/helix/PaddleHelix%20ADMET%20%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3%202021.11.29.pdf)』，

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6xclf6zeNMMpAb0Qz19iMP.png" style="zoom:50%;" />


每个卡片显示 6 个核心属性，这些属性是评估分子成药性的关键指标：

| 属性 | 全称 | 含义 | 参考意义 |
|------|------|------|----------|
| 化学式 | Molecular Formula | 分子的化学组成 | 了解分子的基本结构特征 |
| 分子量 | Molecular Weight | 分子质量（Da） | 一般建议 < 500 Da |
| 口服生物利用度 | Oral Bioavailability (F) | 口服给药后的吸收程度 | 数值越高吸收越好 |
| 血浆蛋白结合率 | Plasma Protein Binding (PPB) | 与血浆蛋白结合的比例 | 过高的结合率可能影响药效 |
| 半衰期 | Half-life | 体内代谢半衰期 | 影响给药频率 |
| 致癌性 | Carcinogenicity | 致癌风险评估 | 阴性结果更安全 |


### 分子详情页

点击单个卡片可展开详情页，查看该分子的全部 55 个预测指标。详情页提供了最完整的预测信息，适合对候选分子进行深入分析和比较。所有属性的具体含义与理解可以参看『[ADMET预测结果帮助文档](https://aipe-easydl-doc.cdn.bcebos.com/helix/PaddleHelix%20ADMET%20%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3%202021.11.29.pdf)』，通过模型预测的属性后面还会提供置信度，置信度越高，表示模型判断该结果为真的可能性越高。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/admet%20%E5%9F%BA%E7%BA%BF%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E8%AF%A6%E6%83%85%E9%A1%B5%20%E5%BA%95%E9%83%A8%20%E4%B8%AD%E6%96%87-2596b666.jpg" style="zoom:50%;" />

所有指标按照『理化性质』、『吸收（A）』、『分布（D）』、『代谢（M）』、『排泄（E）』、『毒性（T）』、『成药性』和『药物化学规则』进行分区，可以通过点击左侧导航栏进行快速定位。


## 数据下载

### 下载所有结果

所有结果都可以通过点击下载按钮进行下载，结果为.csv格式的表单。表单的每一行为一个SMILES分子式，每一列为一个性质。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7KwXUJ0aZJPakAmZmBwA9y.png">

### 下载部分结果

勾选卡片右上角的复选框可以对单个或多个卡片进行选择。或者您可以在对结果进行筛选后，点击『全选』选择所有筛选后的分子。 

选择完成后，点击『下载已选预测结果』，则下载的结果中只会包含被选中的分子。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4vuh8v_O1DpKz5xk_aiXnI.png" alt="img" style="zoom:50%;" />
