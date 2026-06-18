'use client';

import React from 'react';

const Research = () => {
  const publications = [
    {
      authors: "Jia, Fernando, Jade Zheng, and Florence Li.",
      title: "Decentralized intelligence in gamefi: Embodied ai agents and the convergence of defi and virtual ecosystems.",
      journal: "arXiv preprint arXiv:2412.18601",
      year: "2024"
    },
    {
      authors: "Jia, Fernando, et al.",
      title: "Embodied ai agent for co-creation ecosystem: Elevating human-ai co-creation through emotion recognition and dynamic personality adaptation.",
      journal: "arXiv preprint",
      year: "2025"
    },
    {
      authors: "A Luo, T Li, WH Zhang, TS Lee.",
      title: "Surfgen: Adversarial 3d shape synthesis with explicit surface discriminators.",
      journal: "Proceedings of the IEEE/CVF International Conference on Computer Vision",
      year: "2021"
    },
    {
      authors: "YHH Tsai, T Li, MQ Ma, H Zhao, K Zhang, LP Morency, R Salakhutdinov.",
      title: "Conditional contrastive learning with kernel.",
      journal: "International Conference on Learning Representations (ICLR)",
      year: "2022"
    },
    {
      authors: "J Liang, C Wang, D Zhang, Y Xie, Y Zeng, T Li, Z Zuo, J Ren, Q Zhao.",
      title: "VSOLassoBag: a variable-selection oriented LASSO bagging algorithm for biomarker discovery in omic-based translational research.",
      journal: "Journal of Genetics and Genomics 50 (3), 151-162",
      year: "2023"
    },
    {
      authors: "T Li, Z Li, H Rockwell, A Farimani, TS Lee.",
      title: "Prototype memory and attention mechanisms for few shot image generation.",
      journal: "International Conference on Learning Representations (ICLR)",
      year: "2022"
    },
    {
      authors: "T Li, Z Wen, Y Li, TS Lee.",
      title: "Emergence of Shape Bias in Convolutional Neural Networks through Activation Sparsity.",
      journal: "NeurIPS 2023 (Oral, Global Top 1%)",
      year: "2023"
    },
    {
      authors: "YHH Tsai, T Li, W Liu, P Liao, R Salakhutdinov, LP Morency.",
      title: "Learning weakly-supervised contrastive representations.",
      journal: "International Conference on Learning Representations (ICLR)",
      year: "2022"
    },
    {
      authors: "Z Li, T Li, ME Yates, Y Wu, A Ferber, L Chen, DD Brown, JS Carroll, et al.",
      title: "The EstroGene database reveals diverse temporal, context-dependent, and bidirectional estrogen receptor regulomes in breast cancer.",
      journal: "Cancer research 83 (16), 2656-2674",
      year: "2023"
    },
    {
      authors: "YHH Tsai, T Li, W Liu, P Liao, R Salakhutdinov, LP Morency.",
      title: "Integrating auxiliary information in self-supervised learning.",
      journal: "arXiv preprint arXiv:2106.02869",
      year: "2021"
    },
    {
      authors: "Z Li, T Li, AB Farimani.",
      title: "TPU-GAN: learning temporal coherence from dynamic point cloud sequences.",
      journal: "International Conference on Learning Representations (ICLR)",
      year: "2021"
    },
    {
      authors: "T Li, M Hu, L Zhang.",
      title: "Using the SVM Method for Lung Adenocarcinoma Prognosis Based on Expression Level.",
      journal: "Proceedings of the 2018 2nd International Conference on Computational ...",
      year: "2018"
    },
    {
      authors: "J Liu, Z Kong, P Dong, C Yang, T Li, H Tang, G Yuan, W Niu, W Zhang, et al.",
      title: "Structured Agent Distillation for Large Language Model.",
      journal: "arXiv preprint arXiv:2505.13820",
      year: "2025"
    },
    {
      authors: "J Zhao, T Li, D Jiang, S Wu, A Ramirez, TS Lee.",
      title: "Perceptual Inductive Bias Is What You Need Before Contrastive Learning.",
      journal: "Proceedings of the Computer Vision and Pattern Recognition Conference, 9621-9630",
      year: "2025"
    },
    {
      authors: "Y Li, X Li, T Li, W He, Y Kong, L Ren.",
      title: "ViT-Split: Unleashing the Power of Vision Foundation Models via Efficient Splitting Heads.",
      journal: "arXiv preprint arXiv:2506.03433",
      year: "2025"
    },
    {
      authors: "T Li, Z Wen, L Song, J Liu, Z Jing, TS Lee.",
      title: "From Local Cues to Global Percepts: Emergent Gestalt Organization in Self-Supervised Vision Models.",
      journal: "arXiv preprint arXiv:2506.00718",
      year: "2025"
    },
    {
      authors: "Z Wen, T Li, Z Jing, TS Lee.",
      title: "Does resistance to style-transfer equal Global Shape Bias? Measuring network sensitivity to global shape configuration.",
      journal: "arXiv preprint arXiv:2310.07555",
      year: "2023"
    },
    {
      authors: "T Li, G Liu, TS Lee.",
      title: "Learning More by Seeing Less: Line Drawing Pretraining for Efficient, Transferable, and Human-Aligned Vision.",
      journal: "arXiv e-prints, arXiv: 2508.06696",
      year: "2025"
    },
    {
      authors: "T Li, J Zhao, D Jiang, S Wu, A Ramirez, TS Lee.",
      title: "Perceptual Inductive Bias Is What You Need Before Contrastive Learning.",
      journal: "Published in CVPR 2025. arXiv preprint arXiv:2506.01201",
      year: "2025"
    },
    {
      authors: "J Zheng, F Jia, F Li, R Jia, T Li.",
      title: "Intelligence Cubed: A Decentralized Modelverse for Democratizing AI.",
      journal: "Manuscript",
      year: "2025"
    },
    {
      authors: "Z Wen, T Li, TS Lee.",
      title: "Does resistance to style-transfer equal Shape Bias? Evaluating shape bias by distorted shape.",
      journal: "Manuscript",
      year: "2023"
    },
    {
      authors: "J Zhao, T Li, TS Lee.",
      title: "The benefits of Incorporating Shape Priors in Contrastive Learning.",
      journal: "ICLR 2024 Workshop on Representational Alignment",
      year: "2024"
    },
    {
      authors: "Wang W, Niu X, Liang L, Lee T-S.",
      title: "Manifold transform by recurrent cortical circuit enhances robust encoding of familiar stimuli.",
      journal: "PLoS Computational Biology • 21(10)",
      year: "2025"
    },
    {
      authors: "Zhao J, Li T, Jiang D, Wu S, Ramirez A, Lee TS.",
      title: "Perceptual Inductive Bias Is What You Need Before Contrastive Learning.",
      journal: "Proceedings / CVPR, IEEE Computer Society Conference on Computer Vision and Pattern Recognition",
      year: "2025"
    },
    {
      authors: "Lin I, Wang T, Gao S, Tang S, Lee TS.",
      title: "SELF-ATTENTION-BASED CONTEXTUAL MODULATION IMPROVES NEURAL SYSTEM IDENTIFICATION.",
      journal: "13th International Conference on Learning Representations Iclr 2025 • 48563-48584",
      year: "2025"
    },
    {
      authors: "Wang T, Lee TS, Yao H, Hong J, Li Y, Jiang H, Andolina IM, Tang S.",
      title: "Large-scale calcium imaging reveals a systematic V4 map for encoding natural scenes.",
      journal: "Nature Communications • 15(1)",
      year: "2024"
    },
    {
      authors: "Wang T, Yao H, Lee TS, Hong J, Li Y, Jiang H, Andolina IM, Tang S.",
      title: "A large calcium-imaging dataset reveals a systematic V4 organization for natural scenes.",
      journal: "Preprint",
      year: "2023"
    },
    {
      authors: "Terminal-Bench Team.",
      title: "Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces.",
      journal: "ICLR 2026",
      year: "2026"
    },
    {
      authors: "Xuandong Zhao*, Zhewei Kang*, Aosong Feng, Sergey Levine, Dawn Song.",
      title: "Learning to Reason without External Rewards.",
      journal: "ICLR 2026",
      year: "2026"
    },
    {
      authors: "Zhewei Kang*, Xuandong Zhao*, Dawn Song.",
      title: "Scalable Best-of-N Selection for Large Language Models via Self-Certainty.",
      journal: "NeurIPS 2025",
      year: "2025"
    },
    {
      authors: "Jiayi Fu*, Xuandong Zhao*, Chengyuan Yao, Heng Wang, Qi Han, Yanghua Xiao.",
      title: "Reward Shaping to Mitigate Reward Hacking in RLHF.",
      journal: "ICML 2025 R2-FM Workshop",
      year: "2025"
    },
    {
      authors: "Xuandong Zhao*, Will Cai*, Tianneng Shi, David Huang, Licong Lin, Song Mei, Dawn Song.",
      title: "Improving LLM Safety Alignment with Dual-Objective Optimization.",
      journal: "ICML 2025",
      year: "2025"
    },
    {
      authors: "Xuandong Zhao*, Xianjun Yang*, Tianyu Pang, Chao Du, Lei Li, Yu-Xiang Wang, William Yang Wang.",
      title: "Weak-to-Strong Jailbreaking on Large Language Models.",
      journal: "ICML 2025",
      year: "2025"
    },
    {
      authors: "Xuandong Zhao, Sam Gunn, Miranda Christ, Jaiden Fairoze, Andres Fabrega, Nicholas Carlini, Sanjam Garg, Sanghyun Hong, Milad Nasr, Florian Tramer, Somesh Jha, Lei Li, Yu-Xiang Wang, Dawn Song.",
      title: "SoK: Watermarking for AI-Generated Content.",
      journal: "IEEE S&P (Oakland) 2025",
      year: "2025"
    },
    {
      authors: "Sam Gunn*, Xuandong Zhao*, Dawn Song.",
      title: "An Undetectable Watermark for Generative Image Models.",
      journal: "ICLR 2025",
      year: "2025"
    },
    {
      authors: "Xuandong Zhao, Lei Li, Yu-Xiang Wang.",
      title: "Permute-and-Flip: An Optimally Stable and Watermarkable Decoder for LLMs.",
      journal: "ICLR 2025",
      year: "2025"
    },
    {
      authors: "Xuandong Zhao*, Kexun Zhang*, Zihao Su, Saastha Vasan, Ilya Grishchenko, Christopher Kruegel, Giovanni Vigna, Yu-Xiang Wang, Lei Li.",
      title: "Invisible Image Watermarks Are Provably Removable Using Generative AI.",
      journal: "NeurIPS 2024",
      year: "2024"
    },
    {
      authors: "Xuandong Zhao, Prabhanjan Ananth, Lei Li, Yu-Xiang Wang.",
      title: "Provable Robust Watermarking for AI-Generated Text.",
      journal: "ICLR 2024",
      year: "2024"
    },
    {
      authors: "Xuandong Zhao, Yu-Xiang Wang, Lei Li.",
      title: "Protecting Language Generation Models via Invisible Watermarking.",
      journal: "ICML 2023",
      year: "2023"
    },
    {
      authors: "Xuandong Zhao, Siqi Ouyang, Zhiguo Yu, Ming Wu, Lei Li.",
      title: "Pre-trained Language Models Can be Fully Zero-Shot Learners.",
      journal: "ACL 2023, Oral",
      year: "2023"
    },
    {
      authors: "Xuandong Zhao, Lei Li, Yu-Xiang Wang.",
      title: "Provably Confidential Language Modelling.",
      journal: "NAACL 2022, Oral",
      year: "2022"
    },
    {
      authors: "C Chen, Y Liu, S Kreiss, A Alahi.",
      title: "Crowd-robot interaction: Crowd-aware robot navigation with attention-based deep reinforcement learning.",
      journal: "International Conference on Robotics and Automation (ICRA)",
      year: "2019"
    },
    {
      authors: "Y Liu, P Kothari, B van Delft, B Bellot-Gurlet, T Mordan, A Alahi.",
      title: "TTT++: When Does Self-Supervised Test-Time Training Fail or Thrive?",
      journal: "Advances in Neural Information Processing Systems (NeurIPS)",
      year: "2021"
    },
    {
      authors: "Y Liu, Q Yan, A Alahi.",
      title: "Social nce: Contrastive learning of socially-aware motion representations.",
      journal: "International Conference on Computer Vision (ICCV)",
      year: "2021"
    },
    {
      authors: "H Zhao*, Y Liu*, A Alahi, T Lin.",
      title: "On Pitfalls of Test-Time Adaptation.",
      journal: "International Conference on Machine Learning (ICML)",
      year: "2023"
    },
    {
      authors: "Y Liu, R Cadei, J Schweizer, S Bahmani, A Alahi.",
      title: "Towards Robust and Adaptive Motion Forecasting: A Causal Representation Perspective.",
      journal: "Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: "2022"
    },
    {
      authors: "Y Liu, A Xu, Z Chen.",
      title: "Map-based deep imitation learning for obstacle avoidance.",
      journal: "International Conference on Intelligent Robots and Systems (IROS)",
      year: "2018"
    },
    {
      authors: "B Parsaeifard, S Saadatnejad, Y Liu, T Mordan, A Alahi.",
      title: "Learning decoupled representations for human pose forecasting.",
      journal: "International Conference on Computer Vision Workshop (ICCVW)",
      year: "2021"
    },
    {
      authors: "Y Liu, A Alahi, C Russell, M Horn, D Zietlow, B Schölkopf, F Locatello.",
      title: "Causal Triplet: An Open Challenge for Intervention-centric Causal Representation Learning.",
      journal: "Conference on Causal Learning and Reasoning (CLeaR)",
      year: "2023"
    },
    {
      authors: "Y Liu, JI Hamid, A Xie, Y Lee, M Du, C Finn.",
      title: "Bidirectional Decoding: Improving Action Chunking via Guided Test-Time Sampling.",
      journal: "International Conference on Learning Representations (ICLR)",
      year: "2025"
    },
    {
      authors: "P Kothari, D Li, Y Liu, A Alahi.",
      title: "Motion Style Transfer: Modular Low-Rank Adaptation for Deep Motion Forecasting.",
      journal: "Conference on Robot Learning (CoRL)",
      year: "2022"
    },
    {
      authors: "Y Liu, A Alahi.",
      title: "Co-supervised learning: Improving weak-to-strong generalization with hierarchical mixture of experts.",
      journal: "arXiv preprint arXiv:2402.15505",
      year: "2024"
    },
    {
      authors: "Y Liu*, P Kothari*, A Alahi.",
      title: "Collaborative sampling in generative adversarial networks.",
      journal: "Conference on Artificial Intelligence (AAAI)",
      year: "2020"
    },
    {
      authors: "J Wang, K Messaoud, Y Liu, J Gall, A Alahi.",
      title: "Forecast-PEFT: Parameter-efficient fine-tuning for pre-trained motion forecasting models.",
      journal: "arXiv preprint arXiv:2407.19564",
      year: "2024"
    },
    {
      authors: "AS Chen, AM Lessing, Y Liu, C Finn.",
      title: "Curating Demonstrations using Online Experience.",
      journal: "Robotics Science and Systems (RSS)",
      year: "2025"
    },
    {
      authors: "A Rahimi*, PC Luan*, Y Liu*, F Rajič, A Alahi.",
      title: "Sim-to-real causal transfer: A metric learning approach to causally-aware interaction representations.",
      journal: "Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: "2025"
    },
    {
      authors: "M Torne*, A Tang*, Y Liu*, C Finn.",
      title: "Learning Long-Context Diffusion Policies via Past-Token Prediction.",
      journal: "Conference on Robot Learning (CoRL)",
      year: "2025"
    },
    {
      authors: "Y Liu, JH Hours, G Stathopoulos, CN Jones.",
      title: "Real-time distributed algorithms for nonconvex optimal power flow.",
      journal: "American Control Conference (ACC)",
      year: "2017"
    },
    {
      authors: "L Feng, F Nie, Y Liu*, A Alahi*.",
      title: "TAROT: Targeted Data Selection via Optimal Transport.",
      journal: "International Conference on Machine Learning (ICML)",
      year: "2024"
    },
    {
      authors: "Y Xie, C Yu, T Zhu, J Bai, Z Gong, H Soh.",
      title: "Translating natural language to planning goals with large-language models.",
      journal: "arXiv preprint arXiv:2302.05128",
      year: "2023"
    },
    {
      authors: "Y Hu, Q Xie, V Jain, J Francis, J Patrikar, N Keetha, S Kim, Y Xie, T Zhang, et al.",
      title: "Toward general-purpose robots via foundation models: A survey and meta-analysis.",
      journal: "arXiv preprint arXiv:2312.08782",
      year: "2023"
    },
    {
      authors: "Y Xie, Z Xu, MS Kankanhalli, KS Meel, H Soh.",
      title: "Embedding symbolic knowledge into deep networks.",
      journal: "Advances in neural information processing systems 32",
      year: "2019"
    },
    {
      authors: "Z Wan, P Zhang, Y Wang, S Yong, S Stepputtis, K Sycara, Y Xie.",
      title: "Sigma: Siamese mamba network for multi-modal semantic segmentation.",
      journal: "2025 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",
      year: "2025"
    },
    {
      authors: "H Soh, Y Xie, M Chen, D Hsu.",
      title: "Multi-task trust transfer for human–robot interaction.",
      journal: "The International Journal of Robotics Research 39 (2-3), 233-249",
      year: "2020"
    },
    {
      authors: "Y Xie, IP Bodala, DC Ong, D Hsu, H Soh.",
      title: "Robot capability and intention in trust-based decisions across tasks.",
      journal: "2019 14th ACM/IEEE International Conference on Human-Robot Interaction (HRI)",
      year: "2019"
    },
    {
      authors: "C Zhang, S Stepputtis, J Campbell, K Sycara, Y Xie.",
      title: "Hiker-sgg: Hierarchical knowledge enhanced robust scene graph generation.",
      journal: "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition",
      year: "2024"
    },
    {
      authors: "C Zhang, S Stepputtis, K Sycara, Y Xie.",
      title: "Dual prototype evolving for test-time generalization of vision-language models.",
      journal: "Advances in Neural Information Processing Systems 37, 32111-32136",
      year: "2024"
    },
    {
      authors: "Y Xie, F Zhou, H Soh.",
      title: "Embedding symbolic temporal knowledge into deep sequential models.",
      journal: "2021 IEEE International Conference on Robotics and Automation (ICRA)",
      year: "2021"
    },
    {
      authors: "S Li, S Bhagat, J Campbell, Y Xie, W Kim, K Sycara, S Stepputtis.",
      title: "Shapegrasp: Zero-shot task-oriented grasping with large language models through geometric decomposition.",
      journal: "2024 IEEE/RSJ International Conference on Intelligent Robots and Systems",
      year: "2024"
    },
    {
      authors: "C Zhang, Z Wan, Z Kan, MQ Ma, S Stepputtis, D Ramanan, et al.",
      title: "Self-correcting decoding with generative feedback for mitigating hallucinations in large vision-language models.",
      journal: "arXiv preprint arXiv:2502.06130",
      year: "2025"
    },
    {
      authors: "B Li, Z Li, Q Du, J Luo, W Wang, Y Xie, S Stepputtis, C Wang, K Sycara, et al.",
      title: "LogiCity: Advancing neuro-symbolic ai with abstract urban simulation.",
      journal: "Advances in Neural Information Processing Systems 37, 69840-69864",
      year: "2024"
    },
    {
      authors: "S Stepputtis, JP Campbell, Y Xie, Z Qi, W Zhang, R Wang, S Rangreji, et al.",
      title: "Long-horizon dialogue understanding for role identification in the game of avalon with large language models.",
      journal: "Findings of the Association for Computational Linguistics: EMNLP 2023",
      year: "2023"
    },
    {
      authors: "C Zhang, K Ma, T Fang, W Yu, H Zhang, Z Zhang, Y Xie, K Sycara, H Mi, et al.",
      title: "VScan: Rethinking Visual Token Reduction for Efficient Large Vision-Language Models.",
      journal: "arXiv preprint arXiv:2505.22654",
      year: "2025"
    },
    {
      authors: "C Zhang, S Stepputtis, K Sycara, Y Xie.",
      title: "Enhancing vision-language few-shot adaptation with negative learning.",
      journal: "2025 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",
      year: "2025"
    },
    {
      authors: "S Bhagat, S Li, J Campbell, Y Xie, K Sycara, S Stepputtis.",
      title: "Let Me Help You! Neuro-Symbolic Short-Context Action Anticipation.",
      journal: "IEEE Robotics and Automation Letters 9 (11), 9749-9756",
      year: "2024"
    },
    {
      authors: "Z Wan, C Zhang, S Yong, MQ Ma, S Stepputtis, LP Morency, D Ramanan, et al.",
      title: "ONLY: One-Layer Intervention Sufficiently Mitigates Hallucinations in Large Vision-Language Models.",
      journal: "arXiv preprint arXiv:2507.00898",
      year: "2025"
    },
    {
      authors: "Y Xie, Z Xu, K Meel, MS Kankanhalli, H Soh.",
      title: "Semantically-regularized logic graph embeddings.",
      journal: "arXiv preprint arXiv:1909.01161",
      year: "2019"
    },
    {
      authors: "Z Huang, H Wang, J Ye, J Niu, C Tu, Y Yang, S Du, Z Deng, L Gu, J He.",
      title: "Revisiting nnu-net for iterative pseudo labeling and efficient sliding window inference.",
      journal: "MICCAI Challenge on Fast and Low-Resource Semi-supervised Abdominal Organ",
      year: "2022"
    },
    {
      authors: "B Ren, Y Li, N Mehta, R Timofte, H Yu, C Wan, Y Hong, B Han, Z Wu, et al.",
      title: "The ninth NTIRE efficient super-resolution challenge report.",
      journal: "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern",
      year: "2023"
    },
    {
      authors: "Y Li, Q Lao, Q Kang, Z Jiang, S Du, S Zhang, K Li.",
      title: "Self-supervised anomaly detection, staging and segmentation for retinal images.",
      journal: "Medical Image Analysis 87, 102805",
      year: "2023"
    },
    {
      authors: "S Du, X Wang, Y Lu, Y Zhou, S Zhang, A Yuille, K Li, Z Zhou.",
      title: "Boosting dermatoscopic lesion segmentation via diffusion models with visual and textual prompts.",
      journal: "2024 IEEE International Symposium on Biomedical Imaging",
      year: "2023"
    },
    {
      authors: "S Du, Q Lao, Q Kang, Y Li, Z Jiang, Y Zhao, K Li.",
      title: "Distilling knowledge from topological representations for pathological complete response prediction.",
      journal: "International Conference on Medical Image Computing",
      year: "2022"
    },
    {
      authors: "H Wang, Z Huang, J Ye, C Tu, Y Yang, S Du, Z Deng, C Ma, J Niu, J He.",
      title: "An evaluation of u-net in renal structure segmentation.",
      journal: "arXiv preprint arXiv:2209.02247",
      year: "2022"
    },
    {
      authors: "J Li, L Liang, S Du, S Tang, H Lai, C Kingsford.",
      title: "ARCADE: Controllable Codon Design from Foundation Models via Activation Engineering.",
      journal: "bioRxiv",
      year: "2025"
    },
    {
      authors: "S Du, L Liang, J Li, C Kingsford.",
      title: "CodonMoE: DNA Language Models for mRNA Analyses.",
      journal: "arXiv preprint arXiv:2508.04739",
      year: "2025"
    },
    {
      authors: "(α-β) Ratip Emin Berker, Vincent Conitzer, Eden Hartman, Jiayuan Liu, Caspar Oesterheld.",
      title: "How Many Votes Is a Lie Worth? Measuring Strategyproofness through Resource Augmentation.",
      journal: "Manuscript",
      year: "2026"
    },
    {
      authors: "Jiayuan Liu, Mingyu Guo, Jiarui Gan, Vincent Conitzer.",
      title: "Truthful and Cost-Minimizing Model Routing in Graph-Based Agentic Workflows.",
      journal: "Manuscript",
      year: "2025"
    },
    {
      authors: "Jiayuan Liu, Barry Wang, Jiarui Gan, Tonghan Wang, Leon Xie, Mingyu Guo, Vincent Conitzer.",
      title: "Incentive-Aware Multi-Fidelity Optimization for Generative Advertising in Large Language Models.",
      journal: "Manuscript",
      year: "2025"
    },
    {
      authors: "Jiayuan Liu, Mingyu Guo, Vincent Conitzer.",
      title: "An Interpretable Automated Mechanism Design Framework with Large Language Models.",
      journal: "EC 2025 Workshop on Information Economics x LLMs",
      year: "2025"
    },
    {
      authors: "Jiayuan Liu, Siwei Wang, Zhixuan Fang.",
      title: "Efficient and Optimal Policy Gradient Algorithm for Corrupted Multi-armed Bandits.",
      journal: "Published in the twenty-fourth International Conference on Autonomous Agents and Multiagent Systems (AAMAS)",
      year: "2025"
    },
    {
      authors: "Mingyu Guo, Jiayuan Liu, Vincent Conitzer.",
      title: "Extending Myerson’s Optimal Auctions to Correlated Bidders via Neural Network Interpolation.",
      journal: "Published in the eighth International Conference on Algorithmic Decision Theory (ADT)",
      year: "2024"
    },
    {
      authors: "Jiayuan Liu, Shuran Zheng, Yiling Chen.",
      title: "Cost-Efficient Information Aggregation in Hierarchical Information Structure.",
      journal: "Manuscript",
      year: "2023"
    },
    {
      authors: "Jiayuan Liu, Canhui Chen, Lulu Zhou, Zhixuan Fang.",
      title: "Real-Time Recursive Routing in Payment Channel Network: A Bidding-based Design.",
      journal: "Published in the twentieth International Symposium on Modeling and Optimization in Mobile, Ad Hoc and Wireless Networks (WiOpt)",
      year: "2022"
    },
    {
      authors: "Heng Dong, Tonghan Wang, Jiayuan Liu, Chongjie Zhang.",
      title: "Low-Rank Modular Reinforcement Learning via Muscle Synergy.",
      journal: "Published in the thirty-sixth Conference on Neural Information Processing Systems (NeurIPS)",
      year: "2022"
    },
    {
      authors: "Heng Dong, Tonghan Wang, Jiayuan Liu, Chi Han, Chongjie Zhang.",
      title: "Birds of a Feather Flock Together: A Close Look at Cooperation Emergence via Multi-Agent RL.",
      journal: "Manuscript",
      year: "2022"
    },
    {
      authors: "Q Wu, Y Xu, T Xiao, Y Xiao, Y Li, T Wang, Y Zhang, S Zhong, Y Zhang, et al.",
      title: "Surveying attitudinal alignment between large language models vs. humans towards 17 sustainable development goals.",
      journal: "arXiv preprint arXiv:2404.13885",
      year: "2024"
    },
    {
      authors: "W Rahman, MK Hasan, S Lee, A Zadeh, C Mao, LP Morency, E Hoque.",
      title: "Integrating multimodal information in large pretrained transformers.",
      journal: "Proceedings of the conference. Association for Computational Linguistics",
      year: "2020"
    },
    {
      authors: "H Zhou, F Liu, B Gu, X Zou, J Huang, J Wu, Y Li, SS Chen, P Zhou, J Liu, et al.",
      title: "A survey of large language models in medicine: Progress, application, and challenge.",
      journal: "arXiv preprint arXiv:2311.05112",
      year: "2023"
    },
    {
      authors: "F Liu, H Zhou, B Gu, X Zou, J Huang, J Wu, Y Li, SS Chen, Y Hua, P Zhou, et al.",
      title: "Application of large language models in medicine.",
      journal: "Nature Reviews Bioengineering, 1-20",
      year: "2025"
    },
    {
      authors: "A Zadeh, C Mao, K Shi, Y Zhang, PP Liang, S Poria, LP Morency.",
      title: "Factorized multimodal transformer for multimodal sequential learning.",
      journal: "arXiv preprint arXiv:1911.09826",
      year: "2019"
    },
    {
      authors: "R Meng, C Mao, RR Choudhury.",
      title: "Driving analytics: Will it be OBDs or smartphones?",
      journal: "Zendrive Whitepaper",
      year: "2014"
    },
    {
      authors: "DDK Lee, ZZQ Cheng, C Mao, E Manzoor.",
      title: "Guided diverse concept miner (GDCM): Uncovering relevant constructs for managerial insights from text.",
      journal: "Information Systems Research 36 (1), 370-393",
      year: "2025"
    },
    {
      authors: "JR Hauser, Z Li, C Mao.",
      title: "Artificial Intelligence and user-generated data are transforming how firms come to understand customer needs.",
      journal: "Artificial Intelligence in Marketing, 147-167",
      year: "2023"
    },
    {
      authors: "A Timoshenko, C Mao, JR Hauser.",
      title: "Can Large Language Models Extract Customer Needs as well as Professional Analysts?",
      journal: "arXiv preprint arXiv:2503.01870",
      year: "2025"
    },
    {
      authors: "T Yang, Z Lu, JR Jin, JX Dou.",
      title: "Apple at the Crossroads of AI: A Marbella AI Case Study.",
      journal: "ResearchGate",
      year: "2025"
    },
    {
      authors: "JX Dou.",
      title: "Coreset Optimization by Memory Constraints, For Memory Constraints.",
      journal: "ResearchGate",
      year: "2024"
    },
    {
      authors: "JX Dou, R Bao, W Wei, S Zhang, IY Hu, Y Zhang, H Mao.",
      title: "Clinical Decision System using Machine Learning and Deep Learning: a Survey.",
      journal: "ResearchGate",
      year: "2024"
    },
    {
      authors: "D Spellman, JX Dou, AF Wu, S Jo, YC Chiu, Y Huang.",
      title: "Retrieving Knowledge of Molecular Regulatory Mechanisms from PubMed Titles via an Event Extraction Approach.",
      journal: "2023 IEEE EMBS International Conference on Biomedical and Health Informatics",
      year: "2023"
    },
    {
      authors: "S Hegselmann, H Zhou, Y Zhou, J Chien, S Nagaraj, N Hulkund, S Bhave, et al.",
      title: "Recent Advances, Applications and Open Challenges in Machine Learning for Health: Reflections from Research Roundtables at ML4H 2022 Symposium.",
      journal: "Proceedings of Machine Learning Research",
      year: "2023"
    },
    {
      authors: "JX Dou, H Mao, R Bao, PP Liang, X Tan, S Zhang, M Jia, P Zhou, ZH Mao.",
      title: "The Measurement of Knowledge in Knowledge Graphs.",
      journal: "The AAAI 2023 Workshop on Representation Learning for Responsible Human",
      year: "2023"
    },
    {
      authors: "JX Dou, R Bao, S Song, S Yang, Y Zhang, PP Liang, H Mao.",
      title: "Demystify the Gravity Well in the Optimization Landscape (Student Abstract).",
      journal: "AAAI",
      year: "2023"
    },
    {
      authors: "JX Dou, M Jia, N Zaslavsky, M Ebeid, R Bao, S Zhang, K Ni, PP Liang, et al.",
      title: "Learning More Effective Cell Representations Efficiently.",
      journal: "36th Conference on Neural Information Processing Systems (NeurIPS 2022) LMRL",
      year: "2022"
    },
    {
      authors: "H Mao, H Liu, JX Dou, BV Benos.",
      title: "Towards Cross-Modal Causal Structure and Representation Learning.",
      journal: "Machine Learning for Health 2022",
      year: "2022"
    },
    {
      authors: "JX Dou, M Bhattacharya, E Ormond, Y Wang, R Thomas, A Wozniak, et al.",
      title: "A Machine Learning Approach to Lung Cancer Treatment Trajectory Analysis after Immunotherapy.",
      journal: "ResearchGate",
      year: "2022"
    },
    {
      authors: "S Paudel, BE Warner, R Wang, J Adams-Haduch, AS Reznik, J Dou, et al.",
      title: "Serologic Profiling Using an Epstein-Barr Virus Mammalian Expression Library Identifies EBNA1 IgA as a Prediagnostic Marker for Nasopharyngeal Carcinoma.",
      journal: "Clinical Cancer Research, OF1-OF10",
      year: "2022"
    },
    {
      authors: "JX Dou, M Jia, R Bao, H Mao.",
      title: "Enhance ‘Similar’ Cell Identification Through Optimal Transport.",
      journal: "ResearchGate",
      year: "2022"
    },
    {
      authors: "J Xiaotian Dou, A Qingkai Pan, R Bao, HH Mao, L Luo, ZH Mao.",
      title: "Sampling Through the Lens of Sequential Decision Making.",
      journal: "arXiv e-prints, arXiv: 2208.08056",
      year: "2022"
    },
    {
      authors: "D Spellman, JX Dou, AF Wu, Y Huang.",
      title: "Retrieving Knowledge of Molecular Mechanisms from Literature Titles via an Event Extraction Approach.",
      journal: "ResearchGate",
      year: "2022"
    },
    {
      authors: "H Mao*, M Jia*, JX Dou, H Zhang, PV Benos.",
      title: "COEM: Cross-Modal Embedding for MetaCell Identification.",
      journal: "ICML Workshop on Computational Biology",
      year: "2022"
    },
    {
      authors: "JX Dou, L Luo, W Wei, R Bao, Y Zhang.",
      title: "Ranking Based Objectives with Wasserstein Distance.",
      journal: "ResearchGate",
      year: "2022"
    },
    {
      authors: "H Mao, JX Dou.",
      title: "Decomposable Sparse Tensor on Tensor Regression.",
      journal: "arXiv preprint arXiv:2212.05024",
      year: "2022"
    },
    {
      authors: "JX Dou, L Luo, RM Yang.",
      title: "An Optimal Transport Approach to Deep Metric Learning (Student Abstract).",
      journal: "AAAI-22",
      year: "2022"
    },
    {
      authors: "Jason Xiaotian Dou, Wenxin Wei, Adam Zou, Tingyi Xiao.",
      title: "Online Review's Impact on Casino Revenue Management.",
      journal: "poms-hk-2018 10",
      year: "2018"
    },
    {
      authors: "Armeet Jatyani*, Jiayun Wang*, Aditi Chandrashekar, Zihui Wu, Miguel Liu-Schiaffini, Bahareh Tolooshams, and 1 more author.",
      title: "A Unified Model for Compressed Sensing MRI Across Undersampling Patterns.",
      journal: "Conference on Computer Vision and Pattern Recognition (CVPR) Proceedings",
      year: "2025"
    },
    {
      authors: "Duy Nguyen*, Jiayun Wang*, Jiachen Yao*, Julius Berner, and Anima Anandkumar.",
      title: "Flow-Guided Neural Operator for Self-Supervised Learning on Time Series Data.",
      journal: "NeurIPS Workshop",
      year: "2025"
    },
    {
      authors: "Jin Yao, Hao Gu, Xuweiyi Chen, Jiayun Wang, and Zezhou Cheng.",
      title: "Open Vocabulary Monocular 3D Object Detection.",
      journal: "2025 International Conference on 3D Vision (3DV)",
      year: "2025"
    },
    {
      authors: "Jiayun Wang, Yubei Chen, and Stella Yu.",
      title: "Pose-Aware Self-Supervised Learning with Viewpoint Trajectory Regularization.",
      journal: "European Conference on Computer Vision (ECCV)",
      year: "2024"
    },
    {
      authors: "Chun-Hsiao Yeh, Jiayun Wang, Andrew D. Graham, Andrea J. Liu, Bo Tan, Yubei Chen, and 2 more authors.",
      title: "Insight: A Multi-Modal Diagnostic Pipeline using LLMs for Ocular Surface Disease Diagnosis.",
      journal: "Medical Image Computing and Computer-Assisted Intervention (MICCAI) Proceedings",
      year: "2024"
    },
    {
      authors: "Arushi Gupta, Rafal Kocielnik, Jiayun Wang, Firdavs Nasriddinov, Cherine Yang, Elyssa Wong, and 2 more authors.",
      title: "Multi-Modal Self-Supervised Learning for Surgical Feedback Effectiveness Assessment.",
      journal: "Machine Learning for Health, PMLR",
      year: "2024"
    },
    {
      authors: "Andrew D Graham, Tejasvi Kothapalli, Jiayun Wang, Jennifer Ding, Vivien Tse, Penny Asbell, and 2 more authors.",
      title: "A Machine Learning Approach to Predicting Dry Eye-Related Signs, Symptoms and Diagnoses.",
      journal: "Heliyon",
      year: "2024"
    },
    {
      authors: "Andrew D. Graham, Jiayun Wang, Tejasvi Kothapalli, Jennifer Ding, Helen Tasho, Alisa Molina, and 4 more authors.",
      title: "Artificial Intelligence Models Utilize Lifestyle Factors to Predict Dry Eye Related Outcomes.",
      journal: "Nature Scientific Reports",
      year: "2024"
    },
    {
      authors: "Shi Feng, Wei Chen.",
      title: "Combinatorial Causal Bandits.",
      journal: "Proceedings of the 37th AAAI Conference on Artificial Intelligence (AAAI)",
      year: "2023"
    },
    {
      authors: "Shi Feng, Fang-Yi Yu, Yiling Chen.",
      title: "Peer Prediction for Learning Agents.",
      journal: "Proceedings of the 36th Conference on Neural Information Processing Systems (NeurIPS)",
      year: "2022"
    },
    {
      authors: "Shi Feng, Wei Chen.",
      title: "Causal Inference for Influence Propagation - Identifiability of the Independent Cascade Model.",
      journal: "Proceedings of the 10th International Conference on Computational Social Networks (CSoNet)",
      year: "2021"
    },
    {
      authors: "Shi Feng*, Nuoya Xiong*, Wei Chen.",
      title: "Combinatorial Causal Bandits with Unknown Graph Skeleton.",
      journal: "In submission",
      year: "2025"
    },
    {
      authors: "K Liu, Y Dou, Y Zhao, X Ding, X Hu, R Zhang, K Ding, C Chen, H Peng, et al.",
      title: "Bond: Benchmarking unsupervised outlier node detection on static attributed graphs.",
      journal: "Advances in Neural Information Processing Systems 35, 27021-27035",
      year: "2022"
    },
    {
      authors: "Z Zhao, X Ding, BA Prakash.",
      title: "Pinnsformer: A transformer-based framework for physics-informed neural networks.",
      journal: "arXiv preprint arXiv:2307.11833",
      year: "2023"
    },
    {
      authors: "K Liu, Y Dou, X Ding, X Hu, R Zhang, H Peng, L Sun, PS Yu.",
      title: "Pygod: A python library for graph outlier detection.",
      journal: "Journal of Machine Learning Research 25 (141), 1-9",
      year: "2024"
    },
    {
      authors: "Y Li, X Shen, X Yao, X Ding, Y Miao, R Krishnan, R Padman.",
      title: "Beyond single-turn: A survey on multi-turn interactions with large language models.",
      journal: "arXiv preprint arXiv:2504.04717",
      year: "2025"
    },
    {
      authors: "X Ding, L Zhao, L Akoglu.",
      title: "Hyperparameter sensitivity in deep outlier detection: Analysis and a scalable hyper-ensemble solution.",
      journal: "Thirty-sixth Conference on Neural Information Processing Systems",
      year: "2022"
    },
    {
      authors: "Y Zhao, X Wang, C Cheng, X Ding.",
      title: "Combining machine learning models using combo library.",
      journal: "Proceedings of the AAAI Conference on Artificial Intelligence 34 (09), 13648 ...",
      year: "2020"
    },
    {
      authors: "L Zhao, X Ding, L Yu, L Akoglu.",
      title: "Improving and unifying discrete&continuous-time discrete denoising diffusion.",
      journal: "CoRR",
      year: "2024"
    },
    {
      authors: "L Zhao, X Ding, L Akoglu.",
      title: "Pard: Permutation-invariant autoregressive diffusion for graph generation.",
      journal: "Advances in Neural Information Processing Systems 37, 7156-7184",
      year: "2024"
    },
    {
      authors: "K Liu, Y Dou, Y Zhao, X Ding, X Hu, R Zhang, K Ding, C Chen, H Peng, et al.",
      title: "Benchmarking node outlier detection on graphs.",
      journal: "arXiv preprint arXiv:2206.10071",
      year: "2022"
    },
    {
      authors: "Y Qin, Y Zhang, Y Nian, X Ding, Y Zhao.",
      title: "Metaood: Automatic selection of ood detection models.",
      journal: "arXiv preprint arXiv:2410.03074",
      year: "2024"
    },
    {
      authors: "Y Zhao, X Ding, J Yang, H Bai.",
      title: "SUOD: toward scalable unsupervised outlier detection.",
      journal: "arXiv preprint arXiv:2002.03222",
      year: "2020"
    },
    {
      authors: "X Ding, Y Zhao, L Akoglu.",
      title: "Fast unsupervised deep outlier model selection with hypernetworks.",
      journal: "Proceedings of the 30th ACM SIGKDD Conference on Knowledge Discovery and ...",
      year: "2024"
    },
    {
      authors: "X Ding, N Seleznev, S Kumar, CB Bruss, L Akoglu.",
      title: "From Detection to Action: a Human-in-the-loop Toolkit for Anomaly Reasoning and Management.",
      journal: "Proceedings of the Fourth ACM International Conference on AI in Finance, 279-287",
      year: "2023"
    },
    {
      authors: "Y Li, Y Miao, X Ding, R Krishnan, R Padman.",
      title: "Firm or fickle? evaluating large language models consistency in sequential interactions.",
      journal: "arXiv preprint arXiv:2503.22353",
      year: "2025"
    },
    {
      authors: "X Ding, A Mittal, A Gopal.",
      title: "DELPHYNE: A Pre-Trained Model for General and Financial Time Series.",
      journal: "arXiv preprint arXiv:2506.06288",
      year: "2025"
    },
    {
      authors: "Z Yue, X Ding, J Yang, B Haoping.",
      title: "SUOD: Toward Scalable Unsupervised Outlier Detection.",
      journal: "arXiv preprint arXiv:2002.03222",
      year: "2020"
    },
    {
      authors: "Z Zhao, X Ding, G Atulya, A Davis, A Singh.",
      title: "Physics informed machine learning with misspecified priors:an analysis of turning operation in lathe machines.",
      journal: "AAAI 2022 Workshop on AI for Design and Manufacturing (ADAM)",
      year: "2022"
    },
    {
      authors: "X Ding, X Huang, M Ju, L Collins, Y Liu, L Akoglu, N Shah, T Zhao.",
      title: "Hierarchical Token Prepending: Enhancing Information Flow in Decoder-based LLM Embeddings.",
      journal: "arXiv preprint arXiv:2511.14868",
      year: "2025"
    },
    {
      authors: "X Ding, H Wen, S Klütterman, L Akoglu.",
      title: "From Zero to Hero: Advancing Zero-Shot Foundation Models for Tabular Outlier Detection.",
      journal: "arXiv preprint arXiv:2602.03018",
      year: "2026"
    },
    {
      authors: "X Huang, X Ding, M Ju, Y Liu, N Shah, T Zhao.",
      title: "Threshold Differential Attention for Sink-Free, Ultra-Sparse, and Non-Dispersive Language Modeling.",
      journal: "arXiv preprint arXiv:2601.12145",
      year: "2026"
    },
    {
      authors: "I Lin, T Wang, S Gao, S Tang, TS Lee.",
      title: "Incremental Learning and Self-Attention Mechanisms Improve Neural System Identification.",
      journal: "arXiv e-prints, arXiv: 2406.07843",
      year: "2024"
    },
    {
      authors: "Shang Gao, Tianye Wang, Xie Jue, Daniel Wang, Tai Sing Lee, Shiming Tang.",
      title: "A Large Dataset of Macaque V1 Responses to Natural Images Revealed Complexity in V1 Neural Codes.",
      journal: "Computational and Systems Neuroscience (Cosyne)",
      year: "2024"
    },
    {
      authors: "Linfeng Zhao, Willie McClinton*, Aidan Curtis*, Nishanth Kumar, Tom Silver, Leslie Kaelbling, Lawson L.S. Wong.",
      title: "Seeing is Believing: Belief-Space Planning with Foundation Models as Uncertainty Estimators.",
      journal: "arXiv preprint",
      year: "2025"
    },
    {
      authors: "Nishanth Kumar*, Tom Silver*, Willie McClinton, Linfeng Zhao, Stephen Proul, Tomás Lozano-Pérez, Leslie Kaelbling, Jennifer Barry.",
      title: "Practice Makes Perfect: Planning to Learn Skill Parameter Policies.",
      journal: "Robotics: Science and Systems (RSS)",
      year: "2024"
    },
    {
      authors: "Linfeng Zhao*, Hongyu Li*, Taskin Padir, Huaizu Jiang†, Lawson L.S. Wong†.",
      title: "E(2)-Equivariant Graph Planning for Navigation.",
      journal: "IEEE RA-L / IROS 2024 (Oral)",
      year: "2024"
    },
    {
      authors: "Linfeng Zhao, Xupeng Zhu*, Lingzhi Kong*, Robin Walters, Lawson L.S. Wong.",
      title: "Integrating Symmetry into Differentiable Planning with Steerable Convolutions.",
      journal: "International Conference on Learning Representations (ICLR)",
      year: "2023"
    },
    {
      authors: "Linfeng Zhao, Huazhe Xu, Lawson L.S. Wong.",
      title: "Scaling up and Stabilizing Differentiable Planning with Implicit Differentiation.",
      journal: "International Conference on Learning Representations (ICLR)",
      year: "2023"
    },
    {
      authors: "Linfeng Zhao, Lingzhi Kong, Robin Walters, Lawson L.S. Wong.",
      title: "Toward Compositional Generalization in Object-Oriented World Modeling.",
      journal: "International Conference on Machine Learning (ICML, Long Presentation, top 2%)",
      year: "2022"
    },
    {
      authors: "Fan Xie*, Alexander Chowdhury*, M. Clara De Paolis Kaluza, Linfeng Zhao, Lawson L.S. Wong, Rose Yu.",
      title: "Deep Imitation Learning for Bimanual Robotic Manipulation.",
      journal: "Advances in Neural Information Processing Systems (NeurIPS)",
      year: "2020"
    }
  ];

  return (
    <section id="research" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C41230]/5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-zinc-900">Selected Publications from Research Fellows</h2>
          <div className="h-1 w-20 bg-[#C41230]"></div>
        </div>

        <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar overflow-x-hidden">
          {publications.map((pub, i) => (
            <div key={i} className="group border-b border-zinc-100 pb-6 hover:bg-zinc-50 p-4 -mx-4 rounded-lg transition-colors">
              <p className="text-zinc-800 text-lg font-medium mb-1 group-hover:text-[#C41230] transition-colors leading-relaxed">
                {pub.title}
              </p>
              <div className="text-zinc-500 text-sm leading-relaxed">
                <span className="font-medium text-zinc-700">{pub.authors}</span>
                <span className="mx-2 text-zinc-300">|</span>
                <span className="italic">{pub.journal}</span>
                <span className="mx-2 text-zinc-300">|</span>
                <span>{pub.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
