

async function getDashboardSuperUserController(req, res){
    try {
        
        return res.render('superuser/pages/dashboard')
    } catch (error) {
        console.log(error)
    }

}

export {getDashboardSuperUserController};