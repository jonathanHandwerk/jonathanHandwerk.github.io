const MOVE_SPEED = 90
const JUMP_FORCE = 400
let CURRENT_JUMP_FORCE = JUMP_FORCE
const BIG_JUMP = 500
const ENEMY_SPEED = 30
let isJumping = true 
const FALL_DEATH = 600

layers(['obj', 'ui'], 'obj')
const maps = [
[
  '                     ',
  '                     ',
  '                     ',
  '                     ',
  '                     ',
  '     ?   !    !       ',
  '                      ',
  '         -     -                   @ ',
  '   xxxxxxxxxxxxxxxxxxxxx       xxxxxxx',
  '                      ',
  ' @                     ',
  'xxxx                      xxxx',
 
], 
[
  '                     ',
  '                     ',
  '                     ',
  '                     ',
  '                     ',
  '     ?   !    !       ',
  '                      ',
  '         -     -                   @ ',
  '   xxxxxxxxxxxxxxxxxxxxx       xxxxxxx',
  '                      ',
  ' @                     ',
  'xxxx                      xxxx',
]
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
  '-': [sprite('gokiburi'), 'goki', body(), solid(), 'dangerous', scale(0.15)],
  '@': [sprite('ramen'), body(), solid(),'ramen',]
}

const levelIndex = args.level ?? 0 
const gameLevel = addLevel(maps[levelIndex], levelCfg)
// const gameLevel = addLevel(maps[0], levelCfg)

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
  isJumping = true
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

player.collides('dangerous', (d) => {
if(isJumping) {
destroy(d)
} else {
go('lose', {score: scoreLabel.value})
}})

player.action(() => {
  if(player.grounded()) {
    isJumping = false
  }
})

player.action(() => {
camPos(player.pos)
if(player.pos.y >= FALL_DEATH) {
  go('lose', {score: scoreLabel.value})
  }
})

player.collides('ramen', () => {
  keyPress  ('down', () => {
    go('main', {
      level: (levelIndex +1)　% maps.length,
      score: scoreLabel.value
    })
  })
})
