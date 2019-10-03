
let registration = (req, res) => {
    if (!req.user){ 
    return res.status(422).json({
        success: false,
        message: "Registration failed"
    })
    }
    const { user } = req;
    return res.status(201).json(
        { 
            user,
            success: true,
            message: 'User Registration Success'
         }
        );
}

module.exports = { registration: registration }