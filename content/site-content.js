const SITE_LANG_KEY = "SITE_LANG";
const DEFAULT_SITE_LANG = "zh";
const SUPPORTED_SITE_LANGUAGES = new Set(["zh", "en"]);
const PIAZZA_URL = "https://piazza.com/class/l1hzqox6gb3293";

const readStoredLanguage = () => {
  try {
    return localStorage.getItem(SITE_LANG_KEY);
  } catch {
    return null;
  }
};

const writeStoredLanguage = (lang) => {
  try {
    localStorage.setItem(SITE_LANG_KEY, lang);
  } catch {
    // Ignore storage failures and keep working with the in-memory value.
  }
};

const normalizeLanguage = (lang) => (
  SUPPORTED_SITE_LANGUAGES.has(lang) ? lang : DEFAULT_SITE_LANG
);

const getCurrentSiteLanguage = () => normalizeLanguage(readStoredLanguage());

const applyDocumentLanguage = () => {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.lang = getCurrentSiteLanguage() === "zh" ? "zh-CN" : "en";
};

if (!readStoredLanguage()) {
  writeStoredLanguage(DEFAULT_SITE_LANG);
}

applyDocumentLanguage();

function t(localizedObj) {
  if (!localizedObj) {
    return "";
  }

  if (typeof localizedObj !== "object") {
    return localizedObj;
  }

  const lang = getCurrentSiteLanguage();
  return localizedObj[lang] !== undefined ? localizedObj[lang] : localizedObj.zh;
}

window.SITE_LANGUAGE = {
  key: SITE_LANG_KEY,
  defaultLanguage: DEFAULT_SITE_LANG,
  getCurrentLanguage: getCurrentSiteLanguage,
  setCurrentLanguage(lang) {
    const previousLang = getCurrentSiteLanguage();
    const nextLang = normalizeLanguage(lang);
    writeStoredLanguage(nextLang);
    applyDocumentLanguage();
    if (typeof window !== "undefined" && previousLang !== nextLang) {
      window.dispatchEvent(new CustomEvent("site-language-change", {
        detail: { language: nextLang },
      }));
    }
    return nextLang;
  },
  toggleLanguage() {
    return this.setCurrentLanguage(getCurrentSiteLanguage() === "zh" ? "en" : "zh");
  },
  translate: t,
  isLocalizedValue(value) {
    return Boolean(value && typeof value === "object" && "zh" in value && "en" in value);
  },
};

window.toggleSiteLanguage = function toggleSiteLanguage() {
  return window.SITE_LANGUAGE.toggleLanguage();
};

