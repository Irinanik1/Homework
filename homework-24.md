// 1. Знайти користувачів у яких в імені є "qw"
db.user_profiles.find({ name: /qw/i })

// 2. Знайти користувачів у яких country = Ukraine
db.user_profiles.find({ country: "Ukraine" })

// 3. Знайти користувачів у яких поле country не існує
db.user_profiles.find({ country: { $exists: false } })

// 4. Знайти користувачів у яких name не починається з літери "a" (обов'язково $where)
// ⚠️ Atlas Free (M0) не дозволяє виконувати $where
db.user_profiles.find({
  $where: function() {
    return this.name && this.name[0].toLowerCase() !== "a";
  }
})

// 5. Робота з $lookup: машини + їх власники
db.cars.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "owner"
    }
  }
])

// 6. Додати колекцію cars згідно схеми (створюється через додавання документів)
db.cars.insertMany([
  {
    userId: ObjectId("..."),
    carBrandId: ObjectId("..."),
    carModelId: ObjectId("..."),
    mileage: 12345,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  // ... 
])

// 7. Додати 10 автівок
db.cars.insertMany([
  {
    userId: ObjectId("..."),
    carBrandId: ObjectId("..."),
    carModelId: ObjectId("..."),
    mileage: 120000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: ObjectId("..."),
    carBrandId: ObjectId("..."),
    carModelId: ObjectId("..."),
    mileage: 95000,
    createdAt: new Date(),
    updatedAt: new Date()
   } 
  // ... 
])

// 8. Машини та їх власники, де mileage >= 100 і автомобіль Audi
db.cars.aggregate([
  {
    $lookup: {
      from: "car_brands",
      localField: "carBrandId",
      foreignField: "_id",
      as: "brand"
    }
  },
  { $unwind: "$brand" },

  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "owner"
    }
  },
  { $unwind: "$owner" },

  {
    $match: {
      mileage: { $gte: 100 },
      "brand.title": "Audi"
    }
  }
])


// 9. Знайти cars, у яких бренд BMW або Audi
db.cars.aggregate([
  {
    $lookup: {
      from: "car_brands",
      localField: "carBrandId",
      foreignField: "_id",
      as: "brand"
    }
  },
  { $unwind: "$brand" },
  {
    $match: {
      "brand.title": { $in: ["BMW", "Audi"] }
    }
  }
])
