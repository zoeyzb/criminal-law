import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {faqs} from '../src/content.js';

test('criminal-defense copy stays concise',()=>{
  for(const faq of faqs){
    assert.ok(faq.answer.split(/\s+/).length<=18,'FAQ answer is too long: '+faq.question);
  }
});

test('homepage uses one continuous courtroom journey, not legacy slide/card sections',async()=>{
  const main=await readFile(new URL('../src/main.jsx',import.meta.url),'utf8');
  const journey=await readFile(new URL('../src/cinematic/CriminalJourney.jsx',import.meta.url),'utf8');
  const css=await readFile(new URL('../src/criminal.css',import.meta.url),'utf8');
  const motion=await readFile(new URL('../src/useMotion.js',import.meta.url),'utf8');

  assert.match(main,/CriminalJourney/);
  assert.doesNotMatch(main,/CinematicStory/);
  assert.doesNotMatch(main,/PreparationFilm/);
  assert.doesNotMatch(main,/CompactFaq/);

  assert.match(journey,/journey-chapter--hero/);
  assert.match(journey,/case-timeline/);
  assert.match(journey,/Build the case record\./);
  assert.match(journey,/Understand the defense\./);
  assert.doesNotMatch(journey,/Less noise/);

  assert.match(css,/master-courtroom__image/);
  assert.match(css,/chapter-photo/);
  assert.match(css,/case-timeline/);
  assert.doesNotMatch(css,/film-stages__grid/);

  assert.match(motion,/Push deeper, hold, then push again/);
  assert.match(motion,/scale:1\.29/);
});
