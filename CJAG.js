const classicAlbums = ['Miles Davis', 'Keith Jarret', 'Jan Garbarek', 
'Dizzie Gillespie', 'Jelly Roll Morton', 'Wayne Shorter'

]
const suggestion = ['Cool people', 'No one', 'Everyone', 'My dad', 'Weirdos', 'Idiots'

]
const verb = [' listens to ', ' avoids ', ' hates ', ' loves ', 
' dances while listening to ', ' enjoys a glass of whine and '

]
var randomNumber1 = Math.floor(Math.random() * 5)
var randomNumber2 = Math.floor(Math.random() * 5)
var randomNumber3 = Math.floor(Math.random() * 5)

console.log(suggestion[randomNumber1] + verb[randomNumber2] + classicAlbums[randomNumber3])