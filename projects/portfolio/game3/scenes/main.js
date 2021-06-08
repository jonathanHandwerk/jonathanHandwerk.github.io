const MOVE_SPEED = 90
const JUMP_FORCE = 200
let CURRENT_JUMP_FORCE = JUMP_FORCE
const BIG_JUMP = 500
const ENEMY_SPEED = 30
layers(['obj', 'ui'], 'obj')

const map = [
  '                     ',
  '                     ',
  '                     ',
  '                     ',
  '                     ',
  '     ?   !    !       ',
  '                      ',
  '         -     -      ',
  'xxxxxxxxxxxxxxxxxxxxx',
  ]

const levelCfg = {
  width: 20,
  height: 20,
  'x': [sprite('ground'), solid()],
  '*': [sprite('Panario')],
  '?': [sprite('question'), 'gyaku-surprise', solid(), scale(0.8)],
  '!': [sprite('bikuri'), 'hamburg-surprise', solid(), scale(0.8)],
  '%': [sprite('hamburg'), 'hamburg', body()],
  '+': [sprite('gyaku'), 'gyaku', body(), scale(0.7)],
  '-': [sprite('gokiburi'), 'goki', solid(), 'dangerous', scale(0.2)],
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
   CURRENT_JUMP_FORCE = JUMP_FORCE
},
biggify(time) {
   this.scale = vec2(1.5)
   timer = time
   isBig = true
   CURRENT_JUMP_FORCE = BIG_JUMP
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

keyDown('left', ()=> {
  player.move(-MOVE_SPEED, 0)
})
keyDown('right', ()=> {
  player.move(MOVE_SPEED, 0)
})
keyPress('space', ()=> {
  if(player.grounded())
  player.jump(CURRENT_JUMP_FORCE)
})
player.on('headbump', (obj) => {
  if(obj.is('hamburg-surprise')) {
    gameLevel.spawn('%', obj.gridPos.sub(0,1))
  }
  if(obj.is('gyaku-surprise')) {
    gameLevel.spawn('+', obj.gridPos.sub(0,1))
  }})
  

action('hamburg', (h)=> {
    h.move(20, 0)
})
action('gyaku', (g)=> {
    g.move(20, 0)
})
player.collides('hamburg', (h) => {
  player.biggify(6)
  destroy(h)
})

player.collides('gyaku', (g) => {
  scoreLabel.value++
  scoreLabel.text = scoreLabel.value
  destroy(g)
})

action('dangerous', (d) => {
  d.move(-ENEMY_SPEED,0)
})

