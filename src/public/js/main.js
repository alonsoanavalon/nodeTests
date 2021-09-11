const d = document

import { printModels } from "./printModels.js"
import { getSubmodels } from "/js/getSubmodels.js"
import { printSubmodels } from "/js/printSubmodels.js"
import { printYears } from "/js/printYears.js"

d.addEventListener("DOMContentLoaded", () => {

    getSubmodels()
    printSubmodels()
    printYears()
    printModels()



})