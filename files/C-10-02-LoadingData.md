# 输入数据与任务提交

<div class="doc-page-type doc-page-type--input"><span class="doc-page-type__icon">🧪</span><span>分类：输入</span></div>


> 在 HelixFold3 中输入各种生物分子信息，以及提交任务

在了解结构预测将如何助力生物医学研究后，我们现在开始正式使用 HelixFold3。在本章中，我们将了解如何在 HelixFold3 中输入基本数据，以及如何提交任务。

## 快速预览

- HelixFold3 允许输入多种生物大分子，包括蛋白、配体、DNA、RNA、离子，并且适配各种序列格式
- HelixFold3 提供多种可选参数提高预测精度，满足不同任务需求
- 在「任务管理」中可以查看任务进度

## 输入数据

我们可以在 HelixFold3 中输入多种生物分子序列，例如蛋白、配体、DNA 与 RNA 等。由于我们想要探索 BRD4-BD1、VCB 与 PROTAC 49 的相互作用，因此我们将在此输入蛋白质与小分子配体信息。

![输入框](/images/B-02-Input.png)

### 蛋白质序列

HelixFold3 的蛋白信息支持直接输入 FASTA 格式的蛋白质序列，例如 VCB E3 泛素连接酶的多个亚基组份：

```
>8BEB_1|Chain A|Elongin-B|Homo sapiens (9606)
MDVFLMIRRHKTTIFTDAKESSTVFELKRIVEGILKRPPDEQRLYKDDQLLDDGKTLGECGFTSQTARPQAPATVGLAFRADDTFEALCIEPFSSPPELPDVMK
```

```
>8BEB_2|Chain B|Elongin-C|Homo sapiens (9606)
MMYVKLISSDGHEFIVKREHALTSGTIKAMLSGPGQFAENETNEVNFREIPSHVLSKVCMYFTYKVRYTNSSTEIPEFPIAPEIALELLMAANFLDC
```

```
>8BEB_3|Chain C|von Hippel-Lindau disease tumor suppressor|Homo sapiens (9606)
GSMEAGRPRPVLRSVNSREPSQVIFCNRSPRVVLPVWLNFDGEPQPYPTLPPGTGRRIHSYRGHLWLFRDAGTHDGLLVNQTELFVPSLNVDGQPIFANITLPVYTLKERCLQVVRSLVKPENYRRLDIVRSLYEDLEDHPNVQKDLERLTQERIAHQRMGD
```

而我们同样也可以以 FASTA 格式输入靶点结构 BRD4-BD1 的序列：

```
>8BEB_4|Chain D|Bromodomain-containing protein 4|Homo sapiens (9606)
SMNPPPPETSNPNKPKRQTNQLQYLLRVVLKTLWKHQFAWPFQQPVDAVKLNLPDYYKIIKTPMDMGTIKKRLENNYYWNAQECIQDFNTMFTNCYIYNKPGDDIVLMAEALEKLFLQKINELPTEE
```

### 配体信息

在确定了蛋白序列后，我们可以继续添加配体信息。由于 PROTAC 49 的 CCD 为 `QIK`，我们可以在选择「配体」作为实体类型后，选择「CCD」格式后直接输入 `QIK` 获得配体信息。

在完成输入后，输入框后方会出现「2D」标识。我们可以将鼠标悬浮在这个标识上以预览配体的结构，便于检查。

## 提交任务

在完成数据输入后，我们可以输入任务名称（选填），随后点击「提交运算」，运算预计需要 2 分钟。具体进度可以通过「任务管理」页面查看。

## 可选参数

:::info 进阶内容
虽然在本教程中没有涉及，但是 HelixFold3 支持对序列与任务进行许多进阶操作，以满足不同需求：

- [批量提交任务](./C-01-02-Input.md)：通过 JSON 文件批量提交多个任务
- [侧链修饰](./C-01-03-Modification.md)：用 SMILES 格式指定蛋白质、DNA 和 RNA 的任意侧链修饰基团
- [相互作用约束](./C-01-04-ForcedInteraction.md)：通过已有知识限定不同分子间的相互作用位点，提高预测准确率
- [上传参考结构](./C-01-06-UploadReference.md)：上传与待预测蛋白相似的已知结构，大幅提高预测精度
- [其他参数](./C-01-07-OtherParameters.md)：包括 Recycle 数量、推理数量、输出格式等
:::

在等待任务完成的过程中，欢迎点击链接进入对应页面进行了解。
