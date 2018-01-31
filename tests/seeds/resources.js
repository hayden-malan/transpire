exports.seed = function (knex) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert([
        { id: 1, name: 'Resource1', url:"https://www.glaad.org/transgender/resources" },
        { id: 2, name: 'Resource2', url:"https://www.theguardian.com/lifeandstyle/2012/nov/29/transgender-advice-best-resources-online" },
        { id: 3, name: 'Resource3', url: "http://ok2bme.ca/resources/kids-teens/trans-resources/" }
      ])
    })
}