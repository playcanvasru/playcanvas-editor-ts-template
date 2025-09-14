import * as pc from 'playcanvas';

export default class HelloWorld extends pc.ScriptType {
	text: string = '';
	entityLink: pc.Entity | null = null;

	initialize() {
		console.log('Hello ' + this.text);
	}
}
