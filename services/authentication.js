const jwt = require('jsonwebtoken');

function createToken(user){
    const payload={
        _id:user._id,
        email:user.email,
        profileImageURL:user.profileImage,
        role:user.role
    };

    const token = jwt.sign(payload,process.env.JWT_SECRET);
    return token;
};


function validateToken(token){
    const payload = jwt.verify(token,process.env.JWT_SECRET);
    return payload;
}

module.exports = {
    createToken,
    validateToken
}