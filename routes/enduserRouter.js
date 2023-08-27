




const enduserController = require("../controller/enduserController")


const enduserRouter = require('express').Router()


enduserRouter.post('/', enduserController.addEnduser)

enduserRouter.get('/', enduserController.getAllEnduser)

enduserRouter.get('/:endUserId', enduserController.getOneEnduser)

enduserRouter.put('/:endUserId', enduserController.updateEnduser)

enduserRouter.delete('/:endUserId',enduserController.deleteEnduser)



module.exports = enduserRouter;