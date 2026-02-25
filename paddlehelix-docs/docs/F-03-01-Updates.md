# 更新日志

> 了解 PaddleHelix 平台的版本更新和功能改进

PaddleHelix 平台持续迭代更新，不断引入新的功能和优化现有模块的性能。了解平台的更新历史有助于您掌握最新的功能特性和改进内容，确保您能够充分利用平台提供的各项能力。本页面记录了 PaddleHelix 从 2.0 版本到 3.0 版本的重大更新，包括新功能上线、性能优化和界面改进等信息。


# 3.0版本













<a id="85d09e2"></a>

## 3.0.1 版本

螺旋桨3.0版本一系列更新中的第一次上线，主要针对首页信息和设计进行了重大更新。













<a id="f735bec"></a>

###  首页说明

1. 全新设计，简洁大方，更具科技感

 ![](https://bml-test-test.bj.bcebos.com/helix_upload/%E9%A6%96%E9%A1%B5%20%E9%A6%96%E5%B1%8F%20%E4%B8%AD%E6%96%87-6c3cdd70.jpg)

2. 引入了场景化解决方案的概念，根据用户实际场景推荐算法，贴合用户实际需求

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E9%A6%96%E9%A1%B5-%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%20%E4%B8%AD%E6%96%87-a27ac139.jpg)

3. 提供了合作模式与合作案例的说明。

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E9%A6%96%E9%A1%B5%20%E5%90%88%E4%BD%9C%20%E4%B8%AD%E6%96%87-bc07230b.jpg)

4. 生物计算大模型现在有了自己的专属页面，技术领先一目了然。

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E9%A6%96%E9%A1%B5-%E5%A4%A7%E6%A8%A1%E5%9E%8B%20%E4%B8%AD%E6%96%87-853f378a.jpg)

 















<a id="ab4d215"></a>

# 2.0 版本













<a id="9da61bd"></a>

## 2.23版本 - 2024.8.28上线













<a id="93eba82"></a>

### 新增功能

- PaddleHelix 作为全球首个复现AlphaFold3并开源的团队，正式上线了HelixFold3，在常规的小分子配体、核酸分子（包括 DNA 和 RNA）以及蛋白质的结构预测精度上已与 AlphaFold3 相媲美。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/helixfold3%20hf3%20%E8%BE%93%E5%85%A5%E9%A1%B5%E6%95%B4%E4%BD%93%20%E4%B8%AD%E6%96%87-883bb673.jpg" style="zoom:50%;" />















<a id="e34735c"></a>

## 2.22版本 - 2024.5.10上线













<a id="67056ab"></a>

### 升级

- HelixVS正式版上线，可以使用指定分子库的筛选，并支持指定相互作用约束。

  















<a id="aa5983d"></a>

## 2.21版本 - 2024.4.1上线













<a id="43047fc"></a>

### 新增功能

- LinearDesign支持根据指定的5'UTR和/或3'UTR进行CDS序列设计
- 抗原抗体结构预测算法HelixFoldMultimer_AgAb、5'UTR设计算法HelixUTRdesign，RNA二级结构预测算法LinearFold和LinearPartition都接入计费，支持公有云使用。















<a id="1d64acb"></a>

## 2.20版本 - 2024.2.5上线













<a id="12ad206"></a>

### 新增功能

- 新增MMGBSA模块，能够更加准确的计算蛋白质-小分子的绝对结合自由能。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/mmgbsa%20%E8%BE%93%E5%87%BA%E6%95%B4%E4%BD%93%20%E4%B8%AD%E6%96%87-b5287b18.jpg" style="zoom:50%;" />

- HelixADMET自训练模型完成升级，且支持查看模型在训练集和测试集的表现。用户还可以选择使用单个/混合自训练模型来进行预测。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/admet%20%E8%87%AA%E8%AE%AD%E7%BB%83%E6%A8%A1%E5%9E%8B%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E4%B8%AD%E6%96%87-cd042671.jpg" style="zoom:50%;" />

- HelixADMET基线模型与自训练模型支持查看置信度。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/admet%20%E5%9F%BA%E7%BA%BF%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E8%AF%A6%E6%83%85%E9%A1%B5%20%E5%BA%95%E9%83%A8%20%E4%B8%AD%E6%96%87-2596b666.jpg" style="zoom:50%;" />















<a id="168c5e7"></a>

## 2.19版本 - 2023.12.29上线













<a id="50737ec"></a>

### 新增功能

