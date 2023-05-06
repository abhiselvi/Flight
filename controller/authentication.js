const users = require('../models/users')

exports.auth = (request,response)=>{
    response.send("hello")
}
exports.register = async (req, res) => {

    try{
        const user = await users.create(req.body)
        res.status(200).json({
            status: 'success',
            data: {
              user
            }
          });
    }catch(error){
        res.send(error)
    }
  };

  exports.login = async (req, res) => {
    try {
      const { usernameoremail, password } = req.body;
      const user = await users.findOne({
        $or: [{ username: usernameoremail }, { email: usernameoremail }],
      });  
      if(user && user.newpassword==req.body.password){
        res.status(200).json({
           status:'success',
           data:"Your are logged In"
        })
      }
      else{
        res.status(404).json({
            status:'failure',
            data:"Login failure"
         })
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error");
    }
  };
