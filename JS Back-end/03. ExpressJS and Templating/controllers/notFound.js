module.exports = {
    notFound(req, res) {
        res.render('404', { title: 'Pager Not Found' });
    }
}