- 新增蛋白质-小分子对接构象预测模型HelixDock，大幅度提升了构象预测的准确度。其预测结果大幅度领先其他方法，也包括DeepMind最新公布的AlphaFold-lastest。

- 新增抗原抗体结合构象预测模型HelixFold-Multimer-AgAb。 精准预测抗原抗体结合构象，在68例最近PDB 发布的测试集上预测准确度不仅超过了有单体构象输入的传统 Dock模型，也同时超过了现有的 AI 模型。

- 新增考虑合成性的分子从头生成，设计的分子可合成性更高

- 新增基于骨架的分子生成，能够基于已知的活性骨架，用AI算法设计出崭新的分子。

















<a id="eb51139"></a>

## 2.18版本 - 2023.09.14 上线

HelixADMET现在可以通过API来调用啦！另外，蛋白复合物预测和HelixADMET都已经正式支持商业化使用。















<a id="5a7b838"></a>

### 新增功能

- HelixADMET模型支持API方式调用，请前往[API应用列表页面](https://console.bce.baidu.com/ai/??_=1694664209606#/ai/paddlehelix/apiList/apiPage)创建应用或查看操作说明

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/console%20api%E5%BA%94%E7%94%A8%E5%88%97%E8%A1%A8%20%E4%B8%AD%E6%96%87-24d3ac16.jpg" style="zoom:50%;" />

- 蛋白复合物预测与HelixADMET都支持商业化使用

- 百度云console页面全面优化，支持直接跳转螺旋桨官网、查看量包列表、API应用列表等。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/console%20%E5%B9%B3%E5%8F%B0%E6%80%BB%E8%A7%88%E9%A1%B5%E9%9D%A2%20%E4%B8%AD%E6%96%87-d4424c0b.jpg" style="zoom:50%;" />















<a id="8b9ecf2"></a>

### 优化

- HelixFold和HelixFold-Single目前在平台上都已支持10-2000长度的蛋白预测了，有需要预测更长的蛋白，可以邮件我们进行咨询。

- 任务提交页面的蛋白质3D视窗进行了优化升级

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/pdb%E5%BA%93%20%E6%8F%90%E4%BA%A4%20%E4%B8%AD%E6%96%87-b2d1ee88.jpg" style="zoom:50%;" />

- 逆合成路线规划结果页显示优化升级

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E9%80%86%E5%90%88%E6%88%90%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E6%96%B0%E7%89%88%20%E4%B8%AD%E6%96%87-955113c0.jpg" style="zoom:50%;" />

















<a id="604d89e"></a>

## 2.17版本 - 2023.07.17 上线

本版本上线了两个新的模块：5’UTR 设计和蛋白复合物预测，并在多个模块进行了一定的功能优化。















<a id="edc44c8"></a>

### 新增功能

- 新增5‘UTR设计，支持根据用户输入的CDS设计5’UTR序列。

![](https://bml-test-test.bj.bcebos.com/helix_upload/5%27utr%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E4%B8%AD%E6%96%87-ae15e096-0a254780.jpeg)

- 新增蛋白复合物预测，支持根据用户给出的蛋白链预测蛋白复合物的三维结构。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E8%9B%8B%E7%99%BD%E5%A4%8D%E5%90%88%E7%89%A9%E9%A2%84%E6%B5%8B-7968547d-fbee71fe.jpeg" style="zoom:50%;" />















<a id="674a283"></a>

### 优化

- LinearFold/LinearPartiton的结果页现已支持显示二级结构

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/linearfold%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E4%B8%AD%E6%96%87-69b95f5c-854aee47.jpeg" style="zoom:50%;" />

- LinearDesign支持根据内切酶名称搜索识别位点

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/lineardesign%E5%86%85%E5%88%87%E9%85%B6%E5%90%8D-2f1352b8-289e5322.jpeg" style="zoom:25%;" />















<a id="96fd492"></a>

## 2.16版本 - 2023.05.31 上线

本版本正式支持百度商业账户的登录，并上线了用户问卷组件。积极参与还可以获得免费的平台任务次数哦，欢迎大家对螺旋桨提出建议和意见。















<a id="f91b33d"></a>

### 新增功能

- 支持百度商业账户的登录

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%95%86%E4%B8%9A%E8%B4%A6%E5%8F%B7%E7%99%BB%E5%BD%95-a729530d-6cf9ae33.jpeg" style="zoom:50%;" />

- 上线用户调研小组件，方便大家更快捷地提供使用反馈

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E9%A6%96%E9%A1%B5%E8%AF%84%E4%BB%B7%20%E4%B8%AD%E6%96%87-2435701a-24789b43.jpeg)















<a id="cab1962"></a>

### 优化

- 支持.fasta格式的文件



















<a id="ee814a7"></a>

## 2.15版本 - 2023.03.31 上线

本版本正式上线了公有云版本的蛋白质结构预测算法HelixFold和HelixFold-Single以及mRNA序列设计（LinearDesign) 的Basic, Plus, Advance版本，用户可以通过开通百度云中的相关付费功能来在线使用这些算法。















