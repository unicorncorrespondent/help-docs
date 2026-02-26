# 抗体设计

:::note 分类
其他
:::


> 基于 HelixFold3 的抗体序列设计与结构预测

抗体作为治疗性生物大分子，在疾病治疗、免疫调控和生物医学研究中发挥着至关重要的作用。然而，传统的抗体开发方法（如杂交瘤技术和噬菌体展示）成本高昂、周期漫长，难以满足现代药物开发对高效性和精准性的需求。

为此，螺旋桨团队基于 HelixFold3 的高精度生物分子相互作用预测技术，构建了一种端到端的抗体设计系统。该系统集成精准的抗体设计和大规模抗原-抗体相互作用分析，结合基于结构的评分、能量函数计算以及对接界面统计信息，能够高效筛选潜在的高亲和力抗体序列，从而显著提高湿实验的成功率，加速抗体药物的开发进程。



## HelixDesign-Antibody 介绍

HelixDesign-Antibody 是百度螺旋桨团队研发的**端到端抗体设计系统**，集成抗体序列设计与大规模抗原-抗体相互作用分析。

### 工作流程

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%97%E4%BD%93%E6%B5%81%E7%A8%8B%E5%9B%BE%20%E6%96%B0-edb3702f.png" style="zoom:100%;" />

### 三大模块

| 模块 | 功能说明 |
|------|----------|
| **序列设计模块** | 针对抗体 CDR 等指定区域设计高质量、多样性序列 |
| **蛋白折叠模块** | 基于 HelixFold3 进行全原子构象预测与打分 |
| **互作分析模块** | 构象分析、能量打分、界面残基统计分析 |

### 技术验证

HelixDesignAntibody 对 RCSB 数据库最新发布的141例抗原-抗体复合体的构象预测任务中，成功率达到 58%，明显优于当前性能最佳的模型 AlphaFold3（36%）。在相互作用预测方面，置信度打分 iPTM 在四个靶点抗原（SARS、LYSO、VEGF 和 PD-1）上成功识别出结合位点的高亲和力抗体。此外，在多个流感毒株的亲和力数据中，模型预测结果与实验数据呈现出更高的正相关性。与现有的蛋白质结构预测模型 AlphaFold-Multimer 和基于蛋白质语言模型的 ESM2 相比，HelixFold-Multimer 在预测精度上有了显著提升。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%97%E4%BD%93%E5%8F%91%E7%8E%B0%E5%9C%BA%E6%99%AF1-f6135cb7.png" style="zoom:50%;" />

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%97%E4%BD%93%E5%8F%91%E7%8E%B0%E5%9C%BA%E6%99%AF2-4c122fbd.png" style="zoom:50%;" />
