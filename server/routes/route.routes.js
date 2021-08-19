const packagesContollers = require("../controllers/packages.controller");
const addonesControllers = require("../controllers/addones.controller");
const foodControllers = require("../controllers/food.controller");

module.exports = app => {
  app.get("/api/packages", packagesContollers.findAllPackeges);
  app.get("/api/packages/:id", packagesContollers.findOneSinglePackeges);
  app.post("/api/packages", packagesContollers.createNewPackeges);
  app.put("/api/packages/:id", packagesContollers.updateExistingPackeges);
  app.delete("/api/packages/:id", packagesContollers.deleteAnExistingPackeges);

  
  app.get("/api/addones/", addonesControllers.findAllAddones);
  app.get("/api/addones/:id", addonesControllers.findOneSingleAddones);
  app.post("/api/addones", addonesControllers.createNewAddones);
  app.put("/api/addones/:id", addonesControllers.updateExistingAddones);
  app.delete("/api/addones/:id", addonesControllers.deleteAnExistingAddones);


  app.get("/api/food/", foodControllers.findAllFood);
  app.get("/api/food/:id", foodControllers.findOneSingleFood);
  app.post("/api/food", foodControllers.createNewFood);
  app.put("/api/food/:id", foodControllers.updateExistingFood);
  app.delete("/api/food/:id", foodControllers.deleteAnExistingFood);
};