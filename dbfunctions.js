function listResources(db) {
  return db('resources')
}

function getSpecific(db, id) {
  return db('resources')
    .where('resources.id', id)
    .select()
}













module.exports = {
  listResources

}