window.SITE_CONTENT = {
  site: {
    tagline: "Course Hub / Spring Term",
    title: "Course Information Hub",
    description:
      "This is a working first draft with the core sections for the duty schedule, Piazza, and advisor profiles. In most cases, you can update the whole page later just by editing this data file.",
  },
  heroMeta: [
    {
      label: "Term",
      value: "Spring 2026",
    },
    {
      label: "How To Edit",
      value: "Update the text directly in content/site-content.js.",
    },
    {
      label: "Deployment",
      value: "Ready for GitHub Pages with no build step required.",
    },
  ],
  quickLinks: [
    {
      title: "Duty Schedule",
      description: "See the office hour slots and assigned staff for each week.",
      href: "#dutySchedule",
      external: false,
    },
    {
      title: "Piazza",
      description: "Add the course discussion link, posting rules, and reply expectations.",
      href: "#piazzaInfo",
      external: false,
    },
    {
      title: "Advisor Profiles",
      description: "Show advisor bios, research interests, and contact details.",
      href: "#advisorList",
      external: false,
    },
    {
      title: "Course Home",
      description: "Replace this with the syllabus, Notion page, or official course website.",
      href: "https://example.com",
      external: true,
    },
  ],
  dutySchedule: [
    {
      week: "Weeks 1-2",
      slot: "Tuesday 7:00-8:30 PM",
      summary: "Example focus: course Q&A, environment setup, and assignment feedback.",
      people: ["Alice", "Bob"],
    },
    {
      week: "Weeks 3-4",
      slot: "Thursday 7:00-8:30 PM",
      summary: "Example focus: project check-ins and debugging support.",
      people: ["Carol", "David"],
    },
    {
      week: "Weeks 5-6",
      slot: "Sunday 2:00-3:30 PM",
      summary: "Example focus: exam review and office hour Q&A.",
      people: ["Eve", "Frank"],
    },
  ],
  piazza: [
    {
      title: "Discussion Board Access",
      badge: "Primary",
      description: "Put the Piazza link, access code, or joining instructions here.",
      tags: ["FAQ", "Assignment Discussion", "Announcements"],
    },
    {
      title: "Posting Guidelines",
      badge: "Guide",
      description: "For example: search before posting, use a clear title, format code blocks, and avoid posting direct answers.",
      tags: ["Search First", "Clear Titles", "Minimal Reproducible Example"],
    },
    {
      title: "Response Time",
      badge: "SLA",
      description: "For example: replies within 24 hours on weekdays, with course-related questions prioritized during exam periods.",
      tags: ["Weekday Replies", "Exam-Period Priority"],
    },
  ],
  advisors: [
    {
      name: "Prof. Jane Smith",
      role: "Faculty Advisor",
      bio: "Add the advisor bio here, including research interests, responsibilities, and the topics students can ask about.",
      link: "https://example.com",
      contacts: [
        { label: "jane.smith@example.edu", href: "mailto:jane.smith@example.edu" },
        { label: "Office: Room 301" },
      ],
    },
    {
      name: "Tom Lee",
      role: "Student Advisor",
      bio: "This is a good place for a student advisor background, strengths, and the kinds of support they usually provide.",
      link: "",
      contacts: [
        { label: "tom.lee@example.edu", href: "mailto:tom.lee@example.edu" },
        { label: "Office Hour: Fri 16:00-17:00" },
      ],
    },
    {
      name: "Ming Chen",
      role: "Research Advisor",
      bio: "You can use this section for lab direction, project context, or related resources connected to the course.",
      link: "https://example.com",
      contacts: [
        { label: "ming.chen@example.edu", href: "mailto:ming.chen@example.edu" },
        { label: "Lab Website", href: "https://example.com" },
      ],
    },
  ],
};