<a id="ca399ae"></a>

### 新增功能

- LinearDesign Advance版本，支持设计多条序列，排除酶切位点，自定义密码子表等高级功能。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/lineardesign%20advance%20%E8%BE%93%E5%85%A5%E9%A1%B5%E9%9D%A2%20%E4%B8%AD%E6%96%87-620232ac-f23533fe.jpeg" style="zoom:50%;" />

- 正式上线HelixFold, HelixFold-Single和mRNA序列设计（LinearDesign) 公有云版本，开通公有云付费功能即可使用。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E4%BB%98%E8%B4%B9%20%E5%90%B8%E5%BA%95%20%E4%B8%AD%E6%96%87-ad9b2bc0-4a42e433.png" style="zoom:50%;" />

- 新增HelixVS（Demo）。HelixVS是一个能够实现千万/亿级别小分子虚拟筛选的产品。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/helixvs%20%E8%BE%93%E5%85%A5%E9%A1%B5%20%E4%B8%AD%E6%96%87-2a23b62b-cff5a6a0.jpeg" style="zoom:50%;" />

















<a id="43faa45"></a>

## 2.14版本 - 2023.01.19 上线

本版本优化了分子对接和分子生成的结果页展示















<a id="786dd66"></a>

### 新增功能

- 分子生成结果页新增3D结构视图，支持查看生成分子在靶点口袋中的构象。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%88%86%E5%AD%90%E7%94%9F%E6%88%90%20%E7%BB%93%E6%9E%9C%E9%A1%B5%203d%20%E4%B8%AD-57003b63.jpg" alt="img" style="zoom:33%;" />













<a id="d061ba4"></a>

### 优化

- 分子对接结果页插件升级，用户可以更方便查看结果。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%88%86%E5%AD%90%E5%AF%B9%E6%8E%A5%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E4%B8%AD-8e326da2.jpg" alt="img" style="zoom:33%;" />















<a id="63fe8dc"></a>

## 2.13版本 - 2022.12.21 上线

本版本新增逆合成路线规划，并对mRNA序列设计进行升级















<a id="931e4a0"></a>

### 新增功能

- 新增逆合成路线规划

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/infoflow%202022-12-20%2017-35-08-21f05513.png" alt="img" style="zoom:33%;" />

- mRNA序列设计进行功能升级

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/infoflow%202022-12-26%2015-43-45-a0fae2ac.png" alt="img" style="zoom:66%;" />



















<a id="1cb0c3b"></a>

## 2.12版本 - 2022.11.15 上线

本版本对蛋白质结构预测的结果展示进行了升级















<a id="74e1cc4"></a>

### 新增功能

- 支持使用AlphaFold2进行结构预测，方便用户与HelixFold预测结果进行对比

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/image%20%2887%29-e12be800.png" alt="img" style="zoom:33%;" />

- 蛋白结构预测支持展示局部plddt

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/agaacobifa4fbxjgcklkybhljrlptzru-d3f5ddb3.png" alt="img" style="zoom:50%;" />













<a id="9ece22c"></a>

### 优化

- 蛋白质结构预测的3D视窗进行了升级，用户可以更方便地查看结果细节

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/image%20%2896%29-12595c83.png" alt="img" style="zoom:50%;" />



















<a id="e3d3110"></a>

## 2.11版本 - 2022.10.19 上线

本版本支持了用GitHub进行登录，方便海外用户的使用。另外，我们进一步优化了ADMET的结果展示，以期给用户更好的体验。













<a id="ce123a0"></a>

### 新增功能

- 支持GitHub登录

  <img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7bstX0s6pE86IqRWOhEERI.png" alt="img" style="zoom:50%;" />

- ADMET 结果页新增雷达图

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6ysSOi48FDY51Sz3uaEGPA.png" alt="img" style="zoom:50%;" />

