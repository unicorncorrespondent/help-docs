# MMGBSA 参数配置

> 设置广义 Born 模型和模拟参数

上传数据后，您需要配置 MMGBSA 计算的参数以获得最佳结果。螺旋桨平台提供3个计算参数，便于您进行设置。

## 参数说明

### GB 模型选择

广义 Born (GB) 模型用于计算溶剂化自由能。我们提供 5 种 GB 模型：

| 模型 | 说明 | 参考文献 |
|------|------|----------|
| **GB-HCT** | 成对 GB 模型 | https://pubs.acs.org/doi/10.1021/jp961710n |
| **GB-OBC1** | 改进 GB 模型 1 | https://onlinelibrary.wiley.com/doi/10.1002/prot.20033 |
| **GB-OBC2** | 改进 GB 模型 2 | https://onlinelibrary.wiley.com/doi/10.1002/prot.20033 |
| **GB-NeckGBn** | Neck GBn 模型 | https://pubs.acs.org/doi/10.1021/ct600085e |
| **GB-Neck2** | Neck2 模型 | https://pubs.acs.org/doi/10.1021/acs.jctc.5b00271 |



<img src="https://bml-test-test.bj.bcebos.com/helix_upload/mmgbsa%E8%BE%93%E5%85%A5%E9%A1%B5%20%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE%20%E4%B8%AD%E6%96%87-a43752ac.jpg" style="zoom:50%;" />

### 模拟长度

分子动力学轨迹的模拟时长：

| 长度 | 精度 | 耗时 |
|------|------|------|
| 短 (1-5 ns) | 一般 | 快 |
| 中 (5-10 ns) | 较好 | 中 |
| 长 (10-20 ns) | 高 | 慢 |

**建议**：对于大多数情况，5-10 ns 的模拟可以获得较好结果。

### 介电常数

用于计算 MMGBSA 的**内部介电常数**，当认为结构为刚性时可以适当降低介电常数，认为柔性时可适当提高介电常数。

---

上一步：[数据输入](./D-03-02-MMGBSAInput.md)
下一步：[结果解读](./D-03-04-MMGBSAResults.md)

---