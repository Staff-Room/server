

async function getUsersSuperUserController(req, res){
    try {
        
        return res.render('superuser/pages/users')
    } catch (error) {
        console.log(error)
    }

}

export {getUsersSuperUserController};