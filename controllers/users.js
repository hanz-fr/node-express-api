import { v4 as uuidv4 } from 'uuid';


// mock db
let users = [
]


// GET USER CONTROLLER
export const getUsers = (req, res) => {
    res.json(users);
}


// CREATE USER CONTROLLER
export const createUser = (req, res) => {
    const user = req.body;

    // spread all property of user, then add more value to user, which is userId.
    users.push({ ...user, id: uuidv4() });

    res.send(`User with name '${user.fname}' has been added to the database.`)
}


// GET USER BY ID CONTROLLER
// req.params is 'user/292' equals to { id: 292 }
export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}


// DELETE USER BY ID CONTROLLER
export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with id ${id} has been deleted`)
}


// PATCH USER BY ID CONTROLLER
export const updateUser = (req, res) => {

    // receiving 'id' params
    const { id } = req.params;

    // get things from request body
    const { fname, lname, age } = req.body;

    // find user to update
    const user = users.find((user) => user.id === id);


    // if we have the value to update, then we can update
    if(fname) user.fname = fname;
    if(lname) user.lname = lname;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated.`);

}
