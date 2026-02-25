<a id="060df41"></a>

# 【多肽/蛋白药物研发】









<a id="b85afe4"></a>

# 模型总览









<a id="d5d814b"></a>

## 背景

近年来，AlphaFold 系列模型以其在精准预测蛋白质单链、复合体及复杂生物分子结构方面的卓越表现，成为生命科学领域的一项革命性突破。这些模型不仅加深了对蛋白质功能和相互作用的理解，还为结构生物学的高效研究提供了技术基础。从 AlphaFold2 到 AlphaFold-Multimer，再到 AlphaFold3，这些模型显著缩短了从序列到结构的研究周期，使过去需要数年完成的建模工作可以在数分钟内实现，同时保持与实验精度相当的预测结果。

尽管 AlphaFold3 在预测复杂生物分子相互作用方面表现出色，但其使用限制（如调用次数和商用限制等）还是阻碍了科研和产业届用户的广泛应用，未能充分释放其技术潜能。为了解决 AlphaFold3 的应用局限性，百度螺旋桨团队结合飞桨深度学习框架和百度智能云高性能计算平台，自主研发了 HelixFold3 生物计算大模型。自发布以来，HelixFold3 在精度上达到了与 AlphaFold3 相媲美的水平（[查看完整技术报告](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3report)），同时在功能覆盖和场景适配方面实现了显著优化。尤其值得一提的是，HelixFold3 专注于攻克复杂生物分子结构预测与功能研究中的关键难题，大幅提升了 AI 技术在生命科学领域的实际应用价值和普及度。

与 AlphaFold3 相比，HelixFold3 支持更复杂的生物分子相互作用场景，包括共价结合、化学修饰、PROTAC（蛋白降解靶向嵌合体）、分子胶和金属酶等。这一拓展不仅满足了学术研究中对更高精度和多样化场景的需求，也显著提升了产业界在药物研发中的效率和精准度。研究者借助 HelixFold3，可以以前所未有的速度和准确性设计和模拟复杂分子，从而加速技术成果的转化，缩短创新产品的上市时间。

HelixFold3 的推出为生命科学研究注入了全新动力。它不仅推动了蛋白质结构预测与相互作用的深入探索，加速了从科学发现到实际产品转化的进程，标志着 AI 技术在生物计算领域的新探索。













<a id="3610fb5"></a>

## 亮点介绍

