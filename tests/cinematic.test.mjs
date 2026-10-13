import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {faqs} from '../src/content.js';

test('criminal-defense copy stays concise',()=>{
  for(const faq of faqs)assert.ok(faq.answer.split(/\s+/).length<=18,'FAQ answer is too long: '+faq.question);
});

test('site is genuinely multi-page',async()=>{
  const main=await readFile(new URL('../src/main.jsx',import.meta.url),'utf8');
  const header=await readFile(new URL('../src/components/SiteHeader.jsx',import.meta.url),'utf8');
  const pages=await readFile(new URL('../src/pages/SitePages.jsx',import.meta.url),'utf8');
  const vercel=await readFile(new URL('../vercel.json',import.meta.url),'utf8');
  for(const path of ['/practice-areas','/case-stages','/about','/questions','/contact']){
    assert.match(main,new RegExp(path.replace('/','\\/')));
    assert.match(header,new RegExp(path.replace('/','\\/')));
    assert.match(vercel,new RegExp(path.replace('/','\\/')));
  }
  assert.match(pages,/PracticeAreasPage/);
  assert.match(pages,/CaseStagesPage/);
  assert.match(pages,/AboutPage/);
  assert.match(pages,/QuestionsPage/);
  assert.match(pages,/ContactPage/);
});

test('home uses photographic foreground depth instead of a cartoon gavel',async()=>{
  const journey=await readFile(new URL('../src/cinematic/CriminalJourney.jsx',import.meta.url),'utf8');
  assert.match(journey,/hero-reference__object/);
  assert.match(journey,/5668481/);
  assert.doesNotMatch(journey,/HeroDepthScene/);
  assert.match(journey,/Experienced/);
  assert.match(journey,/Criminal Defense/);
  assert.match(journey,/When It Matters/);
  assert.match(journey,/practice-rail/);
});
