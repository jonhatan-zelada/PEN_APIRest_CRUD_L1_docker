const getPeople = "SELECT * FROM people";
const getPeoplebyId = "SELECT * FROM people WHERE id=$1";
const checkNameExists = "SELECT s FROM people s WHERE s.name_people =$1";
const addPeople= "INSERT INTO people (name_people, surname) VALUES ($1,$2)";
const updatePeopleQuery = "UPDATE people SET name_people=$1 WHERE id=$2";
const removePeople= "DELETE FROM people WHERE id=$1";


module.exports = {
    getPeople,
    getPeoplebyId,
    checkNameExists,
    addPeople,
    removePeople,
    updatePeopleQuery,
}