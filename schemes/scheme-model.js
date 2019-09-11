// Models  
 // imported from db-config 
 const db = require('../data/db-config.js'); 
 module.exports = {
     find,
     findById,
     add,
     update,
     remove,  
     findSteps
 }

function find() {
 return db('schemes')
} 

function findById(id) {
  return db("schemes")
         .where({id})
         .first();
}  

function remove(id){
    return db('schemes')
    .where({id})
    .del();
 }
function findSteps(id){
  return db.select("steps.id" , "schemes.scheme_name" , "steps.step_number" , "steps.instructions"
  ).from("steps")
  .innerJoin("schemes" , "steps.scheme_id" , "=" , "schemes.id")
  .where("steps.scheme_id" , "=" , id)
} 

function add(scheme) {  
  return db('scheme')
   .insert(scheme)  
   .then(id => {
       return findById(id);
   });
}

function update(schemeChanges , id) {
  return db('schemeChanges')
  .where({id: id})
  .update(schemeChanges)
  .then(schemeChanges => {
      return findById(id)
  })
} 

