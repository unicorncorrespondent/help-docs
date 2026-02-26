# LinearFold 结果解读

<div class="doc-page-type doc-page-type--result"><span class="doc-page-type__icon">📊</span><span>分类：结果</span></div>


> 理解 LinearFold 输出的二级结构结果

完成 LinearFold 预测后，您可以在在线页面查看二级结构结果，并下载 `.txt` 文件用于后续分析。

## 在线页面结果展示

### 二级结构成对视觉图（Pairwise Visual Diagram）

这是可互动的二级结构展示图，左右分别展示机器学习模型（Machine-Learned Model）和动力学模型（Thermodynamic Model）的预测结果，便于您快速对比两种模型的一致性。

![Results Interface](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5cQK4QAYJB4KKmiFQIzigW.png)

蓝色连线表示一对配对碱基。将鼠标悬停在连线上，可查看该配对的详细属性。例如：位于 93 的 G 与位于 263 的 C 配对，两个碱基之间的距离为 170。

![Hover Info](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7hOsNuaSNOMbOZfhcLYtgn.png)

### 二级结构点括号表视图（Dot-Parenthesis Notation）

结果页同时提供点括号表示法，用“点 + 括号”表示每个位置的配对状态，便于复制、保存和用于下游分析。

![Dot Parenthesis View](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4tJkJyQnxE-J13_KWhKKSu.png)

每个字符的含义如下：

- `.`：无配对（unpaired）
- `(`：与后面的碱基配对
- `)`：与前面的碱基配对

## 结果解读建议

- 两种模型在同一区域给出一致配对时，通常说明该区域结构更稳定、可信度更高。
- 若只在单一模型中出现配对，建议结合生物学背景或其他工具进行交叉验证。
- 对于关键功能位点，建议优先关注跨模型一致且距离合理的配对关系。

## 数据下载

### 下载方式

所有结果都可以通过交互图下方的「下载」按钮导出。

![Download Button](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7KwXUJ0aZJPakAmZmBwA9y.png)

### 下载格式

下载文件为 `.txt` 格式，包含输入序列、二级结构表示及相关结果信息。

![Download Format](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4XtBd9ip5Hm46JrcVull3f.png)
