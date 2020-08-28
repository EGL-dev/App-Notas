const Note = require("../models/Note");

const noteCtrl = {};


noteCtrl.getNotes = async (req,res)=>{
     const notes = await Note.find();
    res.json(notes);

}


noteCtrl.createNote =  async(req,res)=>{
    const {title, content,date, author} = req.body;
    const newNote = new Note({

     title:title,
     content:content,
     date:date,
     author:author
        
        

    });

      await newNote.save();
    res.json({
        message:'Note save'
    })
};

noteCtrl.getNote = async (req,res)=>{
  const note = await Note.findById(req.params.id);
  
  res.json(note);
}


noteCtrl.deleteNote = async (req,res)=>{

   await Note.findByIdAndDelete(req.params.id);
    res.json({message:"Note deleted"});
}

noteCtrl.updateNote = async(req,res)=>{
   
     await Note.findOneAndUpdate(req.params.id,req.body);



    res.json(
        {
            message:"Note update"
        })
};







module.exports=noteCtrl;