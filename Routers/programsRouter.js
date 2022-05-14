const express = require("express");
const router = express.Router();

// Controller Imports
const { displayProgramInfo, enterProgramInfo, updateProgramInfo,deleteProgramInfo } = require("../Controllers/programsController")

// /program
router.get('/', displayProgramInfo)
// /program
router.post('/', enterProgramInfo)
// /program/:id
router.put('/:id', updateProgramInfo)
// /program/:id
router.delete('/:id', deleteProgramInfo)

module.exports = router;