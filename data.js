const genres = [
  {genre:"alternative",      popularity:0.4726, danceability:0.5562, energy:0.7251, loudness:0.8128, speechiness:0.066,  acousticness:0.1426, vocality:0.0362, liveness:0.2028, valence:0.4622, tempo:0.4993},
  {genre:"ambient",          popularity:0.4742, danceability:0.3727, energy:0.2437, loudness:0.5418, speechiness:0.0417, acousticness:0.7732, vocality:0.6651, liveness:0.1279, valence:0.1703, tempo:0.4572},
  {genre:"black metal",      popularity:0.2252, danceability:0.2962, energy:0.8746, loudness:0.8004, speechiness:0.0871, acousticness:0.0271, vocality:0.4413, liveness:0.2418, valence:0.1915, tempo:0.5284},
  {genre:"blues",            popularity:0.4769, danceability:0.5665, energy:0.6035, loudness:0.7632, speechiness:0.0614, acousticness:0.3055, vocality:0.0431, liveness:0.1874, valence:0.5638, tempo:0.4853},
  {genre:"breakbeat",        popularity:0.2018, danceability:0.646,  energy:0.8533, loudness:0.8112, speechiness:0.0858, acousticness:0.0315, vocality:0.3958, liveness:0.2205, valence:0.4744, tempo:0.5467},
  {genre:"classical",        popularity:0.2169, danceability:0.4151, energy:0.2194, loudness:0.5293, speechiness:0.0544, acousticness:0.9037, vocality:0.5679, liveness:0.1708, valence:0.4653, tempo:0.457},
  {genre:"country",          popularity:0.4123, danceability:0.5638, energy:0.6049, loudness:0.7775, speechiness:0.0438, acousticness:0.3108, vocality:0.0071, liveness:0.1753, valence:0.5278, tempo:0.5142},
  {genre:"deep house",       popularity:0.4897, danceability:0.7069, energy:0.739,  loudness:0.7909, speechiness:0.0595, acousticness:0.1063, vocality:0.2297, liveness:0.1705, valence:0.4438, tempo:0.4953},
  {genre:"disco",            popularity:0.4331, danceability:0.6838, energy:0.7339, loudness:0.7745, speechiness:0.0602, acousticness:0.1577, vocality:0.0781, liveness:0.1882, valence:0.678,  tempo:0.5052},
  {genre:"drum & bass",      popularity:0.2674, danceability:0.5348, energy:0.8767, loudness:0.8524, speechiness:0.0918, acousticness:0.0258, vocality:0.3726, liveness:0.2207, valence:0.3205, tempo:0.6383},
  {genre:"edm",              popularity:0.5491, danceability:0.6484, energy:0.7418, loudness:0.8253, speechiness:0.0716, acousticness:0.1319, vocality:0.0441, liveness:0.194,  valence:0.4529, tempo:0.4982},
  {genre:"folk",             popularity:0.4811, danceability:0.5653, energy:0.5518, loudness:0.7459, speechiness:0.0632, acousticness:0.4905, vocality:0.0453, liveness:0.1783, valence:0.4864, tempo:0.4827},
  {genre:"funk",             popularity:0.4578, danceability:0.7196, energy:0.637,  loudness:0.8121, speechiness:0.1905, acousticness:0.3058, vocality:0.0053, liveness:0.1828, valence:0.6054, tempo:0.495},
  {genre:"garage",           popularity:0.4268, danceability:0.4809, energy:0.7465, loudness:0.8006, speechiness:0.0653, acousticness:0.1667, vocality:0.1943, liveness:0.2103, valence:0.5192, tempo:0.5224},
  {genre:"grunge",           popularity:0.5155, danceability:0.4587, energy:0.8037, loudness:0.8194, speechiness:0.0608, acousticness:0.0522, vocality:0.0364, liveness:0.2213, valence:0.4023, tempo:0.5322},
  {genre:"hard rock",        popularity:0.4974, danceability:0.4817, energy:0.7969, loudness:0.7971, speechiness:0.0672, acousticness:0.0878, vocality:0.047,  liveness:0.223,  valence:0.5168, tempo:0.5186},
  {genre:"hardcore punk",    popularity:0.4012, danceability:0.5294, energy:0.851,  loudness:0.8199, speechiness:0.1419, acousticness:0.0583, vocality:0.0753, liveness:0.2373, valence:0.4886, tempo:0.5207},
  {genre:"hardstyle",        popularity:0.2869, danceability:0.5386, energy:0.8999, loudness:0.8485, speechiness:0.1216, acousticness:0.0526, vocality:0.1328, liveness:0.2569, valence:0.3193, tempo:0.6051},
  {genre:"heavy metal",      popularity:0.2628, danceability:0.4285, energy:0.8742, loudness:0.8174, speechiness:0.0746, acousticness:0.015,  vocality:0.0827, liveness:0.2799, valence:0.388,  tempo:0.5203},
  {genre:"hip-hop",          popularity:0.5311, danceability:0.7153, energy:0.6979, loudness:0.8114, speechiness:0.1308, acousticness:0.2237, vocality:0.0133, liveness:0.1907, valence:0.5549, tempo:0.4848},
  {genre:"house",            popularity:0.5721, danceability:0.6676, energy:0.7404, loudness:0.8263, speechiness:0.0683, acousticness:0.1196, vocality:0.0486, liveness:0.1842, valence:0.469,  tempo:0.4971},
  {genre:"idm",              popularity:0.1599, danceability:0.5293, energy:0.5592, loudness:0.672,  speechiness:0.0759, acousticness:0.3727, vocality:0.6805, liveness:0.1687, valence:0.3046, tempo:0.5072},
  {genre:"indie",            popularity:0.5447, danceability:0.5986, energy:0.5332, loudness:0.7541, speechiness:0.0652, acousticness:0.415,  vocality:0.0634, liveness:0.1644, valence:0.439,  tempo:0.4916},
  {genre:"indie-pop",        popularity:0.5487, danceability:0.5993, energy:0.5506, loudness:0.7621, speechiness:0.0661, acousticness:0.3931, vocality:0.0531, liveness:0.1667, valence:0.4438, tempo:0.4962},
  {genre:"industrial",       popularity:0.3338, danceability:0.5322, energy:0.858,  loudness:0.8101, speechiness:0.0874, acousticness:0.0378, vocality:0.1905, liveness:0.2357, valence:0.4231, tempo:0.5216},
  {genre:"j-pop",            popularity:0.4795, danceability:0.5619, energy:0.7183, loudness:0.8171, speechiness:0.0612, acousticness:0.2396, vocality:0.0095, liveness:0.2071, valence:0.565,  tempo:0.5159},
  {genre:"j-rock",           popularity:0.4188, danceability:0.5083, energy:0.7606, loudness:0.8197, speechiness:0.0641, acousticness:0.167,  vocality:0.0235, liveness:0.2239, valence:0.5369, tempo:0.5283},
  {genre:"jazz",             popularity:0.4272, danceability:0.5462, energy:0.396,  loudness:0.7012, speechiness:0.053,  acousticness:0.6573, vocality:0.1268, liveness:0.1645, valence:0.4659, tempo:0.4655},
  {genre:"k-pop",            popularity:0.592,  danceability:0.6404, energy:0.6788, loudness:0.802,  speechiness:0.0849, acousticness:0.2985, vocality:0.0098, liveness:0.1785, valence:0.5631, tempo:0.491},
  {genre:"latin",            popularity:0.2014, danceability:0.7383, energy:0.7318, loudness:0.8348, speechiness:0.1044, acousticness:0.1613, vocality:0.0054, liveness:0.1764, valence:0.6363, tempo:0.5027},
  {genre:"metal",            popularity:0.5497, danceability:0.4678, energy:0.8314, loudness:0.8247, speechiness:0.0693, acousticness:0.0383, vocality:0.0573, liveness:0.2034, valence:0.42,   tempo:0.5248},
  {genre:"minimal techno",   popularity:0.3596, danceability:0.728,  energy:0.6745, loudness:0.7278, speechiness:0.0621, acousticness:0.0741, vocality:0.7424, liveness:0.137,  valence:0.2801, tempo:0.5118},
  {genre:"new age",          popularity:0.3006, danceability:0.3468, energy:0.2138, loudness:0.5362, speechiness:0.0456, acousticness:0.8238, vocality:0.7132, liveness:0.2031, valence:0.1811, tempo:0.442},
  {genre:"opera",            popularity:0.2766, danceability:0.3139, energy:0.3194, loudness:0.644,  speechiness:0.0473, acousticness:0.7838, vocality:0.1523, liveness:0.223,  valence:0.2131, tempo:0.4341},
  {genre:"pop",              popularity:0.5816, danceability:0.6323, energy:0.6061, loudness:0.7913, speechiness:0.0805, acousticness:0.3507, vocality:0.0057, liveness:0.1571, valence:0.5026, tempo:0.4944},
  {genre:"progressive house",popularity:0.5197, danceability:0.6232, energy:0.8113, loudness:0.8245, speechiness:0.0685, acousticness:0.063,  vocality:0.199,  liveness:0.2117, valence:0.3625, tempo:0.5134},
  {genre:"psych rock",       popularity:0.4872, danceability:0.495,  energy:0.561,  loudness:0.7209, speechiness:0.0486, acousticness:0.3283, vocality:0.1032, liveness:0.2154, valence:0.5393, tempo:0.4957},
  {genre:"punk",             popularity:0.4489, danceability:0.4952, energy:0.8159, loudness:0.8203, speechiness:0.0651, acousticness:0.0848, vocality:0.0379, liveness:0.2175, valence:0.5559, tempo:0.5546},
  {genre:"reggae",           popularity:0.3393, danceability:0.736,  energy:0.7084, loudness:0.8218, speechiness:0.1126, acousticness:0.1857, vocality:0.0032, liveness:0.2012, valence:0.6342, tempo:0.5056},
  {genre:"rhythm & blues",   popularity:0.454,  danceability:0.6196, energy:0.6428, loudness:0.7784, speechiness:0.0879, acousticness:0.3291, vocality:0.0095, liveness:0.2774, valence:0.6372, tempo:0.5057},
  {genre:"rock",             popularity:0.4,    danceability:0.5503, energy:0.6936, loudness:0.7979, speechiness:0.0534, acousticness:0.1769, vocality:0.0224, liveness:0.1749, valence:0.5175, tempo:0.5148},
  {genre:"singer-songwriter",popularity:0.5015, danceability:0.5743, energy:0.4103, loudness:0.7185, speechiness:0.0479, acousticness:0.5887, vocality:0.0319, liveness:0.1485, valence:0.4006, tempo:0.4911},
  {genre:"ska",              popularity:0.3682, danceability:0.5796, energy:0.8009, loudness:0.8069, speechiness:0.0722, acousticness:0.1196, vocality:0.0277, liveness:0.2774, valence:0.703,  tempo:0.5301},
  {genre:"soul",             popularity:0.5089, danceability:0.6323, energy:0.5393, loudness:0.7716, speechiness:0.0683, acousticness:0.3677, vocality:0.0234, liveness:0.1676, valence:0.4573, tempo:0.4693},
  {genre:"synth-pop",        popularity:0.4037, danceability:0.618,  energy:0.7143, loudness:0.7652, speechiness:0.0481, acousticness:0.1539, vocality:0.0864, liveness:0.1825, valence:0.5777, tempo:0.5031},
  {genre:"techno",           popularity:0.4207, danceability:0.6826, energy:0.7421, loudness:0.7644, speechiness:0.0642, acousticness:0.0845, vocality:0.5428, liveness:0.1624, valence:0.3175, tempo:0.5277},
  {genre:"trance",           popularity:0.4042, danceability:0.5767, energy:0.8476, loudness:0.8043, speechiness:0.078,  acousticness:0.0346, vocality:0.4341, liveness:0.2389, valence:0.2694, tempo:0.5494}
];

const features = ["danceability", "energy", "loudness", "acousticness", "liveness", "valence", "tempo", "vocality", "speechiness"];

const label = {
  danceability:"Danceability", energy:"Energy", loudness:"Loudness",
  speechiness:"Speechiness", acousticness:"Acousticness", vocality:"Vocality",
  liveness:"Liveness", valence:"Valence", tempo:"Tempo"
};

const featureTip = {
  danceability: "Suitability for dancing [tempo, rhythm stability, beat strength]",
  energy: "Perceived intensity [tempo, entropy, loudness, dynamic range, beat strength]",
  loudness: "Perceived overall volume [k-weighted decibel level]",
  speechiness: "Prevalence of spoken words",
  acousticness: "Prevalence of acoustic instruments",
  vocality: "Prevalence of vocals",
  liveness: "Perceived live performance feel [crowd noise, reverberation]",
  valence: "Perceived cheerfulness [tempo, timbre, key]",
  tempo: "Overall speed [beats per minute]"
};
