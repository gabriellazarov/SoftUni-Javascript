module.exports = {
    editPage: async (req, res) => {
        const id = req.params.id;
        const cube = await req.storage.getById(id);


        let select1 = cube.difficulty == 1;
        let select2 = cube.difficulty == 2;
        let select3 = cube.difficulty == 3;
        let select4 = cube.difficulty == 4;
        let select5 = cube.difficulty == 5;
        let select6 = cube.difficulty == 6;

        if (cube == undefined) {
            res.redirect('/404');
        } else {
            const ctx = {
                title: 'Edit Cube',
                id,
                name: cube.name,
                imageUrl: cube.imageUrl,
                description: cube.description,
                select1,
                select2,
                select3,
                select4,
                select5,
                select6
            };
            res.render('edit', ctx);
        }

    },

    editPost: async (req, res) => {
        const cube = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficulty: Number(req.body.difficulty)
        };
        try {
            await req.storage.edit(req.params.id, cube);
            res.redirect('/');
        } catch (err) {
            res.redirect('/404')
        }
    }
}