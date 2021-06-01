
const moveSpeed = 100
const player = add([
  sprite('helloBobby'),
  scale(0.7),
  pos(20, 20),
  body()
])

keyDown('right', () => {
  player.move(moveSpeed, 0)
})
keyDown('left', () => {
  player.move(-moveSpeed, 0)
})

addLevel([
  '     ',
  '     ',
  '    @ ',
  'xxxxxxx',
  ], {
   width: 40,
   height: 40,
   'x' : [sprite('ground'), solid()],
   '@' : [sprite('enemy'), scale(1.5), 'dangerous']
  })

  player.collides('dangerous', () => {
    destroy(player)
  })