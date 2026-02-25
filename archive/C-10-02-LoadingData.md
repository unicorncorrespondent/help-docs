# 输入数据与任务提交
> subtitle: 在 HelixFold3 中输入各种生物分子信息，以及提交任务

在了解结构预测将如何助力生物医学研究后，我们现在开始正式使用 HelixFold3。在本章中，我们将了解如何在 HelixFold3 中输入基本数据，以及如何提交任务。

> Note to Users: PaddleHelix 也提供 HelixFold-S1 模型进行结构、互作预测。关于 HelixFold3 与 HelixFold-S1 的具体使用场景差异，见 [模型选择](C-01-01.md)


## 快速预览
- HelixFold3 允许输入多种生物大分子，包括蛋白、配体、DNA、RNA、离子，并且适配各种序列格式
- HelixFold3 提供多种可选参数提高预测精度，满足不同任务需求
- 在`任务管理中`可以查看任务进度


## 输入数据
> Note to myself: 代码框右上角允许直接点击复制
> Note to users: 可以直接点击控制台页面右上角载入以下序列

我们可以在 HelixFold3 中输入多种生物分子序列，例如蛋白、配体、DNA与RNA等（见 [HelixFold3 支持的分子列表](C-01-02.md)）。 由于我们想要探索 BRD4-BD1，VCB 与 PROTAC 49 的相互作用，因此我们将在此输入蛋白质与小分子配体信息。

![Input](images/B-02-Input.png)
> caption: 输入框

HelixFold3 的蛋白信息支持我们直接输入 [FASTA 格式](links-to-fasta-format-infor)的蛋白质序列，例如 VCB E3 泛素连接酶的多个亚基组份，包括：

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

在确定了蛋白序列后，我们可以继续添加配体信息。HelixFold3 允许以 [CCD 或 SMILES 格式](C-01-02.md)输入配体信息。

由于 PROTAC 49 的 CCD 为`QIK`，我们可以在选择`配体`作为实体类型后，选择`CCD`格式后直接输入`QIK`获得配体信息。
在完成输入后，输入框后方会出现“2D”标识。我们可以将鼠标悬浮在这个标识上以预览配体的结构，便于检查。如果输入错误，可以点击右方按键进行删除。

![Ligand QIK Structure|300](images/B-02-QIK.svg){width=50%}
> caption: PROTAC 42 分子结构
> Note to myself: 需要缩放


## 提交任务&进度查看

在完成数据输入后，我们可以输入任务名称（选填），随后点击`提交运算`，运算预计需要2分钟。具体进度可以通过`任务管理中`页面查看。


## 可选参数（进阶）

虽然在本教程中没有涉及，但是 HelixFold3 支持对序列与任务进行许多进阶操作，以满足不同需求，这些操作包括：

- [批量提交任务](C-01-02.md)：通过 JSON 文件批量提交多个任务
- [侧链修饰](C-01-03.md)：用SMILES格式指定蛋白质、DNA 和 RNA 的任意侧链修饰基团
- [相互作用约束](C-01-04.md)：通过已有知识限定不同分子间的相互作用位点，提高预测准确率
- [上传参考结构](C-01-06.md)：上传与待预测蛋白相似的已知结构，大幅提高预测精度
- [Recycle 数量](C-01-07.md)：影响模型效果，数量越大结果准确
- [推理数量](C-01-07.md)：影响结果数量，可以生成指定数量的结构便于选择
- [输出格式](C-01-07.md)：输出格式为cif或pdb，便利不同后续操作流程

在等待任务完成的过程中，欢迎点击链接进入对应页面进行了解。

上一步：[案例背景](B-01-ExampleBackground.md)
下一步：[结果解读](B-03-InterpretingResults.md)