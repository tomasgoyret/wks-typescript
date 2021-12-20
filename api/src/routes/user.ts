import {Response, Request, NextFunction, Router} from 'express';
import { Users } from '../models/Users';
const router = Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
	Users.findAll()
		.then((users) => {
			if(users.length == 0){
				res.send ("Base de datos vacía")
			}
			res.send(users);
		})
		.catch((error) => next(error));
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
	const user = req.body;
	Users.create(user)
		.then((createdUser) => {
			res.send(createdUser);
		})
		.catch((error) => next(error));
});

module.exports = router;