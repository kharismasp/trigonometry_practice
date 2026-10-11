window.QUESTION_BANK = [
  {
    "id": "C1",
    "level": "core",
    "family": "method-selection",
    "title": {
      "en": "Choose the method",
      "id": "Pilih metode"
    },
    "prompt": {
      "en": "For each situation, state the most natural first method. Do not solve.\n(a) A right triangle has perpendicular sides 6 and 8. Find the hypotenuse.\n(b) A = 47°, B = 68°, a = 9. Find b.\n(c) Two sides are 8 and 11 with included angle 50°. Find the third side.\n(d) Sides are 7, 9, 12. Find the largest angle.\n(e) Two triangles are similar and the scale factor is known. Find a corresponding side.\n(f) Two sides are 12 and 15 with included angle 30°. Find the area.",
      "id": "Untuk tiap situasi, tentukan metode pertama yang paling wajar. Tidak perlu menghitung hasil akhirnya.\n(a) Segitiga siku-siku memiliki sisi tegak lurus 6 dan 8. Cari sisi miring.\n(b) A = 47°, B = 68°, a = 9. Cari b.\n(c) Dua sisi panjangnya 8 dan 11 dengan sudut apit 50°. Cari sisi ketiga.\n(d) Panjang sisi 7, 9, 12. Cari sudut terbesar.\n(e) Dua segitiga sebangun dan faktor skalanya diketahui. Cari sisi yang bersesuaian.\n(f) Dua sisi panjangnya 12 dan 15 dengan sudut apit 30°. Cari luas."
    },
    "solution": {
      "en": "(a) Pythagoras. (b) Sine rule. (c) Cosine rule. (d) Cosine rule. (e) Similarity. (f) A = 1/2 ab sin C.",
      "id": "(a) Teorema Pythagoras. (b) Aturan sinus. (c) Aturan cosinus. (d) Aturan cosinus. (e) Kesebangunan. (f) A = 1/2 ab sin C."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "(a) First method",
            "id": "(a) Metode pertama"
          },
          "placeholder": "",
          "accepted": [
            "pythagoras",
            "pythagorean theorem",
            "teorema pythagoras"
          ]
        },
        {
          "label": {
            "en": "(b) First method",
            "id": "(b) Metode pertama"
          },
          "placeholder": "",
          "accepted": [
            "sine rule",
            "law of sines",
            "aturan sinus"
          ]
        },
        {
          "label": {
            "en": "(c) First method",
            "id": "(c) Metode pertama"
          },
          "placeholder": "",
          "accepted": [
            "cosine rule",
            "law of cosines",
            "aturan cosinus"
          ]
        },
        {
          "label": {
            "en": "(d) First method",
            "id": "(d) Metode pertama"
          },
          "placeholder": "",
          "accepted": [
            "cosine rule",
            "law of cosines",
            "aturan cosinus"
          ]
        },
        {
          "label": {
            "en": "(e) First method",
            "id": "(e) Metode pertama"
          },
          "placeholder": "",
          "accepted": [
            "similarity",
            "similar triangles",
            "kesebangunan"
          ]
        },
        {
          "label": {
            "en": "(f) First method",
            "id": "(f) Metode pertama"
          },
          "placeholder": "",
          "accepted": [
            "triangle area",
            "area formula",
            "1/2absinc",
            "1/2 ab sin c",
            "luas segitiga",
            "rumus luas segitiga"
          ]
        }
      ]
    },
    "hints": {
      "en": [
        "Which triangle contains the target, and what information is already known inside it?",
        "Classify the data: right triangle, SAS, SSS, an opposite side-angle pair, or similar triangles.",
        "Choose the method that uses the given information directly; do not calculate yet."
      ],
      "id": [
        "Segitiga mana yang memuat besaran yang dicari, dan informasi apa yang sudah diketahui di dalamnya?",
        "Kelompokkan datanya: segitiga siku-siku, SAS, SSS, pasangan sisi-sudut berhadapan, atau segitiga sebangun.",
        "Pilih metode yang langsung memakai informasi yang diberikan; belum perlu menghitung."
      ]
    },
    "visual": null
  },
  {
    "id": "C2",
    "level": "core",
    "family": "sine-side",
    "title": {
      "en": "Sine rule: missing sides",
      "id": "Aturan sinus: mencari sisi"
    },
    "prompt": {
      "en": "In △ABC, A = 38°, B = 67°, a = 7 cm. Find C, b and c.",
      "id": "Pada △ABC, A = 38°, B = 67°, a = 7 cm. Tentukan C, b, dan c."
    },
    "solution": {
      "en": "C = 75°. Using a/sin A = b/sin B = c/sin C gives b ≈ 10.5 cm and c ≈ 11.0 cm.",
      "id": "C = 75°. Dengan a/sin A = b/sin B = c/sin C diperoleh b ≈ 10,5 cm dan c ≈ 11,0 cm."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "C (°)",
            "id": "C (°)"
          },
          "placeholder": "",
          "numeric": 75,
          "tolerance": 0.1
        },
        {
          "label": {
            "en": "b (cm)",
            "id": "b (cm)"
          },
          "placeholder": "",
          "numeric": 10.466,
          "tolerance": 0.08
        },
        {
          "label": {
            "en": "c (cm)",
            "id": "c (cm)"
          },
          "placeholder": "",
          "numeric": 10.982,
          "tolerance": 0.08
        }
      ]
    },
    "hints": {
      "en": [
        "Pair each side with its opposite angle.",
        "First find the third angle from the triangle angle sum.",
        "Use the complete pair (A, a), then write only the two sine-rule fractions you need."
      ],
      "id": [
        "Pasangkan setiap sisi dengan sudut yang berhadapan dengannya.",
        "Cari dulu sudut ketiga dari jumlah sudut segitiga.",
        "Gunakan pasangan lengkap (A, a), lalu tulis hanya dua pecahan aturan sinus yang diperlukan."
      ]
    },
    "visual": {
      "type": "pr1C2"
    }
  },
  {
    "id": "C3",
    "level": "core",
    "family": "ambiguity",
    "title": {
      "en": "Sine rule: missing angle",
      "id": "Aturan sinus: mencari sudut"
    },
    "prompt": {
      "en": "In △ABC, A = 78°, a = 14 cm, b = 9 cm. Find B and C. Explain why there is only one valid triangle.",
      "id": "Pada △ABC, A = 78°, a = 14 cm, b = 9 cm. Tentukan B dan C. Jelaskan mengapa hanya ada satu segitiga yang valid."
    },
    "solution": {
      "en": "sin B = 9 sin 78° / 14, so B ≈ 39.0°. The supplementary candidate is about 141°, but 78° + 141° > 180°, so it is invalid. Hence C ≈ 63.0°. There is one valid triangle.",
      "id": "sin B = 9 sin 78° / 14, sehingga B ≈ 39,0°. Kandidat sudut suplementernya sekitar 141°, tetapi 78° + 141° > 180°, sehingga tidak valid. Maka C ≈ 63,0°. Hanya ada satu segitiga yang valid."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "B (°)",
            "id": "B (°)"
          },
          "placeholder": "",
          "numeric": 38.962,
          "tolerance": 0.12
        },
        {
          "label": {
            "en": "C (°)",
            "id": "C (°)"
          },
          "placeholder": "",
          "numeric": 63.038,
          "tolerance": 0.12
        },
        {
          "label": {
            "en": "Number of valid triangles",
            "id": "Banyak segitiga valid"
          },
          "placeholder": "",
          "numeric": 1,
          "tolerance": 0.01
        }
      ]
    },
    "hints": {
      "en": [
        "Start from the given ray and fixed side length.",
        "The fixed-length circle meets the allowed ray once; ask where the supplementary-angle candidate would lie.",
        "Compare that candidate with the 180° angle-sum condition before accepting it."
      ],
      "id": [
        "Mulai dari sinar yang diketahui dan panjang sisi tetap.",
        "Lingkaran panjang tetap memotong sinar yang diizinkan sekali; perhatikan posisi kandidat sudut suplementer.",
        "Bandingkan kandidat itu dengan syarat jumlah sudut 180° sebelum menerimanya."
      ]
    },
    "visual": {
      "type": "pr1C3"
    }
  },
  {
    "id": "C4",
    "level": "core",
    "family": "cosine-side",
    "title": {
      "en": "Cosine rule: missing side",
      "id": "Aturan cosinus: mencari sisi"
    },
    "prompt": {
      "en": "Two sides have lengths 9 cm and 12 cm. The included angle is 73°. Find the third side.",
      "id": "Dua sisi panjangnya 9 cm dan 12 cm. Sudut apitnya 73°. Tentukan sisi ketiga."
    },
    "solution": {
      "en": "x² = 9² + 12² − 2(9)(12) cos 73°, so x ≈ 12.7 cm.",
      "id": "x² = 9² + 12² − 2(9)(12) cos 73°, sehingga x ≈ 12,7 cm."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "Third side (cm)",
            "id": "Sisi ketiga (cm)"
          },
          "placeholder": "",
          "numeric": 12.7219,
          "tolerance": 0.08
        }
      ]
    },
    "hints": {
      "en": [
        "What information pattern do you have: two sides and their included angle?",
        "The target side is opposite the known 73° angle.",
        "Use c² = a² + b² − 2ab cos C."
      ],
      "id": [
        "Pola informasi apa yang diberikan: dua sisi dan sudut apitnya?",
        "Sisi yang dicari berhadapan dengan sudut 73° yang diketahui.",
        "Gunakan c² = a² + b² − 2ab cos C."
      ]
    },
    "visual": {
      "type": "pr1C4"
    }
  },
  {
    "id": "C5",
    "level": "core",
    "family": "cosine-angle",
    "title": {
      "en": "Cosine rule: angle and classification",
      "id": "Aturan cosinus: sudut dan klasifikasi"
    },
    "prompt": {
      "en": "A triangle has sides 7, 10 and 12. Find the largest angle and hence classify the triangle as acute, right or obtuse.",
      "id": "Sebuah segitiga memiliki sisi 7, 10, dan 12. Tentukan sudut terbesarnya, lalu klasifikasikan segitiga sebagai lancip, siku-siku, atau tumpul."
    },
    "solution": {
      "en": "The largest side is 12, so its opposite angle is largest. cos C = (7² + 10² − 12²)/(2·7·10), giving C ≈ 88.0°. The triangle is acute.",
      "id": "Sisi terbesar adalah 12, jadi sudut yang berhadapan dengannya adalah sudut terbesar. cos C = (7² + 10² − 12²)/(2·7·10), sehingga C ≈ 88,0°. Segitiga tersebut lancip."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "Largest angle (°)",
            "id": "Sudut terbesar (°)"
          },
          "placeholder": "",
          "numeric": 87.9533,
          "tolerance": 0.12
        },
        {
          "label": {
            "en": "Classification",
            "id": "Klasifikasi"
          },
          "placeholder": "",
          "accepted": [
            "acute",
            "lancip"
          ]
        }
      ]
    },
    "hints": {
      "en": [
        "Which side is opposite the largest angle?",
        "All three sides are known, so use the cosine rule for an angle.",
        "Compare the largest angle with 90°."
      ],
      "id": [
        "Sisi mana yang berhadapan dengan sudut terbesar?",
        "Ketiga sisi diketahui, jadi gunakan aturan cosinus untuk mencari sudut.",
        "Bandingkan sudut terbesar dengan 90°."
      ]
    },
    "visual": {
      "type": "pr1C5"
    }
  },
  {
    "id": "C6",
    "level": "core",
    "family": "triangle-area",
    "title": {
      "en": "Triangle area",
      "id": "Luas segitiga"
    },
    "prompt": {
      "en": "Two sides are 8 cm and 15 cm with included angle 42°. Find the area.",
      "id": "Dua sisi panjangnya 8 cm dan 15 cm dengan sudut apit 42°. Tentukan luas segitiga."
    },
    "solution": {
      "en": "A = 1/2(8)(15) sin 42° ≈ 40.1 cm².",
      "id": "A = 1/2(8)(15) sin 42° ≈ 40,1 cm²."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "Area (cm²)",
            "id": "Luas (cm²)"
          },
          "placeholder": "",
          "numeric": 40.1478,
          "tolerance": 0.12
        }
      ]
    },
    "hints": {
      "en": [
        "Which area formula uses two sides and the included angle?",
        "The known sides enclose the 42° angle.",
        "Use A = 1/2 ab sin C."
      ],
      "id": [
        "Rumus luas mana yang menggunakan dua sisi dan sudut apitnya?",
        "Kedua sisi yang diketahui mengapit sudut 42°.",
        "Gunakan A = 1/2 ab sin C."
      ]
    },
    "visual": {
      "type": "pr1C6"
    }
  },
  {
    "id": "C7",
    "level": "core",
    "family": "reverse-area",
    "title": {
      "en": "Reverse area",
      "id": "Mencari sisi dari luas"
    },
    "prompt": {
      "en": "A triangle has area 36 cm². Two sides enclosing a 60° angle have lengths 8 cm and x cm. Find x.",
      "id": "Sebuah segitiga memiliki luas 36 cm². Dua sisi yang mengapit sudut 60° panjangnya 8 cm dan x cm. Tentukan x."
    },
    "solution": {
      "en": "36 = 1/2(8)x sin 60°, so x = 6√3 cm ≈ 10.4 cm.",
      "id": "36 = 1/2(8)x sin 60°, sehingga x = 6√3 cm ≈ 10,4 cm."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "x (cm)",
            "id": "x (cm)"
          },
          "placeholder": "",
          "numeric": 10.3923,
          "tolerance": 0.08,
          "accepted": [
            "6sqrt3",
            "6√3"
          ]
        }
      ]
    },
    "hints": {
      "en": [
        "Start from the triangle-area formula rather than a side rule.",
        "Substitute the known area, side and included angle.",
        "Rearrange 36 = 1/2(8)x sin 60° for x."
      ],
      "id": [
        "Mulai dari rumus luas segitiga, bukan aturan sisi.",
        "Substitusikan luas, sisi, dan sudut apit yang diketahui.",
        "Susun kembali 36 = 1/2(8)x sin 60° untuk mencari x."
      ]
    },
    "visual": {
      "type": "pr1C7"
    }
  },
  {
    "id": "C8",
    "level": "core",
    "family": "bearings",
    "title": {
      "en": "Bearing components",
      "id": "Komponen bearing"
    },
    "prompt": {
      "en": "A rescue boat travels 20 km on bearing 035°. Find its displacement east and north of its starting point.",
      "id": "Sebuah perahu penyelamat bergerak 20 km pada bearing 035°. Tentukan perpindahannya ke arah timur dan ke arah utara dari titik awal."
    },
    "solution": {
      "en": "E = 20 sin 35° ≈ 11.5 km and N = 20 cos 35° ≈ 16.4 km.",
      "id": "E = 20 sin 35° ≈ 11,5 km dan N = 20 cos 35° ≈ 16,4 km."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "East (km)",
            "id": "Timur (km)"
          },
          "placeholder": "",
          "numeric": 11.4715,
          "tolerance": 0.08
        },
        {
          "label": {
            "en": "North (km)",
            "id": "Utara (km)"
          },
          "placeholder": "",
          "numeric": 16.383,
          "tolerance": 0.08
        }
      ]
    },
    "hints": {
      "en": [
        "Draw North at the starting point.",
        "A bearing is measured clockwise from North.",
        "Use E = d sin β and N = d cos β."
      ],
      "id": [
        "Gambar arah Utara di titik awal.",
        "Bearing diukur searah jarum jam dari Utara.",
        "Gunakan E = d sin β dan N = d cos β."
      ]
    },
    "visual": {
      "type": "pr1C8",
      "bearing": 35,
      "distance": "20 km"
    }
  },
  {
    "id": "C9",
    "level": "core",
    "family": "elevation",
    "title": {
      "en": "Angle of depression",
      "id": "Sudut depresi"
    },
    "prompt": {
      "en": "A cliff is 50 m high. From the top, the angle of depression to a boat is 28°. Find the horizontal distance from the boat to the foot of the cliff.",
      "id": "Sebuah tebing tingginya 50 m. Dari puncak tebing, sudut depresi ke sebuah perahu adalah 28°. Tentukan jarak horizontal perahu ke kaki tebing."
    },
    "solution": {
      "en": "tan 28° = 50/x, so x ≈ 94.0 m.",
      "id": "tan 28° = 50/x, sehingga x ≈ 94,0 m."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "Horizontal distance (m)",
            "id": "Jarak horizontal (m)"
          },
          "placeholder": "",
          "numeric": 94.0363,
          "tolerance": 0.15
        }
      ]
    },
    "hints": {
      "en": [
        "Mark the horizontal line through the top of the cliff.",
        "The angle of depression equals the corresponding angle of elevation at the boat.",
        "Use tangent in the right triangle: tan 28° = 50/x."
      ],
      "id": [
        "Tandai garis horizontal melalui puncak tebing.",
        "Sudut depresi sama dengan sudut elevasi yang bersesuaian di perahu.",
        "Gunakan tangen pada segitiga siku-siku: tan 28° = 50/x."
      ]
    },
    "visual": {
      "type": "pr1C9",
      "height": "50 m",
      "angle": 28
    }
  },
  {
    "id": "C10",
    "level": "core",
    "family": "bearings",
    "title": {
      "en": "Bearing interpretation",
      "id": "Menafsirkan bearing"
    },
    "prompt": {
      "en": "A drone travels 16 km from P to Q on bearing 120°.\n(a) Find the bearing of P from Q.\n(b) How far east of P is Q?\n(c) How far south of P is Q?",
      "id": "Sebuah drone bergerak 16 km dari P ke Q pada bearing 120°.\n(a) Tentukan bearing P dari Q.\n(b) Seberapa jauh Q berada di sebelah timur P?\n(c) Seberapa jauh Q berada di sebelah selatan P?"
    },
    "solution": {
      "en": "Reverse bearing = 300°. East displacement = 16 sin 120° = 8√3 ≈ 13.9 km. North component = 16 cos 120° = −8, so Q is 8.00 km south of P.",
      "id": "Bearing balik = 300°. Perpindahan ke timur = 16 sin 120° = 8√3 ≈ 13,9 km. Komponen utara = 16 cos 120° = −8, sehingga Q berada 8,00 km di selatan P."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "Reverse bearing (°)",
            "id": "Bearing balik (°)"
          },
          "placeholder": "",
          "numeric": 300,
          "tolerance": 0.1,
          "accepted": [
            "300",
            "300°"
          ]
        },
        {
          "label": {
            "en": "East (km)",
            "id": "Timur (km)"
          },
          "placeholder": "",
          "numeric": 13.8564,
          "tolerance": 0.08
        },
        {
          "label": {
            "en": "South (km)",
            "id": "Selatan (km)"
          },
          "placeholder": "",
          "numeric": 8,
          "tolerance": 0.05
        }
      ]
    },
    "hints": {
      "en": [
        "For the reverse bearing, turn the direction by 180°.",
        "For components, keep the bearing measured clockwise from North.",
        "A negative North component means a South displacement."
      ],
      "id": [
        "Untuk bearing balik, ubah arah sebesar 180°.",
        "Untuk komponen, tetap ukur bearing searah jarum jam dari Utara.",
        "Komponen Utara yang negatif berarti perpindahan ke Selatan."
      ]
    },
    "visual": {
      "type": "pr1C10",
      "bearing": 120,
      "distance": "16 km"
    }
  },
  {
    "id": "H1",
    "level": "challenge",
    "family": "multi-triangle",
    "title": {
      "en": "Three sides to a hidden right triangle",
      "id": "Tiga sisi menuju segitiga siku-siku tersembunyi"
    },
    "prompt": {
      "en": "Triangle ABC has AB = 13 cm, AC = 10 cm, BC = 7 cm. The perpendicular from C to AB meets AB at D. Find:\n(a) ∠BAC;\n(b) AD;\n(c) CD;\n(d) the area of △ABC.\nGive exact values where convenient.",
      "id": "Segitiga ABC memiliki AB = 13 cm, AC = 10 cm, BC = 7 cm. Garis tegak lurus dari C ke AB memotong AB di D. Tentukan:\n(a) ∠BAC;\n(b) AD;\n(c) CD;\n(d) luas △ABC.\nGunakan bentuk eksak jika sesuai."
    },
    "solution": {
      "en": "Using the cosine rule, cos A = 11/13, so A ≈ 32.2°. Then AD = 10 cos A = 110/13 ≈ 8.46 cm and CD = 40√3/13 ≈ 5.33 cm. Area = 1/2(13)(CD) = 20√3 ≈ 34.6 cm².",
      "id": "Dengan aturan cosinus, cos A = 11/13, sehingga A ≈ 32,2°. Lalu AD = 10 cos A = 110/13 ≈ 8,46 cm dan CD = 40√3/13 ≈ 5,33 cm. Luas = 1/2(13)(CD) = 20√3 ≈ 34,6 cm²."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "∠BAC (°)",
            "id": "∠BAC (°)"
          },
          "placeholder": "",
          "numeric": 32.2042,
          "tolerance": 0.12
        },
        {
          "label": {
            "en": "AD (cm)",
            "id": "AD (cm)"
          },
          "placeholder": "",
          "numeric": 8.4615,
          "tolerance": 0.08
        },
        {
          "label": {
            "en": "CD (cm)",
            "id": "CD (cm)"
          },
          "placeholder": "",
          "numeric": 5.3294,
          "tolerance": 0.08
        },
        {
          "label": {
            "en": "Area (cm²)",
            "id": "Luas (cm²)"
          },
          "placeholder": "",
          "numeric": 34.641,
          "tolerance": 0.12,
          "accepted": [
            "20sqrt3",
            "20√3"
          ]
        }
      ]
    },
    "hints": {
      "en": [
        "Which triangle can be solved before using the altitude?",
        "Use the three original sides to find ∠A first.",
        "Once ∠A is known, the perpendicular creates a right triangle for AD and CD."
      ],
      "id": [
        "Segitiga mana yang bisa diselesaikan sebelum memakai tinggi?",
        "Gunakan tiga sisi awal untuk mencari ∠A terlebih dahulu.",
        "Setelah ∠A diketahui, garis tegak lurus membentuk segitiga siku-siku untuk mencari AD dan CD."
      ]
    },
    "visual": {
      "type": "pr1H1"
    }
  },
  {
    "id": "H2",
    "level": "challenge",
    "family": "ambiguity",
    "title": {
      "en": "Ambiguous sine rule",
      "id": "Kasus ambigu aturan sinus"
    },
    "prompt": {
      "en": "In △ABC, A = 42°, a = 7 cm, b = 10 cm. Find all possible triangles. For each, determine B, C and c.",
      "id": "Pada △ABC, A = 42°, a = 7 cm, b = 10 cm. Tentukan semua segitiga yang mungkin. Untuk masing-masing, tentukan B, C, dan c."
    },
    "solution": {
      "en": "sin B = 10 sin 42° / 7 ≈ 0.955901. Hence B₁ ≈ 72.9° and B₂ ≈ 107.1°. Both are valid. The corresponding pairs are (C, c) ≈ (65.1°, 9.49 cm) and (30.9°, 5.38 cm).",
      "id": "sin B = 10 sin 42° / 7 ≈ 0,955901. Maka B₁ ≈ 72,9° dan B₂ ≈ 107,1°. Keduanya valid. Pasangan yang bersesuaian adalah (C, c) ≈ (65,1°, 9,49 cm) dan (30,9°, 5,38 cm)."
    },
    "check": {
      "mode": "self"
    },
    "hints": {
      "en": [
        "Identify the given angle ray and the fixed side length.",
        "The fixed-length circle locates candidate points on the allowed ray.",
        "Check both intersections against the triangle angle sum; retain only valid configurations."
      ],
      "id": [
        "Kenali sinar sudut yang diberikan dan panjang sisi tetap.",
        "Lingkaran panjang tetap menentukan titik kandidat pada sinar yang diizinkan.",
        "Uji kedua titik potong terhadap jumlah sudut segitiga; pertahankan konfigurasi yang valid."
      ]
    },
    "visual": {
      "type": "pr1H2"
    }
  },
  {
    "id": "H3",
    "level": "challenge",
    "family": "bearings",
    "title": {
      "en": "Two-stage bearing journey",
      "id": "Perjalanan dua tahap dengan bearing"
    },
    "prompt": {
      "en": "A ship sails 18 km from A to B on bearing 040°, then 14 km from B to C on bearing 155°. Find ∠ABC, AC, and the bearing of C from A.",
      "id": "Sebuah kapal berlayar 18 km dari A ke B pada bearing 040°, lalu 14 km dari B ke C pada bearing 155°. Tentukan ∠ABC, AC, dan bearing C dari A."
    },
    "solution": {
      "en": "The reverse bearing of A from B is 220°, so ∠ABC = 220° − 155° = 65°. Cosine rule gives AC ≈ 17.5 km. Then sine rule gives ∠BAC ≈ 46.4°, so the bearing of C from A is 040° + 46.4° ≈ 086°.",
      "id": "Bearing A dari B adalah 220°, sehingga ∠ABC = 220° − 155° = 65°. Aturan cosinus memberi AC ≈ 17,5 km. Lalu aturan sinus memberi ∠BAC ≈ 46,4°, sehingga bearing C dari A adalah 040° + 46,4° ≈ 086°."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "∠ABC (°)",
            "id": "∠ABC (°)"
          },
          "placeholder": "",
          "numeric": 65,
          "tolerance": 0.1
        },
        {
          "label": {
            "en": "AC (km)",
            "id": "AC (km)"
          },
          "placeholder": "",
          "numeric": 17.5214,
          "tolerance": 0.12
        },
        {
          "label": {
            "en": "Bearing of C from A",
            "id": "Bearing C dari A"
          },
          "placeholder": "",
          "numeric": 86,
          "tolerance": 0.6,
          "accepted": [
            "086",
            "86",
            "086°"
          ]
        }
      ]
    },
    "hints": {
      "en": [
        "Draw North at A and B before forming the triangle angle.",
        "At B, first find the reverse bearing of A from B.",
        "After finding ∠ABC, solve triangle ABC, then convert the angle at A back into a bearing."
      ],
      "id": [
        "Gambar arah Utara di A dan B sebelum menentukan sudut segitiga.",
        "Di B, cari dulu bearing balik A dari B.",
        "Setelah ∠ABC diketahui, selesaikan segitiga ABC, lalu ubah sudut di A kembali menjadi bearing."
      ]
    },
    "visual": {
      "type": "pr1H3",
      "legs": [
        {
          "d": 18,
          "b": 40
        },
        {
          "d": 14,
          "b": 155
        }
      ]
    }
  },
  {
    "id": "H4",
    "level": "challenge",
    "family": "elevation",
    "title": {
      "en": "Tower between two observers",
      "id": "Menara di antara dua pengamat"
    },
    "prompt": {
      "en": "Points A and B lie on opposite sides of the foot T of a vertical tower. AB = 80 m. The angles of elevation are 28° from A and 41° from B. Find AT, BT and the tower height.",
      "id": "Titik A dan B berada pada sisi yang berlawanan dari kaki T sebuah menara vertikal. AB = 80 m. Sudut elevasi dari A adalah 28° dan dari B adalah 41°. Tentukan AT, BT, dan tinggi menara."
    },
    "solution": {
      "en": "Let AT = x, so BT = 80 − x. Equal tower height gives x tan 28° = (80 − x) tan 41°. Thus AT ≈ 49.6 m, BT ≈ 30.4 m and height ≈ 26.4 m.",
      "id": "Misalkan AT = x, maka BT = 80 − x. Tinggi menara yang sama memberi x tan 28° = (80 − x) tan 41°. Jadi AT ≈ 49,6 m, BT ≈ 30,4 m, dan tinggi ≈ 26,4 m."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "AT (m)",
            "id": "AT (m)"
          },
          "placeholder": "",
          "numeric": 49.6382,
          "tolerance": 0.15
        },
        {
          "label": {
            "en": "BT (m)",
            "id": "BT (m)"
          },
          "placeholder": "",
          "numeric": 30.3618,
          "tolerance": 0.15
        },
        {
          "label": {
            "en": "Tower height (m)",
            "id": "Tinggi menara (m)"
          },
          "placeholder": "",
          "numeric": 26.3931,
          "tolerance": 0.15
        }
      ]
    },
    "hints": {
      "en": [
        "Let one ground distance be a variable; the other is 80 minus that distance.",
        "Both observers see the same tower height.",
        "Write the two tangent expressions for the height and set them equal."
      ],
      "id": [
        "Misalkan salah satu jarak mendatar sebagai variabel; jarak lainnya adalah 80 dikurangi jarak tersebut.",
        "Kedua pengamat melihat tinggi menara yang sama.",
        "Tuliskan dua ekspresi tangen untuk tinggi, lalu samakan keduanya."
      ]
    },
    "visual": {
      "type": "pr1H4"
    }
  },
  {
    "id": "H5",
    "level": "challenge",
    "family": "multi-triangle",
    "title": {
      "en": "Quadrilateral by two triangles",
      "id": "Segiempat melalui dua segitiga"
    },
    "prompt": {
      "en": "Diagonal AC divides quadrilateral ABCD. Given AB = 9, BC = 12, ∠ABC = 50°, and AD = 11, CD = 8, find AC, ∠ADC, and the total area of ABCD.",
      "id": "Diagonal AC membagi segiempat ABCD. Diketahui AB = 9, BC = 12, ∠ABC = 50°, serta AD = 11, CD = 8. Tentukan AC, ∠ADC, dan luas total ABCD."
    },
    "solution": {
      "en": "First, AC² = 9² + 12² − 2(9)(12) cos 50°, so AC ≈ 9.28. In △ADC, cos D = (11² + 8² − AC²)/(2·11·8), so D ≈ 55.8°. The two triangle areas sum to ≈ 77.8 square units.",
      "id": "Pertama, AC² = 9² + 12² − 2(9)(12) cos 50°, sehingga AC ≈ 9,28. Pada △ADC, cos D = (11² + 8² − AC²)/(2·11·8), sehingga D ≈ 55,8°. Jumlah luas kedua segitiga ≈ 77,8 satuan luas."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "AC",
            "id": "AC"
          },
          "placeholder": "",
          "numeric": 9.2821,
          "tolerance": 0.08
        },
        {
          "label": {
            "en": "∠ADC (°)",
            "id": "∠ADC (°)"
          },
          "placeholder": "",
          "numeric": 55.8333,
          "tolerance": 0.15
        },
        {
          "label": {
            "en": "Total area",
            "id": "Luas total"
          },
          "placeholder": "",
          "numeric": 77.7723,
          "tolerance": 0.2
        }
      ]
    },
    "hints": {
      "en": [
        "Which triangle is solvable immediately from the givens?",
        "Use △ABC first to find the shared diagonal AC.",
        "Transfer AC into △ADC, then find ∠D and add the two triangle areas."
      ],
      "id": [
        "Segitiga mana yang bisa langsung diselesaikan dari data awal?",
        "Gunakan △ABC terlebih dahulu untuk mencari diagonal bersama AC.",
        "Pindahkan nilai AC ke △ADC, lalu cari ∠D dan jumlahkan luas kedua segitiga."
      ]
    },
    "visual": {
      "type": "pr1H5"
    }
  },
  {
    "id": "H6",
    "level": "challenge",
    "family": "ambiguity",
    "title": {
      "en": "Area with two possible angles",
      "id": "Luas dengan dua kemungkinan sudut"
    },
    "prompt": {
      "en": "A triangle has two sides 10 cm and 14 cm and area 49 cm². Find all possible included angles and the corresponding third side for each triangle.",
      "id": "Sebuah segitiga memiliki dua sisi 10 cm dan 14 cm serta luas 49 cm². Tentukan semua kemungkinan sudut apit dan sisi ketiga yang bersesuaian untuk setiap segitiga."
    },
    "solution": {
      "en": "49 = 1/2(10)(14) sin C, so sin C = 0.7. Thus C ≈ 44.4° or 135.6°. The corresponding third sides from the cosine rule are approximately 9.80 cm and 22.3 cm.",
      "id": "49 = 1/2(10)(14) sin C, sehingga sin C = 0,7. Maka C ≈ 44,4° atau 135,6°. Sisi ketiga yang bersesuaian dari aturan cosinus adalah sekitar 9,80 cm dan 22,3 cm."
    },
    "check": {
      "mode": "self"
    },
    "hints": {
      "en": [
        "Identify the two fixed sides and the included angle that control the area.",
        "The supplementary ray shows the second included-angle configuration.",
        "Equal sine values can give the same area; compare the corresponding sides with cosine rule."
      ],
      "id": [
        "Kenali dua sisi tetap dan sudut apit yang menentukan luas.",
        "Sinar suplementer menunjukkan konfigurasi sudut apit kedua.",
        "Nilai sinus yang sama dapat memberi luas sama; bandingkan sisi yang bersesuaian dengan aturan cosinus."
      ]
    },
    "visual": {
      "type": "pr1H6"
    }
  },
  {
    "id": "H7",
    "level": "challenge",
    "family": "similarity",
    "title": {
      "en": "Similarity + trigonometry",
      "id": "Kesebangunan + trigonometri"
    },
    "prompt": {
      "en": "Triangle ABC has AB = 8, AC = 11, ∠BAC = 52°. Triangle DEF is similar to ABC with correspondence A ↔ D, B ↔ E, C ↔ F. The area of DEF is three times the area of ABC. Find the linear scale factor, the three side lengths of DEF, and its perimeter.",
      "id": "Segitiga ABC memiliki AB = 8, AC = 11, ∠BAC = 52°. Segitiga DEF sebangun dengan ABC dengan korespondensi A ↔ D, B ↔ E, C ↔ F. Luas DEF tiga kali luas ABC. Tentukan faktor skala panjang, ketiga sisi DEF, dan kelilingnya."
    },
    "solution": {
      "en": "Area scale = 3, so the linear scale factor is √3. First, BC ≈ 8.75 by the cosine rule. Therefore DE ≈ 13.9, DF ≈ 19.1, EF ≈ 15.2 and the perimeter is ≈ 48.1.",
      "id": "Faktor skala luas = 3, sehingga faktor skala panjang = √3. Dengan aturan cosinus, BC ≈ 8,75. Maka DE ≈ 13,9, DF ≈ 19,1, EF ≈ 15,2 dan kelilingnya ≈ 48,1."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "Linear scale factor",
            "id": "Faktor skala panjang"
          },
          "placeholder": "",
          "numeric": 1.7320508075688772,
          "tolerance": 0.02,
          "accepted": [
            "sqrt3",
            "√3"
          ]
        },
        {
          "label": {
            "en": "DE",
            "id": "DE"
          },
          "placeholder": "",
          "numeric": 13.8564,
          "tolerance": 0.12
        },
        {
          "label": {
            "en": "DF",
            "id": "DF"
          },
          "placeholder": "",
          "numeric": 19.0526,
          "tolerance": 0.12
        },
        {
          "label": {
            "en": "EF",
            "id": "EF"
          },
          "placeholder": "",
          "numeric": 15.1635,
          "tolerance": 0.12
        },
        {
          "label": {
            "en": "Perimeter",
            "id": "Keliling"
          },
          "placeholder": "",
          "numeric": 48.0724,
          "tolerance": 0.2
        }
      ]
    },
    "hints": {
      "en": [
        "Match the corresponding vertices A↔D, B↔E and C↔F.",
        "Pair the corresponding sides before using the scale factor.",
        "Area scales as the square of the linear factor, so first establish a correct side correspondence."
      ],
      "id": [
        "Pasangkan titik bersesuaian A↔D, B↔E, dan C↔F.",
        "Pasangkan sisi bersesuaian sebelum menggunakan faktor skala.",
        "Luas berubah menurut kuadrat faktor panjang; pastikan korespondensi sisinya benar terlebih dahulu."
      ]
    },
    "visual": {
      "type": "pr1H7"
    }
  },
  {
    "id": "H8",
    "level": "challenge",
    "family": "circle-trig",
    "title": {
      "en": "Circle, chord and radians",
      "id": "Lingkaran, tali busur, dan radian"
    },
    "prompt": {
      "en": "A circle has radius 8 cm. A chord has length 12 cm. Let θ be the minor central angle subtended by the chord. Find θ in degrees and radians, the minor arc length, and the minor segment area.",
      "id": "Sebuah lingkaran berjari-jari 8 cm memiliki tali busur sepanjang 12 cm. Misalkan θ adalah sudut pusat minor yang menghadap tali busur tersebut. Tentukan θ dalam derajat dan radian, panjang busur minor, dan luas tembereng minor."
    },
    "solution": {
      "en": "Half-chord = 6, so sin(θ/2) = 6/8 = 3/4. Therefore θ ≈ 97.2° ≈ 1.696 rad. Arc length ≈ 13.6 cm. Minor segment area = 1/2(8²)(θ − sin θ) ≈ 22.5 cm².",
      "id": "Setengah tali busur = 6, sehingga sin(θ/2) = 6/8 = 3/4. Maka θ ≈ 97,2° ≈ 1,696 rad. Panjang busur ≈ 13,6 cm. Luas tembereng minor = 1/2(8²)(θ − sin θ) ≈ 22,5 cm²."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "θ (degrees)",
            "id": "θ (derajat)"
          },
          "placeholder": "",
          "numeric": 97.1808,
          "tolerance": 0.15
        },
        {
          "label": {
            "en": "θ (radians)",
            "id": "θ (radian)"
          },
          "placeholder": "",
          "numeric": 1.69612,
          "tolerance": 0.015
        },
        {
          "label": {
            "en": "Minor arc (cm)",
            "id": "Busur minor (cm)"
          },
          "placeholder": "",
          "numeric": 13.569,
          "tolerance": 0.12
        },
        {
          "label": {
            "en": "Segment area (cm²)",
            "id": "Luas tembereng (cm²)"
          },
          "placeholder": "",
          "numeric": 22.527,
          "tolerance": 0.18
        }
      ]
    },
    "hints": {
      "en": [
        "Begin with the isosceles radius-chord triangle OAB.",
        "Bisect AB at M and construct OM perpendicular to AB.",
        "The right triangle gives the half-angle relation needed before using circular measure."
      ],
      "id": [
        "Mulai dengan segitiga sama kaki jari-jari dan tali busur OAB.",
        "Bagi AB di M dan buat OM tegak lurus AB.",
        "Segitiga siku-siku memberi hubungan setengah sudut sebelum ukuran lingkaran digunakan."
      ]
    },
    "visual": {
      "type": "pr1H8"
    }
  },
  {
    "id": "H9",
    "level": "challenge",
    "family": "bearings",
    "title": {
      "en": "Reconstruct a bearing",
      "id": "Merekonstruksi bearing"
    },
    "prompt": {
      "en": "From point A, AB = 15 km on bearing 050°. Point C is 20 km from A and BC = 13 km. C lies clockwise from ray AB. Find the bearing of C from A.",
      "id": "Dari titik A, AB = 15 km pada bearing 050°. Titik C berjarak 20 km dari A dan BC = 13 km. C berada pada sisi searah jarum jam dari sinar AB. Tentukan bearing C dari A."
    },
    "solution": {
      "en": "In triangle ABC, the cosine rule gives ∠BAC ≈ 40.5°. Since C lies clockwise from ray AB, the bearing is 050° + 40.5° ≈ 091°.",
      "id": "Pada segitiga ABC, aturan cosinus memberi ∠BAC ≈ 40,5°. Karena C berada searah jarum jam dari sinar AB, bearing-nya adalah 050° + 40,5° ≈ 091°."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "Bearing of C from A",
            "id": "Bearing C dari A"
          },
          "placeholder": "",
          "numeric": 91,
          "tolerance": 0.6,
          "accepted": [
            "091",
            "91",
            "90.5"
          ]
        }
      ]
    },
    "hints": {
      "en": [
        "Locate the stated bearing ray from A and its 050° North reference.",
        "Treat AC and BC as distance loci; their intersections are candidate placements.",
        "Use the stated admissible side of AB to select the intended configuration."
      ],
      "id": [
        "Tentukan sinar bearing dari A dan acuan Utara 050°.",
        "Gunakan AC dan BC sebagai lokus jarak; titik potongnya menjadi posisi kandidat.",
        "Gunakan sisi AB yang diizinkan dalam soal untuk memilih konfigurasi yang dimaksud."
      ]
    },
    "visual": {
      "type": "pr1H9"
    }
  },
  {
    "id": "H10",
    "level": "challenge",
    "family": "feasibility",
    "title": {
      "en": "Does the triangle exist?",
      "id": "Apakah segitiganya mungkin?"
    },
    "prompt": {
      "en": "Suppose A = 25°, a = 4, b = 10. Determine whether a triangle exists. Give both an algebraic/trigonometric justification and a geometric justification.",
      "id": "Diketahui A = 25°, a = 4, b = 10. Tentukan apakah segitiga tersebut mungkin terbentuk. Berikan alasan aljabar/trigonometri dan alasan geometri."
    },
    "solution": {
      "en": "Sine rule would require sin B = 10 sin 25° / 4 ≈ 1.06 > 1, so no triangle exists. Geometrically, the required perpendicular height is 10 sin 25° ≈ 4.23 > a = 4, so the side of length 4 cannot reach the required position.",
      "id": "Aturan sinus akan menuntut sin B = 10 sin 25° / 4 ≈ 1,06 > 1, sehingga tidak ada segitiga yang mungkin. Secara geometri, tinggi minimum yang diperlukan adalah 10 sin 25° ≈ 4,23 > a = 4, sehingga sisi panjang 4 tidak dapat mencapai posisi yang dibutuhkan."
    },
    "check": {
      "mode": "self"
    },
    "hints": {
      "en": [
        "Identify the ray defining angle A and the given side b.",
        "Add the fixed-length reach circle to see possible endpoint intersections.",
        "Drop the perpendicular height and compare it with fixed side a to classify feasibility."
      ],
      "id": [
        "Kenali sinar pembentuk sudut A dan sisi b yang diberikan.",
        "Tambahkan lingkaran jangkauan sisi tetap untuk melihat titik potong yang mungkin.",
        "Tarik tinggi tegak lurus dan bandingkan dengan sisi tetap a untuk menentukan kemungkinan."
      ]
    },
    "visual": {
      "type": "pr1H10"
    }
  },
  {
    "id": "A1",
    "level": "advanced",
    "family": "multi-triangle",
    "title": {
      "en": "Triangulation",
      "id": "Triangulasi"
    },
    "prompt": {
      "en": "Observation points A and B are 120 m apart. Target C lies on the same side of line AB and ∠CAB = 53°, ∠CBA = 68°. Find AC, BC, and the perpendicular distance from C to AB.",
      "id": "Titik pengamatan A dan B berjarak 120 m. Target C berada pada sisi yang sama terhadap garis AB dengan ∠CAB = 53° dan ∠CBA = 68°. Tentukan AC, BC, dan jarak tegak lurus C ke AB."
    },
    "solution": {
      "en": "∠C = 59°. Sine rule gives AC ≈ 130 m and BC ≈ 112 m. The perpendicular distance from C to AB is AC sin 53° ≈ 104 m.",
      "id": "∠C = 59°. Aturan sinus memberi AC ≈ 130 m dan BC ≈ 112 m. Jarak tegak lurus C ke AB adalah AC sin 53° ≈ 104 m."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "AC (m)",
            "id": "AC (m)"
          },
          "placeholder": "",
          "numeric": 129.802,
          "tolerance": 0.8
        },
        {
          "label": {
            "en": "BC (m)",
            "id": "BC (m)"
          },
          "placeholder": "",
          "numeric": 111.806,
          "tolerance": 0.8
        },
        {
          "label": {
            "en": "Perpendicular distance (m)",
            "id": "Jarak tegak lurus (m)"
          },
          "placeholder": "",
          "numeric": 103.665,
          "tolerance": 0.8
        }
      ]
    },
    "hints": {
      "en": [
        "Identify △ABC as the observation triangle and locate the requested height.",
        "Now add the perpendicular from C to AB; keep its length unknown.",
        "Use the right triangle containing the perpendicular to connect a known sloping side to the height."
      ],
      "id": [
        "Kenali △ABC sebagai segitiga pengamatan dan tentukan letak tinggi yang diminta.",
        "Sekarang tarik garis tegak lurus dari C ke AB; panjangnya tetap belum diketahui.",
        "Gunakan segitiga siku-siku yang memuat tinggi itu untuk mengaitkan sisi miring yang diketahui dengan tinggi."
      ]
    },
    "visual": {
      "type": "triangulation",
      "base": 120,
      "leftAngle": 53,
      "rightAngle": 68
    }
  },
  {
    "id": "A2",
    "level": "advanced",
    "family": "multi-triangle",
    "title": {
      "en": "Multi-stage quadrilateral",
      "id": "Segiempat bertahap"
    },
    "prompt": {
      "en": "Diagonal BD divides quadrilateral ABCD. In △ABD, AB = 7, AD = 10, ∠BAD = 65°. Also BC = 9 and CD = 12. Find BD, ∠BCD, and the total area of ABCD.",
      "id": "Diagonal BD membagi segiempat ABCD. Pada △ABD, AB = 7, AD = 10, ∠BAD = 65°. Selain itu BC = 9 dan CD = 12. Tentukan BD, ∠BCD, dan luas total ABCD."
    },
    "solution": {
      "en": "BD² = 7² + 10² − 2(7)(10) cos 65°, so BD ≈ 9.48. Then in △BCD, cos C = (9² + 12² − BD²)/(2·9·12), so C ≈ 51.3°. The two triangle areas sum to ≈ 73.8.",
      "id": "BD² = 7² + 10² − 2(7)(10) cos 65°, sehingga BD ≈ 9,48. Lalu pada △BCD, cos C = (9² + 12² − BD²)/(2·9·12), sehingga C ≈ 51,3°. Jumlah luas kedua segitiga ≈ 73,8."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "BD",
            "id": "BD"
          },
          "placeholder": "",
          "numeric": 9.47805,
          "tolerance": 0.08
        },
        {
          "label": {
            "en": "∠BCD (°)",
            "id": "∠BCD (°)"
          },
          "placeholder": "",
          "numeric": 51.2612,
          "tolerance": 0.15
        },
        {
          "label": {
            "en": "Total area",
            "id": "Luas total"
          },
          "placeholder": "",
          "numeric": 73.8411,
          "tolerance": 0.2
        }
      ]
    },
    "hints": {
      "en": [
        "Which triangle contains only known information at the start?",
        "Solve △ABD for the gateway diagonal BD.",
        "Transfer BD into △BCD, solve for angle C, then add the two triangle areas."
      ],
      "id": [
        "Segitiga mana yang hanya berisi informasi yang sudah diketahui di awal?",
        "Selesaikan △ABD untuk mendapatkan diagonal penghubung BD.",
        "Gunakan BD pada △BCD, cari sudut C, lalu jumlahkan luas kedua segitiga."
      ]
    },
    "visual": {
      "type": "quadrilateralDiag",
      "diag": "BD",
      "givens": [
        "AB 7",
        "AD 10",
        "∠A 65°",
        "BC 9",
        "CD 12"
      ]
    }
  },
  {
    "id": "A3",
    "level": "advanced",
    "family": "bearings",
    "title": {
      "en": "Three-leg bearing journey",
      "id": "Perjalanan bearing tiga tahap"
    },
    "prompt": {
      "en": "A survey vehicle travels:\n20 km on 030°,\nthen 15 km on 120°,\nthen 12 km on 210°.\nFind the total east-west displacement, total north-south displacement, straight-line distance from the start, and final bearing from the start.",
      "id": "Sebuah kendaraan survei bergerak:\n20 km pada 030°,\nlalu 15 km pada 120°,\nlalu 12 km pada 210°.\nTentukan perpindahan total timur-barat, perpindahan total utara-selatan, jarak lurus dari titik awal, dan bearing akhir dari titik awal."
    },
    "solution": {
      "en": "Using E = d sin β and N = d cos β, the total is E ≈ 17.0 km east and N ≈ −0.572 km, i.e. 0.572 km south. The straight-line displacement is 17.0 km and the final bearing is approximately 092°.",
      "id": "Dengan E = d sin β dan N = d cos β, diperoleh total E ≈ 17,0 km ke timur dan N ≈ −0,572 km, yaitu 0,572 km ke selatan. Jarak lurusnya 17,0 km dan bearing akhir sekitar 092°."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "East displacement (km)",
            "id": "Perpindahan timur (km)"
          },
          "placeholder": "",
          "numeric": 16.9904,
          "tolerance": 0.12
        },
        {
          "label": {
            "en": "South displacement (km)",
            "id": "Perpindahan selatan (km)"
          },
          "placeholder": "",
          "numeric": 0.5718,
          "tolerance": 0.04
        },
        {
          "label": {
            "en": "Straight-line distance (km)",
            "id": "Jarak lurus (km)"
          },
          "placeholder": "",
          "numeric": 17,
          "tolerance": 0.12
        },
        {
          "label": {
            "en": "Final bearing",
            "id": "Bearing akhir"
          },
          "placeholder": "",
          "numeric": 92,
          "tolerance": 0.6,
          "accepted": [
            "092",
            "92",
            "91.9"
          ]
        }
      ]
    },
    "hints": {
      "en": [
        "Trace the three legs in the order travelled and keep each bearing tied to its own segment.",
        "Project each leg onto East and North directions.",
        "Only after projection, combine the signed components to obtain the displacement."
      ],
      "id": [
        "Telusuri ketiga ruas sesuai urutan perjalanan dan kaitkan setiap bearing dengan ruasnya.",
        "Proyeksikan setiap ruas ke arah Timur dan Utara.",
        "Setelah diproyeksikan, gabungkan komponen bertanda untuk memperoleh perpindahan."
      ]
    },
    "visual": {
      "type": "bearingJourney",
      "legs": [
        {
          "d": 20,
          "b": 30,
          "label": "20 · 030°"
        },
        {
          "d": 15,
          "b": 120,
          "label": "15 · 120°"
        },
        {
          "d": 12,
          "b": 210,
          "label": "12 · 210°"
        }
      ]
    }
  },
  {
    "id": "A4",
    "level": "advanced",
    "family": "ambiguity",
    "title": {
      "en": "Two possible bearings",
      "id": "Dua kemungkinan bearing"
    },
    "prompt": {
      "en": "From A, AB = 10 km on bearing 060°. Point C satisfies AC = 14 km and BC = 8 km. No information is given about which side of AB contains C. Find all possible bearings of C from A.",
      "id": "Dari A, AB = 10 km pada bearing 060°. Titik C memenuhi AC = 14 km dan BC = 8 km. Tidak diberikan informasi tentang C berada di sisi mana terhadap AB. Tentukan semua kemungkinan bearing C dari A."
    },
    "solution": {
      "en": "Cosine rule gives α = ∠BAC ≈ 34.0°. The two mirror orientations relative to bearing 060° give bearings 026° or 094°.",
      "id": "Aturan cosinus memberi α = ∠BAC ≈ 34,0°. Dua orientasi cermin terhadap bearing 060° memberi bearing 026° atau 094°."
    },
    "check": {
      "mode": "self"
    },
    "hints": {
      "en": [
        "Use the three side lengths to identify the triangle shape first; do not choose a side of AB yet.",
        "Reflect the triangle across AB: both placements satisfy the same side lengths.",
        "Relate each placement to the 060° ray as 060° ± ∠BAC, without evaluating either bearing."
      ],
      "id": [
        "Gunakan tiga panjang sisi untuk mengenali segitiganya; jangan pilih sisi AB tempat C berada dulu.",
        "Cerminkan segitiga terhadap AB: kedua posisi memenuhi panjang sisi yang sama.",
        "Hubungkan setiap posisi dengan sinar 060° sebagai 060° ± ∠BAC tanpa menghitung bearingnya."
      ]
    },
    "visual": {
      "type": "ambiguity",
      "base": 10,
      "bearing": 60,
      "AC": 14,
      "BC": 8
    }
  },
  {
    "id": "A5",
    "level": "advanced",
    "family": "parameter",
    "title": {
      "en": "Parameter from geometry",
      "id": "Parameter dari geometri"
    },
    "prompt": {
      "en": "A triangle has two sides x + 2 and x + 5 with included angle 60°. The third side is 7. Find all algebraic values of x, the geometrically valid value, the area and the perimeter.",
      "id": "Sebuah segitiga memiliki dua sisi x + 2 dan x + 5 dengan sudut apit 60°. Sisi ketiganya 7. Tentukan semua nilai aljabar x, nilai yang valid secara geometri, luas, dan keliling."
    },
    "solution": {
      "en": "Cosine rule gives 49 = (x+2)² + (x+5)² − (x+2)(x+5), so (x−3)(x+10)=0. Thus x=3 or −10 algebraically, but only x=3 gives positive side lengths. The sides are 5, 8, 7, area = 10√3 and perimeter = 20.",
      "id": "Aturan cosinus memberi 49 = (x+2)² + (x+5)² − (x+2)(x+5), sehingga (x−3)(x+10)=0. Secara aljabar x=3 atau −10, tetapi hanya x=3 yang menghasilkan panjang sisi positif. Sisinya 5, 8, 7, luas = 10√3, dan keliling = 20."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "All algebraic x values",
            "id": "Semua nilai aljabar x"
          },
          "placeholder": "",
          "accepted": [
            "3,-10",
            "-10,3",
            "3and-10",
            "-10and3",
            "3 dan -10",
            "-10 dan 3"
          ]
        },
        {
          "label": {
            "en": "Geometrically valid x",
            "id": "x yang valid secara geometri"
          },
          "placeholder": "",
          "numeric": 3,
          "tolerance": 0.01
        },
        {
          "label": {
            "en": "Area",
            "id": "Luas"
          },
          "placeholder": "",
          "numeric": 17.32050807568877,
          "tolerance": 0.08,
          "accepted": [
            "10sqrt3",
            "10√3"
          ]
        },
        {
          "label": {
            "en": "Perimeter",
            "id": "Keliling"
          },
          "placeholder": "",
          "numeric": 20,
          "tolerance": 0.01
        }
      ]
    },
    "hints": {
      "en": [
        "Mark the original side expressions x+2 and x+5 and the included 60° angle.",
        "Translate those original geometric givens into the cosine-rule equation.",
        "Treat algebraic roots as candidates; check positive lengths and the original triangle condition."
      ],
      "id": [
        "Tandai ekspresi sisi awal x+2 dan x+5 serta sudut apit 60°.",
        "Terjemahkan informasi geometri awal itu menjadi persamaan aturan cosinus.",
        "Anggap akar aljabar sebagai kandidat; periksa panjang positif dan syarat segitiga awal."
      ]
    },
    "visual": {
      "type": "parameterTriangle",
      "side1": "x + 2",
      "side2": "x + 5",
      "side3": "7",
      "angle": "60°"
    }
  },
  {
    "id": "A6",
    "level": "advanced",
    "family": "circle-trig",
    "title": {
      "en": "Chord, tangents and circular measure",
      "id": "Tali busur, garis singgung, dan ukuran lingkaran"
    },
    "prompt": {
      "en": "A circle has centre O, radius 10 cm, and chord AB = 12 cm. Tangents at A and B meet at an external point P. Let θ = ∠AOB be the minor central angle. Find θ in radians, PA, the perimeter of the region bounded by PA, PB and minor arc AB, and the area of that region.",
      "id": "Sebuah lingkaran berpusat O dengan jari-jari 10 cm dan tali busur AB = 12 cm. Garis singgung di A dan B bertemu di titik luar P. Misalkan θ = ∠AOB adalah sudut pusat minor. Tentukan θ dalam radian, PA, keliling daerah yang dibatasi PA, PB, dan busur minor AB, serta luas daerah tersebut."
    },
    "solution": {
      "en": "Half-chord = 6, so θ = 2 sin⁻¹(3/5) ≈ 1.287 rad. The tangent length is PA = 7.5 cm. Therefore perimeter = 15 + 10θ ≈ 27.9 cm and area = 75 − 50θ ≈ 10.6 cm².",
      "id": "Setengah tali busur = 6, sehingga θ = 2 sin⁻¹(3/5) ≈ 1,287 rad. Panjang garis singgung PA = 7,5 cm. Maka keliling = 15 + 10θ ≈ 27,9 cm dan luas = 75 − 50θ ≈ 10,6 cm²."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "θ (rad)",
            "id": "θ (rad)"
          },
          "placeholder": "",
          "numeric": 1.287,
          "tolerance": 0.015
        },
        {
          "label": {
            "en": "PA (cm)",
            "id": "PA (cm)"
          },
          "placeholder": "",
          "numeric": 7.5,
          "tolerance": 0.08
        },
        {
          "label": {
            "en": "Perimeter (cm)",
            "id": "Keliling (cm)"
          },
          "placeholder": "",
          "numeric": 27.87,
          "tolerance": 0.15
        },
        {
          "label": {
            "en": "Area (cm²)",
            "id": "Luas (cm²)"
          },
          "placeholder": "",
          "numeric": 10.6499,
          "tolerance": 0.15
        }
      ]
    },
    "hints": {
      "en": [
        "Start with the isosceles triangle formed by OA, OB and chord AB.",
        "Add the chord midpoint M and OM perpendicular to AB.",
        "Use one resulting right triangle; tangent-radius perpendicularity supplies the later tangent relationship."
      ],
      "id": [
        "Mulai dari segitiga sama kaki yang dibentuk OA, OB, dan tali busur AB.",
        "Tambahkan titik tengah tali busur M dan OM yang tegak lurus AB.",
        "Gunakan salah satu segitiga siku-siku; ketegaklurusan jari-jari dan garis singgung memberi hubungan berikutnya."
      ]
    },
    "visual": {
      "type": "tangentChord",
      "r": 10,
      "chord": 12
    }
  },
  {
    "id": "A7",
    "level": "advanced",
    "family": "proof",
    "title": {
      "en": "Prove the angle classification",
      "id": "Buktikan klasifikasi sudut"
    },
    "prompt": {
      "en": "In △ABC, side c lies opposite angle C. Using the cosine rule, prove:\nC < 90° ⇔ c² < a² + b²,\nC = 90° ⇔ c² = a² + b²,\nC > 90° ⇔ c² > a² + b².\nExplain how this acts as a plausibility check.",
      "id": "Pada △ABC, sisi c berhadapan dengan sudut C. Dengan aturan cosinus, buktikan:\nC < 90° ⇔ c² < a² + b²,\nC = 90° ⇔ c² = a² + b²,\nC > 90° ⇔ c² > a² + b².\nJelaskan bagaimana hasil ini dapat digunakan sebagai pemeriksaan kewajaran."
    },
    "solution": {
      "en": "From c² = a² + b² − 2ab cos C: if C < 90°, then cos C > 0, so c² < a²+b²; if C = 90°, cos C = 0, giving equality; if C > 90°, cos C < 0, so c² > a²+b². This lets you classify/check the angle type before calculating C exactly.",
      "id": "Dari c² = a² + b² − 2ab cos C: jika C < 90°, maka cos C > 0 sehingga c² < a²+b²; jika C = 90°, cos C = 0 sehingga diperoleh kesamaan; jika C > 90°, cos C < 0 sehingga c² > a²+b². Ini memungkinkan kita mengklasifikasikan atau mengecek jenis sudut sebelum menghitung C secara tepat."
    },
    "check": {
      "mode": "self"
    },
    "hints": {
      "en": [
        "Start from the cosine rule with c opposite C.",
        "The only changing sign comes from cos C. What is its sign for acute, right and obtuse angles?",
        "Translate the sign of −2ab cos C into a comparison between c² and a²+b²."
      ],
      "id": [
        "Mulai dari aturan cosinus dengan c berhadapan dengan C.",
        "Tanda yang berubah berasal dari cos C. Apa tandanya untuk sudut lancip, siku-siku, dan tumpul?",
        "Ubah tanda −2ab cos C menjadi perbandingan antara c² dan a²+b²."
      ]
    },
    "visual": null
  },
  {
    "id": "A8",
    "level": "advanced",
    "family": "bearings",
    "title": {
      "en": "Bearings from two stations",
      "id": "Bearing dari dua stasiun"
    },
    "prompt": {
      "en": "Points A and B are 50 km apart, with B due east of A. Station C is observed on bearing 035° from A and bearing 300° from B. Find ∠CAB, ∠CBA, AC, BC, and the perpendicular distance from C to AB.",
      "id": "Titik A dan B berjarak 50 km, dengan B tepat di sebelah timur A. Stasiun C diamati pada bearing 035° dari A dan bearing 300° dari B. Tentukan ∠CAB, ∠CBA, AC, BC, dan jarak tegak lurus C ke AB."
    },
    "solution": {
      "en": "Because AB is due east, ∠CAB = 90° − 35° = 55° and ∠CBA = 300° − 270° = 30°. Thus ∠C = 95°. Sine rule gives AC ≈ 25.1 km and BC ≈ 41.1 km. The perpendicular distance is AC sin 55° ≈ 20.6 km.",
      "id": "Karena AB tepat ke timur, ∠CAB = 90° − 35° = 55° dan ∠CBA = 300° − 270° = 30°. Maka ∠C = 95°. Aturan sinus memberi AC ≈ 25,1 km dan BC ≈ 41,1 km. Jarak tegak lurusnya AC sin 55° ≈ 20,6 km."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "∠CAB (°)",
            "id": "∠CAB (°)"
          },
          "placeholder": "",
          "numeric": 55,
          "tolerance": 0.1
        },
        {
          "label": {
            "en": "∠CBA (°)",
            "id": "∠CBA (°)"
          },
          "placeholder": "",
          "numeric": 30,
          "tolerance": 0.1
        },
        {
          "label": {
            "en": "AC (km)",
            "id": "AC (km)"
          },
          "placeholder": "",
          "numeric": 25.0955,
          "tolerance": 0.15
        },
        {
          "label": {
            "en": "BC (km)",
            "id": "BC (km)"
          },
          "placeholder": "",
          "numeric": 41.1141,
          "tolerance": 0.2
        },
        {
          "label": {
            "en": "Perpendicular distance (km)",
            "id": "Jarak tegak lurus (km)"
          },
          "placeholder": "",
          "numeric": 20.557,
          "tolerance": 0.15
        }
      ]
    },
    "hints": {
      "en": [
        "Construct the triangle from the two stated bearing rays and identify their intersection C.",
        "Read the internal base angles from the North references and the east-west baseline.",
        "Add the perpendicular helper only after the ground triangle is understood."
      ],
      "id": [
        "Bangun segitiga dari dua sinar bearing yang diberikan dan tentukan titik potong C.",
        "Baca sudut alas dalam dari acuan Utara dan garis dasar timur-barat.",
        "Tambahkan garis tegak lurus setelah segitiga pada denah dipahami."
      ]
    },
    "visual": {
      "type": "bearingStations",
      "AB": 50,
      "bearingA": 35,
      "bearingB": 300
    }
  },
  {
    "id": "A9",
    "level": "advanced",
    "family": "elevation",
    "title": {
      "en": "Ground bearings + elevation",
      "id": "Bearing di tanah + elevasi"
    },
    "prompt": {
      "en": "Points A and B are 50 m apart, with B on bearing 090° from A. The foot T of a vertical tower is on bearing 040° from A and 330° from B. The angle of elevation from A to the top U is 30°. Find AT, BT, tower height TU, and the angle of elevation from B to U.",
      "id": "Titik A dan B berjarak 50 m, dengan B pada bearing 090° dari A. Kaki T dari sebuah menara vertikal berada pada bearing 040° dari A dan 330° dari B. Sudut elevasi dari A ke puncak U adalah 30°. Tentukan AT, BT, tinggi menara TU, dan sudut elevasi dari B ke U."
    },
    "solution": {
      "en": "The ground triangle has ∠BAT = 50°, ∠ABT = 60°, ∠ATB = 70°. Sine rule gives AT ≈ 46.1 m and BT ≈ 40.8 m. Then TU = AT tan 30° ≈ 26.6 m. Finally, the elevation angle from B is arctan(26.6/40.8) ≈ 33.1°.",
      "id": "Segitiga di tanah memiliki ∠BAT = 50°, ∠ABT = 60°, ∠ATB = 70°. Aturan sinus memberi AT ≈ 46,1 m dan BT ≈ 40,8 m. Lalu TU = AT tan 30° ≈ 26,6 m. Terakhir, sudut elevasi dari B adalah arctan(26,6/40,8) ≈ 33,1°."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "AT (m)",
            "id": "AT (m)"
          },
          "placeholder": "",
          "numeric": 46.0802,
          "tolerance": 0.2
        },
        {
          "label": {
            "en": "BT (m)",
            "id": "BT (m)"
          },
          "placeholder": "",
          "numeric": 40.7604,
          "tolerance": 0.2
        },
        {
          "label": {
            "en": "Tower height TU (m)",
            "id": "Tinggi menara TU (m)"
          },
          "placeholder": "",
          "numeric": 26.6044,
          "tolerance": 0.2
        },
        {
          "label": {
            "en": "Elevation from B (°)",
            "id": "Sudut elevasi dari B (°)"
          },
          "placeholder": "",
          "numeric": 33.1326,
          "tolerance": 0.15
        }
      ]
    },
    "hints": {
      "en": [
        "Read the plan-view triangle ABT separately from the vertical cross-section.",
        "Use the bearing rays to identify the three ground-triangle angles.",
        "Now connect the 30° elevation in the vertical section to the shared height TU and the remaining sightline."
      ],
      "id": [
        "Baca segitiga denah ABT secara terpisah dari penampang vertikal.",
        "Gunakan sinar bearing untuk menentukan tiga sudut segitiga di tanah.",
        "Hubungkan sudut elevasi 30° pada penampang vertikal dengan tinggi TU dan garis pandang berikutnya."
      ]
    },
    "visual": {
      "type": "bearingTower",
      "AB": 50,
      "bearingA": 40,
      "bearingB": 330,
      "elevation": 30
    }
  },
  {
    "id": "A10",
    "level": "advanced",
    "family": "parameter",
    "title": {
      "en": "Reconstruct a triangle",
      "id": "Merekonstruksi segitiga"
    },
    "prompt": {
      "en": "Two sides of a triangle differ by 2 cm. The angle between them is 60°. The area is 12√3 cm². Find the two enclosing sides, the third side exactly, and the exact perimeter. Show that the positive geometric solution is unique.",
      "id": "Dua sisi sebuah segitiga berbeda 2 cm. Sudut apitnya 60°. Luasnya 12√3 cm². Tentukan kedua sisi yang mengapit sudut tersebut, sisi ketiga dalam bentuk eksak, dan keliling eksak. Tunjukkan bahwa solusi geometri positifnya unik."
    },
    "solution": {
      "en": "Let the shorter side be x and the longer x+2. Area gives 12√3 = 1/2 x(x+2) sin 60°, so x(x+2)=48 and (x−6)(x+8)=0. The unique positive solution is x=6, giving enclosing sides 6 and 8. Cosine rule gives the third side 2√13, so the exact perimeter is 14 + 2√13 cm.",
      "id": "Misalkan sisi yang lebih pendek x dan sisi yang lebih panjang x+2. Dari luas, 12√3 = 1/2 x(x+2) sin 60°, sehingga x(x+2)=48 dan (x−6)(x+8)=0. Solusi positif yang unik adalah x=6, jadi sisi pengapitnya 6 dan 8. Aturan cosinus memberi sisi ketiga 2√13, sehingga keliling eksaknya 14 + 2√13 cm."
    },
    "check": {
      "mode": "auto",
      "fields": [
        {
          "label": {
            "en": "Shorter side (cm)",
            "id": "Sisi lebih pendek (cm)"
          },
          "placeholder": "",
          "numeric": 6,
          "tolerance": 0.01
        },
        {
          "label": {
            "en": "Longer side (cm)",
            "id": "Sisi lebih panjang (cm)"
          },
          "placeholder": "",
          "numeric": 8,
          "tolerance": 0.01
        },
        {
          "label": {
            "en": "Third side",
            "id": "Sisi ketiga"
          },
          "placeholder": "",
          "numeric": 7.211102550927978,
          "tolerance": 0.05,
          "accepted": [
            "2sqrt13",
            "2√13"
          ]
        },
        {
          "label": {
            "en": "Exact perimeter",
            "id": "Keliling eksak"
          },
          "placeholder": "",
          "numeric": 21.21110255092798,
          "tolerance": 0.05,
          "accepted": [
            "14+2sqrt13",
            "14+2√13"
          ]
        }
      ]
    },
    "hints": {
      "en": [
        "Identify the two given sides and the included 60° angle; leave the third side unknown.",
        "Use the area condition to build an equation for x before finding any third side.",
        "Validate a candidate geometrically: positive side lengths and triangle inequalities."
      ],
      "id": [
        "Kenali dua sisi yang diketahui dan sudut apit 60°; biarkan sisi ketiga belum diketahui.",
        "Gunakan syarat luas untuk membentuk persamaan x sebelum mencari sisi ketiga.",
        "Uji kandidat secara geometri: panjang sisi positif dan memenuhi pertidaksamaan segitiga."
      ]
    },
    "visual": {
      "type": "parameterTriangle",
      "side1": "x",
      "side2": "x + 2",
      "side3": "?",
      "angle": "60°",
      "area": "12√3 cm²"
    }
  }
];
