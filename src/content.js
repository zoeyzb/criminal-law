export const matters = [
  {
    id: 'investigation', label: 'Under investigation', short: 'Before charges',
    title: 'Start with what is known.',
    text: 'A request for information, an interview, or a search can leave you with more questions than answers. A focused conversation starts with a clear account of what happened.',
    notes: ['A timeline of events and contact', 'Any notices or documents received', 'Questions you want to discuss'],
    question: 'What has happened so far, and what needs attention first?',
  },
  {
    id: 'charges', label: 'Facing criminal charges', short: 'After charges',
    title: 'Bring the details into focus.',
    text: 'Court paperwork, unfamiliar language, and upcoming dates can feel overwhelming. Keep the record together so your conversation can focus on the issues that matter.',
    notes: ['Court documents and case reference', 'Upcoming dates listed on your paperwork', 'Your priorities and questions'],
    question: 'What do the documents say, and what is the next scheduled event?',
  },
  {
    id: 'appeal', label: 'Review after a decision', short: 'After a decision',
    title: 'Understand the next conversation.',
    text: 'A decision can raise new questions. Gather the existing record and the dates associated with it before discussing whether further review is available.',
    notes: ['The judgment and relevant orders', 'Dates and correspondence', 'The existing case record'],
    question: 'What decision was made, and what would you like reviewed?',
  },
];
export const stages = [
  {id:'review',name:'Understand the record',text:'Connect the documents with your account of events. Identify gaps, questions, and the dates already on the calendar.'},
  {id:'strategy',name:'Discuss the options',text:'Ask about the available routes, uncertainty, timing, and costs. A useful conversation makes the choices easier to understand.'},
  {id:'representation',name:'Agree on the next step',text:'Clarify the scope of any representation, how communication will work, and who is responsible for each action.'},
];
export const essentials = ['Write a short timeline', 'Collect court notices and dates', 'List questions for an attorney'];
export const faqs = [
  {question:'What should I bring to an initial conversation?',answer:'Start with the paperwork you have, a short timeline, and your questions. The preparation checklist on this page helps you organize those items without submitting private information.'},
  {question:'Can I use this website to request representation?',answer:'This website is a demonstration of the Law Your Way identity. It does not receive case enquiries or connect you with an attorney. A real firm must confirm its identity, jurisdiction, and intake channel before offering representation.'},
  {question:'Does the checklist send my information anywhere?',answer:'No. Checklist selections are held in this page while it is open. The downloaded brief is a text file on your device. There is no case submission, account, or external storage.'},
  {question:'Will this tell me what to do in my case?',answer:'No. The content is a preparation aid, not advice about a specific case. Discuss your circumstances with a qualified attorney who can review the record and applicable law.'},
];
