if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://DB_Ronald:DB_Ronald@cluster0blogapp.dn3lj.mongodb.net/Cluster0blogapp?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}

}