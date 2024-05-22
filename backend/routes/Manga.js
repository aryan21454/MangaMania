const router = require('express').Router();
const Manga = require('../models/Manga');
const User = require('../models/User');

router.post('/addManga', async (req, res) => {
    try{
        const {name , type , chapter , linktoread , email } = req.body;
    const existingUser = User.findOne({email});
    if (existingUser)
        {
            const manga = new Manga({
                name,
                type,
                chaptersRead: chapter,
                linkToRead: linktoread,
                user: existingUser
            });
            await manga.save();
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
        const {name , type , chapter , linktoread , email } = req.body;
        const existingUser = User.findOne({email});
    if (existingUser)
        {
            const list = await Manga.findByIdAndUpdate(req.params.id, {name , type , chapter , linktoread });   
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
router.delete('/updateManga/:id', async (req, res) => {
    try{
        const {email } = req.body;
        const existingUser = User.findOneAndUpdate({email},{ $pull: { list: req.params.id } });
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

