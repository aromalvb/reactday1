// 1.importing the express
const express = require('express')
const employeeModel = require("./model")
const res = require('express/lib/response')

// 2.initalization
const app = new express()
 //middleware ||  parsing the parameter
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// 3.api creation
app.get('/',(req,res)=>{
    res.send("This message is from the srever")
})
app.get('/Aromal',(req,res)=>{
    res.send("Iam Aromal")
})
app.get('/Moto',(req,res)=>{
    res.send("FREE FIRE")
})
app.get('/data',(req,res)=>{
    res.json(
        {
        "name":"Aromal",
        "age":19
    }
    )
})
 
// api fot adding data
app.post('/create',async(req,res)=>{
var result = await new employeeModel(req.body)
result.save()
res.send("Data Added")
})
// api for viewing data
app.get('/view',async(req,res)=>{
    var data = await employeeModel.find()
    res.json(data)
    console.log(data)
})
// api for deleting data
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id
    await employeeModel.findByIdAndDelete(id)
    res.send("Deleted")
})
// api for updating data
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body)
    res.send("Data Updataed")
})
// 4.port
app.listen(3005,()=>{
    console.log("port 3005 is up and running")
})