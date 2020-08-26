const { express } = require("../../core/server");
const { useRequest, useService } = require("../../core/controls");

const { get, store } = require("../../app/controllers/user");
const { store: storeRequest } = require("../../app/requests/user");
const { store: storeService } = require("../../app/services/user");

const router = express.Router();
router.get("/", get);
router.post("/", useRequest(storeRequest), useService(storeService), store);

module.exports = router;
