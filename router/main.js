module.exports = (app) => {
    app.get('/', function (req, res) {
        //res.sendFile('index.html', {root : __dirname + '/views'});
        res.redirect('/galleria')
    });
    app.get('/registro', function (req, res) {
        //res.sendFile('index.html', {root : __dirname + '/views'});
        res.render('registro.html')
    });
    app.get('/galleria', function (req, res) {
        //res.sendFile('index.html', {root : __dirname + '/views'});
        res.render('index.html')
    });
    app.get('/zorro', function (req, res) {
        //res.sendFile('index.html', {root : __dirname + '/views'});
        res.render('zorro.html')
    });
    app.get('/blog', function (req, res) {
        //res.sendFile('index.html', {root : __dirname + '/views'});
        res.render('blog.html')
    });
}