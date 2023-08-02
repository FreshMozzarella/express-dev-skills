const skills = [
    {id: 3443, skill: 'DOM_Manipulation', knowledgeRating: '2/5', isInteresting: true},
    {id: 3040, skill: 'Callback_functions', knowledgeRating: '1/5', isInteresting: false},
    {id: 3209, skill: 'DRY_Code', knowledgeRating: '1/5', isInteresting: true},
    {id: 3387, skill: 'CSS/HTML', knowledgeRating: '4/5', isInteresting: true},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
}

function getAll(){
    return skills
}
function getOne(id){
    id = Number(id)
    return skills.find(skill => skill.id === id)
}
function create(skill){
    skill.id = Date.now() % 1000000;
    skill.knowledgeRating = '0/5'; //maybe change this to a number?
    skills.push(skill) 
}
function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}