
exports.redirectToHttps = (req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        if (req.headers.host === 'http://shut-app-pro.herokuapp.com/')
            return res.redirect(301, 'https://shut-app-pro.herokuapp.com/');
        if (req.headers['x-forwarded-proto'] !== 'https')
            return res.redirect('https://' + req.headers.host + req.url);
        else
            return next();
    } else
        return next();
}