- ADMET预测模块新增三个指标：QED,SA和NP

  <img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5wgJJSgNBAcZaYkc9Itv0o.png" alt="img" style="zoom:50%;" />













<a id="e5183dc"></a>

### 优化

- 优化ADMET预测的警示标识和部分其他体验细节。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5Ufax-r8FPkYdITWyt8-46.png" alt="img" style="zoom:50%;" />

















<a id="b8d65f7"></a>

## 2.10版本 - 2022.09.15 上线

本版本主要对任务管理进行优化，并在首页增加了大模型相关的介绍。

















<a id="e2c499e"></a>

### 新增功能

- 首页新增大模型相关的介绍

  <img src="https://easydl-download.bj.bcebos.com/helix_doc/291ebbcc4bad807a522e8348d9b853b7.png" alt="img" style="zoom:50%;" />

















<a id="2fc06df"></a>

### 优化

- 分区展示预测任务和自训练任务，查找任务更一目了然

<img src="https://easydl-download.bj.bcebos.com/helix_doc/7d074aa25327bbda707e3f49d27f9b57.png" alt="img" style="zoom: 80%;" />

- 支持直接搜索任务名称/ID，或根据具体模型筛选任务

<img src="https://easydl-download.bj.bcebos.com/helix_doc/87ad9dc25dee817480ebb0f112126a88.png" alt="img" style="zoom:80%;" />



















<a id="9b59d75"></a>

## 2.9版本 - 2022.08. 18 上线

本版本新增四个模块，新药研发下新增蛋白质结构预测算法HelixFold-Single, 蛋白突变亲和力变化预测，分子活性预测（结构）；精准医疗下新增药物重定向。

















<a id="fd81a3e"></a>

### 新增功能

- HelixFold-Single: 基于序列的蛋白结构预测

  HelixFold-Single无需MSA作为输入，极大地提升了蛋白结构预测的速度。在精度不输AlphaFold2的基础上，效率最多提升近千倍 。

  <img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4FZozIiexK5oOaQLV3fe1W.png" alt="img" style="zoom:50%;" />

- 蛋白突变亲和力变化预测

  根据给定的蛋白质序列和突变位点预测蛋白突变引起的蛋白结合亲和力变化ddG

  <img src="https://easydl-download.bj.bcebos.com/helix_doc/45936e80c1ceeec251b5364fe38e1879.png" alt="img" style="zoom:33%;" />

- 分子活性预测（结构）

  预测 DTI（药物-靶标相互作用）并提供给定蛋白质靶标和不同化合物的亲和力评分。

  <img src="https://easydl-download.bj.bcebos.com/helix_doc/93b589e8026570786f9e28adb26d4b28.png" alt="img" style="zoom:33%;" />

- 药物重定向

  预测用户指定药物在特定样本中的IC50值，从而用于药物重定向，或为特定样本所代表的疾病寻找潜在的活性药物

  <img src="https://easydl-download.bj.bcebos.com/helix_doc/d94116600eedc3182c75b6c778247bd2.png" alt="img" style="zoom:33%;" />



















<a id="473e33c"></a>

## 2.8版本 - 2022.07. 01 上线

本版本新增蛋白质功能预测模块。我们还在首页为每个模块都添加了详情页，方便用户快速了解感兴趣的服务。

















<a id="b500881"></a>

### 新增功能

- 蛋白质功能预测

  根据用户提供的蛋白质结构信息，预测它在预测蛋白质在细胞成分，分子功能和生物学进程当中的作用。

  <img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4CogaUiYBNvJyZKg-c0itI.png" alt="img" style="zoom:50%;" />















<a id="4aeadf0"></a>

### 优化

- 双药联用模型升级，增强对单个细胞系的预测表现。

- 首页新增功能详情页，用户可以通过导航栏进入，了解螺旋桨在不同场景下可以提供的服务

  ![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7bVyuKUCtNIak6HGGl2tvx.png)

