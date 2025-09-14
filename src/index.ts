import * as pc from 'playcanvas';
import HelloWorld from './helloworld';

// Регистрируем скрипт в PlayCanvas
pc.registerScript(HelloWorld, 'helloWorld');

// Добавляем атрибуты после регистрации
HelloWorld.attributes.add('text', { type: 'string' });
HelloWorld.attributes.add('entityLink', { type: 'entity' });
