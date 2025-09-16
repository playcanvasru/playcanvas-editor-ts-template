import * as pc from 'playcanvas';
import HelloWorld from './hello-world';

// Регистрируем скрипт в PlayCanvas
pc.registerScript(HelloWorld, 'helloWorld');

// Добавляем атрибуты после регистрации
HelloWorld.attributes.add('text', { type: 'string' });
