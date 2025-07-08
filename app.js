import express from "express"
const port = 3004
const app = express()

////1
app.get('/',(req,res)=>{
    const now = new Date().toISOString()
    res.json({mass:` hi from your server the tane now is:${now}`})
})


////2
app.get('/greet/:name',(req,res)=>{
        const name = req.params.name;
        console.log(`i got name ${name}`);
    res.json({mass:`name is:${name}`})
})

//3

function myget(){
    app.get('/test/:name',(req,res)=>{
        const name = req.params.name;
        console.log(`i got name ${name}`);
    res.json({mass:`name is:${name}`})
    })

    fetch("http://localhost:3004/test/bob")
    .then((res)=>res.json())
    .then((data)=>{console.log(data);})
}
myget()


//4
app.use(express.json())

app.post("/action",async(req,res)=>{
    const {action} = req.body
    if(!action || !["joke","cat fact"].includes(action))
        {return res.status(400).json({msg:"you have a problem"})}
    else if(action=== "joke"){
        const myJoke = await fetch("https://official-joke-api.appspot.com/random_joke")
        const data = await myJoke.json()
        const fuulData =  `${data.setup} ${data.punchline}`.toUpperCase();
        res.json({"joke": fuulData})
    }
    else{
        const respons = await fetch("https://api.thecatapi.com/v1/images/search?limit=11",{
        headers:{
            "x-api-key":"live_x6BDBCskee0sEyAiO1EwBK5O9qEJOxWJsEFrdzDHNlX6xh6YhnTzCpATq3BbgtiT"
        }
        })
        const data = await respons.json()
        res.json( {length: data.length})
    }

})


app.listen(port,()=>{
    console.log("server runing");
})