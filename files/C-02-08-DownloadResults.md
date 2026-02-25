
# 数据下载

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

## 文件说明

- **input.json**：记录本次设计任务的输入参数与配置。
- **summary.csv**：汇总所有设计结果的序列信息及预测指标，便于整体对比与筛选分析。
- **results/**：包含每一个设计结果的详细预测数据。每个结果保存在以 `任务名_XXXX` 命名的子文件夹中，

主要包括：
  - `predicted_structure.cif`：预测得到的三维结构文件
  - `all_results.json`：该设计结果下所有构象的评分信息
  - `InterfaceVis.pml`：PyMOL 可视化脚本，用于展示对接界面残基。需先在 PyMOL 中打开对应的 `.cif` 结构文件，再加载该脚本进行界面可视化
  - `Interface.ic`：对接界面残基列表