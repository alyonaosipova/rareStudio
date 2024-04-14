const router = require("express").Router();
const bcrypt = require("bcrypt");
const { generateTokens } = require("../../utils/authUtils");
const cookiesConfig = require("../../config/cookiesConfig");
const {User} = require('../../db/models/user')

router.post('registration', async(req,res) =>{
    try {
        const{name, email, password, r_password} = req.body;

        if(name && email && password && r_password){
            const globalRegex = /^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;

            if(globalRegex.test(email)){
                let user = await User.findOne({ where: { email } })

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
                res.status(400).json({ message: 'Ваша почта не соответствует формату' });
            }
        } else {
            res.status(400).json({ message: 'Заполните все поля' });
          }
    } catch ({ message }) {
        res.status(500).json(message);
      }
})

router.post('/login', async (req, res) => {
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

  
module.exports = router;
