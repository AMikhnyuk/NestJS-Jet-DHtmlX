function get(){
	return webix.ajax().get("http://localhost:3000/tasks");
}
function add(data){
	webix.ajax().post("http://localhost:3000/tasks", data);
}
function remove(id){
	webix.ajax().del(`http://localhost:3000/tasks/${id}`);
}
function update(data, id){
	webix.ajax().put(`http://localhost:3000/tasks/${id}`, data);
}
export default {
	get, add , remove, update
};