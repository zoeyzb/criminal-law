import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {faqs} from '../src/content.js';

test('criminal-defense copy stays concise',()=>{
  for(const faq of faqs){
    assert.ok(faq.answer.split(/\s+/).length<=18,'FAQ answer is too long: '+faq.question);
  }
});

test('homepage keeps one restrained 3d focal point and avoids cartoon law UI',async()=>{
  const main=await readFile(new URL('../src/main.jsx',import.meta.url),'utf8');
  const journey=await readFile(new URL('../src/cinematic/CriminalJourney.jsx',import.meta.url),'utf8');
  const hero=await readFile(new URL('../src/components/HeroDepthScene.jsx',import.meta.url),'utf8');
  const css=await readFile(new URL('../src/criminal.css',import.meta.url),'utf8');
  const motion=await readFile(new URL('../src/useMotion.js',import.meta.url),'utf8');

  assert.match(main,/CriminalJourney/);
  assert.match(journey,/hero-depth-scene-wrap/);
  assert.match(journey,/practice-rail/);
  assert.match(journey,/case-stage-editorial/);
  assert.match(journey,/Confidential/);
  assert.match(journey,/Strategic/);
  assert.match(journey,/Responsive/);

  assert.doesNotMatch(journey,/case-stage-plaque__icon/);
  assert.doesNotMatch(journey,/[⌕§▤◆]/);
  assert.doesNotMatch(journey,/Less noise/);

  assert.match(hero,/Canvas/);
  assert.match(hero,/Gavel/);
  assert.doesNotMatch(hero,/torusGeometry/);

  assert.match(css,/hero-depth-scene/);
  assert.match(css,/practice-rail/);
  assert.match(css,/case-stage-editorial/);
  assert.match(css,/perspective/);

  assert.match(motion,/master-courtroom__image/);
  assert.match(motion,/case-stage-editorial/);
  assert.match(motion,/glow-path/);
});
