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
  .then(schemes => {
      return schemes;
  })
} 

function findById(id) {
  return db("schemes")
         .where({id : id})
         .then(scheme => {
             if(scheme){
                 return scheme[0];
             }
             else {
                 return null;
             }
         })
}  

function remove(id){ 
    const removed = findById(id);
    return db("schemes")
    .where({id : id})
    .del()
    .then(scheme => {
        if(scheme) {
            return removed;
        } 
        else {
            return null;
        }
    });
 } 

function findSteps(id){ 
 return db("schemes")
 .join("steps" , "schemes.id" , "steps.scheme_id") 
 .where({ scheme_id : id })
 .select(
     "steps.id" , "schemes.scheme_name" , "steps.step_number" ,"steps.instructions"
 )
 .orderBy("schemes.id")
 .then(steps => {
     return steps;
 })
  
} 

function add(scheme) {  
  return db('scheme')
   .insert(scheme)  
   .then(id => {
       return findById(id[0]);
   });
}

function update(schemeChanges , id) {
  return db('schemes')
  .where({id: id})
  .update(schemeChanges)
  .then(schemeChanges => {
      return findById(id)
  })
} 

