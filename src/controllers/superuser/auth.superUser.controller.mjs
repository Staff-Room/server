

function getAuthSuperUserController(req, res){
        return res.render('superuser/superuser')
}

function postAuthSuperUserController(req, res){

        return res.send('this is an auth SuperUser route')

}

export {getAuthSuperUserController, postAuthSuperUserController};