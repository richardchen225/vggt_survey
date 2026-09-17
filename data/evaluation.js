window.VGGT_EVALUATION = [
  {
    "number": 5,
    "title": "Evaluation for geometric state strengthening",
    "common": "Common geometry metrics, selected by task: Pose: relative rotation / translation accuracy (RRA / RTA), pose area under the curve (AUC). Depth: absolute relative error (AbsRel), root mean squared error (RMSE), threshold accuracy at 1.25 (δ₁). Surface: Chamfer distance (CD), accuracy, completeness.",
    "sections": [
      {
        "title": "Diverse-input 3D reconstruction",
        "rows": [
          {
            "task": "Geometry with diverse inputs",
            "datasets": "Pose: CO3Dv2\nDepth: NYU-v2\nSurface: DTU\nMultimodal: ViViD++\nEvent: MVSEC\nPanoramic: Replica360-2K",
            "metrics": "Pose / depth / surface metrics for the supplied inputs",
            "conditions": "Input modality / sparsity / noise;\ncamera model / calibration;\nview count / metric scale;\nbackbone adaptation",
            "citations": [
              "reizenstein2021co3d",
              "silberman2012nyuv2",
              "jensen2014dtu",
              "lee2022vivid",
              "zhu2018mvsec",
              "reyarea2022monodepth"
            ]
          }
        ]
      },
      {
        "title": "Efficient 3D reconstruction",
        "rows": [
          {
            "task": "Geometry quality and computation",
            "datasets": "Pose: CO3Dv2\nGeometry: ETH3D; ScanNet",
            "metrics": "Geometry metrics;\nFPS / latency;\npeak GPU memory;\nFLOPs / bits per weight",
            "conditions": "Views / resolution / batch size;\nprecision / token budget;\narchitecture / hardware;\ntiming scope",
            "citations": [
              "reizenstein2021co3d",
              "schops2017eth3d",
              "dai2017scannet"
            ]
          }
        ]
      },
      {
        "title": "Robust 3D reconstruction",
        "rows": [
          {
            "task": "Geometry under adverse conditions or outlier views",
            "datasets": "Adverse conditions: Dark3R; FIORD\nOutlier views: ETH3D",
            "metrics": "Depth: AbsRel / RMSE(log) / δ₁;\npose: RRA / RTA / AUC;\nrotation / translation-direction error",
            "conditions": "Environment / degradation severity;\ndistractor ratio / view overlap;\npaired clean and degraded inputs;\nadaptation",
            "citations": [
              "guo2026dark3r",
              "gunes2025fiord",
              "schops2017eth3d"
            ]
          }
        ]
      },
      {
        "title": "Streaming and long-sequence 3D reconstruction",
        "rows": [
          {
            "task": "Trajectory drift, retained geometry, and resource use",
            "datasets": "Trajectory: TUM RGB-D; KITTI Odometry\nLong sequences: TartanAir; Waymo",
            "metrics": "Geometry metrics;\nATE / RPE;\ntranslation / rotation drift;\nFPS / peak GPU memory",
            "conditions": "Offline / causal processing;\nsequence / window length;\nchunk overlap / stride;\nmemory budget / warm-up;\nalignment / loop closure / revisits",
            "citations": [
              "sturm2012tumrgbd",
              "geiger2012kitti",
              "wang2020tartanair",
              "sun2020waymo"
            ]
          }
        ]
      },
      {
        "title": "Dynamic 3D reconstruction",
        "rows": [
          {
            "task": "Dynamic geometry, motion, and segmentation",
            "datasets": "Camera / depth: Bonn\nMotion: PointOdyssey; Kubric\nMasks / views: DAVIS; DyCheck",
            "metrics": "Geometry metrics / ATE;\n3D endpoint error;\nmask IoU / boundary F-score",
            "conditions": "Static–dynamic split;\nframe span / camera motion;\nmask availability;\nscale / temporal alignment",
            "citations": [
              "palazzolo2019refusion",
              "zheng2023pointodyssey",
              "greff2022kubric",
              "perazzi2016davis",
              "gao2022dycheck"
            ]
          }
        ]
      }
    ],
    "note": "ATE: absolute trajectory error; RPE: relative pose error; RMSE(log): RMSE of log-depth; FPS: frames per second; FLOPs: floating-point operations; IoU: intersection over union."
  },
  {
    "number": 6,
    "title": "Evaluation for downstream geometric-state reuse",
    "common": "",
    "sections": [
      {
        "title": "NVS",
        "rows": [
          {
            "task": "Static-scene NVS",
            "datasets": "RealEstate10K; DL3DV-10K\nCO3Dv2; Mip-NeRF 360",
            "metrics": "PSNR / SSIM / LPIPS",
            "conditions": "Input / target views;\ncameras / resolution;\nscene-specific optimization",
            "citations": [
              "zhou2018stereomagnification",
              "ling2024dl3dv",
              "reizenstein2021co3d",
              "barron2022mipnerf360"
            ]
          },
          {
            "task": "Dynamic-scene NVS",
            "datasets": "DAVIS; DyCheck; HyperNeRF",
            "metrics": "PSNR / SSIM / LPIPS",
            "conditions": "View / temporal split;\nmasks / dynamic content;\nscene-specific optimization",
            "citations": [
              "perazzi2016davis",
              "gao2022dycheck",
              "park2021hypernerf"
            ]
          }
        ]
      },
      {
        "title": "SLAM",
        "rows": [
          {
            "task": "Tracking and mapping",
            "datasets": "TUM RGB-D; EuRoC",
            "metrics": "Trajectory: ATE / RPE;\nmap: accuracy / completeness",
            "conditions": "Trajectory / alignment;\nloop closure / map retention",
            "citations": [
              "sturm2012tumrgbd",
              "burri2016euroc"
            ]
          },
          {
            "task": "Visual odometry",
            "datasets": "KITTI; TUM-VI",
            "metrics": "ATE / RPE;\ntranslation / rotation drift",
            "conditions": "Trajectory length;\nscale / pose alignment",
            "citations": [
              "geiger2012kitti",
              "schubert2018tumvi"
            ]
          },
          {
            "task": "Relocalization",
            "datasets": "Cambridge Landmarks; LaMAR",
            "metrics": "Translation / rotation error;\nlocalization recall",
            "conditions": "Query / reference split;\nmap / pose thresholds",
            "citations": [
              "kendall2015posenet",
              "sarlin2022lamar"
            ]
          },
          {
            "task": "Place recognition",
            "datasets": "NCLT; Oxford RobotCar",
            "metrics": "Recall@K",
            "conditions": "Query / retrieval database;\nmatching threshold / K",
            "citations": [
              "carlevaris2016nclt",
              "maddern2017robotcar"
            ]
          }
        ]
      },
      {
        "title": "Semantic 3D scene understanding",
        "rows": [
          {
            "task": "3D semantic prediction and mapping",
            "datasets": "ScanNet200; ARKitScenes",
            "metrics": "Prediction: mIoU / AP",
            "conditions": "Class vocabulary;\n2D–3D label mapping",
            "citations": [
              "rozenberszki2022scannet200",
              "baruch2021arkitscenes"
            ]
          },
          {
            "task": "3D semantic prediction and mapping",
            "datasets": "SPair-71k",
            "metrics": "Correspondence: PCK",
            "conditions": "View split;\nkeypoint threshold",
            "citations": [
              "min2019spair71k"
            ]
          },
          {
            "task": "Language-based 3D scene reasoning",
            "datasets": "MVRefer; HyperNeRF",
            "metrics": "Grounding accuracy\nat IoU 0.25",
            "conditions": "Language queries;\nview / temporal split;\ngrounding threshold",
            "citations": [
              "mvggt",
              "park2021hypernerf"
            ]
          }
        ]
      },
      {
        "title": "Geometry-aware world models",
        "rows": [
          {
            "task": "Video-depth prediction",
            "datasets": "Cityscapes; TartanAir",
            "metrics": "AbsRel / RMSE",
            "conditions": "Prediction horizon;\ncamera conditioning",
            "citations": [
              "cordts2016cityscapes",
              "wang2020tartanair"
            ]
          },
          {
            "task": "Video generation",
            "datasets": "HoIHQ; Scene-Decoupled-Video-dataset",
            "metrics": "Visual: PSNR / SSIM / LPIPS / FVD;\ngeometry: reprojection error / PCK",
            "conditions": "Camera / interaction conditions;\nsampling budget;\nteacher forcing",
            "citations": [
              "zhao2025cetcam",
              "huang2026cinescene"
            ]
          },
          {
            "task": "Action prediction / rollout selection",
            "datasets": "DROID; LIBERO",
            "metrics": "Task success rate",
            "conditions": "Action conditioning;\nhorizon / rollout budget;\nselection policy",
            "citations": [
              "khazatsky2024droid",
              "liu2023libero"
            ]
          }
        ]
      },
      {
        "title": "Embodied action and planning",
        "rows": [
          {
            "task": "Manipulation",
            "datasets": "ManiSkill 3; RoboTwin 2.0; DROID",
            "metrics": "Task success rate",
            "conditions": "Task suite / demonstrations;\ncameras / control horizon",
            "citations": [
              "tao2025maniskill3",
              "chen2025robotwin2",
              "khazatsky2024droid"
            ]
          },
          {
            "task": "Long-horizon policies / generalization",
            "datasets": "LIBERO; CALVIN; SIMPLER",
            "metrics": "Task success rate",
            "conditions": "Task sequence / test conditions;\npolicy initialization;\nencoder adaptation",
            "citations": [
              "liu2023libero",
              "mees2022calvin",
              "li2024simpler"
            ]
          },
          {
            "task": "Driving",
            "datasets": "NAVSIM",
            "metrics": "PDM score",
            "conditions": "Scenario split;\ncamera setup / control horizon",
            "citations": [
              "dauner2024navsim"
            ]
          }
        ]
      }
    ],
    "note": "PSNR: peak signal-to-noise ratio; SSIM: structural similarity index measure; LPIPS: learned perceptual image patch similarity; FVD: Fréchet video distance; mIoU: mean intersection over union; AP: average precision; PCK: percentage of correct keypoints. Geometric metric abbreviations follow Table 5."
  }
];
