const d = document;
const $btnSubmit = d.querySelector('#formModels')
export function getSubmodels () {
    
    console.log($btnSubmit)
    d.addEventListener("submit", e => {
        e.preventDefault()
        console.log(e.target)
        if (e.target == $btnSubmit) {
            let url = `/submodels`
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

            alert("clicoazo")
        }
    })




    
    return true
}