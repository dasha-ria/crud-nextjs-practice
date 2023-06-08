migrate((db) => {
  const collection = new Collection({
    "id": "08dul7ljxqf8j6b",
    "created": "2023-06-08 12:46:23.922Z",
    "updated": "2023-06-08 12:46:23.922Z",
    "name": "crud_app",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "byx7gcvt",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("08dul7ljxqf8j6b");

  return dao.deleteCollection(collection);
})
