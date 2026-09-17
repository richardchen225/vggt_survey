window.VGGT_DATASETS = [
  {
    "name": "DTU",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "124",
    "type": "Object",
    "source": "Real",
    "citation": "jensen2014dtu",
    "url": "https://doi.org/10.1109/cvpr.2014.59",
    "tasks": [
      "camera-pose",
      "3d-reconstruction",
      "nvs"
    ]
  },
  {
    "name": "TUM-dynamics",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "1",
    "type": "Indoor",
    "source": "Real",
    "citation": "sturm2012tumrgbd",
    "url": "https://doi.org/10.1109/iros.2012.6385773",
    "tasks": [
      "camera-pose",
      "depth",
      "long-stream",
      "dynamic-4d",
      "slam"
    ]
  },
  {
    "name": "ADT",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "2",
    "type": "Indoor",
    "source": "Real",
    "citation": "pan2023adt",
    "url": "https://doi.org/10.1109/iccv51070.2023.01842",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "dynamic-4d",
      "semantic-spatial"
    ]
  },
  {
    "name": "EuRoC MAV",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "3",
    "type": "Indoor",
    "source": "Real",
    "citation": "burri2016euroc",
    "url": "https://doi.org/10.1177/0278364915620033",
    "tasks": [
      "camera-pose",
      "long-stream",
      "slam"
    ]
  },
  {
    "name": "TUM RGB-D",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "4",
    "type": "Indoor",
    "source": "Real",
    "citation": "sturm2012tumrgbd",
    "url": "https://doi.org/10.1109/iros.2012.6385773",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "long-stream",
      "slam"
    ]
  },
  {
    "name": "7-Scenes",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "7",
    "type": "Indoor",
    "source": "Real",
    "citation": "shotton2013scenecoordinate",
    "url": "https://doi.org/10.1109/cvpr.2013.377",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "long-stream",
      "slam"
    ]
  },
  {
    "name": "NRGBD",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "10",
    "type": "Indoor",
    "source": "Synthetic",
    "citation": "azinovic2022neuralrgbd",
    "url": "https://doi.org/10.1109/cvpr52688.2022.00619",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "long-stream"
    ]
  },
  {
    "name": "Replica360-2K",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "13",
    "type": "Indoor",
    "source": "Synthetic",
    "citation": "reyarea2022monodepth",
    "url": "https://doi.org/10.1109/CVPR52688.2022.00374",
    "tasks": [
      "depth"
    ]
  },
  {
    "name": "Replica",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "18",
    "type": "Indoor",
    "source": "Synthetic",
    "citation": "straub2019replica",
    "url": "https://arxiv.org/abs/1906.05797",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "nvs",
      "slam",
      "semantic-spatial"
    ]
  },
  {
    "name": "Bonn",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "24",
    "type": "Indoor",
    "source": "Real",
    "citation": "palazzolo2019refusion",
    "url": "https://doi.org/10.1109/iros40897.2019.8967590",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "long-stream",
      "dynamic-4d",
      "slam"
    ]
  },
  {
    "name": "Matterport3D",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "90",
    "type": "Indoor",
    "source": "Real",
    "citation": "chang2017matterport3d",
    "url": "https://doi.org/10.1109/3dv.2017.00081",
    "tasks": [
      "depth",
      "3d-reconstruction",
      "semantic-spatial"
    ]
  },
  {
    "name": "Dark3R",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "104",
    "type": "Indoor",
    "source": "Real",
    "citation": "guo2026dark3r",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Guo_Dark3R_Learning_Structure_from_Motion_in_the_Dark_CVPR_2026_paper.html",
    "tasks": [
      "camera-pose",
      "depth"
    ]
  },
  {
    "name": "Stanford2D3D",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "271",
    "type": "Indoor",
    "source": "Real",
    "citation": "armeni2017stanford2d3d",
    "url": "https://arxiv.org/abs/1702.01105",
    "tasks": [
      "depth",
      "3d-reconstruction",
      "semantic-spatial"
    ]
  },
  {
    "name": "NYU-v2",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "464",
    "type": "Indoor",
    "source": "Real",
    "citation": "silberman2012nyuv2",
    "url": "https://doi.org/10.1007/978-3-642-33715-4_54",
    "tasks": [
      "depth",
      "semantic-spatial"
    ]
  },
  {
    "name": "ScanNet++ v2",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "1,006",
    "type": "Indoor",
    "source": "Real",
    "citation": "yeshwanth2023scannetpp",
    "url": "https://doi.org/10.1109/ICCV51070.2023.00008",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "nvs",
      "slam",
      "semantic-spatial"
    ]
  },
  {
    "name": "ScanNet v2",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "1,513",
    "type": "Indoor",
    "source": "Real",
    "citation": "dai2017scannet",
    "url": "https://doi.org/10.1109/cvpr.2017.261",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "slam",
      "semantic-spatial"
    ]
  },
  {
    "name": "ScanNet200",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "1,513",
    "type": "Indoor",
    "source": "Real",
    "citation": "rozenberszki2022scannet200",
    "url": "https://arxiv.org/abs/2204.07761",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "slam",
      "semantic-spatial"
    ]
  },
  {
    "name": "ARKitScenes",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "1,661",
    "type": "Indoor",
    "source": "Real",
    "citation": "baruch2021arkitscenes",
    "url": "https://arxiv.org/abs/2111.08897",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "semantic-spatial"
    ]
  },
  {
    "name": "EventScape",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "4",
    "type": "Outdoor",
    "source": "Synthetic",
    "citation": "gehrig2021eventscape",
    "url": "https://doi.org/10.1109/lra.2021.3060707",
    "tasks": [
      "depth",
      "dynamic-4d",
      "semantic-spatial"
    ]
  },
  {
    "name": "Nordland",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "4",
    "type": "Outdoor",
    "source": "Real",
    "citation": "sunderhauf2013nordland",
    "url": "https://dblp.org/rec/conf/icra/SunderhaufNP13.html",
    "tasks": [
      "long-stream",
      "slam"
    ]
  },
  {
    "name": "Cambridge Landmarks",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "5",
    "type": "Outdoor",
    "source": "Real",
    "citation": "kendall2015posenet",
    "url": "https://doi.org/10.1109/iccv.2015.336",
    "tasks": [
      "camera-pose",
      "slam"
    ]
  },
  {
    "name": "Virtual KITTI 2",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "5",
    "type": "Outdoor",
    "source": "Synthetic",
    "citation": "cabon2020vkitti2",
    "url": "https://arxiv.org/abs/2001.10773",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "long-stream",
      "dynamic-4d"
    ]
  },
  {
    "name": "Oxford Spires",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "6",
    "type": "Outdoor",
    "source": "Real",
    "citation": "tao2025spires",
    "url": "https://arxiv.org/abs/2411.10546",
    "tasks": [
      "camera-pose",
      "3d-reconstruction",
      "long-stream",
      "nvs",
      "slam"
    ]
  },
  {
    "name": "DENSE",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "8",
    "type": "Outdoor",
    "source": "Synthetic",
    "citation": "hidalgo2020e2depth",
    "url": "https://doi.org/10.1109/3dv50981.2020.00063",
    "tasks": [
      "depth"
    ]
  },
  {
    "name": "KITTI-360",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "11",
    "type": "Outdoor",
    "source": "Real",
    "citation": "liao2022kitti360",
    "url": "https://doi.org/10.1109/tpami.2022.3179507",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "long-stream",
      "dynamic-4d",
      "slam",
      "semantic-spatial",
      "world-models"
    ]
  },
  {
    "name": "PointOdyssey",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "20",
    "type": "Outdoor",
    "source": "Synthetic",
    "citation": "zheng2023pointodyssey",
    "url": "https://openaccess.thecvf.com/content/ICCV2023/html/Zheng_PointOdyssey_A_Large-Scale_Synthetic_Dataset_for_Long-Term_Point_Tracking_ICCV_2023_paper.html",
    "tasks": [
      "camera-pose",
      "depth",
      "long-stream",
      "dynamic-4d"
    ]
  },
  {
    "name": "KITTI Odometry",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "22",
    "type": "Outdoor",
    "source": "Real",
    "citation": "geiger2012kitti",
    "url": "https://doi.org/10.1109/cvpr.2012.6248074",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "long-stream",
      "slam"
    ]
  },
  {
    "name": "TartanAir",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "30",
    "type": "Outdoor",
    "source": "Synthetic",
    "citation": "wang2020tartanair",
    "url": "https://doi.org/10.1109/iros45743.2020.9341801",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "long-stream",
      "dynamic-4d",
      "slam",
      "semantic-spatial",
      "world-models"
    ]
  },
  {
    "name": "MegaDepth",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "196",
    "type": "Outdoor",
    "source": "Real",
    "citation": "li2018megadepth",
    "url": "https://doi.org/10.1109/cvpr.2018.00218",
    "tasks": [
      "depth",
      "3d-reconstruction"
    ]
  },
  {
    "name": "nuScenes",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "1,000",
    "type": "Outdoor",
    "source": "Real",
    "citation": "caesar2020nuscenes",
    "url": "https://doi.org/10.1109/cvpr42600.2020.01164",
    "tasks": [
      "camera-pose",
      "depth",
      "dynamic-4d",
      "nvs",
      "semantic-spatial",
      "world-models"
    ]
  },
  {
    "name": "Waymo",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "1,150",
    "type": "Outdoor",
    "source": "Real",
    "citation": "sun2020waymo",
    "url": "https://doi.org/10.1109/cvpr42600.2020.00252",
    "tasks": [
      "camera-pose",
      "depth",
      "long-stream",
      "dynamic-4d",
      "nvs",
      "semantic-spatial",
      "world-models"
    ]
  },
  {
    "name": "Oxford RobotCar",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "- (~20M frames)",
    "type": "Outdoor",
    "source": "Real",
    "citation": "maddern2017robotcar",
    "url": "https://doi.org/10.1177/0278364916679498",
    "tasks": [
      "camera-pose",
      "long-stream",
      "slam"
    ]
  },
  {
    "name": "LaMAR",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "3",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "sarlin2022lamar",
    "url": "https://doi.org/10.1007/978-3-031-20071-7_40",
    "tasks": [
      "camera-pose",
      "slam"
    ]
  },
  {
    "name": "STheReO",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "3",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "yun2022sthereo",
    "url": "https://doi.org/10.1109/iros47612.2022.9981857",
    "tasks": [
      "camera-pose",
      "depth"
    ]
  },
  {
    "name": "FIORD",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "10",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "gunes2025fiord",
    "url": "",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction"
    ]
  },
  {
    "name": "MVSEC",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "11",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "zhu2018mvsec",
    "url": "https://doi.org/10.1109/lra.2018.2800793",
    "tasks": [
      "camera-pose",
      "depth",
      "long-stream",
      "slam"
    ]
  },
  {
    "name": "BEDLAM2.0",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "15",
    "type": "Indoor / outdoor",
    "source": "Synthetic",
    "citation": "tesch2025bedlam2",
    "url": "",
    "tasks": [
      "camera-pose",
      "depth",
      "dynamic-4d"
    ]
  },
  {
    "name": "Tanks and Temples",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "21",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "knapitsch2017tanks",
    "url": "https://doi.org/10.1145/3072959.3073599",
    "tasks": [
      "3d-reconstruction",
      "nvs"
    ]
  },
  {
    "name": "ETH3D",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "25",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "schops2017eth3d",
    "url": "https://doi.org/10.1109/cvpr.2017.272",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction"
    ]
  },
  {
    "name": "NCLT",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "27",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "carlevaris2016nclt",
    "url": "https://doi.org/10.1177/0278364915614638",
    "tasks": [
      "camera-pose",
      "long-stream",
      "slam"
    ]
  },
  {
    "name": "TUM-VI",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "28",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "schubert2018tumvi",
    "url": "https://doi.org/10.1109/IROS.2018.8593419",
    "tasks": [
      "camera-pose",
      "long-stream",
      "slam"
    ]
  },
  {
    "name": "Sintel",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "35",
    "type": "Indoor / outdoor",
    "source": "Synthetic",
    "citation": "butler2012sintel",
    "url": "https://doi.org/10.1007/978-3-642-33783-3_44",
    "tasks": [
      "camera-pose",
      "depth",
      "dynamic-4d"
    ]
  },
  {
    "name": "ViViD++",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "36",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "lee2022vivid",
    "url": "https://doi.org/10.1109/lra.2022.3168335",
    "tasks": [
      "camera-pose",
      "depth"
    ]
  },
  {
    "name": "DAVIS",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "50",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "perazzi2016davis",
    "url": "https://doi.org/10.1109/cvpr.2016.85",
    "tasks": [
      "dynamic-4d",
      "nvs",
      "semantic-spatial"
    ]
  },
  {
    "name": "Kubric",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "10,000",
    "type": "Indoor / outdoor",
    "source": "Synthetic",
    "citation": "greff2022kubric",
    "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Greff_Kubric_A_Scalable_Dataset_Generator_CVPR_2022_paper.html",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "dynamic-4d"
    ]
  },
  {
    "name": "OmniWorld",
    "role": "reconstruction",
    "roleLabel": "3D reconstruction",
    "scale": "- (18.515M frames)",
    "type": "Indoor / outdoor",
    "source": "Real + Synthetic",
    "citation": "zhou2025omniworld",
    "url": "https://arxiv.org/abs/2509.12201",
    "tasks": [
      "camera-pose",
      "depth",
      "3d-reconstruction",
      "dynamic-4d",
      "world-models"
    ]
  },
  {
    "name": "CO3Dv2",
    "role": "nvs",
    "roleLabel": "NVS",
    "scale": "51",
    "type": "Object",
    "source": "Real",
    "citation": "reizenstein2021co3d",
    "url": "https://doi.org/10.1109/iccv48922.2021.01072",
    "tasks": [
      "camera-pose",
      "3d-reconstruction",
      "nvs"
    ]
  },
  {
    "name": "NVS-HO",
    "role": "nvs",
    "roleLabel": "NVS",
    "scale": "67",
    "type": "Object",
    "source": "Real",
    "citation": "ali2026nvsho",
    "url": "https://arxiv.org/abs/2602.05822",
    "tasks": [
      "nvs"
    ]
  },
  {
    "name": "Deep Blending",
    "role": "nvs",
    "roleLabel": "NVS",
    "scale": "19",
    "type": "Indoor",
    "source": "Real",
    "citation": "hedman2018deepblending",
    "url": "https://doi.org/10.1145/3272127.3275084",
    "tasks": [
      "nvs"
    ]
  },
  {
    "name": "ACID",
    "role": "nvs",
    "roleLabel": "NVS",
    "scale": "891",
    "type": "Outdoor",
    "source": "Real",
    "citation": "liu2021infinitenature",
    "url": "https://doi.org/10.1109/iccv48922.2021.01419",
    "tasks": [
      "nvs"
    ]
  },
  {
    "name": "DyCheck",
    "role": "nvs",
    "roleLabel": "NVS",
    "scale": "7",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "gao2022dycheck",
    "url": "https://doi.org/10.52202/068431-2447",
    "tasks": [
      "camera-pose",
      "depth",
      "dynamic-4d",
      "nvs"
    ]
  },
  {
    "name": "LLFF",
    "role": "nvs",
    "roleLabel": "NVS",
    "scale": "8",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "mildenhall2019llff",
    "url": "https://doi.org/10.1145/3306346.3322980",
    "tasks": [
      "nvs"
    ]
  },
  {
    "name": "Mip-NeRF 360",
    "role": "nvs",
    "roleLabel": "NVS",
    "scale": "9",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "barron2022mipnerf360",
    "url": "https://doi.org/10.1109/cvpr52688.2022.00539",
    "tasks": [
      "nvs"
    ]
  },
  {
    "name": "HyperNeRF",
    "role": "nvs",
    "roleLabel": "NVS",
    "scale": "10",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "park2021hypernerf",
    "url": "https://doi.org/10.1145/3450626.3459882",
    "tasks": [
      "dynamic-4d",
      "nvs"
    ]
  },
  {
    "name": "RealEstate10K",
    "role": "nvs",
    "roleLabel": "NVS",
    "scale": "~10,000",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "zhou2018stereomagnification",
    "url": "https://doi.org/10.1145/3197517.3201323",
    "tasks": [
      "camera-pose",
      "nvs",
      "world-models"
    ]
  },
  {
    "name": "DL3DV-10K",
    "role": "nvs",
    "roleLabel": "NVS",
    "scale": "10,510",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "ling2024dl3dv",
    "url": "https://doi.org/10.1109/cvpr52733.2024.02092",
    "tasks": [
      "camera-pose",
      "nvs",
      "world-models"
    ]
  },
  {
    "name": "SPair-71k",
    "role": "downstream",
    "roleLabel": "Other downstream tasks",
    "scale": "- (70,958 pairs)",
    "type": "Object",
    "source": "Real",
    "citation": "min2019spair71k",
    "url": "https://doi.org/10.1109/ICCV.2019.00372",
    "tasks": [
      "semantic-spatial"
    ]
  },
  {
    "name": "SIMPLER",
    "role": "downstream",
    "roleLabel": "Other downstream tasks",
    "scale": "8",
    "type": "Indoor",
    "source": "Synthetic",
    "citation": "li2024simpler",
    "url": "https://arxiv.org/abs/2405.05941",
    "tasks": [
      "embodied-ai"
    ]
  },
  {
    "name": "CALVIN",
    "role": "downstream",
    "roleLabel": "Other downstream tasks",
    "scale": "34",
    "type": "Indoor",
    "source": "Synthetic",
    "citation": "mees2022calvin",
    "url": "https://doi.org/10.1109/lra.2022.3180108",
    "tasks": [
      "world-models",
      "embodied-ai"
    ]
  },
  {
    "name": "MetaWorld",
    "role": "downstream",
    "roleLabel": "Other downstream tasks",
    "scale": "50",
    "type": "Indoor",
    "source": "Synthetic",
    "citation": "yu2020metaworld",
    "url": "https://proceedings.mlr.press/v100/yu20a.html",
    "tasks": [
      "embodied-ai"
    ]
  },
  {
    "name": "RoboTwin 2.0",
    "role": "downstream",
    "roleLabel": "Other downstream tasks",
    "scale": "50",
    "type": "Indoor",
    "source": "Synthetic",
    "citation": "chen2025robotwin2",
    "url": "https://arxiv.org/abs/2506.18088",
    "tasks": [
      "world-models",
      "embodied-ai"
    ]
  },
  {
    "name": "HOI4D",
    "role": "downstream",
    "roleLabel": "Other downstream tasks",
    "scale": "57",
    "type": "Indoor",
    "source": "Real",
    "citation": "liu2022hoi4d",
    "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Liu_HOI4D_A_4D_Egocentric_Dataset_for_Category-Level_Human-Object_Interaction_CVPR_2022_paper.html",
    "tasks": [
      "depth",
      "3d-reconstruction",
      "dynamic-4d",
      "semantic-spatial",
      "embodied-ai"
    ]
  },
  {
    "name": "ManiSkill 3",
    "role": "downstream",
    "roleLabel": "Other downstream tasks",
    "scale": "58",
    "type": "Indoor",
    "source": "Synthetic",
    "citation": "tao2025maniskill3",
    "url": "https://arxiv.org/abs/2410.00425",
    "tasks": [
      "embodied-ai"
    ]
  },
  {
    "name": "DROID",
    "role": "downstream",
    "roleLabel": "Other downstream tasks",
    "scale": "86",
    "type": "Indoor",
    "source": "Real",
    "citation": "khazatsky2024droid",
    "url": "https://doi.org/10.15607/rss.2024.xx.120",
    "tasks": [
      "world-models",
      "embodied-ai"
    ]
  },
  {
    "name": "LIBERO",
    "role": "downstream",
    "roleLabel": "Other downstream tasks",
    "scale": "130",
    "type": "Indoor",
    "source": "Synthetic",
    "citation": "liu2023libero",
    "url": "https://arxiv.org/abs/2306.03310",
    "tasks": [
      "world-models",
      "embodied-ai"
    ]
  },
  {
    "name": "MVRefer",
    "role": "downstream",
    "roleLabel": "Other downstream tasks",
    "scale": "1,513",
    "type": "Indoor",
    "source": "Real",
    "citation": "mvggt",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Wu_MVGGT_Multimodal_Visual_Geometry_Grounded_Transformer_for_Multiview_3D_Referring_CVPR_2026_paper.html",
    "tasks": [
      "semantic-spatial"
    ]
  },
  {
    "name": "Cityscapes",
    "role": "downstream",
    "roleLabel": "Other downstream tasks",
    "scale": "5,000",
    "type": "Outdoor",
    "source": "Real",
    "citation": "cordts2016cityscapes",
    "url": "https://doi.org/10.1109/cvpr.2016.350",
    "tasks": [
      "depth",
      "semantic-spatial",
      "world-models"
    ]
  },
  {
    "name": "NAVSIM",
    "role": "downstream",
    "roleLabel": "Other downstream tasks",
    "scale": "115,000",
    "type": "Outdoor",
    "source": "Real",
    "citation": "dauner2024navsim",
    "url": "https://doi.org/10.52202/079017-0902",
    "tasks": [
      "embodied-ai"
    ]
  },
  {
    "name": "Ego-Exo4D",
    "role": "downstream",
    "roleLabel": "Other downstream tasks",
    "scale": "131",
    "type": "Indoor / outdoor",
    "source": "Real",
    "citation": "grauman2024egoexo4d",
    "url": "https://doi.org/10.1007/s11263-025-02557-6",
    "tasks": [
      "camera-pose",
      "dynamic-4d",
      "semantic-spatial",
      "world-models",
      "embodied-ai"
    ]
  },
  {
    "name": "HoIHQ",
    "role": "downstream",
    "roleLabel": "Other downstream tasks",
    "scale": "3,000",
    "type": "Indoor / outdoor",
    "source": "Synthetic",
    "citation": "zhao2025cetcam",
    "url": "https://arxiv.org/abs/2512.19020",
    "tasks": [
      "world-models"
    ]
  },
  {
    "name": "Scene-Decoupled-Video-dataset",
    "role": "downstream",
    "roleLabel": "Other downstream tasks",
    "scale": "3,400",
    "type": "Indoor / outdoor",
    "source": "Synthetic",
    "citation": "huang2026cinescene",
    "url": "https://arxiv.org/abs/2602.06959",
    "tasks": [
      "world-models"
    ]
  }
];
window.VGGT_COVERAGE = {
  "tasks": [
    {
      "id": "camera-pose",
      "title": "Camera pose"
    },
    {
      "id": "depth",
      "title": "Depth"
    },
    {
      "id": "3d-reconstruction",
      "title": "3D reconstruction"
    },
    {
      "id": "long-stream",
      "title": "Long stream"
    },
    {
      "id": "dynamic-4d",
      "title": "Dynamic / 4D"
    },
    {
      "id": "nvs",
      "title": "NVS"
    },
    {
      "id": "slam",
      "title": "SLAM"
    },
    {
      "id": "semantic-spatial",
      "title": "Semantic 3D scene understanding"
    },
    {
      "id": "world-models",
      "title": "World models"
    },
    {
      "id": "embodied-ai",
      "title": "Embodied action and planning"
    }
  ],
  "groups": [
    {
      "id": "reconstruction",
      "title": "3D reconstruction",
      "count": 46,
      "cells": [
        {
          "task": "camera-pose",
          "count": 36,
          "percentage": 78
        },
        {
          "task": "depth",
          "count": 35,
          "percentage": 76
        },
        {
          "task": "3d-reconstruction",
          "count": 24,
          "percentage": 52
        },
        {
          "task": "long-stream",
          "count": 18,
          "percentage": 39
        },
        {
          "task": "dynamic-4d",
          "count": 15,
          "percentage": 33
        },
        {
          "task": "nvs",
          "count": 8,
          "percentage": 17
        },
        {
          "task": "slam",
          "count": 20,
          "percentage": 43
        },
        {
          "task": "semantic-spatial",
          "count": 15,
          "percentage": 33
        },
        {
          "task": "world-models",
          "count": 5,
          "percentage": 11
        },
        {
          "task": "embodied-ai",
          "count": 0,
          "percentage": 0
        }
      ]
    },
    {
      "id": "nvs",
      "title": "NVS",
      "count": 10,
      "cells": [
        {
          "task": "camera-pose",
          "count": 4,
          "percentage": 40
        },
        {
          "task": "depth",
          "count": 1,
          "percentage": 10
        },
        {
          "task": "3d-reconstruction",
          "count": 1,
          "percentage": 10
        },
        {
          "task": "long-stream",
          "count": 0,
          "percentage": 0
        },
        {
          "task": "dynamic-4d",
          "count": 2,
          "percentage": 20
        },
        {
          "task": "nvs",
          "count": 10,
          "percentage": 100
        },
        {
          "task": "slam",
          "count": 0,
          "percentage": 0
        },
        {
          "task": "semantic-spatial",
          "count": 0,
          "percentage": 0
        },
        {
          "task": "world-models",
          "count": 2,
          "percentage": 20
        },
        {
          "task": "embodied-ai",
          "count": 0,
          "percentage": 0
        }
      ]
    },
    {
      "id": "downstream",
      "title": "Other downstream tasks",
      "count": 15,
      "cells": [
        {
          "task": "camera-pose",
          "count": 1,
          "percentage": 7
        },
        {
          "task": "depth",
          "count": 2,
          "percentage": 13
        },
        {
          "task": "3d-reconstruction",
          "count": 1,
          "percentage": 7
        },
        {
          "task": "long-stream",
          "count": 0,
          "percentage": 0
        },
        {
          "task": "dynamic-4d",
          "count": 2,
          "percentage": 13
        },
        {
          "task": "nvs",
          "count": 0,
          "percentage": 0
        },
        {
          "task": "slam",
          "count": 0,
          "percentage": 0
        },
        {
          "task": "semantic-spatial",
          "count": 5,
          "percentage": 33
        },
        {
          "task": "world-models",
          "count": 8,
          "percentage": 53
        },
        {
          "task": "embodied-ai",
          "count": 10,
          "percentage": 67
        }
      ]
    }
  ]
};
