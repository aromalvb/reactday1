const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://aromalvb:aromal@cluster0.mye68dg.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err))

let mongoSchema = mongoose.Schema

const EmployeeSchema = new mongoSchema({
    ename:String,
    eage:Number,
    epostion:String,
    esalary:Number

})

var employeeModel = mongoose.model("emploee",EmployeeSchema)
module.exports = employeeModel