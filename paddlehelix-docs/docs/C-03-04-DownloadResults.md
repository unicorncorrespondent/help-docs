# 下载设计结果

> 获取抗体序列和结构文件


### 下载内容

点击下载按钮获取设计结果，下载内容为 zip 压缩包。

### 文件结构

```
antibody_design_results/
├── input.json                          # 用户输入信息记录
├── summary.csv                          # 所有设计结果的序列及评分汇总
└── results/
    ├── 9dd5_user_0000/
    │   ├── 9dd5_user_0000.cif          # 三维结构预测结果
    │   ├── Interface.ic                # 对接面残基列表
    │   ├── InterfaceVis.pml           # PyMOL 可视化脚本
    │   ├── all_results.json           # 所有构象的打分结果
    │   └── chain_id_mapping.csv       # 链 ID 对照表
    ├── 9dd5_user_0001/
    │   ├── 9dd5_user_0001.cif
    │   ├── Interface.ic
    │   ├── InterfaceVis.pml
    │   ├── all_results.json
    │   └── chain_id_mapping.csv
    └── ...
```

### 文件说明

| 文件 | 说明 |
|------|------|
| **input.json** | 记录本次设计任务的输入参数与配置 |
| **summary.csv** | 汇总所有设计结果的序列及各项评分 |
| **任务名_XXXX.cif** | 预测的三维结构文件 |
| **Interface.ic** | 对接界面残基列表 |
| **InterfaceVis.pml** | PyMOL 可视化脚本 |
| **all_results.json** | 所有构象的打分结果 |
| **chain_id_mapping.csv** | 链 ID 对照表 |

