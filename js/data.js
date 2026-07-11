/* Her Lib - 143 books */

const monthlyQuotes = [
  {
    "month": "2026-01",
    "text": "一个人不是生而为女人，而是成为女人。",
    "author": "西蒙娜·德·波伏瓦",
    "book": "第二性"
  },
  {
    "month": "2026-02",
    "text": "女性存在于这个世界的意义，不是为了被喜欢，而是为了被尊重。",
    "author": "上野千鹤子",
    "book": "厌女"
  },
  {
    "month": "2026-03",
    "text": "不必仰望他人，你自己就是力量之源。",
    "author": "弗吉尼亚·伍尔夫",
    "book": "一间自己的房间"
  },
  {
    "month": "2026-04",
    "text": "我们不要求特权，我们只要求平等。",
    "author": "玛丽·沃斯通克拉夫特",
    "book": "女权辩护"
  },
  {
    "month": "2026-05",
    "text": "沉默不会保护你。",
    "author": "奥德丽·洛德",
    "book": "Sister Outsider"
  },
  {
    "month": "2026-06",
    "text": "每个女性都拥有一间只属于自己的房间，一种只属于自己的生活。",
    "author": "伍尔夫"
  },
  {
    "month": "2026-07",
    "text": "当女性团结起来，世界就会改变。",
    "author": "贝尔·胡克斯",
    "book": "Feminism is for Everybody"
  },
  {
    "month": "2026-08",
    "text": "你最强大的武器是你的声音——用它来为自己和他人发声。",
    "author": "塔拉·韦斯特弗",
    "book": "你当像鸟飞往你的山"
  },
  {
    "month": "2026-09",
    "text": "女性的觉醒不是一场战争，而是一次回家。",
    "author": "Her Lib"
  },
  {
    "month": "2026-10",
    "text": "自由不是别人给予的，自由是你自己拿回来的。",
    "author": "Her Lib"
  },
  {
    "month": "2026-11",
    "text": "每一个敢于说「不」的时刻，都是女性主义的胜利。",
    "author": "Her Lib"
  },
  {
    "month": "2026-12",
    "text": "阅读是一座随身携带的避难所，也是女性觉醒的武器库。",
    "author": "Her Lib"
  }
];

const footerQuotes = [
  "\" Feminism is the radical notion that women are people. \" — Marie Shear",
  "\" 女性主义不是让女性变得更强，而是让「弱」也被尊重。\" — 上野千鹤子",
  "\" The personal is political. \" — Carol Hanisch",
  "\" 我们无法改变过去，但我们可以一起创造一个不一样的未来。\" — Her Lib",
  "\" No one is free until everyone is free. \" — Fannie Lou Hamer",
  "\" 当一个女性开口说话，所有女性都听见了自己的声音。\" — Her Lib"
];

