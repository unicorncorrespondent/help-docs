# 序列输入

> 了解如何输入蛋白质、核酸、小分子等实体数据

HelixFold3 支持多种类型的生物分子实体输入，包括蛋白质、DNA、RNA、小分子配体和离子。本节将详细介绍各类实体的输入格式要求。

## 输入实体

用户首先需要输入实体（Entity）数据。每一行为一条实体数据，您需要指定以下内容：

- 实体类型：目前我们支持的实体类型为“蛋白”、“配体”、“DNA”、“RNA”、“离子”
- 数量：代表该实体的数目（number of copy），默认为1
- 序列：具体的实体内容

### 支持的实体类型

平台对蛋白质、DNA 和 RNA 采用标准 FASTA 格式，您可以直接输入序列字符（可选择性地在首行添加 `>` 开头的描述信息）。对于小分子配体，可通过 CCD 代码（如 ATP）或 SMILES 字符串指定。金属离子则从预设列表中选择。

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

> ⚠️ 注意:
> - HelixFold-S1 仅支持多链复合物，输入需包含至少两条实体，或一条实体但数量为 2。
> - 限制总 token 数量：不超过 3000
  （token 数计算方式详见[数据说明](https://paddlehelix.baidu.com/app/tut/guide/all/helixfold3json)中的 JSON 结构说明）


## 数据预览

输入数据后，系统会自动显示预览状态，便于您确认输入内容是否正确。

- **实体类型为蛋白/DNA/RNA时**：完成输入后，输入的序列会进行自动整理成为预览态。此时如果您需要编辑序列，直接点击序列即可重新恢复到编辑态

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20%E8%BE%93%E5%85%A5%E9%A1%B5%20%E4%B8%80%E6%9D%A1%E8%9B%8B%E7%99%BD%E9%A2%84%E8%A7%88%20%E4%B8%AD%E6%96%87-adb5c915.jpg" style="zoom:50%;" />

- **实体类型为配体时**：完成输入后，输入框后方会出现“2D”标识。鼠标悬浮在这个标识上可以预览当前配体的二维结构，方便确认输入是否正确

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/hf3%20%E8%BE%93%E5%85%A5%E9%A1%B5%20%E9%A2%84%E8%A7%882d%E5%88%86%E5%AD%90-f5ea4bbe.jpg" style="zoom:50%;" />

## 实体操作
您可以通过每一条实体后的选项对该条数据进行操作，以下是不同实体支持的操作一览：

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

## 批量任务
您可以通过上传 JSON 文件的方式进行批量任务提交，并在任务运行完成后前往任务管理页面分别查看不同任务的结果。

### 创建多条任务
您可以通过以下三种方法来创建多条任务：

- 点击“新增任务”按钮，创建空白的任务标签。您可以在新建的页面中完成数据输入
- 点击“克隆任务”按钮，将该条任务所有已输入的数据克隆到新的任务标签中，您可以基于这些已输入的数据进行后续修改。
- 上传JSON文件（见下方“上传JSON部分内容”）。

---
上一步：[模型选择](./C-01-01-ChoosingModel.md)
下一步：[添加修饰](./C-01-02.5-BatchUpload.md)
