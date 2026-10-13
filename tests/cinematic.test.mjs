import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {faqs} from '../src/content.js';

test('criminal-defense copy stays concise',()=>{
  for(const faq of faqs){
    assert.ok(faq.answer.split(/\s+/).length<=18,'FAQ answer is too long: '+faq.question);
  }
});

test('homepage uses a trust-first cinematic legal system',async()=>{
  const main=await readFile(new URL('../src/main.jsx',import.meta.url),'utf8');
  const journey=await readFile(new URL('../src/cinematic/CriminalJourney.jsx',import.meta.url),'utf8');
  const hero=await readFile(new URL('../src/components/HeroDepthScene.jsx',import.meta.url),'utf8');
  const css=await readFile(new URL('../src/criminal.css',import.meta.url),'utf8');
  const motion=await readFile(new URL('../src/useMotion.js',import.meta.url),'utf8');

  assert.match(main,/CriminalJourney/);
  assert.match(journey,/hero-depth-scene/);
  assert.match(journey,/trust-strip/);
  assert.match(journey,/practice-grid/);
  assert.match(journey,/case-stage-plaque/);
  assert.match(journey,/Confidential & Discreet/);
  assert.match(journey,/Strategic Advocacy/);
  assert.match(journey,/Client-Focused/);
  assert.doesNotMatch(journey,/Less noise/);

  assert.match(hero,/Canvas/);
  assert.match(hero,/Gavel/);
  assert.match(hero,/frameloop/);

  assert.match(css,/glow-path/);
  assert.match(css,/case-stage-plaque/);
  assert.match(css,/hero-depth-scene/);
  assert.match(css,/perspective/);

  assert.match(motion,/master-courtroom__image/);
  assert.match(motion,/case-stage-plaque/);
  assert.match(motion,/glow-path/);
});
