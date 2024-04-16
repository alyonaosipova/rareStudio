const router = require('express').Router()
const {User} = require('../../db/models')
const multer = require("multer");

const storage = multer.diskStorage({ 
    destination(req, file, cb) { 
      cb(null, 'public'); 
    }, 
    filename(req, file, cb) { 
      cb(null, file.originalname); 
    }, 
  }); 

  const upload = multer({ storage });

router.get('/admin/allUsers', async(req, res) => {
    try{
        const Users = await User.findAll()
        res.json({Users})
    } catch ({message}){
        res.json({message})
    }
})

router.get('user/info/:id', async(req,res) => {
    try{
        const userInfo = await User.findOne({where:{id}})
        res.status(200).json({message: 'success', userInfo})
    } catch({message}){
        res.json({message})
    }
})

router.put('/user/upDate', upload.single('avatar'), async (req, res) =>{
    try{
        const {id} = req.params
        let { name, phone} = req.body
        let avatar
        if (req.file){
            avatar = `/avatar/${req.file.originalname}`
        } else {
            const result = await User.findOne({where:{id}})
            avatar = result.avatar
        }
        await User.update({name, phone, avatar}, {where: {id}, fields:['name', 'phone', 'avatar']});
        const userUpdate = await User.findOne({where:{id}});
        res.status(200).json({message:'success', userUpdate})
    } catch ({message}) {
        res.json({message})
    }
})
email: 'vlad@mail.com',
        name: 'Vlad',
        password: hash,
        isAdmin: true,
        phone:79123455623,
        avatar:'123',