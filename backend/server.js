const express= require('express')
const cors= require('cors')
const mongoose= require('mongoose')
const user=require('./userSchema')
 
const app= express();
const port= 4000;

// middleware
app.use(express.json())
app.use(cors());
// app.use('/app',)
// connet urel

const connection_url="mongodb+srv://sachinkrvis12:04711420@cluster0.pq4sqhm.mongodb.net/newData?retryWrites=true&w=majority"

mongoose.connect(connection_url,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
});
//api

app.get("/",(req,res)=>res.status(200).send("hello sachin"));

// api adding the data

app.post("/register", (req,res)=>{
    const userDetails= req.body;
    console.log("userDetails>>>",userDetails);

    user.create(userDetails,(err,data)=>
    {
        if(err){
            res.status(500).send(err.message);
        }
        else{
            res.status(201).send(data);
        }
    })
})

app.get("/register",(req,res)=>{
    user.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})

app.listen(port,()=>console.log("listening on the port", port))