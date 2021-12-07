function get(){
	return webix.ajax().get("http://localhost:3000/links");
}
function add(data){
	webix.ajax().post("http://localhost:3000/links", data);
}
function remove(id){
	webix.ajax().del(`http://localhost:3000/links/${id}`);
}
function update(data, id){
	webix.ajax().put(`http://localhost:3000/links/${id}`, data);
}

export default {
	get, add , remove, update
};