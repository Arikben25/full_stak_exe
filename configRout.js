import rout from "./router.js"

export function configRouter (app){
    app.use("/qewstion1",rout)
    app.use("/qewstion2",rout)
    app.use("/qewstion3",rout)
    app.use((req , res)=>{
        res.status(500).json("you have a problem")
    })
}
