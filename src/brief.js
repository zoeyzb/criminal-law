import {essentials} from './content.js';
export function createBrief(matter, checked) {
  return [
    'LAW YOUR WAY | CONVERSATION CHECKLIST',
    'Situation: ' + matter.label,
    '',
    'Preparation',
    ...essentials.map((item, i) => `${checked[i] ? '[x]' : '[ ]'} ${item}`),
    '',
    'Documents to organize',
    ...matter.notes.map(item => '- ' + item),
    '',
    'A question to start with',
    matter.question,
    '',
    'Keep private documents on your device until a verified firm confirms a secure intake channel.',
    'Law Your Way is a demonstration identity. This checklist is not legal advice and does not create an attorney-client relationship.',
  ].join('\n');
}
