db = db.getSiblingDB("ayuntamientos");

db.createUser({
  user: process.env.MONGODB_PROJECT_USERNAME,
  pwd: process.env.MONGODB_PROJECT_PASSWORD,
  roles: [{ role: "readWrite", db: "ayuntamientos" }],
});

db.createCollection("test");

db.test.insertOne({ test: "OK" });