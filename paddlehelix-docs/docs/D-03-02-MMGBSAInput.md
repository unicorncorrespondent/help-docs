# MMGBSA 上传数据

> 上传蛋白和配体结构进行结合能计算

进行 MMGBSA 计算前，您需要准备并上传。蛋白与分子之间的对接并上传对接好的构象文件，包括
- 一个符合.pdb白质文件和
- 一个符合.pdb/.mol2/.sdf/.pdbqt格式的配体构象文件；如果要上传多个配体构象文件(不超过20个)，请打包为.zip后再上传

<img src="https://bml-test-test.bj.bcebos.com/helix_upload/mmgbsa%20%E8%BE%93%E5%85%A5%E9%A1%B5%E4%B8%8A%E4%BC%A0%20%E4%B8%AD%E6%96%87-eb0e72b6.jpg" style="zoom:50%;" />

您可以选择是否要指定参考小分子。如果指定了参考小分子，则MMGBSA会计算所有其他小分子相对该参考小分子的能量变化。


---

上一步：[MMGBSA 概述](./D-03-01-MMGBSA)
下一步：[参数配置](./D-03-03-MMGBSAParameters)



