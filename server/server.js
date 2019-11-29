const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 2500

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect("mongodb+srv://hola:hola@cluster0-im5lw.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const citiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
})

const CitiesModel = mongoose.model('importantCities',citiesSchema)

const postCity = async (request, response) => {
    try {
        console.log("POST City")
        var citiesInstance = new CitiesModel(request.body)
        console.log(citiesInstance)
        const created = await CitiesModel.create(citiesInstance)
        response.send(created)
    } catch (error) {
        response.status(500).send(error)
    }
}

    const getCities= async (request, response) => {
        try{
            console.log("GET Cities")
            var citiesInstance = await CitiesModel.find({})
            console.log(citiesInstance)
            response.send({"citiesInstance":citiesInstance})
    
        } catch(error){
            response.status(500).send(error)
        }
    }

    const deleteCity = async (request,response) =>{
        try{
            console.log("DELETE City")
            var citiesInstance = await CitiesModel.deleteOne({'_id':request.params.id})
            console.log(citiesInstance)
            response.send(citiesInstance)
        }catch(error){
            response.status(500).send(error)
        }
     }

    const updateCity = async (request,response) =>{

    try {
        console.log("PUT City")
        var citiesInstance = new CitiesModel(request.body)
        console.log(citiesInstance)
        const created = await CitiesModel.findOneAndUpdate({'_id':request.params.id},request.body)
        response.send(created)
    } catch (error) {
        response.status(500).send(error)
    }
}
     

     const getCityById = async (request,response) =>{
        try{
  
             console.log("GET CITY BY ID")
             var citiesInstance = await CitiesModel.find({'_id':request.params.id})
             console.log(citiesInstance)
             response.send(citiesInstance)
        } catch(error){
            response.status(500).send(error)
        }
     }
     
     
    

    app.route('/importantCities')
    .post(postCity)
    .get(getCities)


    
    app.route('/importantCities/:id')
    .delete(deleteCity)
    .get(getCityById)
    .put(updateCity)

    


app.listen(PORT,()=>{
    console.log(` App running on port ${PORT}`)
})