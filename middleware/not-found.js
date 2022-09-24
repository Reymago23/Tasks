const notFound = (req, res) => {
    res.status(404).send('Unable to find the page you are looking for');
};

module.exports = notFound;