import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {faqs} from '../src/content.js';

test('criminal-defense copy stays concise',()=>{
  for(const faq of faqs){
    assert.ok(faq.answer.split(/\s+/).length<=18,'FAQ answer is too long: '+faq.question);
  }
});

test('homepage follows the approved luxury-law visual structure',async()=>{
  const journey=await readFile(new URL('../src/cinematic/CriminalJourney.jsx',import.meta.url),'utf8');
  const hero=await readFile(new URL('../src/components/HeroDepthScene.jsx',import.meta.url),'utf8');
  const css=await readFile(new URL('../src/criminal.css',import.meta.url),'utf8');
  const header=await readFile(new URL('../src/components/SiteHeader.jsx',import.meta.url),'utf8');

  assert.match(journey,/hero-reference/);
  assert.match(journey,/Experienced/);
  assert.match(journey,/Criminal Defense/);
  assert.match(journey,/When It Matters/);
  assert.match(journey,/practice-rail/);
  assert.match(journey,/trust-story/);
  assert.match(journey,/case-story/);
  assert.match(journey,/approach-story/);
  assert.match(journey,/counsel-story/);
  assert.match(journey,/faq-story/);

  assert.doesNotMatch(journey,/case-stage-plaque/);
  assert.doesNotMatch(journey,/Less noise/);
  assert.doesNotMatch(journey,/[⌕§▤◆]/);

  assert.match(hero,/Canvas/);
  assert.match(hero,/Gavel/);

  assert.match(header,/Free Consultation/);
  assert.match(css,/hero-reference/);
  assert.match(css,/practice-rail/);
  assert.match(css,/case-story__panel/);
  assert.match(css,/approach-story/);
});
