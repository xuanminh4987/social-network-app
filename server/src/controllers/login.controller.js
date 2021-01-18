const { Users } = require('../models/users.model')

const getUserByEmail = (email, callBack) => {
    Users.find({email}, (err, result) => {
        if(err) throw err

        return callBack(result)
    })
}

module.exports.checkUser = (req, res) => {
    const { email, password } = req.body

    getUserByEmail(email, (result)=>{
        result = result[0]

        if(result){
            if(result.password === password){

                return res.json({
                    status: 200
                })
            } else{
                return res.json({
                    status: 400,
                    message: 'Mật khẩu không đúng.'
                })
            }
        } else{
            return res.json({
                status: 400,
                message: 'Email không tồn tại.'
            })
        }
    })
}