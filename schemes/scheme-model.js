// Models  
 // imported from db-config 
 const db = require('../data/db-config.js'); 
 module.exports = {
     find,
     findById,
     add,
     update,
     remove, 
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

} 

function add(scheme) { 
  
}
 
function update(schemeChanges , id) {

} 

