const express = require("express");
const {
  /*ACA VAN LOS NOMBRES DE "FUNCIONES" QUE SE ENCUENTRAN 
  EN LA CARPETA DE CONTROLLERS
  */
} = require("../controllers/controller");
const checkCarTypes = require('../utils/checkCarTypes')/*CAMBIAR*/

// Configurar los routers
const router = express.Router();

// Definir las rutas correspondientes al router de esta hoja
router.get("/car", getAllCarController);/*CAMBIAR RUTAS DE TODOS*/
router.get("/car/:id", getCarByIdController);
router.post("/car", checkCarTypes, addCarController);
router.put("/car/:id", updateCarController);
router.delete("/car/:id", deleteCarController);

// Logica de las rutas -> delegado -> controller

module.exports = router;
