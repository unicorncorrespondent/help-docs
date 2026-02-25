# 查看与解读结果

> 解读虚拟筛选的对接结果

完成虚拟筛选任务后，您需要解读对接结果以筛选出有潜力的候选分子。本节将详细介绍如何查看和解读 HelixVS 的对接结果，包括分子列表浏览、3D 构象查看、打分指标解读以及高质量候选分子的筛选策略。

## 分子列表

所有分子按输入顺序以列表形式展示：

- 左侧显示分子信息
- 右侧为 3D 视图区域

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%88%86%E5%AD%90%E5%AF%B9%E6%8E%A5%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E4%B8%AD-8e326da2.jpg" style="zoom:50%;" />

## 查看分子构象

### 单分子查看

点击左侧分子名称或展开子层级点击任一 pose，3D 视窗显示对应的对接构象。

### 多分子比较

如需同时查看多个结构：

1. 鼠标悬停在分子/pose 前
2. 点击眼睛图标显示该结构

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/3d%E8%A7%86%E7%AA%97%20%E7%9C%BC%E7%9D%9B%20%E5%A4%9A%E9%80%89%20%E7%A4%BA%E6%84%8F%20%E5%88%86%E5%AD%90%E5%AF%B9%E6%8E%A5%20%E5%88%86%E5%AD%90%E7%94%9F%E6%88%90-8774e126.jpg" style="zoom:100%;" />

## 对接打分说明


对接打分（Binding Score）反映小分子与蛋白口袋的结合亲和力（经验阈值仅供参考，实际判定请结合项目具体情况）：

| 打分范围 | 含义 |
|----------|------|
| < -9 | 结合能力强 |
| -6 ~ -9 | 有一定结合 |
| > -6 | 结合较弱 |

点击右上角可切换显示的指标：

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/helixvs%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E5%8F%B3%E4%B8%8A%E8%A7%92%20%E6%8C%87%E6%A0%87%E5%88%87%E6%8D%A2%20%E4%B8%AD%E6%96%87-92169452.jpg" style="zoom:80%;" />

---

上一步：[筛选参数设置](./D-02-05-ScreeningParameters.md)
下一步：[返回小分子药物研发概述](../D-00-00-ChemicalMain.md)


