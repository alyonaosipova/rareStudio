const router = require("express").Router();
const bcrypt = require("bcrypt");
const { generateTokens } = require("../../utils/authUtils");
const cookiesConfig = require("../../config/cookiesConfig");
const {User} = require('../../db/models')
const {jwtConfig} = require('../../config/jwtConfig');
const { verifyAccessToken } = require("../../middleware/verifyToken");

router.post('/sign-up', async(req,res) =>{
    let user;
    // console.log(req.body,'1');
    try {
        const{name, email, password, r_password} = req.body;
        // console.log(req.body,'2');
        if(name && email && password && r_password){
            
            const globalRegex = /^[^@]+@[^@]{2,}\.[^@]{2,}$/;
            if(globalRegex.test(email)){
                 user = await User.findOne({ where: { email } })
                
            if(user){
                res.status(400).json({ message: 'Такой пользователь уже существует' });
            } else {
                const hash = await bcrypt.hash(password, 10);
          user = await User.create({ name, email, password: hash });
          const { accessToken, refreshToken } = generateTokens(
            { user: { name: user.name, id: user.id } },
          );

          res.cookie(
            cookiesConfig.access,
            accessToken,
            { maxAge: cookiesConfig.maxAgeAccess, httpOnly: true },
          );
          res.cookie(
            cookiesConfig.refresh,
            refreshToken,
            { maxAge: cookiesConfig.maxAgeRefresh, httpOnly: true },
          );
          res.status(201).json({ message: 'ok', user: { name: user.name, id: user.id } });
            }
            }else {
                console.log(req.body,'2')
                res.status(400).json({ message: 'Ваша почта не соответствует формату' });
            }
        } else {
            res.status(400).json({ message: 'Заполните все поля' });
          }
    } catch ({ message }) {
        res.status(500).json(message);
      }
})

router.post('/sign-in', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (email && password) {
        const user = await User.findOne({ where: { email } });
        if (user && (await bcrypt.compare(password, user.password))) {
          const { accessToken, refreshToken } = generateTokens(
            { user: { name: user.name, id: user.id } },
          );
  
          res.cookie(
            cookiesConfig.access,
            accessToken,
            { maxAge: cookiesConfig.maxAgeAccess, httpOnly: true },
          );
          res.cookie(
            cookiesConfig.refresh,
            refreshToken,
            { maxAge: cookiesConfig.maxAgeRefresh, httpOnly: true },
          );
          res.status(200).json({ message: 'ok', user: { name: user.name, id: user.id } });
        } else {
          res.status(400).json({ message: 'логин или пароль не верный' });
        }
      } else {
        res.status(400).json({ message: 'Заполните все поля' });
      }
    } catch ({ message }) {
      res.status(500).json(message);
    }
  });

//   router.get('/check', async (req, res) => {
//     if (res.locals.user) {
//       const user = await User.findOne({ where: { id: res.locals.user.id }, attributes: { exclude: ['password'] } });
//       res.json({ user });
//       return;
//     }
//     res.json({});
//   });

  router.get('/logout', (req, res) => {
    try{
    res.clearCookie(jwtConfig.access.type).clearCookie(jwtConfig.refresh.type);
    res.json({ message: 'success' });
    } catch({message}){
        res.json({message})
    }
  });
  

  
module.exports = router;
