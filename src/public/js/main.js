const d = document

import {getSubmodels} from "/js/getSubmodels.js"
import {printSubmodels} from "/js/printSubmodels.js"

d.addEventListener("DOMContentLoaded", () => {

    getSubmodels()
    printSubmodels()



})