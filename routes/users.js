import express from 'express';


// importing controller from 'user.js' controller
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers); // GET USER ROUTE
router.post('/', createUser); // ADD USER ROUTE
router.get('/:id', getUser); // GET USER DETAILS BY ID
router.delete('/:id', deleteUser); // DELETE USER BY ID
router.patch('/:id', updateUser); // PATCH USER BY ID

export default router;

