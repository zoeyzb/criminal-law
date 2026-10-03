import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {filmScenes,compactStages,prepShots} from '../src/cinematic/story.js';
import {faqs} from '../src/content.js';

test('cinematic story stays concise and scene-driven',()=>{
  assert.equal(filmScenes.length,4);
  assert.equal(compactStages.length,3);
  assert.equal(prepShots.length,3);

  for(const scene of filmScenes){
    assert.ok(scene.title.split(/\s+/).length<=8,scene.id+' title is too long');
    assert.ok(scene.line.split(/\s+/).length<=7,scene.id+' support line is too long');
  }

  for(const stage of compactStages){
    assert.ok(stage.focus.split(/\s+/).length<=5,stage.id+' focus is too long');
    assert.ok(stage.bring.split(/\s+/).length<=6,stage.id+' bring is too long');
    assert.ok(stage.ask.split(/\s+/).length<=6,stage.id+' ask is too long');
  }

  for(const faq of faqs){
    assert.ok(faq.answer.split(/\s+/).length<=18,'FAQ answer is too long: '+faq.question);
  }
});

test('homepage renders cinematic components instead of legacy card sections',async()=>{
  const source=await readFile(new URL('../src/main.jsx',import.meta.url),'utf8');
  assert.match(source,/CinematicStory/);
  assert.match(source,/PreparationFilm/);
  assert.match(source,/CompactFaq/);
  assert.doesNotMatch(source,/PrinciplesSequence/);
  assert.doesNotMatch(source,/CaseStageDeck/);
  assert.doesNotMatch(source,/PreparationSequence/);
});
