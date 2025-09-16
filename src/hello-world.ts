import * as pc from 'playcanvas';

export default class HelloWorld extends pc.ScriptType {
	text: string = '';

	initialize() {
		console.log('Hello ' + this.text);
	}
}
