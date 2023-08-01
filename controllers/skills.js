const Skill = require('../models/skill')
module.exports = {
    index,
    getOne: show
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll() //define Skill variable
    });
}
function show(req, res){
    const id = req.params.id
    const contextObject = {
        title: 'This is my Show Page',
        skill: Skill.getOne(id) 

    }
    res.render('skills/show', contextObject)
}