百度螺旋桨团队与百度智能云联合推出的 HelixFold3 高性能计算服务，为用户提供了一套高效、稳定、易用且高性价比的线上服务方案。通过这一服务，用户无需部署模型、配置安装复杂的运行环境，只需在网页端进行简单的登录操作，即可零代码完成任务提交和结果分析（[查看操作说明](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3)）。除此以外，对于希望能将HelixFold3集成到现有科研工作流的用户，螺旋桨也提供了高效便捷的[API/SDK 接口](https://paddlehelix-docs.readthedocs.io/en/stable/README.html)，为用户提供更灵活的集成方式。这极大地降低模型使用的技术门槛，使用户能够将更多的时间和精力专注于科研探索和实际应用。所有这些功能均以合理的价格提供，目前学术和科研用户还可享受最高五折优惠（详情请参见[HelixFold3定价](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3bill)）

下表总结了HelixFold3的特色功能与优势为：

| 功能模块           | 核心支持与优势                                               |
| ------------------ | ------------------------------------------------------------ |
| **广泛的配体支持** | 兼容CCD/SMILES格式，支持PROTAC等新药开发，提升早期药物发现效率 |
| **灵活的序列修饰** | 支持蛋白质/DNA/RNA自定义修饰（SMILES），覆盖PDB中50%修饰场景，提高候选分子质量 |
| **相互作用约束**   | 可添加实验/理论约束条件，减少验证工作量，降低研发成本        |
| **参考结构增强**   | 整合已知晶体结构，精准捕捉分子相互作用，提升预测可靠性       |
| **自定义参数**     | 可调Ensemble数量/Recycle次数，平衡精度与效率，优化难预测区域结果 |
| **API与SDK**       | 为企业级客户提供 API/SDK 接口，支持按量调用、免 GPU 硬件投入，兼容现有工具链，灵活集成科研工作流，降低成本并提升预测效率 |













<a id="87edddf"></a>

## HelixFold3/HelixFold-S1相关文档目录

为了帮助您更全面地了解HelixFold3的功能和使用方式，我们为您整理了以下文档：

- HelixFold3/HelixFold-S1模型服务介绍：[总览](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3introduction)
- HelixFold3/HelixFold-S1说明：[操作说明](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3)
- HelixFold3/HelixFold-S1 API & SDK介绍与说明跳转：[API&SDK说明](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3sdk)
- HelixFold3/HelixFold-S1输入JSON&输出数据格式说明：[数据说明](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3json)
- HelixFold3/HelixFold-S1计费方式说明：[定价](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3bill)
- HelixFold3完整技术报告：[技术报告](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3report)
- HelixFold-S1完整技术报告：[技术报告](https://arxiv.org/abs/2507.09251)















<a id="a004712"></a>

# HF3/S1操作说明













<a id="5bb26b7"></a>

## 背景介绍

蛋白质是生命活动的关键执行者，其功能依赖于精确的三维结构。1961 年诺贝尔奖得主 Christian Anfinsen 首次提出“氨基酸序列唯一决定蛋白质结构”的观点，自此，蛋白质结构预测问题成为计算生物学和结构生物学的重要挑战。

随着人工智能技术的迅猛发展，AlphaFold 系列模型与 HelixFold 系列模型已显著推动该领域进展。其中最新发布的 **HelixFold3**，在多种生物分子体系（蛋白-蛋白、蛋白-小分子、蛋白-RNA、蛋白-DNA）中均展现出优异的预测精度。

HelixFold3 同时提供丰富灵活的功能选项，满足多样化科研需求，包括但不限于：

- 支持自定义侧链修饰
- 可添加参考结构引导建模
- 支持设定相互作用约束以提高可信度
- 提供批量预测与 API 接口，适用于大规模任务部署与系统集成

👉 模型表现详情请参见：[HelixFold3 生物分子结构预测技术报告](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3report)

尽管已有显著进展，在某些复杂场景中，例如缺乏丰富共进化信息（如抗原–抗体结构预测），或结合模式不在训练集中（如 **De novo** 分子设计），当前主流模型（如 AlphaFold3、HelixFold3、Chai-1）仍面临预测精度不足的问题。

为进一步提升在此类挑战性任务中的表现，我们在 HelixFold3 的基础上开发了 **HelixFold-S1 推理模型**。该模型借鉴大语言模型中的 *Test-time Scaling* 思路，引入了 **接触感知采样策略（Contact-Guided Sampling）**，显著增强了构象空间的探索效率。

在多项评测中，**HelixFold-S1** 在预测精度上全面超越 HelixFold3，尤其在抗原–抗体场景中表现出显著优势。

📄 更多技术细节请参阅：[HelixFold-S1 模型技术报告](https://arxiv.org/abs/2507.09251)











<a id="927b1a6"></a>

## 操作说明





<a id="b6ebf13"></a>

### 选择模型

平台目前提供两种用于生物分子结构预测的模型：

- **HelixFold3 模型**：适用于通用结构预测任务，覆盖蛋白质、核酸及其复合物等大多数应用场景。推荐作为默认选项。

- **HelixFold-S1 模型**：由螺旋桨团队专为多链复合物优化设计，尤其适用于链间交互显著的体系，如蛋白–蛋白复合物、抗原–抗体结合等。

  在预测过程中，S1 模型会首先评估不同链之间每对 token 的接触概率（Contact Probability），并生成接触概率图。接触概率的数值范围为 0 到 1，数值越高表示该对 token 更可能在复合物中形成物理接触。

  在结构构建阶段，模型会优先围绕接触概率高的 token 对进行采样与建模，从而显著提升多链系统中界面结构的预测精度。









<a id="f15b0db"></a>

### 输入实体

用户首先需要输入实体（Entity）数据。每一行为一条实体数据，您需要指定以下内容：

- 实体类型：目前我们支持的实体类型为“蛋白”、“配体”、“DNA”、“RNA”、“离子”
- 数量：代表该实体的复制数量，默认为1
- 序列：具体的实体内容。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20%E8%BE%93%E5%85%A5%E9%A1%B5%20%E4%B8%80%E6%9D%A1%E8%9B%8B%E7%99%BD%E8%BE%93%E5%85%A5%20%E4%B8%AD%E6%96%87-63fd8a37.jpg" style="zoom:50%;" />

不同实体的输入要求与示例请参考下表：

<table>
  <tr>
    <th>实体类型</th>
    <th>数量</th>
    <th>序列说明</th>
    <th>示例输入</th>
  </tr>
  <tr>
    <td>蛋白</td>
    <td><div style="width: 170pt">1–3000 的整数</td>
    <td>由20种标准氨基酸组成的序列（支持fasta格式）</td>
    <td>GPDSMEEVVVPEEPPKL</td>
  </tr>
  <tr>
    <td rowspan="2">配体^</td>
    <td rowspan="2">1-100的整数</td>
    <td>【CCD】用户通过输入CCD或名称来从列表中选择小分子配体</td>
    <td>ATP</td>
  </tr>
  <tr>
    <td>【SMILES】用户直接输入小分子的SMILES（重核数量不超过100，支持绘制）</td>
    <td>CCccc(O)ccc</td>
  </tr>
  <tr>
    <td>DNA</td>
    <td>1–3000 的整数</td>
    <td>由4种标准脱氧核糖核酸ATCG组成的序列（支持fasta格式）</td>
    <td>ACGTTTACGGGG</td>
  </tr>
  <tr>
    <td>RNA</td>
    <td>1–3000 的整数</td>
    <td>由4种标准核糖核酸AUCG组成的序列（支持fasta格式）</td>
    <td>ACCCCCCC</td>
  </tr>
  <tr>
    <td>离子</td>
    <td>1-50的整数</td>
    <td>从列表中选择</td>
    <td>Zn2+</td>
  </tr>
</table>




> ^ 水、助剂和少量特殊的配体目前是模型所不支持的，我们会将这些配体从CCD列表中除去，如果您通过输入SMILES的方式进行了这些输入，可能会造成结果的表现下降。具体不支持的配体的CCD列表参见 [这个部分](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3json#c534b18)。

**注意：**

- HelixFold-S1 仅支持多链复合物，输入需包含至少两条实体，或一条实体但数量为 2。
- 限制总 token 数量：不超过 3000
  （token 数计算方式详见[数据说明](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3json)中的 JSON 结构说明）



#### **数据预览**

- 实体类型为蛋白/DNA/RNA时，完成输入后，输入的序列会进行自动整理成为预览态。此时如果您需要编辑序列，直接点击序列即可重新恢复到编辑态

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20%E8%BE%93%E5%85%A5%E9%A1%B5%20%E4%B8%80%E6%9D%A1%E8%9B%8B%E7%99%BD%E9%A2%84%E8%A7%88%20%E4%B8%AD%E6%96%87-adb5c915.jpg" style="zoom:50%;" />

- 实体类型为配体时，完成输入后，输入框后方会出现“2D”标识。鼠标悬浮在这个标识上可以预览当前配体的二位结构。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20%E8%BE%93%E5%85%A5%E9%A1%B5%20%E9%A2%84%E8%A7%882d%E5%88%86%E5%AD%90-f5ea4bbe.jpg" style="zoom:50%;" />

------







<a id="f0245d6"></a>

### 实体操作

点击每一行实体数据最后的三个点，可以对该条数据进行操作。以下是不同实体支持的操作一览：

<table>
  <tr>
    <th>实体类型</th>
    <th>操作名称</th>
    <th>操作说明</th>
  </tr>
  <tr>
    <td rowspan="2">蛋白</td>
    <td>修饰</td>
    <td>为序列添加修饰</td>
  </tr>
  <tr>
    <td>删除</td>
    <td>删除该条实体数据</td>
  </tr>
  <tr>
    <td>配体</td>
    <td>删除</td>
    <td>删除该条实体数据</td>
  </tr>
  <tr>
    <td rowspan="3">DNA</td>
    <td>修饰</td>
    <td>为序列添加修饰</td>
  </tr>
  <tr>
    <td>反向互补序列</td>
    <td>增加一条实体类型为DNA的数据，其序列为当前序列的反向互补序列</td>
  </tr>
  <tr>
    <td>删除</td>
    <td>删除该条实体数据</td>
  </tr>
  <tr>
    <td rowspan="2">RNA</td>
    <td>修饰</td>
    <td>为序列添加修饰</td>
  </tr>
  <tr>
    <td>删除</td>
    <td>删除该条实体数据</td>
  </tr>
  <tr>
    <td>离子</td>
    <td>删除</td>
    <td>删除该条实体数据</td>
  </tr>
</table>




#### 添加修饰

**HelixFold3** 支持蛋白质、DNA 和 RNA 的任意侧链修饰。侧链修饰可以发生在氨基酸残基的侧链（蛋白质）或核苷酸的侧链（核酸）上，能显著改变生物大分子的理化性质与功能。用户可通过 **SMILES** 格式指定修饰基团及其连接位点。

**HelixFold3** 的任意侧链修饰功能可覆盖更广的化学空间（涵盖 PDB 数据库中超过 50% 的修饰场景），满足细胞调控、信号传导与药物开发等多种科研应用。下图展示了蛋白、DNA 和 RNA 的骨架结构，其中 *R group* 表示可替换的自定义链。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E9%AA%A8%E6%9E%B6%E8%AF%B4%E6%98%8E%20%E4%B8%AD%E6%96%87-48bd7537.jpg" style="zoom:80%;" />



要添加修饰，请在实体类型为 **蛋白/DNA/RNA** 的数据后点击右侧“三个点”图标，选择“添加修饰”以打开修饰弹窗。以下以蛋白为例说明：

1. 点击希望添加修饰的氨基酸，并在下拉菜单中选择目标修饰。

   <img src="https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20%E6%B7%BB%E5%8A%A0%E4%BF%AE%E9%A5%B0%20%E4%B8%AD%E6%96%87-efc569c6.jpg" style="width: 700px; height: auto;" />

2. 添加完成后点击“添加”按钮，系统将显示修饰结果。
   ⚠️ 请注意：添加修饰后，实体序列将暂不支持修改。如需调整序列，请先清空已添加的修饰。

   <img src="https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20%E5%AE%8C%E6%88%90%E4%BF%AE%E9%A5%B0%20%E4%B8%AD%E6%96%87-a51824e6.jpg" style="zoom:50%;" />

若所需侧链不在下拉菜单中，则选择“**自定义侧链修饰**”，并在输入框中输入侧链基团的 **SMILES 分子式**。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E9%9D%9E%E6%A0%87%E4%BF%AE%E9%A5%B0%20%E6%B7%BB%E5%8A%A0%20%E4%B8%AD%E6%96%87-d25c9c1a.jpg" style="zoom:67%;" />

随后，点击连接位点编号旁的“眼睛”图标，根据分子结构图，确认并输入希望连接的位点编号，然后点击“确认”。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E9%9D%9E%E6%A0%87%E4%BF%AE%E9%A5%B0%20%E8%BF%9E%E6%8E%A5%E4%BD%8D%E7%82%B9%20%E4%B8%AD%E6%96%87-b454c1b9.jpg" style="zoom:67%;" />

添加完成后，您将在序列下方看到对应的自定义侧链修饰。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E9%9D%9E%E6%A0%87%E4%BF%AE%E9%A5%B0%20%E5%B1%95%E7%A4%BA%20%E4%B8%AD%E6%96%87-43574c0d.jpg" style="zoom:67%;" />

以下展示几个具体的自定义侧链示例：

- 为蛋白添加自定义侧链

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/protein_mod-eb5149ed.png" style="width: 800px; height: auto;" />

- 为 RNA 添加自定义侧链

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/rna_mod-54ef0f11.png" style="width: 800px; height: auto;" />

- 为 DNA 添加自定义侧链

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/dna_mod-8b339cfd.png" style="width: 800px; height: auto;" />

#### 添加反向互补序列

在实体类型为DNA的数据后点击添加反向互补序列。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20dna%20%E6%B7%BB%E5%8A%A0%E5%8F%8D%E5%90%91%E4%BA%92%E8%A1%A5%20%E4%B8%AD%E6%96%87-e088e8dc.jpg" style="zoom:50%;" />

在原有的实体数据下会自动新增一条实体类型为DNA，且序列为反向互补序列的实体数据。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20dna%20%E5%AE%8C%E6%88%90%E5%8F%8D%E5%90%91%E4%BA%92%E8%A1%A5%20%E4%B8%AD%E6%96%87-f20a4864.jpg" style="zoom:50%;" />

------







<a id="1e35647"></a>

### 指定相互作用（仅支持 HelixFold3 模型）

该模块支持用户指定已知的不同实体之间的相互作用，使得预测结果更贴合实际。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E7%9B%B8%E4%BA%92%E4%BD%9C%E7%94%A8%E7%BA%A6%E6%9D%9F%20%E7%A9%BA%E7%99%BD%20%E4%B8%AD%E6%96%87-8a2793b6.jpg" style="zoom:50%;" />

完成实体输入后，用户可以点击“编辑”icon来打开设置面板。

用户可以选定已经输入好的实体。

- 此时如果用户选择的实体类型为蛋白、DNA、RNA，则用户需要进一步选择需要约束相互作用的残基。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E7%9B%B8%E4%BA%92%E4%BD%9C%E7%94%A8%E7%BA%A6%E6%9D%9F%20%E9%9D%A2%E6%9D%BF%20%E4%B8%AD%E6%96%87-a245f247.jpg" style="zoom:50%;" />

- 如果用户选择的实体类型为配体，则默认选中配体自身为需要约束相互作用的残基

用户可以用同样的方式设置好对象A和B。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E7%9B%B8%E4%BA%92%E4%BD%9C%E7%94%A8%E7%BA%A6%E6%9D%9F%20%E5%AE%8C%E6%88%90%20%E4%B8%AD%E6%96%87-66f13687.jpg" style="zoom:50%;" />

**注意：**对象A和对象B不能是同一个残基。但可以是同一个实体上的不同残基。

目前HelixFold3支持用户对对象AB进行距离约束，用户可以在后方输入框中设置距离的大小。

用户可以通过点击下方的“增加一组”按钮来增加多个相互作用约束，模型输出的结果会尽量满足所有约束。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%A2%9E%E5%8A%A0%E4%B8%80%E7%BB%84%20%E4%B8%AD%E6%96%87-66c52b14.jpg" style="zoom:80%;" />

用户还可以点击后方的三个点，选择复制。这会将该相互作用复制多一行。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E7%9B%B8%E4%BA%92%E4%BD%9C%E7%94%A8%20%E5%A4%8D%E5%88%B6%20%E4%B8%AD%E6%96%87-72d2fb8a.jpg" style="zoom:80%;" />

如果需要删除已输入的相互作用约束，用户可以点击后方的三个点，选择删除/清空。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E7%9B%B8%E4%BA%92%E4%BD%9C%E7%94%A8%20%E6%B8%85%E7%A9%BA%20%E4%B8%AD%E6%96%87-69ea1690.jpg" style="zoom:80%;" />

------





<a id="d59f144"></a>

### 限定Contact采样范围

在结构预测开始前，S1 模型会评估不同链之间的 token 对发生接触（Contact）的概率，并生成 Contact 概率图。若您希望仅在特定实体之间进行评估与建模，可通过此设置限定采样范围。

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E9%99%90%E5%AE%9A%E9%87%87%E6%A0%B7%E8%8C%83%E5%9B%B4%20%E4%B8%AD%E6%96%87-89aaa9d6.png)

启用后，请分别在“对象 A”和“对象 B”中选择目标实体。点击“添加一组”可配置多组实体对。模型将仅评估所选实体对之间的接触概率，并基于此信息进行结构建模。

---







<a id="efe8b7c"></a>

### 上传参考结构

通过上传与您研究对象高度相似的已知结构，可显著提升模型预测精度。特别是当您的实体属于以下情况时，模型预测精度会更加精准：

- **蛋白-蛋白/小分子/核酸复合物**（已知蛋白部分晶体结构，如靶点结构）
- **蛋白突变体**（需基于野生型结构预测，且蛋白与野生型配体结构已知）

👉更详细的使用说明和效果说明可以查看[参考结构示例](#fc7b53e)。

#### 使用前准备

- 确保待预测的蛋白实体已填好；

- 准备好以下任一资源：

  - **PDB ID**（适用于数据库已有结构）

  - **\.cif格式文件**（适用于自定义结构）

#### 配置流程

##### 步骤一：激活功能

1. 找到【上传参考结构】开关；
2. 点击切换为"ON"状态。

![1](https://bml-test-test.bj.bcebos.com/helix_upload/image-2-a13dc437.png)

##### 步骤二：结构上传

点击"参考结构"列右侧“编辑”图标，开启配置面板。

- **方法A：搜索PDB数据库**
  1. 输入4位**PDB ID**（如`8FAX`）
  2. 从下拉列表选择目标结构
  3. 系统自动加载结构预览

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/image-2-64dd3d40.png" alt="2" style="width:700px" />

- **方法B：本地文件上传**
  1. 点击"文件上传"按钮
  2. 选择**.cif**格式文件

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/image-2-33de4215.png" alt="3"  style="width:700px" />

##### 步骤三：链选择与匹配

1. **选择参考链**
   - 在右侧链列表中勾选目标链；
   - 选中链会在3D视图中高亮显示。

> **注意：**参考链需≥6个残基，且与预测实体序列相似度≥90%。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/image-2-fa151334.png" alt="3"  style="width:700px" />

2. **关联对应实体**
   - 在"对应实体"列下拉菜单；
   - 选择当前预测的蛋白实体。

> **注意：**目前HelixFold3只支持为蛋白链指定参考结构，因此下拉菜单中只会包含类型为“蛋白”的实体。

![4](https://bml-test-test.bj.bcebos.com/helix_upload/image-2-3e0d63ad.png)

#### 其他操作与技巧

##### 删除操作

- 点击待删除行后方的三个点，然后点击“删除”或“清空”。

> **注意：**“删除”是删除该参考链，“清空”是清空整个参考结构。

![5](https://bml-test-test.bj.bcebos.com/helix_upload/image-2-6f2bf029.png)

![7](https://bml-test-test.bj.bcebos.com/helix_upload/image-2-5b8f70f2.png)

##### 添加操作

- HelixFold3支持上传多个参考结构。点击“增加一组”即可增加新的输入域组。

![8](https://bml-test-test.bj.bcebos.com/helix_upload/image-2-e6b92e40.png)

##### 添加参考构象的技巧

- 需要模型同时参考链内构象+链间结构 → 同一参考结构选多条链
- 仅需模型参考链内构象 → 分次上传同一参考结构选单链

![9](https://bml-test-test.bj.bcebos.com/helix_upload/%E6%B5%81%E7%A8%8B%E5%9B%BE-202503261746-1acbd640.png)

------







<a id="25b78d9"></a>

### 其他计算参数

- Recycle 是一个模型推理参数，影响模型效果，越大越好。默认设为10。

- 推理数量是控制模型采样次数的参数，值越大，结构多样性越高，预测效果越好。
  默认值：HelixFold3 为 1，HelixFold-S1 为 5。
  
- 输出格式：可以指定预测完成后的结构文件导出格式，可选择 PDB 或 CIF。

  **注意：**PDB 格式仅支持总实体 ≤26，CCD 编码不超过 3 位。

------







<a id="00d10a5"></a>

### 批量任务

Web端现支持创建多达20条任务并批量提交，每条任务都会有独立的task id，用户可以在任务运行完成后前往任务管理页面分别查看不同任务的结果。

您可以通过以下三种方法来创建多条任务：

- 点击“新增任务”按钮，创建空白的任务标签。您可以在新建的页面中完成数据输入
- 点击“克隆任务”按钮，将该条任务所有已输入的数据克隆到新的任务标签中，您可以基于这些已输入的数据进行后续修改。
- 上传JSON文件（见下方“上传JSON部分内容”）。

------







<a id="d4fe70b"></a>

### 上传JSON

用户可以将需要预测的任务输入保存为JSON格式的文件，通过“上传JSON”按钮进行任务的快速读取和提交。JSON文件的说明与示例请参见：[数据说明](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3json)

注：我们支持用户上传包含多个任务（最多20）的JSON文件来进行批量输入。如果您的文件中包含>20个任务，则我们只会读取您上传文件中的前20个任务。

------







<a id="4b49ec0"></a>

## 查看结果





<a id="ca8022b"></a>

### 结果总览（仅在推理数量 > 1 或使用 HelixFold-S1 时显示）

当推理数量大于 1 时，模型会输出多个结构预测结果。结果总览页旨在为用户提供所有推理结果的整体视图，帮助快速了解关键指标的分布情况、整体预测表现，并支持筛选与排序操作，便于后续分析与选择。该页面共包含四个部分，帮助用户从多个维度评估结构预测结果，尤其在启用多次推理或使用 **HelixFold-S1** 模型时尤为重要。

![](https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20%E7%BB%93%E6%9E%9C%E6%80%BB%E8%A7%88%20%E4%B8%AD%E6%96%87-f581d690.png)﻿

#### 1. 参数设置

点击**筛选参数**折叠窗口，可设置筛选条件来筛选右侧表格中展示的结果。点击“确认”按钮后，仅展示符合设定条件的结果项，便于用户聚焦感兴趣的结构预测结果。

![](https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20%E7%BB%93%E6%9E%9C%E6%80%BB%E8%A7%88%20%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE%20%E4%B8%AD%E6%96%87-a156ac83.png)

#### 2. 关键指标箱型图

此区域展示五个关键结构评估指标的箱型图，包括：

- Ranking Confidence
- pTM
- ipTM
- pLDDT
- 原子冲突（Atomic Clashes）

用户可通过将鼠标悬停在箱体图上查看各项指标的五个统计值：最小值、第一四分位数（Q1）、中位数、第三四分位数（Q3）及最大值。该模块有助于快速了解全部结果中各个关键指标的整体分布情况。

![](https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20%E7%BB%93%E6%9E%9C%E6%80%BB%E8%A7%88%20%E7%AE%B1%E5%9E%8B%E5%9B%BE%20-9d75ec82.png)

#### 3. Contact概率图（仅使用 HelixFold-S1 模型时显示）

该图展示了 HelixFold-S1 在预测前阶段计算出的 不同链之间每对 token 的接触概率。该概率范围为 0 到 1，值越高表示两者更可能发生物理接触。

HelixFold-S1 模型将优先围绕接触概率较高的 token 对进行结构采样与建模，从而提高构象空间探索的效率和结构预测的精度。

#### 4. 结果指标总览

该表格详细列出每次结构预测结果的所有关键指标。每一行对应一个结构，每一列对应一个指标。支持的字段与释义如下：

| 中文名       | 英文名               | 输出条件       | 是否支持排序 | 指标释义                                                     |
| ------------ | -------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| 结果ID       | Model ID             | 总是输出       | 否           | 每个结构结果的唯一标识符                                     |
| 综合排序得分 | Ranking Confidence   | 总是输出       | 是           | 结合多个模型的 pTM 和 ipTM 分数计算出的综合评分，用于对结构结果排序。得分越高，预测结构越可信，通常选得分最高者为最优结构。 |
| pTM          | pTM                  | 总是输出       | 是           | **Predicted Template Modelling**，用于评估复合物整体预测准确性（0-1）。高于 0.5 说明复合物折叠大致可信。注意，pTM 可能会被大蛋白的准确预测拉高，掩盖小分子的错误预测。 |
| ipTM         | ipTM                 | 总是输出       | 是           | **Interface Predicted TM-score**，用于评估复合物中亚基之间相对位置预测准确性。ipTM > 0.8 表示高质量预测，< 0.6 则预测失败可能性高。比 pTM 更能反映亚基间相互作用的可信程度。 |
| pLDDT        | pLDDT                | 总是输出       | 是           | **Predicted Local Distance Difference Test**，衡量单残基局部结构的置信度（0-100）。pLDDT > 90 表示主链和侧链均高度可信，>70 则主链可信但侧链可能有误。 |
| 原子冲突     | Atomic Clashes       | 总是输出       | 否           | 用于检测结构中的不合理空间重叠。0 表示无明显冲突（显示为“无冲突”），1 表示存在结构冲突（显示为“有冲突”）。 |
| 采样对象A    | Sampling Pair A      | 仅 S1 模型输出 | 否           | 表示参与预测采样的一个对象 token，用于展示结构建模重点区域。格式：`实体编号-链编号-残基编号-原子编号`。蛋白/DNA/RNA 类型没有原子级表示。 |
| 采样对象B    | Sampling Pair B      | 仅 S1 模型输出 | 否           | 表示参与预测采样的另一个对象 token，格式同上，用于理解模型采样策略。 |
| Contact 概率 | Sampling Probability | 仅 S1 模型输出 | 是           | 采样对象 A 与 B 之间的接触概率，数值范围为 0 到 1，值越高表示该区域更可能形成物理接触，是 S1 模型预测建模的重要参考信息。 |





<a id="9ec7ff0"></a>

### 单项分析页

从**结果总览页**中点击表格右上角的「查看单项分析」按钮，或直接点击任一结构的 **结果ID**，即可进入对应结构的单项分析页面。若该任务仅生成一个结构，则系统将自动跳转至该页面。

﻿![](https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20%E8%BF%9B%E5%85%A5%E5%8D%95%E9%A1%B9%E5%88%86%E6%9E%90%E9%A1%B5%20%E4%B8%AD%E6%96%87-b2e123e3.png)

单项分析页面包含四个核心模块：

![](https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20%E5%8D%95%E9%A1%B9%E5%88%86%E6%9E%90%E9%A1%B5%20%E4%B8%AD%E6%96%87-757b780a.png)

#### 1. 导航栏（仅在推理数量 > 1 或使用 HelixFold-S1 时显示）

导航栏位于页面左上方，支持快速在多个结构间切换。若在结果总览页中设置了筛选或排序条件，导航栏仅展示符合条件的结构，并保持相同的排序规则。

------

#### 2. 整体评价

该模块提供了对当前结构的整体质量概览：

- **雷达图**：展示当前结构与所有结构平均值（如有）的关键指标对比，包括 `Ranking confidence`、`pTM`、`ipTM`、`pLDDT` 等。
  - 图中**红色区域**表示警告值范围，提示该指标可能偏低，建议用户进一步验证。红色区域对应以下阈值范围，仅作参考，建议结合具体任务需求判断。

| 指标名称           | 警告值阈点 | 含义说明                                                     |
| ------------------ | ---------- | ------------------------------------------------------------ |
| Ranking confidence | < 0.5      | 综合置信度较低，结果可能不可靠                               |
| ipTM               | < 0.6      | 亚基相对位置预测可信度较低。**注意：**该指标对单链结构不具参考意义。 |
| pLDDT              | < 50       | 局部结构预测置信度极低                                       |
| pTM                | < 0.5      | 整体结构预测与真实结构相似性较低                             |

- **结构质量描述（仅供参考）**：对当前结构进行简要评估。
- **结构排名**（仅在推理数量 > 1 或使用 HelixFold-S1 时显示）：展示该结构在所有结构中的排序位置，帮助用户快速识别相对较优结果。

------

#### 3. 三维结构图

预测结构以 **pLDDT 值进行着色**，反映不同区域的预测置信度：

| 颜色   | pLDDT 区间 | 含义说明                     |
| ------ | ---------- | ---------------------------- |
| 蓝色   | > 90       | 极高置信度，主链与侧链均可靠 |
| 天蓝色 | 70 – 90    | 高置信度，主链可靠           |
| 黄色   | 50 – 70    | 低置信度，结构可疑           |
| 红色   | < 50       | 极低置信度，建议忽略或排查   |

用户可拖拽、旋转结构图，详细检查关键区域。

------

#### 4. 详细分析

该部分包括 **链间关系分析** 和（如适用）**结果洞察**，旨在为用户提供深入的结构评估信息。

##### 4.1 链间关系分析

特别适用于复合物结构，评估不同残基间/链间的接口质量与预测可信度：

| 图示名称            | 功能说明                                           | 适用场景说明                 |
| ------------------- | -------------------------------------------------- | ---------------------------- |
| PAE 图              | 残基对之间空间位置预测误差，颜色越深表示预测越可靠 | 链间/结构域间定位分析        |
| Chain ipTM 图       | 每条链与其他链的接口预测可信度                     | 判断亚基装配是否合理         |
| Chain PAE（mean）图 | 计算链与其他链的平均空间误差                       | 粗略评估链间定位质量         |
| Chain PAE（min）图  | 展示链间最小误差，识别潜在高可信度接口区域         | 接口分析、生物学功能推测     |
| Chain Clash 图      | 检测链间是否存在原子冲突（数值越大冲突越严重）     | 排查结构冲突，确认结构合理性 |

> 注：对于单链结构，Chain ipTM、Chain PAE和Chain Clash 图不具参考价值。

##### 4.2 结果洞察（仅部分情况显示）

该模块用于揭示结构预测背后的逻辑，当前支持：

- **采样依据（仅 HelixFold-S1 提供）**：
  - 展示该结构是基于哪些 token 对的接触概率进行采样和建模的。
  - 可帮助用户理解模型构建时关注的关键结构区域。









<a id="0596e35"></a>

## 数据下载

所有预测结果可以通过点击“下载结果”按钮来下载。

具体操作说明参考：[数据说明](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3json#91d04a9)数据输出部分。









<a id="3b15cad"></a>

## 更多示例







<a id="fc7b53e"></a>

### 参考结构

#### 适用场景

对于待预测的复合体中的部分蛋白质链自身或同源（变体）序列（序列相似度超过90%）在RCSB Protein Data Bank (RCSB PDB)有已知结晶构象时，可通过指定其参考构象，提升构象预测准确度和置信度。在从PDB收集的 2023.01.25 到 2023.08.09 发布的144 例抗原抗体样本在结构预测中，使用抗原结构作为参考DockQ均值从0.29 提升至0.36 ，结构置信度打分 Confidence Score 均值 从 0.58 提升至 0.64【见效果说明】 。

**主要场景：**

- 研究蛋白-蛋白，蛋白-小分子，蛋白-RNA，蛋白-DNA复合体时，蛋白部分有结晶结构，如靶点结构已知；
- 研究蛋白-蛋白时，蛋白-变体蛋白有结晶结构，如靶点与野生型配体结构已知。



#### 使用说明

##### 参考单链结构

对于输入中的某蛋白质链，如果已知该链或其变体链（序列相似度在90%以上）的结晶结构，可以指定一个或多个结构作为参考。每次指定需先上传参考结构的文件，然后选择被参考的链， 该链所对应结构将作为参考信息用于HelixFold3构象预测。

- **例子1：抗原有已知结构**

抗原-抗体结构预测中如果抗原有已知构象或有其变体的结构，以此结构作为参考可提升抗原-抗体结构预测的精度。例如在预测新冠病毒与抗体的复合体构象时，我们可以使用已知的新冠病毒构象（PDB ID：7E9P）作为参考。

![1](https://bml-test-test.bj.bcebos.com/helix_upload/%E6%88%AA%E5%B1%8F2025-03-26%2017-0c6084c6.png)

- **例子2**: **靶点有已知结构**

在靶点-配体结构预测中如果靶点蛋白或变体的结晶结构，以该结构作为靶点结构的参考，可提升蛋白-小分子复合体构象预测的准确度。例如：EGFR（Epidermal Growth Factor Receptor）靶点有结晶结构（PDB ID：1M17 ），可以此作为参考构象。

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E6%88%AA%E5%B1%8F2025-03-26%2017-8f7bd99e.png)

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E6%88%AA%E5%B1%8F2025-03-26%2017-e0ddef2c.png)

- **例子3: 蛋白质链有多个参考结构**

当一个蛋白质链有多个结晶结构（比如和不同配体对接时的构象）可作为参考时，可同时指定多个结构作为参考。例如预测新冠病毒与抗体的复合体结构时，可以使用 SARS-CoV-2的 Alpha变体 (B.1.1.7) 7LWS作为参考结构，并同时使用 Delta 变体 (B.1.617.2) 7V7Q 作为参考构象。

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E6%88%AA%E5%B1%8F2025-03-27%2010-e7ed2fb2.png)



##### 参考单链结构及链间相互作用

对于输入中的某几条蛋白链，如果有由这几条链（或变体链）组成的复合体的结晶结构，可以指定一个或多个结构作为参考。每次指定需先上传参考结构的文件，然后选择被参考的多条链， 被选择的链及他们的链间相互作用将作为参考。

- **例子1：靶点蛋白包含多条链**

如果靶点蛋白是复合体且已知蛋白复合体或者其变体的结构，可用作参考。例如在癌症相关靶点：Bcl-XL (B-cell lymphoma-extra large 和 Bak (Bcl-2 homologous antagonist/killer) 。

作用机制: Bcl-XL是抗凋亡蛋白，而 Bak是促凋亡蛋白。两者相互作用调节 细胞凋亡 (Apoptosis)，是癌症治疗的重要靶点。对于这个靶点我们可以参考构象（PDB ID: 4B4S，勾选抗原的A和B链）中的Bcl-XL和Bak复合体（包括两个蛋白自身构象及链间相互作用），用于药物（多肽，抗体，小分子）与该靶点的结构预测。

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E6%88%AA%E5%B1%8F2025-03-26%2017-b8dcf817.png)

- **例子2：靶点与参考蛋白配体的结构已知，预测靶点与变体蛋白的结构**

如果靶点和野生型配体蛋白的复合体构象已知，基于复合体构象作为参考，可用于预测靶点与变体配体蛋白（如基于野生型蛋白突变和改造得到的）的结构。例如对流感 H1N1 病毒进行抗体优化，基于野生型抗体 CR6261和抗原复合体构象（上传结构并勾选野生型抗体链 H和L， 及抗原链 A和B），可用于提升变体抗体和抗原结构的构象预测准确性。

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E6%88%AA%E5%B1%8F2025-03-26%2018-ab3ce698.png)

- **例子3: 只参考多条链的单链结构，不参考链间相互作用**

在使用指定参考结构功能时，由于上传一个结构文件并选中多条链时，会默认使用这些链单链的结构和链间相互作用作为参考。如果只希望参考每条链的单链结构，需要上传多次结构文件。例如预测同源多聚体, 已知单链结构并希望只参考单链结构，但不参考链间相互作用。 需多次上传单链结构（PDB ID：7LWS），每次选择不同的对应实体（输入的蛋白质链）来预测复合体构象。

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E6%88%AA%E5%B1%8F2025-03-26%2018-33b2082b.png)



#### 效果说明

##### 构象预测准确度和置信度

在从PDB收集的 2023.01.25 到 2023.08.09 发布的144 例抗原抗体样本在结构预测的精度：

| 无参考 | 参考抗原链结构 | 参考抗原链结构 + 参考抗体链结构 |              |       |              |
| ------ | -------------- | ------------------------------- | ------------ | ----- | ------------ |
| DockQ  | Success rate   | DockQ                           | Success rate | DockQ | Success rate |
| 0.291  | 34%            | 0.366                           | 44.7%        | 0.49  | 57.6%        |

在144 例抗原抗体样本抗原侧使用参考构象，HelixFold3 预测结构置信度打分 Confidence Score 均值 从 0.58 提升至 0.64 , 见下图：

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E6%88%AA%E5%B1%8F2025-03-26%2018-dfd514cd.png)

##### 参考构象辅助抗体筛选

针对流感病毒两个亚种（H1N1，H3N2）的抗原抗体亲和力数据集， 参考野生抗体为 CR9114 和 CR6261，亲和力数据集样本量分别为2000 例，计算得到亲和力与构象预测打分ipTM 的皮尔森相关性, 和 Enrichment Factor (EF, 富集因子) 1%指标，使用参考抗原构象（H1N1使用 PDB：3GBN；H3N2 使用 PDB：4FQY）后皮尔森相关性和EF 1%指标相比于不使用参考构象都有大幅度提升，尤其在H1N1抗原靶点上，CR9114-H1N1相关性提升幅度达到 80%。 同时针对CR6261-H1N1 和 CR9114-H3N2 靶点情况，使用参考抗原后，其 EF 指标从 0 直接达到了 大于10 的良好富集区间，EF 1% 指数甚至达到 16.08 。

| 数据集      | 无参考 | 参考抗原结构 |          |           |
| ----------- | ------ | ------------ | -------- | --------- |
| PCC         | EF 1%  | PCC          | EF 1%    |           |
| CR6261-H1N1 | 0.33   | 0            | **0.40** | **10.62** |
| CR9114-H3N2 | 0.51   | 0            | **0.52** | **16.08** |
| CR9114-H1N1 | 0.35   | 0            | **0.64** | 0         |

- 单例抗原抗体预测使用参考构象效果 ：
  - 例子：PDB：8G3O，是神经氨酸酶与野生型抗体FNI9的 复合物。在构象预测中逐步使用更多的参考构象信息能够逐步提升构象预测准确度。

|                                               | DockQ | IRMSD |
| --------------------------------------------- | ----- | ----- |
| HelixFold3                                    | 0.01  | 19.54 |
| HelixFold3 + 参考抗原链结构                   | 0.47  | 2.46  |
| HelixFold3 + 参考抗原链结构 + 参考抗体链结构  | 0.69  | 1.35  |
| HelixFold3 + 参考抗原抗体链结构和链间相互作用 | 0.77  | 1.16  |













<a id="f957a9f"></a>

# API&SDK说明













<a id="2698ab6"></a>

## 1. API 和 SDK 是什么？

- **API**（**Application Programming Interface**，应用程序编程接口）是一种工具或服务的连接方式，允许不同的软件系统之间进行通信。简单理解，API 是一个“窗口”，通过它，您可以远程调用HelixFold3的功能，而无需安装复杂的系统或理解底层技术。
- **SDK** (**Software Development Kit**，软件开发工具包）是为开发人员提供的一组工具和库，帮助他们更轻松地集成和使用某些功能或服务。为了让大家更轻松地使用API，我们特别提供了SDK（封装好的工具）。**使用SDK，不需要复杂的编程知识，按照示例代码运行即可轻松实现结构预测。**

**一句话总结**：有进阶需求的用户可以直接探索API，想要简单快速上手的用户，只需使用SDK，跟着指南走即可！

------













<a id="38a74de"></a>

## 2. 为什么使用API或SDK？

使用API或SDK，您可以：

- **快速调用**：无需配置复杂的运行环境，通过网络即可访问HelixFold3的功能。
- **自动化处理**：结合编程脚本，可实现高效、批量化的任务处理。
- **无缝集成**：轻松嵌入到您的现有工具链或应用程序中，例如分子建模软件或数据分析平台。
- **远程使用**：只需网络连接，省去本地部署的资源消耗。
- **灵活扩展**：对于有一定基础的用户，可以在SDK基础上修改和扩展，或直接使用底层API实现更高级功能。

------













<a id="38f18af"></a>

## 3. 适合哪些场景使用API？

以下是一些典型场景：

1. **批量任务处理**：需要对大量分子序列进行结构预测，例如药物筛选、抗体设计、小蛋白/多肽筛选、酶设计等场景。
2. **集成化工作流**：在您的生物信息或药物研发管线中加入HelixFold3功能模块。
3. **定制化开发**：开发更复杂的软件应用，例如自动化建模平台或可视化工具。

------













<a id="9ce780e"></a>

## 4. 如何开始使用HelixFold3 API或SDK？

- **基于API封装的SDK**：
  如果您想快速上手，可以尝试使用我们已经封装好的SDK。SDK简单易用，极大简化了操作难度。

  👉[HelixFold3 SDK文档说明](https://paddlehelix-docs.readthedocs.io/en/stable/README.html)















<a id="d3d3460"></a>

# HF3/S1输入JSON及输出数据说明









<a id="dc5cd2d"></a>

## 输入

无论您通过网页端还是 API/SDK 使用 **HelixFold3**，模型输入数据均可采用 **JSON** 格式。该格式对自动化重复建模任务（如特定靶点的小分子筛选、蛋白筛选等）尤其方便。您可以将任务输入保存为 JSON 文件，用于在网页端或通过 API/SDK 批量提交任务。

- **网页端**：点击 **“上传 JSON”** 按钮上传包含一个或多个任务信息的 JSON 文件，即可直接创建相应任务。对于已在网页端配置完成的任务，您可以点击页面底部的 **“导出 JSON 文件”** 按钮，以生成模板供后续使用。
- **API/SDK**：在 API/SDK 中，可指定 JSON 数据或文件路径作为任务输入。详情请参见 [SDK 使用文档](https://paddlehelix-docs.readthedocs.io/en/stable/README.html)。







<a id="c9996b8"></a>

### 输入JSON文件示例

JSON 文件本质上是一个文本文件，以“.json”为后缀名，可使用任意文本编辑器或编程工具轻松编辑。您可以参考[示例 JSON 文件](https://gitee.com/enginelong/paddlehelix/blob/master/data/8aij_user_input.json)，其基础结构如下：

```json
[
    {
        "model_type": "HelixFold3",
        "job_name": "8aij",
        "recycle": 10,
        "ensemble": 1,
        "entities": [
            {
                "type": "protein",
                "sequence": "ATQGVFTLPANTRFGVTAFANSSGTQTVNVLVNNETAATFSGQSTNNAVIGTQVLNSGSSGKVQVQVSVNGRPSDLVSAQVILTNELNFALVGSEDGTDNDYNDAVVVINWPLG",
                "count": 4
            }
        ]
    }
]
```

该 JSON 文件由一个字典列表组成，每个字典代表一个任务的提交内容。通过在同一文件中包含多个字典，您可以一次性提交多个任务。

更一般地，**HF3/S1 输入 JSON** 的结构可分为以下几个功能块：

- **模型参数**
- **生物分子实体及其修饰**
- **约束信息（仅 HF3 支持）**
- **接触采样范围（仅 HF-S1 支持）**

下面将分别进行说明。







<a id="fba5cb0"></a>

### 指定模型参数

`model_type`（可选）：指定模型类型，目前支持 `"HelixFold3"` 或 `"HelixFold-S1"`。若未指定，系统将默认使用 `"HelixFold3"`。

`job_name`（可选）：任务名称字符串，将显示在网页端的任务管理页面中。若未指定，系统会自动生成名称。

`recycle`（可选）：模型推理参数，影响预测精度。数值越大，预测结果可能更精确，但计算开销也更高。取值范围为 `[10, 100]`，默认值为 `10`。

`ensemble`（可选）：模型推理参数，对 HF3 表示推理次数，对 HF-S1 表示接触采样次数。数值越大可能得到更优构象，但计算成本会线性增加。HF3 取值范围为 `[1, 100]`（默认 `1`），HF-S1 取值范围为 `[5, 100]`（默认 `5`）。





<a id="d92b82c"></a>

### 指定生物分子实体及其修饰

`entities`（必选）：一个字典列表，用于描述预测结构中包含的所有生物分子实体。
 **注意：** 单个任务中可以包含多个实体，但所有实体的 **总 token 数量有限制** ——不得超过 **3000**。系统会在网页端和 API/SDK 提交任务时自动校验总 token 数量，若超出限制，会给出明显提示。

- `type`（必选）：定义实体类型。目前支持以下类型：
  - **protein** – 蛋白质单链
  - **dna** – DNA 单链
  - **rna** – RNA 单链
  - **ligand** – 小分子配体
  - **ion** – 离子


​	各类型的详细定义和示例如下。

------

#### 蛋白质链及其修饰

- `sequence`（必选）：包含蛋白质序列的字符串，仅支持 20 种标准氨基酸（修饰方式见下文）。每个氨基酸视为 1 个 token。

- `count`（必选）：表示该蛋白质链的复制数量（用于多聚体情况）。

- `modifications`（可选）：一个字典列表，用于描述蛋白质的化学修饰。

  - `type`（必选）：指定修饰类型，支持两种类型：
    - `residue_replace`：残基替换型修饰
    - `sidechain_replace`：通过 SMILES 定义的任意侧链修饰

  **残基替换型修饰**（适用于常见的非标准残基）

  - `index`（必选）：修饰残基在当前序列中的位置（从 1 开始计数）。
  - `ccd`（必选）：非标准残基的 CCD 编码（仅支持特定类型，详见 [下文列表](#dfc1864)）。

  **侧链任意修饰**（可通过 SMILES 自定义侧链结构）

  - `index`（必选）：修饰残基在当前序列中的位置（从 1 开始计数）。
  - `R_smiles`（必选）：修饰的侧链 SMILES 表达式（重原子数 ≤ 100）。
  - `R_connect_idx`（必选）：SMILES 中与氨基酸主链（Cα）连接的原子索引，从 0 开始计数。

  **侧链任意修饰示意图：**
   <img src="https://bml-test-test.bj.bcebos.com/helix_upload/protein_mod-eb5149ed.png" style="zoom:48%;" />

```json
{
  "type": "protein",
  "sequence": "AGPDSMEEVVVPEEPPKLVSALATYVQQERLCTMFLSIANKLLPLKP",
  "count": 1,
  "modification": [
    {
      "type": "residue_replace",
      "index": 1,
      "ccd": "CIR"
    },
    {
      "type": "sidechain_replace",
      "index": 4,
      "R_smiles": "COP(=O)(O)O",
      "R_connect_idx": 0
    }
  ]
}
```

------

#### DNA 链及其修饰

**注意：** `dna` 类型仅表示单链 DNA。若需建模双链 DNA，请添加第二个 `"dna"` 实体，并输入互补链序列。

- `sequence`（必选）：DNA 序列，仅支持标准碱基 A、T、C、G。每个核苷酸视为 1 个 token。

- `count`（必选）：该 DNA 链的复制数量（整数）。

- `modifications`（可选）：描述 DNA 的化学修饰。

  - `type`（必选）：修饰类型，支持 `residue_replace` 或 `sidechain_replace`。

  **残基替换型修饰**（常用于标准核苷酸的替换）

  - `index`（必选）：被修饰的核苷酸位置（从 1 开始计数）。
  - `ccd`（必选）：非标准残基的 CCD 编码（支持的编码见 [下文列表](#31bb4fe)）。

  **侧链任意修饰**

  - `index`（必选）：修饰位置（从 1 开始计数）。
  - `R_smiles`（必选）：修饰的侧链 SMILES 表达式（重原子数 ≤ 100）。
  - `R_connect_idx`（必选）：SMILES 中与核苷酸骨架（C1'）相连的原子索引，从 0 开始计数。

  **侧链任意修饰示意图：**
  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/dna_mod-8b339cfd.png" style="zoom:48%;" />

```json
{
  "type": "dna",
  "sequence": "ACGTTTACGGGG",
  "count": 1,
  "modification": [
    {
      "type": "residue_replace",
      "index": 3,
      "ccd": "OXG"
    },
    {
      "type": "sidechain_replace",
      "index": 6,
      "R_smiles": "Cc1c[nH]c(=O)nc1N",
      "R_connect_idx": 3
    }
  ]
}
```

------

#### RNA 链及其修饰

- `sequence`（必选）：RNA 序列，仅支持标准碱基 A、U、C、G。每个核苷酸视为 1 个 token。

- `count`（必选）：RNA 链的复制数量（整数）。

- `modifications`（可选）：描述 RNA 的化学修饰，格式同 DNA。

  **残基替换型修饰**

  - `index`（必选）：被修饰的核苷酸位置（从 1 开始计数）。
  - `ccd`（必选）：非标准残基的 CCD 编码（见 [下文列表](#26212e4)）。

  **侧链任意修饰**

  - `index`（必选）：修饰位置（从 1 开始计数）。
  - `R_smiles`（必选）：修饰的侧链 SMILES 表达式（重原子数 ≤ 100）。
  - `R_connect_idx`（必选）：SMILES 中与核苷酸骨架（C1'）相连的原子索引，从 0 开始计数。

  **侧链任意修饰示意图：**
   <img src="https://bml-test-test.bj.bcebos.com/helix_upload/rna_mod-54ef0f11.png" style="zoom:48%;" />

```json
{
  "type": "rna",
  "sequence": "ACCCCCCC",
  "count": 1,
  "modification": [
    {
      "type": "residue_replace",
      "index": 3,
      "ccd": "5MC"
    },
    {
      "type": "sidechain_replace",
      "index": 5,
      "R_smiles": "Cc1c[nH]c(=O)nc1N",
      "R_connect_idx": 3
    }
  ]
}
```

------

#### 小分子配体

可通过 **CCD 编码** 或 **SMILES** 指定配体（二选一）。若两者同时存在，则以 CCD 为准。

- `ccd`（与 `smiles` 互斥）：配体的 CCD 编码，来源于 [RCSB CCD 数据库](https://www.wwpdb.org/data/ccd)。
  ⚠️ 部分水分子、助剂及特殊配体暂不支持，详见 [不支持的 CCD 列表](#c534b18)。
- `smiles`（与 `ccd` 互斥）：小分子配体的 SMILES 表达式（重原子数 ≤ 100）。
- `count`（必选）：配体复制数量（整数 ≤ 50）。

```json
{
  "type": "ligand",
  "ccd": "ATP",
  "count": 1
}
{
  "type": "ligand",
  "smiles": "CCccc(O)ccc",
  "count": 1
}
```

------

#### 离子

离子可以通过 CCD 编码输入，本质上是配体类型的快捷形式。若需指定离子价态，建议使用 **“小分子配体”** 类型，并以 SMILES 输入，例如二价铜离子 `[Cu2+]`。

- `ccd`（必选）：离子的 CCD 编码（参考 [CCD 数据库](https://www.wwpdb.org/data/ccd)）。
  支持的离子包括：`MG`, `ZN`, `CL`, `CA`, `NA`, `MN`, `MN3`, `K`, `FE`, `FE2`, `CU`, `CU1`, `CU3`, `CO`。
- `count`（必选）：离子复制数量（整数 ≤ 50）。

```json
{
  "type": "ion",
  "ccd": "ZN",
  "count": 1
}
```

------



<a id="541edfe"></a>

### 指定残基间距离约束（仅 HF3 支持）

HF3 支持定义 **残基间距离约束**，当已知实体之间存在接触时，可用于增强预测精度。

`constraint`（可选）：一个字典列表，可指定最多 **10** 组约束。

- `type`（必选）：目前仅支持 `"distance"`（距离约束）。
- `level`（必选）：目前仅支持 `"residue"`（残基级约束）。

- `left_entity`（必选）：定义约束左侧的实体。格式为：**实体序号–实体复制编号–残基编号**，均从 1 开始计数。
  - 实体序号：对应 `entities` 字段中实体的顺序。
  - 实体复制编号：对应实体的 `count` 参数。
  - 残基编号：表示当前复制体的第几个残基。
    （注：ligand 仅包含一个残基；ion 同时是一个原子、一个残基和一条链，因此固定为“1-1-1”。）
- `right_entity`（必选）：定义约束右侧的实体，格式同上。
- `distance`（可选）：约束的距离（Å），可设为 [2, 20] 范围内的数值，默认 5 Å。


```json
{
    "job_name": "demo_constraint",
    "constraint": [
        {
            "type": "distance",
            "level": "residue",
            "left_entity": "1-1-4",
            "right_entity": "3-2-10",
            "distance": 6
        }
    ],
    "entities": [
        { 
            "type": "dna",
            "sequence": "ACGTTTACGGGGATCGGGATCCCG",
            "count": 1
        },
        {
            "type": "rna",
            "sequence": "ACGUUUACGGGGACGGGG",
            "count": 1
        },
        {
            "type": "protein",
            "sequence": "GPDSMEEVVVPEEPPKLVSALATYVQQERLCTMFLSIANKLLPLKPGPDSMEEVVVPEEPPKLV",
            "count": 2
        }
    ]
}
```



<a id="5f46f41"></a>

### 指定接触采样范围（仅HF-S1）

`s1_sample_constraint` (可选) ：一个字典列表，其中包括 **HelixFold-S1** 需要的采样实体范围的描述。注：该字段仅当`model_type`设置为 **HelixFold-S1** 才能生效。每对采样范围需要包含：

* `left_entity`（必选）：一个关于实体编号的描述，用于指定需要采样的左侧的实体。格式为**<实体序号>-<实体复制编号>。注：实体编号需要和上述输入的实体列表**`entities`**对应，实体列表**`entities`**从上往下顺序枚举，对应的实体序号为1, 2, 3....。实体复制编号**取值视每个实体对应的`count`数值而定，编号为i则表示为第i个复制实体，编号从1开始，最大取值为对应实体的`count`。
* `right_entity`（必选）：一个关于实体编号的描述，用于指定需要采样的右侧的实体。格式和`left_entity`相同。

**注意：** 指定多个采样条件时，条件间的组合逻辑为或。例如条件列表: `[{left_entity: "1-1", right_entity: "1-2"}, {left_entity: "2-1", right_entity: "3-1"}]`，即逻辑上限制采样的实体范围为: （1-1和1-2） 或（2-1和3-1）。

以下是一个关于HelixFold-S1，完整的简单作业请求的示例，其中包含三个蛋白质链和一个配体。

```json
{
  "job_name": "Example-S1",
  "model_type": "HelixFold-S1",
  "entities": [
    {
      "type": "protein",
      "sequence": "AGPDSMEEVVVPEEPPKLVSALATYVQQERLCTMFLSIANKLLPLKP",
      "count": 2
    },
    {
      "type": "protein",
      "sequence": "AGPDSMEEVVVPEEPPKLV",
      "count": 1
    },
    {
      "type": "ligand",
      "ccd": "ATP",
      "count": 1
    }
  ],
  "s1_sample_constraint": [
    {
        "left_entity": "1-1", 
        "right_entity": "1-2"
    },
    {
        "left_entity": "2-1", 
        "right_entity": "3-1" 
    }
  ]
}
```



<a id="1ca4785"></a>

### 在JSON中定义多个任务

您可以在一个JSON文件中定义一个或多个任务。以下是一个包含多任务的数据示例，其中包含两个任务，一个任务名为 `job_1`，一个任务名为 `job_4`。

```json
[
    {
        "job_name": "job_1",
        "entities": [
            {
                "type": "protein",
                "count": 1,
                "sequence": "TFCGETCRVIPVCTYSAALGCTCDDRSDGLCKRNGDP"
            }
        ]
    },
    {
        "job_name": "job_4",
        "entities": [
            {
                "type": "protein",
                "count": 1,
                "sequence": "TSASEDIDFDDLSRRFEELKKKT"
            }
        ]
    }
]
```





<a id="91d04a9"></a>

## 输出

您可以通过点击**“下载结果”**按钮来下载任务预测结果。结果是一个zip格式的压缩包文件，解压后其目录结构如下：

```
helixfold3_result_to_download_task_name_time.zip/
├──user_input.json
├──Terms_of_Use.md
├──使用条款.md
├──summary.csv
├──*-<ensemble_id>-rank<rank_id>/
│   ├─all_results.json
│   ├─chain_id_mapping.csv
│   └─predicted_structure.cif
```

* `user_input.json`：本次任务输入数据的json文件。可以用于重新提交任务或回顾本次任务的输入。
* `*-<ensemble_id>-rank<rank_id>/`：包含不同`ensemble`次数中按预测置信度分数排名的预测结构的文件夹。
  * `all_results.json`：当前预测结构的完整置信度分数记录。具体内容见下文。
  * `chain_id_mapping.csv`：预测构象与输入序列映射表。该文件用于查找`predicted_structure.cif`中每一个链、`all_results.json`中`atom_chain_ids/token_chain_ids`与`user_input.json`（输入json）序列的对应关系。
  * `predicted_structure.cif`：当前预测结构文件。

* `summary.csv`：本次任务的所有预测结构置信度分数汇总，该文件用于查找每个预测结构对应的置信度分数。其内容及格式见下文 [summary.csv内容详解](#40b92ef)。
* `interface_infos/`：当您输入的`model_type`为 **HelixFold-S1** 时，会额外输出此文件夹。
  * `predicted_interface.json`：模型预测的Token级别的相互接触的概率等完整分数记录。
  * `predicted_interface.png`：模型预测的Token级别的相互接触的概率热力图。


```
├──interface_infos
│   ├─predicted_interface.json
│   └─predicted_interface.png
```



<a id="40b92ef"></a>

### summary.csv内容详解

| HelixFold3/S1 共有字段 | 说明                                                         |
| ---------------------- | ------------------------------------------------------------ |
| model_id               | 预测结构的ID，和预测结构结果文件夹对应。                     |
| has_clash              | 取值为0或1，表示结构中是否存在大范围的原子碰撞。1表示存在碰撞，0表示不存在。 |
| global_ptm             | 范围为 0-1 的标量，表示预测的完整结构的 TM-score（结构精度）。pTM 主要针对整个蛋白质分子（所有链）的预测进行评估，它提供了一个全局的质量评估，pTM 值高的模型通常在整体拓扑结构上更加准确。 |
| global_iptm            | 范围为 0-1 的标量，表示整个结构中所有界面的平均 ipTM，数学上等价于 “chain_pair_iptm” 除对角线元素之外的均值。该值可以帮助用户聚焦于界面预测的精度。注意当预测结构有且仅有一条链时（不存在链间的交互界面），该值为 null。 |
| global_plddt           | 范围为 0-100的标量，表示整个预测结构中局部结构的总体可信度。低的 plDDT 值通常意味着该区域可能存在结构无序（如灵活链或未折叠区域），表明模型对一些局部区域的预测不准确，可能与无序或未明确的结构有关。 |
| ranking_confidence     | 标量，用于预测结果的排名。此分数综合了 ipTM、pTM、和 has_clash，计算公式如下：ranking_confidence =- 0.8 × ipTM + 0.2 × pTM - 1 × has_clash (if the structure contains two or more chains)- pTM - 1 × has_clash (otherwise) |
| HelixFold-S1 特有字段  |                                                              |
| sampling_left_entity   | 表示该结构采样的左侧实体，当对应的实体是配体、离子或修饰残基时，命名规则：{实体序号}-{链序号}-{残基序号}-{原子序号}，例如1-1-20-4。对于蛋白、DNA和RNA，命名规则：{实体序号}-{链序号}-{残基序号}，例如2-1-10。 |
| sampling_right_entity  | 表示该结构采样的右侧实体，同上述sample_left_entity描述。     |
| sampling_probability   | 范围为 0-1 的标量，表示该结构采样的Token对的相互接触的概率。 |



<a id="3eddd62"></a>

### 置信度分数文件内容详解

对于一个总原子数为[num_atoms]，总token数为[num_tokens]，以及总链数目为[num_chains]的预测任务来说，all_results中的字段说明如下：

| 字段名（曾用字段名*）           | 说明                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| atom_chain_ids（atom_chain_id） | 一个 [num_atoms] 的数组，表示预测中每个原子对应的链 ID。     |
| atom_plddt                      | 一个 [num_atoms] 的数组，元素 i 表示预测中原子 i 的局部距离差异测试 (plDDT) 分数。 |
| token_plddt（plddt）            | 一个 [num_token] 的数组，元素 i 表示预测中token i 的局部距离差异测试 (plDDT) 分数, 为该token对应的所有atom的 plDDT 的平均值。 |
| token_has_clash                 | 一个 [num_token] 的bool数组, 表示token是否有冲突。冲突定义为token对应的原子是否存在和其他链token对应的原子距离<1.1A。 |
| token_chain_ids（chain_id）     | 一个 [num_tokens] 的数组，表示预测中每个 token 对应的链 ID。 |
| token_res_ids（res_id）         | 一个 [num_tokens] 的数组，表示预测中每条链下所有token的编码，链内递增。其中，小分子(非多糖)、离子，单独视为一条链，其token编码均为1。对于多糖，其token编码按单糖级别进行递增。 |
| token_ptm                       | 一个 [num_token] 的数组。第 i 个元素表示token_i 的 pTM 值。  |
| token_pair_pae（pae）           | 一个 [num_tokens, num_tokens] 的数组。元素 (i, j) 表示在预测对齐到真实结构时，token j 的位置误差（使用 token i 的坐标系进行对齐）。 |
| global_pae（avg_pae）           | 标量，表示整个预测结构全局pae的均值。                        |
| global_pae_min（min_pae）       | 标量，表示整个预测结构的全局pae的最小值。                    |
| chain_has_clash                 | 一个 [num_chains, num_chains] 的bool数组, 表示链间是否有冲突。 数组元素 (i, j) 表示链i与链j 是否有冲突。如果链的 50% 以上或链超过 100 个原子与其他链发生碰撞则为 1）。 |
| chain_plddt                     | 一个 [num_chains] 的数组, 表示预测中每条链的局部距离差异测试 (plDDT) 分数。该值可以帮助用户了解每条链的局部结构预测质量，从而在多个预测结果中对结构进行排名或选择最可信的结构片段。例如，在多条链的复合体中，如果某条链的 plDDT 值明显较低，这条链的结构可能需要进一步的实验验证或重新建模。 |
| chain_pair_iptm                 | 一个 [num_chains, num_chains] 的数组。非对角线元素 (i, j) 表示链 i 和链 j 之间的界面 pTM 值，对角线元素 (i, i) 为 null。该值可以帮助用户评估预测蛋白质复合物结构中界面之间预测的准确性，尤其是涉及多条链的蛋白质复合体。高 ipTM 值意味着在该预测中，两条链的界面结构较为可信，而低 ipTM 值则可能表示界面交互预测的可信度较低。当需要重点研究蛋白质复合物中某些链之间的相互作用时，该值提供了有价值的信息。例如，在抗体-抗原、受体-配体等交互中，ipTM 值较高的链对可能值得进一步分析，而低 ipTM 值的界面则可能需要进一步的实验验证或重新建模。注意，如果某条链对 (i,j) 均不存在三个或三个以上的原子，那么这该链对的的 ipTM 值不存在，值为 null。 |
| chain_ptm                       | 一个 [num_chains] 的数组。第 i 个元素表示链 i 的 pTM 值。当关注单个链的结构而非其与其他链的相互作用时，可用于单独链的排名。注意，如果某条链不存在三个或三个以上的原子，那么这条链的 pTM 值不存在，该值为 null。 |
| chain_pair_iptm_min             | 一个 [num_chains] 的数组， 表示每条链与其他所有链的界面 pTM 的最小值，数学上等价于对 “chain_pair_iptm” 除对角线元素之外元素的第一维求最小值。注意如果复合物结构是单链或某条链不存在三个或三个以上的原子，该对应位置的值为 null。 |
| chain_pair_pae_min              | 一个 [num_chains, num_chains] 的数组, 数组元素 (i, j) 表示限制在链 i 和链 j 之间的最小 PAE 值。这与两条链是否相互作用相关，用用于区分结合与非结合状态。 |
| chain_pair_pae                  | 一个 [num_chains, num_chains] 的数组, 数组元素 (i, j) 表示限制在链 i 和链 j 之间的平均 PAE 值。这与两条链是否相互作用相关。 |
| global_iptm（iptm）             | 范围为 0-1 的标量，表示整个结构中所有界面的平均 ipTM，数学上等价于 “chain_pair_iptm” 除对角线元素之外的均值。该值可以帮助用户聚焦于界面预测的精度。注意当预测结构有且仅有一条链时（不存在链间的交互界面），该值为 null。 |
| global_iptm_min（min_iptm）     | 标量，表示结构中所有界面的最小 ipTM，数学上等价于 “chain_pair_iptm” 除对角线元素之外的最小值。注意当预测结构有且仅有一条链时（不存在链间的交互界面），该值为 null。 |
| global_ptm（ptm）               | 范围为 0-1 的标量，表示预测的完整结构的 TM-score（结构精度）。pTM 主要针对整个蛋白质分子（所有链）的预测进行评估，它提供了一个全局的质量评估，pTM 值高的模型通常在整体拓扑结构上更加准确。 |
| global_has_clash                | 布尔值，表示结构中是否存在大范围的原子碰撞。                 |
| global_plddt（avg_plddt）       | 范围0-100的标量，表示整个预测结构中局部结构的总体可信度。低的 plDDT 值通常意味着该区域可能存在结构无序（如灵活链或未折叠区域），表明模型对一些局部区域的预测不准确，可能与无序或未明确的结构有关。 |
| ranking_confidence              | 标量，用于预测结果的排名。此分数综合了 ipTM、pTM、和 has_clash，计算公式如下：ranking_confidence =- 0.8 × ipTM + 0.2 × pTM - 1 × has_clash (if the structure contains two or more chains)- pTM - 1 × has_clash (otherwise) |

\* **注：部分历史字段名（括号内显示）已更新，建议使用新名称，同时历史名称目前仍然保留以保持兼容性。**





<a id="4e8cc3e"></a>

## 附录：残基替换型修饰列表



<a id="dfc1864"></a>

### 蛋白质修饰残基 

| 标准氨基酸 | 修饰 CCD | 修饰残基英文名称          | 修饰残基中文名        |
| ---------- | -------- | ------------------------- | --------------------- |
| R          | 2MR      | N3,N4-Dimethyl-L-arginine | N3,N4-二甲基-L-精氨酸 |
| R          | AGM      | 5-Methyl-L-arginine       | 5-甲基-L-精氨酸       |
| R          | CIR      | Citrulline                | 瓜氨酸                |
| C          | MCS      | Malonyl cysteine          | 丙二酰半胱氨酸        |
| C          | P1L      | S-Palmitoyl-L-cysteine    | S-棕榈酰-L-半胱氨酸   |
| C          | SNC      | S-Nitroso-Cysteine        | S-亚硝基半胱氨酸      |
| H          | NEP      | N1-Phosphohistidine       | N1-磷酸组氨酸         |
| H          | HIP      | ND1-Phosphohistidine      | ND1-磷酸组氨酸        |
| K          | ALY      | N6-Acetyl-L-lysine        | N6-乙酰基-L-赖氨酸    |
| K          | MLY      | N-Dimethyl-L-lysine       | N-二甲基-L-赖氨酸     |
| K          | M3L      | N-Trimethyllysine         | N-三甲基赖氨酸        |
| K          | MLZ      | N6-Methyllysine           | N6-甲基赖氨酸         |
| K          | LYZ      | 5-Hydroxylysine           | 5-羟基赖氨酸          |
| K          | KCR      | N-6-Crotonyl-L-Lysine     | N-6-巴豆酰-L-赖氨酸   |
| K          | YHA      | Homocitrulline            | 高瓜氨酸              |
| N          | AHB      | 3-Hydroxyasparagine       | 3-羟基天冬酰胺        |
| N          | SNN      | L-3-Aminosuccinimide      | L-3-氨基琥珀酰亚胺    |
| P          | HYP      | 4-Hydroxyproline          | 4-羟基脯氨酸          |
| P          | HY3      | 3-Hydroxyproline          | 3-羟基脯氨酸          |
| S          | SEP      | Phosphoserine             | 磷酸丝氨酸            |
| T          | TPO      | Phosphothreonine          | 磷酸苏氨酸            |
| W          | TRF      | N1-Formyl-Tryptophan      | N1-甲酰基色氨酸       |
| Y          | PTR      | O-Phospho-L-tyrosine      | O-磷酸-L-酪氨酸       |



<a id="31bb4fe"></a>

### DNA修饰残基 

| 标准核苷酸 | 修饰CCD | 修饰残基英文名称                 | 修饰残基中文名       |
| ---------- | ------- | -------------------------------- | -------------------- |
| A          | 6MA     | N6-Methyl-2-Deoxy-Adenosine      | N6-甲基-2'-脱氧腺苷  |
| A          | 3DR     | abasic dideoxyribose             | 无碱基双脱氧核糖     |
| C          | 5CM     | 5-Methyl-2-Deoxy-Cytidine        | 5-甲基-2'-脱氧胞苷   |
| C          | C34     | N4-Methyl-2-Deoxy-Cytidine       | N4-甲基-2'-脱氧胞苷  |
| C          | 5HC     | 5-Hydroxymethyl-2-Deoxy-Cytidine | 5-羟甲基-2'-脱氧胞苷 |
| C          | 1CC     | 5-Carboxy-2-Deoxy-Cytidine       | 5-羧基-2'-脱氧胞苷   |
| C          | 5FC     | 5-Formylcytosine                 | 5-甲酰基胞嘧啶       |
| C          | 3DR     | abasic dideoxyribose             | 无碱基双脱氧核糖     |
| T          | 3DR     | abasic dideoxyribose             | 无碱基双脱氧核糖     |
| G          | 6OG     | 6-O-Methyl Guanosine             | 6-O-甲基鸟苷         |
| G          | 8OG     | 8-oxoguanine                     | 8-氧代鸟嘌呤         |
| G          | 3DR     | abasic dideoxyribose             | 无碱基双脱氧核糖     |



<a id="26212e4"></a>

### RNA修饰残基 

| 标准核苷酸 | 修饰CCD | 修饰残基英文名称          | 修饰残基中文名     |
| ---------- | ------- | ------------------------- | ------------------ |
| A          | A2M     | 2'-O-Methyladenosine      | 2'-O-甲基腺苷      |
| A          | MA6     | N6-Dimethyladenosine      | N6-二甲基腺苷      |
| A          | 6MZ     | N6-Methyladenosine        | N6-甲基腺苷        |
| C          | 5MC     | 5-Methylcytidine          | 5-甲基胞苷         |
| C          | OMC     | 2'-O-Methylcytidine       | 2'-O-甲基胞苷      |
| C          | 4OC     | N4,2'-O-Dimethylcytidine  | N4,2'-O-二甲基胞苷 |
| C          | RSQ     | 5-Formylcytosine          | 5-甲酰基胞嘧啶     |
| U          | 5MU     | 5-Methyluridine           | 5-甲基尿苷         |
| U          | OMU     | 2'-O-Methyluridine        | 2'-O-甲基尿苷      |
| U          | UR3     | 3-Methyluridine           | 3-甲基尿苷         |
| U          | PSU     | Pseudouridine             | 假尿苷（假尿嘧啶） |
| G          | 2MG     | 2'-O-Methylguanosine      | 2'-O-甲基鸟苷      |
| G          | OMG     | 2'-O-Methylguanosine      | 2'-O-甲基鸟苷      |
| G          | 7MG     | 7-Methyl-8-hydroguanosine | 7-甲基-8-氢鸟苷    |



<a id="c534b18"></a>

## 附录：不支持的CCD列表 

即使HF模型不支持以CCD的形式输入下列配体，您仍可以使用这些配体的SMILES形式来作为模型的输入，但预测效果未经测试。



<a id="37497c2"></a>

### 不支持的结晶助剂CCD

```
SO4, GOL, EDO, PO4, ACT, PEG, DMS, TRS, PGE, PG4, FMT, EPE, MPD, MES, CD, IOD
```



<a id="0614b84"></a>

### 不支持的配体CCD

```
144, 15P, 1PE, 2F2, 2JC, 3HR, 3SY, 7N5, 7PE, 9JE, AAE, ABA, ACE, ACN, ACT, ACY, AZI, BAM, BCN, BCT, BDN, BEN, BME, BO3, BTB, BTC, BU1, C8E, CAD, CAQ, CBM, CCN, CIT, CL, CLR, CM, CMO, CO3, CPT, CXS, D10, DEP, DIO, DMS, DN, DOD, DOX, EDO, EEE, EGL, EOH, EOX, EPE, ETF, FCY, FJO, FLC, FMT, FW5, GOL, GSH, GTT, GYF, HED, IHP, IHS, IMD, IOD, IPA, IPH, LDA, MB3, MEG, MES, MLA, MLI, MOH, MPD, MRD, MSE, MYR, N, NA, NH2, NH4, NHE, NO3, O4B, OHE, OLA, OLC, OMB, OME, OXA, P6G, PE3, PE4, PEG, PEO, PEP, PG0, PG4, PGE, PGR, PLM, PO4, POL, POP, PVO, SAR, SCN, SEO, SEP, SIN, SO4, SPD, SPM, SR, STE, STO, STU, TAR, TBU, TME, TPO, TRS, UNK, UNL, UNX, UPL, URE
```









<a id="c8b57a8"></a>

# 定价

HelixFold3和HelixFold-S1的费用基于任务所消耗的**计算资源**。我们引入了“算力单元”（t）作为量化指标，任务总费用计算公式为：`总费用 = 算力单元数量 × 单价`。

为了提升用户体验并降低使用成本，团队持续在模型性能方面进行优化。得益于这些技术改进，HelixFold3 的推理算力成本显著下降，我们将把节省的成本回馈给用户，提供更具竞争力的价格。自2025年3月21日起，我们对HelixFold系列进行如下调整：

- **全员降价**：算力单元收费降至原价的 **30%** （单次任务成本节省约 70%）。
- **学术补贴**：推出“科研赋能计划”，平台将为学术用户**额外补贴50%** 的算力成本，助力科研工作。（申请方式参见[学术身份认证](https://paddlehelix.baidu.com/app/tut/platform/price/account#f91eabe))

<a id="235fb61"></a>

## 1. 价格速查表

以下展示了不同 Token 数量（L）在默认参数下的预估费用。

> **说明**：
>
> - **HelixFold3** 默认参数：推理数量 E=1, Recycle R=10。
> - **HelixFold-S1** 默认参数：推理数量 E=5, Recycle R=10（因推理次数增加，同 Token 下费用稍高）。

<a id="055cbd5"></a>

### HelixFold3 预估费用

| **Token 数量 (L)** | **商业用户 (t)** | **商业费用 (元)** | **学术用户 (t)** | **学术费用 (元)** |
| ------------------ | ---------------- | ----------------- | ---------------- | ----------------- |
| **100**            | 3                | **0.21**          | 2                | **0.14**          |
| **200**            | 5                | **0.34**          | 3                | **0.21**          |
| **300**            | 9                | **0.62**          | 5                | **0.34**          |
| **500**            | 18               | **1.24**          | 9                | **0.62**          |
| **800**            | 38               | **2.61**          | 19               | **1.31**          |
| **1000**           | 55               | **3.78**          | 28               | **1.92**          |
| **2000**           | 174              | **11.95**         | 87               | **5.98**          |



<a id="bebfb6f"></a>

### HelixFold-S1 预估费用

| **Token 数量 (L)** | **商业用户 (t)** | **商业费用 (元)** | **学术用户 (t)** | **学术费用 (元)** |
| ------------------ | ---------------- | ----------------- | ---------------- | ----------------- |
| **100**            | 7                | **0.48**          | 4                | **0.27**          |
| **300**            | 36               | **2.47**          | 18               | **1.24**          |
| **500**            | 83               | **5.70**          | 42               | **2.89**          |
| **1000**           | 266              | **18.28**         | 133              | **9.14**          |





<a id="ebb9e3b"></a>

## 2. 计费公式详解



<a id="216d47f"></a>

### 计算公式

```
t = （0.00014 * L^1.7 * E * R + Basis）* Discount
```

> **说明**：
>
> - t：算力单元数量（计算结果向上取整）。
> - **单价**：**0.068704549 元/算力单元**。



<a id="a6c579c"></a>

### 核心参数说明

#### A. 变量定义

- **L (Token 数量)** ：根据实体类型计算：
  - **蛋白**：1个残基 = 1 Token
  - **DNA/RNA**：1个碱基 = 1 Token
  - **配体/离子**：1个原子/离子 = 1 Token
- **E (推理数量)** ：控制模型采样次数（范围 1-100）。值越大效果越好，计算量越大。
- **R (Recycle数量)** ：控制模型内部循环次数（范围 10-100）。值越大越精确，复杂度越高。
- **Basis (基础消耗)** ：固定值 **5**，用于覆盖任务启动的基础资源开销。



#### B. 折扣系数 (Discount)

考虑模型性能优化后给出的算力单元折扣系数。

- **商业用户**：系数为 **0.3**。
- **学术用户**：系数为 **0.15**。

------





<a id="186497c"></a>

## 3. 计费计算示例

<a id="3faa983"></a>

### 示例 1：中等规模蛋白 (500 Token)



**参数**：Token L=50，推理 E=1，Recycle R=10

- 商业用户：

  所需的算力单元t为：

  ```
  t = (0.00014 * 500^1.7 * 1 * 10 + 5) *0.3 ≈ 17.77
  t向上取整后为18
  ```

  商业用户最终费用为：

  ```
  费用 = t * 单价
  		= 18 * 0.068704549 
  		≈ 1.24元
  ```

- 学术用户：

  所需的算力单元t为：

  ```
  t = （0.00014 * 500^1.7 * 1 * 10 + 5）*0.15 ≈ 8.89
  t向上取整后为9
  ```

  学术用户最终费用为：

  ```
  费用 = t * 单价
  		= 9 * 0.068704549
  		≈ 0.62元
  ```

  

<a id="cf65c8b"></a>

### 示例 2：较大规模任务 (1000 Token, 双倍推理)



**参数**：Token L=1000，推理 E=2，Recycle R=10

- 商业用户：

  算力单元t为：

  ```
  t = （0.00014 * 1000^1.7 * 2 * 10 + 5）* 0.3 ≈ 107.25
  t向上取整后为108
  ```

  商业用户最终费用为：

  ```
  费用 = t * 单价
  		= 108 * 0.068704549 
  		≈ 7.42元
  ```

- 学术用户：

  所需的算力单元t为：

  ```
  t = （0.00014 * 1000^1.7 * 2 * 10 + 5）* 0.15 ≈ 53.62
  t向上取整后为54
  ```

  学术用户最终费用为：

  ```
  费用 = t * 单价
  		= 54 * 0.068704549
  		≈ 3.71元
  ```










<a id="edeafbe"></a>

# 技术报告













<a id="3a37fd2"></a>

## 蛋白质-配体

为了评估蛋白质-配体结构预测的效果，首先在PoseBusters数据集中比较了HelixFold3和基线方法。PoseBusters是一个用于评估配体对接算法的基准数据集，最初有428个结构（PoseBusters V1）。在排除配体与多个生物分子单元距离在5.0Å以内的数据点后，精练为308个结构（PoseBusters V2）。基线方法可分为三类：1）不指定真实蛋白质结构的方法、2）指定已知蛋白结构的方法和3）指定活性位点残基的方法。PoseBusters V1和PoseBusters V2成功率的比较如下图所示，即使没有指定真实蛋白质结构，HelixFold3也取得了卓越的表现，成功率超过了依赖给定已知蛋白质结构的方法，其预测准确性与 AlphaFold3相当，这表明HelixFold3在预测蛋白质-配体相互作用方面有着强大性能。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%80%E6%9C%AF%E6%8A%A5%E5%91%8A%20%E8%9B%8B%E7%99%BD%E8%B4%A8%E9%85%8D%E4%BD%931-9149c2ea.gif" style="zoom:50%;" />


模型预测的配体结构在立体化学和物理合理性是大家所关注的，使用PoseBusters测试套件可以评估分子内部和分子之间的各种合理性指标。无论是HelixFold3还是AlphaFold3，在几乎所有指标上的通过率都达到了90%以上，只有在四面体手性这一项上表现稍微逊色。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%80%E6%9C%AF%E6%8A%A5%E5%91%8A%20%E8%9B%8B%E7%99%BD%E8%B4%A8%E9%85%8D%E4%BD%932-ccdb5c67.png" style="zoom:50%;" />
















<a id="934e741"></a>

## 核酸分子

由于核酸分子的结晶结构数量很少，完全无人为干预地自动化地准确预测其结构一直是一个巨大的挑战。对于核酸分子效果的评估，在CASP15(蛋白质结构预测领域的重要国际竞赛)中，HelixFold3对包括结晶结构的RNA样本，以及从Protein Data Bank(PDB)中最新收集的41个RNA分子和41个DNA分子进行了评测。HelixFold3在CASP15的自动化推理表现优于其他全自动模型，并且与有人工干预的AIchemy_RNA2不相上下。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%80%E6%9C%AF%E6%8A%A5%E5%91%8A%20%E6%A0%B8%E9%85%B8%E5%88%86%E5%AD%901-685241a7.gif" style="zoom: 67%;" />

在从PDB最新收集的RNA和DNA的结构预测上，HelixFold3的精度亦是极具竞争力，其性能远超专为核酸分子结构预测所设计模型RoseTTAFold2NA和另一个全原子生物分子结构预测模型RoseTTAFold-AllAtom。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%80%E6%9C%AF%E6%8A%A5%E5%91%8A%20%E6%A0%B8%E9%85%B8%E5%88%86%E5%AD%902-f4880bef.gif"  />

此外，我们也对HelixFold3在蛋白质-核酸复合物上的准确性进行了评估，结果显示，HelixFold3在预测蛋白质-RNA和蛋白质-双链DNA复合物方面与AlphaFold3旗鼓相当，而且明显比RF2NA更优秀。同时，在蛋白质-RNA复合物的预测中，HelixFold3还略胜AlphaFold3一筹。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%80%E6%9C%AF%E6%8A%A5%E5%91%8A%20%E6%A0%B8%E9%85%B8%E5%88%86%E5%AD%903-984b9cf3.gif" style="zoom:50%;" />
















<a id="2e02254"></a>

## 蛋白质

在蛋白质-蛋白质复合体结构预测领域，尽管AlphaFold-Multimer在先前模型的基础上实现了显著的进步，但其成功率和准确性仍有进一步提升的空间。AlphaFold3则在此基础上进一步优化了预测能力，展现出更为优异的性能。当前，HelixFold3在蛋白质-蛋白质复合体结构预测方面已经略微超越了AlphaFold-Multimer的表现，展示出更强的预测能力。然而，与AlphaFold3相比，HelixFold3仍存在一定的性能差距。因此，未来的研究工作将继续致力于优化和迭代HelixFold3，以缩小这一差距，力求在预测精度和成功率上进一步提升。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%80%E6%9C%AF%E6%8A%A5%E5%91%8A%20%E8%9B%8B%E7%99%BD%E8%B4%A81-b778bd32.png" style="zoom:50%;" />

此外，抗原-抗体结构预测在蛋白质复合体结构预测中仍然是一个重大挑战，不过HelixFold3在最新的71例PDB抗原抗体结构预测的数据上精度已能媲美AlphaFold3，利用指定任意数量的抗原表位氨基酸时，HelixFold3的预测也实现了更高的成功率。值得一提的是，在任意指定15个表位氨基酸的数量后，HelixFold3的成功率提升至80%以上，这表明其为研究抗体的结合机制分析提供解决方案的潜力。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%80%E6%9C%AF%E6%8A%A5%E5%91%8A%20%E8%9B%8B%E7%99%BD%E8%B4%A82-9cace5b7.png" style="zoom:50%;" />

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%80%E6%9C%AF%E6%8A%A5%E5%91%8A%20%E8%9B%8B%E7%99%BD%E8%B4%A83-981ee439.png" style="zoom:50%;" />















<a id="23c838c"></a>

## 共价修饰

共价修饰对蛋白质功能、稳定性和相互作用的调节至关重要，但预测其结构影响对计算方法来说仍是重大挑战。在多个涉及共价修饰的结构预测任务中，HelixFold3的表现持平或高于AlphaFold3，尤其是在预测高质量的单残基糖基化和RNA修饰结构方面，HelixFold3比AlphaFold3表现出更高的精度。这些结果表明，HelixFold3为RNA靶点药物设计和蛋白-RNA相互作用研究提供了可靠的结构依据，助力开发针对RNA及修饰相关疾病的新型疗法。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%80%E6%9C%AF%E6%8A%A5%E5%91%8A%20%E5%85%B1%E4%BB%B7%E4%BF%AE%E9%A5%B0-e0c747f6.gif" style="zoom:50%;" />
















<a id="d619e02"></a>

## 模型置信度

HelixFold3结构预测模型的置信度分数可用于评估模型预测的结构准确性。HelixFold3为数据集生成了置信度得分，包括来自PoseBusters的小分子配体-蛋白质相互作用，以及从PDB收集的蛋白质-蛋白质复合物、RNA分子和DNA分子。在这些所有数据集中，我们观察到置信度得分与结构准确性之间存在很强的相关性，表明这些指标在评估预测质量方面的可靠性。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%80%E6%9C%AF%E6%8A%A5%E5%91%8A%20%E6%A8%A1%E5%9E%8B%E7%BD%AE%E4%BF%A1%E5%BA%A6-c888b682.gif" style="zoom:50%;" />



👉HF3技术报告arxiv链接为：[Technical Report of HelixFold3 for Biomolecular Structure Prediction](https://arxiv.org/abs/2408.16975)















<a id="0091126"></a>

# HelixFold3应用













<a id="cc3b558"></a>

# 应用总览

HelixFold系列正探索更多应用场景，如小蛋白/多肽发现场景、抗体发现场景和酶改造场景等。这些领域的深入探索将帮助用户解决实际药物研发中的问题，加速创新成果的转化。针对这些特定应用场景的功能将陆续在螺旋桨平台上线，为广大科研人员提供更加便捷的服务。













<a id="4397cfe"></a>

## 小蛋白/多肽发现场景

小蛋白/多肽结合剂具有特异性强、亲和力高、稳定性好等特点，广泛应用于癌症药物研发、AAV疫苗、基因编辑、CAR-T治疗等领域，对精准医疗和药物发现场景具有重大价值。它能够特异性靶向关键蛋白质，有望带来更有效、更精准的疾病解决方案，为疾病治疗和生物科学研究提供强大的保障。

为了验证技术在真实药物研发场景的可用性，百度螺旋桨 PaddleHelix 团队与一家领先的多肽CRO研发企业合作，基于 HelixFold 模型共同开发了多肽设计一体化技术方案。多个靶点的湿实验结果表明，该方案具有较高的成功率。尤其是在 GPCR 类靶点上，通过算法针对GPCR 蛋白激活/抑制不同状态进行设计筛选，在多个 GPCR 靶点成功设计出多个 EC50 低于100 nM 的多肽分子，甚至在2个靶点上设计出 EC50 在皮摩尔级别的高效分子。这些成果充分验证了 HelixFold 技术在小蛋白/多肽药物场景的巨大应用潜力。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%3A%E5%A4%9A%E8%82%BD%E5%8F%91%E7%8E%B0%E5%9C%BA%E6%99%AF1-093120cb.png" style="zoom:50%;" />

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%3A%E5%A4%9A%E8%82%BD%E5%8F%91%E7%8E%B0%E5%9C%BA%E6%99%AF2-e32ea8bc.png" style="zoom:50%;" />

小蛋白设计的网页端使用说明：[小蛋白使用说明](https://paddlehelix.baidu.com/app/tut/guide/all/helixdesign-binder)















<a id="af20015"></a>

## 抗体发现场景

抗体药物凭借靶点特异性强、稳定性高、毒性低等优点，成为了生物治疗领域的重要发展方向。虽然基于深度学习的蛋白质结构预测模型在常规蛋白-蛋白复合体结构预测方面已经取得重大突破，但在抗原-抗体复合体的结构预测上其准确性依旧面临诸多挑战。为应对这些问题，PaddleHelix 团队研发出针对抗原-抗体复合体结构预测的模型，在构象预测和相互作用预测方面都取得了显著进展。在构象预测任务中，对 RCSB 数据库最新发布的141例抗原-抗体复合体进行测试，成功率达到 58%，明显优于当前性能最佳的模型 AlphaFold3（36%）。在相互作用预测方面，置信度打分 iPTM 在四个靶点抗原（SARS、LYSO、VEGF 和 PD-1）上成功识别出结合位点的高亲和力抗体。此外，在多个流感毒株的亲和力数据中，模型预测结果与实验数据呈现出更高的正相关性。与现有的蛋白质结构预测模型 AlphaFold-Multimer 和基于蛋白质语言模型的 ESM2 相比，HelixFold-Multimer 在预测精度上有了显著提升。目前，HelixFold-Multimer 的能力已全面整合至最新的 HelixFold3 模型中，用户可通过 HelixFold3 的 Web 服务和 API 接口便捷体验其功能。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%97%E4%BD%93%E5%8F%91%E7%8E%B0%E5%9C%BA%E6%99%AF1-f6135cb7.png" style="zoom:50%;" />

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%97%E4%BD%93%E5%8F%91%E7%8E%B0%E5%9C%BA%E6%99%AF2-4c122fbd.png" style="zoom:50%;" />



抗体设计的网页端使用说明：[抗体设计使用说明](https://paddlehelix.baidu.com/app/tut/guide/all/helixdesign-antibody)











<a id="85feb7a"></a>

## 酶改造场景

自然界提供了丰富的蛋白质资源，其中大多数蛋白作为生物催化剂酶存在在自然界中。酶蛋白能高效地催化特定化学反应，加速生产过程，广泛应用于绿色化工、污染治理、能源转化、农业育种等领域。

为了验证HelixFold3在酶改造的应用潜力，PaddleHelix团队基于COMPSS数据集验证测试HelixFold3在酶蛋白筛选上的潜力。在测试中，HelixFold3 通过其置信度评分（pLDDT）对候选酶蛋白进行打分排序，其预测精度（AUC-ROC）显著优于现有的结构预测模型AlphaFold2 和 Chai-1。此外，与传统分析方法（如溶剂可接触表面积 SASA、带电性 Charge、一致性 Identity 等）相比，HelixFold3 也展现了更强的筛选能力，在准确性上也明显超越了蛋白语言模型 ESM-1v。

这一结果充分证明了 HelixFold3 在酶蛋白筛选和设计中的强大潜力，不仅为酶改造提供了高效的解决方案，还为进一步推动绿色技术和生物工业创新奠定了坚实基础。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E9%85%B6%E6%94%B9%E9%80%A0%E5%9C%BA%E6%99%AF1-44a9fb51.png" style="zoom:50%;" />

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E9%85%B6%E6%94%B9%E9%80%A0%E5%9C%BA%E6%99%AF2-c044b117.png" style="zoom:50%;" />













<a id="aa0f880"></a>

# 小蛋白设计说明













<a id="c771c43"></a>

## 背景介绍

小蛋白结合剂的设计与应用在药物开发、信号通路调控以及基因编辑技术等领域具有重要价值。这些结合剂能够特异性靶向并调控关键蛋白质，为疾病治疗提供精准的干预手段，进而推动更高效、更精准的解决方案。 然而，靶向关键蛋白质的结合剂设计与筛选过程充满挑战。设计具备多样性、新颖性及高效结合能力的候选小蛋白，仍是药物研发中的难题。传统的湿实验验证方法，需要投入大量的人力、物力和时间成本，且成功率普遍较低。如何在保证筛选效率的同时降低成本，并提高实验成功率，成为亟待解决的核心问题。 为了解决这一问题，螺旋桨团队研发了一款基于**HelixFold3**的端到端蛋白结合肽（Binder）设计系统 **HelixDesign-Binder**。该系统旨在帮助用户快速、高效地设计可特异性识别目标蛋白的结合肽或蛋白分子，加速新型蛋白药物或功能分子的发现过程。

如图所示，HelixDesign-Binder 主要包括四个模块：骨架生成、序列设计、蛋白复合物结构预测、互作分析。系统以用户输入的**靶蛋白序列**为起点，自动完成设计和筛选，输出带排序和打分的蛋白结合肽或蛋白分子。

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1%E6%B5%81%E7%A8%8B2-c87fe3e0.png)

1. **骨架生成**：系统根据用户输入的靶蛋白序列，先预测其三维结构，然后自动生成多个用于识别该靶标的结合小蛋白骨架。同时骨架生成模块会对骨架进行过滤，得到置信度高的多个骨架用于设计，通过多个骨架设计，增强结构多样性，提高结合成功率。
2. **序列设计**：在生成的骨架基础上进行氨基酸序列设计。系统默认为每个任务**生成 1000 个候选Binder序列**（具体数量依版本而定）。
3. **高通量蛋白复合物结构预测**：借助于百度云高性能计算平台CHPC，同时利用 **HelixFold3**全原子构象预测能力，系统能够高效且高通量地对每一个Binder序列与靶蛋白进行复合体建模与折叠预测，得到全原子的构象并进行可信度打分。
4. **多维度互作用分析**：对预测得到的复合物构象进行全面的评估，包括：
   - 构象可信度打分（如 pLDDT、ipTM 、PAE 等）
   - 理化性质打分 (如物理结合能量，对接面残基性质统计等）

系统最终会根据打分结果筛选出 **Top 100** 的优质设计结果，展示于结果页面，并提供结构文件及分析结果的下载。

体验链接：https://paddlehelix.baidu.com/app/all/helixdesign-binder/forecast

更多技术细节请参阅：[小蛋白设计技术报告](https://arxiv.org/abs/2505.21873)







<a id="62294fc"></a>

## 使用说明





<a id="1cacee4"></a>

### 数据录入

#### 选择设计模式

在开始之前，请先选择您希望使用的**设计模式**。不同模式对应不同的设计目标和输入要求：

- **从头设计（De novo）**
   基于您提供的靶点结构，**从零生成全新的小蛋白 binder**。
   在该模式下：
  - 您可以指定靶点上的 **hotspot 位点**，引导 binder 更倾向于这些区域结合；
  - **binder 侧无需提供具体结构**，只需设置 binder 的长度范围即可。
- **基于参考 Binder 设计**
   在已有 binder 的基础上，对其进行**结构或序列优化**。
   在该模式下：
  - 您需要提供靶点和参考 binder；
  - 可以进一步指定在设计过程中需要 **保持不变的 binder motif**，以保留关键功能或结构特征。

---

#### 第一步：输入靶点数据

##### 上传靶点结构

您需要提供靶点的结构文件。目前支持以下两种方式：

###### 方式一：搜索结构库

- 在 PDB ID 输入框中输入 4 位 PDB 编号（如 `5O45`）

- 从下拉列表中选择目标结构

- 系统将自动加载并预览结构

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1-%E8%BE%93%E5%85%A5-%E6%A3%80%E7%B4%A2pdb%E5%BA%93-%E4%B8%AD%E6%96%87-7873f8bb.jpg" style="zoom:100%;" />

###### 方式二：上传结构文件

- 点击“文件上传”按钮，选择 `.cif` 格式文件

- 系统将自动加载并预览结构

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1-%E8%BE%93%E5%85%A5-%E4%B8%8A%E4%BC%A0%E9%9D%B6%E7%82%B9%E9%93%BE-%E4%B8%AD%E6%96%87-e7d3186b.jpg" style="zoom:100%;" />



> **提示（仅基于参考 Binder 设计模式）：**为了让模型更好地学习 **靶点与 binder 之间的空间关系**，从而获得更稳定、可靠的设计结果，**建议在此步骤上传包含靶点和 Binder 的复合体结构文件**。在后续设置参考 binder 时，您可以直接选择「从靶点结构文件中导入 binder」，无需重复上传。

---

##### 选择与裁剪靶点链

结构加载完成后，您可以在右侧的链列表中选择用于设计的**靶点链**：

- 最多可选择 **两条链** 作为靶点；
- 被选中的靶点链，其残基 ID 范围会自动显示。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1-%E8%BE%93%E5%85%A5-%E9%80%89%E6%8B%A9%E9%9D%B6%E7%82%B9%E9%93%BE-%E4%B8%AD%E6%96%87-2e09fc83.jpg" style="zoom:100%;" />

如果您希望只使用靶点中的**部分区域**参与设计，可以对靶点链进行裁剪。裁剪靶点链可以帮助模型聚焦于您关注的功能区域，减少无关区域对设计结果的干扰。

- 点击链后方的 **铅笔图标**，打开序列编辑窗口；

- 在弹出的序列中，点击起始和结束氨基酸以选择连续的残基范围；

- 点击「确定」保存裁剪结果。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1-%E8%BE%93%E5%85%A5-%E8%B0%83%E6%95%B4%E9%9D%B6%E7%82%B9%E9%93%BE%E5%8C%BA%E5%9F%9F-%E4%B8%AD%E6%96%87-55ced5d2.jpg" style="zoom:100%;" />

---

##### 设置热点氨基酸（仅从头设计支持）

如果您希望引导模型重点关注靶点上的特定结合区域，可以设置 **热点氨基酸（hotspots）**：

- 打开开关后，系统会展示您已选中靶点链的完整序列；

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1-%E8%BE%93%E5%85%A5-%E7%83%AD%E7%82%B9%E6%B0%A8%E5%9F%BA%E9%85%B8-%E6%9C%AA%E9%80%89%E4%B8%AD-%E4%B8%AD%E6%96%87-3b343e95.jpg" style="zoom:100%;" />

- 点击序列中的氨基酸即可将其设为 hotspot；

- **最多可设置 8 个 hotspot 位点**。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1-%E8%BE%93%E5%85%A5-%E7%83%AD%E7%82%B9%E6%B0%A8%E5%9F%BA%E9%85%B8-%E9%80%89%E4%B8%AD-%E4%B8%AD%E6%96%87-f26ce8fc.jpg" style="zoom:100%;" />

---

#### 第二步：设置参考Binder (仅基于参考Binder模式支持)

##### 上传Binder结构

在该步骤中，您需要提供 **参考 Binder 的结构信息**。目前支持以下三种方式：

###### 方式一：从靶点结构文件中导入（推荐）

如果您在第一步中上传的是**包含靶点和 Binder 的复合体结构文件**，建议优先选择该方式。

这种方式可以让模型直接学习 **靶点与 Binder 之间的空间构象关系**，通常能够带来更稳定、更可靠的设计效果。

已上传的结构会自动加载并显示在右侧进行预览。

###### 方式二：搜索结构库

- 在 **PDB ID** 输入框中输入 4 位 PDB 编号（如 `5O45`）

  从下拉列表中选择对应的结构

  系统将自动加载并预览结构

###### 方式三：上传结构文件

- 点击“文件上传”按钮，选择 `.cif` 格式文件
- 系统将自动加载并预览结构

##### 选择Binder链

结构加载完成后，您可以在右侧显示的链列表中选择 **1 条链作为 Binder 链**。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1-%E8%BE%93%E5%85%A5-%E4%B8%8A%E4%BC%A0binder%E9%93%BE-%E4%B8%AD%E6%96%87-5ec063c3.jpg" style="zoom:100%;" />

> **注意**
>  Binder 的总长度需满足 **3–250 个氨基酸** 的限制。
>  如果您选择的 Binder 链长度不在该范围内，您需要：
>
> - 通过设置 **motif**，仅保留 Binder 中的关键片段；
> - 或重新选择其他满足长度要求的 Binder 链。

##### 设置motif

如果您希望在设计过程中**固定 Binder 中的关键结构或功能片段**，可以设置 **motif**：

- 打开开关后，系统会展示完整的 Binder 序列；

- 点击序列中的起始和结束氨基酸，可选中一段**连续区域**作为一个 motif；

- **最多可设置 5 个 motif**。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1-%E8%BE%93%E5%85%A5-%E8%AE%BE%E7%BD%AEmotif-%E4%B8%AD%E6%96%87-2bf4dff1.jpg" style="zoom:100%;" />

被选中的 motif 会显示在下方列表中，您可以为每个 motif 设置约束方式。目前支持以下三种约束：

- 保证结构不变（默认）
- 保证序列不变
- 保证结构和序列都不变



##### 调整 motif 连接区域长度

除了 motif 本身，Binder 中还包含 **motif 之间及 motif 前后的连接区域**，这些区域称为 **motif 连接区域**。
 它们包括：

- 不同 motif 之间的连接片段；
- motif 前端和末端的非 motif 区域。

motif 连接区域的长度默认与参考 Binder 中保持一致。
 如需调整，您可以点击 **铅笔样式的编辑按钮**，为每个连接区域分别设置长度范围。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD%E8%AE%BE%E8%AE%A1-%E8%BE%93%E5%85%A5-%E8%AE%BE%E7%BD%AEmotif%E8%BF%9E%E6%8E%A5-%E4%B8%AD%E6%96%87-5afc1648.jpg" style="zoom:100%;" />

系统会根据 **motif + motif 连接区域** 自动计算 Binder 的总长度范围。

> 请注意：最终 Binder 的总长度必须满足 **3–250 个氨基酸** 的限制。



#### 第三步：设置基础参数

##### 设置结果长度（仅从头设计支持）

在从头设计模式下，您可以指定 **设计得到的 Binder 长度范围**：

- 最小长度：**3**
- 最大长度：**250**
- 请确保最大值与最小值之间的差值 **不少于 5**

> **注意**
>  设计结果长度范围会影响模型搜索空间，从而影响任务是否能够顺利完成。

一般来说：

1. **长度范围越窄**（最大长度 − 最小长度越小），模型可探索的空间越有限，设计成功率通常会降低；
2. **最大长度设置得越小**，模型可用的结构自由度越少，设计成功率也可能降低。

**建议设置方式如下：**

1. 如果您 **对 Binder 的长度没有明确要求**，
    建议设置一个相对**宽松的长度范围**（范围更大、最小长度略大），以提高设计成功率。
2. 如果您 **对长度有明确要求**（例如希望设计更短、具有良好透膜性的多肽），
    建议在满足应用需求的前提下，**尽量放宽长度范围**，以平衡设计可行性与实际需求。

##### 设置逆折叠方法

您可以根据设计场景选择合适的 **逆折叠（Inverse Folding）方法**。不同方法在适用场景和计算特性上有所差异：

- **ESM-IF**
   更适合 **存在明确参考结构** 的场景。
   建议在「**基于参考 Binder 设计模式**」且 **未设置 motif** 时选择。
- **ProteinMPNN**
   运行效率更高、鲁棒性更好，
   建议在「**从头设计模式**」或 **已设置 Binder motif** 的情况下选择。

##### 输入任务名称（可选）并运行

用户可以选择性填入该预测任务的名称（任务名称长度不超过200，仅包含字母，数字，"-"，"_"和"."。），并点击『运行』按钮提交任务。









<a id="5fdf1e9"></a>

### 结果页展示

#### 结果总览

结果总览页用于展示**本次设计产生的全部候选 Binder 结果**，帮助您从整体层面快速判断：

- 结果质量是否集中或分散；
- 高质量候选在全部结果中的占比；
- 哪些结果值得进一步深入分析。

在该页面中，系统提供两种互补的分析视角：

- **相互作用分析维度**：关注 Binder 与靶点之间的结合质量；
- **复合物整体分析维度**：关注整个复合物结构预测的可靠性。

##### 相互作用分析维度（结合相关）

###### 左侧：图表区

左侧展示两个统计图，用于从整体分布角度理解结果质量。

**候选 Binder 评分分布**

该图为 **直方图**，展示本次设计中所有候选 Binder 在某一指标上的分布情况。

- **横轴**：指标数值区间
- **纵轴**：落在对应区间内的 Binder 数量

您可以通过右上角的指标下拉框，切换不同的评分指标进行查看。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E6%80%BB%E8%A7%88-%E5%80%99%E9%80%89binder%E5%88%86%E5%B8%83-%E4%B8%AD%E6%96%87-06927a70.jpg" style="zoom:50%;" />

**结合质量阈值覆盖比例**

该图用于评估 **在不同结合质量阈值下，高质量结果在整体中的占比情况**。

- 随着结合阈值逐步放宽，满足条件的 Binder 会不断累积；
- 当阈值放宽至最低标准时，累积比例达到 **100%**，表示已覆盖全部候选结果。
- **横轴**：预设的关键结合强度阈值区间
- **纵轴**：满足对应阈值的候选 Binder 的累积比例

背景中不同颜色表示不同等级的结合质量区间，便于快速区分“高质量 / 良好 / 较弱 / 需谨慎”的结果分布。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E6%80%BB%E8%A7%88-%E7%BB%93%E5%90%88%E8%B4%A8%E9%87%8F%E9%A2%84%E6%94%AF%E8%A6%86%E7%9B%96%E6%AF%94%E4%BE%8B-%E4%B8%AD%E6%96%87-f68ff810.jpg" style="zoom:50%;" />

###### 右侧：结果表格

右侧表格列出了与 **结合和相互作用** 相关的详细指标。

- 每一行对应一个 Binder 设计结果；
- 您可以点击表头，对任一指标进行 **排序**；
- 通过表格右上角的 **筛选功能** 设置条件，筛选感兴趣的结果；
- 点击「确认」后，表格将仅展示符合条件的候选项，便于聚焦分析。

表格字段说明如下：

| 指标名称           | 全称                                       | 数值范围               | 具体说明                                                     |
| ------------------ | ------------------------------------------ | ---------------------- | ------------------------------------------------------------ |
| Binder Index       | Binder Index                               | 正整数                 | 结果编号，用于区分不同候选 binder，在同一次设计或筛选任务中唯一。 |
| Helix Binder Score | Helix Binder Score                         | 0–1，越大越好          | 螺旋桨对 binder 的综合评分，范围 0–1。综合考虑结合稳定性、界面质量等因素，分数越高表示整体结合性能越优。 |
| 结合自由能         | Predicted Binding Free Energy (kcal·mol⁻¹) | 数值越小（越负）越稳定 | 预测的结合自由能 ΔG，由物理建模方法基于预测构象计算。数值越负表示结合越稳定、亲和力越强。 |
| 解离常数           | Predicted Dissociation Constant (Kd)       | >0，数值越小越好       | 单位 M，预测条件为 25 °C。表示结合与解离的平衡常数，数值越小表示 binder 与靶点结合越稳固、亲和力越强。 |
| iPAE               | Interface Predicted Aligned Error          | >0，数值越小越好       | 单位 Å。衡量复合物界面处残基预测位置的平均误差，数值越低说明界面构象预测越准确。 |
| ipLDDT_Target      | Interface Predicted LDDT (Target)          | 0–100，越大越好        | 衡量靶点链在界面区域残基构象的预测可信度，分数越高表示模型对该区域的结构预测越可靠。 |
| ipLDDT_Binder      | Interface Predicted LDDT (Binder)          | 0–100，越大越好        | 衡量 binder 链在界面区域残基构象的预测可信度，分数越高表示预测结果越可信。 |

---

##### 复合物整体分析维度（结构可靠性）

该视角用于评估 **整个复合物结构预测的整体可靠性**，而非仅关注结合界面。

###### 左侧：整体指标分布图

左侧展示四个关键结构评估指标的 **箱型图**：

- **Ranking Confidence**
- **pTM**
- **ipTM**
- **pLDDT**

每个箱型图展示该指标在全部候选结果中的分布情况。

将鼠标悬停在箱体上，可查看该指标的五个统计值：
 **最小值、第一四分位数（Q1）、中位数、第三四分位数（Q3）和最大值**。

该图有助于快速判断：

- 整体预测是否稳定；
- 是否存在明显离群或低置信度结果。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E6%80%BB%E8%A7%88-%E7%AE%B1%E5%9E%8B%E5%9B%BE-%E4%B8%AD%E6%96%87-5a2659de.jpg" style="zoom:50%;" />

###### 右侧：结果表格（复合物整体相关）

右侧表格列出了与 **复合物整体结构** 相关的指标：

- 每一行对应一个 Binder 设计结果；
- 支持按指标排序与条件筛选，操作方式与相互作用分析一致。

表格展示的字段与释义如下：

| 指标名             | 全称                                     | 数值范围            | 评估对象           | 具体说明                                                     |
| ------------------ | ---------------------------------------- | ------------------- | ------------------ | ------------------------------------------------------------ |
| Binder Index       | Binder Index                             | -                   | -                  | 结果编号，用于区分不同候选 binder，在同一次设计或筛选任务中唯一。结果编号 |
| Ranking_confidence | -                                        | 0~1，越高越可靠     | 整个构象           | 综合多个指标评估构象可信度                                   |
| pTM                | Predicted Template Modelling Score       | 0 - 1               | 全局构象           | 衡量预测复合物整体结构预测的准确性                           |
| ipTM               | Interface Predicted TM-score             | 0~1，>0.8 高置信度  | 亚基间相对位置     | 判断复合物整体结构可靠性                                     |
| pLDDT              | Predicted Local Distance Difference Test | 0~100，>90 高置信度 | 单个残基局部准确性 | 局部结构预测置信度                                           |



#### 单项分析页

在结果总览页中，点击任意一行结果后的「查看」，即可进入该结构对应的 **单项分析页面**。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E5%8D%95%E9%A1%B9-%E6%80%BB%E8%A7%88-fe19735b.jpg" style="zoom:50%;" />

﻿单项分析页面用于对**某一个 Binder 设计结果进行深入分析**，帮助您判断该结构是否值得进一步关注或实验验证。
 页面主要包含以下四个核心模块：

##### 1. 导航栏

导航栏位于页面左上角，用于在不同设计结果之间快速切换。

- 若您在结果总览页中设置了筛选或排序条件，
   导航栏中仅会展示**符合条件的结果**；
- 同时会保持与结果总览页一致的排序顺序，方便对比相近结果。

##### 2. 整体评价

该模块提供了对当前结构的整体质量概览：

该模块从整体层面对当前结构的质量进行快速评估，适合作为**第一眼判断**。

###### 雷达图

雷达图用于展示当前结构与**全部结果平均水平**之间的关键指标对比，包含以下指标：

- 结合自由能
- 解离常数
- Helix Binder Score
- ipTM
- pLDDT

其中：

- **红色区域**表示对应指标的**警告区间**，提示该指标可能偏低；

- 进入红色区域并不意味着结果不可用，而是建议用户结合具体任务需求进行进一步判断或验证。

  ![](https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E5%8D%95%E9%A1%B9-%E9%9B%B7%E8%BE%BE%E5%9B%BE-%E4%B8%AD%E6%96%87-1d35f240.jpg)

红色警告区间对应的参考阈值如下（仅供参考）：

| 指标               | 警告值阈点      | 含义说明（更正）                                             |
| ------------------ | --------------- | ------------------------------------------------------------ |
| 结合自由能（ΔG）   | ≥ -4 kcal·mol⁻¹ | **预测结合偏弱 / 稳定性不足**：ΔG 越负通常代表结合越稳定；当数值接近 0（不够负）时，往往意味着结合驱动力不足或构象不够稳定。 |
| 解离常数（Kd）     | ≥ 1 × 10⁻⁶ M    | **预测亲和力偏弱**：Kd 越小表示结合越紧；当 Kd ≥ 1 μM 时通常提示亲和力较弱，可能需要谨慎评估其作为候选 binder 的潜力。 |
| Helix Binder Score | < 0.5           | **综合结合表现偏弱**：该分数是平台综合多项结合相关特征得到的评分；低分通常意味着整体结合质量、界面合理性或稳定性不够理想，建议结合单项指标复核。 |
| ipTM               | < 0.5           | **界面/链间相对构象可靠性偏低**：ipTM 反映不同链之间相对位置（尤其是界面几何关系）的可信度；过低可能意味着界面装配不稳定或相对构象不可靠。 |
| pLDDT              | < 70            | **局部结构置信度偏低**：pLDDT 反映残基级局部构象可信度；<70 通常提示该区域可能较柔性或预测不稳定，界面区域若大面积偏低需谨慎。 |

###### 结构质量描述（仅供参考）

 对当前结构给出简要的文字化评价，辅助理解整体表现。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E5%8D%95%E9%A1%B9-%E6%96%87%E6%A1%88%E6%8F%8F%E8%BF%B0-%E4%B8%AD%E6%96%87-644b2ba1.jpg" style="zoom:100%;" />

###### 分数排名（仅在推理数量 > 1 或使用 HelixFold-S1 时显示）

 展示该结构在全部结果中的相对排名，帮助快速定位潜在的优选结果。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E5%8D%95%E9%A1%B9-%E6%8E%92%E5%90%8D-%E4%B8%AD%E6%96%87-c73d5f7d.jpg" style="zoom:100%;" />





##### 3. 三维结构图

预测结构以 **pLDDT 值进行着色**，反映不同区域的预测置信度：

| 颜色   | pLDDT 区间 | 含义说明                     |
| ------ | ---------- | ---------------------------- |
| 蓝色   | > 90       | 极高置信度，主链与侧链均可靠 |
| 天蓝色 | 70 – 90    | 高置信度，主链可靠           |
| 黄色   | 50 – 70    | 低置信度，结构可疑           |
| 红色   | < 50       | 极低置信度，建议忽略或排查   |

用户可拖拽、旋转结构图，详细检查关键区域。



##### 4. 详细分析

该模块从多个角度对 Binder 进行深入分析，包含 **理化性质、序列分析** 以及 **计算属性**，为进一步决策提供依据。

###### 4.1 理化性质

**相互作用数量环形图**

该图展示 Binder 与靶点之间不同类型残基相互作用的数量与构成，包括：

- 带电 / 带电（Charged / Charged）
- 带电 / 极性（Charged / Polar）
- 带电 / 非极性（Charged / Non-polar）
- 极性 / 极性（Polar / Polar）
- 极性 / 非极性（Polar / Non-polar）
- 非极性 / 非极性（Non-polar / Non-polar）

一般来说，相互作用数量越多、类型越丰富，结合强度往往越强。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E5%8D%95%E9%A1%B9-%E7%90%86%E5%8C%96%E6%80%A7%E8%B4%A8-%E4%B8%AD%E6%96%87-f48d1f49.jpg" style="zoom:100%;" />

**生物化学指标**

| 指标名                 | 说明                                     |
| ---------------------- | ---------------------------------------- |
| 非相互作用表面残基占比 | 不参与相互作用的表面残基仍对亲和力有影响 |
| 非极性表面残基占比     | 与结合强度正相关                         |



###### 4.2 序列分析

**序列展示**

该区域展示 Binder 与靶点的序列信息，并通过不同颜色标注：

- 接触界面残基
- motif
- hotspots 等关键区域

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E5%8D%95%E9%A1%B9-%E5%BA%8F%E5%88%97%E5%88%86%E6%9E%90-%E4%B8%AD%E6%96%87-9d047b5a.jpg" style="zoom:100%;" />

**接触界面残基对**

以表格形式列出 Binder 与靶点在界面处可能发生接触的残基对：

- 每一列代表一组基于距离判定的潜在接触残基对；
- 勾选表格最后一列的复选框，可在三维结构中高亮对应的残基对，便于结构层面的验证与观察。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%B0%8F%E8%9B%8B%E7%99%BD-%E7%BB%93%E6%9E%9C%E9%A1%B5-%E5%8D%95%E9%A1%B9-%E9%AB%98%E4%BA%AE%E7%9B%B8%E4%BA%92%E4%BD%9C%E7%94%A8-%E4%B8%AD%E6%96%87-f4af5af0.jpg" style="zoom:50%;" />

###### 4.3 计算属性

**PAE 图**

该区域展示当前 Binder–靶点复合物对应的 **PAE（Predicted Aligned Error）图**。

PAE 是一个二维矩阵图，横轴和纵轴分别表示蛋白质中的残基编号。
 每一个方格中的颜色表示：
 **当结构在残基 Y 处对齐时，残基 X 的预期位置误差（单位为 Å）**。

- **低 PAE 值**（误差小）表示模型对这两个残基的相对位置预测更有信心；
- **高 PAE 值**表示模型对其相对空间关系的不确定性较高。

来自不同结构域的残基之间若呈现低 PAE 值，通常意味着模型对跨域相对构象具有较高置信度。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%97%E4%BD%93%E8%AE%BE%E8%AE%A1%20%E7%BB%93%E6%9E%9C%20pae%20%E4%B8%AD%E6%96%87-e842a71c.jpg" style="zoom:67%;" />

**指标总览**

以横轴形式展示其他关键计算指标：

- **绿色区域**表示推荐或理想区间；
- **红色区域**表示告警区间；
- 竖线及对应数字表示当前 Binder 在该指标上的具体数值。

各指标的含义与阈值说明可参考结果总览页中的指标表格。

﻿

<a id="794984e"></a>

### 数据下载

所有设计结果均可通过点击下载按钮获取，下载内容为一个压缩包，包含所有预测相关的文件，具体结构如下：

```plain
├── input.json                        # 用户输入信息记录
├── results                           # 主结果文件夹
│   ├── Binder_0000 
│   │   ├── Interface.ic              # 相互作用残基列表
│   │   ├── InterfaceVis.pml          # 对接界面可视化脚本（PyMOL）
│   │   ├── all_results.json          # 所有构象的评分结果
│   │   └── predicted_structure.cif   # 预测的三维结构文件
│   ├── Binder_0001
│   │   ├── Interface.ic
│   │   ├── InterfaceVis.pml
│   │   ├── all_results.json
│   │   └── predicted_structure.cif
│   ...
│   └── Binder_0099
│       ├── Interface.ic
│       ├── InterfaceVis.pml
│       ├── all_results.json
│       └── predicted_structure.cif
└── summary.csv                      # 所有设计结果的序列及评分汇总

```

#### 文件说明

- **input.json**：记录本次设计任务的输入参数与配置。
- **summary.csv**：汇总所有设计结果的序列信息及预测指标，便于整体对比与筛选分析。
- **results/**：包含每一个设计结果的详细预测数据。每个结果保存在以 `任务名_XXXX` 命名的子文件夹中，主要包括：
  - `predicted_structure.cif`：预测得到的三维结构文件
  - `all_results.json`：该设计结果下所有构象的评分信息
  - `InterfaceVis.pml`：PyMOL 可视化脚本，用于展示对接界面残基。需先在 PyMOL 中打开对应的 `.cif` 结构文件，再加载该脚本进行界面可视化
  - `Interface.ic`：对接界面残基列表







<a id="c619fd1"></a>

# 抗体设计使用说明





<a id="b664198"></a>

## 背景介绍

抗体作为治疗性生物大分子，在疾病治疗、免疫调控和生物医学研究中发挥着至关重要的作用。然而，传统的抗体开发方法（如杂交瘤技术和噬菌体展示）成本高昂、周期漫长，难以满足现代药物开发对高效性和精准性的需求。为此，螺旋桨团队基于 HelixFold3 的高精度生物分子相互作用预测技术，构建了一种端到端的抗体设计系统。该系统集成精准的抗体设计和大规模抗原-抗体相互作用分析，结合基于结构的评分、能量函数计算以及对接界面统计信息，能够高效筛选潜在的高亲和力抗体序列，从而显著提高湿实验的成功率，加速抗体药物的开发进程。

HelixDesign-Antibody 主要流程：

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%97%E4%BD%93%E6%B5%81%E7%A8%8B%E5%9B%BE%20%E6%96%B0-edb3702f.png" style="zoom:100%;" />

HelixDesign-Antibody  主要包括如图三个流程模块，每个模块介绍如下表所示，系统将根据用户指定的设计区域和文件自动执行并最终输出设计和分析结果。在设计模块中我们将设计多样性的1000条（设计数量和版本有关）抗体序列；之后蛋白折叠模块将基于并行化策略进行MSA搜索和基于HelixFold3 的构象预测。在得到预测构象后，互作用分析模块将收集并整理之前模块的设计和预测结果，进行互作用分析，包括构象分析，基于物理能量方法的分析，对接面类别统计信息分析等。最终Top100的互作用分析结果和构象预测结果将作为输出展示在结果页面，并提供下载。

| 模块           | 具体说明                                                     |
| -------------- | ------------------------------------------------------------ |
| 序列设计模块   | 支持针对抗体的任意指定设计区域（eg. CDR）设计高质量，多样性序列设计 |
| 蛋白折叠模块   | 高精度全原子构象预测及打分高通量构象预测                     |
| 互作用分析模块 | 全面的构象打分物理能量打分对接面残基性质的信息统计自动生成对接面可视化脚本 |

体验链接：https://paddlehelix.baidu.com/app/all/helixdesign-antibody/forecast

更多技术细节请参阅：[抗体设计技术报告](https://arxiv.org/abs/2507.02345)





<a id="d2de430"></a>

## 使用说明





<a id="7b54056"></a>

### 数据准备

请提供一个包含至少一条抗原链（目标靶点）和一条抗体重链的复合体结构。为确保设计效果，请尽量满足以下条件：

1. **抗原链完整性**：抗原链应尽可能完整。若存在缺失，我们将尝试自动补全，但补全失败可能影响设计效果。
2. **CDR结构完整性**：抗体链中的CDR（互补决定区）必须完整，否则无法进行设计。
3. **Fv区域完整性**：抗体的Fv区域（可变区）应尽可能完整。若缺失氨基酸不超过2个，算法将尝试修复，但可能影响设计效果；若缺失超过2个，将无法进行设计。
4. **Fc区域完整性**：抗体的Fc区域（恒定区）建议完整。若缺失氨基酸超过2个，则无法支持该区域的定向设计，且Fc区域将从最终结果中移除。

﻿





<a id="afcf485"></a>

### 数据录入

#### 第一步：输入复合体结构文件

**注意事项：**

- 抗原链应尽可能完整。若存在缺失，我们会尝试自动补全，但补全失败可能影响设计效果。

﻿

用户需提供包含至少一条抗原链和一条抗体重链的复合体结构文件。支持以下两种方式：

##### 方式一：搜索结构库

- 在 PDB ID 输入框中输入 4 位 PDB 编号（如 `7QUH`）
- 从下拉列表中选择目标结构
- 系统将自动加载并预览结构

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%97%E4%BD%93%E8%AE%BE%E8%AE%A1%20%E8%BE%93%E5%85%A5%E7%BB%93%E6%9E%84%20%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%84%E5%BA%93%20%E4%B8%AD%E6%96%87-8e615153.jpg" style="zoom:80%;" />

##### 方式二：上传结构文件

- 点击“文件上传”按钮，选择 `.cif` 格式文件
- 系统将自动加载并预览结构

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%97%E4%BD%93%E8%AE%BE%E8%AE%A1%20%E8%BE%93%E5%85%A5%E7%BB%93%E6%9E%84%20%E4%B8%8A%E4%BC%A0%E6%96%87%E6%A1%A3%20%E4%B8%AD%E6%96%87-b96ee9c9.jpg" style="zoom:80%;" />

------

#### 第二步：选择目标设计链

- 从菜单中选择待设计的抗体链，系统默认选择第一条抗体重链。

**注意事项：**

- 所选抗体链中的 **CDR 区域**（互补决定区）必须完整，否则无法进行设计。

------

#### 第三步：选择设计区域

可选择以下区域进行抗体链设计：

- **全链设计（默认）**
- **完整 Fv 区域**
- **指定 Fv 区域**

**注意事项**

1. **Fv 区域完整性**：若缺失氨基酸 ≤2 个，系统将尝试修复，但可能影响设计效果；若缺失 >2 个，将无法设计。
2. **Fc 区域完整性**：建议完整。若缺失氨基酸 >2 个，无法进行全链设计，系统将自动移除该区域。
3. **链长度限制**：最终设计仅考虑用户所选目标设计链及其配对链（纳米抗体无配对链）。抗原链 + 设计链 + 配对链的 **总长度 ≤1000**，否则无法提交任务。链长为补全后序列长度。
4. **自定义 Fv 区域格式**：

- - 在输入框中输入残基索引或范围，多个项用逗号分隔，例如：`80-90,100`﻿
  - 数字应对应 `.cif` 文件中的残基编号

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%97%E4%BD%93%E8%AE%BE%E8%AE%A1%20%E6%8C%87%E5%AE%9A%E8%AE%BE%E8%AE%A1%E5%8C%BA%E5%9F%9F%20%E4%B8%AD%E6%96%87-ebc36eff.jpg" style="zoom:67%;" />



------

#### 第四步：输入任务名称并提交

- 可选填写任务名称（≤200 字符，仅限字母、数字、"-"、"_" 和 "."）
- 点击「运行」按钮提交任务





<a id="f1b4f18"></a>

### 结果页展示

提交后系统将以表格形式展示设计结果。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%97%E4%BD%93%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E8%A1%A8%E6%A0%BC%20%E4%B8%AD%E6%96%87-73f03e5a.jpg" style="zoom:67%;" />

#### 表格字段

| 指标名             | 全称                                     | 数值范围               | 评估对象           | 说明                                                         |
| ------------------ | ---------------------------------------- | ---------------------- | ------------------ | ------------------------------------------------------------ |
| ID                 | -                                        | 0~99                   | 设计结果编号       | -                                                            |
| 类型               | Type                                     | Wild type / Designed   | 序列类型           | 表示该序列是野生型还是设计获得                               |
| 抗体序列           | -                                        | -                      | 抗体序列           | -                                                            |
| 预测结合能         | Predicted binding affinity (kcal·mol⁻¹)  | 数值越小（越负）越稳定 | 分子间相互作用     | 表示预测的结合自由能 (ΔG)，由物理建模方法基于预测构象计算，数值越负表示亲和力越强。 |
| PAE                | Predicted Aligned Error                  | ≥0，越小越好           | 残基相对位置       | 反映模型对残基间相对位置的预测误差                           |
| pLDDT              | Predicted Local Distance Difference Test | 0~100，>90 高置信度    | 单个残基局部准确性 | 局部结构预测置信度                                           |
| Fitness            | Fitness                                  | -∞ ~ 0，越大越好       | 整体序列           | 衡量序列的进化适应性                                         |
| ipTM               | Interface Predicted TM-score             | 0~1，>0.8 高置信度     | 亚基间相对位置     | 判断复合物整体结构可靠性                                     |
| Ranking_confidence | -                                        | 0~1，越高越可靠        | 候选模型           | 综合多个指标评估模型可信度                                   |

点击“查看”可进一步查看：

- PAE 图
- 三维结构图
- 相互作用数量环形图
- 生物化学指标



#### 相互作用数量环形图

展示残基间交互数量及类型，包括：

- 带电/带电（Charged / Charged）
- 带电/极性（Charged / Polar）
- 带电/非极性（Charged / Non-polar）
- 极性/极性（Polar / Polar）
- 极性/非极性（Polar / Non-polar）
- 非极性/非极性（Non-polar / Non-polar）

交互越多，结合强度通常越强。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%97%E4%BD%93%E8%AE%BE%E8%AE%A1%20%E7%BB%93%E6%9E%9C%20%E7%9B%B8%E4%BA%92%E4%BD%9C%E7%94%A8%E6%95%B0%E9%87%8F%20%E4%B8%AD%E6%96%87-ea4affae.jpg" style="zoom:60%;" />

#### 生物化学指标

| 指标名                 | 说明                                     |
| ---------------------- | ---------------------------------------- |
| 非相互作用表面残基占比 | 不参与相互作用的表面残基仍对亲和力有影响 |
| 非极性表面残基占比     | 与结合强度正相关                         |

#### PAE 图

您可以在此查看到此时选中的binder与靶点复合物对应的PAE图。PAE (Predicted aligned error) 是一个二维图，蛋白残基沿着轴延伸。在每个方格中，绿色阴影表示一对残基的预期距离误差，单位为Ångströms（Å）。PAE图是衡量模型在预测结构内两个残基的相对位置上有多自信的指标。PAE被定义为当预测和实际结构在残基Y上对齐时，残基X处的预期位置误差，以Ångströms（Å）为单位测量。

来自两个不同域的两个残基之间的低PAE得分意味着低预测误差，也就是说，模型对这些残基的位置有信心。相反，PAE得分高意味着模型对其相对位置没有信心。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%97%E4%BD%93%E8%AE%BE%E8%AE%A1%20%E7%BB%93%E6%9E%9C%20pae%20%E4%B8%AD%E6%96%87-e842a71c.jpg" style="zoom:67%;" />

#### 三维结构图

结构上不同颜色代表不同置信度区间（pLDDT）：

- 深蓝：>90（非常高）
- 浅蓝：70~90（高）
- 黄色：50~70（低）
- 橙红：<50（非常低）

鼠标悬停可查看各残基 pLDDT 分数。

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E6%8A%97%E4%BD%93%E8%AE%BE%E8%AE%A1%20%E7%BB%93%E6%9E%9C%20%E4%B8%89%E7%BB%B4%E7%BB%93%E6%9E%84%20%E4%B8%AD%E6%96%87-57444b48.jpg)

﻿





<a id="4aa63ad"></a>

### 数据下载

所有设计结果均可通过点击下载按钮获取，下载内容为一个压缩包，包含所有预测相关的文件，具体结构如下：

```plain
├── input.json       # 用户输入信息记录
├── results
│   ├── 9dd5_user_0000
│   │   ├── 9dd5_user_0000.cif    # 三维结构预测结果
│   │   ├── Interface.ic          # 对接面残基列表
│   │   ├── InterfaceVis.pml      # 对接面可视化脚本（PyMOL）
│   │   ├── all_results.json      # 所有构象的打分结果
│   │   └── chain_id_mapping.csv  # 链 ID 对照表
│   ├── 9dd5_user_0001
│   │   ├── 9dd5_user_0001.cif
│   │   ├── Interface.ic
│   │   ├── InterfaceVis.pml
│   │   ├── all_results.json
│   │   └── chain_id_mapping.csv
└── summary.csv                   # 所有设计结果的序列及各项评分汇总
```

#### 文件说明

- **input.json**
  用户输入信息记录文件。
- **results/**
  存放每个设计结果的详细预测数据，每个结果保存在以 `任务名_XXXX` 命名的子文件夹中，主要包含：
  - **任务名_XXXX.cif**：预测的三维结构文件
  - **Interface.ic**：对接界面残基列表
  - **InterfaceVis.pml**：PyMOL 可视化脚本，用于展示对接界面残基。需先在 PyMOL 中打开 `.cif` 文件，再加载此脚本进行可视化。
  - **all_results.json**：所有构象的打分结果
  - **chain_id_mapping.csv**：链 ID 对照表，记录原始输入与预测结果中的链对应关系
- **summary.csv**
  汇总所有设计结果的序列及各项评分，便于整体比较与分析。





<a id="1f95d16"></a>

# 设计模块定价



抗体设计和小蛋白设计服务的费用基于任务所消耗的**计算资源**。我们引入了“算力单元”（t）作为量化指标，任务总费用计算公式为：`总费用 = 算力单元数量 × 单价`。



<a id="c9747b1"></a>

## 价格速查表

下表展示了不同 Token 数量（L）对应的算力单元消耗及预估费用（基于默认参数）：

| **Token 数量 (L)** | **消耗算力单元 (t)** | **预估价格 (元)** |
| ------------------ | -------------------- | ----------------- |
| **100**            | 5,110                | **351.08**        |
| **200**            | 9,856                | **677.15**        |
| **300**            | 16,658               | **1,144.48**      |
| **500**            | 35,549               | **2,442.38**      |
| **800**            | 75,366               | **5,177.99**      |
| **1000**           | 108,750              | **7,471.62**      |





<a id="3d5d7da"></a>

## 计费公式详解

<a id="a65ba4b"></a>

### 核心公式

```
t = （0.00014 * L^1.7 * E * R + 5）* 0.6 * D
```

> **说明**：
>
> - t：算力单元数量（计算结果向上取整）。
> - **单价**：**0.068704549 元/算力单元**。



<a id="24d186e"></a>

### 参数说明

#### A. 核心变量（L）

L代表任务的 Token 总数量，根据任务类型不同，计算方式如下：

- 小蛋白设计：

  L = 靶蛋白序列长度 + 设计结果长度上限

- 抗体设计：

  L = 抗原链长度(补全后) + 目标设计链长度 + 配对链长度(如有)



#### B. 模型固定参数（用户不可调）

为了保证服务稳定性与计算标准统一，以下参数由系统固定：

| **参数**     | **含义**    | **设定值** | **说明**                   |
| ------------ | ----------- | ---------- | -------------------------- |
| **E**        | 推理数量    | **1**      | 模型推理次数参数           |
| **R**        | Recycle数量 | **10**     | 模型内部循环计算次数参数   |
| **D**        | 设计参数    | **1000**   | 影响生成规模的设计参数     |
| **Basis**    | 基础消耗    | **5**      | 每次任务启动的基础资源开销 |
| **Discount** | 调整系数    | **0.6**    | 基于模型性能优化的折扣系数 |







<a id="d42ad44"></a>

## 计费示例

为了帮助您更好地理解计费逻辑，以下提供三个典型场景的费用计算过程：



<a id="c372794"></a>

### 场景一：小蛋白设计



**任务条件**：

- 输入靶蛋白长度：500
- 设定设计结果长度：50-100（取上限 100）

**费用计算**：

该任务的token数量L为：

```
L = 500 + 100 = 600
```

所需的算力单元t为：

```
t = (0.00014 * 600^1.7 * 1 * 10 + 5) *0.6 * 1000 ≈ 47374.80
t向上取整后为47375
```

商业用户最终费用为：

```
费用 = t * 单价
		= 47375 * 0.068704549 
		≈ 3254.88元
```



<a id="b1b036f"></a>

### 场景二：抗体设计（双链）

**任务条件**：

- 抗原长度：198（补全后 200）
- 目标设计链（重链）长度：120
- 配对链（轻链）长度：100

**费用计算**：

该任务的token数量L为：

```
L = 200 + 120 + 100 = 420
```

所需的算力单元t为：

```
t = (0.00014 * 420^1.7 * 1 * 10 + 5) * 0.6 * 1000 ≈ 27199.31
t向上取整后为27200
```

商业用户最终费用为：

```
费用 = t * 单价
		= 27200 * 0.068704549 
		≈ 1868.76元
```



<a id="4dc80a0"></a>

### 场景三：抗体设计（单链/纳米抗体）

**任务条件**：

- 抗原长度：248（补全后 250）
- 目标设计链（纳米抗体）长度：100
- 无配对链

**费用计算**：

该任务的token数量L为：

```
L = 250 + 100 = 350
```

所需的算力单元t为：

```
t = (0.00014 * 350^1.7 * 1 * 10 + 5) * 0.6 * 1000 ≈ 20749.86
t向上取整后为20750
```

商业用户最终费用为：

```
费用 = t * 单价
		= 20750 * 0.068704549 
		≈ 1425.62元
```









<a id="33adfb2"></a>

# 【小分子药物研发】















<a id="a5a460d"></a>

# HelixADMET基线















<a id="e4caa41"></a>

## 背景介绍

ADMET预测模型是基于百度深度学习技术，预测给定化合物的基础理化性质、ADMET性质、成药性等50+个指标。

ADMET指的是化合物在人体内的吸收（Absorption）、分布（Distribution）、代谢（Metabolism）、排泄（Excretion）和毒性（Toxicity）。基于长期的药物研发实践，研究人员发现候选化合物在后期临床实验中的表现很大程度上与他们的ADMET性质相关。因此，这些性质的预测能够在药物研发早期快速剔除有风险的化合物，从而提升候选药物进入临床试验后的成功率。

基于化合物大模型HelixGEM，提出一种融合多种任务的知识迁移框架，使得不同的任务(指标)之间能够互相学习相关知识，有效解决了由于ADMET标注数据不足引起的模型表现不佳的难题。与业界知名的ADMET软件相比，在同样的预测目标上，HelixADMET表现平均领先4%以上。除此之外，得益于预训练模型底座，[HelixADMET自训练模块](https://paddlehelix.baidu.com/app/drug/admet/train)还支持利用客户自有数据对模型进行微调，能够用于预测定制化指标，满足ADMET成药性的多样指标预测的需求。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/helixadmet-43493927.jpg" style="zoom:30%;" />

<center>HelixADMET在多个ADMET性质指标上达到SOTA</center>

相关文献：[HelixADMET: a robust and endpoint extensible ADMET system incorporating self-supervised knowledge transfer](https://academic.oup.com/bioinformatics/article-abstract/38/13/3444/6590643)

体验链接：https://paddlehelix.baidu.com/app/drug/admet/forecast

















<a id="11495b8"></a>

## 操作说明













<a id="0fdc87d"></a>

### 数据录入

用户可以输入最多1000个分子式进行ADMET预测。有两种输入方式。

##### a. 文本框输入

用户可以直接在文本框输入化合物分子式，不同的分子式之间用换行符隔开。如：

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5UAEcNucBNx64hjYURYj-d.png)

用户还可以点击右上角『绘制分子』按钮，展开画图面板进行绘制。点击『确认』后，该分子的SMILES会自动键入文本框。如果绘制了多个分子，点击『确认』后可以一次性汇入。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4YX69QIRhEraOH4-6PoDfj.png" alt="img" style="zoom:33%;" />

目前文本框支持输入最多100个SMILES分子。（如果想要上传更多分子，可以选择b.上传文档的方式。）



##### b. 上传文档

用户可以通过上传.csv或.txt文档来输入SMILES信息：

- .csv文件中包含最多1000个SMILES表达式，每个SMILES分子独占一行

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4XETKaHjtJwZ1vdrXV4Yx1.png" alt="img" style="zoom:50%;" />

- .txt文件中包含最多1000个SMILES表达式，每个SMILES分子独占一行

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA63k0WZl_pKXYebYuOC0IXw.png" alt="img" style="zoom:50%;" />

用户可以点击『上传范本下载』来查看我们提供的示例文件。

















<a id="e6052cb"></a>

### 查看结果

#### 对结果进行筛选

结果页上方为『高级筛选』区域。其中有10个可供筛选的选项。用户可以在勾选符合目标的筛选条件后点击『筛选』按钮，则下方结果只会保留符合条件的分子。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4zaeQIG2FLGptpzScK2eYm.png" alt="img" style="zoom:50%;" />



####  结果总览 - 卡片视图

所有的分子会根据用户的输入顺序，以分子卡片的形式进行展示。

每一个卡片会显示该分子的六个属性：

- 化学式
- 分子量（MW, Molecular weight)
- 口服生物利用度（F, Oral bioavailability)
- 血浆蛋白结合率（PPB, Plasma protein binding)
- 半衰期（Half-life）
- 致癌性（Carcinogenicity）

所有属性的具体含义与理解可以参看『[ADMET预测结果帮助文档](https://aipe-easydl-doc.cdn.bcebos.com/helix/PaddleHelix%20ADMET%20%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3%202021.11.29.pdf)』

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6xclf6zeNMMpAb0Qz19iMP.png)



#### 分子详情页

点击单个卡片后会展开该分子的详情页，包含共计55个指标。对于不良或需要引起注意的预测结果，会用橙色或红色的图标进行标识。所有属性的具体含义与理解可以参看『[ADMET预测结果帮助文档](https://aipe-easydl-doc.cdn.bcebos.com/helix/PaddleHelix%20ADMET%20%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3%202021.11.29.pdf)』，通过序号进行索引。通过模型预测的属性后面还会提供置信度，置信度越高，表示模型判断该结果为真的可能性越高。

![](https://bml-test-test.bj.bcebos.com/helix_upload/admet%20%E5%9F%BA%E7%BA%BF%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E8%AF%A6%E6%83%85%E9%A1%B5%20%E5%BA%95%E9%83%A8%20%E4%B8%AD%E6%96%87-2596b666.jpg)

所有指标按照『理化性质』、『吸收（A）』、『分布（D）』、『代谢（M）』、『排泄（E）』、『毒性（T）』、『成药性』和『药物化学规则』进行分区，可以通过点击左侧导航栏进行快速定位。















<a id="2fec76e"></a>

### 数据下载

#### 下载所有结果

所有结果都可以通过点击下载按钮进行下载，结果为.csv格式的表单。表单的每一行为一个SMILES分子式，每一列为一个性质。

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7KwXUJ0aZJPakAmZmBwA9y.png)

#### 下载部分结果

勾选卡片右上角的复选框可以对单个或多个卡片进行选择。或者用户可以在对结果进行筛选后，点击『全选』选择所有筛选后的分子。 

选择完成后，点击『下载已选预测结果』，则下载的结果中只会包含被选中的分子。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4vuh8v_O1DpKz5xk_aiXnI.png" alt="img" style="zoom:50%;" />









<a id="c1206e8"></a>

# HelixADMET API

本文档主要说明您如何通过调用螺旋桨平台的HelixADMET基线模型的API以完成小分子的理化性质、ADMET、成药性等属性的预测。















<a id="b7df736"></a>

## HelixADMET提交任务API













<a id="a10a8a2"></a>

### 接口描述

该接口可用于提交HelixADMET的任务，每次最多可以提交100个smiles。在使用该API前，需要先升级成为螺旋桨的[商业账户](https://paddlehelix.baidu.com/app/tut/platform/price/account)。













<a id="40bb619"></a>

### 接口要求

| 内容     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| HTTP方法 | POST                                                         |
| 请求地址 | `https://aip.baidubce.com/rpc/2.0/helixadmet/submit/admet?access_token={access_token}` |
| 接口鉴权 | 详见下方“接口鉴权”部分说明                                   |















<a id="aed95f1"></a>

### 请求说明

URL参数

| 参数         | 值                                                           |
| ------------ | ------------------------------------------------------------ |
| access_token | 通过API Key和Secret Key获取的access_token,参考下方“接口鉴权”部分说明 |

Header如下

| 参数         | 值               |
| ------------ | ---------------- |
| Content-Type | application/json |

Body中放置请求参数，参数详情如下：

**请求参数**

| 字段   | 必选 | 类型   | 说明                                         |
| ------ | ---- | ------ | -------------------------------------------- |
| smiles | 是   | string | smiles 序列，多个用换行分隔（限制100个以内） |



以下为您提供示例代码。这里以python语言为例进行演示。

a. 打开python编译器，输入以下请求示例代码【python】。在`access_token`后输入您的access_token，并在`smiles`之后填入您要预测的smiles序列。

```python
import requests
import json

'''
请在下方填入您的access_token
'''
access_token = 'xxx'
token_url='https://aip.baidubce.com/rpc/2.0/helixadmet/submit/admet'
url=f"{token_url}?access_token={access_token}"

'''
设置请求的headers
'''
headers = {
    'Content-Type': 'application/json'
}

'''
构造请求的body，请在下方smiles后填入smiles
'''
body = {
    'smiles': "xxx"
}
'''
发送POST请求
'''
response = requests.post(url, headers=headers, data=json.dumps(body))

'''
处理响应
'''
if response.status_code == 200:
    print("Response:", response.json())
else:
    print("Failed to submit request:", response.text)

```

b. 输入完成后运行代码，服务器将返回如下文本参数：

| 字段     | 必选 | 类型   | 说明                       |
| -------- | ---- | ------ | -------------------------- |
| log_id   | 是   | string | 唯一的log id，用于问题定位 |
| code     | 是   | number | 错误码                     |
| msg      | 是   | string | 错误内容                   |
| data     | 是   | array  |                            |
| +task_id | 否   | number | 任务id                     |















<a id="2963772"></a>

## HelixADMET查看任务结果API













<a id="cd6e4fa"></a>

### 接口描述

该接口可用于获取HelixADMET的任务结果













<a id="293cda1"></a>

### 接口要求

| 内容     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| HTTP方法 | POST                                                         |
| 请求地址 | `https://aip.baidubce.com/rpc/2.0/helixadmet/task/info?access_token={access_token}` |
| 接口鉴权 | 详见下方“接口鉴权”部分说明                                   |















<a id="5e560bd"></a>

### 请求说明

URL参数：

| 参数         | 值                                                           |
| ------------ | ------------------------------------------------------------ |
| access_token | 通过API Key和Secret Key获取的access_token,参考下方“接口鉴权”部分说明 |

Header如下：

| 参数         | 值               |
| ------------ | ---------------- |
| Content-Type | application/json |

Body中放置请求参数，参数详情如下：

| 字段    | 必选 | 类型 | 说明                              |
| ------- | ---- | ---- | --------------------------------- |
| task_id | 是   | id   | 任务id（提交任务时返回的task_id） |



以下为您提供示例代码。这里以python语言为例进行演示。

a. 打开python编译器，输入以下请求示例代码【python】。在`access_token`后输入您的access_token，并在`task_id`之后填入您提交时返回的task_id。

```python
import requests
import json
'''
请在下方填入您的access_token
'''
access_token = 'xxx'
token_url='https://aip.baidubce.com/rpc/2.0/helixadmet/task/info'
url=f"{token_url}?access_token={access_token}"
'''
设置请求的headers
'''
headers = {
    'Content-Type': 'application/json'
}
'''
构造请求的body，请在下方task_id后填入数字
'''
body = {
    'task_id': 00000
}
'''
发送POST请求
'''
response = requests.post(url, headers=headers, data=json.dumps(body))

'''
处理响应
'''
if response.status_code == 200:
    print("Response:", response.json())
else:
    print("Failed to submit request:", response.text)

```

b. 输入完成后运行代码，服务器将返回如下文本参数：

**返回参数**

| 字段                                            | 必选 | 类型   | 说明                            |
| ----------------------------------------------- | ---- | ------ | ------------------------------- |
| log_id                                          | 是   | string | 唯一的log id，用于问题定位      |
| code                                            | 是   | number | 错误码                          |
| msg                                             | 是   | string | 错误内容                        |
| data                                            | 是   | array  |                                 |
| +status                                         | 否   | number | 1: 成功；2:运行中；-1 运行失败  |
| +run_time                                       | 否   | int    | 运行时间                        |
| +result                                         | 否   | array  | 任务结果                        |
| ++acid_dissociation_constant_(pka)              | 否   | float  | 酸度系数（pKa）                 |
| ++acute_oral_toxicity_on_human                  | 否   | float  | 人急性口服毒性                  |
| ++acute_oral_toxicity_on_rodents                | 否   | float  | 啮齿类动物急性口服毒性          |
| ++ames_mutagenicity                             | 否   | float  | Ames致突变性                    |
| ++androgen_(ar)_receptor_activation             | 否   | float  | 雄激素受体激活                  |
| ++antioxidant_response_element_activation       | 否   | float  | 抗氧化反应元素信号通路激活      |
| ++aromatase_(cyp19)_inhibition                  | 否   | float  | 芳香化酶（CYP19）抑制           |
| ++aromatic_heavy_atoms                          | 否   | int    | 芳香环上的重核数量              |
| ++aromatic_ring_count                           | 否   | int    | 芳香环数量                      |
| ++aryl_hydrocarbon_receptor_(ahr)_activation    | 否   | float  | 芳香烃受体激活                  |
| ++atad5_activation                              | 否   | float  | ATP酶族AAA结构域蛋白5型激活     |
| ++blood-brain-barrier_permeant                  | 否   | float  | 血脑屏障通过性                  |
| ++caco-2_permeability                           | 否   | float  | Caco-2细胞渗透性                |
| ++carcinogenicity                               | 否   | float  | 致癌性                          |
| ++cyp1a2_inhibitor                              | 否   | float  | 细胞色素P450 1A2族酶抑制        |
| ++cyp1a2_substrate                              | 否   | float  | 细胞色素P450 1A2族酶底物        |
| ++cyp2c19_inhibitor                             | 否   | float  | 细胞色素P450 2C19族酶抑制       |
| ++cyp2c19_substrate                             | 否   | float  | 细胞色素P450 2C19族酶底物       |
| ++cyp2c9_inhibitor                              | 否   | float  | 细胞色素P450 2C9族酶抑制        |
| ++cyp2c9_substrate                              | 否   | float  | 细胞色素P450 2C9族酶底物        |
| ++cyp2d6_inhibitor                              | 否   | float  | 细胞色素P450 2D6族酶抑制        |
| ++cyp2d6_substrate                              | 否   | float  | 细胞色素P450 2D6族酶底物        |
| ++cyp3a4_inhibitor                              | 否   | float  | 细胞色素P450 3A4族酶抑制        |
| ++cyp3a4_substrate                              | 否   | float  | 细胞色素P450 3A4族酶底物        |
| ++estrogen_(er)_receptor_activation             | 否   | float  | 雌激素受体激活                  |
| ++formula                                       | 否   | string | 化学式                          |
| ++fraction_csp3                                 | 否   | float  | sp3杂化的碳原子比例             |
| ++ghose_violations                              | 否   | int    | 戈斯法则（违反条数）            |
| ++h-bond_acceptors                              | 否   | int    | 受氢体数量                      |
| ++h-bond_donors                                 | 否   | int    | 供氢体数量                      |
| ++half_life                                     | 否   | float  | 半衰期                          |
| ++heavy_atoms                                   | 否   | float  | 重核数量                        |
| ++hepatotoxicity                                | 否   | float  | 肝毒性                          |
| ++herg_inhibition                               | 否   | float  | hERG抑制性                      |
| ++hse_activation                                | 否   | float  | 热休克反应信号通路激活          |
| ++human_intestinal_absorption                   | 否   | float  | 人肠道吸收率                    |
| ++lipid-water_partition_coefficient_(log)       | 否   | float  | 脂水分配系数（对数）            |
| ++lipinski_violations                           | 否   | int    | 列宾斯基法则（违反条数）        |
| ++mitochondrion_membrane_potential_disturbance  | 否   | float  | 线粒体膜电位干扰                |
| ++molar_refractivity                            | 否   | float  | 摩尔折光率                      |
| ++molecular_weight                              | 否   | float  | 分子量                          |
| ++np,_natural_product-likeness_score            | 否   | float  | 天然产物相似性                  |
| ++oral_bioavailability                          | 否   | float  | 口服生物利用度                  |
| ++p-glycoprotein_inhibitor                      | 否   | float  | P糖蛋白抑制                     |
| ++p-glycoprotein_substrate                      | 否   | float  | P糖蛋白底物                     |
| ++p53_activation                                | 否   | float  | p53蛋白激活                     |
| ++pains_alerts                                  | 否   | float  | 假阳性化合物告警                |
| ++plasma_protein_binding                        | 否   | float  | 血浆蛋白结合率                  |
| ++ppar-γ_activation                             | 否   | float  | 过氧化物酶体增殖物激活受体γ激活 |
| ++qed,_quantitative_estimation_of_drug-likeness | 否   | float  | 定量评估类药性                  |
| ++ring_count                                    | 否   | int    | 环数量                          |
| ++rotatable_bonds                               | 否   | int    | 旋转键数量                      |
| ++sa,_synthetics_accessibility_score            | 否   | float  | 易合成度                        |
| ++smiles                                        | 否   | string | smiles分子式                    |
| ++topological polar_surface_area_(tpsa)         | 否   | float  | 拓扑极性表面积                  |
| ++veber_violations                              | 否   | int    | 维伯法则（违反条数）            |
| ++water_solubility_(log)                        | 否   | float  | 水溶性（对数）                  |

关于返回指标的更多释义和说明请参见：[HelixADMET帮助文档](https://aipe-easydl-doc.cdn.bcebos.com/helix/PaddleHelix%20ADMET%20%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3%202021.11.29.pdf)

















<a id="28b17e0"></a>

## 接口鉴权

鉴权的主要目的是获取access_token。access_token是用户的访问令牌，承载了用户的身份、权限等信息。此处只提供简单的说明，详细教程请参考[鉴权认证机制](https://ai.baidu.com/ai-doc/REFERENCE/Ck3dwjhhu)。

鉴权主要分为以下两步：













<a id="ad8da1c"></a>

### 1. 获取AK/SK

a. 前往 [PaddleHelixAPI应用列表](https://console.bce.baidu.com/ai/??_=1694682233981#/ai/paddlehelix/apiList/apiPage) 页面，点击左上角创建应用，请确保您在接口选择中勾选了HelixADMET，然后点击立即创建。

b. 在列表页可以看到API Key和Secret Key













<a id="c4871ee"></a>

### 2. 获取acess_token

调用API时必须在URL中带上Access_token参数，Access token默认有效期为30天，获取Access_token的流程如下：

#### 请求URL数据格式

向授权服务地址`https://aip.baidubce.com/oauth/2.0/token`发送请求（推荐使用POST），并在URL中带上以下参数：

- **grant_type：** 必须参数，固定为`client_credentials`；
- **client_id：** 必须参数，应用的`API Key`；
- **client_secret：** 必须参数，应用的`Secret Key`；

#### 获取access_token

以下为您提供示例代码。这里以python语言为例进行演示。

a. 打开python编译器，输入以下access_token示例代码【python】。在`api_key`和`secret_key`之后填入您在API应用列表中获取到的API Key和Secret Key。

```python
import requests
import json

def main():
    '''
    请在下方api_key和secret_key之后填入您在API应用列表获取到的AK&SK
    '''
    api_key='xxx'
    secret_key='xxx'
    token_url='https://aip.baidubce.com/oauth/2.0/token'
    
    url = f"{token_url}?grant_type=client_credentials&client_id={api_key}&client_secret={secret_key}"
    
    payload = ""
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    
    response = requests.request("POST", url, headers=headers, data=payload)
    
    print(response.text)
    
if __name__ == '__main__':
    main()
```

b. 输入完成后运行代码，服务器将返回json文本参数，如下：

- **access_token**：要获取的Access Token；

- **expires_in**：Access Token的有效期(秒为单位，有效期30天)；

- 其他参数忽略，暂时不用;

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/accession%20token%E8%BF%94%E5%9B%9E-fdff10e1.jpg" style="zoom:50%;" />

c. 若请求错误，服务器将返回的JSON文本包含以下参数：

- **error：** 错误码；关于错误码的详细信息请参考下方鉴权认证错误码。

- **error_description：** 错误描述信息，帮助理解和解决发生的错误。

例如，认证失败返回：

```text
{
    "error": "invalid_client",
    "error_description": "unknown client id"
}
```

**鉴权认证错误码**

| error          | error_description            | 解释             |
| -------------- | ---------------------------- | ---------------- |
| invalid_client | unknown client id            | API Key不正确    |
| invalid_client | Client authentication failed | Secret Key不正确 |

更多错误码参见[错误码说明](https://ai.baidu.com/ai-doc/NLP/Bk6z52e59)。









<a id="8423148"></a>

# HelixVS















<a id="7e7a6b5"></a>

## 背景介绍

HelixVS是螺旋桨搭建的一套完整的虚筛流程，它能够实现千万/亿级别小分子虚拟筛选，旨在提高药物研发过程中活性分子的筛选效率和成功率，并显著缩短药物研发周期与降低研发成本。 我们集成了多个小分子对接方法进行粗筛和精筛，并使用打分模型对分子进行亲和力打分与重新排序。流程还支持前处理和后处理模块，支持根据专家经验筛选、或使用更高精度的MM/GBSA，FEP等方法来对筛选结果进行过滤。最终从大型虚拟分子库中筛选出针对目标靶点的潜在高潜活性分子。 我们在广泛用作评估分子对接效果的数据集DUD-E的102个靶点上，测试了HelixVS的平均精度与速度。相较业界常用的开源工具vina, HelixVS平均能够多找到 159% 的活性分子，同时在单机上运行的速度可提升超28倍。而相比基于深度学习的分子对接模型Karmadock和商业软件glide, HelixVS命中率平均能分别提升70.3%和16.8%。HelixVS针对某些特定的蛋白类别，如激酶、蛋白酶、核受体、离子通道等则表现更佳。在帕金森病的一个重要靶点COMT（Catechol-O-methyltransferase，儿茶酚-O-甲基转移酶）上，HelixVS更是成为唯一一个能够找到活性分子的算法，且EF0.1高达61.51

|          方法           | EF0.1  |  EF1   | 速度（pair/core/day) | 速度（pair/gpu(V100)/day) |
| :---------------------: | :----: | :----: | :------------------: | :-----------------------: |
| Vina(exhaustiveness=32) | 17.065 | 10.022 |         ~300         |             -             |
|        Glide_SP         | 37.842 | 24.346 |        ~2400         |             -             |
|        KarmaDock        | 25.958 | 15.848 |          -           |         ~5Million         |
|    HelixVS(默认配置)    | 44.205 | 26.968 |        ~8500         |             -             |

体验链接：https://paddlehelix.baidu.com/app/drug/HelixVS/forecast















<a id="44ac947"></a>

## 使用说明













<a id="33b9f27"></a>

### 数据录入页面

#### 第一步：准备蛋白

用户可以选择通过『搜结构库』、『上传文档』的方式输入靶蛋白信息，也可以选择『使用示例』使用平台提供的示例靶蛋白。

##### a. 搜结构库

PDB（Protein data bank [https://www.rcsb.org](https://www.rcsb.org/)）是一个大型的蛋白质结构数据库，输入4位PDB ID来加载目标蛋白结构。

- 输入PDB ID并从下拉菜单中选择目标蛋白质。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5CtfL2dl1G_bTtnE7AzVwG.png" alt="img" style="zoom:80%;" />

- 点击选中后，可以在下方视窗预览蛋白质的结构。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4RQ36KddhERogVjEOSNVnx.png" alt="img" style="zoom:80%;" />

- 确认蛋白质为目标蛋白质后，点击输入框旁的『预处理』按钮。平台将会自动对选中蛋白进行预处理，以便后续算法可以识别。这一步可能会需要十几秒至几分钟的时间，请耐心等候预处理完成，不要进行页面切换。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA58jzBq1XpIY4XWLjd4C0iT.png" alt="img" style="zoom:80%;" />

- 进度条变成绿色后，表示该蛋白预处理已完成，用户可以进行下一步操作。如果需要更换成其他蛋白，请直接在搜索框中输入新的4位PDB ID，并重复上述操作。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5l3ijvhAxOk5edX5cGr0h_.png" alt="img" style="zoom:80%;" />



##### b. 上传文档

- 输入方式中选择『上传文档』

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6R1EogxwtODrJfUZu4C40o.png" alt="img" style="zoom:80%;" />

- 点击『文件上传』按钮，选择.pdb格式的蛋白质文件。此时会出现上传进度条，蛋白结构可以在下方视窗预览

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6sfiSFOghOiJvnZCGJQl1c.png" alt="img" style="zoom:80%;" />

- 当进度条变成绿色，表示文件上传完成，用户可以进行下一步操作

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA477fl4adBOjJBYrEkRksw7.png" alt="img" style="zoom:80%;" />

- 如果需要上传别的蛋白质文件，请将鼠标移到文件位置，点击右上角图标进行删除后重新上传。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7yPPW4GqJMYp7hI9N7mn3T.png" alt="img" style="zoom:50%;" />



#### 第二步：定义结合位点

用户可以在这一步为第一步中处理好的蛋白定义分子的结合位点，即蛋白口袋。如果第一步中使用了示例蛋白，则可以在这一步直接点击『使用示例』来使用示例位点。

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7fAqHmwspMkIxu038d3EHo.png)

##### a. 预测位点（即将上线）

模型会根据用户提供的蛋白预测出可能的结合位点，以表格的方式呈现。表格共三列，分别为预测名称，口袋打分和操作栏。

- 预测名称 - 用户可以通过点击某一个预测名称来选择感兴趣的口袋位点，被选中的口袋会在左侧3D视窗中以黑色立方体框架的形式展现出来。默认选中口袋打分最高的结果。
- 口袋打分 - 打分越高，对应口袋为蛋白质的真实口袋的概率越高
- 操作 - 点击后可以下载对应的口袋文件。点击底部的『批量下载』按钮可以下载所有的口袋文件。



<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6H_m3B-bdIuawSZbogzQzQ.png" alt="img" style="zoom:50%;" />

##### b. 手动输入

用户可以选择自行定义口袋位点。这需要输入：

- 口袋中心点的X,Y,Z坐标（不可以超出蛋白质的坐标范围）
- 口袋的宽W，高H，长L（范围必须在10-30之间）

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5jukr_QD9AQajgGEQv_-tb.png)

完成输入后，点击『显示口袋』按钮，则可以在左侧3D视窗中预览口袋位置。

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7ALVIkLTlNFLf3roGpfhw5.png)

注意：每一次更改坐标或口袋大小后必须再次点击『显示口袋』按钮，数据才能够被记录。



#### 第三步：设定分子库与筛选参数

在此步骤，您可以定义对接所需的分子库及筛选条件。分子库有三种导入方式：

- **a. 选择分子库**
- **b. 输入分子库**
- **c. 上传分子库**

------

##### a. 选择分子库

您可以直接勾选系统预设的分子库。这些分子库由陶术提供，分子数量不同，价格也有所差异：

| 分子库名称                              | 价格        |
| --------------------------------------- | ----------- |
| Targetmol（分子数量 3.4 万）            | 70 元/次    |
| Lifechemicals（分子数量 82 万）         | 1200 元/次  |
| ChemDiv（分子数量 283 万）              | 3700 元/次  |
| topscience database（分子数量 1687 万） | 19000 元/次 |

您可设置 **最大输出分子数量**，但实际结果可能少于设定值，原因是部分分子不符合筛选条件。

------

##### b. 输入分子库

您可以在文本框中直接输入化合物的 SMILES 分子式，每行一个。例如：

- 直接键入多个 SMILES（换行分隔）。

  ![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5UAEcNucBNx64hjYURYj-d.png)

- 点击 **绘制分子** 打开画图面板，绘制完成后点击 **确认**，系统会自动将分子的 SMILES 填入文本框。支持批量绘制并一次性导入。

  <img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4YX69QIRhEraOH4-6PoDfj.png" alt="img" style="zoom:33%;" />

文本框支持输入 **最多 1000 个 SMILES**。

------

##### c. 上传分子库

支持上传 `.csv`、`.txt` 或 `.smi` 文件，可点击 **上传范本下载** 获取示例文件。文件要求：

- 每行一个 SMILES

- 最多 1000 个 SMILES

- 每个分子长度 ≤ 200 个字符

- 文件大小 ≤ 10MB

  <img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4XETKaHjtJwZ1vdrXV4Yx1.png" alt="img" style="zoom:50%;" />

------

##### 设定相互作用约束

您可以指定一个或多个配体与蛋白的相互作用类型。支持 4 种结合模式，格式为 **模式缩写_氨基酸_位置**：

- **Hbond**：氢键（例：`Hbond_CYS_108`）
- **Hydrophobic**：疏水作用（例：`Hydrophobic_ALA_107`）
- **PiPi**：π-π 堆积（例：`PiPi_ALA_107`）
- **PiCation**：π-阳离子作用（例：`PiCation_ALA_107`）

逻辑运算符：

- `&` 与
- `|` 或
- `!` 非

示例：

| 条件表达式                                                   | 解释                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Hbond_CYS_108 \| Hydrophobic_ALA_107                         | 筛选出与蛋白的108号位点上的半胱氨酸形成氢键或者与蛋白的107号位点上的丙氨酸形成疏水相互作用的分子（两个条件满足其中一个） |
| Hbond_CYS_108 & Hydrophobic_ALA_107                          | 筛选出与蛋白的108号位点半胱氨酸形成氢键并且与蛋白的107号位点上的丙氨酸形成疏水相互作用的分子（两个条件同时满足） |
| !Hbond_CYS_108                                               | 筛选出没有与蛋白的108号位点上的半胱氨酸形成氢键的分子        |
| (Hbond_CYS_108\|Hydrophobic_ALA_107)&PiPi_ALA_107            | 首先筛选出蛋白的108号位点上的半胱氨酸形成氢键或者与蛋白的107号位点上的丙氨酸形成疏水相互作用的分子，再在这些分子中选出与蛋白的107号位点上的丙氨酸形成“π系统堆积”的分子 |
| (Hbond_CYS_108\|Hydrophobic_ALA_107)&(PiPi_ALA_107\|PiCation_ALA_107) | 筛选出与蛋白的108号位点半胱氨酸形成氢键并且或者与蛋白的107号位点上的丙氨酸形成疏水相互作用的分子，再在这些分子中选出与蛋白的107号位点上的丙氨酸形成“π系统堆积”或者与蛋白的107号位点上的丙氨酸形成“π-阳离子”相互作用的分子。 |



#### 第四步：输入任务名称（可选）并运行

用户可以选择性填入该预测任务的名称（长度不超过200），并点击『运行』按钮提交任务。

用户还可以通过点击上一步返回第一步和/或第二步查看或更改蛋白信息。但需要注意，第一步的蛋白信息一旦被更改，对应的第二步中已经输入的结合位点信息将会被清空。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7iSap49IVAQ6d_HmU-IllL.png" alt="img" style="zoom:80%;" />

















<a id="95ae390"></a>

### 查看结果

所有的分子会默认按照输入顺序展示。

点击左侧分子图或展开子层级点击任一pose，则3D视窗中会显示对应的分子构象。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%88%86%E5%AD%90%E5%AF%B9%E6%8E%A5%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E4%B8%AD-8e326da2.jpg" style="zoom:50%;" />如果希望在画布上同时查看多个结构，可以悬浮并点击分子/pose前的眼睛图标。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/3d%E8%A7%86%E7%AA%97%20%E7%9C%BC%E7%9D%9B%20%E5%A4%9A%E9%80%89%20%E7%A4%BA%E6%84%8F%20%E5%88%86%E5%AD%90%E5%AF%B9%E6%8E%A5%20%E5%88%86%E5%AD%90%E7%94%9F%E6%88%90-8774e126.jpg" alt="img" style="zoom:100%;" />

点击左侧导航栏的右上角您可以切换显示的指标。经验上来说，小于-6可以认为有一定结合，小于-9是则说明分子结合的比较好，但这阈值仅供参考，请以项目实际为准。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/helixvs%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E5%8F%B3%E4%B8%8A%E8%A7%92%20%E6%8C%87%E6%A0%87%E5%88%87%E6%8D%A2%20%E4%B8%AD%E6%96%87-92169452.jpg" style="zoom:80%;" />















<a id="fef3c3c"></a>

### 数据下载

所有结果都可以通过点击下载按钮进行下载

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7KwXUJ0aZJPakAmZmBwA9y.png)

结果包括：

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7_nbEgve1LIZ-vW97AyaCL.png" alt="img" style="zoom:50%;" />

- 一个分子的所有对接结果会被放到同一个文件夹中，每一个文件夹中包含：
  - 对接口袋的配置文件
  - 分子的结构文件
  - 模型预测出该分子在位点中的所有对接pose的结构文件

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4wSxMOvfVEMKsLh4Qhic5O.png" alt="img" style="zoom:50%;" />

- 靶蛋白预处理过后的结构文件
- .csv格式的分子对接结果表单















<a id="1b70e01"></a>

# HelixVS-Syn













<a id="841314b"></a>

## 背景介绍

该模型能够基于已知的活性骨架，用AI算法设计出崭新的分子。在与合作方针对癌症靶点优化小分子抑制剂的管线中，螺旋桨使用该算法为合作方交付了100个分子。合作方从中挑选出8个分子，最终成功合成出2个。TRIC实验证实，这两个分子的活性分别为0.17μM和 0.047μM，100%存在活性。 
基于骨架的分子生成支持的场景包括： ✓基于DEL数据的hit-2-lead分子优化   ✓基于专利/已知骨架的分子生成   ✓专利分子保护   ✓定制分子库生成   ✓分子生成+实体库搜索方案

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E5%9B%BE%E7%89%87%2012-1a67c06c.png)

<center>使用PaddleHelix算法基于骨架生成的分子</center>

参考文献：[HelixMO: Sample-Efficient Molecular Optimization in Scene-Sensitive Latent Space](https://www.computer.org/csdl/proceedings-article/bibm/2022/09995561/1JC23yWxizC)

体验链接：https://paddlehelix.baidu.com/app/drug/mol-frame/forecast















<a id="12578d0"></a>

## 使用说明













<a id="4f684ec"></a>

### 数据录入

#### 第一步：输入靶蛋白信息

用户可以选择通过『搜结构库』、『上传文档』的方式输入靶蛋白信息，也可以选择『使用示例』使用平台提供的示例靶蛋白。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/494b4c24b23a068f3a493496e16bb93b.png" alt="img" style="zoom:50%;" />

##### a. 搜结构库

PDB（Protein data bank [https://www.rcsb.org](https://www.rcsb.org/)）是一个大型的蛋白质结构数据库，输入4位PDB ID来加载目标蛋白结构。

- 输入PDB ID并从下拉菜单中选择目标蛋白质。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5CtfL2dl1G_bTtnE7AzVwG.png" alt="img" style="zoom:80%;" />

- 点击选中后，可以在下方视窗预览蛋白质的结构。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4RQ36KddhERogVjEOSNVnx.png" alt="img" style="zoom:80%;" />

- 确认蛋白质为目标蛋白质后，点击输入框旁的『预处理』按钮。平台将会自动对选中蛋白进行预处理，以便后续算法可以识别。这一步可能会需要十几秒至几分钟的时间，请耐心等候预处理完成，不要进行页面切换。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA58jzBq1XpIY4XWLjd4C0iT.png" alt="img" style="zoom:80%;" />

- 进度条变成绿色后，表示该蛋白预处理已完成，用户可以进行下一步操作。如果需要更换成其他蛋白，请直接在搜索框中输入新的4位PDB ID，并重复上述操作。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5l3ijvhAxOk5edX5cGr0h_.png" alt="img" style="zoom:80%;" />

##### b. 上传文档

- 输入方式中选择『上传文档』

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6R1EogxwtODrJfUZu4C40o.png" alt="img" style="zoom:80%;" />

- 点击『文件上传』按钮，选择.pdb格式的蛋白质文件。此时会出现上传进度条，蛋白结构可以在下方视窗预览

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6sfiSFOghOiJvnZCGJQl1c.png" alt="img" style="zoom:80%;" />

- 当进度条变成绿色，表示文件上传完成，用户可以进行下一步操作

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA477fl4adBOjJBYrEkRksw7.png" alt="img" style="zoom:80%;" />

- 如果需要上传别的蛋白质文件，请将鼠标移到文件位置，点击右上角图标进行删除后重新上传。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7yPPW4GqJMYp7hI9N7mn3T.png" alt="img" style="zoom:50%;" />



#### 第二步：定义结合位点

用户可以在这一步为第一步中处理好的蛋白定义分子的结合位点，即蛋白口袋。如果第一步中使用了示例蛋白，则可以在这一步直接点击『使用示例』来使用示例位点。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7fAqHmwspMkIxu038d3EHo.png" alt="img" style="zoom:80%;" />

##### a. 预测位点

模型会根据用户提供的蛋白预测出可能的结合位点，以表格的方式呈现。表格共三列，分别为预测名称，口袋打分和操作栏。

- 预测名称 - 用户可以通过点击某一个预测名称来选择感兴趣的口袋位点，被选中的口袋会在左侧3D视窗中以黑色立方体框架的形式展现出来。默认选中口袋打分最高的结果。
- 口袋打分 - 打分越高，对应口袋为蛋白质的真实口袋的概率越高
- 操作 - 点击后可以下载对应的口袋文件。点击底部的『批量下载』按钮可以下载所有的口袋文件。



<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6H_m3B-bdIuawSZbogzQzQ.png" alt="img" style="zoom:50%;" />

##### b. 手动输入

用户可以选择自行定义口袋位点。这需要输入：

- 口袋中心点的X,Y,Z坐标（不可以超出蛋白质的坐标范围）
- 口袋的宽W，高H，长L（范围必须在10-30之间）

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5jukr_QD9AQajgGEQv_-tb.png" alt="img" style="zoom:50%;" />

完成输入后，点击『显示口袋』按钮，则可以在左侧3D视窗中预览口袋位置。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7ALVIkLTlNFLf3roGpfhw5.png" alt="img" style="zoom:50%;" />

注意：每一次更改坐标或口袋大小后必须再次点击『显示口袋』按钮，数据才能够被记录。

如果用户在第二步输入了第二个蛋白信息，则可以继续为其定义结合位点，方法相同。



#### 第三步：定义骨架和生长位点

用户可以在这一步定义需要优化的骨架和骨架上的片段生长位点。

请在文本框中输入骨架的SMILES或使用绘图工具进行绘制

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E9%AA%A8%E6%9E%B6%E5%88%86%E5%AD%90%E7%94%9F%E6%88%90%20%E9%AA%A8%E6%9E%B6%20-80e981a1.jpg" style="zoom:30%;" />

骨架的结构和每个节点的编号将会自动展示在文本框下。用户可以在下方『指定骨架上的片段生长位点』的输入框中输入编号（1个或多个）来指定骨架上的片段生长位点。完成输入后，选中的位点会高亮在骨架上。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E9%AA%A8%E6%9E%B6%E5%88%86%E5%AD%90%E7%94%9F%E6%88%90%20%E9%AB%98%E4%BA%AE%20%E4%B8%AD%E6%96%87-e473eca6.jpg" style="zoom:50%;" />



#### 第四步：输入任务名称（可选）并运行

用户可以选择性填入该预测任务的名称（长度不超过200），并点击『运行』按钮提交任务。

用户还可以通过点击上一步返回第一步（和第二步）查看或更改蛋白信息。但需要注意，蛋白信息一旦被更改，对应的已经输入的结合位点信息将会被清空。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7iSap49IVAQ6d_HmU-IllL.png" alt="img" style="zoom:80%;" />

















<a id="1b2a77d"></a>

### 查看结果

用户输入的蛋白，输入的骨架和定义好的生长位点等信息会显示在结果页的顶部。

用户可以通过右上角切换卡片视图或3D结构视图，或更改结果的排序。

![](https://bml-test-test.bj.bcebos.com/helix_upload/%E5%88%86%E5%AD%90%E7%94%9F%E6%88%90%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E6%8E%92%E5%BA%8F%20%E5%B1%95%E7%A4%BA%20%E4%B8%AD-bbb0e07c.jpg)

##### 卡片视图

每一个卡片会显示该分子的四个属性：

- 活性打分（Active score）：活性打分越高，药物与蛋白之间的亲和力越高。
- 可成药性(QED, Quantitative Estimation of Drug-likeness): 结果为0-1的实数，数值越高，代表该化合物越有称为候选药物的潜质。
- 易合成度(SA, Synthetics Accessibility Score): 易合成度的打分基于该化合物各片段的复杂程度。其结果是1-10的实数，数字越大，则代表该化合物越难合成，一般来说希望这个数值越小越好。
- ClogP (脂水分配系数（对数）, Lipid-water partition coefficient): 化合物在正辛醇（octanol）和水中达到平衡时的活度（近似取浓度）比值的对数（以10为底）。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7g2e3JYWBLJZFfGb7nmDK8.png" alt="img" style="zoom:50%;" />

点击一个卡片，则会进一步显示该分子的：

- SMILES分子式
- 分子量 （Molecular Weight, g/mol）
- 天然产物相似度(NP，Natural Product-likeness Score): 用于评估一个化合物和天然产物在结构上有多相似。结果为-5 - 5的实数，数值越高，则代表该化合物越大概率是一个天然产物；反之，数值越小，则该化合物更大概率为人工合成的。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA50DOM4hEVFbZWGp0RWE9ez.png" alt="img" style="zoom:80%;" />



##### 3D结构视图

点击左侧分子图或展开子层级点击任一pose，则3D视窗中会显示对应的分子构象。分子后面默认展示活性打分A，用户可以通过点击表头的下拉按钮来切换展示的结果。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%88%86%E5%AD%90%E7%94%9F%E6%88%90%20%E7%BB%93%E6%9E%9C%E9%A1%B5%203d%20%E4%B8%AD-57003b63.jpg" style="zoom:50%;" />如果希望在画布上同时查看多个结构，可以悬浮并点击分子/pose前的眼睛图标。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/3d%E8%A7%86%E7%AA%97%20%E7%9C%BC%E7%9D%9B%20%E5%A4%9A%E9%80%89%20%E7%A4%BA%E6%84%8F%20%E5%88%86%E5%AD%90%E5%AF%B9%E6%8E%A5%20%E5%88%86%E5%AD%90%E7%94%9F%E6%88%90-8774e126.jpg" alt="img" style="zoom:100%;" />

















<a id="d47ad05"></a>

### 数据下载

所有结果都可以通过点击下载按钮进行下载。

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7KwXUJ0aZJPakAmZmBwA9y.png)

结果包括：

- 第一个蛋白的口袋坐标及大小配置文件
- 第二个蛋白的口袋坐标及大小配置文件（如有）
- .csv格式的分子生成结果表单
- .pdf格式的分子生成文档

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7uc-gdTXlLrZvpZLh3bqDO.png" alt="img" style="zoom:50%;" />















<a id="92c23b9"></a>

# MMGBSA















<a id="da2924a"></a>

## 背景介绍

MMGBSA（Molecular Mechanics Generalized Born Surface Area）方法结合了分子力学力场（Molecular Mechanics）和溶剂可及表面积（Solvent Accessible Surface Area，SASA）的广义波恩模型（Generalized Born model）。MMGBSA方法相比于分子对接的打分函数，额外考虑了分子在水中的溶剂效应，研究生物分子的溶液相互作用，因此MMGBSA方法能够更加准确的计算蛋白质-小分子的绝对结合自由能。

体验链接：https://paddlehelix.baidu.com/app/drug/MMGBSA/forecast















<a id="af2a877"></a>

## 使用说明













<a id="e9ea935"></a>

### 数据录入

#### 上传对接构象

本模块需要用户事先做好蛋白与分子之间的对接并上传对接好的构象文件。如果您还没有进行对接，可以移步至[HelixDock](https://paddlehelix.baidu.com/app/drug/helix-dock/forecast)或[Vina](https://paddlehelix.baidu.com/app/drug/virtual-filter/forecast)模块。

用户需要分别上传：

- 一个符合.pdb白质文件和
- 一个符合.pdb/.mol2/.sdf/.pdbqt格式的配体构象文件；如果要上传多个配体构象文件(不超过20个)，请打包为.zip后再上传

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/mmgbsa%20%E8%BE%93%E5%85%A5%E9%A1%B5%E4%B8%8A%E4%BC%A0%20%E4%B8%AD%E6%96%87-eb0e72b6.jpg" style="zoom:50%;" />



用户可以选择是否要指定参考小分子。如果指定了参考小分子，则MMGBSA会计算所有其他小分子相对该参考小分子的能量变化。



#### 配置计算参数

您可以选择设置以下几个计算参数：

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/mmgbsa%E8%BE%93%E5%85%A5%E9%A1%B5%20%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE%20%E4%B8%AD%E6%96%87-a43752ac.jpg" style="zoom:50%;" />

- GB模型:

  GB模型指的是Generalized Born，即广义Born模型。我们在这里提供了5种不同的GB模型，我们在这里列出其对应的参考文献：

  1. The pairwise GB model (GB-HCT): https://pubs.acs.org/doi/10.1021/jp961710n
  2. GB-OBC1: Modified GB model 1 developed by https://onlinelibrary.wiley.com/doi/10.1002/prot.20033
  3. GB-OBC2: Modified GB model 2 developed by https://onlinelibrary.wiley.com/doi/10.1002/prot.20033
  4. GB-NeckGBn model described by https://pubs.acs.org/doi/10.1021/ct600085e
  5. GB-Neck2：Same GB functional form as the GBn model (igb=7), but with different parameters. Developed by https://pubs.acs.org/doi/10.1021/acs.jctc.5b00271

- 模拟长度:

  分子动力学模拟的轨迹长度

- 介电常数ε：

  用于计算MMGBSA的内部介电常数















<a id="bb2c7b6"></a>

### 查看结果

用户可以在结果页最上方确认输入的文件及参数信息

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/mmgbsa%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E9%A1%B6%E9%83%A8%20%E4%B8%AD%E6%96%87-7bcd2491.jpg" style="zoom:50%;" />



所有的预测结果以表格形式展示，包括『分子文件名』，『分子图』，『ΔG(kcal/mol)』，和『ΔΔG(kcal/mol)』(仅当指定参考小分子时有)。

如果您设置了参考小分子，该分子只会有ΔG(kcal/mol)的结果，会单独显示在表格上方。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/mmgbsa%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E8%A1%A8%E6%A0%BC%20%E4%B8%AD%E6%96%87-35775771.jpg" style="zoom:50%;" />















<a id="3bfa223"></a>

### 数据下载

所有结果都可以通过点击下载按钮进行下载，结果为.csv格式的表单。每一行都对应一个分子。



















<a id="afb4c9d"></a>

# 【mRNA药物研发】















<a id="7c0046a"></a>

# LinearDesign















<a id="f79fcb7"></a>

## 背景介绍

根据给定的蛋白质序列，LinearDesign可以更快地设计出蛋白质表达水平更高、更稳定的mRNA序列。

mRNA疫苗的研发是一项耗时耗力的世界性难题，其重点在于设计出最稳定，蛋白质表达水平最高的mRNA序列。蛋白质是由多个氨基酸（共21种）串联而成的，每一个氨基酸则是由三个核苷酸（A、U、C、G）组成的一个密码子翻译而成的。mRNA就是一个由多个核苷酸串联而成的序列。然而，由于同一个氨基酸可以对应多个密码子，一个蛋白质所对应的mRNA序列就有多种可能。随着序列长度增加，编码同一蛋白质序列的mRNA序列数量指数级增长，大大增加了设计难度。

mRNA的稳定性和翻译效率与其序列组成具有密切联系。 LinearDesign综合运用了反映序列稳定性的自由能指标(MFE)和反映序列翻译效率的密码子频率指标(CAI)，并支持对两类指标的相对权重进行动态调整，以满足不同项目中对稳定性和翻译效率的特定设计需求。此外，LinearDesign还引入了一系列参数来调控mRNA免疫原性，与核糖体的结合以及排除序列内的限制性内切酶识别位点。在最新的版本中，我们还支持根据用户指定的5'UTR或3'UTR序列来进行CDS设计。实验证明，LinearDesign设计的序列能够在真实环境中有效发挥作用，可用于mRNA疫苗设计和蛋白补充/替代疗法。该工作发表于Nature2023年5月刊。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/lineardesign-4bc321c0.jpg" style="zoom:50%;" />

<center>LinearDesign能够在设计时同时考虑序列稳定性与蛋白翻译效率</center>

文献：[LinearDesign: Efficient Algorithms for Optimized mRNA Sequence Design](https://www.nature.com/articles/s41586-023-06127-z)

体验链接: https://paddlehelix.baidu.com/app/vaccine/linear-design/forecast

















<a id="e862454"></a>

## 使用说明













<a id="236633e"></a>

### 版本说明

目前mRNA序列设计（LinearDesign）有Basic, Plus和Advance三个版本。三个版本的主要区别如下表所示。

|                    |          Basic          |           Plus            |                 Advance                 |
| ------------------ | :---------------------: | :-----------------------: | :-------------------------------------: |
| 支持的序列长度     | 蛋白序列500/RNA序列1500 |  蛋白序列500/RNA序列1500  |        蛋白序列2000/RNA序列6000         |
| Beam size          |         50-100          | >=50的正整数或“infinity”  | >=50的正整数或“infinity”，支持输入多个  |
| 平衡因子λ          |            -            | 0、>=50的正数或“infinity” | 0、>=50的正数或“infinity”，支持输入多个 |
| 茎环结构限制       |            -            |           是/否           |    支持自定义S1和和S2的数值，正整数     |
| 减少5'端leader区域 |            -            |           是/否           |          支持自定义数字，0-30           |
| 指定UTR序列        |            -            |             -             |            支持3'UTR和5'UTR             |
| 指定密码子表       |            -            |             -             |           支持自定义密码子表            |
| 排除核酸内切酶位点 |            -            |             -             |   支持输入一或多个需要排除的酶切位点    |

三个版本的收费方式不同，具体请查看价格与免费策略。















<a id="e7adeab"></a>

### 数据录入

用户可以首先选择想要使用的版本。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/mrna%E5%BA%8F%E5%88%97%E8%AE%BE%E8%AE%A1%E8%BE%93%E5%85%A5%E9%A1%B5%20%E7%89%88%E6%9C%AC%20%E4%B8%AD%E6%96%87%20-242029ef.jpg" style="zoom:50%;" />

#### 第一步 - 输入序列 

用户可以选择输入一条满足FASTA格式的蛋白序列或是mRNA序列。mRNA序列的长度必须为3的倍数，且以AUG开头。

##### a. 文本框输入

用户可以直接从文本框输入序列。如：

##### ![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4aBvkpmbFLo6t_j8Ad-2vE.png)b. 上传文档

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7x5dJQBAlFeq0hxUH4vU9E.png" alt="img" style="zoom:50%;" />

用户可以点击『上传范本下载』来查看我们提供的示例文件。

上传的文档格式应为.txt

- 文档中包含一条符合FASTA格式的蛋白质/mRNA序列



#### 第二步 - 配置参数

##### Beam size

LinearDesign提供了一种基于束剪枝（beam pruning）的计算加速技术，而beam size决定了每一步优化中保留的计算路径的数量。通过调整beam size可以对计算过程加速以及获取更加多样化的设计结果。beam size的取值范围为>=50的正整数及正无穷（infinite）。当beam size = infinite时，计算过程将不做剪枝操作，从而可以获得基于设计指标的全局最佳结果。在序列很长以及对计算时间有要求的情况下，减小beam size，可以显著缩短计算时间。此外，束剪枝可以帮助发现优化指标上的『近似最优解』。需要注意的是，由于疫苗和药物的效能受到多种复杂条件和多种因素的影响，此处的近似最优解有可能在湿实验的表现上超过全局最优解。因此，束剪枝有助于增加设计序列的多样性，并最终增加找到更优序列的可能性。

参数的具体设置思路参见下方的FAQ。

##### 平衡因子λ

λ参数用于平衡MFE和CAI两种优化目标的相对比重，其中MFE可反映RNA结构稳定性，CAI则与mRNA的翻译效率密切相关。lambda取值可选0、正数和“infinity”。当取值为0时，将以MFE作为唯一优化指标；随着取值增大，CAI在设计中的权重递增。

参数的具体设置思路参见下方的FAQ。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/infoflow%202022-12-20%2018-02-29-b79b62db.png" alt="img" style="zoom:25%;" />

##### 茎环结构限制

这个参数能够限制连续配对碱基数量，降低免疫原性。高级版本能够自定义：

- S1: 连续的或由bulge或internalloop连接的最大双链⻓度 (建议设为33 nt)
- S2:连续的或由单边⻓度不超过1的bulge或internalloop连接的最大双链⻓度 (建议设为15nt)

参见下图

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/infoflow%202022-12-20%2018-10-25-be4a85c4.png" alt="img" style="zoom:25%;" />

参数的具体设置思路参见下方的FAQ。

##### 减少5‘端leader区域结构

该参数够提升翻译效率，高级版本可以自定义5‘端leader区域的长度。参数的具体设置思路参见下方的FAQ。

##### 指定5‘/3’UTR

如果您有希望指定的5'或3'UTR序列，并希望模型根据UTR来进行CDS序列设计，高级版本支持勾选本选项并在展开的区域内输入您的5'或3’UTR序列。您可以选择从文本框输入，也可以选择上传一个.txt的文件。

##### 排除核酸内切酶识别位点

高级版本支持用户输入想要排除的核酸内切酶识别位点，您可以通过输入内切酶名称来搜索对应的位点，也可以在下方文本框内直接输入序列后点击回车确认。 

##### 密码子表

默认使用人的密码子表，高级版本支持用户上传自定义密码表















<a id="d6b9023"></a>

### 查看结果

#### CAI/MFE散点图及多序列展示(仅设计多条序列时有)

如果用户一次设计了多条序列，则可以在CAI/MFE散点图上看到所有设计结果的CAI和MFE分布。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/lineardesign%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20advance%20%E6%80%BB%E7%BB%93%20%E4%B8%AD%E6%96%87-b6ed6f5e-8f9e14ce.jpeg" style="zoom:50%;" />



散点图下方则是设计的详情。用户可以通过点击左边栏中的序列名称来查看不同的设计结果。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/lineardesign%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20advance%20%E5%B7%A6%E8%BE%B9%E6%A0%8F%20%E4%B8%AD%E6%96%87-9bf23cc6-6eca987c.jpeg" style="zoom:50%;" />

用户还可以点击表头来切换展示MFE或CAI

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/lineardesign%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20advance%20%E5%B7%A6%E8%BE%B9%E6%A0%8F%20%E8%A1%A8%E5%A4%B4%20%E4%B8%AD%E6%96%87-ba5ea428-2d3245b9.jpeg" style="zoom:50%;" />



#### 二级结构成对视觉图（Pairwise visual diagram）

这是可互动的二级结构展示图。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4rCkNiQeRM75TZ_7fIFBje.png" alt="img" style="zoom:50%;" />

蓝色的线连接的两个碱基为配对的碱基，鼠标浮动到上面会显示这条线所连的碱基的属性。如下图表示位于173的G与位于249的C配对，两个碱基之间的距离为76。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7aP97nb-VEL6KbUolCilpA.png" alt="img" style="zoom:50%;" />



#### 二级结构图

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/infoflow%202022-12-20%2018-14-50-f5d0a1c8.png" alt="img" style="zoom:50%;" />

#### mRNA序列对照表

该表对比展示用户输入的蛋白质序列、预测的mRNA序列和该序列的二级结构点括号表示图（Dot-Parenthesis Notation）

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7PBUg9_FZHpYyZyheFIaEn.png)

- 左侧的数字代表该行第一个字符在序列中的位置，右侧的数字代表该行最后一个字符在序列中的位置。
- 第一行为蛋白质序列，每一个字母表示一个氨基酸
- 第二行为核酸序列，每一个字符表示一个碱基
- 第三行为点和括号表示的二级结构序列，每个字符对应的含义如下：

. ：无配对 (unpaired)

( ：与后面的碱基配对

) ： 与前面的碱基配对

- 点击右侧的『复制序列』可以直接将第二行mRNA序列复制到剪贴板中。

















<a id="db6196d"></a>

### 数据下载

所有结果都可以通过点击互动图下方的下载按钮进行下载

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7KwXUJ0aZJPakAmZmBwA9y.png)

结果为.txt格式的文档。

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA70D3lBeWpLiKl7F8p4TuCU.png)















<a id="1bc772c"></a>

## 常见问题

1. LinearDesign的计费单位是什么？

   计费的单位是生成序列的数量，而不是输入序列的数量。

   在Advance版本中，用户可以通过设置多个beam size或者lambda来针对同一条input序列生成多条优化后的output序列。
   举例：如果我们输入1条input序列，在beam size处设置了50和100，在lambda处设置了4和10，那么实际上模型会根据这条input序列采用以下4种参数组合来设计4条不同的序列：

   - beam size=50, lambda=4

   - beam size=50, lambda=10

   - beam size=100, lambda=4

   - beam size=100, lambda=10

     这种情况下，我们会收取4条序列的费用，而不是1条序列的费用。

2. 如何选取适当的平衡因子lambda？

   lambda的选择应视具体场景的需求而定。当需要设计结构尽量稳定的mRNA时，应选择较小的lambda，从而给予MFE更大的优化权重，建议首先考虑0~2区间内的数值；当需要尽量提升mRNA的瞬时翻译效率时，应选择较大的lambda来增大CAI的优化权重，建议首先考虑4及以上的数值；当需要mRNA具有较稳定的结构，同时又具有较高的翻译效率时，应选择相对折中的lambda，以使MFE和CAI取得较好的平衡。

   由于需求类型以及氨基酸序列的多样性，在进行湿实验之前，很难确定何种lambda是最佳选择。因此，建议首先选择数个不同区间内的lambda，获取分布在MFE-CAI二维平面内不同区域的mRNA序列。在对设计的序列进行一轮湿实验验证后，可以确定那个区域内的mRNA序列最符合设计目标。然后，通过对当前最佳序列所对应的lambda进行微调，以及同时结合beam size的变化，可以获取该区域内的更多序列。对这些序列进行实验验证，将很可能发现实验表现更佳的样本。

   

3. 如何选取适当的beam size?

   在选择beam size时需要考虑设计序列的特点，尤其是序列长度。对于长度为N的RNA序列，选择beam size ≥ N与选择beam size = infinite在效果上是等同的，为了避免无意义的重复计算，应避免在参数组合中同时选择这两种情况。如果需要引入束剪枝来提升序列的多样性，应使beam size充分小于N（通常应相差数百乃至更多），否则将可能使设计的结果与全局最优解无差异或差异过小。当然，beam size也不宜过小，否则会因剪枝力度过大而导致序列在设计指标上表现欠佳。

   

4. 设计序列的相似性与参数选择之间有怎样的关联？

   对于尝试不同参数组合的情况，所获得序列之间的相似性与参数的选择方式具有密切联系。其联系可以归纳为以下几点：

   - 参数越接近，设计的结果越接近。
   - 当两组参数中的lambda均较大，而其他参数又比较接近的情况下，设计的结果会比较接近。例如，lambda=20与lambda=100虽然相差较大，但是二者均处于lambda较大的区间，其CAI指标一般都会比较接近1（最高值），从而使序列之间的差异性较低。
   - 当两组参数之一的beam size为infinite，而另一组参数的beam size ≥ N或与N的差值较小时（N为RNA的长度），其设计结果倾向于比较接近。

   当需要设计结果之间具有充分的差异性时，应对上述情况予以避免。需要注意的是，序列接近的RNA在湿实验的表现上也可能存在明显的差异，因此参数的选择需要根据具体情况及需求而定。















<a id="25693ec"></a>

## 模型变更记录

- 2025.07.02 调整beam size校验范围，RNA输入容错优化。

- 2024.08.07 15:31 增加针对重复序列和回文序列的处理流程

- 2024.06.20 18:18 设计中减少使用密码子UUU，以降低m1Ψ化学修饰引发的翻译错误风险。

- 2024.04.01 19:00 上线指定UTR的功能，支持用户根据指定的UTR进行CDS设计。
- 2021.5.18 第一次上线

















<a id="599d6ac"></a>

# HelixUTRDesign















<a id="4335044"></a>

## 背景介绍

HelixUTRDesign模型能够根据用户输入的CDS序列，生成指定长度的5’UTR序列。
5' UTR（5' untranslated region）序列位于mRNA的起始区域，虽然在转录过程中不被翻译成蛋白质，但它包含了许多重要的调控元件，如核糖体结合位点、启动子等。这些元素能够影响翻译效率、调控蛋白水平，并在特定时机和组织中发挥特异性功能。因此，精确设计和优化5' UTR序列对于实现对蛋白表达的精准调控具有重要意义，为基因工程和生物医学研究提供了更多的可能性和应用前景。螺旋桨的5' UTR设计模型不仅考虑了5' UTR自身序列对翻译启动的影响，还兼顾了该区域序列与CDS序列配对后对翻译效率产生的影响。借助深度学习模型能力，结合mRNA领域知识，螺旋桨能够精确预测核糖体载量，且结果具有优秀的鲁棒性。

体验地址: https://paddlehelix.baidu.com/app/vaccine/5utr/forecast

















<a id="cce6c56"></a>

## 使用说明















<a id="67b932f"></a>

### 数据录入页面

#### 第一步 - 输入序列 

a. 文本框输入

用户可以直接从文本框输入一个符合FASTA格式的CDS序列。如：

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/5%E2%80%99utr%20%E8%BE%93%E5%85%A5%E9%A1%B5%20%E8%BE%93%E5%85%A5%E5%BA%8F%E5%88%97%20%E4%B8%AD%E6%96%87-71c4863b.jpg" style="zoom:50%;" />



b. 上传文档

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7x5dJQBAlFeq0hxUH4vU9E.png" alt="img" style="zoom:50%;" />

用户可以点击『上传范本下载』来查看我们提供的示例文件。

上传的文档格式应为.txt

- 文档中包含一条符合FASTA格式的RNA序列



#### 第二步 - 配置参数

##### UTR长度

请输入您期望的UTR长度，长度需要>10且不超过200，默认值为50。在长度超过100的情况下，模型预测的核糖体载量均值 MRL可能会不准确。

![](https://bml-test-test.bj.bcebos.com/helix_upload/5%E2%80%98utr%20%E9%95%BF%E5%BA%A6%20%E4%B8%AD%E6%96%87-e56cb428-46397c32.jpeg)

##### 输入参考5'UTR

如果您有一条参考的5'UTR序列，并希望模型设计与此序列相似的结果，您可以勾选本选项并在展开的区域内输入您的5'UTR参考序列。您可以选择从文本框输入，也可以选择上传一个.txt的文件。

请注意：如果您上传的参考5‘UTR序列长度与您设置的UTR长度不一致，模型将以您设置的UTR长度为准。

![](https://bml-test-test.bj.bcebos.com/helix_upload/5%27utr%20%E8%BE%93%E5%85%A5%E9%A1%B5%20%E5%8F%82%E8%80%83%20%E4%B8%AD%E6%96%87-20332979-d1127fe7.jpeg)















<a id="ac96df1"></a>

### 结果页展示

结果表格中将展示模型设计的序列与参考序列（如有）及其对应的参数。从左至右这些参数分别为：

- 序列编号
- 预测核糖体载量均值：核糖体载量是指在蛋白质合成过程中，参与翻译的核糖体的数量或密度。它的高低直接影响蛋白质的合成速度和丰度。核糖体载量均值（MRL）则是一个衡量与给定RNA相关的核糖体平均数量的指标，也是翻译效率的代理指标。MRL越高，翻译效率越佳。
- 5’UTR配对数量：不同类型配对的数量
- 相似性（仅在有参考序列的情况下展示）：生成序列与参考序列之间的相似性
- GC含量（%）
- 序列：在有参考5‘UTR的情况下，与参考序列不同的核苷酸会被高亮。

![](https://bml-test-test.bj.bcebos.com/helix_upload/5%27utr%20%E7%BB%93%E6%9E%9C%E9%A1%B5%20%E4%B8%AD%E6%96%87-ae15e096-0a254780.jpeg)

您可以通过选中不同结果前方的单选框在表格下方查看该5’UTR及其CDS形成的二级结构。















<a id="5991423"></a>

### 数据下载

所有结果都可以通过点击下载按钮进行下载

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7KwXUJ0aZJPakAmZmBwA9y.png)















<a id="1783f8a"></a>

## 模型变更记录

- 2024.06.20 20:27 【V1.1版本】MRL预测中融入领域知识，提升鲁棒性。

- 2023.7.17 【V1.0版本】第一次上线

















<a id="265a850"></a>

# LinearFold















<a id="b525822"></a>

## 背景介绍

LinearFold是第一个能够根据输入的RNA 序列在线性时间内准确预测其二级结构的算法。它可处理的RNA序列长度上限（10万nt）是目前所有网页服务器中最高的。

RNA是生物体内的多种进程的参与者。由于他们的功能往往与其结构息息相关，对RNA结构的描画也就成了生物研究中重要的一环。相较常规的RNA结构测量技术，如X射线结晶（X-Ray Crystallography）和核磁共振（NMR），通过算法进行RNA二级结构预测可以节省大量研究经费和时间成本。然而，传统算法的预测时间随着序列长度的增加成三次方增长。也就是说，如果序列长度翻一倍的话，就要付出 8 倍的计算时间。LinearFold运用了近似算法（Approximate algorithm）, 结合创新的5’->3’动态规划（DP, Dynamic Programming）和集束搜索（beam search），只需要耗费线性的时间和储存空间就可以预测RNA的折叠结构，对系统的要求更低，且运算更快。

LinearFold的预测结果展现出更高的准确度，覆盖率和灵敏度。特别是针对传统算法中的两大难题：长序列RNA家族(16S和23S rRNA) 的二级结构预测与长距离（500+nt）碱基配对的预测，LinearFold都展示更接近真实结果的出色表现。 

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/linearfold-385f2e57.png" style="zoom:50%;" />

<center>LinearFold的二级结构预测只需要线性时间</center>

文献：[LinearFold: linear-time approximate RNA folding by 5'-to-3'](http://academic.oup.com/bioinformatics/article/35/14/i295/5529205)

体验链接：https://paddlehelix.baidu.com/app/vaccine/linear-fold/forecast















<a id="6926649"></a>

## 使用说明















<a id="4ec66ed"></a>

### 数据录入

#### 第一步 - 输入序列 

a. 文本框输入

用户可以直接从文本框输入一个符合FASTA格式的RNA序列。如：

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6GCpV_KPJIDK29yR-lPqZA.png)

b. 上传文档

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7x5dJQBAlFeq0hxUH4vU9E.png" alt="img" style="zoom:50%;" />

用户可以点击『上传范本下载』来查看我们提供的示例文件。

上传的文档格式应为.txt

- 文档中包含一条符合FASTA格式的RNA序列



#### 第二步 - 配置参数

用户可以根据实际情况对以下三个参数进行选择：

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4Nk8Lz7p5FUbBkSEOoPd9d.png)

##### Beam Size

这个数值可以控制集束剪枝(beam pruning)的大小，默认值为100。在大多数情况下，该参数越大，则预测速度越慢，但与精确搜索的结果越接近。

##### 结构约束(Constraints)：

如果用户已知部分的碱基配对情况，可以通过选择此选项来增加结构约束。

一行与已输入序列长度一致的字符会被加到序列的末尾，修改这些字符来对预测结果进行结构限制。

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7S73c-M9xEsJd6jc6L2Kmo.png)

每个字符对应的含义如下：

- ?：未知(unknown)

- . ：无配对 (unpaired)

- ( ：与后面的碱基配对

- ) ： 与前面的碱基配对



##### 次优结构预测(Zuker Suboptimal Structures)

如果该选项被选中，则提供次优的二级结构方案，该结构的自由能与最低自由能结构（lowest free energy structure）的自由能相近。调整的能量差越小，则次优极与最低自由能结构的自由能差越接近。



注：结构约束和次优结构预测中只能选择一个，再次点击选项可以取消选择状态。

















<a id="d68eac1"></a>

### 查看结果

#### 二级结构成对视觉图（Pairwise visual diagram）

这是可互动的二级结构展示图，左右分别展示用机器学习模型（Machine-Learned Model）和用动力学模型（Thermodynamic Model）预测的二级结构结果。

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA5cQK4QAYJB4KKmiFQIzigW.png)



蓝色的线连接的两个碱基为配对的碱基，鼠标浮动到上面会显示这条线所连的碱基的属性。如下图表示位于93的G与位于263的C配对，两个碱基之间的距离为170。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7hOsNuaSNOMbOZfhcLYtgn.png" alt="img" style="zoom:50%;" />



#### 二级结构点括号表视图（Dot-Parenthesis Notation）

用点和括号的方式表示二级结构预测结果

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4tJkJyQnxE-J13_KWhKKSu.png)

每个字符对应的含义如下：

- . ：无配对 (unpaired)

- ( ：与后面的碱基配对

- ) ： 与前面的碱基配对

















<a id="5c168e9"></a>

### 数据下载

所有结果都可以通过点击互动图下方的下载按钮进行下载

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7KwXUJ0aZJPakAmZmBwA9y.png)

结果为.txt格式的文档。

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4XtBd9ip5Hm46JrcVull3f.png)



















<a id="00b2b6f"></a>

# LinearPartition















<a id="2d5e907"></a>

## 背景介绍

LinearPartition是世界上最快的RNA配分方程（Partition function）和碱基对概率（base paring probability）预测算法。作为LinearFold的进阶，LinearPartition不但继承了前者展示出的线性预测时间和更佳的准确率、覆盖率、灵敏度的优良表现，还能够模拟RNA序列在平衡态时成千上万种不同结构的分布。

RNA是生物体内的多种进程的参与者。由于他们的功能往往与其结构息息相关，对RNA结构的描画也就成了生物研究中重要的一环。相较常规的RNA结构测量技术，如X射线结晶（X-Ray Crystallography）和核磁共振（NMR），通过算法进行RNA二级结构预测可以节省大量研究经费和时间成本。然而，传统算法的预测时间随着序列长度的增加成三次方增长。也就是说，如果序列长度翻一倍的话，就要付出 8 倍的计算时间。通过集束修剪（beam pruning），LinearPartition弥补了其他配分方程在预测长序列时耗时巨长的不足。指数倍地提高预测速度地同时，提供更准确的碱基配对结果和下游结构。在预测长距离碱基配对时表现得尤为突出。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/linearpartition-c989ac5b.png" style="zoom:50%;" />

<center>LinearPartition的二级结构预测只需要线性时间</center>

文献：[LinearPartition: Linear-Time Approximation of RNA Folding Partition Function and Base Pairing Probabilities](https://academic.oup.com/bioinformatics/article/36/Supplement_1/i258/5870487?login=true)

体验链接：https://paddlehelix.baidu.com/app/vaccine/linear-partition/forecast















<a id="8ea122f"></a>

## 使用说明















<a id="bf389ac"></a>

### 数据录入

#### 输入序列 

##### a. 文本框输入

用户可以直接从文本框输入一个符合FASTA格式的RNA序列。如：

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6GCpV_KPJIDK29yR-lPqZA.png)

##### b. 上传文档

用户可以点击『上传范本下载』来查看我们提供的示例文件。

上传的文档格式应为.txt

- 文档中包含一条符合FASTA格式的RNA序列

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6vrtVs1kREX5oOn4e76SBj.png)

















<a id="e67d450"></a>

### 查看结果

#### 二级结构成对视觉图（Pairwise visual diagram）

这是可互动的二级结构展示图，左右分别展示用机器学习模型（Machine-Learned Model）和用动力学模型（Thermodynamic Model）预测的二级结构结果。

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA6vfx9es5dJTq_MtyAsYxIF.png)



蓝色的线连接的两个碱基为配对的碱基，颜色越深，则对该配对的置信度越高。鼠标浮动到一条线上时会显示这条线所连的碱基的位置和该配对的置信度。如下图表示位于547的碱基与位于1350的碱基配对，置信度为1。

<img src="https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA4qop_R48VNtbRIveBwDviG.png" alt="img" style="zoom:50%;" />

















<a id="0e23295"></a>

### 数据下载

所有结果都可以通过点击互动图下方的下载按钮进行下载

![img](https://easydl-download.bj.bcebos.com/helix_doc/AgAACoBIFA7KwXUJ0aZJPakAmZmBwA9y.png)

结果为.txt格式的文档。









<a id="fe0b6fb"></a>

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



















<a id="54b5923"></a>

# 账号权限及定价













<a id="58ed513"></a>

# 账号等级与身份说明

为了提供更灵活的服务，螺旋桨平台对账号体系进行了升级。平台账号等级分为**基础版**和**高级版**（原商业账号），同时针对科研群体推出了**学术身份认证**，让大家能够在指定模块下享受更多优惠。



<a id="50b8c2a"></a>

## 1. 账号等级与权限

| **账号等级** | **获取方式**                         | **权限说明**                                     | **支付方式**                                                 |
| ------------ | ------------------------------------ | ------------------------------------------------ | ------------------------------------------------------------ |
| **基础版**   | 注册账号并登录即可获得               | **基础功能**：✅ 可用<br/> **高级功能**：🚫 不可用 | **仅支持使用点券抵扣**。 若点券不足，无法提交任务。          |
| **高级版**   | 完成实名认证并开通CHPC服务后自动升级 | **基础功能**：✅ 可用<br/> **高级功能**：✅ 可用   | **支持混合支付**。 对于已[接入计费的模块](https://paddlehelix.baidu.com/app/tut/platform/price/bill#053f135)，点券不足部分自动使用百度云余额支付。 |



<a id="04a023e"></a>

### 基础功能与高级功能对照表

| **模块名称**     | **基础功能（基础版可用）** | **高级功能（需升级高级版）** |
| ---------------- | -------------------------- | ---------------------------- |
| **HelixFold3**   | 网页端预测                 | API/SDK调用                  |
| **LinearDesign** | Basic版本                  | Plus版本、Advance版本        |
| **小蛋白设计**   | -                          | 全部功能                     |
| **抗体设计**     | -                          | 全部功能                     |
| **其他模块**     | 全部功能                   | -                            |

> **注**：如需使用高级功能，请前往[免费升级为高级版](#88e12ae)。



<a id="88e12ae"></a>

## 2. 升级高级版

您可以直接前往个人的[[账号信息](https://paddlehelix.baidu.com/app/user/account/info)]页面查看升级指引。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%85%8D%E8%B4%B9%E5%8D%87%E7%BA%A7%E6%8C%87%E5%BC%95%20%E4%B8%AD%E6%96%87-dbf1f22d.jpg" style="zoom:50%;" />

或者按照以下步骤进行手动操作：

1. **实名认证**： 如果您的账号还没有完成实名认证，请先[完成实名认证](https://console.bce.baidu.com/iam/#/iam/baseinfo)。
   - 您可以选择个人认证或企业认证。
   - *提示：二者后期均可开发票，但个人认证无法开具增值税专用发票，请确认报销规范后按需选择。*

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E6%88%AA%E5%B1%8F2025-02-25%2010-93901e05.png" alt="miaoshu" style="zoom:26%;" />

2. 开通服务：前往[开通页](https://console.bce.baidu.com/chpc/#/landing)，勾选并开通 **CHPC 服务**。
   **重要提示**：点击“立即开通”后，页面可能会提示“开通成功”并自动跳转至“创建集群”页面。**此时无需进行任何操作**，请直接关闭该页面并返回螺旋桨站点即可。

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%BC%80%E9%80%9Achpc%20%E4%B8%AD%E6%96%87-c21a5078.jpg" style="zoom:30%;" />



<a id="f91eabe"></a>

## 3. 学术身份认证

为了支持科研工作，我们为高校及科研机构用户提供**学术身份认证**。认证通过后，用户在使用特定计费模块（如 HelixFold3）时可享受专属**学术优惠价格**。

- **认证方式**：请前往[[账号信息](https://paddlehelix.baidu.com/app/user/account/info)]查看认证指引，或发送邮件至baidubio_cooperate@baidu.com联系我们。

  - 	*邮件请注明：您的机构名称、姓名和联系方式。*

- **学术标识**：通过认证后，您可以在[[账号信息](https://paddlehelix.baidu.com/app/user/account/info)]页面或者右上角个人卡片中看到“学术账号”的标识。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%8F%B3%E4%B8%8A%E8%A7%92%E5%8D%A1%E7%89%87%E5%AD%A6%E6%9C%AF%E6%A0%87%E8%AF%86%20%E4%B8%AD%E6%96%87-6cf3aa5c.jpg" style="zoom:70%;" />

- **优惠生效**：当学术优惠生效时，底部计费栏中会提示“学术优惠”价格。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E8%AE%A1%E8%B4%B9%E6%A0%8F%20%E5%AD%A6%E6%9C%AF%E4%BC%98%E6%83%A0%20%E4%B8%AD%E6%96%87-bab33ba0.jpg" style="zoom:50%;" />

- **注意**：

  - 认证学术身份前，必须先将账号[升级为高级版](#88e12ae)。
  - **学术优惠与点券不可同时使用**。仅在未使用点券抵扣、全额以余额支付时才可享受学术优惠。







<a id="aec7303"></a>

# 计费与价格

普通账户可以免费升级为高级版，来使用平台的完整功能。更多信息，请查阅[账号等级与身份说明](https://paddlehelix.baidu.com/app/tut/platform/price/account)。

- **高级版**：支持在计费模块提交任务。系统优先扣除可用[点券](https://paddlehelix.baidu.com/app/tut/platform/price/quota)，超出部分使用百度云账户余额抵扣。
- **未接入计费模块**：当前只支持使用点券进行抵扣，不支持余额支付。





<a id="053f135"></a>

## 计费模块列表



目前平台支持计费使用的模块包括：

- **生物分子结构预测**：HelixFold3
- **虚拟筛选**：HelixVS（仅支持商业分子库，自定义库暂不支持）
- **分子设计**：HelixVS-Syn
- **ADMET预测**：HelixADEMT
- **RNA二级结构预测**：LinearFold、LinearPartition
- **序列设计**：LinearDesign（mRNA）、HelixUTRdesign（5’UTR）

*注：除上述模块外，其余模块暂不支持计费使用。*





<a id="88df981"></a>

## 费用说明

| **模块**                                | **规格/说明**                | **计费方式**                                                 | **定价 (人民币)**           |
| --------------------------------------- | ---------------------------- | ------------------------------------------------------------ | --------------------------- |
| **虚拟筛选 HelixVS**                    | 分子库：Targetmol (3.4万)    | 按次计费                                                     | **70元** /次                |
|                                         | 分子库：Lifechemicals (82万) | 按次计费                                                     | **1,200元** /次             |
|                                         | 分子库：ChemDiv (283万)      | 按次计费                                                     | **3,700元** /次             |
|                                         | 分子库：topscience (1687万)  | 按次计费                                                     | **19,000元** /次            |
|                                         | 自定义分子库                 | 按分子数                                                     | **0.1元** /个分子           |
| **分子设计 HelixVS-Syn**                | 高效模式                     | 按次计费                                                     | **310元** /次               |
|                                         | 深度模式                     | 按次计费                                                     | **2,500元** /次             |
| **ADMET预测 HelixADEMT** (网页/API提交) | 单次提交                     | 按分子数                                                     | **0.5元** /个分子           |
|                                         | 1个月有效量包 (1万分子)      | 按量包                                                       | **4,500元** /个             |
|                                         | 3个月有效量包 (10万分子)     | 按量包                                                       | **40,000元** /个            |
|                                         | 12个月有效量包 (100万分子)   | 按量包                                                       | **300,000元** /个           |
| **RNA二级结构预测**                     | LinearFold                   | 按条数                                                       | **10元** /条                |
|                                         | LinearPartition              | 按条数                                                       | **10元** /条                |
| **mRNA序列设计 LinearDesign**           | Basic版本                    | 按生成条数                                                   | **2,000元** /条             |
|                                         | Plus版本                     | 按生成条数                                                   | **2,400元** /条             |
|                                         | Advance版本                  | 按生成条数                                                   | **2,500元** /条             |
| **5’UTR序列设计**                       | HelixUTRdesign               | 按条数                                                       | **2,000元** /条             |
| **HelixFold3**                          | (网页/API提交)               | 按[算力单元](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3bill)计费 | **0.068704549元** /算力单元 |
| **小蛋白设计**                          | -                            | 按[算力单元](https://paddlehelix.baidu.com/app/tut/guide/all/helixdesignbill)计费 | **0.068704549元** /算力单元 |
| **抗体设计**                            | -                            | 按[算力单元](https://paddlehelix.baidu.com/app/tut/guide/all/helixdesignbill)计费 | **0.068704549元** /算力单元 |







<a id="a2bad1c"></a>

## 欠费处理

平台会检查您的账户是否处于欠费状态，欠费时，平台所有功能将不可用。请您前往[充值](https://login.bce.baidu.com/?account=&redirect=https%3A%2F%2Fconsole.bce.baidu.com%2Ffinance%2Frecharge)以恢复使用。





<a id="b656662"></a>

# 点券系统

点券是螺旋桨平台推出的虚拟代金券，旨在降低用户体验门槛。点券可用于 **1:1 抵扣**平台内的任务费用（1点券 = 1元人民币）。



<a id="8e905b4"></a>

## 1. 如何获取点券

用户可以通过完成平台任务自动获取点券，常见的获取方式如下：

| **任务类型** | **任务说明**                                                 | **奖励点券**                         | **频率**           |
| ------------ | ------------------------------------------------------------ | ------------------------------------ | ------------------ |
| **新手任务** | 首次注册登录                                                 | 50点券 (全局) + 特定模块专属大额点券 | 一次性             |
| **进阶任务** | [升级为高级版](https://paddlehelix.baidu.com/app/tut/platform/price/account#88e12ae) (实名+开通CHPC) | 50点券                               | 一次性             |
| **订阅任务** | 订阅螺旋桨平台动态                                           | 20点券                               | 一次性             |
| **日常活跃** | 每日抽奖                                                     | 随机金额                             | 每日1次            |
| **月度任务** | 参见“[点券活动](https://paddlehelix.baidu.com/app/user/coupon/activity)”页面 | 以页面显示为准                       | 每月1次            |
| **体验反馈** | 完成各类体验问卷/评价，详情参见参见“[点券活动](https://paddlehelix.baidu.com/app/user/coupon/activity)”页面 | 5~10点券                             | 以活动页面显示为准 |

> **点券类型说明**：
>
> - **全局点券**：通用，可抵扣任意模块费用。
> - **单模块点券**：仅限特定模块使用。
> - *注：部分点券存在有效期（如本月有效），请在[账号总览](https://paddlehelix.baidu.com/app/user/overview)查看详情。*



<a id="e6825d9"></a>

## 2. 点券的使用规则

- **抵扣顺序**： 系统优先使用点券抵扣任务费用。当账户内存在多张点券时，抵扣优先级如下：
  1. **点券类型**：优先扣除“单模块点券”，其次扣除“全局点券”。
  2. **有效期**：若类型相同，优先扣除先到期的点券。
  3. **发放时间**：若到期日相同，优先扣除先发放的点券。

- **混合支付**： 对于**高级版**账号，当点券余额不足时，系统会先扣除所有可用点券，剩余费用自动从百度云账户余额中扣除。

- **使用限制**：

  1. 普通账号仅能使用点券体验**基础功能**（详见[账号等级与身份说明](https://paddlehelix.baidu.com/app/tut/platform/price/account)）。

  2. **点券不支持与学术优惠叠加**。如需使用学术优惠，请在提交任务前点击底部“订单详情”，将抵扣方式手动改为“无”。



<a id="44c37fc"></a>

## 3. 点券的查询

您可以在“[我的账户](https://paddlehelix.baidu.com/app/user/overview)”中查看所有和点券相关的记录。页面包含两个标签页：

- **点券余额详情**：查看所有“生效中”或“已失效”的点券及其余额。
  - *注：范围一致且有效期一致的点券会自动合并显示。*
- **点券流水**：查询点券的详细获取记录、消耗记录及过期信息。













<a id="b0fccc3"></a>

# 引用我们













<a id="837c256"></a>

## PaddleHelix平台

PaddleHelix (China. https://paddlehelix.baidu.com/)





<a id="35f22cc"></a>

## 全生物分子结构预测







<a id="aca49bd"></a>

### HelixFold3

Liu, L., et al., *Technical report of HelixFold3 for biomolecular structure prediction.* arXiv preprint arXiv:2408.16975, 2024. https://arxiv.org/abs/2408.16975



<a id="ac32ca6"></a>

### HelixFold-S1

Liu, L., et al., *Advancing Structure Prediction of Biomolecular Interaction via Contact-Guided Sampling with HelixFold-S1.* arXiv preprint arXiv:2507.09251, 2025. https://arxiv.org/abs/2507.09251



<a id="5dfd886"></a>

## 小蛋白设计

Gao, J., et al., *HelixDesign-Binder: A Scalable Production-Grade Platform for Binder Design Built on HelixFold3.* arXiv preprint arXiv:2505.21873, 2025. https://arxiv.org/abs/2505.21873



<a id="7572d37"></a>

## 抗体设计

Gao, J., et al., *HelixDesign-Antibody: A Scalable Production-Grade Platform for Antibody Design Built on HelixFold3.* arXiv preprint arXiv:2507.02345, 2025. https://arxiv.org/abs/2507.02345





<a id="893fd5a"></a>

## ADMET预测





<a id="d7ac0da"></a>

### 自训练模型：

Fang, X., Liu, L., Lei, J., He, D., Zhang, S., Zhou, J., Wang, F., Wu, H., & Wang, H. (2022). Geometry-enhanced molecular representation learning for property prediction. Nature Machine Intelligence, 4(2), 127-134. https://doi.org/10.1038/s42256-021-00438-4 















<a id="a2b2e70"></a>

### HelixADMET：

Zhang, S., Yan, Z., Huang, Y., Liu, L., He, D., Wang, W., Fang, X., Zhang, X., Wang, F., Wu, H., & Wang, H. (2022). HelixADMET: a robust and endpoint extensible ADMET system incorporating self-supervised knowledge transfer. Bioinformatics, btac342. https://doi.org/10.1093/bioinformatics/btac342 















<a id="09bc1a0"></a>

## 分子生成

Chen, Z., et al. (2022). "HelixMO: Sample-Efficient Molecular Optimization in Scene-Sensitive Latent Space." 315-321. https://www.computer.org/csdl/proceedings-article/bibm/2022/09995561/1JC23yWxizC















<a id="7887c2d"></a>

## 分子活性预测（序列）

Luo, H., Xiang, Y., Fang, X., Lin, W., Wang, F., Wu, H., & Wang, H. (2022). BatchDTA: implicit batch alignment enhances deep learning-based drug–target affinity estimation. *Briefings in Bioinformatics*, *23*(4), bbac260. https://doi.org/10.1093/bib/bbac260 















<a id="28d1993"></a>

## 分子活性预测（结构）

Li, S., Zhou, J., Xu, T., Huang, L., Wang, F., Xiong, H., Huang, W., Dou, D., & Xiong, H. (2021). *Structure-aware Interactive Graph Neural Networks for the Prediction of Protein-Ligand Binding Affinity* Proceedings of the 27th ACM SIGKDD Conference on Knowledge Discovery &amp; Data Mining, Virtual Event, Singapore. https://doi.org/10.1145/3447548.3467311















<a id="ffa6ebb"></a>

## 分子对接

<a id="1d3524d"></a>

### HelixDock

Liu, L., et al., *Pre-training on large-scale generated docking conformations with helixdock to unlock the potential of protein-ligand structure prediction models.* arXiv preprint arXiv:2310.13913, 2023. https://arxiv.org/abs/2310.13913

<a id="512a8de"></a>

### HelixVS

Zhang, S., et al., *HelixVS: Deep Learning-Enhanced Structure-Based Platform for Screening and Design.* arXiv preprint arXiv:2508.10262, 2025. https://arxiv.org/abs/2508.10262









<a id="a81c140"></a>

## 蛋白-蛋白相互作用预测

Xue, Y., Liu, Z., Fang, X., & Wang, F. (2022). Multimodal Pre-Training Model for Sequence-based Prediction of Protein-Protein Interaction. Proceedings of the 16th Machine Learning in Computational Biology meeting, Proceedings of Machine Learning Research. https://proceedings.mlr.press/v165/xue22a.html 















<a id="d13c684"></a>

## 蛋白质结构预测













<a id="01e5d34"></a>

### HelixFold

Wang, G., Fang, X., Wu, Z., Liu, Y., Xue, Y., Xiang, Y., Yu, D., Wang, F., & Ma, Y. (2022). HelixFold: An Efficient Implementation of AlphaFold2 using PaddlePaddle. *arXiv preprint arXiv:2207.05477*. https://arxiv.org/abs/2207.05477













<a id="2064ecd"></a>

### HelixFold-Single

Fang, X., et al., *A method for multiple-sequence-alignment-free protein structure prediction using a protein language model.* Nature Machine Intelligence, 2023. **5**(10): p. 1087-1096. https://doi.org/10.1038/s42256-023-00721-6













<a id="14ca9d5"></a>

## 蛋白质功能预测

Kazadi, A., M. Zhang, and J. Zhou, Protein Function Prediction with Primary-Tertiary Hierarchical Learning. 2023 IEEE International Conference on Bioinformatics and Biomedicine (BIBM), 2023: p. 1997-2002. https://doi.ieeecomputersociety.org/10.1109/BIBM58861.2023.10385877















<a id="0f5470d"></a>

## 逆合成路线规划

Yemin Yu, Y. W., Kun Kuang, Zhengxing Huang, Huaxiu Yao, Fei Wu (2022). GRASP: Navigating Retrosynthetic Planning with Goal-driven Policy. Advances in Neural Information Processing Systems.https://openreview.net/forum?id=ofwkaIWFqqv















<a id="fed5e8b"></a>

## LinearFold

Huang, L., Zhang, H., Deng, D., Zhao, K., Liu, K., Hendrix, D. A., & Mathews, D. H. (2019). LinearFold: linear-time approximate RNA folding by 5'-to-3' dynamic programming and beam search. Bioinformatics, 35(14), i295-i304. https://doi.org/10.1093/bioinformatics/btz375 















<a id="6adcfa0"></a>

## LinearPartition

Zhang, H., Zhang, L., Mathews, D. H., & Huang, L. (2020). LinearPartition: linear-time approximation of RNA folding partition function and base-pairing probabilities. Bioinformatics, 36(Supplement_1), i258-i267. https://doi.org/10.1093/bioinformatics/btaa460 















<a id="153ddff"></a>

## mRNA序列设计

Zhang, H., et al., *Algorithm for Optimized mRNA Design Improves Stability and Immunogenicity.* Nature, 2023. https://doi.org/10.1038/s41586-023-06127-z















<a id="ca6c8ce"></a>

## 双药联用

Hu, J., Gao, J., Fang, X., Liu, Z., Wang, F., Huang, W., Wu, H., & Zhao, G. (2022). DTSyn: a dual-transformer-based neural network to predict synergistic drug combinations. *Briefings in Bioinformatics*, bbac302. https://doi.org/10.1093/bib/bbac302 















<a id="25dd35a"></a>

## 药物重定向

Gao, J., Hu, J., Sun, W.-N., Shen, Y., Zhang, X., Fang, X., Wang, F., & Zhao, G.-G. (2022). TCR: A Transformer Based Deep Network for Predicting Cancer Drugs Response. *ArXiv*, *abs/2207.04457*. https://arxiv.org/abs/2207.04457















<a id="c977413"></a>

# FAQ

该页面收集用户的一些常见问题，如果您在使用过程中有遇到任何问题，欢迎随时与我们联系。

1. 我没有中国大陆手机，该怎么注册百度账号呢？

   对于海外用户，螺旋桨目前只能支持使用GitHub登录。您可以点击登录弹窗左下角的GitHub标志来进行验证。

2. 螺旋桨网站上的预测效果和线下模型的预测效果是完全一样的吗？

   由于一些资源和网站性能的限制，部分线上功能的参数会有所调整，这可能会影响预测的结果。如果有合作需求请发送邮件到[baidubio_cooperate@baidu.com](mailto:baidubio_cooperate@baidu.com)了解详情。

3. 平台能支持开发票吗？

   可以的。您在完成消费大约一个工作日后，可以前往https://console.bce.baidu.com/finance/invoice/list 自行申请发票

4. 怎么才能升级高级版，使用平台计费模块的完整功能？

   - 中国大陆用户/有中国大陆手机的用户：请查阅[账号等级与身份说明](https://paddlehelix.baidu.com/app/tut/platform/price/account)

   - 海外用户：请请发送邮件到[baidubio_cooperate@baidu.com联系我们。

   