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

// 5. Запит з $lookup: машини + їх власники, де mileage >= 100 і бренд Audi
db.cars.aggregate([
  {
    $match: {
      brand: "Audi",
      mileage: { $gte: 100 }
    }
  },
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "owner"
    }
  }
])

// 6. Знайти cars у яких бренд BMW або Audi
db.cars.find({
  brand: { $in: ["BMW", "Audi"] }
})

// 7. Додати авто (приклад 1)
db.cars.insertOne({
  brand: "Audi",
  model: "A6",
  mileage: 120,
  userId: ObjectId("000000000000000000000000")
})

// 8. Додати авто (приклад 2)
db.cars.insertOne({
  brand: "BMW",
  model: "X5",
  mileage: 80,
  userId: ObjectId("000000000000000000000000")
})

// 9. Показати всі user_profiles
db.user_profiles.find()

