# MMGBSA 查看结果

<div class="doc-page-type doc-page-type--result"><span class="doc-page-type__icon">📊</span><span>分类：结果</span></div>


> 解读结合自由能计算结果

## 结果展示

您可以在结果页顶部确认输入的文件和参数信息：

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/mmgbsa%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E9%A1%B6%E9%83%A8%20%E4%B8%AD%E6%96%87-7bcd2491.jpg" style="zoom:50%;" />



所有预测结果以表格形式展示：

| 列 | 说明 |
|----|------|
| 分子文件名 | 输入的配体文件名称 |
| 分子图 | 配体结构可视化 |
| ΔG (kcal/mol) | 绝对结合自由能 |
| ΔΔG (kcal/mol) | 相对参考分子的能量变化 |

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/mmgbsa%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E8%A1%A8%E6%A0%BC%20%E4%B8%AD%E6%96%87-35775771.jpg" style="zoom:50%;" />


如果您设置了参考小分子：

- 参考分子单独显示在表格上方
- 参考分子仅有 ΔG 值，无 ΔΔG 值
- 其他分子的 ΔΔG 相对于参考分子计算

了解结果展示格式后，下面将详细介绍各项指标的解读方法。


## 下载结果

点击 **「下载」** 按钮导出 CSV 格式结果文件：

- 每行对应一个分子
- 包含 ΔG 和 ΔΔG 值
- 可在 Excel 中进一步分析
