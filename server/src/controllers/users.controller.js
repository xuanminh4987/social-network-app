const { Users } = require('../models/users.model')

const getAllUsers = (callBack) => {
    Users.find({}, (err, result) => {
        if(err) throw err

        return callBack(result)
    })
}

const createNewUser = (userInfo, callBack) => {
    const user = new Users(userInfo)
    user.save((err, result) => {
        if(err) throw err

        return callBack(result)
    }) 
}

const getUserByEmail = (email, callBack) => {
    Users.find({email}, (err, result) => {
        if(err) throw err

        return callBack(result[0])
    })
}

module.exports.getUsers = (req, res) => {
    return getAllUsers((result) => {
        if(result){
            return res.json({users: result})
        }
    })
}

module.exports.createUser = (req, res) => {
    const {...user} = req.body
    
    return getUserByEmail(user.email, (result)=>{
        if(result){
            console.log(result);
            return res.json({status: 400, message: 'Email đã tồn tại.'})
        } else{
            return createNewUser(user, (result)=>{
                return res.json({status: 200})
            })
        }
    })
}