import {pool} from './db_config.js'


export const setProducts = async (req,res)=>{
    //const url = req.params.country
    const [rows] = await pool.query("SELECT COUNT(*) FROM `customers` WHERE `country`= 'France'")
    res.json(rows)
}

export async function nameOfEmployees(req,res){
    const [rows] = await pool.query("SELECT `firstName`,`lastName` FROM `employees` WHERE `employeeNumber`= 1002")
    res.json(rows)
}

export async function classicCars(req,res) {
    const [rows] = await pool.query("SELECT COUNT(*) FROM `products` WHERE `productLine`= 'Classic Cars'")
    res.json(rows)
}