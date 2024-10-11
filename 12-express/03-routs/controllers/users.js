

const getUsersHadler = (req, res) => {
    res.send('Get users route');
};

const getSingleUserHandler = (req, res) => {
    //console.log(req.params);
    res.send(`Get user route. UserId ${req.params.userId}`);
};

const postUsersHandler = (req, res) => {
    console.log(req.params);
    res.send('Post users route');
};

module.exports = {
    getUsersHadler: getUsersHadler,
    getSingleUserHandler,
    postUsersHandler
};