const express = require('express')
const app = express()
const PORT = 8000

const superheros = {
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
        'latestAppearance': 'Hawkeye [Disney Plus Series]'
    },
    'thor':{
        'originalMCUAppearance': 'Thor',
        'name': 'Thor Odinson',
        'numberOfMovies' : 8,
        'latestAppearance': 'Thor: Love & Thunder'
    },
    'starlord':{
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
        'latestAppearance': 'Shang Chi and The Legend Of The 10 Rings [Post Credit]'
    },
    'antman':{
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
    'Gamora':{
        'originalMCUAppearance': 'Guardians Of The Galaxy',
        'name': 'Gamora',
        'numberOfMovies': 5,
        'latestAppearance': 'Thor: Love & Thunder'
    },
    'The Wasp':{
        'originalMCUAppearance': 'AntMan and The Wasp',
        'name': 'Hope Van Dyne',
        'numberOfMovies': 2,
        'latestAppearance': 'Avengers: EndGAme'
    },
    'unknown':{
            'originalMCUAppearance': 'Unknown',
            'name': 'Unknown',
            'numberOfMovies': 0,
            'latestAppearance': 'Unknown'
    },
}
//similar to a eventListener... app.get === a network request// 
app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:marvelUniverseDataBase',(request,response)=>{
    const heroName = request.params.marvelUniverseDataBase.toLowerCase()
    if(superheros[heroName]){ 
        response.json(superheros[heroName])
    }else{
        response.json(superheros[unknown])
    }
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Avengers.... Assemble!`)
})