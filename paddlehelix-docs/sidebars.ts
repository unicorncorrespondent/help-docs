import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'A-00-Welcome',
      label: '欢迎',
    },
    {
      type: 'doc',
      id: 'B-00-QuickStart',
      label: '快速开始',
    },
    {
      type: 'category',
      label: '蛋白质/多肽药物研发',
      link: {type: 'doc', id: 'C-00-00-ProteinMain'},
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '结构预测\nHelixFold3/HelixFold-S1',
          link: {type: 'doc', id: 'C-01-00-StructurePredictionOverview'},
          items: [
            {
              type: 'doc',
              id: 'C-01-01-ChoosingModel',
              label: '模型选择',
            },
            {
              type: 'doc',
              id: 'C-01-02-Input',
              label: '序列输入',
            },
            {
              type: 'doc',
              id: 'C-01-02.5-BatchUpload',
              label: '批量任务',
            },
            {
              type: 'doc',
              id: 'C-01-03-Modification',
              label: '添加修饰',
            },
            {
              type: 'doc',
              id: 'C-01-04-ForcedInteraction',
              label: '指定相互作用',
            },
            {
              type: 'doc',
              id: 'C-01-05-SamplingConstrains',
              label: '限定采样范围',
            },
            {
              type: 'doc',
              id: 'C-01-06-UploadReference',
              label: '上传参考结构',
            },
            {
              type: 'doc',
              id: 'C-01-07-OtherParameters',
              label: '其他参数配置',
            },
            {
              type: 'doc',
              id: 'C-01-08-ViewingResults',
              label: '查看结构预测结果',
            },
            {
              type: 'doc',
              id: 'C-01-09-InterpretResults',
              label: '结果解读与下载',
            },
            {
              type: 'category',
              label: '案例教程',
              link: {type: 'doc', id: 'C-10-00-CaseTutorial'},
              items: [
                {
                  type: 'doc',
                  id: 'C-10-01-ExampleBackground',
                  label: '案例背景',
                },
                {
                  type: 'doc',
                  id: 'C-10-02-LoadingData',
                  label: '输入数据',
                },
                {
                  type: 'doc',
                  id: 'C-10-03-InterpretingResults',
                  label: '结果解读',
                },
              ],
            },
            {
              type: 'doc',
              id: 'C-01-10-FAQ',
              label: '常见问题',
            },
            {
              type: 'doc',
              id: 'C-01-02.6-JSONInputOutput',
              label: 'JSON 输入输出说明',
            },
            {
              type: 'doc',
              id: 'C-01-02.7-APISDKGuide',
              label: 'API&SDK说明',
            },
            {
              type: 'doc',
              id: 'C-01-11-Pricing',
              label: '计费与价格',
            },
          ],
        },
        {
          type: 'category',
          label: '小蛋白设计\nHelixDesign-Binder',
          link: {type: 'doc', id: 'C-02-00-HelixDesignBinder'},
          items: [
            {
              type: 'doc',
              id: 'C-02-01-SelectDesignMode',
              label: '选择设计模式',
            },
            {
              type: 'doc',
              id: 'C-02-02-InputTarget',
              label: '输入靶点',
            },
            {
              type: 'doc',
              id: 'C-02-03-UploadReferenceBinder',
              label: '上传参考Binder',
            },
            {
              type: 'doc',
              id: 'C-02-04-DesignParameters',
              label: '设计参数',
            },
            {
              type: 'doc',
              id: 'C-02-05-ResultsOverview',
              label: '结果总览',
            },
            {
              type: 'doc',
              id: 'C-02-06-SingleResultAnalysis',
              label: '单项结果分析',
            },
            {
              type: 'doc',
              id: 'C-02-07-ResultsInterpretation',
              label: '结果解读',
            },
            {
              type: 'doc',
              id: 'C-02-08-DownloadResults',
              label: '下载结果',
            },
            {
              type: 'doc',
              id: 'C-02-09-BinderFAQ',
              label: '常见问题',
            },
            {
              type: 'doc',
              id: 'C-02-10-Pricing',
              label: '计费与价格',
            },
          ],
        },
        {
          type: 'category',
          label: '抗体设计\nHelixDesign-Antibody',
          link: {type: 'doc', id: 'C-03-00-HelixDesignAntibody'},
          items: [
            {
              type: 'doc',
              id: 'C-03-01-InputComplex',
              label: '输入复合体结构',
            },
            {
              type: 'doc',
              id: 'C-03-02-SelectDesignRegion',
              label: '选择设计链和区域',
            },
            {
              type: 'doc',
              id: 'C-03-03-UnderstandResults',
              label: '查看结果与参数解读',
            },
            {
              type: 'doc',
              id: 'C-03-04-DownloadResults',
              label: '下载结果',
            },
            {
              type: 'doc',
              id: 'C-03-05-AntibodyFAQ',
              label: '抗体设计FAQ',
            },
            {
              type: 'doc',
              id: 'C-03-06-Pricing',
              label: '计费与价格',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '小分子药物研发',
      link: {type: 'doc', id: 'D-00-00-ChemicalMain'},
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '小分子 ADMET 性质预测\nHelixADMET',
          link: {type: 'doc', id: 'D-01-00-HelixADMET'},
          items: [
            'D-01-01-ADMETInput',
            'D-01-02-ADMETResults',
            'D-01-03-Pricing',
          ],
        },
        {
          type: 'category',
          label: '虚拟筛选\nHelixVS',
          link: {type: 'doc', id: 'D-02-01-HelixVS'},
          items: [
            'D-02-02-InputProtein',
            'D-02-03-DefineBindingSite',
            'D-02-04-MolecularLibrary',
            'D-02-05-ScreeningParameters',
            'D-02-06-ScreeningResults',
            'D-02-08-Pricing',
          ],
        },
        {
          type: 'category',
          label: '结合自由能计算\nMMGBSA',
          link: {type: 'doc', id: 'D-03-01-MMGBSA'},
          items: [
            'D-03-02-MMGBSAInput',
            'D-03-03-MMGBSAParameters',
            'D-03-04-MMGBSAResults',
          ],
        },
        {
          type: 'category',
          label: '分子设计\nHelixVS-Syn',
          link: {type: 'doc', id: 'D-04-00-HelixVS-Syn'},
          items: [
            'D-04-01-TargetProtein',
            'D-04-02-BindingSite',
            'D-04-03-Scaffold',
            'D-04-04-Results',
            'D-04-05-DownloadResults',
            'D-04-06-Pricing',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'mRNA 药物研发',
      link: {type: 'doc', id: 'E-00-00-mRNAMain'},
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '二级结构预测\nLinearFold',
          link: {type: 'doc', id: 'E-02-01-LinearFoldOverview'},
          items: [
            'E-02-02-LinearFoldInput',
            'E-02-03-LinearFoldResults',
            'E-02-04-Pricing',
          ],
        },
        {
          type: 'category',
          label: '配对概率分布预测\nLinearPartition',
          link: {type: 'doc', id: 'E-03-01-LinearPartitionOverview'},
          items: [
            'E-03-02-LinearPartitionInput',
            'E-03-03-LinearPartitionResults',
            'E-03-04-Pricing',
          ],
        },
        {
          type: 'category',
          label: 'UTR设计\nHelixUTRDesign',
          link: {type: 'doc', id: 'E-04-01-HelixUTRDesignOverview'},
          items: [
            'E-04-02-HelixUTRDesignInput',
            'E-04-03-HelixUTRDesignResults',
            'E-04-04-Pricing',
          ],
        },
        {
          type: 'category',
          label: 'mRNA 序列设计\nLinearDesign',
          link: {type: 'doc', id: 'E-05-01-LinearDesignOverview'},
          items: [
            'E-05-02-LinearDesignInput',
            'E-05-03-LinearDesignParameters',
            'E-05-04-LinearDesignResults',
            'E-05-05-Pricing',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '其他',
      collapsed: false,
      items: [
        'F-01-01-FAQ',
        'F-02-01-Account',
        'F-02-02-Price',
        'F-02-03-CouponExplained',
        'F-03-01-Updates',
        'F-04-01-ContactUs',
      ],
    },
  ],
};

export default sidebars;
