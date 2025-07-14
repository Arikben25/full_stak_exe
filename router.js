import exspress from "express"
import {setProducts} from "./service.js"
import {nameOfEmployees} from "./service.js"
import {classicCars} from "./service.js"

const rout = exspress.Router()

rout.get("/1",setProducts)
rout.get("/2",nameOfEmployees)
rout.get("/3",classicCars)


export default rout
