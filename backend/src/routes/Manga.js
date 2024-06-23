const router = require('express').Router();
const Manga = require('../models/Manga');
const User = require('../models/User');

router.post('/addManga', async (req, res) => {
    try{
        const {name , type , chapter , linktoread , id } = req.body;
    const existingUser = await User.findById(id);
    if (existingUser)
        {
            const manga = new Manga({
                name,
                type,
                chaptersRead: chapter,
                linkToRead: linktoread,
                user: [existingUser.id]
            });
            await manga.save().then(()=> res.status(200).json({manga}));
            existingUser.list.push(manga);
            existingUser.save();
            
        }      
    }
    catch(err)
        {
            console.error(err);
            // res.status(500).send('Internal Server Error');
        }     
});

// updatetask 
router.put('/updateManga/:id', async (req, res) => {
    try{
        const {name , type , chapter , linktoread , _id } = req.body;
        console.log(req.body);
        
        const existingUser =  User.findById(req.body.user);
        // console.log(req);
    if (existingUser)
        {  
            const list = await Manga.findByIdAndUpdate(_id, req.body );   
            list.save().then(()=> res.status(200).json({message :'Manga Updated Successfully'}));
        }      
    }
    catch(err)  
        {
           
            console.error(err);
            // res.status(500).send('Internal Server Error');
        } 


});

//deletetask 
router.delete('/deleteManga/:id', async (req, res) => {
    try{
        const {id } = req.body;
        const existingUser = await User.findByIdAndUpdate(id, { $pull: { list: req.params.id } });
    if (existingUser)
        {
           await Manga.findByIdAndDelete(req.params.id).then(()=> res.status(200).json({message :'Manga Deleted Successfully'}));
        }     
    }
    catch(err)
        {
            console.error(err);
            // res.status(500).send('Internal Server Error');
        } 


});

// get all Manga list 
router.get('/getMangaList/:id', async (req, res) => {
    const list = await Manga.find({user:req.params.id});
    if (list.length === 0) return res.status(200).json({message :'No Manga Found'});
    else res.status(200).json({list});
});
module.exports = router;

 
