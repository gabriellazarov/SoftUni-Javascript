module.exports = {
    details: async (req, res) => {
        const id = req.params.id;
        const cube = await req.storage.getById(id);

        if (cube == undefined) {
            res.redirect('/404');
        } else {
            const ctx = {
                title: 'Cubicle',
                name: cube.name,
                imageUrl: cube.imageUrl,
                description: cube.description,
                difficulty: cube.difficulty,
                comments: cube.comments,
                id
            };
            res.render('details', ctx);
        }

    }
}