- 在产品文档下新增『引用我们』页面。如果您在工作中使用了我们的平台服务，请如页面列出来的那样引用原始文章和螺旋桨平台 (https://paddlehelix.baidu.com/) 。如果您可以将发表的文章通过 [邮件](mailto:baidubio_cooperate@baidu.com) 让我们知悉，我们将不胜感激。

  <img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA657s9hOKtBQaZu3ChZ5lhI.png" alt="img" style="zoom:50%;" />

















<a id="44b4218"></a>

## 2.7版本 - 2022.05. 23 上线

本版本新增蛋白-蛋白相互作用的两个相关模块，包括抗原-抗体亲和力预测和新冠抗体中和性预测。另外，我们对首页的展示进行了优化，方便用户更快了解螺旋桨的服务。用户还可以通过订阅功能来了解我们的最新动态。

















<a id="44153f8"></a>

### 新增功能

- 抗原-抗体亲和力预测

  根据用户提供的抗原抗体序列，预测二者之间的相互作用，并给出亲和力打分。

  ![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7YKFGe3sBBI6xFrVZo44ZC.png)

- 新冠抗体中和性预测

  根据用户提供的抗体序列，预测抗体的中和能力。

  ![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4GUiQXkHNGB652AqjDtlkA.png)

- 订阅功能

  首页支持用户订阅平台动态，最新动态可以通过邮件及时知晓。

  <img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA595lQ2OB1PX6f0A_koLCro.png" alt="img" style="zoom:50%;" />















<a id="22c54b1"></a>

### 优化

- 蛋白质结构预测模块新增两个可调参数，用户可以根据需求进行调节以获得更佳结果。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA49w6FyPw5Pm67j_1Q0NNY0.png" alt="img" style="zoom:50%;" />

- 首页优化，用户可以在首页上更方便、全面地了解平台提供的服务

  ![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6LsdkWwW1DVYuhHPcAPvE_.png)

















<a id="9f30457"></a>

## 2.6版本 - 2022.03. 28 上线















<a id="2e840d7"></a>

### 优化

- 产品文档布局优化
- 平台登录逻辑优化

















<a id="85de0a1"></a>

## 2.5版本 - 2022.01. 27 上线















<a id="bdd22c0"></a>

### 功能新增

ADMET预测使用基线模型的结果页展示中，有PAINS预警的结构会直接展示在化合物的二维结构图中。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6mbK7WxxxAfIovL_nukzJn.png" alt="img" style="zoom:50%;" />

- 产品文档下新增『更新日志』，平台迭代更易追踪。

- 首页新增动态栏，最新动态及时知道。

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7BFPSrLZFMEpw8MTj6akQe.png)















<a id="059702e"></a>

### 优化

- 产品文档布局优化



















<a id="5c17773"></a>

## 2.4版本 - 2021. 11. 26 上线

本版本新增一个功能模块双药联用，这也是平台在【精准医疗】场景下上线的第一个功能！另外，我们还对三个已有的功能模块进行了功能拓展（详见下），以满足更多用户的需求。















<a id="8b29dc2"></a>

### 功能新增

- 双药联用

预测用户指定的两个药物在不同细胞系中的协同效用。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6W916Q3BtPRpAw7T2D1dpD.png" alt="img" style="zoom:50%;" />

- 基于靶点的分子生成支持用户新增第二个蛋白为『靶蛋白』或『非靶蛋白』

生成的分子会与靶蛋白具有较高的亲和力，而与非靶蛋白亲和力较低。双蛋白的分子生成可运用于双靶点药物的设计或降低靶向药物的脱靶效应，降低负作用概率。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7D-islrp9Ld5wpNdjZWz83.png" alt="img" style="zoom:50%;" />

- 蛋白质结构预测支持用户添加『参考结构』，以评估模型预测的准确性。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4xIUNtbxJBdJKRlLMdgg_S.png" alt="img" style="zoom:50%;" />















<a id="4d503c4"></a>

### 优化

- 分子活性预测单次可预测的化合物数量提升至1000个
- 优化分子活性预测结果页展示

















<a id="011f541"></a>

### 模型升级

- ADMET预测完成模型升级

















<a id="43cf4a1"></a>

## 2.3版本 - 2021. 09. 29 上线

本版本增加两个新功能模块，并对ADMET的数据展示进行优化。

















<a id="a7346f1"></a>

### 功能新增

- 基于靶点的分子生成

根据用户给定的靶蛋白结构进行分子设计，生成的分子与靶蛋白会具有较高的亲和力。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7g2e3JYWBLJZFfGb7nmDK8.png" alt="img" style="zoom:50%;" />

- 分子对接

根据给定的蛋白结构与结合口袋，预测化合物与靶蛋白之间的亲和力，帮助用户更好地对大量分子做排序和决策。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7TYh-_619DCIBqKanqTZll.png" alt="img" style="zoom:50%;" />















<a id="1a952db"></a>

### 优化

