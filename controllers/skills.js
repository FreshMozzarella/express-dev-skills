const Skill = require('../models/skill')
module.exports = {
    index,
    getOne: show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(), //define Skill variable
        title: 'All My Skills'
    });
}
function show(req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill details'
    })
}
function newSkill(req, res){
    res.render('skills/new', {title: 'New Skill'});
}
function create(req, res){
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills')
}
function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id); //time to refer to model
    res.redirect('/skills')
}
function update(req, res){
const id = Number(req.params.id);
req.body.id = id
console.log(req.body, 'data passed to update')
Skill.update(id, req.body)
res.redirect(`/skills/${id}`)
}

function edit(req, res){
   const id = req.params.id;
//    res.send(Skill.getOne(id))
   res.render('skills/edit', {title: 'skills edit', skill: Skill.getOne(id) });
}