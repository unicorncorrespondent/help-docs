<!--
# Protein interaction prediction with HF3
-->

# 案例背景

<!--
## Intro

Here we will apply a real world example to help you understand where you can apply HF3 in your research.
-->
在本教程中，我们将使用 BRD4-BD1，VCB 和 PROTAC 49 复合物（PDB：[8BEB](https://www.rcsb.org/structure/8BEB)）的相互作用预测作为案例，了解螺旋桨平台与 HelixFold3 能够如何助力科研与药物研发。本页将介绍该案例的生物背景。


<!--
## What you will learn...
-->
## 快速预览
- BRD4能够促进癌症与其他疾病相关的基因表达，而其N端保守结构与BD1可以作为药物靶向结合位点
- PROTAC是链接目标蛋白与E3泛素化酶的小分子，能够靶向降解蛋白
- 结构预测能够帮助判断设计的PROTAC分子是否能够实现靶向结合目标蛋白，以及判断复合结构是否稳定，帮助判断靶蛋白降解效果

## 关键概念
### BRD4
<!-- 
- BRD4 (bromodomain-containing protein 4): an epigenetic reader that realises histone proteins and promotes the transcription of genes linked to caner progression and non-cancer diseases such as acute heart failure and severe inflammation. 
- BD1 (N-terminal bromodomain): highly conserved domain of BRD4

Therefore, targeted degradation of BRD4 via BD1 is important for drug design
-->

溴结构域蛋白4（bromodomain-containing protein 4, BRD4）是一种表观遗传阅读蛋白，能够识别组蛋白并上调相关基因的表达，从而**促进肿瘤生长**或导致其他疾病（如炎症反应、急性心力衰竭等）。BRD4有3种异构体，但在结构上均有两个**高度保守的N端结构**： BD1 与 BD2。研究显示，多种 BRD4 BD1 选择性抑制剂还在炎症反应中具有良好的治疗优势，能够下调多种炎症因子水平，具有治疗关节炎和 COPD 等炎症因子导致疾病的潜力（[黄菲 等，2023](https://pps.cpu.edu.cn/cn/article/pdf/preview/10.20053/j.issn1001-5094.2023.09.004.pdf)）。因此，通过**靶向 BD1 结构域**从而**降解 BRD4** 能够为肿瘤等疾病的治疗提供潜在方案。



### PROTAC
<!-- 
蛋白降解靶向嵌合体 （proteolysis targeting chimera, PROTAC ）- a molecule that remove specific proteins through inducing selective proteolysis by targeting both the protein and E3 uniquitin ligase.
VHL - a part of E3 ubiquitin ligase complex

-->

蛋白水解靶向嵌合体（proteolysis targeting chimera, PROTAC）是一种能够去除特定有害蛋白质的分子。与传统的酶抑制剂不同，PROTAC 通过诱导**选择性的胞内蛋白水解**实现功能。从分子组成上，PROTAC 具有两个活性结构域和一个连接区（linker），由两个共价连接的蛋白质结合分子组成：一个能够与 E3 泛素连接酶（如VCB）结合，另一个则与靶蛋白结合。E3 连接酶被招募到靶蛋白后，会导致靶蛋白泛素化，并随后通过蛋白酶体途径降解。


![A diagram of the mechanism of PROTAC](images/B-01-Proteolysis_targeting_chimera_mechanism.svg.png "How PROTAC works ")
> [Ishoey et al. (2018) ](https://doi.org/10.1021%2Facschembio.7b00969)



## 结构与互作预测
由于 PROTAC 只需以高选择性结合其靶标而无需抑制靶蛋白的酶活性，**PROTAC的作用效果可以通过其是否与靶蛋白、E3 连接酶结合、以及结合的紧密性进行初步判断**。因此，对 BRD4-BD1，VCB 和 PROTAC 分子的结构与相互作用预测将有助于对设计PROTAC的作用效果进行判断。
接下来，我们将开始使用 HelixFold3 对这三个结构的相互作用进行预测。

上一步：[快速上手](B-00-QuickStart.md)
下一步：[数据输入](B-02-LoadingData.md)