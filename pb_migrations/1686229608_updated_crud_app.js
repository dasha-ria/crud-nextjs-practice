migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("08dul7ljxqf8j6b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0217icm2",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("08dul7ljxqf8j6b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0217icm2",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
