# 添加修饰

> 为蛋白质、DNA 或 RNA 添加化学修饰

HelixFold3 支持为蛋白质、DNA 和 RNA 添加侧链修饰。您可以通过下拉菜单选择系统预设的常用修饰类型，也可以通过输入 SMILES 字符串自定义修饰基团。DNA 实体还支持快速添加反向互补序列功能。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E9%AA%A8%E6%9E%B6%E8%AF%B4%E6%98%8E%20%E4%B8%AD%E6%96%87-48bd7537.jpg" style="zoom:80%;" />

## 添加修饰步骤


1. 点击实体数据右侧的"三个点"图标
2. 选择"添加修饰"
3. 点击目标残基，选择修饰类型

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20%E6%B7%BB%E5%8A%A0%E4%BF%AE%E9%A5%B0%20%E4%B8%AD%E6%96%87-efc569c6.jpg" style="width: 700px; height: auto;" />

4. 点击"添加"完成，系统将显示修饰结果

> ⚠️ 注意：添加修饰后，实体序列将暂不支持修改。如需调整序列，请先清空已添加的修饰



## 自定义修饰

如所需修饰不在列表中，您可以：
1. 选择"自定义侧链修饰"
2. 输入修饰基团的 SMILES

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E9%9D%9E%E6%A0%87%E4%BF%AE%E9%A5%B0%20%E6%B7%BB%E5%8A%A0%20%E4%B8%AD%E6%96%87-d25c9c1a.jpg" style="zoom:67%;" />

3. 点击连接位点编号旁的“眼睛”图标，根据分子结构图，确认并输入希望连接的位点编号
<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E9%9D%9E%E6%A0%87%E4%BF%AE%E9%A5%B0%20%E8%BF%9E%E6%8E%A5%E4%BD%8D%E7%82%B9%20%E4%B8%AD%E6%96%87-b454c1b9.jpg" style="zoom:67%;" />
4. 点击确认，完成添加
<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E9%9D%9E%E6%A0%87%E4%BF%AE%E9%A5%B0%20%E5%B1%95%E7%A4%BA%20%E4%B8%AD%E6%96%87-43574c0d.jpg" style="zoom:67%;" />

### 示例
以下展示几个具体的自定义侧链示例：

- 为蛋白添加自定义侧链

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/protein_mod-eb5149ed.png" style="width: 800px; height: auto;" />

- 为 RNA 添加自定义侧链

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/rna_mod-54ef0f11.png" style="width: 800px; height: auto;" />

- 为 DNA 添加自定义侧链

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/dna_mod-8b339cfd.png" style="width: 800px; height: auto;" />


## 反向互补序列

DNA 实体支持快速添加反向互补序列，具体添加操作如下
- 在实体类型为DNA的数据后点击添加反向互补序列。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20dna%20%E6%B7%BB%E5%8A%A0%E5%8F%8D%E5%90%91%E4%BA%92%E8%A1%A5%20%E4%B8%AD%E6%96%87-e088e8dc.jpg" style="zoom:50%;" />

- 在原有的实体数据下会自动新增一条实体类型为DNA，且序列为反向互补序列的实体数据。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20dna%20%E5%AE%8C%E6%88%90%E5%8F%8D%E5%90%91%E4%BA%92%E8%A1%A5%20%E4%B8%AD%E6%96%87-f20a4864.jpg" style="zoom:50%;" />


---

上一步：[序列输入](./C-01-02-Input)
下一步：[指定相互作用](./C-01-04-ForcedInteraction)
