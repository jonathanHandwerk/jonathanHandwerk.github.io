layers(['obj', 'ui'], 'obj')

const map = [
  '                     ',
  '                     ',
  '                     ',
  '                     ',
  '                     ',
  '     ?   !    !       ',
  '                     ',
  '                     ',
  'xxxxxxxxxxxxxxxxxxxxx',
  ]

const levelCfg = {
  width: 20,
  height: 20,
  'x': [sprite('ground'), solid()],
  '*': [sprite('Panario')],
  '?': [sprite('question'), 'question-mark', solid(), scale(0.8)],
  '!': [sprite('bikuri'), 'hamburg-surprise', solid(), scale(0.8)],
  '%': [sprite('hamburg'), 'hamburg', body()],
  '+': [sprite('gyaku'), 'gyaku', body()],
}

const gameLevel = addLevel(map, levelCfg)

const scoreLabel = add([
  text('0'),
  pos(30,6),
  layer('ui'),
  {
    value: '0',
  }
])

add([text('level ' + '0'), pos(40, 6)])

function big() {
   let timer = 0
   let isBig = false
   return {
      update() {
          if (isBig) {
              timer -=dt ()
              if (timer <=0) {
	              this.smallify()
}
}
},
isBig() {
 return isBig
},
smallify() {
   this.scale = vec2(1)
   timer = 0
   isBig = false
},
biggify(time) {
   this.scale = vec2(1.5)
   timer = time
   isBig = true
}        
}
}



const player = add([
  sprite('Panario'), 
  pos(30,0),
  body(),
  big(),
  origin('bot')
]) 

const MOVE_SPEED = 90
const JUMP_FORCE = 200

keyDown('left', ()=> {
  player.move(-MOVE_SPEED, 0)
})
keyDown('right', ()=> {
  player.move(MOVE_SPEED, 0)
})
keyPress('space', ()=> {
  if(player.grounded())
  player.jump(JUMP_FORCE)
})
player.on('headbump', (obj) => {
  if(obj.is('hamburg-surprise')) {
    gameLevel.spawn('%', obj.gridPos.sub(0,1))
    
  }})

action('hamburg', (h)=> {
    h.move(20, 0)
})
player.collides('hamburg', (h) => {
  player.biggify(6)
  destroy(h)
})

