window.SITE_CONTENT = {
  brand: {
    text: {
      zh: "学业分享中心",
      en: "GC Advising Center",
    },
  },
  site: {
    tagline: {
      zh: "学业分享中心",
      en: "GC Advising Center",
    },
    title: {
      zh: "学业分享中心",
      en: "Academic Sharing Center",
    },
    description: {
      zh: "学业分享中心为同学提供学业交流与信息支持，包括 workshop 往期存档、值班安排和 Piazza 讨论区入口，方便大家快速找到需要的资源。",
      en: "The Academic Sharing Center provides students with academic support resources, including workshop archives, the duty schedule, and Piazza access, so it is easy to find the help you need.",
    },
  },
  navigation: [
    { id: "home", label: { zh: "首页", en: "Home" }, href: "./index.html" },
    { id: "materials", label: { zh: "资料", en: "Materials" }, href: "./materials.html" },
    { id: "advisors", label: { zh: "顾问", en: "Advisors" }, href: "./advisors.html" },
    { id: "schedule", label: { zh: "值班安排", en: "Duty Schedule" }, href: "./schedule.html" },
    { id: "piazza", label: { zh: "Piazza", en: "Piazza" }, href: "./piazza.html" },
  ],
  heroActions: [],
  homeCards: [
    {
      kicker: { zh: "资料入口", en: "Materials" },
      title: { zh: "Workshop 存档", en: "Workshop Archive" },
      body: {
        zh: "查看最近分享会和完整往期资料归档。",
        en: "Browse recent workshops and the full archive.",
      },
      cta: { zh: "打开资料页", en: "Open Materials" },
      href: "./materials.html",
    },
    {
      kicker: { zh: "值班安排", en: "Duty Schedule" },
      title: { zh: "本周值班信息", en: "Weekly Duty Info" },
      body: {
        zh: "查看周一到周五晚间值班安排和地点。",
        en: "See the weekday evening schedule and locations.",
      },
      cta: { zh: "打开值班页", en: "Open Schedule" },
      href: "./schedule.html",
    },
    {
      kicker: { zh: "讨论区", en: "Piazza" },
      title: { zh: "Piazza 入口", en: "Piazza Access" },
      body: {
        zh: "进入课程讨论区，查看公告和常见问题。",
        en: "Open the course discussion board for announcements and shared Q&A.",
      },
      cta: { zh: "打开 Piazza", en: "Open Piazza" },
      href: "./piazza.html",
    },
  ],
  pages: {
    materials: {
      kicker: { zh: "资料页面", en: "Materials" },
      title: { zh: "往期工作坊资料", en: "Past Workshop Materials" },
      description: {
        zh: "这个页面展示从 Markdown 存档解析出的完整 workshop 归档。部分 JBox 链接可能需要 SJTU VPN。",
        en: "This page shows the full workshop archive parsed from the Markdown source. Some JBox links may require SJTU VPN.",
      },
      sectionKicker: { zh: "完整归档", en: "Archive" },
      sectionTitle: { zh: "全部工作坊资料", en: "All Workshop Materials" },
    },
    advisors: {
      kicker: { zh: "顾问页面", en: "Advisors" },
      title: { zh: "Advisor 介绍", en: "Advisor Profiles" },
      description: {
        zh: "在这个页面中，你可以查看 Advisor 的姓名、邮箱、擅长内容和简短背景介绍。",
        en: "Use this page to browse advisor names, email addresses, strengths, and short background notes.",
      },
      sectionKicker: { zh: "顾问团队", en: "People" },
      sectionTitle: { zh: "Advisor 名录", en: "Advisor Directory" },
    },
    schedule: {
      kicker: { zh: "值班安排", en: "Duty Schedule" },
      title: { zh: "工作日晚间值班覆盖", en: "Weekday Evening Coverage" },
      description: {
        zh: "下面的表格覆盖周一到周五的晚间值班安排，并且可以直接在数据文件中更新。",
        en: "The schedule below covers Monday through Friday evenings and can be updated directly in the data file.",
      },
      sectionKicker: { zh: "值班覆盖", en: "Coverage" },
      sectionTitle: { zh: "周一到周五晚间值班表", en: "Monday To Friday Evening Schedule" },
    },
    piazza: {
      kicker: { zh: "Piazza", en: "Piazza" },
      title: { zh: "讨论区入口", en: "Discussion Board Access" },
      description: {
        zh: "这个页面为学生提供了清晰的 Piazza 入口，以及如何使用讨论区的说明。",
        en: "This page gives students a clean way to reach Piazza and understand how it should be used.",
      },
      sectionKicker: { zh: "社区讨论", en: "Community" },
      sectionTitle: { zh: "Piazza 入口与说明", en: "Piazza Access And Notes" },
    },
  },
  pastMaterials: {
    source: "./content/workshops.md",
    intro: {
      zh: "这里展示最近 3 场分享会。点击右上角按钮可以查看完整 workshop 归档；部分 JBox 链接需要 SJTU VPN。",
      en: "These are the latest 3 workshops. Use the button on the right for the full archive; some JBox links require SJTU VPN.",
    },
    pageLabel: { zh: "查看全部资料", en: "View All Materials" },
    pageHref: "./materials.html",
    loadError: {
      title: { zh: "资料加载失败", en: "Unable to Load Materials" },
      body: {
        zh: "当前无法读取 workshop Markdown 存档。请检查 content/workshops.md 是否存在，以及是否通过本地服务器或 GitHub Pages 访问页面。",
        en: "The workshop Markdown archive could not be read. Please make sure content/workshops.md exists and the site is being accessed through a local server or GitHub Pages.",
      },
    },
  },
  advisors: {
    expertiseLabel: { zh: "适合咨询", en: "Best for" },
    items: [
      {
        name: "郑千惠",
        role: { zh: "大四 ME+CS 专业", en: "Senior, ME + CS" },
        email: "zhengqianhui@sjtu.edu.cn",
        expertise: [
          { zh: "选课规划", en: "Course selection planning" },
          { zh: "DD 美研申请", en: "Dual Degree & US grad applications" },
        ],
        bio: {
          zh: "外冷内热的INFJ",
          en: "An INFJ who seems cold on the outside but is warm-hearted on the inside.",
        },
      },
      {
        name: "杨瑞凯",
        role: { zh: "大四 ME+CS 专业", en: "Senior, ME + CS" },
        email: "yang23@sjtu.edu.cn",
        expertise: [
          { zh: "DD 申请", en: "Dual Degree program application" },
          { zh: "学业之外的规划", en: "Planning beyond academics" },
        ],
        bio: {
          zh: "快来给我一个聊天摆烂的机会",
          en: "Come give me a chance to slack off in chat.",
        },
      },
      {
        name: "诸欣宜",
        role: { zh: "大四 ME+CS 专业", en: "Senior, ME + CS" },
        email: "yiliazhu@sjtu.edu.cn",
        expertise: [
          { zh: "DD 美研申请", en: "Dual Degree & US grad applications" },
        ],
        bio: {
          zh: "人机但是喜欢聊天的ISTJ",
          en: "A robotic ISTJ who loves chatting.",
        },
      },
      {
        name: "戴琤妍",
        role: { zh: "大二 ECE 专业", en: "Sophomore, ECE" },
        email: "cheryl_cy@sjtu.edu.cn",
        expertise: [
          { zh: "选课", en: "Course selection" },
          { zh: "学生工作", en: "Student work" },
        ],
        bio: {
          zh: "天马行空的人类观察员",
          en: "An imaginative human observer.",
        },
      },
      {
        name: "刘乐思",
        role: { zh: "大二 ECE 专业", en: "Sophomore, ECE" },
        email: "alan-lls@sjtu.edu.cn",
        expertise: [
          { zh: "学业规划", en: "Academic planning" },
          { zh: "保研相关", en: "Guaranteed postgraduate admission" },
        ],
        bio: {
          zh: "喜欢计算机",
          en: "A CS enthusiast.",
        },
      },
      {
        name: "徐嘉秋",
        role: { zh: "大四 ECE 专业", en: "Senior, ECE" },
        email: "xujiaqiu0913@sjtu.edu.cn",
        expertise: [
          { zh: "PhD 申请", en: "PhD application" },
          { zh: "硬件 / 物理 / 半导体", en: "Hardware, physics & semiconductors" },
          { zh: "交换项目", en: "Exchange programs" },
        ],
        bio: {
          zh: "转行物理的电子工程师",
          en: "An electronics engineer who switched to physics.",
        },
      },
      {
        name: "孙少天",
        role: { zh: "大四 ECE+Math 专业", en: "Senior, ECE + Math" },
        email: "22-sst@sjtu.edu.cn",
        expertise: [
          { zh: "DD 申请", en: "Dual Degree program application" },
          { zh: "文书写作", en: "Personal statement writing" },
        ],
        bio: {
          zh: "快来找我唠嗑",
          en: "Come chat with me anytime.",
        },
      },
      {
        name: "李嘉文",
        role: { zh: "大四 ME+DS 专业", en: "Senior, ME + DS" },
        email: "lijiawen@umich.edu",
        expertise: [
          { zh: "HCI 科研", en: "HCI research" },
          { zh: "博士申请", en: "PhD application" },
          { zh: "美国生活", en: "Surviving in the US" },
        ],
        bio: {
          zh: "2年半玄学算命经验，欢迎来算命",
          en: "2.5 years of fortune-telling experience — come get your future read.",
        },
      },
      {
        name: "韩易真",
        role: { zh: "大四 ME+IOE 专业", en: "Senior, ME + IOE" },
        email: "hyizhen@umich.edu",
        expertise: [
          { zh: "DD / 研究生申请", en: "DD & graduate applications" },
          { zh: "美国 / 国内求职", en: "Job search in the US & China" },
        ],
        bio: {
          zh: "常常摸鱼，速速躺平",
          en: "Often slacking off, always ready to lie flat.",
        },
      },
      {
        name: "王一敏",
        role: { zh: "大四 ME+DS 专业", en: "Senior, ME + DS" },
        email: "wangyimin_claire@sjtu.edu.cn",
        expertise: [
          { zh: "DD 申请", en: "Dual Degree program application" },
          { zh: "科研", en: "Research" },
          { zh: "学业规划", en: "Academic planning" },
        ],
        bio: {
          zh: "长时间待机，偶尔高能量的ENFP",
          en: "A low-key ENFP with occasional bursts of energy.",
        },
      },
      {
        name: "陈羿宏",
        role: { zh: "大四 ECE 专业", en: "Senior, ECE" },
        email: "cyh1102@sjtu.edu.cn",
        expertise: [
          { zh: "量化实习", en: "Quantitative internships" },
          { zh: "保研申请", en: "Guaranteed postgraduate admission" },
        ],
        bio: {
          zh: "快让我毕业吧",
          en: "Please just let me graduate.",
        },
      },
      {
        name: "邵禹杰",
        role: { zh: "大四 ECE 专业", en: "Senior, ECE" },
        email: "shaox3@sjtu.edu.cn",
        expertise: [
          { zh: "GDP 申请", en: "GDP program application" },
          { zh: "学业规划", en: "Academic planning" },
          { zh: "科研 / 国内推免", en: "Research & domestic postgrad recommendation" },
        ],
        bio: {
          zh: "舒服",
          en: "Just chillin'.",
        },
      },
      {
        name: "张轶凡",
        role: { zh: "大四 ECE 专业", en: "Senior, ECE" },
        email: "zhangyf2022@sjtu.edu.cn",
        expertise: [
          { zh: "GDP 申请（USC）", en: "GDP application (USC)" },
        ],
        bio: {
          zh: "在LA学习西海岸文化",
          en: "Soaking up West Coast culture in LA.",
        },
      },
      {
        name: "吴浩洋",
        role: { zh: "大三 ME+CS 专业", en: "Junior, ME + CS" },
        email: "william-wu@sjtu.edu.cn",
        expertise: [
          { zh: "学业规划", en: "Academic planning" },
          { zh: "DD 申请", en: "Dual Degree program application" },
        ],
        bio: {
          zh: "想要加州的天气和纽约的大平层",
          en: "Dreaming of California weather and a NYC penthouse.",
        },
      },
      {
        name: "唐璟帆",
        role: { zh: "大三 ECE 专业", en: "Junior, ECE" },
        email: "tang_jingfan@sjtu.edu.cn",
        expertise: [
          { zh: "学业规划", en: "Academic planning" },
          { zh: "科研入门", en: "Getting started with research" },
          { zh: "时间管理", en: "Time management" },
        ],
        bio: {
          zh: "无法忘记纽约的美食",
          en: "Still dreaming about the food in New York.",
        },
      },
      {
        name: "耿子聪",
        role: { zh: "大三 ECE+Math+CS 专业", en: "Junior, ECE + Math + CS" },
        email: "gozica-sj@sjtu.edu.cn",
        expertise: [
          { zh: "选课规划", en: "Course selection planning" },
          { zh: "学生工作", en: "Student work" },
          { zh: "随机闲聊", en: "Random chats" },
        ],
        bio: {
          zh: "追求完美的摸鱼摆烂人",
          en: "A perfectionist who also excels at doing nothing.",
        },
      },
      {
        name: "李一爱",
        role: { zh: "大三 ECE 专业", en: "Junior, ECE" },
        email: "liyiai666@sjtu.edu.cn",
        expertise: [
          { zh: "学业规划", en: "Academic planning" },
          { zh: "闲聊", en: "Casual chat" },
        ],
        bio: {
          zh: "想去北京",
          en: "Wants to go to Beijing.",
        },
      },
      {
        name: "丁越桐",
        role: { zh: "大三 ECE+ME 专业", en: "Junior, ECE + ME" },
        email: "amagerd1113@sjtu.edu.cn",
        expertise: [
          { zh: "学业规划", en: "Academic planning" },
        ],
        bio: {
          zh: "我是丁越桐",
          en: "I am Ding Yuetong.",
        },
      },
      {
        name: "周恒毅",
        role: { zh: "大三 ME+CE 专业", en: "Junior, ME + CE" },
        email: "hengyizh@umich.edu",
        expertise: [
          { zh: "选课规划", en: "Course selection planning" },
          { zh: "科研规划", en: "Research planning" },
          { zh: "研究生申请规划", en: "Graduate application planning" },
        ],
        bio: {
          zh: "想再去首尔",
          en: "Wants to visit Seoul again.",
        },
      },
      {
        name: "卓予蔚",
        role: { zh: "大三 ECE+IOE 专业", en: "Junior, ECE + IOE" },
        email: "zhuo_yw@sjtu.edu.cn",
        expertise: [
          { zh: "选课规划", en: "Course selection planning" },
          { zh: "DD 后规划", en: "Post-DD planning" },
        ],
        bio: {
          zh: "逃离安娜堡，我要去温暖的地方",
          en: "Escaping Ann Arbor for somewhere warmer.",
        },
      },
      {
        name: "陈泽奕",
        role: { zh: "大三 ECE 专业", en: "Junior, ECE" },
        email: "marzich_44@sjtu.edu.cn",
        expertise: [
          { zh: "Non-DD 全方位", en: "Everything non-DD" },
        ],
        bio: {
          zh: "想去环球旅行",
          en: "Wants to travel around the world.",
        },
      },
      {
        name: "陆汶烨",
        role: { zh: "大三 ME+CS 专业", en: "Junior, ME + CS" },
        email: "wenyelu@umich.edu",
        expertise: [
          { zh: "学业规划", en: "Academic planning" },
          { zh: "文书写作", en: "Personal statement writing" },
        ],
        bio: {
          zh: "支持随机小窗闲聊",
          en: "Always open to a random chat.",
        },
      },
      {
        name: "吴羿辰",
        role: { zh: "大三 ECE 专业", en: "Junior, ECE" },
        email: "easonpxz@sjtu.edu.cn",
        expertise: [
          { zh: "选课规划", en: "Course selection planning" },
          { zh: "升学规划", en: "Further study planning" },
        ],
        bio: {
          zh: "GDP学长，AI越来越强了，害怕",
          en: "A GDP senior scared by how fast AI is advancing.",
        },
      },
      {
        name: "叶承嵘",
        role: { zh: "大三 ECE 专业", en: "Junior, ECE" },
        email: "yechengrong2005@sjtu.edu.cn",
        expertise: [
          { zh: "科研规划", en: "Research planning" },
          { zh: "AI 方向交流", en: "AI topics & discussion" },
        ],
        bio: {
          zh: "成为AI的奴隶",
          en: "Willingly enslaved to AI.",
        },
      },
      {
        name: "周冯铭",
        role: { zh: "大三 ECE 专业", en: "Junior, ECE" },
        email: "zhoufengming@sjtu.edu.cn",
        expertise: [
          { zh: "学生工作", en: "Student work" },
          { zh: "保研", en: "Guaranteed postgraduate admission" },
        ],
        bio: {
          zh: "不想上学的摆烂人",
          en: "A slacker who'd rather not go to school.",
        },
      },
      {
        name: "张浩然",
        role: { zh: "大四 ME+CS 专业", en: "Senior, ME + CS" },
        email: "zhhaoran@umich.edu",
        expertise: [
          { zh: "DD 申请", en: "Dual Degree program application" },
          { zh: "System / MLSys 科研 / PhD 申请", en: "System & MLSys research / PhD application" },
          { zh: "北美旅游", en: "Traveling in North America" },
        ],
        bio: {
          zh: "爱聊天的INTJ，爱旅游的博0",
          en: "A chatty INTJ and a travel-loving PhD year-zero.",
        },
      },
      {
        name: "王子睿",
        role: { zh: "大二 ECE+CE 专业", en: "Sophomore, ECE + CE" },
        email: "wzr0831@gmail.com",
        expertise: [
          { zh: "独立思考", en: "Independent thinking" },
          { zh: "创业入门", en: "Startup basics" },
        ],
        bio: {
          zh: "想在有限的时间内接触尽可能多的领域",
          en: "Trying to explore as many fields as possible.",
        },
      },
      {
        name: "陈洁仪",
        role: { zh: "大一 ECE 专业", en: "Freshman, ECE" },
        email: "annalysecc@sjtu.edu.cn",
        expertise: [
          { zh: "闲聊", en: "Casual chat" },
          { zh: "大一选课", en: "Freshman course selection" },
        ],
        bio: {
          zh: "ISTP摸鱼入",
          en: "An ISTP perfecting the art of doing nothing.",
        },
      },
      {
        name: "王敏茜",
        role: { zh: "大二 ECE+EE 专业", en: "Sophomore, ECE + EE" },
        email: "minqianw@umich.edu",
        expertise: [
          { zh: "选课规划", en: "Course selection planning" },
          { zh: "文书写作", en: "Personal statement writing" },
        ],
        bio: {
          zh: "什么都想尝试一下的INFJ",
          en: "An INFJ who wants to try everything.",
        },
      },
      {
        name: "张果然",
        role: { zh: "大二 ECE+CS 专业", en: "Sophomore, ECE + CS" },
        email: "tracyguoran09@sjtu.edu.cn",
        expertise: [
          { zh: "选课规划", en: "Course selection planning" },
          { zh: "学生工作", en: "Student work" },
        ],
        bio: {
          zh: "喜欢说走就走的旅行",
          en: "Loves spontaneous travel.",
        },
      },
      {
        name: "王子谦",
        role: { zh: "大二 ECE+CS 专业", en: "Sophomore, ECE + CS" },
        email: "ziqianww@umich.edu",
        expertise: [
          { zh: "AI 创业", en: "AI entrepreneurship" },
          { zh: "科研", en: "Research" },
          { zh: "生涯规划", en: "Career planning" },
        ],
        bio: {
          zh: "辍学创业中",
          en: "Currently dropping out to start a company.",
        },
      },
      {
        name: "陈文新",
        role: { zh: "大二 ECE+CS 专业", en: "Sophomore, ECE + CS" },
        email: "simonchen24@sjtu.edu.cn",
        expertise: [
          { zh: "科研", en: "Research" },
          { zh: "选课", en: "Course selection" },
          { zh: "托福备考 / DD 申请", en: "TOEFL prep & DD applications" },
        ],
        bio: {
          zh: "擅长摸鱼鉴赏美食",
          en: "Expert at slacking off and appreciating good food.",
        },
      },
      {
        name: "汤礼维",
        role: { zh: "大一 ECE 专业", en: "Freshman, ECE" },
        email: "tangliwei@sjtu.edu.cn",
        expertise: [
          { zh: "科研入门", en: "Getting started with research" },
          { zh: "大一选课", en: "Freshman course selection" },
        ],
        bio: {
          zh: "喜欢唠嗑，欢迎来聊天",
          en: "Loves chatting — come say hi.",
        },
      },
      {
        name: "倪银晨",
        role: { zh: "硕士研究生 CS 专业", en: "Master's student, CS" },
        email: "niyinchen@sjtu.edu.cn",
        expertise: [
          { zh: "System 方向科研", en: "Systems research" },
          { zh: "保研相关", en: "Guaranteed postgraduate admission" },
        ],
        bio: {
          zh: "昵称是小仓鼠",
          en: "Goes by Little Hamster.",
        },
      },
      {
        name: "王飞羽",
        role: { zh: "大二 ECE+CS 专业", en: "Sophomore, ECE + CS" },
        email: "feiyuwang@sjtu.edu.cn",
        expertise: [
          { zh: "选课规划", en: "Course selection planning" },
          { zh: "DD 申请", en: "Dual Degree program application" },
          { zh: "闲聊", en: "Casual chat" },
        ],
        bio: {
          zh: "矛盾纠结双子体质",
          en: "A walking contradiction with Gemini energy.",
        },
      },
      {
        name: "班雨桐",
        role: { zh: "助理教授 CS 方向", en: "Assistant Professor, CS" },
        email: "yban@sjtu.edu.cn",
        expertise: [
          { zh: "AI 相关", en: "AI topics" },
          { zh: "科研", en: "Research" },
        ],
        bio: {
          zh: "最近在研究Agentic workflow",
          en: "Currently researching agentic workflows.",
        },
      },
    ],
  },
 dutySchedule: {
  intro: {
    zh: "每周一到周四晚间值班，地点龙斌楼312。单双周人员不同，同一天同时有三位顾问在场。",
    en: "Duty runs Monday to Thursday evenings at LB312. Odd and even weeks have different advisors; three advisors are on duty each day.",
  },
  columns: [
    { zh: "日期", en: "Day" },
    { zh: "时间", en: "Time" },
    { zh: "单周顾问", en: "Odd-week Advisors" },
    { zh: "双周顾问", en: "Even-week Advisors" },
    { zh: "地点", en: "Location" },
  ],
  rows: [
    [
      { zh: "周一", en: "Monday" },
      "7:00-9:00 PM",
      "周冯铭 / 邵禹杰 / 丁越桐",
      "王敏茜 / 王子谦 / 吴羿辰",
      "龙斌楼 312",
    ],
    [
      { zh: "周二", en: "Tuesday" },
      "7:00-9:00 PM",
      "戴琤妍 / 倪银晨",
      "王子睿 / 陈文新 / 李一爱",
      "龙斌楼 312",
    ],
    [
      { zh: "周三", en: "Wednesday" },
      "7:00-9:00 PM",
      "王一敏 / 班雨桐 / 汤礼维",
      "叶承嵘",
      "龙斌楼 312",
    ],
    [
      { zh: "周四", en: "Thursday" },
      "7:00-9:00 PM",
      "唐璟帆 / 刘乐思 / 张浩然",
      "张果然 / 陈洁仪 / 王飞羽",
      "龙斌楼 312",
    ],
  ],
}, 
  piazza: {
    description: {
      zh: "Piazza 适合发布公告、整理可复用的问题解答，以及保留对整个课程社区都有帮助的讨论串。",
      en: "Use Piazza for announcements, reusable questions, and discussion threads that should stay visible to the whole course community.",
    },
    integrationNote: {
      zh: "这个静态网站目前没有直接接入 Piazza 的实时内容。如果以后你想自动同步更新，通常需要单独的后端服务或人工整理的 JSON 导出源。",
      en: "A live Piazza feed is not wired into this static site. If you want automatic updates later, the usual next step is a separate backend or a curated JSON export source.",
    },
    links: [
      {
        label: { zh: "打开 Piazza", en: "Open Piazza" },
        href: "https://piazza.com/class/l1hzqox6gb3293", 
        external: true,
        variant: "primary",
      },
      {
        label: { zh: "在数据文件中编辑 Piazza 说明", en: "Edit Piazza Notes In Data File" },
        href: "./content/site-content.js",
        external: false,
        variant: "ghost",
      },
    ],
    notes: [
      {
        title: { zh: "适合发在 Piazza 的内容", en: "What belongs on Piazza" },
        body: {
          zh: "适合发布那些答案可复用的问题、对资料的澄清，以及所有人都应该看到的公告。",
          en: "Use it for questions with reusable answers, clarifications on materials, and announcements that everyone should see.",
        },
      },
      {
        title: { zh: "建议的回复策略", en: "Suggested response policy" },
        body: {
          zh: "在条件允许的情况下尽量在一个工作日内回复；涉及隐私或个人问题时，建议转为邮件沟通。",
          en: "Reply within one business day when possible, and move sensitive or personal issues to email instead of public threads.",
        },
      },
      {
        title: { zh: "后续可能的自动化方案", en: "Possible future automation" },
        body: {
          zh: "如果以后你想在这里展示最新帖子，一个可行方案是用 serverless function 或人工审核后的导出数据来驱动这个页面。",
          en: "If you later want recent posts here, a practical option is to feed this page with a serverless function or manually reviewed export data.",
        },
      },
    ],
  },
};