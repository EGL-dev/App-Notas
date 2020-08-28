const userCtrl={};

const Users = require('../models/User');
;








userCtrl.getUsers = async(req,res)=>{
    
    const user = await Users.find();


    
    res.json(user);

};

userCtrl.createdUsers = async (req,res)=>{
    
    const { username} = req.body ; 
    
    const newUser=new Users({username});
    await newUser.save();
    res.json("Usuario creado")
};

userCtrl.deleteUsers= async(req,res)=>{
   await Users.findByIdAndDelete(req.params.id);
    
    
    res.json({message:"Usuario Eliminado"})
};


userCtrl.getUser=(req,res)=>{
    
    
    res.json({title:"fdsffs"})



};











module.exports = userCtrl;