- ADMET预测单次可预测的化合物数量提升至1000个

- ADMET结果页展示优化

  - 卡片视图一目了然

    <img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7YTK2IFDBJvb6OlRxf9e8k.png" alt="img" style="zoom:50%;" />

  - 支持对结果进行筛选

    <img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6CcGJnWbROh6tJr78mi6VW.png" alt="img" style="zoom:50%;" />

    

  - 详情页新增警告标识，更快定位不良指标。

    <img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA40JuWNCOVLQpVLKdIofz3Y.png" alt="img" style="zoom:50%;" />

  















<a id="1f07cb6"></a>

## 2.2版本 - 2021. 07. 31 上线

本版本新增蛋白质结构功能模块，并对分子活性预测的算法做了升级迭代。















<a id="2dc4b0c"></a>

### 功能新增

- 蛋白质结构预测

蛋白质结构预测模块能够根据用户提供的序列，预测出其在三维空间中的折叠结构。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6HSlpBbuJOT5A-09QUTW9B.png" alt="img" style="zoom:50%;" />

















<a id="726a681"></a>

### 模型升级

- 分子活性预测完成模型升级

















<a id="d361250"></a>

### 优化

- 对全局提供英文版本的操作、注释说明

















<a id="3c07623"></a>

## 2.1版本 - 2021. 07. 08 上线

本版本进行了多项优化，加强了网站的易用性。

















<a id="7b1d73d"></a>

### 功能新增

- 意见反馈表单

可以在首页底部找到反馈入口，直接给我们发送建议或意见。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7jUVAovipD4KZoFOAFknqt.png" alt="img" style="zoom:30%;" />

- 在产品文档下新增Tutorial模块，提供各功能模块的使用说明。

















<a id="f84d1a4"></a>

### 优化

- 优化使用历史自训练模型的操作

用户可以在数据录入页面直接选择过往任务中训练好的自训练模型，操作更便捷。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7DzMU1-85Llp5Q_XsBiSjq.png" alt="img" style="zoom:50%;" />



- 优化 - 任务管理的布局

以树形结构展示『模型自训练』任务和使用该模型进行的『预测任务』，方便用户快速定位使用相同模型的预测结果。

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6NnD5deHlHm4zbKONsATFO.png)

- 补全说明文案

对ADMET预测、分子活性预测、基于靶点的分子生成模块的输出结果补全了更完整的说明文案。

















<a id="83faaec"></a>

## 2.0版本 - 2021. 05. 20 上线

2.0 版本是PaddleHelix第一次正式对外发布的版本，上线了新药研发和疫苗设计这两个应用场景下共计六个功能模块（详情见下）。特别值得一提的是平台提供的模型自训练服务，模型自训练能够根据用户提供的数据集，重新对由PaddleHelix预训练好的模型进行微调，使得预测结果更加准确。目前可以在ADMET预测和分子活性预测中体验。

















<a id="d65d840"></a>

### 功能新增

- ADMET预测

根据给定化合物的分子式预测基础的理化、ADMET、成药性等性质。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4Whiau_V1IirlBbtqfekyy.png" alt="img" style="zoom:50%;" />

- 分子活性预测

基于靶蛋白的序列和化合物分子式预测药物-靶标的亲和力

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA55D-dI0YpNhYwpvZfRWdCd.png)



- 基于配体的分子生成

根据参考配体结构生成与其在fingerprint上具有相似度的分子。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6w1E8ZaZZDMJzpaACDJu7s.png" alt="img" style="zoom:50%;" />



- LinearFold 和 LinearPartition

快速、准确地预测RNA二级结构

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5cQK4QAYJB4KKmiFQIzigW.png" alt="img" style="zoom:50%;" />

- mRNA序列设计

根据给定的蛋白质序列快速设计出蛋白质表达水平更高的mRNA序列，﻿可以用于mRNA疫苗的开发。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7PBUg9_FZHpYyZyheFIaEn.png" alt="img" style="zoom:50%;" />


---

下一步：[联系我们](./F-04-01-ContactUs)

---


本文档内容整理自 PaddleHelix 帮助文档 `HelpDoc-20260126` 源文档中的"3.0 版本"和"2.0 版本系列"章节，源文档锚点 ID 分别为 `<a id="fe0b6fb"></a>` 和 `<a id="ab4d215"></a>`，对应行号范围为第 5628-5680 行和第 5698-5970 行。

**源文档完整路径**：`02-Input/files/HelpDoc-20260126`
