const express = require("express");
const router = express.Router();

const { displayProgramInfo, enterProgramInfo, updateProgramInfo,deleteProgramInfo } = require("../Controllers/programsController")

//programs
router.get('/', displayProgramInfo)
router.post('/', enterProgramInfo)
router.put('/:id', updateProgramInfo)
router.delete('/:id', deleteProgramInfo)

module.exports = router;