const pool = require('../../db');
const queries = require('./queries');


const getBudget = (req, res) => {
    pool.query(queries.getPeople, (error,results) =>{
    if (error) throw error;
    res.status(200).json(results.rows);
    });
};


const getPeopleById = (req,res) =>{
    const id = parseInt(req.params.id); // catching the parameter from req
    pool.query(queries.getPeoplebyId, [id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addPeople = (req,res) =>{
    const {name_people, surname} = req.body;
    //chaeck if name exist
    pool.query(queries.checkNameExists, [name_people], (error, results)=>{
        if(results.rows.length){
            res.send("name already exits");
        }
        //add people to db
        pool.query(
            queries.addPeople,
            [name_people,surname],
            (error,results) =>{
            if (error) throw error;
            res.status(201).send("People added ok");
        }
        );
 });
};


const updatePeople = (req,res)=>{
    const id= parseInt(req.params.id);
    const { name} = req.body;

    //Make sure that people exits
    pool.query(queries.getPeoplebyId, [id], (error, results) =>{
        const notPeopleFound = !results.rows.length;
        if (notPeopleFound){
            res.send("People doesn't found with this id for update");
        }

        //If id exists then delete
        pool.query(queries.updatePeopleQuery,[name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("People Updated ok"+name);
        });
    });
};


const removePeople = (req,res) => {
    const id= parseInt(req.params.id); // This because the id comes as String
    //Make sure that people exits
    pool.query(queries.getPeoplebyId, [id], (error, results) =>{
        const notPeopleFound = !results.rows.length;
        if (notPeopleFound){
            res.send("NOt People found with this id");
        }

        //If id exists then delete
        pool.query(queries.removePeople,[id], (error, results)=>{
            if (error) throw error;
            res.status(200).send("People deleted successfully");
        });

    });
};

module.exports = {
    getBudget,
    getPeopleById,
    addPeople,
    removePeople,
    updatePeople,
};