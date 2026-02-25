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
      label: '蛋白质与小分子',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'C-00-00-ProteinMain',
          label: '蛋白质/多肽药物开发',
        },
        {
          type: 'category',
          label: '结构预测',
          items: [
            'C-01-00-StructurePredictionOverview',
            'C-01-01-ChoosingModel',
            'C-01-02-Input',
            'C-01-02.5-BatchUpload',
            'C-01-03-Modification',
            'C-01-04-ForcedInteraction',
            'C-01-05-SamplingConstrains',
            'C-01-06-UploadReference',
            'C-01-07-OtherParameters',
            'C-01-08-ViewingResults',
            'C-01-09-InterpretResults',
            'C-01-10-FAQ',
            'C-01-11-Pricing',
          ],
        },
        {
          type: 'category',
          label: 'HelixDesign-Binder',
          items: [
            'C-02-00-HelixDesignBinder',
            'C-02-01-SelectDesignMode',
            'C-02-02-InputTarget',
            'C-02-03-UploadReferenceBinder',
            'C-02-04-DesignParameters',
            'C-02-05-ResultsOverview',
            'C-02-06-SingleResultAnalysis',
            'C-02-07-ResultsInterpretation',
            'C-02-08-DownloadResults',
            'C-02-09-BinderFAQ',
            'C-02-10-Pricing',
          ],
        },
        {
          type: 'category',
          label: 'HelixDesign-Antibody',
          items: [
            'C-03-00-HelixDesignAntibody',
            'C-03-01-InputComplex',
            'C-03-02-SelectDesignRegion',
            'C-03-03-UnderstandResults',
            'C-03-05-AntibodyFAQ',
            'C-03-06-Pricing',
          ],
        },
        {
          type: 'category',
          label: '案例教程',
          items: [
            'C-10-00-CaseTutorial',
            'C-10-01-ExampleBackground',
            'C-10-02-LoadingData',
            'C-10-03-InterpretingResults',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '小分子药物',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'D-00-00-ChemicalMain',
          label: '小分子药物开发',
        },
        {
          type: 'category',
          label: 'HelixADMET',
          items: [
            'D-01-00-HelixADMET',
            'D-01-01-ADMETInput',
            'D-01-02-ADMETResults',
            'D-01-03-Pricing',
          ],
        },
        {
          type: 'category',
          label: '虚拟筛选',
          items: [
            'D-02-01-HelixVS',
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
          label: 'MMGBSA',
          items: [
            'D-03-01-MMGBSA',
            'D-03-02-MMGBSAInput',
            'D-03-03-MMGBSAParameters',
            'D-03-04-MMGBSAResults',
          ],
        },
        {
          type: 'category',
          label: '分子设计',
          items: [
            'D-04-00-HelixVS-Syn',
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
      label: 'mRNA工具',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'E-00-00-mRNAMain',
          label: 'mRNA药物开发',
        },
        {
          type: 'category',
          label: 'LinearFold',
          items: [
            'E-02-01-LinearFoldOverview',
            'E-02-02-LinearFoldInput',
            'E-02-03-LinearFoldResults',
            'E-02-04-Pricing',
          ],
        },
        {
          type: 'category',
          label: 'LinearPartition',
          items: [
            'E-03-01-LinearPartitionOverview',
            'E-03-02-LinearPartitionInput',
            'E-03-03-LinearPartitionResults',
            'E-03-04-Pricing',
          ],
        },
        {
          type: 'category',
          label: 'HelixUTRDesign',
          items: [
            'E-04-01-HelixUTRDesignOverview',
            'E-04-02-HelixUTRDesignInput',
            'E-04-03-HelixUTRDesignResults',
            'E-04-04-Pricing',
          ],
        },
        {
          type: 'category',
          label: 'LinearDesign',
          items: [
            'E-05-01-LinearDesignOverview',
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
