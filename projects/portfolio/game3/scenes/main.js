layers(['obj', 'ui'], 'obj')

const map = [
  '                     ',
  '                     ',
  '                     ',
  '                     ',
  '                     ',
  '     ?       !       ',
  '                     ',
  '                     ',
  'xxxxxxxxxxxxxxxxxxxxx',
  ]

const levelCfg = {
  width: 20,
  height: 20,
  'x': [sprite('ground'), solid()],
  '*': [sprite('Panario')],
  '?': [sprite('question'), solid(), scale(0.8)],
  '!': [sprite('bikuri'), solid(), scale(0.8)],
}

addLevel(map, levelCfg)

const scoreLabel = add([
  text('0'),
  pos(30,6),
  layer('ui'),
  {
    value: '0',
  }
])

add([text('level ' + '0'), pos(40, 6)])

const player = add([
  sprite('Panario'), 
  pos(30,0),
  body()
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
