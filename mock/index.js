function mock(app, server, compiler) {
    app.get('/some/path', function (req, res) {
        res.json({ custom: 'response' });
    });
}

module.exports = mock