// 延世韩国语第二册 - 课程数据
// 包含第一课和第二课

const courseData = {
    "lessons": [
        {
            "id": 1,
            "title": "제1과 도움이 필요하면 언제든지 말씀하세요",
            "titleChinese": "第一课 如果需要帮助，请随时跟我说",
            "text": {
                "korean": [
                    "처음 뵙겠습니다. 중국에서 온 양건입니다.",
                    "말씀 많이 들었습니다. 저는 정혜입니다.",
                    "무역 회사 일이 처음이지만 열심히 하겠습니다.",
                    "모두 친절한 분들이니까 잘 가르쳐 주실 거예요.",
                    "잘 부탁합니다.",
                    "도움이 필요하면 언제든지 말씀하세요."
                ],
                "chinese": [
                    "初次见面。我是从中国来的杨建。",
                    "经常听到你的名字。我是郑慧。",
                    "虽然是第一次来公司工作，但我会努力的。",
                    "因为大家都是亲切的人，所以会好好教你的。",
                    "请多关照。",
                    "如果需要帮助，请随时说。"
                ]
            },
            "vocab": [
                {"korean": "처음", "chinese": "第一次/初次", "pronunciation": "cheo-eum"},
                {"korean": "뵙겠습니다", "chinese": "见面（敬语）", "pronunciation": "boep-get-seum-ni-da"},
                {"korean": "중국", "chinese": "中国", "pronunciation": "jung-guk"},
                {"korean": "온", "chinese": "来的（过去分词）", "pronunciation": "on"},
                {"korean": "양건", "chinese": "杨建（人名）", "pronunciation": "yang-geon"},
                {"korean": "말씀", "chinese": "话（敬语）", "pronunciation": "mal-sseum"},
                {"korean": "들었습니다", "chinese": "听到了", "pronunciation": "deu-reot-seum-ni-da"},
                {"korean": "정혜", "chinese": "郑慧（人名）", "pronunciation": "jeong-hye"},
                {"korean": "무역", "chinese": "贸易", "pronunciation": "mu-yeok"},
                {"korean": "회사", "chinese": "公司", "pronunciation": "hoe-sa"},
                {"korean": "일", "chinese": "工作/事情", "pronunciation": "il"},
                {"korean": "처음이지만", "chinese": "虽然是第一次", "pronunciation": "cheo-eum-i-ji-man"},
                {"korean": "열심히", "chinese": "努力地", "pronunciation": "yeol-sim-hi"},
                {"korean": "하겠습니다", "chinese": "做（敬语）", "pronunciation": "ha-get-seum-ni-da"},
                {"korean": "모두", "chinese": "都/全部", "pronunciation": "mo-du"},
                {"korean": "친절한", "chinese": "亲切的", "pronunciation": "chin-jeol-han"},
                {"korean": "분들이니까", "chinese": "因为是...的人", "pronunciation": "bun-deul-i-ni-kka"},
                {"korean": "잘", "chinese": "好好地", "pronunciation": "jal"},
                {"korean": "가르쳐", "chinese": "教", "pronunciation": "ga-reu-chyeo"},
                {"korean": "주실", "chinese": "给（敬语）", "pronunciation": "ju-sil"},
                {"korean": "거예요", "chinese": "会...的", "pronunciation": "geo-ye-yo"},
                {"korean": "부탁합니다", "chinese": "拜托/请求", "pronunciation": "bu-tak-ham-ni-da"},
                {"korean": "도움", "chinese": "帮助", "pronunciation": "do-eum"},
                {"korean": "필요하면", "chinese": "如果需要", "pronunciation": "pir-yo-ha-myeon"},
                {"korean": "언제든지", "chinese": "随时", "pronunciation": "eon-je-deun-ji"},
                {"korean": "말씀하세요", "chinese": "请说（敬语）", "pronunciation": "mal-sseum-ha-se-yo"}
            ],
            "grammar": [
                {
                    "title": "初次见面问候语",
                    "explanation": "第一次见面时使用的正式问候语，表示尊敬。",
                    "examples": [
                        {"korean": "처음 뵙겠습니다.", "chinese": "初次见面。"},
                        {"korean": "만나서 반갑습니다.", "chinese": "见到你很高兴。"}
                    ]
                },
                {
                    "title": "-지만 (虽然...但是)",
                    "explanation": "表示转折关系，相当于中文的'虽然...但是'。",
                    "examples": [
                        {"korean": "처음이지만 열심히 하겠습니다.", "chinese": "虽然是第一次，但我会努力的。"},
                        {"korean": "어렵지만 포기하지 않겠습니다.", "chinese": "虽然难，但不会放弃。"}
                    ]
                },
                {
                    "title": "-니까 (因为...所以)",
                    "explanation": "表示原因或理由，用于说明情况。",
                    "examples": [
                        {"korean": "모두 친절한 분들이니까 잘 가르쳐 주실 거예요.", "chinese": "因为大家都是亲切的人，所以会好好教你的。"},
                        {"korean": "날씨가 좋으니까 산책합시다.", "chinese": "因为天气好，所以去散步吧。"}
                    ]
                }
            ]
        },
        {
            "id": 2,
            "title": "제2과 한국 음식",
            "titleChinese": "第二课 韩国饮食",
            "subunits": [
                {
                    "id": 1,
                    "title": "01 설렁탕을 먹어 봤어요?",
                    "titleChinese": "你吃过牛杂碎汤吗？",
                    "text": {
                        "korean": [
                            "두 사람은무슨 음식을먹고 있습니까?",
                            "이 음식은 어떻게먹습니까?",
                            "리에 씨，설렁탕을먹어 봤어요?",
                            "아니요，먹어보지못했어요.어떻게먹는거예요?",
                            "소금과파를좀 넣고밥을말아서드세요.",
                            "반찬은어디에 있어요?",
                            "여기 큰 그릇에 있어요.접시에덜어서먹어야 해요.",
                            "아，여기있군요."
                        ],
                        "chinese": [
                            "这两个人在吃什么？",
                            "这种食物要怎么吃？",
                            "理惠，你吃过牛杂碎汤吗？",
                            "没有，没吃过。怎么？",
                            "往汤里放一点儿盐和葱，然后把饭泡在汤里吃。",
                            "菜在哪里？",
                            "在这个大碗里，得多到碟子里吃。",
                            "啊，原来在这里呀。"
                        ]
                    },
                    "vocab": [
                        {"korean": "설렁탕", "chinese": "牛杂碎汤", "pronunciation": "seol-leong-tang"},
                        {"korean": "파", "chinese": "葱", "pronunciation": "pa"},
                        {"korean": "말다", "chinese": "泡/卷", "pronunciation": "mal-da"},
                        {"korean": "반찬", "chinese": "菜/小菜", "pronunciation": "ban-chan"},
                        {"korean": "접시", "chinese": "碟子", "pronunciation": "jeop-si"},
                        {"korean": "덜다", "chinese": "减/盛", "pronunciation": "deol-da"},
                        {"korean": "넣다", "chinese": "放", "pronunciation": "neo-ta"},
                        {"korean": "뿌리다", "chinese": "撒", "pronunciation": "ppu-ri-da"},
                        {"korean": "비비다", "chinese": "拌", "pronunciation": "bi-bi-da"},
                        {"korean": "찍다", "chinese": "蘸", "pronunciation": "jjik-da"},
                        {"korean": "소금", "chinese": "盐", "pronunciation": "so-geum"},
                        {"korean": " 그릇", "chinese": "碗/器皿", "pronunciation": "geu-reut"},
                        {"korean": "밥", "chinese": "饭", "pronunciation": "bap"}
                    ],
                    "grammar": [
                        {
                            "title": "어/아/여 보다",
                            "explanation": "惯用型。用于动词词干后，表示进行过某种行为。类似于汉语的'……过'。",
                            "examples": [
                                {"korean": "설악산에 가 봤습니까?", "chinese": "您去过雪岳山吗?"},
                                {"korean": "아니요，설악산에 가 보지 않았습니다.", "chinese": "没有，没去过雪岳山。"},
                                {"korean": "저는 한복을 입어 봤습니다.", "chinese": "我穿过韩服。"},
                                {"korean": "5년 전에 제주에 가 봤어요.", "chinese": "我5年前去过济州岛。"}
                            ]
                        },
                        {
                            "title": "-어/아 서",
                            "explanation": "连接词尾，表示前后动作的先后顺序或方式。",
                            "examples": [
                                {"korean": "소금과 파를좀 넣고 밥을 말아서 드세요.", "chinese": "往汤里放一点儿盐和葱，然后把饭泡在汤里吃。"},
                                {"korean": "접시에 덜어서 먹어야 해요.", "chinese": "得多到碟子里吃。"}
                            ]
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": "02 닭갈비를 먹어 본 적이 있어요?",
                    "titleChinese": "你吃过炖鸡排骨吗？",
                    "text": {
                        "korean": [
                            "두 사람은무슨 이야기를 하고 있습니까?",
                            "영수가소개하는음식은 무엇입니까?",
                            "리에 씨，오늘은 한국 음식을먹읍시다.",
                            " 좋아요.한국 음식중에서유명한게뭐예요?",
                            " 음，닭갈비를먹어본 적이있어요?",
                            "아직 없어요.어떤 음식이에요?",
                            "닭고기와채소로만든 음식인데좀 매워요.",
                            " 그래요?맛있을 것같아요."
                        ],
                        "chinese": [
                            "这两个人在说什么？",
                            "英秀介绍的食物是什么？",
                            "理惠，我们今天吃韩国料理吧。",
                            "好啊。韩国料理中什么比较有名？",
                            "嗯，你吃过炖鸡排骨吗？",
                            "还没吃过呢。那是什么样的料理呢？",
                            "是用鸡肉和蔬菜做的，有点儿辣。",
                            "是吗？应该很好吃吧。"
                        ]
                    },
                    "vocab": [
                        {"korean": "유명하다", "chinese": "有名", "pronunciation": "yu-myeong-ha-da"},
                        {"korean": "닭고기", "chinese": "鸡肉", "pronunciation": "dal-go-gi"},
                        {"korean": "채소", "chinese": "蔬菜", "pronunciation": "chae-so"},
                        {"korean": "좀", "chinese": "一点儿", "pronunciation": "jom"},
                        {"korean": "비빔밥", "chinese": "拌饭", "pronunciation": "bi-bim-bap"},
                        {"korean": "회", "chinese": "生鱼片/生肉片", "pronunciation": "hoe"},
                        {"korean": "김치찌개", "chinese": "泡菜汤", "pronunciation": "gim-chi-jji-gae"},
                        {"korean": "탕수육", "chinese": "糖醋肉", "pronunciation": "tang-su-yuk"},
                        {"korean": "스파게티", "chinese": "意大利面", "pronunciation": "seu-pa-ge-ti"},
                        {"korean": "짬뽕", "chinese": "什锦面", "pronunciation": "jjam-ppong"},
                        {"korean": "샐러드", "chinese": "沙拉", "pronunciation": "sael-leo-deu"},
                        {"korean": "우동", "chinese": "乌冬面", "pronunciation": "u-dong"},
                        {"korean": "순두부찌개", "chinese": "嫩豆腐汤", "pronunciation": "sun-du-bu-jji-gae"},
                        {"korean": "피자", "chinese": "匹萨", "pronunciation": "pi-ja"},
                        {"korean": "튀김", "chinese": "油炸食物", "pronunciation": "twi-gim"},
                        {"korean": "잡채", "chinese": "炒粉丝", "pronunciation": "jap-chae"}
                    ],
                    "grammar": [
                        {
                            "title": "-은/ㄴ 적이 있다",
                            "explanation": "惯用型。用于动词词干后，表示曾经有过某种行为。类似于汉语的'……过……'。",
                            "examples": [
                                {"korean": "저는 삼계탕을 먹은 적이 있습니다.", "chinese": "我吃过参鸡汤。"},
                                {"korean": "저는 한국 무용을 배운 적이 없습니다.", "chinese": "我没学过韩国舞蹈。"},
                                {"korean": "이 노래는 한 번들은 적이 있습니다.", "chinese": "这首歌我听过一次。"},
                                {"korean": "에릭은 한복을 입은 적이 없습니다.", "chinese": "埃里克没有穿过韩服。"}
                            ]
                        },
                        {
                            "title": "-는데，은데/는데",
                            "explanation": "连接词尾。用于谓词词干和体词谓词形后，表示提示说明，即前句提示背景、状况，后句阐述具体内容。",
                            "examples": [
                                {"korean": "이 사과는 한 개에 1，000원인데 달고 맛있어요.", "chinese": "这个苹果一个1000元，很甜很好吃。"},
                                {"korean": "이분은 우리 선생님인데 아주 친절한 분이에요.", "chinese": "这位是我们的老师，非常亲切。"},
                                {"korean": "이곳는 제주도인데경치가정말아름다워요.", "chinese": "这里是济州岛，景色真的很美。"},
                                {"korean": "이 가방는어머니께 받았는데튼튼하고 쓰기편해요.", "chinese": "这个包是妈妈送给我的，不仅结实，用起来也方便。"}
                            ]
                        }
                    ]
                },
                {
                    "id": 3,
                    "title": "03 김치찌개는 어떻게 만들어요?",
                    "titleChinese": "泡菜汤怎么做啊？",
                    "text": {
                        "korean": [
                            "두 사람이무슨 이야기를 하고 있습니까?",
                            "웨이가만들고있는 음식은 무엇입니까?",
                            "김치찌개는 어떻게만들어요?",
                            "우선 물부터 끓이세요.",
                            " 그 다음에 김치와돼지고기를자게 썰어서 넣으세요.",
                            "간은 어떻게 맞춰요?",
                            "조끔 끓인후에 맛を見고 소금을 넣으세요.",
                            "누구한테서 한국요리를배웠어요?",
                            "하숙집아줌마니me 배웠어요."
                        ],
                        "chinese": [
                            "这两个人在说什么？",
                            "王伟在做什么菜？",
                            "泡菜汤怎么做啊？",
                            "先烧水，然后把泡菜和猪肉切成小块儿放进去。",
                            "咸淡怎么调呢？",
                            "煮一会儿后，尝一下味道，再放盐。",
                            "你是跟谁学的做韩国料理啊？",
                            "我是跟房东阿姨学的。"
                        ]
                    },
                    "vocab": [
                        {"korean": "우선", "chinese": "首先", "pronunciation": "u-seon"},
                        {"korean": "끓이다", "chinese": "煮(水或汤等)", "pronunciation": "kkeu-ri-da"},
                        {"korean": "돼지고기", "chinese": "猪肉", "pronunciation": "dwae-ji-go-gi"},
                        {"korean": "썰다", "chinese": "切", "pronunciation": "sseol-da"},
                        {"korean": "간", "chinese": "咸淡", "pronunciation": "gan"},
                        {"korean": "맞추다", "chinese": "调/配", "pronunciation": "mat-chu-da"},
                        {"korean": "굽다", "chinese": "烤", "pronunciation": "gup-da"},
                        {"korean": "튀기다", "chinese": "炸", "pronunciation": "twi-gi-da"},
                        {"korean": "볶다", "chinese": "炒", "pronunciation": "bbok-da"},
                        {"korean": "삶다", "chinese": "煮/炖食物", "pronunciation": "sam-da"},
                        {"korean": "찌다", "chinese": "蒸", "pronunciation": "jji-da"},
                        {"korean": "다지다", "chinese": "剁", "pronunciation": "da-ji-da"},
                        {"korean": "젓다", "chinese": "搅拌", "pronunciation": "jeot-da"}
                    ],
                    "grammar": [
                        {
                            "title": "부터",
                            "explanation": "补助词。接在名词、副词、助词以及动词的活用形词尾后使用。表示时间、处所的起点，或表示顺序的起始。",
                            "examples": [
                                {"korean": "우선 손부터 씻고 드세요.", "chinese": "请先洗手再用餐。"},
                                {"korean": "뭐부터 할까요?", "chinese": "先做什么呢？"},
                                {"korean": "청소부터 할까요? 설거지부터 할까요?", "chinese": "是先打扫卫生还是先洗碗？"},
                                {"korean": "배가 고프니까 식사부터 합시다.", "chinese": "因为肚子饿了，所以先吃饭吧。"}
                            ]
                        },
                        {
                            "title": "-게",
                            "explanation": "连接词尾。用于谓词词干后，使其变成副词词组。",
                            "examples": [
                                {"korean": "방을깨끗하게 청소했슴니다.", "chinese": "把房间打扫干净了。"},
                                {"korean": "잘 보이게사진을 벽에 걸까요?", "chinese": "为了容易看到，把相片挂在墙上啊？"},
                                {"korean": "편안하게 앉아서기다리세요.", "chinese": "请稍等，您随便坐。"},
                                {"korean": "손님들에게는 밝게 웃으세요.", "chinese": "面对客人要亲切地微笑。"}
                            ]
                        }
                    ]
                },
                {
                    "id": 4,
                    "title": "04 밥그릇을 들고 먹으면 안 돼요",
                    "titleChinese": "不能端着碗吃饭",
                    "text": {
                        "korean": [
                            "사람들은 무엇을 하고 있습니까?",
                            "한국에는어떤 식사 예절이 있습니까?",
                            "제임스: 한국에서는 식사할때 어떻게 해야 돼요?",
                            "미선:윗사람이 식사를 시작할때까지 기다려야 해요.",
                            "제임스: 아， 그래요.또 다른예절은 없어요?",
                            "미선: 밥그릇을 들고먹으면 안 돼요.",
                            "제임스: 재미있군요.젓가락과 손가락을양손에들고먹어도돼요?",
                            "미선: 아니요，왼손은내려놓고 오른손만 써야 돼요."
                        ],
                        "chinese": [
                            "这些人在做什么？",
                            "韩国有什么餐桌礼仪？",
                            "詹姆斯：在韩国用餐时该怎么做？",
                            "美善：要等到长辈开始用餐才可以吃。",
                            "詹姆斯：啊，是吗？还有其他礼节吗？",
                            "美善：不能端着碗吃饭。",
                            "詹姆斯：挺有意思呀。可以一只手拿着筷子一只手拿着勺子吃吗？",
                            "美善：不行，左手放下不用，只能用右手。"
                        ]
                    },
                    "vocab": [
                        {"korean": "윗사람", "chinese": "长辈", "pronunciation": "wit-sa-ram"},
                        {"korean": "다른", "chinese": "别的/其他的", "pronunciation": "da-reun"},
                        {"korean": "예절", "chinese": "礼节", "pronunciation": "ye-jeol"},
                        {"korean": "들다", "chinese": "提/拿", "pronunciation": "deul-da"},
                        {"korean": "양손", "chinese": "双手", "pronunciation": "yang-son"},
                        {"korean": "내려놓다", "chinese": "放下", "pronunciation": "nae-ryeo-no-ta"},
                        {"korean": "냄비", "chinese": "锅", "pronunciation": "naem-bi"},
                        {"korean": "식탁", "chinese": "饭桌", "pronunciation": "sik-tak"},
                        {"korean": "손가락", "chinese": "勺子", "pronunciation": "son-ga-rak"},
                        {"korean": "젓가락", "chinese": "筷子", "pronunciation": "jeot-ga-rak"},
                        {"korean": "국그릇", "chinese": "汤碗", "pronunciation": "guk-geu-reut"},
                        {"korean": "밥그릇", "chinese": "饭碗", "pronunciation": "bap-geu-reut"},
                        {"korean": "접시", "chinese": "盘子", "pronunciation": "jeop-si"},
                        {"korean": "컵", "chinese": "杯子", "pronunciation": "keop"}
                    ],
                    "grammar": [
                        {
                            "title": "-어도/ado/ㅕ도 돼다",
                            "explanation": "惯用型。用于动词词干后，表示允许做某种行为。也可以使用 '-어 도돼요?'这样的提问形式。",
                            "examples": [
                                {"korean": "여기에 앉아도 됩니다.", "chinese": "可以坐在这里。"},
                                {"korean": "이제 웃어도 돼요.", "chinese": "现在可以笑了。"},
                                {"korean": "조금늦게 출발해도 돼요.", "chinese": "可以晚一点儿出发。"},
                                {"korean": "여기에서담배를피워도 돼요?", "chinese": "可以在这儿吸烟吗?"}
                            ]
                        },
                        {
                            "title": "-으면/면 안 되다",
                            "explanation": "惯用型。用于谓词词干和体词谓词形后，表示禁止或限制所说的内容。一般用 '-어 도돼요?'来询问是否允许，不允许时用 '-으면 안 돼요'来回答。",
                            "examples": [
                                {"korean": "A：내일좀늦어도돼요? B1：네，좀늦어도돼요.빠른일이없어요. B2：아니요，내일은늦으면안돼요.아침부터아주바빠요.", "chinese": "A：明天可以晚点儿吗？ B1：可以，可以晚点儿，没什么急事儿。 B2：不可以，明天不能晚，从早上开始就很忙。"},
                                {"korean": "길옆에주차하면안 돼요.", "chinese": "不可以把车停在路边。"},
                                {"korean": "날짜가 지난 음식이니까먹으면안 돼요.", "chinese": "因为这个食品已经过了保质日期，所以不能吃。"},
                                {"korean": "공부방은너무어두우면안 돼요.", "chinese": "学习的房间不能太黑。"}
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