window.SITE_CONTENT = {
  get languageToggle() {
    const currentLang = getCurrentSiteLanguage();
    return {
      label: currentLang === "zh" ? "English" : "中文",
      ariaLabel: currentLang === "zh" ? "Switch to English" : "切换到中文",
    };
  },
  get brand() {
    return {
      text: t({ zh: "学业分享中心", en: "GC Advising Center" }),
    };
  },
  get site() {
    return {
      tagline: "",
      title: t({ zh: "学业分享中心", en: "Academic Sharing Center" }),
      description: t({
        zh: "学业分享中心为同学提供学业交流与信息支持。",
        en: "The Academic Sharing Center provides academic support resources for students."
      })
    };
  },
  get navigation() {
    return [
      { id: "home", label: t({ zh: "首页", en: "Home" }), href: "./index.html" },
      { id: "materials", label: t({ zh: "资料", en: "Materials" }), href: "./materials.html" },
      { id: "advisors", label: t({ zh: "顾问", en: "Advisors" }), href: "./advisors.html" },
      { id: "schedule", label: t({ zh: "值班安排", en: "Duty Schedule" }), href: "./schedule.html" },
    ];
  },
  heroActions: [],
  get homeCards() {
    return [
      {
        kicker: "",
        title: t({ zh: "Workshop 存档", en: "Workshop Archive" }),
        body: "",
        cta: t({ zh: "打开资料页", en: "Open Materials" }),
        href: "./materials.html",
      },
      {
        kicker: "",
        title: t({ zh: "本周值班信息", en: "Weekly Duty Info" }),
        body: "",
        cta: t({ zh: "打开值班页", en: "Open Schedule" }),
        href: "./schedule.html",
      },
      {
        kicker: "",
        title: t({ zh: "Piazza 入口", en: "Piazza Access" }),
        body: "",
        cta: t({ zh: "打开 Piazza", en: "Open Piazza" }),
        href: PIAZZA_URL,
        external: true,
      },
    ];
  },
  get pages() {
    return {
      materials: {
        kicker: "",
        title: t({ zh: "往期工作坊资料", en: "Past Workshop Materials" }),
        description: "",
        sectionKicker: "",
        sectionTitle: "",
      },
      advisors: {
        kicker: "",
        title: t({ zh: "Advisor 介绍", en: "Advisor Profiles" }),
        description: "",
        sectionKicker: "",
        sectionTitle: "",
      },
      schedule: {
        kicker: "",
        title: t({ zh: "工作日晚间值班", en: "Weekday Evening Coverage" }),
        description: "",
        sectionKicker: "",
        sectionTitle: "",
      },
    };
  },
  get pastMaterials() {
    return {
      source: "./content/workshops.md",
      intro: "",
      pageLabel: "",
      pageHref: "./materials.html",
      loadError: {
        title: t({ zh: "资料加载失败", en: "Unable to Load Materials" }),
        body: t({
          zh: "当前无法读取 workshop Markdown 存档。请检查 content/workshops.md 是否存在，以及是否通过本地服务器或 GitHub Pages 访问页面。",
          en: "The workshop Markdown archive could not be read. Please make sure content/workshops.md exists and the site is being accessed through a local server or GitHub Pages."
        }),
      },
    };
  },
  get advisors() {
    return {
      expertiseLabel: t({ zh: "适合咨询", en: "Best for" }),
      groups: [
        {
          id: "faculty",
          title: t({ zh: "教师团队", en: "Faculty & Professors" }),
          items: [
            {
              name: "班雨桐",
              role: t({ zh: "助理教授 CS 方向", en: "Assistant Professor, CS" }),
              email: "yban@sjtu.edu.cn",
              expertise: [t({ zh: "AI 相关", en: "AI topics" }), t({ zh: "科研", en: "Research" })],
              bio: t({ zh: "最近在研究Agentic workflow", en: "Currently researching agentic workflows." }),
            },
          ],
        },
        {
          id: "senior",
          title: t({ zh: "大四及研究生", en: "Seniors & Postgraduates" }),
          items: [
            {
              name: "倪银晨",
              role: t({ zh: "硕士研究生 CS 专业", en: "Master's student, CS" }),
              email: "niyinchen@sjtu.edu.cn",
              expertise: [t({ zh: "System 方向科研", en: "Systems research" }), t({ zh: "保研相关", en: "Guaranteed postgraduate admission" })],
              bio: t({ zh: "昵称是小仓鼠", en: "Goes by Little Hamster." }),
            },
            {
              name: "郑千惠",
              role: t({ zh: "大四 ME+CS 专业", en: "Senior, ME + CS" }),
              email: "zhengqianhui@sjtu.edu.cn",
              expertise: [t({ zh: "选课规划", en: "Course selection planning" }), t({ zh: "DD 美研申请", en: "Dual Degree & US grad applications" })],
              bio: t({ zh: "外冷内热的INFJ", en: "An INFJ who seems cold on the outside but is warm-hearted on the inside." }),
            },
            {
              name: "杨瑞凯",
              role: t({ zh: "大四 ME+CS 专业", en: "Senior, ME + CS" }),
              email: "yang23@sjtu.edu.cn",
              expertise: [t({ zh: "DD 申请", en: "Dual Degree program application" }), t({ zh: "学业之外的规划", en: "Planning beyond academics" })],
              bio: t({ zh: "快来给我一个聊天摆烂的机会", en: "Come give me a chance to slack off in chat." }),
            },
            {
              name: "诸欣宜",
              role: t({ zh: "大四 ME+CS 专业", en: "Senior, ME + CS" }),
              email: "yiliazhu@sjtu.edu.cn",
              expertise: [t({ zh: "DD 美研申请", en: "Dual Degree & US grad applications" })],
              bio: t({ zh: "人机但是喜欢聊天的ISTJ", en: "A robotic ISTJ who loves chatting." }),
            },
            {
              name: "徐嘉秋",
              role: t({ zh: "大四 ECE 专业", en: "Senior, ECE" }),
              email: "xujiaqiu0913@sjtu.edu.cn",
              expertise: [t({ zh: "PhD 申请", en: "PhD application" }), t({ zh: "硬件 / 物理 / 半导体", en: "Hardware, physics & semiconductors" }), t({ zh: "交换项目", en: "Exchange programs" })],
              bio: t({ zh: "转行物理的电子工程师", en: "An electronics engineer who switched to physics." }),
            },
            {
              name: "孙少天",
              role: t({ zh: "大四 ECE+Math 专业", en: "Senior, ECE + Math" }),
              email: "22-sst@sjtu.edu.cn",
              expertise: [t({ zh: "DD 申请", en: "Dual Degree program application" }), t({ zh: "文书写作", en: "Personal statement writing" })],
              bio: t({ zh: "快来找我唠嗑", en: "Come chat with me anytime." }),
            },
            {
              name: "李嘉文",
              role: t({ zh: "大四 ME+DS 专业", en: "Senior, ME + DS" }),
              email: "lijiawen@umich.edu",
              expertise: [t({ zh: "HCI 科研", en: "HCI research" }), t({ zh: "博士申请", en: "PhD application" }), t({ zh: "美国生活", en: "Surviving in the US" })],
              bio: t({ zh: "2年半玄学算命经验，欢迎来算命", en: "2.5 years of fortune-telling experience — come get your future read." }),
            },
            {
              name: "韩易真",
              role: t({ zh: "大四 ME+IOE 专业", en: "Senior, ME + IOE" }),
              email: "hyizhen@umich.edu",
              expertise: [t({ zh: "DD / 研究生申请", en: "DD & graduate applications" }), t({ zh: "美国 / 国内求职", en: "Job search in the US & China" })],
              bio: t({ zh: "常常摸鱼，速速躺平", en: "Often slacking off, always ready to lie flat." }),
            },
            {
              name: "王一敏",
              role: t({ zh: "大四 ME+DS 专业", en: "Senior, ME + DS" }),
              email: "wangyimin_claire@sjtu.edu.cn",
              expertise: [t({ zh: "DD 申请", en: "Dual Degree program application" }), t({ zh: "科研", en: "Research" }), t({ zh: "学业规划", en: "Academic planning" })],
              bio: t({ zh: "长时间待机，偶尔高能量的ENFP", en: "A low-key ENFP with occasional bursts of energy." }),
            },
            {
              name: "陈羿宏",
              role: t({ zh: "大四 ECE 专业", en: "Senior, ECE" }),
              email: "cyh1102@sjtu.edu.cn",
              expertise: [t({ zh: "量化实习", en: "Quantitative internships" }), t({ zh: "保研申请", en: "Guaranteed postgraduate admission" })],
              bio: t({ zh: "快让我毕业吧", en: "Please just let me graduate." }),
            },
            {
              name: "邵禹杰",
              role: t({ zh: "大四 ECE 专业", en: "Senior, ECE" }),
              email: "shaox3@sjtu.edu.cn",
              expertise: [t({ zh: "GDP 申请", en: "GDP program application" }), t({ zh: "学业规划", en: "Academic planning" }), t({ zh: "科研 / 国内推免", en: "Research & domestic postgrad recommendation" })],
              bio: t({ zh: "舒服", en: "Just chillin'." }),
            },
            {
              name: "张轶凡",
              role: t({ zh: "大四 ECE 专业", en: "Senior, ECE" }),
              email: "zhangyf2022@sjtu.edu.cn",
              expertise: [t({ zh: "GDP 申请（USC）", en: "GDP application (USC)" })],
              bio: t({ zh: "在LA学习西海岸文化", en: "Soaking up West Coast culture in LA." }),
            },
            {
              name: "张浩然",
              role: t({ zh: "大四 ME+CS 专业", en: "Senior, ME + CS" }),
              email: "zhhaoran@umich.edu",
              expertise: [t({ zh: "DD 申请", en: "Dual Degree program application" }), t({ zh: "System / MLSys 科研 / PhD 申请", en: "System & MLSys research / PhD application" }), t({ zh: "北美旅游", en: "Traveling in North America" })],
              bio: t({ zh: "爱聊天的INTJ，爱旅游的博0", en: "A chatty INTJ and a travel-loving PhD year-zero." }),
            },
          ],
        },
        {
          id: "junior",
          title: t({ zh: "大三", en: "Juniors" }),
          items: [
            {
              name: "吴浩洋",
              role: t({ zh: "大三 ME+CS 专业", en: "Junior, ME + CS" }),
              email: "william-wu@sjtu.edu.cn",
              expertise: [t({ zh: "学业规划", en: "Academic planning" }), t({ zh: "DD 申请", en: "Dual Degree program application" })],
              bio: t({ zh: "想要加州的天气和纽约的大平层", en: "Dreaming of California weather and a NYC penthouse." }),
            },
            {
              name: "唐璟帆",
              role: t({ zh: "大三 ECE 专业", en: "Junior, ECE" }),
              email: "tang_jingfan@sjtu.edu.cn",
              expertise: [t({ zh: "学业规划", en: "Academic planning" }), t({ zh: "科研入门", en: "Getting started with research" }), t({ zh: "时间管理", en: "Time management" })],
              bio: t({ zh: "无法忘记纽约的美食", en: "Still dreaming about the food in New York." }),
            },
            {
              name: "耿子聪",
              role: t({ zh: "大三 ECE+Math+CS 专业", en: "Junior, ECE + Math + CS" }),
              email: "gozica-sj@sjtu.edu.cn",
              expertise: [t({ zh: "选课规划", en: "Course selection planning" }), t({ zh: "学生工作", en: "Student work" }), t({ zh: "随机闲聊", en: "Random chats" })],
              bio: t({ zh: "追求完美的摸鱼摆烂人", en: "A perfectionist who also excels at doing nothing." }),
            },
            {
              name: "李一爱",
              role: t({ zh: "大三 ECE 专业", en: "Junior, ECE" }),
              email: "liyiai666@sjtu.edu.cn",
              expertise: [t({ zh: "学业规划", en: "Academic planning" }), t({ zh: "闲聊", en: "Casual chat" })],
              bio: t({ zh: "想去北京", en: "Wants to go to Beijing." }),
            },
            {
              name: "丁越桐",
              role: t({ zh: "大三 ECE+ME 专业", en: "Junior, ECE + ME" }),
              email: "amagerd1113@sjtu.edu.cn",
              expertise: [t({ zh: "学业规划", en: "Academic planning" })],
              bio: t({ zh: "我是丁越桐", en: "I am Ding Yuetong." }),
            },
            {
              name: "周恒毅",
              role: t({ zh: "大三 ME+CE 专业", en: "Junior, ME + CE" }),
              email: "hengyizh@umich.edu",
              expertise: [t({ zh: "选课规划", en: "Course selection planning" }), t({ zh: "科研规划", en: "Research planning" }), t({ zh: "研究生申请规划", en: "Graduate application planning" })],
              bio: t({ zh: "想再去首尔", en: "Wants to visit Seoul again." }),
            },
            {
              name: "卓予蔚",
              role: t({ zh: "大三 ECE+IOE 专业", en: "Junior, ECE + IOE" }),
              email: "zhuo_yw@sjtu.edu.cn",
              expertise: [t({ zh: "选课规划", en: "Course selection planning" }), t({ zh: "DD 后规划", en: "Post-DD planning" })],
              bio: t({ zh: "逃离安娜堡，我要去温暖的地方", en: "Escaping Ann Arbor for somewhere warmer." }),
            },
            {
              name: "陈泽奕",
              role: t({ zh: "大三 ECE 专业", en: "Junior, ECE" }),
              email: "marzich_44@sjtu.edu.cn",
              expertise: [t({ zh: "Non-DD 全方位", en: "Everything non-DD" })],
              bio: t({ zh: "想去环球旅行", en: "Wants to travel around the world." }),
            },
            {
              name: "陆汶烨",
              role: t({ zh: "大三 ME+CS 专业", en: "Junior, ME + CS" }),
              email: "wenyelu@umich.edu",
              expertise: [t({ zh: "学业规划", en: "Academic planning" }), t({ zh: "文书写作", en: "Personal statement writing" })],
              bio: t({ zh: "支持随机小窗闲聊", en: "Always open to a random chat." }),
            },
            {
              name: "吴羿辰",
              role: t({ zh: "大三 ECE 专业", en: "Junior, ECE" }),
              email: "easonpxz@sjtu.edu.cn",
              expertise: [t({ zh: "选课规划", en: "Course selection planning" }), t({ zh: "升学规划", en: "Further study planning" })],
              bio: t({ zh: "GDP学长，AI越来越强了，害怕", en: "A GDP senior scared by how fast AI is advancing." }),
            },
            {
              name: "叶承嵘",
              role: t({ zh: "大三 ECE 专业", en: "Junior, ECE" }),
              email: "yechengrong2005@sjtu.edu.cn",
              expertise: [t({ zh: "科研规划", en: "Research planning" }), t({ zh: "AI 方向交流", en: "AI topics & discussion" })],
              bio: t({ zh: "成为AI的奴隶", en: "Willingly enslaved to AI." }),
            },
            {
              name: "周冯铭",
              role: t({ zh: "大三 ECE 专业", en: "Junior, ECE" }),
              email: "zhoufengming@sjtu.edu.cn",
              expertise: [t({ zh: "学生工作", en: "Student work" }), t({ zh: "保研", en: "Guaranteed postgraduate admission" })],
              bio: t({ zh: "不想上学的摆烂人", en: "A slacker who'd rather not go to school." }),
            },
          ],
        },
        {
          id: "sophomore",
          title: t({ zh: "大二", en: "Sophomores" }),
          items: [
            {
              name: "戴琤妍",
              role: t({ zh: "大二 ECE 专业", en: "Sophomore, ECE" }),
              email: "cheryl_cy@sjtu.edu.cn",
              expertise: [t({ zh: "选课", en: "Course selection" }), t({ zh: "学生工作", en: "Student work" })],
              bio: t({ zh: "天马行空的人类观察员", en: "An imaginative human observer." }),
            },
            {
              name: "刘乐思",
              role: t({ zh: "大二 ECE 专业", en: "Sophomore, ECE" }),
              email: "alan-lls@sjtu.edu.cn",
              expertise: [t({ zh: "学业规划", en: "Academic planning" }), t({ zh: "保研相关", en: "Guaranteed postgraduate admission" })],
              bio: t({ zh: "喜欢计算机", en: "A CS enthusiast." }),
            },
            {
              name: "王子睿",
              role: t({ zh: "大二 ECE+CE 专业", en: "Sophomore, ECE + CE" }),
              email: "wzr0831@gmail.com",
              expertise: [t({ zh: "独立思考", en: "Independent thinking" }), t({ zh: "创业入门", en: "Startup basics" })],
              bio: t({ zh: "想在有限的时间内接触尽可能多的领域", en: "Trying to explore as many fields as possible." }),
            },
            {
              name: "王敏茜",
              role: t({ zh: "大二 ECE+EE 专业", en: "Sophomore, ECE + EE" }),
              email: "minqianw@umich.edu",
              expertise: [t({ zh: "选课规划", en: "Course selection planning" }), t({ zh: "文书写作", en: "Personal statement writing" })],
              bio: t({ zh: "什么都想尝试一下的INFJ", en: "An INFJ who wants to try everything." }),
            },
            {
              name: "张果然",
              role: t({ zh: "大二 ECE+CS 专业", en: "Sophomore, ECE + CS" }),
              email: "tracyguoran09@sjtu.edu.cn",
              expertise: [t({ zh: "选课规划", en: "Course selection planning" }), t({ zh: "学生工作", en: "Student work" })],
              bio: t({ zh: "喜欢说走就走的旅行", en: "Loves spontaneous travel." }),
            },
            {
              name: "王子谦",
              role: t({ zh: "大二 ECE+CS 专业", en: "Sophomore, ECE + CS" }),
              email: "ziqianww@umich.edu",
              expertise: [t({ zh: "AI 创业", en: "AI entrepreneurship" }), t({ zh: "科研", en: "Research" }), t({ zh: "生涯规划", en: "Career planning" })],
              bio: t({ zh: "辍学创业中", en: "Currently dropping out to start a company." }),
            },
            {
              name: "陈文新",
              role: t({ zh: "大二 ECE+CS 专业", en: "Sophomore, ECE + CS" }),
              email: "simonchen24@sjtu.edu.cn",
              expertise: [t({ zh: "科研", en: "Research" }), t({ zh: "选课", en: "Course selection" }), t({ zh: "托福备考 / DD 申请", en: "TOEFL prep & DD applications" })],
              bio: t({ zh: "擅长摸鱼鉴赏美食", en: "Expert at slacking off and appreciating good food." }),
            },
            {
              name: "王飞羽",
              role: t({ zh: "大二 ECE+CS 专业", en: "Sophomore, ECE + CS" }),
              email: "feiyuwang@sjtu.edu.cn",
              expertise: [t({ zh: "选课规划", en: "Course selection planning" }), t({ zh: "DD 申请", en: "Dual Degree program application" }), t({ zh: "闲聊", en: "Casual chat" })],
              bio: t({ zh: "矛盾纠结双子体质", en: "A walking contradiction with Gemini energy." }),
            },
          ],
        },
        {
          id: "freshman",
          title: t({ zh: "大一", en: "Freshmen" }),
          items: [
            {
              name: "陈洁仪",
              role: t({ zh: "大一 ECE 专业", en: "Freshman, ECE" }),
              email: "annalysecc@sjtu.edu.cn",
              expertise: [t({ zh: "闲聊", en: "Casual chat" }), t({ zh: "大一选课", en: "Freshman course selection" })],
              bio: t({ zh: "ISTP摸鱼入", en: "An ISTP perfecting the art of doing nothing." }),
            },
            {
              name: "汤礼维",
              role: t({ zh: "大一 ECE 专业", en: "Freshman, ECE" }),
              email: "tangliwei@sjtu.edu.cn",
              expertise: [t({ zh: "科研入门", en: "Getting started with research" }), t({ zh: "大一选课", en: "Freshman course selection" })],
              bio: t({ zh: "喜欢唠嗑，欢迎来聊天", en: "Loves chatting — come say hi." }),
            },
          ],
        },
      ],
    };
  },
  get dutySchedule() {
    return {
      intro: t({
        zh: "每周一到周四晚间值班，地点龙宾楼312。单双周人员不同，同一天同时有三位顾问在场。",
        en: "Duty runs Monday to Thursday evenings at LB312. Odd and even weeks have different advisors; three advisors are on duty each day."
      }),
      columns: [
        t({ zh: "日期", en: "Day" }),
        t({ zh: "时间", en: "Time" }),
        t({ zh: "单周顾问", en: "Odd-week Advisors" }),
        t({ zh: "双周顾问", en: "Even-week Advisors" }),
        t({ zh: "地点", en: "Location" }),
      ],
      rows: [
        [
          t({ zh: "周一", en: "Monday" }),
          "7:00-9:00 PM",
          "周冯铭 / 邵禹杰 / 丁越桐",
          "王敏茜 / 王子谦 / 吴羿辰",
          t({ zh: "龙宾楼 312", en: "LB 312" }),
        ],
        [
          t({ zh: "周二", en: "Tuesday" }),
          "7:00-9:00 PM",
          "戴琤妍 / 倪银晨",
          "王子睿 / 陈文新 / 李一爱",
          t({ zh: "龙宾楼 312", en: "LB 312" }),
        ],
        [
          t({ zh: "周三", en: "Wednesday" }),
          "7:00-9:00 PM",
          "王一敏 / 班雨桐 / 汤礼维",
          "叶承嵘 / 班雨桐",
          t({ zh: "龙宾楼 312", en: "LB 312" }),
        ],
        [
          t({ zh: "周四", en: "Thursday" }),
          "7:00-9:00 PM",
          "唐璟帆 / 刘乐思 / 张浩然",
          "张果然 / 陈洁仪 / 王飞羽",
          t({ zh: "龙宾楼 312", en: "LB 312" }),
        ],
      ],
    };
  },
};
