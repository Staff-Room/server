

async function getLogsSuperUserController(req, res){
    try {
        
        return res.render('superuser/pages/logs')
    } catch (error) {
        console.log(error)
    }

}

export {getLogsSuperUserController};