const classicAlbums = ['Miles Davis', 'Keith Jarret', 'Jan Garbarek', 
'Dizzie Gillespie', 'Jelly Roll Morton', 'Wayne Shorter'

]
const suggestion = ['Cool people', 'No one', 'Everyone', 'My dad', 'Weirdos', 'Idiots'

]
const verb = [' listens to ', ' avoids ', ' hates ', ' loves ', 
' dances while listening to ', ' enjoys a glass of whine and '

]
var randomAlbumNumber = Math.floor(Math.random() * 5)
var randomSuggestionNumber = Math.floor(Math.random() * 5)
var randomVerbNumber = Math.floor(Math.random() * 5)

console.log(suggestion[randomSuggestionNumber] + verb[randomVerbNumber] + classicAlbums[randomAlbumNumber])