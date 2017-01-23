'use strict'

function setColor (ctx, next){
  console.log('set color');
  $('button').css('background-color', '#' + ctx.params.color);
  $('form')[0].color.value = ctx.params.color;
  next();
}
function setRadius (ctx, next){
  $('button').css('border-radius', '#' + ctx.params.radius + 'px');
  $('form')[0].radius.value = ctx.params.radius
next();
}
function setPhrase (ctx){
  $('button').text(ctx.params.phrase);
  $('form')[0].phrase.value = ctx.params.phrase;

}

page('/:color/:radius?/:phrase?', setColor, setRadius, setPhrase);
$(function(){
  page();

  $('input').on('change', function(){
    let url = `/${$('form')[0].color.value}/${$('form')[0].radius.value}/${$('form')[0].phrase.value}`
    page.show(url)
  });
})
