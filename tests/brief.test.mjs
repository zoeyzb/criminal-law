import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createBrief} from '../src/brief.js';
import {matters} from '../src/content.js';

test('every download preserves its selected matter and all three checklist states',async()=>{
  for(const matter of matters){
    for(let mask=0;mask<8;mask++){
      const checked=[0,1,2].map(index=>Boolean(mask&(1<<index)));
      const state=checked.map(Number).join('');
      const text=await readFile(new URL(`../public/checklists/${matter.id}-${state}.txt`,import.meta.url),'utf8');
      assert.equal(text,createBrief(matter,checked));
      assert.match(text,new RegExp('Situation: '+matter.label));
      assert.equal(text.split('\n').filter(line=>line.startsWith('[x]')).length,checked.filter(Boolean).length);
      for(const note of matter.notes)assert.ok(text.includes(note));
      assert.ok(text.includes('not legal advice'));
    }
  }
});
