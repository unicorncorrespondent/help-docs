# LinearDesign 结果解读

> 理解 CAI/MFE、结构信息与结果下载

<!-- 上一版内容（按要求注释保留，不删除）
# LinearDesign 结果解读

> 理解 CAI/MFE、结构信息与结果下载



## 在线页面结果展示

### CAI/MFE 散点图

当一次输出多条候选序列时，散点图可用于快速比较整体分布：

- X 轴为 MFE（越低通常越稳定）
- Y 轴为 CAI（越高通常翻译效率潜力越高）
- 每个点代表一条候选 mRNA

![Scatter Plot](https://bml-test-test.bj.bcebos.com/helix_upload/lineardesign%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20advance%20%E6%80%BB%E7%BB%93%20%E4%B8%AD%E6%96%87-b6ed6f5e-8f9e14ce.jpeg)

### 序列列表与详情区

散点图下方可切换候选序列，并查看对应详情：

| 功能 | 说明 |
|------|------|
| 序列切换 | 在候选列表中选择目标序列 |
| 排序方式 | 可按 MFE 或 CAI 进行排序 |
| 详情查看 | 显示选中序列的指标与结构信息 |

![Sequence List](https://bml-test-test.bj.bcebos.com/helix_upload/lineardesign%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20advance%20%E5%B7%A6%E8%BE%B9%E6%A0%8F%20%E4%B8%AD%E6%96%87-9bf23cc6-6eca987c.jpeg)

### 二级结构与点括号表示

页面支持交互式结构查看与点括号表示：

- 蓝色连线表示预测配对碱基
- 悬停可查看配对位置与距离信息
- 点括号用于紧凑表示整体结构（`.` / `(` / `)`）

![Interactive Structure](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4rCkNiQeRM75TZ_7fIFBje.png)



![Dot Parenthesis](https://bml-test-test.bj.bcebos.com/helix_upload/infoflow%202022-12-20%2018-14-50-f5d0a1c8.png)



## 结果筛选建议

可按以下顺序筛选候选序列：

1. 在同一批结果中优先关注 CAI 较高且 MFE 合理的候选
2. 结合二级结构判断 5' 起始附近是否存在潜在阻碍结构
3. 对入选候选进行实验验证前的二次参数复核



-->
完成 LinearDesign 任务后，您可以在在线页面查看候选 mRNA 的综合评分与结构信息，并下载 `.txt` 文件用于后续筛选。

## 查看结果

### CAI/MFE 散点图及多序列展示（仅设计多条序列时有）

如果您一次设计了多条序列，则可以在 CAI/MFE 散点图上看到所有设计结果的 CAI 和 MFE 分布。

![Scatter Plot](https://bml-test-test.bj.bcebos.com/helix_upload/lineardesign%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20advance%20%E6%80%BB%E7%BB%93%20%E4%B8%AD%E6%96%87-b6ed6f5e-8f9e14ce.jpeg)


**MFE（最小自由能）**

- 数值越低（更负）通常表示结构更稳定
- 过低可能意味着结构过稳，需结合翻译目标综合判断

**CAI（密码子适应指数）**

- CAI 越接近 1.0，通常代表密码子使用更贴近高表达偏好
- 实际筛选建议与 MFE 联合评估，而非单一指标决策


散点图下方是设计详情。您可以通过点击左边栏中的序列名称查看不同的设计结果。

![Sequence List](https://bml-test-test.bj.bcebos.com/helix_upload/lineardesign%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20advance%20%E5%B7%A6%E8%BE%B9%E6%A0%8F%20%E4%B8%AD%E6%96%87-9bf23cc6-6eca987c.jpeg)

您还可以点击表头来切换展示 MFE 或 CAI。

![Table Header Toggle](https://bml-test-test.bj.bcebos.com/helix_upload/lineardesign%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20advance%20%E5%B7%A6%E8%BE%B9%E6%A0%8F%20%E8%A1%A8%E5%A4%B4%20%E4%B8%AD%E6%96%87-ba5ea428-2d3245b9.jpeg)

### 二级结构成对视觉图（Pairwise visual diagram）

这是可互动的二级结构展示图。

![Interactive Structure](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4rCkNiQeRM75TZ_7fIFBje.png)

蓝色线连接的两个碱基为配对碱基，鼠标悬浮到线上会显示该配对的属性。如下图所示，位于 173 的 G 与位于 249 的 C 配对，两个碱基之间的距离为 76。

![Hover Info](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7aP97nb-VEL6KbUolCilpA.png)

### 二级结构图

![Dot Parenthesis](https://bml-test-test.bj.bcebos.com/helix_upload/infoflow%202022-12-20%2018-14-50-f5d0a1c8.png)

### mRNA 序列对照表

该表对比展示输入的蛋白质序列、预测的 mRNA 序列和该序列的二级结构点括号表示图（Dot-Parenthesis Notation）。

![Sequence Alignment](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7PBUg9_FZHpYyZyheFIaEn.png)

- 左侧数字代表该行第一个字符在序列中的位置，右侧数字代表该行最后一个字符在序列中的位置。
- 第一行为蛋白质序列，每个字母表示一个氨基酸。
- 第二行为核酸序列，每个字符表示一个碱基。
- 第三行为点括号表示的二级结构序列，每个字符含义如下：

`.`：无配对（unpaired）

`(`：与后面的碱基配对

`)`：与前面的碱基配对

- 点击右侧「复制序列」可直接将第二行 mRNA 序列复制到剪贴板。

## 数据下载

点击结果页中的「下载」按钮导出结果文件，下载结果为 `.txt`。

![Download](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA70D3lBeWpLiKl7F8p4TuCU.png)

---

上一步：[参数配置](./E-05-03-LinearDesignParameters.md)
下一步：[LinearDesign 计费与价格](./E-05-05-Pricing.md)
