const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const superheroes = {
    'captain america': {
    'originalMCUAppearance': 'Captain America: The First Avenger',
    'name': 'Steve Rodgers',
    'numberOfMovies' : 11,
    'latestAppearance': 'Avengers: EndGame'
    },
    'iron man':{
     'originalMCUAppearance': 'Iron Man',
     'name': 'Tony Stark',
     'numberOfMovies' : 9,
     'latestAppearance': 'Avengers: EndGame'
    },
    'black widow':{
        'originalMCUAppearance': 'Iron Man 2',
        'name': 'Natasha Romonova',
        'numberOfMovies' : 8,
        'latestAppearance': 'Avengers: EndGame'
    },
    'the hulk':{
        'originalMCUAppearance': 'The Incredible Hulk',
        'name': 'Bruce Banner',
        'numberOfMovies' : 9,
        'latestAppearance': 'Shang-Chi and the Legend Of The Ten Rings [Post Credit]'
    },
    'hawkeye':{
        'originalMCUAppearance': 'Thor',
        'name': 'Clint Barton',
        'numberOfMovies' : 6,
        'latestAppearance': 'Hawkeye [Disney+ Series]'
    },
    'thor':{
        'originalMCUAppearance': 'Thor',
        'name': 'Thor Odinson',
        'numberOfMovies' : 8,
        'latestAppearance': 'Thor: Love & Thunder'
    },
    'star-lord':{
        'originalMCUAppearance': 'Guardians Of The Galaxy',
        'name': 'Peter Quill',
        'numberOfMovies': 5,
        'latestAppearance': 'Thor: Love & Thunder'
    },
    'rocket':{
        'originalMCUAppearance': 'Guardians Of The Galaxy',
        'name': 'Rocket Raccoon',
        'numberOfMovies': 5,
        'latestAppearance': 'Thor: Love & Thunder'
    },
    'groot':{
        'originalMCUAppearance': 'Guardians Of The Galaxy',
        'name': 'Groot',
        'numberOfMovies': 5,
        'latestAppearance': 'Thor: Love & Thunder'
    },
    'captain marvel':{
        'originalMCUAppearance': 'Captain Marvel',
        'name': 'Carol Danvers',
        'numberOfMovies': 4,
        'latestAppearance': 'Ms. Marvel [Post Credit]'
    },
    'ant-man':{
        'originalMCUAppearance': 'AntMan',
        'name': 'Scott Lang',
        'numberOfMovies': 4,
        'latestAppearance': 'Avengers: EndGame'
    },
    'drax':{
        'originalMCUAppearance': 'Guardians Of The Galaxy',
        'name': 'Drax The Destroyer',
        'numberOfMovies': 5,
        'latestAppearance': 'Thor: Love & Thunder'
    },
    'gamora':{
        'originalMCUAppearance': 'Guardians Of The Galaxy',
        'name': 'Gamora',
        'numberOfMovies': 5,
        'latestAppearance': 'Thor: Love & Thunder'
    },
    'the wasp':{
        'originalMCUAppearance': 'AntMan and The Wasp',
        'name': 'Hope Van Dyne',
        'numberOfMovies': 2,
        'latestAppearance': 'Avengers: EndGame'
    },
    'dr.strange':{
        'originalMCUAppearance': 'Dr. Strange ',
        'name': 'Steven Strange',
        'numberOfMovies': 6,
        'latestAppearance': 'Dr. Strange in the Multiverse of Madness'
    },
    'spider-man':{
        'originalMCUAppearance': 'Captain America: Civil War',
        'name': 'Peter Parker',
        'numberOfMovies': 6,
        'latestAppearance': 'SpiderMan: No Way Home'
    },
    'black panther':{
        'originalMCUAppearance': 'Captain America: Civil War',
        'name': "T'Challa",
        'numberOfMovies': 4,
        'latestAppearance': 'Avengers: EndGame'
    },
    'scarlet witch':{
        'originalMCUAppearance': 'Captain America: Winter Soldier [Post Credit]',
        'name': 'Wanda Maximoff',
        'numberOfMovies': 6,
        'latestAppearance': 'Dr. Strange in the Multiverse of Madness'
    },
    'vision':{
        'originalMCUAppearance': 'Avengers: Age Of Ultron',
        'name': 'Vision',
        'numberOfMovies': 4,
        'latestAppearance': 'WandaVision [Disney+ Series]'
    },
    'unknown':{
            'originalMCUAppearance': 'Unknown',
            'name': 'Unknown',
            'numberOfMovies': 0,
            'latestAppearance': 'Unknown'
    },
    'nebula':{
        'originalMCUAppearance': 'Guardians Of The Galaxy',
        'name': 'Nebula',
        'numberOfMovies': 5,
        'latestAppearance': 'Thor: Love & Thunder'
    },
    'mantis':{
        'originalMCUAppearance': 'Guardians Of The Galaxy Vol. 2',
        'name': 'Nebula',
        'numberOfMovies': 5,
        'latestAppearance': 'Thor: Love & Thunder'
    },
    'wong':{
        'originalMCUAppearance': 'Dr. Strange',
        'name': 'Wong',
        'numberOfMovies': 6,
        'latestAppearance': 'Dr. Strange in the Multiverse Of Madness'
    },
    'winter soldier':{
        'originalMCUAppearance': 'Captain America: The Winter Soldier',
        'name': 'Bucky Barnes',
        'numberOfMovies': 8,
        'latestAppearance': 'Falcon and The Winter Soldier [Disney+ Series]'
    },
    'she-hulk':{
        'originalMCUAppearance': 'She-Hulk: Attorney at Law [Disney+ Series]',
        'name': 'Jennifer Walters',
        'numberOfMovies': 1,
        'latestAppearance': 'She-Hulk: Attorney at Law [Disney+ Series]'
    },
    'shuri':{
        'originalMCUAppearance': 'Black Panther',
        'name': 'Shuri',
        'numberOfMovies': 3,
        'latestAppearance': 'Avengers: EndGame'
    },
    'moon knight':{
        'originalMCUAppearance': 'Moon-Knight [Disney+ Series]',
        'name': 'Marc Spector',
        'numberOfMovies': 1,
        'latestAppearance': 'Moon-Knight'
    },
    'valkyrie':{
        'originalMCUAppearance': 'Thor: Ragnarok',
        'name': 'Brunnhilde',
        'numberOfMovies': 3,
        'latestAppearance': 'Thor: Love & Thunder'
    },
    'korg':{
        'originalMCUAppearance': 'Thor: Ragnarok',
        'name': 'Korg',
        'numberOfMovies': 3,
        'latestAppearance': 'Thor: Love & Thunder'
    },
    'the mighty thor':{
        'originalMCUAppearance': 'Thor',
        'name': 'Jane Foster',
        'numberOfMovies': 4,
        'latestAppearance': 'Thor: Love & Thunder'
    },
    'kate bishop':{
        'originalMCUAppearance': 'Hawkeye [Disney+ Series]',
        'name': 'Kate Bishop',
        'numberOfMovies': 1,
        'latestAppearance': 'Hawkeye [Disney+ Series]'
    },
    'ms.marvel':{
        'originalMCUAppearance': 'Ms. Marvel [Disney+ Series]',
        'name': 'Kamala Khan',
        'numberOfMovies': 1,
        'latestAppearance': 'Ms. Marvel [Disney+ Series]'
    },
    'nick fury':{
        'originalMCUAppearance': 'Iron Man',
        'name': 'Nick Fury',
        'numberOfMovies': 11,
        'latestAppearance': 'SpiderMan: Far From Home'
    },
    'quicksilver':{
        'originalMCUAppearance': 'Captain America: The Winter Soldier [Post Credit Scene]',
        'name': 'Pietro Maximoff',
        'numberOfMovies': 2,
        'latestAppearance': 'Avengers: Age of Ultron'
    },
    'phastos':{
        'originalMCUAppearance': 'The Eternals',
        'name': 'Phastos',
        'numberOfMovies': 1,
        'latestAppearance': 'The Eternals'
    },
    'ajak':{
        'originalMCUAppearance': 'The Eternals',
        'name': 'Ajak',
        'numberOfMovies': 1,
        'latestAppearance': 'The Eternals'
    },
    'makkari':{
        'originalMCUAppearance': 'The Eternals',
        'name': 'Makkari',
        'numberOfMovies': 1,
        'latestAppearance': 'The Eternals'
    },
    'war machine':{
        'originalMCUAppearance': 'Iron Man',
        'name': 'James Rhodes',
        'numberOfMovies': 8,
        'latestAppearance': 'Falcon and The Winter Solider [Disney+ Series]'
    },
    'kingo':{
        'originalMCUAppearance': 'The Eternals',
        'name': 'Kingo',
        'numberOfMovies': 1,
        'latestAppearance': 'The Eternals'
    },
    'gilgamesh':{
        'originalMCUAppearance': 'The Eternals',
        'name': 'Gilgamesh',
        'numberOfMovies': 1,
        'latestAppearance': 'The Eternals'
    },
}
//similar to a eventListener... app.get === a network request// 
app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:marvelUniverseDataBase',(request,response)=>{
    const heroName = request.params.marvelUniverseDataBase.toLowerCase()
    if(superheroes[heroName]){ 
        response.json(superheroes[heroName])
    }else{
        response.json(superheroes[unknown])
    }
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Avengers.... Assemble!`)
})