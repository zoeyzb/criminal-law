import {mkdir,writeFile} from 'node:fs/promises';
import {matters} from '../src/content.js';
import {createBrief} from '../src/brief.js';
const directory=new URL('../public/checklists/',import.meta.url);
await mkdir(directory,{recursive:true});
for(const matter of matters){
  for(let mask=0;mask<8;mask++){
    const checked=[0,1,2].map(index=>Boolean(mask&(1<<index)));
    const state=checked.map(value=>Number(value)).join('');
    await writeFile(new URL(`${matter.id}-${state}.txt`,directory),createBrief(matter,checked));
  }
}
