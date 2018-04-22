var mongoose = require('mongoose'); 



var PostaSchema = mongoose.Schema({ //criando novo schema do banco
    titulo: String,
    local: String,
    descricao: String,


});

module.exports = mongoose.model('Posta', PostaSchema);