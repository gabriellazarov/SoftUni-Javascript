module.exports = {
    details: async (req, res) => {
        const cube = await req.storage.getById(req.params.id);

        if (cube == undefined) {
            res.redirect('/404');
        } else {
            const ctx = {
                title: 'Cubicle',
                name: cube.name,
                imageUrl: cube.imageUrl,
                description: cube.description,
                difficulty: cube.difficulty,
            };
            res.render('details', ctx);
        }

    }
}