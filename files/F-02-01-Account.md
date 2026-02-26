# 账号等级与身份说明

<div class="doc-page-type doc-page-type--other"><span class="doc-page-type__icon">🧭</span><span>分类：其他</span></div>


为了提供更灵活的服务，螺旋桨平台对账号体系进行了升级。平台账号等级分为**基础版**和**高级版**（原商业账号），同时针对科研群体推出了**学术身份认证**，让大家能够在指定模块下享受更多优惠。


## 账号等级与权限

| **账号等级** | **获取方式**                         | **权限说明**                                     | **支付方式**                                                 |
| ------------ | ------------------------------------ | ------------------------------------------------ | ------------------------------------------------------------ |
| **基础版**   | 注册账号并登录即可获得               | **基础功能**：✅ 可用<br/> **高级功能**：🚫 不可用 | **仅支持使用点券抵扣**。 若点券不足，无法提交任务。          |
| **高级版**   | 完成实名认证并开通CHPC服务后自动升级 | **基础功能**：✅ 可用<br/> **高级功能**：✅ 可用   | **支持混合支付**。 对于已[接入计费的模块](https://paddlehelix.baidu.com/app/tut/platform/price/bill#053f135)，点券不足部分自动使用百度云余额支付。 |



### 基础功能与高级功能对照表

| **模块名称**     | **基础功能（基础版可用）** | **高级功能（需升级高级版）** |
| ---------------- | -------------------------- | ---------------------------- |
| **HelixFold3**   | 网页端预测                 | API/SDK调用                  |
| **LinearDesign** | Basic版本                  | Plus版本、Advance版本        |
| **小蛋白设计**   | -                          | 全部功能                     |
| **抗体设计**     | -                          | 全部功能                     |
| **其他模块**     | 全部功能                   | -                            |

:::tip 建议
如需使用高级功能，请前往[免费升级为高级版](#升级高级版)。
:::



## 升级高级版

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





## 学术身份认证

为了支持科研工作，我们为高校及科研机构用户提供**学术身份认证**。认证通过后，用户在使用特定计费模块（如 HelixFold3）时可享受专属**学术优惠价格**。

- **认证方式**：请前往[[账号信息](https://paddlehelix.baidu.com/app/user/account/info)]查看认证指引，或发送邮件至baidubio_cooperate@baidu.com联系我们。

  - 	*邮件请注明：您的机构名称、姓名和联系方式。*

- **学术标识**：通过认证后，您可以在[[账号信息](https://paddlehelix.baidu.com/app/user/account/info)]页面或者右上角个人卡片中看到“学术账号”的标识。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E5%8F%B3%E4%B8%8A%E8%A7%92%E5%8D%A1%E7%89%87%E5%AD%A6%E6%9C%AF%E6%A0%87%E8%AF%86%20%E4%B8%AD%E6%96%87-6cf3aa5c.jpg" style="zoom:70%;" />

- **优惠生效**：当学术优惠生效时，底部计费栏中会提示“学术优惠”价格。

  <img src="https://bml-test-test.bj.bcebos.com/helix_upload/%E8%AE%A1%E8%B4%B9%E6%A0%8F%20%E5%AD%A6%E6%9C%AF%E4%BC%98%E6%83%A0%20%E4%B8%AD%E6%96%87-bab33ba0.jpg" style="zoom:50%;" />

- **注意**：

  - 认证学术身份前，必须先将账号[升级为高级版](#升级高级版)。
  - **学术优惠与点券不可同时使用**。仅在未使用点券抵扣、全额以余额支付时才可享受学术优惠。
