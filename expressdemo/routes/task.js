exports.get_task = function(req,res){
	res.render('task/info',{id : 101, taskName : "Learn Node.js"});
}; 
exports.save_task = function(req,res){
	console.log(req.body , " save the task");
};
exports.get_save_task = function(req,res){
	res.render('task/newTask');
}
