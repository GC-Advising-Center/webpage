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
        name: "Prof. Jane Smith",
        role: { zh: "教师顾问", en: "Faculty Advisor" },
        email: "jane.smith@example.edu",
        expertise: [
          { zh: "研究方向", en: "Research direction" },
          { zh: "研究生申请", en: "Graduate applications" },
          { zh: "联系 Faculty", en: "Faculty outreach" },
        ],
        bio: {
          zh: "Jane 主要帮助学生梳理长期学术规划、聚焦研究兴趣，并为联系 faculty 做准备。",
          en: "Jane helps students shape long-term academic plans, narrow research interests, and prepare for faculty communication.",
        },
      },
      {
        name: "Tom Lee",
        role: { zh: "学生顾问", en: "Student Advisor" },
        email: "tom.lee@example.edu",
        expertise: [
          { zh: "选课规划", en: "Course planning" },
          { zh: "同伴辅导", en: "Peer mentoring" },
          { zh: "时间管理", en: "Time management" },
        ],
        bio: {
          zh: "Tom 更关注学生日常咨询问题，包括课程负担平衡、学习习惯和日常规划。",
          en: "Tom focuses on student-facing advising questions, including course load balance, study routines, and day-to-day planning.",
        },
      },
      {
        name: "Ming Chen",
        role: { zh: "科研顾问", en: "Research Advisor" },
        email: "ming.chen@example.edu",
        expertise: [
          { zh: "实验室匹配", en: "Lab matching" },
          { zh: "项目范围设计", en: "Project scoping" },
          { zh: "技术准备", en: "Technical preparation" },
        ],
        bio: {
          zh: "Ming 主要支持学生探索实验室方向、梳理项目想法，并为与 Advisor 会面做技术准备。",
          en: "Ming supports students who are exploring research labs, shaping project ideas, and preparing technically for advisor meetings.",
        },
      },
    ],
  },
  dutySchedule: {
    intro: {
      zh: "这里展示当前工作日晚间值班安排，帮助学生快速查看今天或本周该联系谁。",
      en: "This table shows the current weekday evening duty schedule so students can quickly see who is available this week.",
    },
    columns: [
      { zh: "日期", en: "Day" },
      { zh: "时间", en: "Time" },
      { zh: "值班顾问", en: "Advisor" },
      { zh: "地点", en: "Location" },
      { zh: "重点内容", en: "Focus" },
    ],
    rows: [
      [
        { zh: "周一", en: "Monday" },
        "7:00-9:00 PM",
        "Jane Smith",
        { zh: "301 教室 / Zoom", en: "Room 301 / Zoom" },
        { zh: "研究规划与 Advisor 匹配", en: "Research planning and advisor matching" },
      ],
      [
        { zh: "周二", en: "Tuesday" },
        "7:00-9:00 PM",
        "Tom Lee",
        { zh: "学生共享空间", en: "Student Commons" },
        { zh: "选课规划与学生常见问题", en: "Course planning and student questions" },
      ],
      [
        { zh: "周三", en: "Wednesday" },
        "7:00-9:00 PM",
        "Ming Chen",
        { zh: "实验室休息区", en: "Lab Lounge" },
        { zh: "项目范围设计与技术准备", en: "Project scoping and technical prep" },
      ],
      [
        { zh: "周四", en: "Thursday" },
        "7:00-9:00 PM",
        "Jane Smith + Tom Lee",
        { zh: "301 教室", en: "Room 301" },
        { zh: "申请、CV 与 office hour 补充答疑", en: "Applications, CVs, and office-hour overflow" },
      ],
      [
        { zh: "周五", en: "Friday" },
        "7:00-9:00 PM",
        { zh: "轮值团队", en: "Rotating Team" },
        "Zoom",
        { zh: "开放咨询与后续问题跟进", en: "Open advising and follow-up questions" },
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
        href: "https://piazza.com",
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


