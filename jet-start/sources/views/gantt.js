import { gantt } from "dhtmlx-gantt";

import { JetView } from "webix-jet";
import links from "../services/links";
import tasks from "../services/tasks";
 
export default class Gantt extends JetView {
	config(){
		return {
			template:`
            <div id="gantt_here" style='width:100%; height:100%;'></div>
            `
		};
	}
	init(){
		gantt.init("gantt_here");
		const dp = gantt.createDataProcessor({
			task: {
				create: (data) => tasks.add(data),
				delete: (id) => tasks.remove(id),
				update: (data, id) =>tasks.update(data, id)
			},
			link: {
				create: (data) => links.add(data),
				delete: (id) => links.remove(id),
				update: (data, id) =>links.update(data, id)
			}
		});
		webix.promise.all([tasks.get(), links.get()]).then((result)=>{
			gantt.parse({ data: result[0].json(), links: result[1].json() });
		});
		this.taskProgressStyling();
		
	}
	taskProgressStyling(){
		gantt.templates.task_class  = (start, end, task)=>{
			if(task.progress > 0.75 && task.progress <= 0.9) return "red";
			else if(task.progress > 0.9 ) return  "red mark";
		};
		gantt.templates.rightside_text = (start, end, task) =>{
			if(task.progress === 1) return "Done";
		};
	}	
}    