const books = [
  {
    "id": "t01",
    "title": "第二性",
    "titleEn": "The Second Sex",
    "author": "西蒙娜·德·波伏瓦",
    "authorEn": "Simone de Beauvoir",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "存在主义",
      "经典理论",
      "性别建构"
    ],
    "feminismSchool": [
      "existentialism"
    ],
    "feminismSchoolLabel": [
      "存在主义女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "波伏瓦以存在主义哲学为根基，写下了这本被誉为「女性主义圣经」的巨著。她提出「女人不是天生的，而是后天形成的」这一石破天惊的命题，系统剖析了父权社会中女性如何被建构为「他者」——永远处于次要、附属的位置。书中追溯了女性从童年到老年的生命历程，揭示社会如何在每一个阶段将女孩「制造」成符合期待的女人。虽然篇幅厚重、理论密度高，但每一个翻开它的女性，都会在其中看见自己被定义、被塑造的轨迹，也会看见挣脱定义的可能。读这本书就像经历一场深刻的自我认知之旅：你开始理解为什么自己总是习惯性地说「对不起」，为什么被教育要「温柔顺从」，为什么在社会眼中你的价值总是与外貌和婚育挂钩。理解了这些，你才真正开始自由。",
    "cover": "",
    "triggerWarning": "部分观点带有时代局限性（1949年成书），对性别二元框架的讨论缺少当代多元性别视角",
    "triggerWarningType": "viewpoint",
    "suitableFor": "女性主义入门后的理论进阶读者",
    "companionBooks": [
      "t05",
      "t03"
    ],
    "quote": "女人不是天生的，而是后天形成的。",
    "readingTime": 30,
    "versionNote": "推荐台版陶铁柱译本，部分旧译本翻译生硬",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%AC%AC%E4%BA%8C%E6%80%A7"
      }
    ],
    "featured": true,
    "publishYear": 1949,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "simone-de-beauvoir"
  },
  {
    "id": "t02",
    "title": "厌女",
    "titleEn": "Misogyny",
    "author": "上野千鹤子",
    "authorEn": "Chizuko Ueno",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "厌女",
      "日本社会",
      "性别歧视"
    ],
    "feminismSchool": [
      "eastAsian"
    ],
    "feminismSchoolLabel": [
      "东亚本土女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "东亚",
    "genre": "理论专著",
    "guide": "上野千鹤子用犀利又不失幽默的笔触，剖析了日本社会中无所不在的「厌女症」——男性对女性的蔑视，以及女性对自身性别的自我厌恶。她从职场写到家庭，从文学名著写到流行文化，从皇室继承写到色情产业，层层剥开日常中被正常化的性别歧视。书中令人震撼的观点之一是：厌女症不仅存在于男性身上，女性自身也深陷其中——比如母女之间的微妙竞争、女性对「绿茶」的愤怒、社会对「剩女」的嘲讽。读这本书的过程可能不太舒服，因为你会在许多习以为常的场景中看见自己曾经的内化厌女。但这正是觉醒的开始：当你能够识别「厌女」，你就不再被它无声地支配。",
    "cover": "",
    "triggerWarning": "部分段落讨论性暴力与男性凝视，可能引发不适",
    "triggerWarningType": "psychology",
    "suitableFor": "女性主义入门读者、对日本性别议题感兴趣者",
    "companionBooks": [
      "t03",
      "l03"
    ],
    "quote": "厌女症就是绝不将女人视为与自己同等的性的主体。",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%8E%8C%E5%A5%B3"
      }
    ],
    "featured": true,
    "publishYear": 2010,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "chizuko-ueno"
  },
  {
    "id": "t03",
    "title": "父权制与资本主义",
    "titleEn": "Patriarchy and Capitalism",
    "author": "上野千鹤子",
    "authorEn": "Chizuko Ueno",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "马克思主义女性主义",
      "父权制",
      "资本批判"
    ],
    "feminismSchool": [
      "socialist"
    ],
    "feminismSchoolLabel": [
      "社会主义/马克思女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "东亚",
    "genre": "理论专著",
    "guide": "如果说《厌女》是帮你看见日常中的性别暴力，这本书则是带你走进那个精密运转的压迫机器内部，看清它到底是如何设计和运行的。上野千鹤子将马克思主义与女性主义进行了深刻对话，论证了父权制与资本主义如何相互勾结——家庭中的无偿家务劳动，恰恰是资本积累最隐蔽的根基。书中对「家务劳动为何不算劳动」「再生产劳动如何被隐形」「全职主妇为什么是最脆弱的人群」等问题的分析尤其精辟，每一个观点都像一把手术刀，精准剖开那些被我们当作常识的谎言。虽然理论密度较高，但上野的论述逻辑极其清晰，只要你愿意花时间跟着她一步步推导，就会对「工作」「家庭」「婚姻」这些概念产生全新的理解。这不是一本轻松的读物，但它带给你的是一种近乎于醒来的体验——当你理解了系统如何运作，你就不会再为个人的所谓失败而责怪自己。",
    "cover": "",
    "triggerWarning": "理论密度较高，需要一定耐心",
    "triggerWarningType": "difficult",
    "suitableFor": "对政治经济学感兴趣的进阶读者",
    "companionBooks": [
      "t02",
      "t06"
    ],
    "quote": "家务劳动是资本主义得以成立的隐蔽基础。",
    "readingTime": 10,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%88%B6%E6%9D%83%E5%88%B6%E4%B8%8E%E8%B5%84%E6%9C%AC%E4%B8%BB%E4%B9%89"
      }
    ],
    "featured": false,
    "publishYear": 1990,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "chizuko-ueno"
  },
  {
    "id": "t04",
    "title": "一间自己的房间",
    "titleEn": "A Room of One's Own",
    "author": "弗吉尼亚·伍尔夫",
    "authorEn": "Virginia Woolf",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性写作",
      "经济独立",
      "文学批评"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 1,
    "waveLabel": "第一波女权浪潮",
    "region": "欧美",
    "genre": "随笔散文",
    "guide": "1928年，伍尔夫在剑桥大学做了两场演讲，随后将其扩展为这本小书。她用一个虚构的「莎士比亚妹妹」的故事——一个和莎士比亚一样有文学天赋的女孩，却因为性别被剥夺了一切写作的可能——来论证一个简单的道理：女人如果要写作，必须有钱和一间属于自己的房间。但这不仅仅是关于写作。钱意味着经济独立，不必依附于父亲或丈夫；房间意味着精神空间，不必被家务和育儿吞噬。伍尔夫的文字如流水般清澈优美，她不是在呐喊控诉，而是在用最温柔的语调讲述最颠覆的真相。篇幅轻薄，一个下午就能读完，但它种下的种子会持续生长——你会开始问自己：我拥有属于自己的「房间」吗？如果没有，我能为自己建造一个吗？",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "文学爱好者、女性主义完全零基础读者",
    "companionBooks": [
      "t01",
      "l01"
    ],
    "quote": "一个女人如果要写小说，必须有钱和一间自己的房间。",
    "readingTime": 3,
    "versionNote": "推荐上海译文出版社译本",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%B8%80%E9%97%B4%E8%87%AA%E5%B7%B1%E7%9A%84%E6%88%BF%E9%97%B4"
      }
    ],
    "featured": true,
    "publishYear": 1929,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "virginia-woolf"
  },
  {
    "id": "t05",
    "title": "性别麻烦",
    "titleEn": "Gender Trouble",
    "author": "朱迪斯·巴特勒",
    "authorEn": "Judith Butler",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "性别表演",
      "酷儿理论",
      "后结构主义"
    ],
    "feminismSchool": [
      "postmodern"
    ],
    "feminismSchoolLabel": [
      "后现代女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "巴特勒在这本极具颠覆性的著作中，扔出了一个炸裂传统性别观念的理论武器：性别不是天生的本质，而是一套被反复「表演」的社会规范——我们不是在「表达」性别，我们是在日复一日的言行中「制造」性别。这个被称为性别操演理论的核心观点，深刻改变了后现代女性主义和酷儿理论的面貌。巴特勒在书中与弗洛伊德、拉康、福柯等理论巨人进行了精彩的思想交锋，论证了男女的二元框架不是自然秩序，而是话语权力的产物，并且这个框架本身就充满了裂缝和颠覆的可能。这本书绝对不算好读——巴特勒的语句像迷宫一样迂回曲折，但一旦你找到入口、跟上她的节奏，你的整个认知框架将被彻底刷新。读完之后你会重新审视「什么是男人」「什么是女人」这些最根本的问题，也会对那些被二元性别框架排斥的人产生更深的共情。这是一本值得花时间啃下来的书——它回报你的远不止知识，而是一种更自由地看待世界和看待自己的方式。",
    "cover": "",
    "triggerWarning": "学术理论密度极高，语言晦涩，不适合零基础直接阅读",
    "triggerWarningType": "difficult",
    "suitableFor": "理论深度研究者、哲学/性别研究背景读者",
    "companionBooks": [
      "t01",
      "t09"
    ],
    "quote": "性别是一种自由浮动的 artifice。",
    "readingTime": 12,
    "versionNote": "推荐台版或最新中文译本",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%80%A7%E5%88%AB%E9%BA%BB%E7%83%A6"
      }
    ],
    "featured": false,
    "publishYear": 1990,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "judith-butler"
  },
  {
    "id": "t06",
    "title": "女权辩护",
    "titleEn": "A Vindication of the Rights of Woman",
    "author": "玛丽·沃斯通克拉夫特",
    "authorEn": "Mary Wollstonecraft",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "启蒙思想",
      "教育平等",
      "女权经典"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 1,
    "waveLabel": "第一波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "1792年写成的这本书，被认为是现代女性主义的第一声号角。沃斯通克拉夫特在启蒙运动的大潮中勇敢发声，主张女性应该接受与男性同等的教育，拥有同等的理性能力。读这本书会让人感慨：两百多年过去了，很多当时提出的问题，至今依然在回响。",
    "cover": "",
    "triggerWarning": "18世纪文风偏古典，部分用词和表达习惯与现代不同",
    "triggerWarningType": "difficult",
    "suitableFor": "对女性主义思想史感兴趣的进阶读者",
    "companionBooks": [
      "t04"
    ],
    "quote": "我不希望她们拥有支配男性的权力，只希望她们拥有支配自己的权力。",
    "readingTime": 8,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%9D%83%E8%BE%A9%E6%8A%A4"
      }
    ],
    "featured": false,
    "publishYear": 1792,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "mary-wollstonecraft"
  },
  {
    "id": "t07",
    "title": "女性的奥秘",
    "titleEn": "The Feminine Mystique",
    "author": "贝蒂·弗里丹",
    "authorEn": "Betty Friedan",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "家庭主妇",
      "无名问题",
      "第二波浪潮"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "弗里丹在1960年代采访了大量郊区主妇，发现她们虽然过着物质充裕的生活，却普遍感到一种「无名的空虚与不安」。这本书命名了那个年代无数女性说不出口的痛苦——「无名问题」，成为第二波女权运动的点火之作。文字流畅、故事性强，读起来像一场酣畅淋漓的觉醒之旅。",
    "cover": "",
    "triggerWarning": "主要反映美国白人中产主妇经验，缺少多元视角",
    "triggerWarningType": "viewpoint",
    "suitableFor": "对女权运动历史感兴趣的入门读者",
    "companionBooks": [
      "t01"
    ],
    "quote": "这个问题被掩埋在美国女性的心底，无人敢问——「这就是全部吗？」",
    "readingTime": 8,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E7%9A%84%E5%A5%A5%E7%A7%98"
      }
    ],
    "featured": false,
    "publishYear": 1963,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "betty-friedan"
  },
  {
    "id": "t08",
    "title": "女性主义",
    "titleEn": "Feminism",
    "author": "李银河",
    "authorEn": "Li Yinhe",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国女性主义",
      "入门通识",
      "流派概述"
    ],
    "feminismSchool": [
      "liberalism",
      "socialist"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义",
      "社会主义/马克思女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "国内本土",
    "genre": "理论专著",
    "guide": "李银河的这本《女性主义》是中文世界最好的入门通识读物之一。她用平实通俗的中文，将自由主义女性主义、社会主义女性主义、激进女性主义、后现代女性主义等各大流派的核心观点一一道来，从波伏瓦讲到巴特勒，从西方运动讲到中国语境。这本书最大的优点是「不吓人」——没有学术黑话，没有居高临下的说教，像一个耐心的前辈在给你讲一个长长的故事。她会告诉你每个流派的主张是什么、彼此之间争论什么，以及这些理论如何解释了你在生活中遇到的那些「说不清楚的不对劲」。读完你会有一个清晰的认知地图，知道自己在女性主义的哪条路上行走，也明白其他的路通向何方。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "女性主义完全零基础中文读者、想系统了解流派的入门者",
    "companionBooks": [
      "t02",
      "t01"
    ],
    "quote": "女性主义的目标不是让女性凌驾于男性之上，而是实现所有人的自由。",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E4%B8%BB%E4%B9%89"
      }
    ],
    "featured": true,
    "publishYear": 2005,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "li-yinhe"
  },
  {
    "id": "t09",
    "title": "性别打结",
    "titleEn": "The Gender Knot",
    "author": "艾伦·约翰逊",
    "authorEn": "Allan G. Johnson",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "父权制入门",
      "男性作者",
      "系统思维"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "难得一见的由男性作者写成的女性主义入门书。约翰逊用「打结」这个比喻来解释父权制——不是某个人的过错，而是所有人都被缠绕其中的社会系统。他以男性的身份反思自己的特权，用通俗的语言解释复杂的性别问题，非常适合送给对女性主义有疑惑的男性朋友阅读。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "女性主义入门读者、想了解性别议题的男性读者",
    "companionBooks": [
      "t02"
    ],
    "quote": "父权制不是一群人针对另一群人的阴谋，而是一张我们都被缠绕其中的网。",
    "readingTime": 7,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%80%A7%E5%88%AB%E6%89%93%E7%BB%93"
      }
    ],
    "featured": false,
    "publishYear": 1997,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "allan-g-johnson"
  },
  {
    "id": "t10",
    "title": "为女权辩护",
    "titleEn": "The Subjection of Women",
    "author": "约翰·斯图尔特·密尔",
    "authorEn": "John Stuart Mill",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "自由主义",
      "政治哲学",
      "平等权利"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 1,
    "waveLabel": "第一波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "19世纪的自由主义哲学大师密尔在书中系统论证了女性在法律上从属于男性的制度是完全不合理的。这本书的独特价值在于：它是用当时主流政治哲学的语言来论证女性权利，让那些认为「女性天生就应该服从」的人无法从理性上反驳。历史的回响至今不绝。",
    "cover": "",
    "triggerWarning": "19世纪政治哲学文风，论证节奏较慢",
    "triggerWarningType": "difficult",
    "suitableFor": "政治哲学爱好者、女性主义思想史研究者",
    "companionBooks": [
      "t06"
    ],
    "quote": "一个性别对另一个性别的法定从属关系本身就是错误的。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%B8%BA%E5%A5%B3%E6%9D%83%E8%BE%A9%E6%8A%A4"
      }
    ],
    "featured": false,
    "publishYear": 1869,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "john-stuart-mill"
  },
  {
    "id": "t11",
    "title": "圣杯与剑",
    "titleEn": "The Chalice and the Blade",
    "author": "理安·艾斯勒",
    "authorEn": "Riane Eisler",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "考古历史",
      "伙伴社会",
      "文化转型"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "艾斯勒从考古学出发，提出人类社会曾存在过「伙伴关系」模式——不是父权制，也不是母权制，而是一种平等合作的社会形态。这本书打开了另一扇窗：女性主义不只是批判父权制，更是重新想象人类社会可以如何组织。阅读体验像一场跨时空的考古探险。",
    "cover": "",
    "triggerWarning": "部分考古论据在学术界存在争议",
    "triggerWarningType": "viewpoint",
    "suitableFor": "对文化人类学、社会变迁感兴趣的入门读者",
    "companionBooks": [
      "t09"
    ],
    "quote": "过去给予我们的最大启示是：一个不同的未来是可能的。",
    "readingTime": 8,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%9C%A3%E6%9D%AF%E4%B8%8E%E5%89%91"
      }
    ],
    "featured": false,
    "publishYear": 1987,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "riane-eisler"
  },
  {
    "id": "t12",
    "title": "看不见的女性",
    "titleEn": "Invisible Women",
    "author": "卡罗琳·克里亚多·佩雷斯",
    "authorEn": "Caroline Criado Perez",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "数据偏见",
      "性别数据缺口",
      "公共政策"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "手机太大单手握不住？车内空调温度设定以男性代谢率为标准？女性心脏病发作时因为「症状不典型」而被误诊？——这些日常中的「小问题」背后，是一个巨大的、系统性的性别数据缺口。佩雷斯用大量真实数据和案例，从城市规划到医疗研发，从汽车安全到职场设计，揭示了我们生活在一个以「默认男性」为模板的世界里。她写的不只是抱怨，更是令人震惊的事实：女性的身体、需求和经验被系统性地从数据中排除，导致了从轻微不便到致命后果的各种问题。这本书每一页都会让你恍然大悟——「原来这不是我的问题，是设计的问题！」读完后你会用全新的眼光看待周围的一切，也获得了用数据来武装自己观点的能力。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "关注性别与数据/科技/公共政策的入门读者",
    "companionBooks": [
      "w01"
    ],
    "quote": "人类历史的一半——女性——被系统性地从数据中抹去了。",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-06-15",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%9C%8B%E4%B8%8D%E8%A7%81%E7%9A%84%E5%A5%B3%E6%80%A7"
      }
    ],
    "featured": true,
    "publishYear": 2019,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "caroline-criado-perez"
  },
  {
    "id": "t13",
    "title": "Feminism is for Everybody",
    "titleEn": "Feminism is for Everybody",
    "author": "贝尔·胡克斯",
    "authorEn": "bell hooks",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "大众女性主义",
      "包容性",
      "行动指南"
    ],
    "feminismSchool": [
      "blackThirdWorld"
    ],
    "feminismSchoolLabel": [
      "黑人/第三世界女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "贝尔·胡克斯用最亲切的语气，写了一本给所有人的女性主义行动指南。她特别强调女性主义不是中产白人女性的特权，而是关乎所有人——不分种族、阶级、性别的解放事业。每章短小精悍，没有学术黑话，是女性主义理想的第一本入门小册子。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "所有对女性主义感兴趣的零基础读者",
    "companionBooks": [
      "t08",
      "t14"
    ],
    "quote": "女性主义是一场终结性别主义、性别剥削和压迫的运动。",
    "readingTime": 3,
    "versionNote": "暂无中文译本，建议阅读英文原版（语言难度适中）",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=Feminism%20is%20for%20Everybody"
      }
    ],
    "featured": false,
    "publishYear": 2000,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "bell-hooks"
  },
  {
    "id": "t14",
    "title": "女性与权力",
    "titleEn": "Women & Power",
    "author": "玛丽·比尔德",
    "authorEn": "Mary Beard",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "公共话语",
      "女性声音",
      "古典学"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "剑桥古典学家比尔德从古希腊罗马出发，追溯了西方文化中「让女性闭嘴」的悠久传统。这本小书不到200页，却极其锋利：为什么政坛上的女性总被认为「声音太尖」？为什么职场中的女性总被打断？比尔德用古典学的智慧为当代女性发声问题提供了令人拍案的答案。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "关注女性公共参与和话语权的读者",
    "companionBooks": [
      "t12",
      "w01"
    ],
    "quote": "你无法将女性轻易放进一个已经被男性编码的结构里——你必须改变这个结构。",
    "readingTime": 2,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E4%B8%8E%E6%9D%83%E5%8A%9B"
      }
    ],
    "featured": false,
    "publishYear": 2017,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "mary-beard"
  },
  {
    "id": "t15",
    "title": "美杜莎的笑声",
    "titleEn": "The Laugh of the Medusa",
    "author": "埃莱娜·西苏",
    "authorEn": "Hélène Cixous",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "女性写作",
      "身体书写",
      "法国女性主义"
    ],
    "feminismSchool": [
      "postmodern"
    ],
    "feminismSchoolLabel": [
      "后现代女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "随笔散文",
    "guide": "西苏在这篇宣言式的文章中呼吁：女性必须书写自己，用身体、用欲望、用被压抑的一切来书写。她将女性写作比作美杜莎——不要怕她，她是在笑。文字如诗如歌，力量充沛而张扬，读来令人热血上涌，是法国女性主义文论中最具文学魅力的作品之一。",
    "cover": "",
    "triggerWarning": "法式哲学/精神分析文风偏抽象晦涩，需要一定理论储备",
    "triggerWarningType": "difficult",
    "suitableFor": "文学理论和法国哲学爱好者",
    "companionBooks": [
      "t05"
    ],
    "quote": "女人必须书写自己：必须书写女人，必须把女人带入书写。",
    "readingTime": 2,
    "versionNote": "推荐中文合集版本",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%BE%8E%E6%9D%9C%E8%8E%8E%E7%9A%84%E7%AC%91%E5%A3%B0"
      }
    ],
    "featured": false,
    "publishYear": 1975,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "h-l-ne-cixous"
  },
  {
    "id": "t16",
    "title": "性政治",
    "titleEn": "Sexual Politics",
    "author": "凯特·米利特",
    "authorEn": "Kate Millett",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "父权制理论",
      "文学批评",
      "性革命"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "1970年出版即轰动，米利特在这本书中开创性地提出：「性」本身就是一个政治范畴，父权制是最根深蒂固的权力结构。她通过分析D.H.劳伦斯、亨利·米勒等男作家的作品，揭示了文学中隐性的性别暴力与支配逻辑。被誉为第二波女权运动的理论奠基之作。",
    "cover": "",
    "triggerWarning": "包含对性暴力文学描写的分析，可能引发不适",
    "triggerWarningType": "psychology",
    "suitableFor": "文学批评研究者、对性别权力结构感兴趣的进阶读者",
    "companionBooks": [
      "t01",
      "t02"
    ],
    "quote": "性是政治，因为男女关系是权力关系的范式。",
    "readingTime": 10,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%80%A7%E6%94%BF%E6%B2%BB"
      }
    ],
    "featured": false,
    "publishYear": 1970,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "kate-millett"
  },
  {
    "id": "t17",
    "title": "我在伊朗长大",
    "titleEn": "Persepolis",
    "author": "玛嘉·莎塔琵",
    "authorEn": "Marjane Satrapi",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "图像小说",
      "伊朗",
      "革命与女性"
    ],
    "feminismSchool": [
      "blackThirdWorld"
    ],
    "feminismSchoolLabel": [
      "黑人/第三世界女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "一本图像小说形式的成长回忆录。莎塔琵用简洁的黑白线条，讲述了自己在伊朗革命前后度过的少女时代——从被迫戴头巾，到偷偷听摇滚乐，再到最终离开故土。图文交织的叙事力量极强，让人看到宏大政治如何碾过普通女性的生活。入门极友好，读完只需一个下午。",
    "cover": "",
    "triggerWarning": "涉及战争和政治镇压描写",
    "triggerWarningType": "psychology",
    "suitableFor": "图像小说爱好者、对中东女性处境感兴趣的读者",
    "companionBooks": [
      "l04"
    ],
    "quote": "自由是要付出代价的。",
    "readingTime": 2,
    "versionNote": "推荐完整版合订本",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%88%91%E5%9C%A8%E4%BC%8A%E6%9C%97%E9%95%BF%E5%A4%A7"
      }
    ],
    "featured": false,
    "publishYear": 2000,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "marjane-satrapi"
  },
  {
    "id": "t18",
    "title": "女性主义有什么用？",
    "titleEn": "What Would de Beauvoir Do?",
    "author": "塔比·杰克逊·吉",
    "authorEn": "Tabi Jackson Gee",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "日常应用",
      "问答形式",
      "生活场景"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "一本用日常问题串联起女性主义理论的实用小书。「月经假是好事吗？」「该不该随夫姓？」「为什么女厕所总是排队？」——每一个问题都由一个生活场景出发，引入对应的女性主义理论。不需要任何哲学背景，翻开任何一页都能读，特别适合喜欢「即看即用」的零基础读者。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "完全零基础的女性主义入门读者、喜欢问答形式的读者",
    "companionBooks": [
      "t08"
    ],
    "quote": "每一个日常困惑背后，都有几百年的性别政治。",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-06-20",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E4%B8%BB%E4%B9%89%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8%EF%BC%9F"
      }
    ],
    "featured": false,
    "publishYear": 2021,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "tabi-jackson-gee"
  },
  {
    "id": "t19",
    "title": "从零开始的女性主义",
    "titleEn": "Feminism From Scratch",
    "author": "上野千鹤子 / 田房永子",
    "authorEn": "Chizuko Ueno",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "对话体",
      "漫画插图",
      "世代对话"
    ],
    "feminismSchool": [
      "eastAsian"
    ],
    "feminismSchoolLabel": [
      "东亚本土女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "东亚",
    "genre": "理论专著",
    "guide": "上野千鹤子和漫画家田房永子跨越世代的对谈录，用最轻松的对话形式把女性主义聊得明明白白。一个是经历过1970年代妇女解放运动的老将，一个是在社交媒体时代成长起来的年轻漫画家——她们的对话本身就是一部生动的女性主义代际史。妈妈辈愤怒地走上街头，女儿辈用漫画和网络发声；老一辈批评年轻人不够「激进」，年轻一辈觉得老一辈不懂当下的困境。但在这场时而激烈、时而幽默、时而温情到让人落泪的对话中，她们达成了共识：女性主义不是要成为强者，而是要建立一个弱者也能被尊重的社会。配漫画插图，零基础也能看懂，是送给妈妈、闺蜜和自己最好的入门礼物。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "所有对女性主义感兴趣的零基础读者、年轻女性",
    "companionBooks": [
      "t02",
      "t08"
    ],
    "quote": "女性主义不是要成为强者，而是要成为弱者也能得到尊重的社会。",
    "readingTime": 3,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-06-25",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%A5%B3%E6%80%A7%E4%B8%BB%E4%B9%89"
      }
    ],
    "featured": true,
    "publishYear": 2021,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "chizuko-ueno"
  },
  {
    "id": "t20",
    "title": "乐园之丘",
    "titleEn": "Hills of Paradise",
    "author": "米尼克·希珀",
    "authorEn": "Mineke Schipper",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "神话学",
      "身体羞耻",
      "跨文化"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "本书追溯了全球各地神话、宗教和民间故事中关于女性身体——尤其是乳房、子宫、经血——的叙事传统，揭示了男性权威如何通过控制「女性身体的故事」来维持自身的权力。跨文化视角非常开阔，从非洲部落到欧洲教堂，材料丰富得像一座博物馆。",
    "cover": "",
    "triggerWarning": "部分神话描写包含对女性身体的贬损叙述，可能引发不适",
    "triggerWarningType": "psychology",
    "suitableFor": "对神话学、文化人类学和身体政治感兴趣的读者",
    "companionBooks": [
      "t11"
    ],
    "quote": "控制女性的第一步，是控制女性身体的故事。",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-06-28",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%B9%90%E5%9B%AD%E4%B9%8B%E4%B8%98"
      }
    ],
    "featured": false,
    "publishYear": 2017,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "mineke-schipper"
  },
  {
    "id": "o01",
    "title": "你当像鸟飞往你的山",
    "titleEn": "Educated",
    "author": "塔拉·韦斯特弗",
    "authorEn": "Tara Westover",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "原生家庭",
      "教育改变",
      "自我成长"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "塔拉出生在爱达荷州一个极端的摩门教家庭——没有出生证明、没有学校、没有医疗，父亲的末日预言和哥哥的暴力统治着整个家庭。她17岁才第一次走进教室，却凭借惊人的自学能力一路考进了剑桥大学，拿下了博士学位。但这本书不是简单的「逆袭」故事。塔拉用极其诚实的笔触写下了她在原生家庭的忠诚与自我觉醒之间的反复撕扯——即使在剑桥的图书馆里读着休谟和穆勒，她依然会在深夜梦见父亲描述的末日审判。教育给了她一双新的眼睛，但也让她永远失去了「回家」的能力——因为她看到的世界，和她的家人看到的世界，已经是两个完全不同的世界。读这本书时，你会为塔拉的每一次决裂和每一次回头感到心疼，也为她最终飞往自己的山而落泪。这不是一个简单的「摆脱原生家庭」的故事，而是关于「即使爱着，也可以选择离开」的复杂真相。",
    "cover": "",
    "triggerWarning": "包含家庭暴力、精神控制和身体虐待描写，压抑感较强",
    "triggerWarningType": "psychology",
    "suitableFor": "有原生家庭议题困扰的读者、喜欢真实成长故事的读者",
    "companionBooks": [
      "o02",
      "o03"
    ],
    "quote": "你可以爱一个人，但仍然选择和他说再见。",
    "readingTime": 6,
    "versionNote": "推荐中译本，翻译流畅",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%BD%A0%E5%BD%93%E5%83%8F%E9%B8%9F%E9%A3%9E%E5%BE%80%E4%BD%A0%E7%9A%84%E5%B1%B1"
      }
    ],
    "featured": true,
    "publishYear": 2018,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "tara-westover"
  },
  {
    "id": "o02",
    "title": "母爱的羁绊",
    "titleEn": "Will I Ever Be Good Enough?",
    "author": "卡瑞尔·麦克布莱德",
    "authorEn": "Karyl McBride",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "母女关系",
      "自恋型母亲",
      "情感疗愈"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "专门写给那些在「自恋型母亲」阴影下长大的女儿们。如果你一直觉得自己「不够好」、总是过度取悦他人、在亲密关系中反复感到不被爱——这本书可能会让你第一次看见那个一直在怪自己的小女孩，然后放下自责。麦克布莱德博士既是资深心理治疗师，也是自恋型母亲的女儿，她的文字兼具专业性和亲身共情。书中详细描述了自恋型母亲的几大特征：把女儿当竞争对手、无法提供情感支持、通过贬低来控制女儿——这些描述会让许多读者第一次给自己的成长经历找到准确的名字。书的后半部分提供了具体的疗愈步骤：如何建立边界、如何重新学习爱自己、如何在成为母亲后不再重复上一代的模式。",
    "cover": "",
    "triggerWarning": "涉及母女创伤回忆，情绪低落期建议分章节阅读",
    "triggerWarningType": "psychology",
    "suitableFor": "原生内耗女生、与母亲关系复杂的女性",
    "companionBooks": [
      "o01",
      "o03"
    ],
    "quote": "你不需要变得完美，你只需要成为你自己。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%AF%8D%E7%88%B1%E7%9A%84%E7%BE%81%E7%BB%8A"
      }
    ],
    "featured": true,
    "publishYear": 2008,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "karyl-mcbride"
  },
  {
    "id": "o03",
    "title": "原生家庭",
    "titleEn": "Toxic Parents",
    "author": "苏珊·福沃德",
    "authorEn": "Susan Forward",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "原生家庭",
      "有毒父母",
      "心理疗愈"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "福沃德博士用几十年临床心理治疗的经验，写下了这本原生家庭疗愈的经典之作。书中没有空泛地讲「要与原生家庭和解」，而是用大量让人既心碎又熟悉的真实案例，把不同类型的「有毒父母」一一画像——控制型的父母把你当私有财产、酗酒型的父母让你的童年充满不可预测的恐惧、言语虐待型的父母用「我是为你好」包装每一次伤害。每一个案例后面，她都会问你：这个故事里有没有你的影子？但同时她也会坚定地告诉你：你不是你的过去，你有能力打破这个循环。这本书最有力的部分在后半段——她提供了非常具体、可操作的疗愈步骤：如何与父母对峙（不是争吵，而是为了说出真相）、如何设定边界、如何在保护自己的前提下处理原生家庭关系。对于正在做原生家庭功课的女性来说，这本书既是一本工具书，也是一个告诉你「你没疯，你只是受伤了」的温暖拥抱。女性的觉醒很多时候是从回看那个小时候的自己开始的——这本书就是陪你回看的最温柔的那只手。",
    "cover": "",
    "triggerWarning": "包含家庭暴力和虐待案例描写，可能引发创伤回忆",
    "triggerWarningType": "psychology",
    "suitableFor": "正在做原生家庭功课的女性读者",
    "companionBooks": [
      "o02",
      "o01"
    ],
    "quote": "你不是你的父母。你有能力打破这个循环。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%8E%9F%E7%94%9F%E5%AE%B6%E5%BA%AD"
      }
    ],
    "featured": false,
    "publishYear": 1989,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "susan-forward"
  },
  {
    "id": "o04",
    "title": "房思琪的初恋乐园",
    "titleEn": "Fang Siqi's First Love Paradise",
    "author": "林奕含",
    "authorEn": "Lin Yihan",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "性侵",
      "文学",
      "台湾"
    ],
    "feminismSchool": [
      "eastAsian"
    ],
    "feminismSchoolLabel": [
      "东亚本土女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "东亚",
    "genre": "虚构小说",
    "guide": "林奕含用极致华丽的文学语言，书写了一场无法用文学来美化的暴力。十三岁的房思琪被补习班老师性侵，而在之后的漫长岁月里，她试图用「爱上他」来合理化自己的遭遇——这不是软弱，这是无数性侵受害者共同的心理防御机制：如果是我爱他，那么这一切就不是暴行而是感情。林奕含的每一个比喻都让人窒息，每一个句子都像玻璃碎片——它们太美了，美到让你忘记自己正在阅读一场关于摧毁的故事，直到下一段又把你拉回残酷的现实。这本书的力量不在于告诉读者性侵是错的，而在于让你真正进入到受害者的内心世界里，去感受那种孤独、分裂、以及「说出口」这件事到底有多难。读它需要很大的心理力量，但它值得每一个关心性别议题的人去读——不是为了满足猎奇，而是为了理解：为什么那么多受害者在经历了如此残酷的事情之后，选择沉默而不是控诉。当你能理解这种沉默，你就离改变它更近了一步。",
    "cover": "",
    "triggerWarning": "包含性侵、诱奸详细描写，情绪冲击极强，情绪低落期不建议阅读",
    "triggerWarningType": "psychology",
    "suitableFor": "有心理承受力、想要理解性侵受害者处境的读者",
    "companionBooks": [
      "l01",
      "l03"
    ],
    "quote": "文学是最徒劳的且最美丽的，文学也是最残忍的。",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%88%BF%E6%80%9D%E7%90%AA%E7%9A%84%E5%88%9D%E6%81%8B%E4%B9%90%E5%9B%AD"
      }
    ],
    "featured": false,
    "publishYear": 2017,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "lin-yihan"
  },
  {
    "id": "o05",
    "title": "女孩们的地下战争",
    "titleEn": "Odd Girl Out",
    "author": "蕾切尔·西蒙斯",
    "authorEn": "Rachel Simmons",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "校园霸凌",
      "女孩社交",
      "隐性攻击"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "女孩之间的霸凌不是打闹，而是沉默的排挤、刻薄的传话、友谊的撤回。西蒙斯深入访谈了大量女孩和成年女性，揭示了这种「隐性攻击文化」如何从校园延续到职场，如何塑造了女性之间的竞争与不安。如果你曾经在女生群体中感到窒息，这本书会让你看到：那不是你的错。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "经历过女孩间排挤/霸凌的女性、教育工作者、家长",
    "companionBooks": [
      "o03"
    ],
    "quote": "女孩不是天生刻薄的——她们是被教会的。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E5%AD%A9%E4%BB%AC%E7%9A%84%E5%9C%B0%E4%B8%8B%E6%88%98%E4%BA%89"
      }
    ],
    "featured": false,
    "publishYear": 2002,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "rachel-simmons"
  },
  {
    "id": "o09",
    "title": "不完美的礼物",
    "titleEn": "The Gifts of Imperfection",
    "author": "布琳·布朗",
    "authorEn": "Brené Brown",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "羞耻感",
      "脆弱力量",
      "自我接纳"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "随笔散文",
    "guide": "布朗博士花了二十年研究「羞耻感」——那种「我不够好」的深层恐惧。她发现，那些活得最舒展的人，不是没有缺点的人，而是敢于拥抱自己不完美的人。这本书像一场温柔的心理咨询，教你如何放下「必须完美」的包袱，用真实的不完美换取真正的自由。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "完美主义者、常常觉得自己「不够好」的女性",
    "companionBooks": [
      "o02",
      "o06"
    ],
    "quote": "全心投入生活，意味着有勇气对他人说：我不完美，但我值得被爱。",
    "readingTime": 3,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%B8%8D%E5%AE%8C%E7%BE%8E%E7%9A%84%E7%A4%BC%E7%89%A9"
      }
    ],
    "featured": false,
    "publishYear": 2010,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "bren-brown"
  },
  {
    "id": "o10",
    "title": "金智英",
    "titleEn": "Kim Jiyoung, Born 1982",
    "author": "赵南柱",
    "authorEn": "Cho Nam-joo",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "韩国女性",
      "日常性别歧视",
      "产后抑郁"
    ],
    "feminismSchool": [
      "eastAsian"
    ],
    "feminismSchoolLabel": [
      "东亚本土女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "东亚",
    "genre": "虚构小说",
    "guide": "金智英，1982年生，首尔人。她的人生没有任何戏剧化的不幸——没有暴力、没有虐待、没有赤贫。她只是像所有东亚女性一样长大：在重男轻女的家庭中学会了退让，在学校里被男同学欺负却被老师说是「他喜欢你」，在职场上比男同事更努力却永远得不到同等机会，结婚生子后在婆家的期待和育儿的重压下逐渐消失了自己。然后，她在某一天开始用别人的声音说话——她「疯」了。这本书用最平静的语调写出了一个东亚女性最普遍的生存困境：不是某一次巨大的伤害，而是生活中无数微小的、日积月累的、被当作「正常」的不公正。每一个女性都能在金智英身上看见自己——那个不敢出声的自己、那个只能微笑的自己、那个在凌晨独自起来喂奶的自己。读到最后一页，你会想哭，但也想站起来。",
    "cover": "",
    "triggerWarning": "涉及产后抑郁描写，正在备孕或产后的读者请酌情阅读",
    "triggerWarningType": "psychology",
    "suitableFor": "所有东亚女性读者、想理解日常性别歧视的人",
    "companionBooks": [
      "l03",
      "m01"
    ],
    "quote": "金智英感觉自己站在迷宫的中央，一直以来都脚踏实地的在找寻出口。",
    "readingTime": 3,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E9%87%91%E6%99%BA%E8%8B%B1"
      }
    ],
    "featured": true,
    "publishYear": 2016,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "cho-nam-joo"
  },
  {
    "id": "o12",
    "title": "秋园",
    "titleEn": "Autumn Garden",
    "author": "杨本芬",
    "authorEn": "Yang Benfen",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国女性",
      "家族记忆",
      "母亲故事"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "虚构小说",
    "guide": "80岁的杨本芬在厨房里写下了她母亲一生的故事。一个普通中国女性如何在战乱、饥荒、政治运动和家庭重压下活下来——或者说，她就是在「活下去」这三个字里过完了自己的一生。秋园是杨本芬的母亲，但也是千千万万个中国女性的缩影：她们的名字不被历史记住，她们的苦难不被文学书写，但她们用一生的坚韧在沉默中撑起了半个世界。杨本芬的文字朴素如泥土，没有任何技巧性的修饰，却有一种任何华丽修辞都无法替代的力量——那是真实的重量。读这本书时，你可能会想起自己的外婆、奶奶，想起她们从来不说但眼神里全是故事的那些时刻。读完只想给自己的妈妈、外婆打一个电话，问问她们年轻时的梦想是什么。",
    "cover": "",
    "triggerWarning": "包含饥饿、丧子等苦难描写，情绪冲击较强",
    "triggerWarningType": "psychology",
    "suitableFor": "想要理解中国上一代女性生命经验的读者",
    "companionBooks": [
      "o13",
      "l02"
    ],
    "quote": "我写了一位普通中国女性一生的故事。她不是我妈妈，她是千千万万个中国女性。",
    "readingTime": 3,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%A7%8B%E5%9B%AD"
      }
    ],
    "featured": true,
    "publishYear": 2020,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "yang-benfen"
  },
  {
    "id": "o13",
    "title": "我本芬芳",
    "titleEn": "I Could Have Been Fragrant",
    "author": "杨本芬",
    "authorEn": "Yang Benfen",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "婚姻",
      "中国女性",
      "老年书写"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "虚构小说",
    "guide": "杨本芬在自己的婚姻故事中，写下了中国女性在婚姻中不被看见的委屈。六十年的婚姻，丈夫从未对她说过一句肯定的话。那些被吞进肚子里的眼泪，在老年的书写中终于找到了出口。书名「我本芬芳」——每个女性都曾是一朵花，只是有些花被生活碾碎得太早。",
    "cover": "",
    "triggerWarning": "包含长期婚姻中的情感忽视描写，可能引发对自身关系的反思",
    "triggerWarningType": "psychology",
    "suitableFor": "对婚姻关系有困惑的女性读者",
    "companionBooks": [
      "o12"
    ],
    "quote": "我本芬芳，奈何为人妻、为人母。",
    "readingTime": 2,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%88%91%E6%9C%AC%E8%8A%AC%E8%8A%B3"
      }
    ],
    "featured": false,
    "publishYear": 2021,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "yang-benfen"
  },
  {
    "id": "o15",
    "title": "橘子不是唯一的水果",
    "titleEn": "Oranges Are Not the Only Fruit",
    "author": "珍妮特·温特森",
    "authorEn": "Jeanette Winterson",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "同性恋",
      "宗教家庭",
      "自我认同"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "虚构小说",
    "guide": "温特森的半自传体小说。一个被虔诚的五旬节教会家庭收养的女孩，在发现自己爱上另一个女孩后，被迫在信仰与自我之间做出选择。书名是一个美丽的隐喻——橘子不是唯一的水果，就像人生不是只有一种活法。文笔诗意而温暖，是一本关于「成为自己」的勇气之书。",
    "cover": "",
    "triggerWarning": "涉及宗教压迫和同性恋排斥描写",
    "triggerWarningType": "psychology",
    "suitableFor": "正在寻找自我认同的女性、LGBTQ+读者",
    "companionBooks": [
      "o01"
    ],
    "quote": "橘子不是唯一的水果，就像世间没有唯一的答案。",
    "readingTime": 3,
    "versionNote": "推荐新版中译本",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%A9%98%E5%AD%90%E4%B8%8D%E6%98%AF%E5%94%AF%E4%B8%80%E7%9A%84%E6%B0%B4%E6%9E%9C"
      }
    ],
    "featured": false,
    "publishYear": 1985,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "jeanette-winterson"
  },
  {
    "id": "o16",
    "title": "心理韧性",
    "titleEn": "Resilience",
    "author": "伊丽莎白·A·斯坦利",
    "authorEn": "Elizabeth A. Stanley",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "韧性训练",
      "正念",
      "创伤恢复"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "斯坦利博士将神经科学和正念冥想结合，开发了一套帮助人们在创伤后重建心理韧性的系统方法。对于有早期创伤经历的读者，这本书提供了具体可操作的体感练习，不只是「想开点」之类的空话。书中有大量针对女性经历的敏感处理。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "正在做身心疗愈的进阶读者",
    "companionBooks": [
      "o07"
    ],
    "quote": "韧性不是扛得住，而是弯得下、弹得回来。",
    "readingTime": 8,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%BF%83%E7%90%86%E9%9F%A7%E6%80%A7"
      }
    ],
    "featured": false,
    "publishYear": 2019,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "elizabeth-a-stanley"
  },
  {
    "id": "o17",
    "title": "也许你该找个人聊聊",
    "titleEn": "Maybe You Should Talk to Someone",
    "author": "洛莉·戈特利布",
    "authorEn": "Lori Gottlieb",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "心理咨询",
      "治疗故事",
      "自我探索"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "一位心理咨询师写下了自己同时作为治疗师和来访者的双重故事。幽默、温暖、坦诚到令人发笑又落泪。书中那位得了癌症的年轻母亲、那对无法沟通的夫妻、那个傲慢的好莱坞编剧——每一个案例都让人看到：我们都是破碎的，但破碎处正是光透进来的地方。",
    "cover": "",
    "triggerWarning": "包含癌症、死亡等沉重话题",
    "triggerWarningType": "psychology",
    "suitableFor": "对心理咨询好奇、正在犹豫是否寻求帮助的读者",
    "companionBooks": [
      "o06"
    ],
    "quote": "我们无法逃避痛苦，但我们可以选择不独自承受。",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-06-20",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%B9%9F%E8%AE%B8%E4%BD%A0%E8%AF%A5%E6%89%BE%E4%B8%AA%E4%BA%BA%E8%81%8A%E8%81%8A"
      }
    ],
    "featured": false,
    "publishYear": 2019,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "lori-gottlieb"
  },
  {
    "id": "l01",
    "title": "82年生的金智英",
    "titleEn": "Kim Jiyoung, Born 1982",
    "author": "赵南柱",
    "authorEn": "Cho Nam-joo",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "韩国女性",
      "日常性别歧视",
      "东亚叙事"
    ],
    "feminismSchool": [
      "eastAsian"
    ],
    "feminismSchoolLabel": [
      "东亚本土女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "东亚",
    "genre": "虚构小说",
    "guide": "（已在上方介绍）韩国现象级女性小说，金智英的人生是东亚女性集体处境的缩影。作为本土她故事的代表作，这本书让无数女性第一次在文学中看见了自己的全部日常——那些被忽视的委屈、被沉默的愤怒、被内化的顺从。",
    "cover": "",
    "triggerWarning": "同o10",
    "triggerWarningType": "psychology",
    "suitableFor": "所有东亚女性读者",
    "companionBooks": [
      "o10",
      "l03"
    ],
    "quote": "同o10",
    "readingTime": 3,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=82%E5%B9%B4%E7%94%9F%E7%9A%84%E9%87%91%E6%99%BA%E8%8B%B1"
      }
    ],
    "featured": false,
    "publishYear": 2016,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "cho-nam-joo"
  },
  {
    "id": "l02",
    "title": "浮木",
    "titleEn": "Driftwood",
    "author": "杨本芬",
    "authorEn": "Yang Benfen",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国女性",
      "家族史",
      "乡土记忆"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "虚构小说",
    "guide": "《秋园》的姊妹篇。如果说《秋园》是一个人的故事，《浮木》就是一群人——那些被历史的长河冲散的普通中国女性，像浮木一样漂泊，却依然顽强地活着。杨本芬的文字始终有一种「土里长出来的力量」，她记录的不是英雄伟业，而是被时代碾压过的普通女性的生存史诗。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "喜欢中国乡土叙事的读者",
    "companionBooks": [
      "o12",
      "o13"
    ],
    "quote": "人如浮木，随波逐流，但浮木也有浮木的倔强。",
    "readingTime": 2,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%B5%AE%E6%9C%A8"
      }
    ],
    "featured": false,
    "publishYear": 2022,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "yang-benfen"
  },
  {
    "id": "l03",
    "title": "素食者",
    "titleEn": "The Vegetarian",
    "author": "韩江",
    "authorEn": "Han Kang",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "身体反抗",
      "韩国文学",
      "布克奖"
    ],
    "feminismSchool": [
      "eastAsian"
    ],
    "feminismSchoolLabel": [
      "东亚本土女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "东亚",
    "genre": "虚构小说",
    "guide": "韩江凭借这本书获得了布克国际文学奖。一个普通的韩国家庭主妇突然拒绝吃肉——这个看似简单的行为，却是她对整个父权家庭秩序最激烈的反抗。小说分三个视角讲述她的故事，每一个视角都让人毛骨悚然：当女性用身体表达反抗时，社会会用什么手段来「治疗」她？",
    "cover": "",
    "triggerWarning": "包含自残、精神崩溃、强制治疗等压抑内容，情绪冲击极强",
    "triggerWarningType": "psychology",
    "suitableFor": "文学读者、对东亚女性处境有深度兴趣的读者",
    "companionBooks": [
      "l01",
      "l04"
    ],
    "quote": "她只是不想再做一个顺从的身体。",
    "readingTime": 3,
    "versionNote": "推荐新版译本",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%B4%A0%E9%A3%9F%E8%80%85"
      }
    ],
    "featured": false,
    "publishYear": 2007,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "han-kang"
  },
  {
    "id": "l04",
    "title": "灿烂千阳",
    "titleEn": "A Thousand Splendid Suns",
    "author": "卡勒德·胡赛尼",
    "authorEn": "Khaled Hosseini",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "阿富汗女性",
      "战争",
      "女性情谊"
    ],
    "feminismSchool": [
      "blackThirdWorld"
    ],
    "feminismSchoolLabel": [
      "黑人/第三世界女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "虚构小说",
    "guide": "胡赛尼用他擅长的叙事功力，讲述了两个阿富汗女性在战火中的命运交织。玛丽雅姆是一个私生女，15岁时被迫嫁给比她大三十岁的男人；莱拉是邻居家聪明的小女孩，在战争中失去了所有家人后也被迫嫁给了同一个男人。两个年龄不同、背景各异的女性，从最初的敌意和猜疑，到成为彼此唯一的依靠——她们一起承受家暴，一起在塔利班的极端统治下偷偷存钱、计划逃跑。在喀布尔那个灰扑扑的院子里，她们的友谊本身就是一种最伟大的反抗。当玛丽雅姆为了莱拉做出最终的牺牲时，你会哭得不能自已，但你也知道那是她一生中第一次为自己做了选择。读完会觉得：女性之间的联结比任何武器都更有力量。",
    "cover": "",
    "triggerWarning": "包含家庭暴力、战争暴行、女性受虐详细描写，情绪冲击强",
    "triggerWarningType": "psychology",
    "suitableFor": "有较强心理承受力的读者、关注战争与女性议题",
    "companionBooks": [
      "t17"
    ],
    "quote": "就像指南针总是指向北方，男人怪罪的手指总是指向女人。",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%81%BF%E7%83%82%E5%8D%83%E9%98%B3"
      }
    ],
    "featured": true,
    "publishYear": 2007,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "khaled-hosseini"
  },
  {
    "id": "l05",
    "title": "使女的故事",
    "titleEn": "The Handmaid's Tale",
    "author": "玛格丽特·阿特伍德",
    "authorEn": "Margaret Atwood",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "反乌托邦",
      "生育控制",
      "女性主义科幻"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "虚构小说",
    "guide": "阿特伍德在1985年写下这部小说时，可能没想到它会成为一张越来越逼近现实的预言地图。在一个未来的神权共和国「基列」中，环境污染导致生育率暴跌，统治阶层以宗教的名义剥夺了女性所有的权利——财产、工作、阅读，甚至自己的名字。有生育能力的女性被分配给统治阶级家庭做「使女」，她们的唯一功能就是怀孕生子。书中最可怕的部分不是那些显而易见的暴行，而是女性之间如何被制度分化、如何互相监视、如何内化了压迫——而这些场景在今天的世界中依然以各种形式上演。这不是科幻，这是已经发生、正在发生、可能继续发生的一切。但阿特伍德也给了我们希望：在书的最后，基列已经灭亡，而女性的声音——被记录在磁带上的、秘密传递的、在黑暗中讲述的——最终被后世听到。",
    "cover": "",
    "triggerWarning": "包含性暴力、生育强迫、极权压迫等压抑内容",
    "triggerWarningType": "psychology",
    "suitableFor": "反乌托邦文学爱好者、关注女性身体自主权的读者",
    "companionBooks": [
      "m01",
      "t12"
    ],
    "quote": "不要让人把你碾成灰。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%BD%BF%E5%A5%B3%E7%9A%84%E6%95%85%E4%BA%8B"
      }
    ],
    "featured": true,
    "publishYear": 1985,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "margaret-atwood"
  },
  {
    "id": "l06",
    "title": "醒来的女性",
    "titleEn": "The Women's Room",
    "author": "玛丽莲·弗伦奇",
    "authorEn": "Marilyn French",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "家庭主妇觉醒",
      "美国女性",
      "第二波浪潮"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "虚构小说",
    "guide": "这本1977年的小说被称为「女性主义版《在路上》」。米拉是一个典型的1950年代美国中产主妇——丈夫、孩子、整洁的郊区房子——她在这一切中窒息。然后她离婚了，回到大学，遇见了一群同样在觉醒的女性。她们喝酒、聊天、恋爱、愤怒——她们在成为自己。这是一部酣畅淋漓的觉醒之书。",
    "cover": "",
    "triggerWarning": "包含性暴力描写，部分场景压抑",
    "triggerWarningType": "psychology",
    "suitableFor": "喜欢长篇小说、对第二波女权运动感兴趣的读者",
    "companionBooks": [
      "t07"
    ],
    "quote": "她终于明白，她不是疯了的那个——这个社会才疯了。",
    "readingTime": 10,
    "versionNote": "推荐完整未删节版",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E9%86%92%E6%9D%A5%E7%9A%84%E5%A5%B3%E6%80%A7"
      }
    ],
    "featured": false,
    "publishYear": 1977,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "marilyn-french"
  },
  {
    "id": "l08",
    "title": "她的名字是",
    "titleEn": "Her Name Is",
    "author": "赵南柱",
    "authorEn": "Cho Nam-joo",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "韩国女性",
      "短篇集",
      "真实故事改编"
    ],
    "feminismSchool": [
      "eastAsian"
    ],
    "feminismSchoolLabel": [
      "东亚本土女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "东亚",
    "genre": "纪实非虚构",
    "guide": "赵南柱在《金智英》之后，走访了60多位韩国女性，把她们的故事写成了一本短篇集。每一个「她」都有自己的名字、自己的战斗。从职场性骚扰受害者到老年独居女性，从青少年偶像粉丝到残疾女性——这本书让那些被主流叙事遗忘的女性终于有了名字。",
    "cover": "",
    "triggerWarning": "包含性骚扰等压抑内容",
    "triggerWarningType": "psychology",
    "suitableFor": "喜欢短篇纪实叙事的读者",
    "companionBooks": [
      "l01"
    ],
    "quote": "她有名字。她不是某人的女儿、妻子或母亲，她就是她自己。",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B9%E7%9A%84%E5%90%8D%E5%AD%97%E6%98%AF"
      }
    ],
    "featured": false,
    "publishYear": 2018,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "cho-nam-joo"
  },
  {
    "id": "l09",
    "title": "盐镇",
    "titleEn": "Salt Town",
    "author": "易小荷",
    "authorEn": "Yi Xiaohe",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国小镇女性",
      "非虚构",
      "底层叙事"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "记者易小荷在四川一个偏远古镇住了一年，用最朴素的方式记录了12位小镇女性的人生。她们是菜市场卖菜的女摊贩、是在KTV陪唱的女大学生、是90岁的女「袍哥」、是被家暴但不敢离婚的妻子——她们的生活像盐一样苦涩又不可或缺。书中没有任何学术术语和社会学分析，但每一个故事都是中国底层女性最真实的生存报告。那个在镇上开缝纫店的单亲妈妈，每天凌晨四点起来干活，手上全是针扎的疤痕，但她说「我想让我女儿上大学」。读这本书时你会感到一种朴素而坚定的力量——她们也许永远不会被称为「女性主义者」，但她们的每一个选择都在书写最真实的女性生存史诗。",
    "cover": "",
    "triggerWarning": "包含家暴、贫困、性剥削等沉重内容",
    "triggerWarningType": "psychology",
    "suitableFor": "关注中国底层女性处境的读者",
    "companionBooks": [
      "o12"
    ],
    "quote": "她们的眼泪把生活的盐溶化了，又凝结成更咸的盐。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-06-10",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%9B%90%E9%95%87"
      }
    ],
    "featured": true,
    "publishYear": 2023,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "yi-xiaohe"
  },
  {
    "id": "l10",
    "title": "我的天才女友",
    "titleEn": "My Brilliant Friend",
    "author": "埃莱娜·费兰特",
    "authorEn": "Elena Ferrante",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性友谊",
      "意大利",
      "成长小说"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "虚构小说",
    "guide": "费兰特用四部曲讲述了两个那不勒斯女孩跨越一生的友谊——这是关于女性友谊最诚实的书写。莉拉和埃莱娜出生在同一个贫穷街区，莉拉是那个天赋异禀却无法继续上学的女孩，埃莱娜是那个靠苦读一步步走出街区的女孩。她们的友谊中混杂着爱、嫉妒、竞争、扶持、背叛和无法割断的羁绊——她们彼此成为对方的镜子、对手和灯塔。费兰特写出了女性友谊中最难以启齿的部分：当你最好的朋友过上了你羡慕的生活，你该如何真诚地为她感到高兴？当你终于超越了她，为什么内心反而有一种空虚？读这本书就像在看自己的友谊史——那些深夜的促膝长谈、那些没说出口的嫉妒、那些超越言语的相互理解。读完你会想立刻给最好的女性朋友发一条消息：「谢谢你一直在。」",
    "cover": "",
    "triggerWarning": "包含家庭暴力和贫困描写",
    "triggerWarningType": "psychology",
    "suitableFor": "所有珍视女性友谊的读者",
    "companionBooks": [
      "l11"
    ],
    "quote": "我们互相塑造，就像河流塑造河岸。",
    "readingTime": 8,
    "versionNote": "推荐四部曲系列完整阅读",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%88%91%E7%9A%84%E5%A4%A9%E6%89%8D%E5%A5%B3%E5%8F%8B"
      }
    ],
    "featured": true,
    "publishYear": 2011,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "elena-ferrante"
  },
  {
    "id": "l11",
    "title": "新名字的故事",
    "titleEn": "The Story of a New Name",
    "author": "埃莱娜·费兰特",
    "authorEn": "Elena Ferrante",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性友谊",
      "婚姻困境",
      "意大利"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "虚构小说",
    "guide": "那不勒斯四部曲的第二部，也是女性友谊主题最激烈的一部。莉拉和埃莱娜走上了完全不同的路——婚姻和学业——但她们的关系变得更加复杂、更加痛苦、也更加不可分割。费兰特写出了女性友谊中最难以启齿的部分：当你最好的朋友过上了你选择放弃的生活，你该如何面对她？如何面对自己？",
    "cover": "",
    "triggerWarning": "包含婚姻暴力和背叛描写",
    "triggerWarningType": "psychology",
    "suitableFor": "追完四部曲的读者",
    "companionBooks": [
      "l10"
    ],
    "quote": "我们都想成为对方，却只能成为自己。",
    "readingTime": 8,
    "versionNote": "请按四部曲顺序阅读",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%96%B0%E5%90%8D%E5%AD%97%E7%9A%84%E6%95%85%E4%BA%8B"
      }
    ],
    "featured": false,
    "publishYear": 2012,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "elena-ferrante"
  },
  {
    "id": "l12",
    "title": "逃离",
    "titleEn": "Runaway",
    "author": "爱丽丝·门罗",
    "authorEn": "Alice Munro",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "短篇集",
      "诺奖作家",
      "女性命运"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "虚构小说",
    "guide": "诺贝尔文学奖得主门罗的短篇集，每一个故事都是关于一个试图「逃离」的女人——逃离婚姻、逃离小镇、逃离母亲身份、逃离自己。门罗从不给出简单的答案，她只是在那些决定人生走向的微小时刻按下定格键，让你看到：女性的每一次抉择都包含着多大的勇气和代价。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "短篇小说爱好者、门罗粉丝",
    "companionBooks": [],
    "quote": "她一直以为，只要逃离了这个小镇，一切都会不同。",
    "readingTime": 4,
    "versionNote": "推荐中译本新版",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E9%80%83%E7%A6%BB"
      }
    ],
    "featured": false,
    "publishYear": 2004,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "alice-munro"
  },
  {
    "id": "l13",
    "title": "紫色",
    "titleEn": "The Color Purple",
    "author": "爱丽丝·沃克",
    "authorEn": "Alice Walker",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "黑人女性",
      "书信体",
      "姐妹情谊"
    ],
    "feminismSchool": [
      "blackThirdWorld"
    ],
    "feminismSchoolLabel": [
      "黑人/第三世界女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "虚构小说",
    "guide": "普利策奖获奖作品，用书信体写成的黑人女性生存史诗。西莉在父亲和丈夫的虐待下沉默了半生，直到她遇见了两个改变她命运的女人——索菲亚和莎格。她们教会她：你值得被爱，值得被尊重，值得活出紫色般高贵的人生。读这本书就像亲眼目睹一朵花在岩石缝中绽放。",
    "cover": "",
    "triggerWarning": "包含性侵、家庭暴力详细描写，情绪冲击强",
    "triggerWarningType": "psychology",
    "suitableFor": "关注种族与性别交叉议题的读者",
    "companionBooks": [
      "l04"
    ],
    "quote": "我觉得上帝很生气如果你走过紫色而不注意它。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%B4%AB%E8%89%B2"
      }
    ],
    "featured": false,
    "publishYear": 1982,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "alice-walker"
  },
  {
    "id": "l14",
    "title": "倾城之恋",
    "titleEn": "Love in a Fallen City",
    "author": "张爱玲",
    "authorEn": "Eileen Chang",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国女性",
      "战争",
      "婚恋"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "虚构小说",
    "guide": "张爱玲笔下的白流苏，是中文文学中最复杂、最令人心疼的女性形象之一。她在战火纷飞的香港与范柳原展开了一场关于爱与生存的博弈——与其说她在寻找爱情，不如说她在用自己唯一被社会允许的资源（美貌与手腕）争取安身之地。张爱玲的冷眼和慈悲同时在这篇小说中燃烧。",
    "cover": "",
    "triggerWarning": "反映1940年代婚恋观，女性选择空间极为有限",
    "triggerWarningType": "viewpoint",
    "suitableFor": "张爱玲读者、对民国女性文学感兴趣的读者",
    "companionBooks": [],
    "quote": "在这不可理喻的世界里，谁知道什么是因，什么是果？",
    "readingTime": 2,
    "versionNote": "推荐《传奇》和《流言》合集",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%80%BE%E5%9F%8E%E4%B9%8B%E6%81%8B"
      }
    ],
    "featured": false,
    "publishYear": 1943,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "eileen-chang"
  },
  {
    "id": "l15",
    "title": "撒哈拉的故事",
    "titleEn": "Stories of the Sahara",
    "author": "三毛",
    "authorEn": "Sanmao",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "旅行书写",
      "自由生活",
      "华语女性作家"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "随笔散文",
    "guide": "三毛用她的笔为无数华语女性打开了一扇通往自由生活的窗口。她独自跑到撒哈拉沙漠生活，嫁给了西班牙潜水员荷西，把荒凉的沙漠过成了诗。在今天看来，三毛的一生本身就是对「女性应该过怎样的生活」这个问题最有力的回答——她用自己的方式活，不用任何人的剧本。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "向往自由生活的女性读者、三毛粉丝",
    "companionBooks": [],
    "quote": "每想你一次，天上飘落一粒沙，从此形成了撒哈拉。",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%92%92%E5%93%88%E6%8B%89%E7%9A%84%E6%95%85%E4%BA%8B"
      }
    ],
    "featured": false,
    "publishYear": 1976,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "sanmao"
  },
  {
    "id": "l16",
    "title": "呼兰河传",
    "titleEn": "Tales of Hulan River",
    "author": "萧红",
    "authorEn": "Xiao Hong",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国女性",
      "东北乡土",
      "民国文学"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "虚构小说",
    "guide": "萧红是中文现代文学史上最重要的女性作家之一。《呼兰河传》用一个小女孩的眼睛看世界——那些被冻死的底层人、那些被婆婆虐待的童养媳、那些在生活泥沼里挣扎的普通女性。萧红的文字有着独特的「冷的诗意」，她在个人苦难中写出了一个时代的女性群像。",
    "cover": "",
    "triggerWarning": "包含童养媳虐待、底层苦难描写",
    "triggerWarningType": "psychology",
    "suitableFor": "中国现代文学爱好者",
    "companionBooks": [
      "l14"
    ],
    "quote": "逆来顺受，你说我的生命可惜，我自己却不在乎。",
    "readingTime": 3,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%91%BC%E5%85%B0%E6%B2%B3%E4%BC%A0"
      }
    ],
    "featured": false,
    "publishYear": 1940,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "xiao-hong"
  },
  {
    "id": "l18",
    "title": "半生缘",
    "titleEn": "Half a Lifelong Romance",
    "author": "张爱玲",
    "authorEn": "Eileen Chang",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国女性",
      "爱情悲剧",
      "民国"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "虚构小说",
    "guide": "张爱玲的另一经典。顾曼桢和沈世钧相爱却不能在一起的故事，被无数人称为「中国最好的爱情小说」。但在爱情叙事的表面之下，是女性在家族、阶级和性别规范中的身不由己。曼桢的悲剧不是因为她不够爱，而是因为她的命运从不由自己掌控。",
    "cover": "",
    "triggerWarning": "包含性暴力情节",
    "triggerWarningType": "psychology",
    "suitableFor": "张爱玲读者、民国文学爱好者",
    "companionBooks": [
      "l14"
    ],
    "quote": "我们回不去了。",
    "readingTime": 4,
    "versionNote": "推荐皇冠版",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%8D%8A%E7%94%9F%E7%BC%98"
      }
    ],
    "featured": false,
    "publishYear": 1948,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "eileen-chang"
  },
  {
    "id": "l19",
    "title": "战争中没有女性",
    "titleEn": "War's Unwomanly Face",
    "author": "S.A.阿列克谢耶维奇",
    "authorEn": "Svetlana Alexievich",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女兵",
      "二战",
      "口述历史"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "诺贝尔文学奖得主阿列克谢耶维奇采访了上百位参加二战的苏联女兵，写下了这部震撼人心的口述历史。这些女性曾经是狙击手、飞行员、护士、游击队员——但战争结束后，她们被要求「做回女人」，她们的战争记忆被官方叙事抹去。这本书是她们终于被听见的声音。",
    "cover": "",
    "triggerWarning": "包含战争暴行和创伤描述，情绪冲击强",
    "triggerWarningType": "psychology",
    "suitableFor": "非虚构爱好者、关注女性战争经验的读者",
    "companionBooks": [
      "l08"
    ],
    "quote": "战争中没有女性面孔——只有人类的面孔。",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%88%98%E4%BA%89%E4%B8%AD%E6%B2%A1%E6%9C%89%E5%A5%B3%E6%80%A7"
      }
    ],
    "featured": false,
    "publishYear": 1985,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "svetlana-alexievich"
  },
  {
    "id": "l20",
    "title": "蝲蛄吟唱的地方",
    "titleEn": "Where the Crawdads Sing",
    "author": "迪莉娅·欧文斯",
    "authorEn": "Delia Owens",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性生存",
      "自然",
      "悬疑"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "虚构小说",
    "guide": "全球现象级畅销小说。被遗弃在沼泽地中的小女孩基亚独自长大，成为了一名湿地生物学家。当小镇上的一个男人被发现死亡时，所有人把目光投向了这个「沼泽女孩」。这是一个关于女性如何在最恶劣的环境中生存、学习、爱和复仇的故事。基亚是近年来文学中最令人难忘的女性形象之一。",
    "cover": "",
    "triggerWarning": "包含暴力、抛弃和死亡描写",
    "triggerWarningType": "psychology",
    "suitableFor": "喜欢自然书写和女性成长故事的读者",
    "companionBooks": [
      "l05"
    ],
    "quote": "沼泽知道所有关于死亡的事，但不一定把它定义为悲剧。",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E8%9D%B2%E8%9B%84%E5%90%9F%E5%94%B1%E7%9A%84%E5%9C%B0%E6%96%B9"
      }
    ],
    "featured": false,
    "publishYear": 2018,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "delia-owens"
  },
  {
    "id": "w01",
    "title": "向前一步",
    "titleEn": "Lean In",
    "author": "谢丽尔·桑德伯格",
    "authorEn": "Sheryl Sandberg",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "职场平等",
      "女性领导力",
      "自我倡导"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "Facebook COO桑德伯格以亲身经历出发，探讨了女性为什么在职场中「坐在后排」而不是「向前一步」。她用数据和故事告诉你：女性在谈判薪资时更容易被贴上「咄咄逼人」的标签，女性在被夸奖时更习惯说「其实是团队的功劳」，女性在没有100%准备好时就不敢争取机会——而这些都不是「性格问题」，是社会对女性的规训内化成了自我怀疑。书中包含大量实用建议：如何准备薪资谈判、如何选择支持你事业的伴侣、如何在职场中找到自己的「同盟」。虽然这本书因为桑德伯格本人的硅谷精英背景而受到一些批评，但作为职场女性自我倡导的入门读物，它点燃了全球数百万女性的信心：你值得坐在那张桌子前，你值得为自己发声。",
    "cover": "",
    "triggerWarning": "作者背景为硅谷精英白领，经验主要适用于知识型职场，对蓝领和服务业女性处境涉及较少",
    "triggerWarningType": "viewpoint",
    "suitableFor": "职场新人、有升职困惑的女性白领",
    "companionBooks": [
      "w02",
      "w03"
    ],
    "quote": "如果没有你的位置，就自己搬一把椅子过来。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%90%91%E5%89%8D%E4%B8%80%E6%AD%A5"
      }
    ],
    "featured": true,
    "publishYear": 2013,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "sheryl-sandberg"
  },
  {
    "id": "w02",
    "title": "职场女性：别让这些细节绊住你",
    "titleEn": "Nice Girls Don't Get the Corner Office",
    "author": "洛伊丝·P·弗兰克尔",
    "authorEn": "Lois P. Frankel",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "职场行为",
      "性别偏见",
      "自我提升"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "弗兰克尔博士总结了130多种女性在职场中容易犯的「小女孩错误」——比如过度道歉、把陈述说成疑问、不敢直视他人眼睛——每一项都是社会规训的结果，却让女性在职场中付出了真实的代价。每章短小实用，可以当工具书翻着看。读完你会发现：很多你以为是「性格问题」的职场障碍，其实是性别的产物。",
    "cover": "",
    "triggerWarning": "部分建议偏传统企业环境，创意行业可辩证参考",
    "triggerWarningType": "viewpoint",
    "suitableFor": "职场新人、想在细节上提升职场竞争力的女性",
    "companionBooks": [
      "w01"
    ],
    "quote": "你没有做错什么。你做错的是以为只要把工作做好就够了。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E8%81%8C%E5%9C%BA%E5%A5%B3%E6%80%A7%EF%BC%9A%E5%88%AB%E8%AE%A9%E8%BF%99%E4%BA%9B%E7%BB%86%E8%8A%82%E7%BB%8A%E4%BD%8F%E4%BD%A0"
      }
    ],
    "featured": false,
    "publishYear": 2004,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "lois-p-frankel"
  },
  {
    "id": "w03",
    "title": "女性与领导力",
    "titleEn": "Through the Labyrinth",
    "author": "艾丽斯·H·伊格利 / 琳达·L·卡利",
    "authorEn": "Alice H. Eagly",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "领导力研究",
      "性别偏见",
      "玻璃天花板"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "两位社会心理学家用几十年的研究数据，系统分析了女性在通往领导岗位的道路上面临的「迷宫」——不再是单一的玻璃天花板，而是一整套复杂的偏见网络。从无意识的性别刻板印象到双重束缚（太强硬被骂、太温柔被忽视），这本书用科学证据解释了为什么「优秀的女性」不等于「被认可的领导者」。",
    "cover": "",
    "triggerWarning": "学术研究型写作，偏数据驱动，不如通俗读物轻松",
    "triggerWarningType": "difficult",
    "suitableFor": "对性别与领导力研究感兴趣的进阶读者、HR从业者",
    "companionBooks": [
      "w01",
      "t12"
    ],
    "quote": "女性面临的不是一堵玻璃天花板，而是一座迷宫。",
    "readingTime": 8,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E4%B8%8E%E9%A2%86%E5%AF%BC%E5%8A%9B"
      }
    ],
    "featured": false,
    "publishYear": 2007,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "alice-h-eagly"
  },
  {
    "id": "w04",
    "title": "职场妈妈生存报告",
    "titleEn": "Making Motherhood Work",
    "author": "凯特琳·柯林斯",
    "authorEn": "Caitlyn Collins",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "职场妈妈",
      "跨国比较",
      "工作家庭平衡"
    ],
    "feminismSchool": [
      "socialist"
    ],
    "feminismSchoolLabel": [
      "社会主义/马克思女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "为什么瑞典的妈妈可以兼顾事业和家庭，而美国的妈妈在崩溃边缘？柯林斯用了五年时间访谈了瑞典、德国、意大利和美国的135位职场妈妈，发现「工作家庭平衡」不是个人能力问题，而是政策和社会支持的问题。瑞典的带薪育儿假、德国的弹性工作制、意大利的大家庭支持网络——每一种制度背后都是一种不同的性别价值观。书中那些跨国比较会让你对自己身处的制度有了「原来可以不一样」的认识：你一直觉得请产假会耽误工作是「没办法的事」，但在瑞典那是所有人的权益；你一直以为「育儿就是妈妈的责任」是自然规律，但在德国爸爸休育儿假的比例正在逐年上升。这本书不是教你「如何更高效地做妈妈」，而是告诉你：不是你需要更努力——是系统需要改变。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "职场妈妈、正在规划生育的职场女性、政策研究者",
    "companionBooks": [
      "m05",
      "m01"
    ],
    "quote": "妈妈不需要更努力，需要的是一个不把她们当超人的社会。",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-06-15",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E8%81%8C%E5%9C%BA%E5%A6%88%E5%A6%88%E7%94%9F%E5%AD%98%E6%8A%A5%E5%91%8A"
      }
    ],
    "featured": true,
    "publishYear": 2019,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "caitlyn-collins"
  },
  {
    "id": "w05",
    "title": "谁说女性不能当医生？",
    "titleEn": "Who Says Women Can't Be Doctors?",
    "author": "塔尼娅·李·斯通",
    "authorEn": "Tanya Lee Stone",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性职业史",
      "医学",
      "传记绘本"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 1,
    "waveLabel": "第一波女权浪潮",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "1830年代，一个女人想要成为医生，会被当成疯子。伊丽莎白·布莱克威尔被28所医学院拒绝后，终于被一所学校「开玩笑地」录取——然后她以全班第一名的成绩毕业。这本轻快的历史小品用一个人的故事串起了女性进入专业领域的艰难历程。篇幅极短，力量极大。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "所有对女性职业史感兴趣的读者、青少年读者",
    "companionBooks": [
      "w06"
    ],
    "quote": "",
    "readingTime": 1,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E8%B0%81%E8%AF%B4%E5%A5%B3%E6%80%A7%E4%B8%8D%E8%83%BD%E5%BD%93%E5%8C%BB%E7%94%9F%EF%BC%9F"
      }
    ],
    "featured": false,
    "publishYear": 2013,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "tanya-lee-stone"
  },
  {
    "id": "w07",
    "title": "格勒善女性",
    "titleEn": "The Gresham Women",
    "author": "李奕萱",
    "authorEn": "Li Yixuan",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国职场",
      "金融行业",
      "女性群像"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "一本聚焦中国金融行业女性的非虚构记录。从投行女分析师到基金女合伙人，从被客户质疑「你行吗」到在会议室里被人当成倒茶小妹——这些高学历、高收入的女性，依然在职场中遭遇着各种隐性的性别偏见。一手的采访材料让这本书有了难得的本土视角。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "金融/法律/咨询等专业服务行业女性",
    "companionBooks": [
      "w01"
    ],
    "quote": "",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-06-25",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%A0%BC%E5%8B%92%E5%96%84%E5%A5%B3%E6%80%A7"
      }
    ],
    "featured": false,
    "publishYear": 2025,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "li-yixuan"
  },
  {
    "id": "w08",
    "title": "女工记",
    "titleEn": "Factory Girls",
    "author": "张彤禾",
    "authorEn": "Leslie T. Chang",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国女工",
      "工厂",
      "流动人口"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "华裔记者张彤禾在东莞的工厂里生活了两年，记录下流水线上年轻女工的真实人生。她们大多来自农村、初中毕业、十几岁就进入工厂——在许多人眼中她们只是「流水线上的螺丝钉」，但张彤禾写出了她们每个人的名字、每个人的梦想。有女孩把工资寄回家供弟弟读书，有女孩存钱学英语想去做外贸，有女孩在工厂里认识了自己的男朋友一起规划未来。她们在枯燥的重复劳动中保持着惊人的生命力——她们买时尚杂志、染头发、给家里打电话时哭、和工友一起吐槽线长。这本书让被城市中产忽视的「打工妹」群体重新被看见，也让读者反思：当我们享受着快递和外卖的便利时，有多少年轻女性正在流水线和配送站上消耗着她们的青春？",
    "cover": "",
    "triggerWarning": "包含工厂劳动剥削描写",
    "triggerWarningType": "psychology",
    "suitableFor": "关注中国底层女性劳动者处境的读者",
    "companionBooks": [
      "l09"
    ],
    "quote": "流水线上的每一天都是在用体力购买未来的可能性。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E5%B7%A5%E8%AE%B0"
      }
    ],
    "featured": true,
    "publishYear": 2008,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "leslie-t-chang"
  },
  {
    "id": "w09",
    "title": "性骚扰：历史的阴影与当代的回响",
    "titleEn": "Sexual Harassment: History and Present",
    "author": "谢丽尔·海因斯等",
    "authorEn": "",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "职场性骚扰",
      "#MeToo",
      "法律权益"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "在#MeToo运动席卷全球后，职场性骚扰终于被公开讨论。但什么是性骚扰？它的法律边界在哪里？为什么受害者如此难以开口？这本书从法律、心理学和社会学三个维度给出了全面的分析。虽然学术性强，但每一个概念都有真实案例支撑，是职场女性维护自身权益的必备知识储备。",
    "cover": "",
    "triggerWarning": "包含性骚扰案例描述，可能触发创伤回忆",
    "triggerWarningType": "psychology",
    "suitableFor": "HR从业者、法律工作者、关注#MeToo议题的读者",
    "companionBooks": [
      "w10"
    ],
    "quote": "沉默不是同意——沉默是恐惧。",
    "readingTime": 7,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%80%A7%E9%AA%9A%E6%89%B0%EF%BC%9A%E5%8E%86%E5%8F%B2%E7%9A%84%E9%98%B4%E5%BD%B1%E4%B8%8E%E5%BD%93%E4%BB%A3%E7%9A%84%E5%9B%9E%E5%93%8D"
      }
    ],
    "featured": false,
    "publishYear": 2019,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "author-3587431561"
  },
  {
    "id": "w10",
    "title": "知晓我姓名",
    "titleEn": "Know My Name",
    "author": "香奈儿·米勒",
    "authorEn": "Chanel Miller",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "性侵幸存者",
      "司法正义",
      "自我赋权"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "你可能记得新闻里那个「斯坦福性侵案」中的罪犯布洛克·特纳——但你知道那个被他侵犯的女性的名字吗？她叫香奈儿·米勒。在这本震撼人心的回忆录中，她不再是新闻里被隐去姓名的「受害者」——她拿回了自己的名字、自己的声音、自己书写自己故事的权力。书中详细记录了她在被侵犯后的心路历程：她在医院里赤身裸体被拍照取证时的羞耻感、她在法庭上被对方律师盘问「你那天穿的是什么」时的愤怒、她在读那份长达七千多字的受害者陈述书时双手颤抖的力量。文字如同裂缝中长出的花，美丽、疼痛、不可摧毁。读这本书需要勇气——但你会从香奈儿身上学到：真正的力量不是没有受过伤，而是在受伤后依然选择站立，选择言说，选择不被定义。",
    "cover": "",
    "triggerWarning": "包含性侵详细描写，情绪冲击强",
    "triggerWarningType": "psychology",
    "suitableFor": "有心理承受力的读者、关注司法与性别议题者",
    "companionBooks": [
      "l01"
    ],
    "quote": "你夺走了我的故事，但今天我要把它拿回来。",
    "readingTime": 5,
    "versionNote": "推荐中译本，翻译感人",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%9F%A5%E6%99%93%E6%88%91%E5%A7%93%E5%90%8D"
      }
    ],
    "featured": true,
    "publishYear": 2019,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "chanel-miller"
  },
  {
    "id": "w11",
    "title": "女性的收入",
    "titleEn": "The Women's Pay Gap",
    "author": "多位经济学家",
    "authorEn": "",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "薪资鸿沟",
      "经济学",
      "职场平等"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "为什么同等职位女性的薪资仍然低于男性？「谈判不够积极」「选择了低薪行业」「为了家庭牺牲了事业」——这些常见的解释背后有多少是事实、多少是偏见？本书用经济学数据逐一分析性别薪资鸿沟的结构性原因。读完你会明白：缩小收入差距需要的不是女性改变自己，而是系统改变规则。",
    "cover": "",
    "triggerWarning": "经济学专业术语较多，需要一定阅读耐心",
    "triggerWarningType": "difficult",
    "suitableFor": "经济学爱好者、HR薪酬设计者、职场平等倡导者",
    "companionBooks": [
      "t12",
      "w01"
    ],
    "quote": "薪资鸿沟不是女性选择的代价，而是性别歧视的账单。",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E7%9A%84%E6%94%B6%E5%85%A5"
      }
    ],
    "featured": false,
    "publishYear": 2020,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "author-2281023478"
  },
  {
    "id": "w12",
    "title": "女飞行员",
    "titleEn": "The Women with Silver Wings",
    "author": "凯瑟琳·S·麦考密克",
    "authorEn": "Katherine S. McCormick",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性飞行员",
      "二战",
      "航空史"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "二战期间，一千多名美国女性志愿者成为军用飞机的试飞员和运输飞行员（WASP项目）。她们飞过每一款美军战机，将飞机从工厂运送到前线——但她们不被承认是军人，没有保险，没有军衔。如果有女飞行员在任务中牺牲，她们的同伴需要凑钱把遗体运回家。这些女性的贡献被官方隐没了三十多年。",
    "cover": "",
    "triggerWarning": "包含飞行事故和死亡描写",
    "triggerWarningType": "psychology",
    "suitableFor": "航空爱好者、对女性军事史感兴趣的读者",
    "companionBooks": [
      "l19"
    ],
    "quote": "她们在天空中证明了性别与飞行能力毫无关系。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E9%A3%9E%E8%A1%8C%E5%91%98"
      }
    ],
    "featured": false,
    "publishYear": 2020,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "katherine-s-mccormick"
  },
  {
    "id": "w13",
    "title": "代码女孩",
    "titleEn": "Code Girls",
    "author": "丽莎·芒迪",
    "authorEn": "Liza Mundy",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性程序员",
      "二战密码学",
      "STEM"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "你知道最早的「计算机」其实是一群女性吗？二战期间，上万名美国女性被招募为密码破译员，她们用纸笔和早期的电子设备截获和破译了轴心国的秘密通信，直接缩短了战争进程。战争结束后，她们被要求保守秘密、回家结婚——她们的故事被封存了半个多世纪。这本书让这些「隐藏的天才」终于被历史记住。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "对科技史和女性STEM先驱感兴趣的读者",
    "companionBooks": [
      "w12",
      "t12"
    ],
    "quote": "",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%BB%A3%E7%A0%81%E5%A5%B3%E5%AD%A9"
      }
    ],
    "featured": false,
    "publishYear": 2017,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "liza-mundy"
  },
  {
    "id": "w14",
    "title": "女性在科学中的位置",
    "titleEn": "Women in Science",
    "author": "蕾切尔·伊格诺托夫斯基",
    "authorEn": "Rachel Ignotofsky",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性科学家",
      "STEM",
      "图文科普"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "一本精致图文科普书，介绍了50位被历史淡忘的女性科学家——从第一位女数学家希帕提娅到NASA的「人肉计算机」们。每页都有精美插图，阅读体验轻松愉悦，适合在通勤或睡前翻阅。看完你会有一种强烈的冲动：把这本书送给身边每一个学理工科的小女孩。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "所有年龄段的女性读者、青少年、家长",
    "companionBooks": [
      "w13"
    ],
    "quote": "科学过去和现在都需要女性的头脑和双手。",
    "readingTime": 2,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E5%9C%A8%E7%A7%91%E5%AD%A6%E4%B8%AD%E7%9A%84%E4%BD%8D%E7%BD%AE"
      }
    ],
    "featured": false,
    "publishYear": 2016,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "rachel-ignotofsky"
  },
  {
    "id": "w15",
    "title": "中国女律师",
    "titleEn": "Chinese Women Lawyers",
    "author": "多位作者",
    "authorEn": "",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国职场",
      "法律行业",
      "女性群像"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "中国法律行业中女性从业者占比已超过40%，但合伙人级别的女性仍然稀少。这本书收录了十几位中国女律师的真实故事——她们如何在法庭上被对方律师用「你应该回家带孩子」来攻击，如何在应酬场合被当作「花瓶」，又如何用专业能力赢得了客户和同行的尊重。本土视角，读来格外亲切。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "法律、金融、咨询等专业服务行业女性",
    "companionBooks": [
      "w07",
      "w01"
    ],
    "quote": "",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-06-20",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%BE%8B%E5%B8%88"
      }
    ],
    "featured": false,
    "publishYear": 2024,
    "hasAudio": false,
    "hasRead": true,
    "authorId": ""
  },
  {
    "id": "w16",
    "title": "无止之境",
    "titleEn": "No Stopping Place",
    "author": "王小梅",
    "authorEn": "Wang Xiaomei",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国女性创业",
      "小微企业",
      "草根经济"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "一本记录中国小城镇女性创业者故事的非虚构作品。她们不是互联网大厂的女高管，不是在纳斯达克敲钟的女明星——她们是菜市场里拖着菜筐的女摊贩、是开缝纫店的中年单亲妈妈、是用微信卖特产的山村妇女。她们用最微小的资本和最坚韧的意志，拼出了自己的生意和人生。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "对草根女性创业故事感兴趣的读者",
    "companionBooks": [
      "w08"
    ],
    "quote": "",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%97%A0%E6%AD%A2%E4%B9%8B%E5%A2%83"
      }
    ],
    "featured": false,
    "publishYear": 2023,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "wang-xiaomei"
  },
  {
    "id": "w17",
    "title": "玻璃边界",
    "titleEn": "The Glass Border",
    "author": "西蒙娜·塔伦蒂诺",
    "authorEn": "Simona Tarantino",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "跨国职场",
      "移民女性",
      "文化差异"
    ],
    "feminismSchool": [
      "blackThirdWorld"
    ],
    "feminismSchoolLabel": [
      "黑人/第三世界女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "一个菲律宾护士在美国医院、一个印度程序员在硅谷、一个埃塞俄比亚保姆在伦敦——这些跨国移民女性在全球职场中面临着种族、性别和阶级的三重天花板。这本书把「交叉性」理论变成了有血有肉的真人故事。她们不被看见的劳动支撑了整个全球经济体系，却很少被当作「职场女性」来讨论。",
    "cover": "",
    "triggerWarning": "包含职场歧视和移民困境描写",
    "triggerWarningType": "psychology",
    "suitableFor": "关注移民、全球化和交叉性议题的读者",
    "companionBooks": [
      "w08",
      "t13"
    ],
    "quote": "",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%8E%BB%E7%92%83%E8%BE%B9%E7%95%8C"
      }
    ],
    "featured": false,
    "publishYear": 2022,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "simona-tarantino"
  },
  {
    "id": "w18",
    "title": "重新定义女性力量",
    "titleEn": "Redefining Power",
    "author": "米歇尔·奥巴马等",
    "authorEn": "Michelle Obama et al.",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "公共领域",
      "女性声音",
      "领导力叙事"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "随笔散文",
    "guide": "一本汇集了多位公共领域杰出女性演讲和文章的合集。从政治家到活动家，从CEO到社区组织者，她们用不同的声音讲述同一个真理：女性的力量不需要模仿男性来获得合法性。每一篇都短小精悍，适合每天早上读一篇，给自己充电。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "需要职场正能量充电的女性读者",
    "companionBooks": [
      "w01",
      "t14"
    ],
    "quote": "你的声音就是你最强大的资产。",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E9%87%8D%E6%96%B0%E5%AE%9A%E4%B9%89%E5%A5%B3%E6%80%A7%E5%8A%9B%E9%87%8F"
      }
    ],
    "featured": false,
    "publishYear": 2021,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "michelle-obama-et-al"
  },
  {
    "id": "w19",
    "title": "没有女人的世界",
    "titleEn": "The World Without Women",
    "author": "克里斯蒂娜·拉姆",
    "authorEn": "Christina Lamb",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性劳动",
      "全球视角",
      "隐形贡献"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "资深战地记者拉姆走遍全球，记录下女性在各个社会中承担的隐形劳动——从非洲农田到亚洲工厂，从拉美家庭到欧洲护理院。如果明天所有女性停止无偿劳动，全球经济会在24小时内崩溃。这本书用脚走出来的报道，把被GDP统计和主流经济学忽视的女性贡献推到了聚光灯下。",
    "cover": "",
    "triggerWarning": "包含全球各地女性遭遇的贫困和暴力描写",
    "triggerWarningType": "psychology",
    "suitableFor": "关注全球女性议题和发展的读者",
    "companionBooks": [
      "w08",
      "l04"
    ],
    "quote": "如果女性的无偿劳动被计入GDP，世界经济图景将被彻底改写。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%B2%A1%E6%9C%89%E5%A5%B3%E4%BA%BA%E7%9A%84%E4%B8%96%E7%95%8C"
      }
    ],
    "featured": false,
    "publishYear": 2019,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "christina-lamb"
  },
  {
    "id": "w20",
    "title": "她们的时代",
    "titleEn": "Their Time",
    "author": "王小妮",
    "authorEn": "Wang Xiaoni",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国女性职场",
      "改革开放",
      "代际变迁"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "从改革开放后的第一批女厂长，到互联网时代的女创业者，再到今天的女性自由职业者——中国女性的职场之路经历了怎样的变迁？这本书用数十位中国女性的真实职业轨迹，串起了过去四十年中国社会巨变中女性角色的演变。读这本书像在看一部中国版的「职场女性进化史」。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "对中国女性职场史感兴趣的读者",
    "companionBooks": [
      "w08",
      "w01"
    ],
    "quote": "",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-06-25",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B9%E4%BB%AC%E7%9A%84%E6%97%B6%E4%BB%A3"
      }
    ],
    "featured": false,
    "publishYear": 2025,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "wang-xiaoni"
  },
  {
    "id": "m01",
    "title": "成为母亲",
    "titleEn": "A Life's Work",
    "author": "蕾切尔·卡斯克",
    "authorEn": "Rachel Cusk",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "母职体验",
      "产后心理",
      "身体变化"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "随笔散文",
    "guide": "英国作家卡斯克用极其诚实甚至残酷的文笔，记录了自己成为母亲后的身体和心理变化。没有粉饰、没有鸡汤、没有「母爱的伟大」——她写的是产后漏尿、睡眠被切割成碎片、对婴儿的复杂情感、对失去的旧身份的无尽哀悼。她写自己在公园里看着别的妈妈熟练地哺乳，觉得自己是个冒牌货；她写深夜三点在黑暗中抱哄哭闹的婴儿，脑子里却在想着「我到底为什么要做这个」。这本书出版时引起巨大争议，因为它说了所有母亲都在经历却没人敢说出口的感受。但它也给了无数母亲一种拯救性的确认：你经历的那些「不该有的感受」——疲惫、厌倦、愤怒、后悔——都是真实的、正常的、值得被言说的。承认母职的阴暗面，不是否认爱——而是让这份爱更诚实、更完整。",
    "cover": "",
    "triggerWarning": "包含产后抑郁、母职倦怠等压抑内容，正在孕产期的读者请酌情阅读",
    "triggerWarningType": "psychology",
    "suitableFor": "正在思考是否生育的女性、新妈妈、对母职议题感兴趣的读者",
    "companionBooks": [
      "m02",
      "m03"
    ],
    "quote": "孩子出生后，我也出生了——作为母亲的那个我，和之前的我完全是两个人。",
    "readingTime": 4,
    "versionNote": "推荐中译本新版",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%88%90%E4%B8%BA%E6%AF%8D%E4%BA%B2"
      }
    ],
    "featured": true,
    "publishYear": 2001,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "rachel-cusk"
  },
  {
    "id": "m02",
    "title": "告白母亲",
    "titleEn": "Confessions of a Mother",
    "author": "凯瑟琳·梅",
    "authorEn": "Katherine May",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "母职倦怠",
      "自我疗愈",
      "冬季隐喻"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "随笔散文",
    "guide": "梅在成为母亲后被诊断出自闭症——这解释了她为什么在育儿过程中一直感到如此「不对劲」。她用冬天作为隐喻，写下了自己如何在母职的冰雪中寻找温暖和光。文字极具诗意和治愈力，尤其适合那些觉得自己「不是一个好妈妈」的女性——你会在这本书里找到被深深理解和安慰的感觉。",
    "cover": "",
    "triggerWarning": "包含心理疾病诊断和母职压力的压抑描写",
    "triggerWarningType": "psychology",
    "suitableFor": "母职倦怠中的女性、有心理健康困扰的母亲",
    "companionBooks": [
      "m01"
    ],
    "quote": "冬天不是结束——冬天是大地的深呼吸。",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-06-20",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%91%8A%E7%99%BD%E6%AF%8D%E4%BA%B2"
      }
    ],
    "featured": false,
    "publishYear": 2022,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "katherine-may"
  },
  {
    "id": "m03",
    "title": "母职的再生产",
    "titleEn": "Mothering",
    "author": "南希·乔多罗",
    "authorEn": "Nancy Chodorow",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "精神分析",
      "母职理论",
      "性别社会化"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "为什么总是女性被期望承担育儿责任？乔多罗用精神分析的方法追溯了母职如何被「再生产」——母亲在抚育女儿的过程中，无意识地传递了「女性=照顾者」的性别角色。这不仅仅是个人选择的问题，而是一种被深深嵌入心理结构的社会机制。理论密度高但视角极有穿透力，是理解「为什么育儿分工总是回到女人身上」的钥匙。",
    "cover": "",
    "triggerWarning": "精神分析学术论文风，理论密度高",
    "triggerWarningType": "difficult",
    "suitableFor": "女性主义理论研究者、心理学/社会学背景读者",
    "companionBooks": [
      "t01",
      "t03"
    ],
    "quote": "母亲不是天生的——母亲是被制造出来的，一代又一代。",
    "readingTime": 8,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%AF%8D%E8%81%8C%E7%9A%84%E5%86%8D%E7%94%9F%E4%BA%A7"
      }
    ],
    "featured": false,
    "publishYear": 1978,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "nancy-chodorow"
  },
  {
    "id": "m04",
    "title": "不让生育的社会",
    "titleEn": "A Society That Doesn't Let You Give Birth",
    "author": "小林美希",
    "authorEn": "Kobayashi Miki",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "日本少子化",
      "生育困境",
      "职场歧视"
    ],
    "feminismSchool": [
      "eastAsian"
    ],
    "feminismSchoolLabel": [
      "东亚本土女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "东亚",
    "genre": "纪实非虚构",
    "guide": "日本记者小林美希花了数年时间，采访了无数「想生却不敢生」的日本女性。她们不是不想要孩子——她们是害怕。害怕怀孕后被调离核心岗位、害怕休完育儿假回来发现自己被边缘化、害怕成为别人口中「只顾家庭不顾工作的女人」。书名是一个令人心碎的反讽：整个社会都在催生，但整个社会也在惩罚生育的女性。书中有太多似曾相识的场景——那个在面试时被问「你打算什么时候生孩子」的女大学生、那个因为怀孕被「建议辞职」的职场妈妈、那个丈夫说「带孩子不是我的事」的妻子。东亚读者读来格外感同身受——很多场景在中国一模一样。这本书不是劝你生或不生，而是让你看清选择背后的真实代价，然后做出真正属于自己的决定。",
    "cover": "",
    "triggerWarning": "涉及职场歧视和生育困境，可能引发焦虑",
    "triggerWarningType": "psychology",
    "suitableFor": "关注东亚生育议题的读者、正在考虑生育的职场女性",
    "companionBooks": [
      "m05",
      "w04"
    ],
    "quote": "不是女性不想生——是这个社会不让她们生。",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%B8%8D%E8%AE%A9%E7%94%9F%E8%82%B2%E7%9A%84%E7%A4%BE%E4%BC%9A"
      }
    ],
    "featured": true,
    "publishYear": 2019,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "kobayashi-miki"
  },
  {
    "id": "m05",
    "title": "第二份班",
    "titleEn": "The Second Shift",
    "author": "阿莉·拉塞尔·霍克希尔德",
    "authorEn": "Arlie Russell Hochschild",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "家务分工",
      "情绪劳动",
      "双重负担"
    ],
    "feminismSchool": [
      "socialist"
    ],
    "feminismSchoolLabel": [
      "社会主义/马克思女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "霍克希尔德在1989年提出了一个划时代的概念——「第二份班」。女性下班回家后，还要上第二份没有薪水的班：做饭、打扫、育儿、记住所有人的生日和家庭日程、照顾每个人的情绪。三十多年过去了，这个洞察不仅没有过时，反而在社交媒体的放大下变得更加尖锐。如果你曾经在凌晨两点独自起来喂奶而伴侣在旁边打鼾，如果你曾经被问「你今天怎么不早点回来做饭」而你在公司加班到八点，如果你曾经在家庭聚会上看着男人们喝酒聊天而女人们在厨房忙碌——这本书会让你感到被看见、被理解、被愤怒。霍克希尔德的分析不仅停留在抱怨，她还探讨了不同家庭如何协商家务分工，以及哪些社会政策可以真正帮助女性从第二份班中解脱出来。",
    "cover": "",
    "triggerWarning": "可能引发对家庭分工不公的强烈情绪",
    "triggerWarningType": "psychology",
    "suitableFor": "所有已婚/同居女性（和她们应该读的伴侣）",
    "companionBooks": [
      "m01",
      "m06"
    ],
    "quote": "女性在外面和男性一样工作，回到家却还要做第二份没有薪水的班。",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%AC%AC%E4%BA%8C%E4%BB%BD%E7%8F%AD"
      }
    ],
    "featured": true,
    "publishYear": 1989,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "arlie-russell-hochschild"
  },
  {
    "id": "m06",
    "title": "情绪劳动",
    "titleEn": "Emotional Labor",
    "author": "杰玛·哈特利",
    "authorEn": "Gemma Hartley",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "情绪劳动",
      "家庭管理",
      "认知负担"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "「你为什么不列个单子让我做？」——这句话本身就是一种情绪劳动。哈特利用自己的亲身经历为引子，分析了女性在家庭中承担的隐形精神管理——不是具体的家务，而是「记得」谁需要什么、什么快用完了、什么节日快到了的认知负担。短小精悍，每一页都像在窥看自己的婚姻。",
    "cover": "",
    "triggerWarning": "可能引发对家庭分工的强烈反思和情绪波动",
    "triggerWarningType": "psychology",
    "suitableFor": "感觉在家庭中「什么都得自己操心」的女性",
    "companionBooks": [
      "m05"
    ],
    "quote": "不是家务让你累——是「记住所有需要做的家务」让你累。",
    "readingTime": 3,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%83%85%E7%BB%AA%E5%8A%B3%E5%8A%A8"
      }
    ],
    "featured": false,
    "publishYear": 2018,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "gemma-hartley"
  },
  {
    "id": "m07",
    "title": "育儿经济学",
    "titleEn": "Cribsheet",
    "author": "艾米莉·奥斯特",
    "authorEn": "Emily Oster",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "育儿数据",
      "经济学方法",
      "决策框架"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "布朗大学经济学教授奥斯特用数据分析的方法，为新手父母提供了基于证据而非恐慌的育儿决策框架。母乳喂养到底有多重要？睡眠训练安全吗？要不要送日托？每一个问题都用「数据怎么说」来回答，让你在育儿这件事上少一些焦虑，多一些从容。唯一的问题：数据都来自美国，部分建议在中国语境下需要调整。",
    "cover": "",
    "triggerWarning": "部分育儿建议和结论基于美国数据，中国读者需结合本土情况判断",
    "triggerWarningType": "viewpoint",
    "suitableFor": "新手父母、喜欢用数据做决策的读者",
    "companionBooks": [
      "m05"
    ],
    "quote": "最好的育儿决策不是完美的决策，而是适合你家庭的决策。",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E8%82%B2%E5%84%BF%E7%BB%8F%E6%B5%8E%E5%AD%A6"
      }
    ],
    "featured": false,
    "publishYear": 2019,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "emily-oster"
  },
  {
    "id": "m08",
    "title": "我不想成为母亲",
    "titleEn": "I Don't Want to Be a Mother",
    "author": "克莱尔·霍林沃思",
    "authorEn": "Claire Hollingworth",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "不生育选择",
      "社会压力",
      "自我决定"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "在一本又一本「成为母亲」的故事之外，这本书是为那些选择不生育的女性而写的。作者采访了数十位决定不要孩子的女性——她们的选择背后有各种各样的原因：对自由生活的向往、对环境的担忧、对母职压力的恐惧——或者仅仅是「就是不想」。这本书不是要说服你「不生孩子更好」，而是告诉你：你可以选择。",
    "cover": "",
    "triggerWarning": "可能引发来自家庭和社会压力的相关焦虑",
    "triggerWarningType": "psychology",
    "suitableFor": "正在思考是否生育的女性、坚定不生育的女性",
    "companionBooks": [
      "m01",
      "m04"
    ],
    "quote": "不生孩子的女性不是残缺的女人——她们是完整的自己。",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%88%91%E4%B8%8D%E6%83%B3%E6%88%90%E4%B8%BA%E6%AF%8D%E4%BA%B2"
      }
    ],
    "featured": false,
    "publishYear": 2021,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "claire-hollingworth"
  },
  {
    "id": "m09",
    "title": "生育对话录",
    "titleEn": "Conversations on Birth",
    "author": "宋涵",
    "authorEn": "Song Han",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国生育",
      "对话体",
      "多元视角"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "中国作家宋涵采访了数十位不同背景的中国女性——有选择生育的、有不生的、有想生但生不了的——用对话体记录下她们在「生育」这件事上的真实想法与挣扎。这本书最珍贵的部分是那些「犹豫的声音」：那个32岁的白领说「我不是不想生，我是觉得这个世界不值得一个新生命」，那个40岁的单身女性说「我想生但我没有伴侣，去精子库又被家人反对」，那个生完二胎的妈妈说「我爱我的孩子但我也失去了自己」。在中国特有的独生子女政策遗产、高房价和代际期待之下，「要不要生孩子」成了一道比任何国家都复杂的题目。这本书不做评判，只是让每一种声音都被听见——而听见本身，就是理解与赋权的开始。",
    "cover": "",
    "triggerWarning": "包含生育困难和不孕不育的压抑内容",
    "triggerWarningType": "psychology",
    "suitableFor": "正在思考生育问题的中国女性读者",
    "companionBooks": [
      "m04",
      "m08"
    ],
    "quote": "生育不是女性的义务，而是女性的权利——包括说「不」的权利。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%94%9F%E8%82%B2%E5%AF%B9%E8%AF%9D%E5%BD%95"
      }
    ],
    "featured": true,
    "publishYear": 2018,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "song-han"
  },
  {
    "id": "m10",
    "title": "母爱的羁绊：被看见的创伤",
    "titleEn": "The Maternal Wound",
    "author": "贝瑟尼·韦伯斯特",
    "authorEn": "Bethany Webster",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "母女创伤",
      "代际传递",
      "疗愈"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "韦伯斯特提出了「母系创伤」这个概念——不是母亲个人的错，而是一代代女性在父权制中累积下来的、未被处理的痛苦，像遗产一样在母女之间传递。这本书帮你理解：你的母亲为什么是那个样子？她又从她的母亲那里继承了什么？以及最重要的——你如何打破这个链条，不再把同样的创伤传给你的女儿？",
    "cover": "",
    "triggerWarning": "涉及母女创伤回忆，情绪低落期建议分章节阅读",
    "triggerWarningType": "psychology",
    "suitableFor": "与母亲关系复杂、想理解代际创伤的女性",
    "companionBooks": [
      "o02",
      "m01"
    ],
    "quote": "疗愈母亲创伤，不是要责怪母亲——而是要把不属于你的痛苦还回去。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%AF%8D%E7%88%B1%E7%9A%84%E7%BE%81%E7%BB%8A%EF%BC%9A%E8%A2%AB%E7%9C%8B%E8%A7%81%E7%9A%84%E5%88%9B%E4%BC%A4"
      }
    ],
    "featured": false,
    "publishYear": 2014,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "bethany-webster"
  },
  {
    "id": "m11",
    "title": "婚姻史",
    "titleEn": "Marriage, a History",
    "author": "斯蒂芬妮·孔茨",
    "authorEn": "Stephanie Coontz",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "婚姻制度",
      "历史",
      "爱情神话"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "你以为婚姻自古以来就是「因为爱情」吗？孔茨用一部跨越数千年的婚姻史告诉你：以爱为基础的婚姻是最近两百年才流行起来的，而在大部分人类历史上，婚姻是一种经济和政治安排。这本书把「婚姻是女性的宿命」这个观念放在历史的显微镜下审视，让你看到它不是天经地义，而是被建构出来的制度。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "对婚姻制度有困惑的读者、想从历史角度理解婚姻的人",
    "companionBooks": [
      "m12",
      "t03"
    ],
    "quote": "爱情婚姻不是人类历史的常态——它是一个相当晚近的发明。",
    "readingTime": 8,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A9%9A%E5%A7%BB%E5%8F%B2"
      }
    ],
    "featured": false,
    "publishYear": 2005,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "stephanie-coontz"
  },
  {
    "id": "m12",
    "title": "婚姻的真相",
    "titleEn": "The Truth About Marriage",
    "author": "埃丝特·佩雷尔",
    "authorEn": "Esther Perel",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "亲密关系",
      "婚姻咨询",
      "欲望"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "全球顶级伴侣治疗师佩雷尔在三十年的咨询实践中发现了一个悖论：现代婚姻要求伴侣同时提供安全感（家、养育、经济合作）和激情（浪漫、欲望、冒险感）——这两者本质上互相矛盾。这本书不是教你「如何维持婚姻」，而是帮你理解婚姻中的结构性张力。对女性来说，理解这些张力就是理解自己为什么在婚姻中常常感到「不够幸福」。",
    "cover": "",
    "triggerWarning": "涉及婚姻不忠和关系危机描写",
    "triggerWarningType": "psychology",
    "suitableFor": "已婚女性、对亲密关系议题感兴趣的读者",
    "companionBooks": [
      "m11"
    ],
    "quote": "我们对婚姻期望得太多——一个人无法既是你的避风港，又是你的冒险伙伴。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A9%9A%E5%A7%BB%E7%9A%84%E7%9C%9F%E7%9B%B8"
      }
    ],
    "featured": false,
    "publishYear": 2017,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "esther-perel"
  },
  {
    "id": "m13",
    "title": "我们为何结婚，又为何不忠",
    "titleEn": "The State of Affairs",
    "author": "埃丝特·佩雷尔",
    "authorEn": "Esther Perel",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "婚外情",
      "信任重建",
      "关系修复"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "佩雷尔的另一本力作，聚焦婚姻中最具破坏性也最不被讨论的话题：出轨。她不是为出轨辩护，而是冷静地分析：为什么人们会出轨？出轨后的关系能修复吗？尤其值得女性读者关注的是——男性出轨和女性出轨的心理动机有本质区别，而这背后又是性别权力在运作。",
    "cover": "",
    "triggerWarning": "涉及出轨和婚姻背叛描写，可能引发强烈情绪",
    "triggerWarningType": "psychology",
    "suitableFor": "正在经历婚姻危机的女性、对亲密关系议题感兴趣的读者",
    "companionBooks": [
      "m12",
      "m11"
    ],
    "quote": "出轨有时不是对伴侣的拒绝，而是对「自己变成了谁」的拒绝。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%88%91%E4%BB%AC%E4%B8%BA%E4%BD%95%E7%BB%93%E5%A9%9A%EF%BC%8C%E5%8F%88%E4%B8%BA%E4%BD%95%E4%B8%8D%E5%BF%A0"
      }
    ],
    "featured": false,
    "publishYear": 2017,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "esther-perel"
  },
  {
    "id": "m14",
    "title": "不被看见的母亲",
    "titleEn": "The Invisible Mothers",
    "author": "多位作者",
    "authorEn": "",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国母亲",
      "家庭照护",
      "老年女性"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "一本记录中国家庭中「被忽视的母亲们」的非虚构作品集。她们是帮子女带孩子的奶奶外婆、是照顾自己年迈父母的中年女儿、是在家庭照护中耗尽了自己全部体力和精神却被视为「理所当然」的女性。她们的劳动是隐形的、无薪的、永远不会出现在任何经济统计数据中的——但这本书让她们被看见。",
    "cover": "",
    "triggerWarning": "包含老年照护和代际冲突的压抑描写",
    "triggerWarningType": "psychology",
    "suitableFor": "对中国家庭照护议题感兴趣的读者",
    "companionBooks": [
      "m05",
      "o12"
    ],
    "quote": "",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-06-28",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%B8%8D%E8%A2%AB%E7%9C%8B%E8%A7%81%E7%9A%84%E6%AF%8D%E4%BA%B2"
      }
    ],
    "featured": false,
    "publishYear": 2025,
    "hasAudio": false,
    "hasRead": true,
    "authorId": ""
  },
  {
    "id": "m15",
    "title": "科学怀孕",
    "titleEn": "Expecting Better",
    "author": "艾米莉·奥斯特",
    "authorEn": "Emily Oster",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "孕期",
      "循证医学",
      "决策自主"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "「怀孕期间能不能喝咖啡？」「为什么要做那么多检查？」「剖腹产还是顺产？」——奥斯特用经济学家的数据分析方法，帮你从一个又一个孕期焦虑中理出头绪。这本书的底层精神是非常女性主义的：你不应该因为「别人都这么说」就放弃对自己身体和孕期的自主决策权。数据就是力量。",
    "cover": "",
    "triggerWarning": "部分医学建议基于美国标准，需结合国内产检指南",
    "triggerWarningType": "viewpoint",
    "suitableFor": "正在备孕或孕期的女性",
    "companionBooks": [
      "m07"
    ],
    "quote": "你的孕期，你的规则。数据是用来帮你做决定的，不是代替你做决定的。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%A7%91%E5%AD%A6%E6%80%80%E5%AD%95"
      }
    ],
    "featured": false,
    "publishYear": 2013,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "emily-oster"
  },
  {
    "id": "m16",
    "title": "不完美的母亲",
    "titleEn": "The Imperfect Mother",
    "author": "凯瑟琳·史密斯",
    "authorEn": "Katherine Smith",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "母职焦虑",
      "自我接纳",
      "反完美主义"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "随笔散文",
    "guide": "Instagram上的完美妈妈们让你觉得自己什么都做错了？这本书就是对「完美母职」这种社会建构说「够了」。作者用幽默和坦诚分享了她在育儿中犯过的各种错误（有些真的很好笑），让你从缺氧般的母职焦虑中解脱出来。你不是不够好——是「好妈妈」这个标准本身就是反人类的。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "所有因为育儿感到焦虑和自我怀疑的读者",
    "companionBooks": [
      "m01",
      "m02"
    ],
    "quote": "足够好的妈妈，不是完美的妈妈——她只是「足够好」。",
    "readingTime": 3,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%B8%8D%E5%AE%8C%E7%BE%8E%E7%9A%84%E6%AF%8D%E4%BA%B2"
      }
    ],
    "featured": false,
    "publishYear": 2020,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "katherine-smith"
  },
  {
    "id": "m17",
    "title": "产房之外",
    "titleEn": "Beyond the Delivery Room",
    "author": "刘敏",
    "authorEn": "Liu Min",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国产后护理",
      "月子",
      "身体自主"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "坐月子——这个中国女性几乎人人经历却很少被认真讨论的话题。作者采访了数十位中国女性，记录了她们在产后的身体恢复、心理变化和家庭博弈。有人被婆婆逼着喝了一个月的猪蹄汤、有人因为不能洗头而崩溃大哭、有人在这个过程中第一次开始质疑「为什么生孩子这件事被默认是女人的任务」。本土视角，读来亲切又有力量。",
    "cover": "",
    "triggerWarning": "包含产后身体恢复的详细描写",
    "triggerWarningType": "psychology",
    "suitableFor": "正在备孕、产后或对中国生育文化感兴趣的读者",
    "companionBooks": [
      "m09",
      "m01"
    ],
    "quote": "",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-06-25",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%BA%A7%E6%88%BF%E4%B9%8B%E5%A4%96"
      }
    ],
    "featured": false,
    "publishYear": 2024,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "liu-min"
  },
  {
    "id": "m18",
    "title": "身体由我",
    "titleEn": "My Body, My Choice",
    "author": "希拉·德利兹",
    "authorEn": "Sheila de Liz",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性身体",
      "妇科健康",
      "身体自主权"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "德国妇科医生德利兹用通俗易懂的语言，把女性从青春期到更年期的身体变化讲得明明白白。月经、避孕、子宫内膜异位症、HPV疫苗、更年期——这些问题大部分女性从来没有被好好教过，因为「谈论女性身体」本身就被视为禁忌。这本书打破了禁忌——你的身体值得被了解，不只是作为生育工具，而是作为你自己的家。",
    "cover": "",
    "triggerWarning": "包含妇科疾病和身体症状详细描写",
    "triggerWarningType": "psychology",
    "suitableFor": "所有年龄段的女性读者",
    "companionBooks": [
      "t20",
      "m15"
    ],
    "quote": "你的身体不是别人的领土。你的身体是你的国家。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E8%BA%AB%E4%BD%93%E7%94%B1%E6%88%91"
      }
    ],
    "featured": false,
    "publishYear": 2020,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "sheila-de-liz"
  },
  {
    "id": "m19",
    "title": "母职惩罚",
    "titleEn": "The Motherhood Penalty",
    "author": "米歇尔·布迪格等",
    "authorEn": "Michelle Budig",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "母职经济学",
      "薪资惩罚",
      "社会学研究"
    ],
    "feminismSchool": [
      "socialist"
    ],
    "feminismSchoolLabel": [
      "社会主义/马克思女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "大量社会学研究显示：成为母亲后，女性的收入平均下降——而成为父亲后，男性的收入反而上升。这就是「母职惩罚」与「父职奖励」。本书汇集了全球范围内的研究数据，系统论证了母职如何成为女性职场发展中最坚固的天花板。如果你想用数据和理论武装自己，这就是最好的弹药库。",
    "cover": "",
    "triggerWarning": "社会学学术写作，需要一定阅读耐心",
    "triggerWarningType": "difficult",
    "suitableFor": "性别研究者、HR从业者、关注母职经济议题的读者",
    "companionBooks": [
      "m05",
      "w04",
      "w11"
    ],
    "quote": "母职惩罚不是个人的失败，而是系统性的不平等。",
    "readingTime": 7,
    "versionNote": "无特殊版本提示",
    "isNew": false,
    "dateAdded": "2026-01-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%AF%8D%E8%81%8C%E6%83%A9%E7%BD%9A"
      }
    ],
    "featured": false,
    "publishYear": 2021,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "michelle-budig"
  },
  {
    "id": "m20",
    "title": "母亲的战争",
    "titleEn": "The Mothers' War",
    "author": "梁鸿",
    "authorEn": "Liang Hong",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国农村母亲",
      "留守儿童",
      "城乡迁徙"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "《中国在梁庄》作者梁鸿的新作，聚焦中国农村母亲的生存处境。她们中的很多人被迫离开自己的孩子去城里打工，成为「电话那头的妈妈」；另一些人留守在村庄里，独自撑起整个家庭。在城市化和经济增速的宏大叙事下面，是这些女性被撕裂的情感生活。梁鸿的文字一如既往地朴素而锋利。",
    "cover": "",
    "triggerWarning": "包含贫困、亲子分离等压抑内容",
    "triggerWarningType": "psychology",
    "suitableFor": "关注中国农村女性、城乡差异议题的读者",
    "companionBooks": [
      "w08",
      "l09",
      "o12"
    ],
    "quote": "",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-01",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%AF%8D%E4%BA%B2%E7%9A%84%E6%88%98%E4%BA%89"
      }
    ],
    "featured": false,
    "publishYear": 2025,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "liang-hong"
  },
  {
    "id": "t21",
    "title": "阁楼上的疯女人",
    "titleEn": "The Madwoman in the Attic",
    "author": "桑德拉·吉尔伯特 / 苏珊·古芭",
    "authorEn": "Sandra M. Gilbert / Susan Gubar",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "文学批评",
      "女性写作",
      "19世纪文学"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "这部里程碑式的女性主义文学批评著作重新解读了19世纪女性作家作品中被囚禁的女性形象——从简·爱到《蝴蝶梦》中的丽贝卡。作者提出男性文学传统中将女性二分为「天使」与「怪物」，而女性作家必须通过「双重文本」策略在父权文学传统中寻找自己的声音。这本书改变了英语文学的研究范式，让那些被压抑的叙事重见天日。",
    "cover": "",
    "triggerWarning": "学术文学批评，需要一定文学史背景",
    "triggerWarningType": "difficult",
    "suitableFor": "文学专业读者、对女性写作史感兴趣者",
    "companionBooks": [
      "t01",
      "t04"
    ],
    "quote": "笔是对阴茎的隐喻——所以女性写作本身就是一种僭越。",
    "readingTime": 12,
    "versionNote": "推荐中译本新版",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E9%98%81%E6%A5%BC%E4%B8%8A%E7%9A%84%E7%96%AF%E5%A5%B3%E4%BA%BA"
      }
    ],
    "featured": true,
    "publishYear": 1979,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "sandra-m-gilbert--susan-gubar"
  },
  {
    "id": "t22",
    "title": "如何抑制女性写作",
    "titleEn": "How to Suppress Women's Writing",
    "author": "乔安娜·拉斯",
    "authorEn": "Joanna Russ",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性写作",
      "文学批评",
      "性别歧视"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "拉斯用锋利如刀的讽刺笔法列举了文学界压制女性写作的种种策略——「她没写这个」「她写了但写得不好」「她写了但那是别人帮她写的」。每一页都在揭开文学史中系统性的性别歧视，读来又愤怒又好笑又心酸。篇幅轻薄，文字泼辣，是了解女性在文化生产领域遭遇的结构性不平等的绝佳入门读物。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "女性主义入门读者、对文学和写作感兴趣的读者",
    "companionBooks": [
      "t21",
      "t04"
    ],
    "quote": "她没有写。她写了但是她不应当写。她写了但是你看看她写的是什么。",
    "readingTime": 3,
    "versionNote": "推荐中译本",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A6%82%E4%BD%95%E6%8A%91%E5%88%B6%E5%A5%B3%E6%80%A7%E5%86%99%E4%BD%9C"
      }
    ],
    "featured": true,
    "publishYear": 1983,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "joanna-russ"
  },
  {
    "id": "t23",
    "title": "美丽的神话",
    "titleEn": "The Beauty Myth",
    "author": "娜奥米·沃尔夫",
    "authorEn": "Naomi Wolf",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "身体政治",
      "美貌标准",
      "消费主义"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "沃尔夫提出一个令人警醒的论点：当女性在法律和政治上获得更多权利时，对女性身体的「美貌要求」却越来越严苛——这并非巧合，而是父权制的新型控制手段。从饮食失调到整容手术，从时尚产业到职场外貌歧视，她揭示了「美丽」如何成为消费主义社会中约束女性的新工具。读完你会重新审视自己对镜子、体重秤和化妆品的日常焦虑。",
    "cover": "",
    "triggerWarning": "涉及饮食失调和身体意象讨论，可能有触发",
    "triggerWarningType": "psychology",
    "suitableFor": "关注身体政治、对美貌焦虑有切身体验的读者",
    "companionBooks": [
      "t01",
      "t12"
    ],
    "quote": "美貌不是女性解放的奖赏——它是女性解放的代价。",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%BE%8E%E4%B8%BD%E7%9A%84%E7%A5%9E%E8%AF%9D"
      }
    ],
    "featured": false,
    "publishYear": 1990,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "naomi-wolf"
  },
  {
    "id": "t24",
    "title": "女太监",
    "titleEn": "The Female Eunuch",
    "author": "杰梅茵·格里尔",
    "authorEn": "Germaine Greer",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "身体自主",
      "性解放",
      "第二波经典"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "格里尔在1970年以这本书炸开了英语世界的性别讨论。她提出女性在父权社会中被系统性地「阉割」——不是生理上的，而是心理和性欲层面的——女人被教育成被动、顺从、厌恶自己身体的存在。她号召女性重新发现自己的身体和欲望，拒绝被塑造成「被阉割的女人」。文字狂野而具有爆炸性，是第二波女权运动中最具煽动性的文本之一。",
    "cover": "",
    "triggerWarning": "包含直接的性描写和身体讨论，部分观点受时代限制",
    "triggerWarningType": "viewpoint",
    "suitableFor": "对第二波女权运动感兴趣的理论读者",
    "companionBooks": [
      "t01",
      "t16"
    ],
    "quote": "女性被剥夺的不是性——而是对性的主权。",
    "readingTime": 8,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E5%A4%AA%E7%9B%91"
      }
    ],
    "featured": false,
    "publishYear": 1970,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "germaine-greer"
  },
  {
    "id": "t25",
    "title": "违背我们的意愿",
    "titleEn": "Against Our Will",
    "author": "苏珊·布朗米勒",
    "authorEn": "Susan Brownmiller",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "性暴力",
      "法律史",
      "战争与性别"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "布朗米勒在这本开创性著作中首次将强奸定义为一种权力犯罪而非性犯罪——这个看似简单的定义转变彻底改变了法律和社会对性暴力的理解。她追溯了强奸在战争、法律和文化中的历史，论证了性暴力不是个体病态而是父权制维持其权力的核心机制。虽然书中某些案例读来令人心痛，但它为全球反性暴力运动提供了理论基石。",
    "cover": "",
    "triggerWarning": "包含大量性暴力案例分析，情绪冲击极强",
    "triggerWarningType": "psychology",
    "suitableFor": "性别研究者、法律工作者、关注反性暴力议题的读者",
    "companionBooks": [
      "t01",
      "t16"
    ],
    "quote": "强奸不是关于性，而是关于权力。",
    "readingTime": 10,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E8%BF%9D%E8%83%8C%E6%88%91%E4%BB%AC%E7%9A%84%E6%84%8F%E6%84%BF"
      }
    ],
    "featured": false,
    "publishYear": 1975,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "susan-brownmiller"
  },
  {
    "id": "o21",
    "title": "情感勒索",
    "titleEn": "Emotional Blackmail",
    "author": "苏珊·福沃德",
    "authorEn": "Susan Forward",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "情感勒索",
      "边界感",
      "心理操控"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "「如果你真的爱我，你就会……」——这句话听起来是不是很熟悉？福沃德博士用这本书命名了一种最隐蔽的关系暴力：情感勒索。当亲近的人利用你的恐惧、义务感和内疚来操控你时，他们就是在勒索你。书中包含大量来自真实咨询案例的应对策略，教你识别勒索信号、设立边界、夺回自己的选择权。对于在「孝顺」「懂事」文化中长大的东亚女性来说，这本书尤其具有解放力量。",
    "cover": "",
    "triggerWarning": "涉及家庭关系中的操控案例，可能触发不适",
    "triggerWarningType": "psychology",
    "suitableFor": "习惯性讨好他人、难以说「不」的女性",
    "companionBooks": [
      "o03",
      "o06"
    ],
    "quote": "情感勒索的本质是：如果你不按我说的做，我就会让你难受。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%83%85%E6%84%9F%E5%8B%92%E7%B4%A2"
      }
    ],
    "featured": true,
    "publishYear": 1997,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "susan-forward"
  },
  {
    "id": "o22",
    "title": "这不是你的错",
    "titleEn": "It Wasn't Your Fault",
    "author": "贝弗莉·恩格尔",
    "authorEn": "Beverly Engel",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "童年创伤",
      "羞耻感",
      "自我疗愈"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "童年遭受过虐待或忽视的人，最常见的情绪不是愤怒——而是羞耻。那种「一定是我不够好才会被这样对待」的深层信念，会伴随一个人数十年。恩格尔用三十多年的临床经验，专门写给那些还在为童年创伤自责的人。书中提供了切实可行的自我关怀练习，帮助你一点点放下那份不属于你的羞耻感，把责任归还给真正该负责的人。",
    "cover": "",
    "triggerWarning": "包含童年虐待案例描述，可能触发创伤回忆",
    "triggerWarningType": "psychology",
    "suitableFor": "正在做童年创伤疗愈的读者",
    "companionBooks": [
      "o03",
      "o07"
    ],
    "quote": "羞耻感是施虐者留给幸存者的最后一件礼物——你可以选择退回它。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E8%BF%99%E4%B8%8D%E6%98%AF%E4%BD%A0%E7%9A%84%E9%94%99"
      }
    ],
    "featured": false,
    "publishYear": 2014,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "beverly-engel"
  },
  {
    "id": "o23",
    "title": "为何家会伤人",
    "titleEn": "Why Home Hurts",
    "author": "武志红",
    "authorEn": "Wu Zhihong",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国家庭",
      "原生家庭",
      "心理学普及"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "武志红用大量中国家庭的真实案例，把「原生家庭」变成了中文世界最热门的话题之一。他剖析了中国家庭中常见的病态关系模式：把全部人生押在子女身上的母亲、永远缺席的父亲、被当作「小皇帝」培养的儿子和被要求「懂事」的女儿。这本书让无数中国读者第一次意识到：家庭不是天然温暖的避风港——有时恰恰是伤害的源头。而这个意识本身就是疗愈的开始。",
    "cover": "",
    "triggerWarning": "可能引发对原生家庭的强烈情绪反应",
    "triggerWarningType": "psychology",
    "suitableFor": "对原生家庭议题感兴趣的中文读者",
    "companionBooks": [
      "o03",
      "o02"
    ],
    "quote": "家是最小的社会单元，也是最大的权力结构。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%B8%BA%E4%BD%95%E5%AE%B6%E4%BC%9A%E4%BC%A4%E4%BA%BA"
      }
    ],
    "featured": false,
    "publishYear": 2007,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "wu-zhihong"
  },
  {
    "id": "l21",
    "title": "巨流河",
    "titleEn": "The River of Big Flow",
    "author": "齐邦媛",
    "authorEn": "Qi Bangyuan",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国近代史",
      "女性知识分子",
      "回忆录"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "齐邦媛以八十岁高龄写下这部自传体回忆录，记录了从东北流亡学生到台湾文学教授的一生。在二十世纪中国大动荡中，一个女性如何通过教育和对文学的热爱为自己争取到知识分子的尊严和人生的自主权。书中对父女情的描写尤其动人——父亲对女儿教育的重视在那个年代极为罕见。这是一个女性在历史洪流中保持自我、坚持智性追求的动人见证。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "喜欢中国近代史和女性传记的读者",
    "companionBooks": [
      "o12",
      "l16"
    ],
    "quote": "文学是我对抗遗忘的唯一武器。",
    "readingTime": 10,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%B7%A8%E6%B5%81%E6%B2%B3"
      }
    ],
    "featured": true,
    "publishYear": 2009,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "qi-bangyuan"
  },
  {
    "id": "l22",
    "title": "小姨多鹤",
    "titleEn": "Aunt Duohe",
    "author": "严歌苓",
    "authorEn": "Yan Geling",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "日本遗孤",
      "中国家庭",
      "女性韧性"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "虚构小说",
    "guide": "严歌苓最擅长写那些被历史碾压却始终不垮的女人。多鹤是一个日本遗孤，战后被卖到中国家庭做传宗接代的「工具」——她的存在本身就是一个巨大的创伤。但多鹤用惊人的生命力和善良，在异国的土地上活出了自己的尊严。严歌苓的笔调冷静而深情，她写的不只是多鹤一个人的命运，更是战争中女性身体如何成为国家暴力的延伸。",
    "cover": "",
    "triggerWarning": "包含战争暴力和性剥削描写",
    "triggerWarningType": "psychology",
    "suitableFor": "喜欢严歌苓的读者、对战争与女性议题感兴趣者",
    "companionBooks": [
      "l14",
      "l16"
    ],
    "quote": "女人不是天生的弱者，女人是被逼成了弱者——或者被逼成了战士。",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%B0%8F%E5%A7%A8%E5%A4%9A%E9%B9%A4"
      }
    ],
    "featured": false,
    "publishYear": 2008,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "yan-geling"
  },
  {
    "id": "l23",
    "title": "长恨歌",
    "titleEn": "The Song of Everlasting Sorrow",
    "author": "王安忆",
    "authorEn": "Wang Anyi",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "上海",
      "女性命运",
      "茅盾文学奖"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "虚构小说",
    "guide": "王安忆用一个上海弄堂女子的一生写了一部关于「女性与城市」的史诗。王琦瑶从民国到新中国，做过选美小姐、做过情妇、做过母亲、最后孤独地死在弄堂里——她的一生像上海这座城市一样，在时代巨变中起伏不定却始终保持自己的节奏。王安忆的文字稠密如织锦，用最精细的笔触写出一个普通女性生命中的每一道褶皱。如果你想读一部真正的「女性城市文学」，没有比这更好的选择。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "喜欢文学性强的女性叙事、对上海文化感兴趣的读者",
    "companionBooks": [
      "l14",
      "l16"
    ],
    "quote": "上海的女人不是水做的，是水泥做的。",
    "readingTime": 8,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E9%95%BF%E6%81%A8%E6%AD%8C"
      }
    ],
    "featured": false,
    "publishYear": 1995,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "wang-anyi"
  },
  {
    "id": "m21",
    "title": "母乳与权力",
    "titleEn": "The Politics of Breastfeeding",
    "author": "加布里埃尔·帕尔默",
    "authorEn": "Gabrielle Palmer",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "母乳喂养",
      "身体政治",
      "跨国企业批判"
    ],
    "feminismSchool": [
      "socialist"
    ],
    "feminismSchoolLabel": [
      "社会主义/马克思女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "母乳还是奶粉？这个看似私人的选择背后，是全球食品巨头在第三世界国家的营销策略、是阶级和种族不平等的交织、是对女性身体的规训与控制。帕尔默用详尽的历史资料和跨国调查揭示了「母乳喂养」如何从一个自然行为变成了被资本和政治操控的战场。读完这本书，你对自己的喂养选择（无论是什么）会少一些焦虑，多一些清醒。",
    "cover": "",
    "triggerWarning": "包含对奶粉企业营销策略的批判，可能引发对喂养选择的反思",
    "triggerWarningType": "viewpoint",
    "suitableFor": "对母职政治感兴趣的进阶读者",
    "companionBooks": [
      "m01",
      "m03"
    ],
    "quote": "",
    "readingTime": 7,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%AF%8D%E4%B9%B3%E4%B8%8E%E6%9D%83%E5%8A%9B"
      }
    ],
    "featured": false,
    "publishYear": 2009,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "gabrielle-palmer"
  },
  {
    "id": "m22",
    "title": "母亲与女儿",
    "titleEn": "Of Woman Born",
    "author": "阿德里安·里奇",
    "authorEn": "Adrienne Rich",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "母女关系",
      "母职制度",
      "女性主义经典"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "里奇在这本书中做了一个至关重要的区分：「母职作为经验」和「母职作为制度」。前者是女性生育和养育孩子的真实体验——充满了矛盾、爱、疲惫和力量；后者是父权社会强加给女性的角色期待——自我牺牲、无私奉献。里奇呼吁女性在自己的母职经验中找到力量，同时反抗将母职制度化的父权社会。这是一本写给所有思考母职意义的女性的智慧之书。",
    "cover": "",
    "triggerWarning": "包含母职与女性自主权之间的深层矛盾的探讨",
    "triggerWarningType": "viewpoint",
    "suitableFor": "对母职理论和母女关系有深度兴趣的读者",
    "companionBooks": [
      "m01",
      "m03",
      "o02"
    ],
    "quote": "母亲与女儿之间的爱是世界上最自然的情感——也是父权制最恐惧的情感。",
    "readingTime": 8,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%AF%8D%E4%BA%B2%E4%B8%8E%E5%A5%B3%E5%84%BF"
      }
    ],
    "featured": false,
    "publishYear": 1976,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "adrienne-rich"
  },
  {
    "id": "w21",
    "title": "女性经济学",
    "titleEn": "If Women Counted",
    "author": "玛丽莲·沃林",
    "authorEn": "Marilyn Waring",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "女性主义经济学",
      "GDP批判",
      "无偿劳动"
    ],
    "feminismSchool": [
      "socialist"
    ],
    "feminismSchoolLabel": [
      "社会主义/马克思女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "如果女性的无偿家务劳动被计入GDP，全球经济图景将被彻底改写——这是沃林在1988年提出的革命性论点。她曾是新西兰最年轻的国会议员，在体制内部亲眼见证了经济学如何系统性地无视女性的劳动价值。这本书直接推动了联合国修改国民经济核算体系。如果你想理解为什么「经济」本身就带有性别偏见，这本书是必读经典。",
    "cover": "",
    "triggerWarning": "经济学论证偏学术化，需要一定耐心",
    "triggerWarningType": "difficult",
    "suitableFor": "对经济学和性别议题交叉感兴趣的读者",
    "companionBooks": [
      "t03",
      "t12"
    ],
    "quote": "如果女性的无偿劳动被视为「非经济活动」，那么「经济」这个词就是个谎言。",
    "readingTime": 7,
    "versionNote": "推荐最新版中译本",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E7%BB%8F%E6%B5%8E%E5%AD%A6"
      }
    ],
    "featured": false,
    "publishYear": 1988,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "marilyn-waring"
  },
  {
    "id": "w22",
    "title": "女孩密码",
    "titleEn": "Girl Code",
    "author": "卡拉·阿尔维·莱瓦",
    "authorEn": "Cara Alwill Leyba",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性创业",
      "自信心",
      "互助网络"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "随笔散文",
    "guide": "一本写给所有想要「做自己的事」的女性的小书。作者不是商学院教授，而是一个白手起家的女性创业者，她用朋友聊天般的语气分享了女性在创业和职场中最常遇到的自我怀疑——「我不够好」「我还没准备好」——以及如何克服它们。书中特别强调女性之间互相支持的重要性：与其把别的女性当竞争对手，不如把她们当盟友。篇幅轻薄，能量充沛。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "有创业想法或职场迷茫期的年轻女性",
    "companionBooks": [
      "w01"
    ],
    "quote": "一个女性的成功不是对其他女性的威胁——它是所有女性的可能性。",
    "readingTime": 3,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E5%AD%A9%E5%AF%86%E7%A0%81"
      }
    ],
    "featured": false,
    "publishYear": 2015,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "cara-alwill-leyba"
  },
  {
    "id": "t26",
    "title": "女人的历史",
    "titleEn": "The Women's History of the World",
    "author": "罗莎琳德·迈尔斯",
    "authorEn": "Rosalind Miles",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性史",
      "全球视角",
      "被遗忘的贡献"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "迈尔斯用跨越数千年的全球视角写了一部被主流历史书删掉的女性史。从史前母系社会的遗迹到工业革命时期的女工，从被遗忘的女科学家到被抹去的女战士，这本书像一场考古大挖掘，把被男性叙事掩埋的女性贡献一件件挖出来。读这本书你会不断冒出「原来是这样！」「她居然做了这个！」的感叹。最好的女性史入门读物之一。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "所有对女性历史感兴趣的读者",
    "companionBooks": [
      "t08",
      "t12"
    ],
    "quote": "历史不是他的故事——历史也是她的故事，只是没人讲。",
    "readingTime": 8,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E4%BA%BA%E7%9A%84%E5%8E%86%E5%8F%B2"
      }
    ],
    "featured": false,
    "publishYear": 1988,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "rosalind-miles"
  },
  {
    "id": "t27",
    "title": "女性主义思潮导论",
    "titleEn": "Feminist Thought: A More Comprehensive Introduction",
    "author": "罗斯玛丽·帕特南·童",
    "authorEn": "Rosemarie Putnam Tong",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "女性主义流派",
      "教材级",
      "系统梳理"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "如果李银河的《女性主义》是入门导游，这本书就是详细的百科全书。童教授用教材级别的系统性梳理了从自由主义到后现代、从精神分析到生态女性主义的所有重要流派，每一章都有清晰的核心观点、代表人物和批判讨论。虽然厚度可观，但语言出奇地清晰易懂，是最全面的一本女性主义理论通览。适合已经读过几本入门书、想系统建立理论框架的读者。",
    "cover": "",
    "triggerWarning": "学术教材型写作，篇幅厚重，需要一定阅读毅力",
    "triggerWarningType": "difficult",
    "suitableFor": "想系统学习女性主义理论的进阶读者",
    "companionBooks": [
      "t08",
      "t01"
    ],
    "quote": "",
    "readingTime": 15,
    "versionNote": "推荐最新版中译本（第5版）",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E4%B8%BB%E4%B9%89%E6%80%9D%E6%BD%AE%E5%AF%BC%E8%AE%BA"
      }
    ],
    "featured": false,
    "publishYear": 1989,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "rosemarie-putnam-tong"
  },
  {
    "id": "o24",
    "title": "自我关怀的力量",
    "titleEn": "Self-Compassion",
    "author": "克里斯汀·内夫",
    "authorEn": "Kristin Neff",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "自我关怀",
      "自尊",
      "正念"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "对很多女性来说，「对自己好一点」是世界上最难做到的事。内夫博士是自我关怀研究的开创者，她用二十年的心理学研究告诉你：自我关怀不是自怜，不是放纵，而是像对待最好的朋友那样对待自己。书中提供了大量可操作的练习——暂停自我批评的手势、自我关怀的冥想、写给自己的关怀信——每一项都简单但有奇效。特别适合那些对自己永远比对待别人严厉得多的女性。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "完美主义者、自我苛责倾向强烈的女性",
    "companionBooks": [
      "o09",
      "o11"
    ],
    "quote": "自我关怀意味着承认自己的痛苦，并对自己说：这一刻很难，但我会陪着自己度过。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E8%87%AA%E6%88%91%E5%85%B3%E6%80%80%E7%9A%84%E5%8A%9B%E9%87%8F"
      }
    ],
    "featured": false,
    "publishYear": 2011,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "kristin-neff"
  },
  {
    "id": "l24",
    "title": "目送",
    "titleEn": "Seeing Off",
    "author": "龙应台",
    "authorEn": "Long Yingtai",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "亲情",
      "台湾",
      "散文"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "随笔散文",
    "guide": "龙应台以母女关系为主线写下的散文集，记录了她从女儿到母亲、从看着父母老去到被子女目送的人生历程。她写母亲逐渐失智的痛苦、写儿子18岁离家时的背影、写自己站在人生的中间——一边目送上一代远去，一边被下一代目送。文字干净而深情，每一篇都像一颗小石子投入心湖，涟漪久久不散。对于想理解「女性在家庭代际中的位置」的读者来说，这是一本无声但有力的书。",
    "cover": "",
    "triggerWarning": "涉及父母老去和死亡议题，可能引发悲伤",
    "triggerWarningType": "psychology",
    "suitableFor": "所有年龄段的女性读者",
    "companionBooks": [
      "l21",
      "o12"
    ],
    "quote": "我慢慢地、慢慢地了解到，所谓父女母子一场，只不过意味着你和他的缘分就是今生今世不断地在目送他的背影渐行渐远。",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%9B%AE%E9%80%81"
      }
    ],
    "featured": true,
    "publishYear": 2008,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "long-yingtai"
  },
  {
    "id": "w23",
    "title": "她力量",
    "titleEn": "Playing Big",
    "author": "塔拉·莫尔",
    "authorEn": "Tara Mohr",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性领导力",
      "自我怀疑",
      "内在批评"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "你有没有在会议上想说点什么，却被内心的声音制止了——「这不够聪明」「别人会怎么想」「我还是再准备准备吧」？莫尔把这种内心的批评声音称为「内在检察官」，并提供了非常具体的方法来识别它、对话它、超越它。这不是一本教你「更自信」的鸡汤书，而是一本帮你理解女性在职场中的自我怀疑从何而来、以及如何从中解放出来的实用指南。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "职场中自我怀疑倾向严重、不敢「做大」的女性",
    "companionBooks": [
      "w01",
      "w22"
    ],
    "quote": "你内心最严厉的批评者不是你自己——它是你内化的父权制声音。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B9%E5%8A%9B%E9%87%8F"
      }
    ],
    "featured": false,
    "publishYear": 2014,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "tara-mohr"
  },
  {
    "id": "w24",
    "title": "女性与谈判",
    "titleEn": "Women Don't Ask",
    "author": "琳达·巴布科克 / 萨拉·拉斯彻",
    "authorEn": "Linda Babcock / Sara Laschever",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "薪资谈判",
      "性别差异",
      "职场技巧"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "为什么男性比女性更愿意主动要求加薪？两位卡内基梅隆大学的经济学家用大量数据证明：不是因为女性不擅长谈判——而是因为社会对「主动要求的女性」的惩罚比对主动要求的男性更重。这本书不仅解释了性别化的谈判困境，还提供了克服困境的具体策略：如何在不被贴上「咄咄逼人」标签的前提下争取自己应得的报酬和机会。对每个在职女性来说都是必备的生存指南。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "所有在职女性——尤其是准备谈薪水的",
    "companionBooks": [
      "w01",
      "w11"
    ],
    "quote": "女性不主动要求，不是因为不想要——而是因为她们已经被教会了「要」是不对的。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E4%B8%8E%E8%B0%88%E5%88%A4"
      }
    ],
    "featured": false,
    "publishYear": 2003,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "linda-babcock--sara-laschever"
  },
  {
    "id": "m23",
    "title": "育儿神话",
    "titleEn": "The Myth of the Perfect Mother",
    "author": "苏珊·J·道格拉斯 / 梅雷迪斯·W·迈克尔斯",
    "authorEn": "Susan J. Douglas",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "母职焦虑",
      "媒体批判",
      "完美妈妈神话"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "从母婴杂志到Instagram完美妈妈博主，媒体正在制造一种新的母职意识形态——「新母职主义」。它告诉你母乳是最好的、辅食必须有机的、早教不能输在起跑线——然后把所有失败的责任都归结为「妈妈不够努力」。两位作者用犀利的文化批评和幽默的笔触，把这个压在无数妈妈身上的完美主义枷锁拆解得清清楚楚。读完你会松一口气：不是你的问题——是这个神话有问题。",
    "cover": "",
    "triggerWarning": "可能引发对母职压力的强烈情绪反应",
    "triggerWarningType": "psychology",
    "suitableFor": "所有感到育儿压力的妈妈、准妈妈",
    "companionBooks": [
      "m01",
      "m16"
    ],
    "quote": "完美妈妈不存在——她只是消费主义文化为了卖给你更多东西而编造的幽灵。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E8%82%B2%E5%84%BF%E7%A5%9E%E8%AF%9D"
      }
    ],
    "featured": false,
    "publishYear": 2004,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "susan-j-douglas"
  },
  {
    "id": "m24",
    "title": "初为人母",
    "titleEn": "A Woman's First Year of Motherhood",
    "author": "安妮·拉莫特",
    "authorEn": "Anne Lamott",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "初为人母",
      "育儿第一年",
      "幽默"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "随笔散文",
    "guide": "拉莫特用她招牌的幽默和坦诚记录了成为母亲第一年的混乱与发现。她毫不掩饰地写下了初为人母的那些「不该说的真相」——孤独、沮丧、对伴侣的怨恨、对自己身体的陌生感——但她也在这些混乱中找到了意想不到的温柔和力量。这本书像是一个过来人在你耳边说：「我知道这很难，但你会熬过去的，而且你会在途中发现一个全新的自己。」",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "新手妈妈、准妈妈",
    "companionBooks": [
      "m01",
      "m16"
    ],
    "quote": "",
    "readingTime": 3,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%88%9D%E4%B8%BA%E4%BA%BA%E6%AF%8D"
      }
    ],
    "featured": false,
    "publishYear": 1993,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "anne-lamott"
  },
  {
    "id": "m25",
    "title": "看不见的母亲",
    "titleEn": "Invisible Mothers",
    "author": "刘瑜",
    "authorEn": "Liu Yu",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国母亲",
      "家庭照护",
      "代际变迁"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "政治学者刘瑜在成为母亲后开始关注一个被公共话语系统忽视的群体：那些在城市家庭中帮忙带孩子的奶奶和外婆们。她们从老家来到陌生的城市，放弃了自己的社交和生活，无偿地为子女提供育儿劳动——却很少被当作「劳动者」来被看见和尊重。这本书用社会学家的冷静和母亲的温度，记录了中国家庭中这道独特而心酸的风景。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "关注中国家庭照护议题的读者",
    "companionBooks": [
      "m14",
      "m05"
    ],
    "quote": "",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%9C%8B%E4%B8%8D%E8%A7%81%E7%9A%84%E6%AF%8D%E4%BA%B2"
      }
    ],
    "featured": false,
    "publishYear": 2023,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "liu-yu"
  },
  {
    "id": "t28",
    "title": "性与政治",
    "titleEn": "Sexual Politics",
    "author": "凯特·米利特",
    "authorEn": "Kate Millett",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "性政治",
      "父权理论",
      "文学批评"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "米利特在这本博士论文级别的开创性著作中首次提出了「性政治」这一概念：性别关系本身就是一种权力关系。她通过对D.H.劳伦斯、亨利·米勒、诺曼·梅勒等男性作家作品的犀利分析，揭示了文学经典中隐性的性别暴力与支配逻辑。这本书奠定了激进女性主义的理论基础，至今仍是理解「个人的即政治的」这一口号的最佳入口。",
    "cover": "",
    "triggerWarning": "包含对性暴力文学描写的分析，可能引发不适",
    "triggerWarningType": "psychology",
    "suitableFor": "文学批评研究者、对性别权力结构感兴趣的进阶读者",
    "companionBooks": [
      "t01",
      "t16"
    ],
    "quote": "性是政治，因为男女关系是权力关系的范式。",
    "readingTime": 10,
    "versionNote": "推荐中译本",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%80%A7%E4%B8%8E%E6%94%BF%E6%B2%BB"
      }
    ],
    "featured": false,
    "publishYear": 1970,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "kate-millett"
  },
  {
    "id": "t29",
    "title": "酷儿理论导论",
    "titleEn": "Queer Theory: An Introduction",
    "author": "安娜玛丽·贾戈斯",
    "authorEn": "Annamarie Jagose",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "酷儿理论",
      "性别多元",
      "后结构主义"
    ],
    "feminismSchool": [
      "postmodern"
    ],
    "feminismSchoolLabel": [
      "后现代女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "一本清晰简明的酷儿理论入门。如果你对巴特勒的《性别麻烦》感到头疼，可以从这本开始——贾戈斯用极其清晰的语言梳理了酷儿理论从福柯到巴特勒、从后结构主义到行动主义的整个脉络。书中特别讨论了酷儿理论与女性主义之间时而结盟时而紧张的关系，对于想理解当代性别政治多元面貌的读者来说是不可或缺的地图。",
    "cover": "",
    "triggerWarning": "学术理论著作，需要一定的哲学/文化研究基础",
    "triggerWarningType": "difficult",
    "suitableFor": "想了解酷儿理论的进阶读者",
    "companionBooks": [
      "t05"
    ],
    "quote": "",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E9%85%B7%E5%84%BF%E7%90%86%E8%AE%BA%E5%AF%BC%E8%AE%BA"
      }
    ],
    "featured": false,
    "publishYear": 1996,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "annamarie-jagose"
  },
  {
    "id": "t30",
    "title": "女性与疯狂",
    "titleEn": "Women and Madness",
    "author": "菲利斯·切斯勒",
    "authorEn": "Phyllis Chesler",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "心理健康",
      "精神病学批判",
      "女性经验"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "为什么精神病院里女性患者远多于男性？切斯勒在1972年提出了一个至今仍震耳欲聋的答案：因为父权社会把女性的正常反抗——愤怒、悲伤、不服从——诊断为「疯狂」。这本书追溯了从古希腊到20世纪精神病学如何被用作控制女性的工具，并记录了那些被关进精神病院的女性的真实声音。读这本书会让你重新思考什么叫「疯女人」。",
    "cover": "",
    "triggerWarning": "包含精神病院虐待和强制治疗的描写，可能触发不适",
    "triggerWarningType": "psychology",
    "suitableFor": "对精神病学批判和性别议题感兴趣的读者",
    "companionBooks": [
      "t01",
      "l05"
    ],
    "quote": "当女人愤怒时，她被称为疯子。当男人愤怒时，他被称为领袖。",
    "readingTime": 8,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E4%B8%8E%E7%96%AF%E7%8B%82"
      }
    ],
    "featured": false,
    "publishYear": 1972,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "phyllis-chesler"
  },
  {
    "id": "o26",
    "title": "依恋与亲密关系",
    "titleEn": "Attached",
    "author": "阿米尔·莱文 / 蕾切尔·S·F·赫勒",
    "authorEn": "Amir Levine",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "依恋理论",
      "亲密关系",
      "焦虑型依恋"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "为什么你在恋爱中总是「太黏人」？为什么对方一不回消息你就开始恐慌？这不是因为你「太敏感」或者「太作」——而是你的依恋系统在发挥正常功能。两位作者用依恋理论解释了成年人亲密关系中的三种依恋风格（安全型、焦虑型、回避型），并给出了如何找到和安全型伴侣相处、如何让自己变得更安全的实用建议。对在原生家庭中没有获得安全依恋的女性来说，这本书提供了一条理解自己、治愈自己的清晰路径。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "在亲密关系中有焦虑倾向的女性",
    "companionBooks": [
      "o08",
      "o06"
    ],
    "quote": "你的依恋需求不是弱点——它们是数百万年进化的产物。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%BE%9D%E6%81%8B%E4%B8%8E%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB"
      }
    ],
    "featured": false,
    "publishYear": 2010,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "amir-levine"
  },
  {
    "id": "l26",
    "title": "第九个寡妇",
    "titleEn": "The Ninth Widow",
    "author": "严歌苓",
    "authorEn": "Yan Geling",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国农村",
      "女性生存",
      "土改"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "虚构小说",
    "guide": "王葡萄是严歌苓笔下最令人难忘的女性形象之一。这个河南农村的年轻寡妇在土改运动中偷偷救下了被判死刑的地主公公，然后在地窖里藏了他几十年。在政治运动一轮接一轮的年代，她就用自己最原始的善良和生存本能，和整个时代对抗。严歌苓把一个「无知农村妇女」塑造成了最伟大的英雄——她不懂任何主义或理论，但她知道什么是对的。",
    "cover": "",
    "triggerWarning": "包含政治运动和性暴力描写",
    "triggerWarningType": "psychology",
    "suitableFor": "喜欢严歌苓的读者、对20世纪中国农村女性感兴趣的读者",
    "companionBooks": [
      "l23",
      "l25"
    ],
    "quote": "她不知道什么叫正义，但她知道什么叫人。",
    "readingTime": 7,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%AC%AC%E4%B9%9D%E4%B8%AA%E5%AF%A1%E5%A6%87"
      }
    ],
    "featured": false,
    "publishYear": 2006,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "yan-geling"
  },
  {
    "id": "l27",
    "title": "食荤者",
    "titleEn": "The Meat Eater",
    "author": "阿耐",
    "authorEn": "A Nai",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "中国商战",
      "女性创业",
      "职场小说"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "虚构小说",
    "guide": "阿耐是《欢乐颂》《都挺好》的原著作者，《食荤者》是她的成名作。小说中的女主角在男性主导的商场上杀出一条血路——不是靠美貌或关系，而是靠头脑和意志。作为一本中国本土的女性职场/商战小说，它罕见地让一个野心勃勃、不「温柔」的女人成为了主角（并且不是反派）。如果你需要一部让你「燃」起来的女性职场小说，这就是。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "喜欢职场小说的读者、需要职场正能量的女性",
    "companionBooks": [
      "w01"
    ],
    "quote": "",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E9%A3%9F%E8%8D%A4%E8%80%85"
      }
    ],
    "featured": false,
    "publishYear": 2005,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "anai"
  },
  {
    "id": "m26",
    "title": "产科迷思",
    "titleEn": "The Myths of Childbirth",
    "author": "亨西·戈耶",
    "authorEn": "Henci Goer",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "分娩",
      "循证产科",
      "身体自主"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "你被推进产房的那一刻，是不是觉得自己突然失去了对自己身体的控制权？戈耶用大量的循证医学研究论证了一个女性主义的核心观点：分娩不应该是「被管理的医疗程序」——它应该是女性主导的身体经验。书中驳斥了许多常规产科操作的所谓「必要性」，为想要拿回分娩自主权的女性提供了基于证据的决策工具。每位即将分娩的女性都应该读这本书——不是因为它会让你害怕医院，而是因为它会让你知道你有选择。",
    "cover": "",
    "triggerWarning": "包含对常规产科操作的批判，可能引发对分娩的焦虑",
    "triggerWarningType": "viewpoint",
    "suitableFor": "准妈妈、对产科实践有疑问的读者",
    "companionBooks": [
      "m15",
      "m18"
    ],
    "quote": "",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%BA%A7%E7%A7%91%E8%BF%B7%E6%80%9D"
      }
    ],
    "featured": false,
    "publishYear": 1999,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "henci-goer"
  },
  {
    "id": "m27",
    "title": "产后：被忽视的第一年",
    "titleEn": "The Postnatal Depletion Cure",
    "author": "奥斯卡·塞拉赫",
    "authorEn": "Oscar Serrallach",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "产后恢复",
      "母职健康",
      "营养学"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "如果你生了孩子之后感觉自己的身体「不是自己的了」——疲劳、脑雾、掉头发、情绪波动——这不是你的想象。塞拉赫医生提出了「产后耗竭」这个概念，从营养学、内分泌学和心理学角度解释了为什么产后恢复需要至少一到两年（而不是六周）。这本书的意义不仅仅是给出恢复方案——更重要的是它让无数产后女性了解到：你没有「恢复得不够快」——是社会对产后恢复的预期完全不切实际。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "产后女性、准妈妈",
    "companionBooks": [
      "m01",
      "m17"
    ],
    "quote": "",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E4%BA%A7%E5%90%8E%EF%BC%9A%E8%A2%AB%E5%BF%BD%E8%A7%86%E7%9A%84%E7%AC%AC%E4%B8%80%E5%B9%B4"
      }
    ],
    "featured": false,
    "publishYear": 2018,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "oscar-serrallach"
  },
  {
    "id": "t31",
    "title": "黑色女性主义思想",
    "titleEn": "Black Feminist Thought",
    "author": "帕特里夏·希尔·柯林斯",
    "authorEn": "Patricia Hill Collins",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "黑人女性主义",
      "交叉性",
      "知识社会学"
    ],
    "feminismSchool": [
      "blackThirdWorld"
    ],
    "feminismSchoolLabel": [
      "黑人/第三世界女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "柯林斯提出黑人女性的经验不仅仅是种族歧视和性别歧视的叠加——它是一种独特的认知视角。她论证了黑人女性如何通过日常生活、音乐、文学和口述传统创造出了一套不同于主流女性主义的理论体系。这本书拓宽了女性主义的疆界，让那些被边缘化的声音成为了理论的中心而非注脚。",
    "cover": "",
    "triggerWarning": "学术写作偏理论化，需要一定的社会学基础",
    "triggerWarningType": "difficult",
    "suitableFor": "对交叉性理论和黑人女性主义感兴趣的进阶读者",
    "companionBooks": [
      "t13",
      "t08"
    ],
    "quote": "黑人女性不只是被压迫的受害者——她们是知识的生产者。",
    "readingTime": 12,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E9%BB%91%E8%89%B2%E5%A5%B3%E6%80%A7%E4%B8%BB%E4%B9%89%E6%80%9D%E6%83%B3"
      }
    ],
    "featured": false,
    "publishYear": 1990,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "patricia-hill-collins"
  },
  {
    "id": "t32",
    "title": "边境/边缘：新混血女性",
    "titleEn": "Borderlands/La Frontera",
    "author": "格洛丽亚·安扎杜尔",
    "authorEn": "Gloria Anzaldúa",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "奇卡诺",
      "混血身份",
      "诗歌体理论"
    ],
    "feminismSchool": [
      "blackThirdWorld"
    ],
    "feminismSchoolLabel": [
      "黑人/第三世界女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "安扎杜尔用诗歌、回忆录、理论和神话交织的独特文体，写下了生活在美墨边境的女性经验。她提出了「混血意识」——一种从多元文化裂隙中生长出来的新视角。这本书不是传统意义上的学术著作，它本身就是对学术规范的女性主义挑战，文字像火焰一样跳跃燃烧。",
    "cover": "",
    "triggerWarning": "混合文体可能不习惯传统学术读者，包含创伤和歧视描写",
    "triggerWarningType": "difficult",
    "suitableFor": "对多元文化和后殖民女性主义感兴趣的读者",
    "companionBooks": [
      "t31",
      "t13"
    ],
    "quote": "边境不是一道线——它是一个伤口，也是一个新家。",
    "readingTime": 8,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E8%BE%B9%E5%A2%83%2F%E8%BE%B9%E7%BC%98%EF%BC%9A%E6%96%B0%E6%B7%B7%E8%A1%80%E5%A5%B3%E6%80%A7"
      }
    ],
    "featured": false,
    "publishYear": 1987,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "gloria-anzald-a"
  },
  {
    "id": "t33",
    "title": "身体之重",
    "titleEn": "Bodies That Matter",
    "author": "朱迪斯·巴特勒",
    "authorEn": "Judith Butler",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "身体政治",
      "物质性",
      "性别建构深化"
    ],
    "feminismSchool": [
      "postmodern"
    ],
    "feminismSchoolLabel": [
      "后现代女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "巴特勒在《性别麻烦》之后写了这本书来回应批评者：如果性别是表演的，那身体本身呢？她论证了身体不是性别表演的「舞台」——身体本身就是在社会规范中被「物质化」的产物。这是一本比《性别麻烦》更难但同样重要的续作，对想深入理解性别建构论的读者来说不可或缺。",
    "cover": "",
    "triggerWarning": "学术哲学密度极高，比《性别麻烦》更难读",
    "triggerWarningType": "difficult",
    "suitableFor": "哲学/性别研究背景的深度理论读者",
    "companionBooks": [
      "t05",
      "t01"
    ],
    "quote": "",
    "readingTime": 10,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E8%BA%AB%E4%BD%93%E4%B9%8B%E9%87%8D"
      }
    ],
    "featured": false,
    "publishYear": 1993,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "judith-butler"
  },
  {
    "id": "t34",
    "title": "我们的身体，我们自己",
    "titleEn": "Our Bodies, Ourselves",
    "author": "波士顿妇女健康写作集体",
    "authorEn": "Boston Women's Health Book Collective",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性健康",
      "身体自主",
      "自助手册"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "1971年，一群女性围坐在厨房桌子旁，决定写一本关于女性自己身体的书——不是因为她们是医生，而是因为她们受够了男性医生对女性身体的傲慢和无知。这本书从此改变了全球女性对自身健康的认知方式，被翻译成30多种语言。它不是一本冷冰冰的医学手册，而是一本充满姐妹情谊的身体自主宣言。",
    "cover": "",
    "triggerWarning": "包含详细的身体和性健康描写，可能引起不适",
    "triggerWarningType": "psychology",
    "suitableFor": "所有想了解自己身体的女性读者",
    "companionBooks": [
      "t20",
      "m18"
    ],
    "quote": "知识就是力量——尤其是关于你自己身体的知识。",
    "readingTime": 10,
    "versionNote": "推荐最新中文版",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%88%91%E4%BB%AC%E7%9A%84%E8%BA%AB%E4%BD%93%EF%BC%8C%E6%88%91%E4%BB%AC%E8%87%AA%E5%B7%B1"
      }
    ],
    "featured": false,
    "publishYear": 1971,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "boston-women-s-health-book-collective"
  },
  {
    "id": "o29",
    "title": "身体知道答案",
    "titleEn": "The Body Knows the Answer",
    "author": "武志红",
    "authorEn": "Wu Zhihong",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "身体心理学",
      "中国案例",
      "心身连接"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "武志红在这本书中聚焦了中国家庭中一个常见的现象：被压抑的情绪不会消失——它会变成身体症状。那些查不出原因的头痛、胃痛、失眠，可能是身体在替你说出那些不被允许说出口的话。对于在「不许哭」「不许发脾气」的环境中长大的中国女性来说，这本书提供了一个重新连接身体与情绪的入口。",
    "cover": "",
    "triggerWarning": "包含个体案例描述，可能触发情绪反应",
    "triggerWarningType": "psychology",
    "suitableFor": "有不明原因身体症状、想了解情绪与身体关系的读者",
    "companionBooks": [
      "o23",
      "o07"
    ],
    "quote": "你的身体不是背叛了你——它是在保护你，用唯一被允许的方式表达痛苦。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E8%BA%AB%E4%BD%93%E7%9F%A5%E9%81%93%E7%AD%94%E6%A1%88"
      }
    ],
    "featured": false,
    "publishYear": 2013,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "wu-zhihong"
  },
  {
    "id": "o31",
    "title": "女性与羞耻感",
    "titleEn": "Women and Shame",
    "author": "布琳·布朗",
    "authorEn": "Brené Brown",
    "category": "origin",
    "categoryLabel": "与原生和解",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "羞耻感",
      "女性经验",
      "脆弱力量"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "布朗博士通过数千个访谈发现了一个令人心碎的规律：女性比男性更容易被羞耻感困住——关于身材的、关于母职的、关于不够温柔的、关于太过野心勃勃的。羞耻感在女性身上编织了一张密不透风的网。但这本书不是让你抱怨，而是告诉你：说出你的羞耻感，它就会失去力量。",
    "cover": "",
    "triggerWarning": "可能触发与个人羞耻经历相关的情緒",
    "triggerWarningType": "psychology",
    "suitableFor": "有强烈羞耻感、对自己过于严苛的女性",
    "companionBooks": [
      "o09",
      "o22"
    ],
    "quote": "羞耻感依靠秘密、沉默和评判来生存。说出它，它就活不下去了。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E4%B8%8E%E7%BE%9E%E8%80%BB%E6%84%9F"
      }
    ],
    "featured": false,
    "publishYear": 2007,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "bren-brown"
  },
  {
    "id": "l28",
    "title": "生死场",
    "titleEn": "The Field of Life and Death",
    "author": "萧红",
    "authorEn": "Xiao Hong",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "东北农村",
      "女性苦难",
      "抗战文学"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "虚构小说",
    "guide": "萧红的成名作，也是中国现代文学中描写女性苦难最震撼的作品之一。在东北沦陷区的农村，女人们像牲畜一样活着——生孩子、干农活、挨打、死去。萧红没有用控诉的语调，她只是用极冷的笔写出极热的血——那只在生死线上挣扎的母狗、那个在丈夫面前连头都不敢抬的女人。鲁迅称这本书展现了「北方人民的对于生的坚强，对于死的挣扎」。",
    "cover": "",
    "triggerWarning": "包含极端苦难、暴力和死亡描写，情绪冲击极强",
    "triggerWarningType": "psychology",
    "suitableFor": "中国现代文学读者、萧红研究者",
    "companionBooks": [
      "l16",
      "o12"
    ],
    "quote": "在乡村，人和动物一起忙着生，忙着死。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%94%9F%E6%AD%BB%E5%9C%BA"
      }
    ],
    "featured": false,
    "publishYear": 1935,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "xiao-hong"
  },
  {
    "id": "l29",
    "title": "城南旧事",
    "titleEn": "Memories of Peking: South Side Stories",
    "author": "林海音",
    "authorEn": "Lin Haiyin",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "北京记忆",
      "童年视角",
      "台湾文学"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "虚构小说",
    "guide": "林海音用小女孩英子的眼睛看老北京——骆驼队、疯女人秀贞、草丛里的小偷、兰姨娘、宋妈。这些成人眼中「有问题」的边缘人物，在孩子的目光下展现了她们最柔软、最真实的一面。书中对女性命运的关照含蓄而深沉——秀贞疯了、兰姨娘走了、宋妈失去了自己的孩子。每一个女性角色都是那个时代的一面镜子。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "所有年龄段的读者，青少年也可以读",
    "companionBooks": [
      "l16",
      "l24"
    ],
    "quote": "爸爸的花儿落了，我也不再是小孩子了。",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%9F%8E%E5%8D%97%E6%97%A7%E4%BA%8B"
      }
    ],
    "featured": true,
    "publishYear": 1960,
    "hasAudio": true,
    "hasRead": true,
    "authorId": "lin-haiyin"
  },
  {
    "id": "l30",
    "title": "结婚十年",
    "titleEn": "Ten Years of Marriage",
    "author": "苏青",
    "authorEn": "Su Qing",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "婚姻纪实",
      "民国女性",
      "自传体"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "苏青是和张爱玲齐名的民国女作家，这本自传体小说记录了她十年的婚姻从甜蜜到破灭的全过程。她写婆媳矛盾、写产后被冷落、写丈夫的外遇、写自己如何在经济和精神上一步步独立。在1940年代的中国，一个女人公开讨论自己婚姻的失败和身体的私密体验，是极其勇敢的事。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "对民国女性生活和婚恋史感兴趣的读者",
    "companionBooks": [
      "l14",
      "o13"
    ],
    "quote": "",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%BB%93%E5%A9%9A%E5%8D%81%E5%B9%B4"
      }
    ],
    "featured": false,
    "publishYear": 1944,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "su-qing"
  },
  {
    "id": "l31",
    "title": "青春之歌",
    "titleEn": "The Song of Youth",
    "author": "杨沫",
    "authorEn": "Yang Mo",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "革命文学",
      "女性觉醒",
      "红色经典"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "虚构小说",
    "guide": "女学生林道静挣脱封建家庭的束缚，在1930年代的风云变幻中找到了革命的道路和自己的声音。作为红色经典中罕见的以女性为主角的作品，林道静的形象影响了整整一代中国女性。虽然今天的读者可能会觉得小说的政治色彩太重，但在那个年代，一个女性选择投身革命本身就是一种对传统的最大反叛。",
    "cover": "",
    "triggerWarning": "1950年代革命文学，政治色彩较浓",
    "triggerWarningType": "viewpoint",
    "suitableFor": "对革命年代女性叙事感兴趣的读者",
    "companionBooks": [
      "l16"
    ],
    "quote": "",
    "readingTime": 8,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E9%9D%92%E6%98%A5%E4%B9%8B%E6%AD%8C"
      }
    ],
    "featured": false,
    "publishYear": 1958,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "yang-mo"
  },
  {
    "id": "l32",
    "title": "金色笔记",
    "titleEn": "The Golden Notebook",
    "author": "多丽丝·莱辛",
    "authorEn": "Doris Lessing",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "诺贝尔文学奖",
      "女性写作",
      "碎片化叙事"
    ],
    "feminismSchool": [
      "radical"
    ],
    "feminismSchoolLabel": [
      "激进女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "虚构小说",
    "guide": "2007年诺贝尔文学奖得主莱辛最重要的作品。女作家安娜用四本不同颜色的笔记记录自己生活的不同面向——政治、情感、写作、日常——试图在碎片中寻找完整。这部小说被称为「女性主义文学的里程碑」，但莱辛本人拒绝这个标签——她写的是每一个现代人的分裂与孤独，只是碰巧用了一个女人作为主角。",
    "cover": "",
    "triggerWarning": "长篇实验性小说，叙事碎片化，需要耐心",
    "triggerWarningType": "difficult",
    "suitableFor": "喜欢现代主义文学的读者、对女性写作感兴趣的文学爱好者",
    "companionBooks": [
      "t04",
      "l10"
    ],
    "quote": "",
    "readingTime": 15,
    "versionNote": "推荐完整中译本",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E9%87%91%E8%89%B2%E7%AC%94%E8%AE%B0"
      }
    ],
    "featured": false,
    "publishYear": 1962,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "doris-lessing"
  },
  {
    "id": "l33",
    "title": "女性的河流",
    "titleEn": "The River of Women",
    "author": "虹影",
    "authorEn": "Hong Ying",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "长江",
      "女性成长",
      "饥饿记忆"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "纪实非虚构",
    "guide": "虹影以长江为线索写下了自己的成长史——重庆贫民窟里饥饿的童年、少女时代的流浪、成年后在英国的写作生涯。她写贫穷和饥饿如何塑造了一个女性对世界的感知，也写了写作如何成为她逃离命运的船。虹影的文字中有一种野生的力量，不精致但很真实。",
    "cover": "",
    "triggerWarning": "包含饥饿、贫困和虐待描写",
    "triggerWarningType": "psychology",
    "suitableFor": "喜欢非虚构自传的读者",
    "companionBooks": [
      "l21",
      "o12"
    ],
    "quote": "江水带走了很多人的命，但带不走一个女性对自由的渴望。",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E7%9A%84%E6%B2%B3%E6%B5%81"
      }
    ],
    "featured": false,
    "publishYear": 2018,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "hong-ying"
  },
  {
    "id": "w26",
    "title": "偏见",
    "titleEn": "Biased",
    "author": "珍妮弗·L·埃伯哈特",
    "authorEn": "Jennifer L. Eberhardt",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "无意识偏见",
      "种族",
      "职场"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "斯坦福大学心理学家埃伯哈特花了二十年研究「无意识偏见」——那些我们不承认自己有、但确实影响每一个决策的隐性偏见。从警察拦检到招聘面试，从学校纪律到法庭判决，偏见无孔不入。这本书对职场女性尤其重要——它解释了你为什么总被「看不见」、为什么你的贡献总被归功于男性同事、为什么你需要在会议上比男性多说三倍的话才能被注意到。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "所有职场女性、HR从业者、管理者",
    "companionBooks": [
      "t12",
      "w01"
    ],
    "quote": "偏见不是你是个坏人——偏见是你在一个好人的脑子里。",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%81%8F%E8%A7%81"
      }
    ],
    "featured": false,
    "publishYear": 2019,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "jennifer-l-eberhardt"
  },
  {
    "id": "w27",
    "title": "权力：女性如何获得和运用",
    "titleEn": "Power: How Women Can Get and Use It",
    "author": "玛丽·比尔德",
    "authorEn": "Mary Beard",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性权力",
      "古典学",
      "公共领域"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "继《女性与权力》后，比尔德进一步追问：即使女性获得了职位和头衔，为什么她们仍然在权力结构中感到格格不入？她用古典学的透镜审视了权力的性别编码——从古代雅典的公民大会到今天的企业董事会，权力一直是被男性定义的，女性要进入就必须「像男人一样行事」。但比尔德提出了一条不同的路：不是让女性适应权力，而是重新定义权力。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "职场管理层女性、公共领域关注者",
    "companionBooks": [
      "t14",
      "w01"
    ],
    "quote": "我们需要的不是更多女性模仿男性权力——我们需要的是重新定义权力本身。",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%9D%83%E5%8A%9B%EF%BC%9A%E5%A5%B3%E6%80%A7%E5%A6%82%E4%BD%95%E8%8E%B7%E5%BE%97%E5%92%8C%E8%BF%90%E7%94%A8"
      }
    ],
    "featured": false,
    "publishYear": 2022,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "mary-beard"
  },
  {
    "id": "m28",
    "title": "摇篮中的女性",
    "titleEn": "The Cradle of Feminism",
    "author": "西蒙娜·德·波伏瓦等",
    "authorEn": "Simone de Beauvoir et al.",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "母职与女性主义",
      "经典文选",
      "多声部"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "一本汇集了从波伏瓦到上野千鹤子、从里奇到巴特勒的母职主题经典文本的选集。每一位作者都从不同角度拆解了「母性」这枚硬币的两面——它既是父权制控制女性的工具，也是女性经验中不可替代的力量源泉。适合想要在一本书中快速了解女性主义对母职的多重思考的读者。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "对母职议题感兴趣的入门读者",
    "companionBooks": [
      "m01",
      "m03",
      "m22"
    ],
    "quote": "",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E6%91%87%E7%AF%AE%E4%B8%AD%E7%9A%84%E5%A5%B3%E6%80%A7"
      }
    ],
    "featured": false,
    "publishYear": 2020,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "simone-de-beauvoir-et-al"
  },
  {
    "id": "m29",
    "title": "女性与育儿：全球视野",
    "titleEn": "Women and Childcare: A Global Perspective",
    "author": "安·奥克利",
    "authorEn": "Ann Oakley",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "育儿社会学",
      "跨国比较",
      "女性主义研究"
    ],
    "feminismSchool": [
      "socialist"
    ],
    "feminismSchoolLabel": [
      "社会主义/马克思女性主义"
    ],
    "wave": 2,
    "waveLabel": "第二波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "奥克利是家务劳动社会学的开创者之一。在这本书中，她将研究扩展到育儿——不是告诉你「怎么育儿」，而是分析「为什么育儿变成了女性的专利」。从英国到瑞典，从日本到印度，每个社会都有自己的一套「好妈妈标准」，但有一个共同点：不管在哪里，育儿最终都是母亲的活。",
    "cover": "",
    "triggerWarning": "社会学学术写作，需要一定耐心",
    "triggerWarningType": "difficult",
    "suitableFor": "对育儿社会学感兴趣的读者",
    "companionBooks": [
      "m03",
      "m05"
    ],
    "quote": "育儿是最私人的体验，也是最政治化的议题。",
    "readingTime": 7,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E4%B8%8E%E8%82%B2%E5%84%BF%EF%BC%9A%E5%85%A8%E7%90%83%E8%A7%86%E9%87%8E"
      }
    ],
    "featured": false,
    "publishYear": 1979,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "ann-oakley"
  },
  {
    "id": "t36",
    "title": "女性主义研究方法论",
    "titleEn": "Feminist Methods in Social Research",
    "author": "舒拉米特·莱因哈茨",
    "authorEn": "Shulamit Reinharz",
    "category": "thought",
    "categoryLabel": "思潮漫步",
    "level": "advanced",
    "levelLabel": "进阶",
    "tags": [
      "研究方法",
      "社会学",
      "认识论"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "理论专著",
    "guide": "女性主义不只是研究「女性」——它也要求用不同的方式做研究。莱因哈茨系统梳理了访谈、参与观察、内容分析、口述历史等方法的女性主义改造，论证了研究方法本身就带有性别偏见。适合社会学、人类学专业的读者，以及任何想知道「女性主义者怎么做研究」的思考者。",
    "cover": "",
    "triggerWarning": "学术方法论著作，适合有研究背景的读者",
    "triggerWarningType": "difficult",
    "suitableFor": "社会学、人类学专业读者",
    "companionBooks": [
      "t08"
    ],
    "quote": "",
    "readingTime": 10,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E4%B8%BB%E4%B9%89%E7%A0%94%E7%A9%B6%E6%96%B9%E6%B3%95%E8%AE%BA"
      }
    ],
    "featured": false,
    "publishYear": 1992,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "shulamit-reinharz"
  },
  {
    "id": "l34",
    "title": "倾城之恋之外：张爱玲笔下的女性群像",
    "titleEn": "Women in Eileen Chang's Works",
    "author": "多位学者",
    "authorEn": "",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "张爱玲研究",
      "女性文学批评",
      "民国女性"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "国内本土",
    "genre": "理论专著",
    "guide": "张爱玲笔下的白流苏、葛薇龙、曹七巧、顾曼桢——每一个都是复杂的、充满矛盾的、绝不「完美」的女性形象。这本书汇集了多位学者从女性主义视角对张爱玲作品的分析，帮你从更深的层面理解张爱玲为什么是中文世界最重要的女性作家。",
    "cover": "",
    "triggerWarning": "学术论文合集，适合对文学批评感兴趣的读者",
    "triggerWarningType": "difficult",
    "suitableFor": "张爱玲读者、文学专业学生",
    "companionBooks": [
      "l14",
      "l18"
    ],
    "quote": "",
    "readingTime": 6,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%80%BE%E5%9F%8E%E4%B9%8B%E6%81%8B%E4%B9%8B%E5%A4%96%EF%BC%9A%E5%BC%A0%E7%88%B1%E7%8E%B2%E7%AC%94%E4%B8%8B%E7%9A%84%E5%A5%B3%E6%80%A7%E7%BE%A4%E5%83%8F"
      }
    ],
    "featured": false,
    "publishYear": 2015,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "author-2281032773"
  },
  {
    "id": "l35",
    "title": "厨房",
    "titleEn": "Kitchen",
    "author": "吉本芭娜娜",
    "authorEn": "Banana Yoshimoto",
    "category": "local",
    "categoryLabel": "本土她故事",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "日本文学",
      "治愈",
      "死亡与重生"
    ],
    "feminismSchool": [
      "eastAsian"
    ],
    "feminismSchoolLabel": [
      "东亚本土女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "东亚",
    "genre": "虚构小说",
    "guide": "吉本芭娜娜用温柔的笔触写下了年轻女性面对死亡与孤独时的治愈之旅。小说的女主角在失去祖母后，在朋友家的厨房里找到了奇异的安全感——原来治愈一个人的不是宏大的道理，而是一碗热汤、一个亮着灯的厨房、一个愿意陪你熬夜的人。这本书不呐喊，不控诉，只是安静地告诉你：伤口会愈合的。",
    "cover": "",
    "triggerWarning": "涉及亲人离世和抑郁描写",
    "triggerWarningType": "psychology",
    "suitableFor": "需要被温柔治愈的读者",
    "companionBooks": [
      "o10",
      "l01"
    ],
    "quote": "在这个世界上，我最喜欢的地方就是厨房。",
    "readingTime": 3,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%8E%A8%E6%88%BF"
      }
    ],
    "featured": false,
    "publishYear": 1988,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "banana-yoshimoto"
  },
  {
    "id": "w28",
    "title": "女性经济学家们",
    "titleEn": "The Women Economists",
    "author": "多位作者",
    "authorEn": "",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "女性经济学家",
      "经济学史",
      "被忽视的贡献"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "从琼·罗宾逊到珍妮特·耶伦，从埃莉诺·奥斯特罗姆（首位女性诺贝尔经济学奖得主）到玛丽莲·沃林——这本书把被经济学教科书隐去的女性经济学家们一个个找了回来。她们的贡献不亚于亚当·斯密或凯恩斯，却因为性别被系统性地边缘化。读完你会对「经济学」这门学科本身产生全新的认识。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "经济学爱好者、对女性学术史感兴趣的读者",
    "companionBooks": [
      "w21",
      "t12"
    ],
    "quote": "",
    "readingTime": 5,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E7%BB%8F%E6%B5%8E%E5%AD%A6%E5%AE%B6%E4%BB%AC"
      }
    ],
    "featured": false,
    "publishYear": 2021,
    "hasAudio": false,
    "hasRead": true,
    "authorId": ""
  },
  {
    "id": "w29",
    "title": "女性领导力：从沉默到发言",
    "titleEn": "Taking the Stage",
    "author": "朱迪丝·汉弗莱",
    "authorEn": "Judith Humphrey",
    "category": "workplace",
    "categoryLabel": "职场她力量",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "领导力沟通",
      "公开发言",
      "职场自信"
    ],
    "feminismSchool": [
      "liberalism"
    ],
    "feminismSchoolLabel": [
      "自由主义女性主义"
    ],
    "wave": 3,
    "waveLabel": "第三波女权浪潮",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "汉弗莱是北美顶尖的沟通教练，她发现几乎所有女性职场人都面对同一个困境：在会议上开口之前，内心已经把自己否决了三遍。这本书不是教你「变得像男人一样说话」，而是教你在保持自己风格的前提下，让声音被听见。包含大量的实际脚本和案例，非常实用。",
    "cover": "",
    "triggerWarning": "无特殊阅读避雷提示",
    "triggerWarningType": "none",
    "suitableFor": "职场中不敢发言或在会议上被忽视的女性",
    "companionBooks": [
      "w01",
      "w23"
    ],
    "quote": "你不需要变得更自信——你需要的只是允许自己开口。",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E5%A5%B3%E6%80%A7%E9%A2%86%E5%AF%BC%E5%8A%9B%EF%BC%9A%E4%BB%8E%E6%B2%89%E9%BB%98%E5%88%B0%E5%8F%91%E8%A8%80"
      }
    ],
    "featured": false,
    "publishYear": 2018,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "judith-humphrey"
  },
  {
    "id": "m30",
    "title": "生与不生：女性生育选择全指南",
    "titleEn": "The Motherhood Decision",
    "author": "安·戴维森",
    "authorEn": "Ann Davidman",
    "category": "motherhood",
    "categoryLabel": "母职观察",
    "level": "beginner",
    "levelLabel": "入门",
    "tags": [
      "生育选择",
      "决策框架",
      "不确定性"
    ],
    "feminismSchool": [],
    "feminismSchoolLabel": [],
    "wave": null,
    "waveLabel": "",
    "region": "欧美",
    "genre": "纪实非虚构",
    "guide": "对于很多30+的女性来说，「要不要生孩子」可能是人生中最艰难的决定——一边是生物钟的滴答声，一边是自由、事业和自我认同的不舍。两位作者（都是心理咨询师）写这本书不是为了说服你生或不生，而是提供了一套不带评判的思考框架，帮你理清自己真正想要的是什么。",
    "cover": "",
    "triggerWarning": "涉及生育焦虑和生物钟议题的讨论",
    "triggerWarningType": "psychology",
    "suitableFor": "正在纠结是否生育的女性",
    "companionBooks": [
      "m09",
      "m08"
    ],
    "quote": "最好的生育决定不是别人告诉你的——而是你听见自己内心的答案。",
    "readingTime": 4,
    "versionNote": "无特殊版本提示",
    "isNew": true,
    "dateAdded": "2026-07-09",
    "links": [
      {
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/books?keyword=%E7%94%9F%E4%B8%8E%E4%B8%8D%E7%94%9F%EF%BC%9A%E5%A5%B3%E6%80%A7%E7%94%9F%E8%82%B2%E9%80%89%E6%8B%A9%E5%85%A8%E6%8C%87%E5%8D%97"
      }
    ],
    "featured": false,
    "publishYear": 2014,
    "hasAudio": false,
    "hasRead": true,
    "authorId": "ann-davidman"
  }
];

if (typeof window !== "undefined") {
  window.books = books;
  window.monthlyQuotes = monthlyQuotes;
  window.footerQuotes = footerQuotes;
}
