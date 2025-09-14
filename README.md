# Простой шаблон TypeScript для PlayCanvas

Простой шаблон TypeScript для PlayCanvas, который также может синхронизироваться с вашим проектом на playcanvas.com.

## Быстрый старт

Этот шаблон использует инструмент [playcanvas-sync][playcanvas-sync] для загрузки файлов в ваш проект PlayCanvas и требует небольшой настройки с `.pcconfig` и `pcconfig.json`.

1. Скопируйте `.pcconfig` в ваш домашний каталог (Mac: `/Users/<username>`, Windows: `C:/User/<username>`). `.pcconfig` уже настроен на поиск конфигурационного файла в текущей рабочей директории, которой будет папка этого проекта ([подробнее здесь][playcanvas-sync-pcconfig-instructions]).
2. Сделайте копию `pcconfig.template.json` и переименуйте её в `pcconfig.json`. Это необходимо для настройки playcanvas-sync для загрузки файлов в правильный проект PlayCanvas Editor.
3. Заполните/обновите следующие свойства в `pcconfig.json` согласно этим [инструкциям][playcanvas-sync-pcconfig-instructions]:
   - `PLAYCANVAS_API_KEY` - [Инструкции по созданию API ключа][create-api-key]
   - `PLAYCANVAS_PROJECT_ID` - [Где найти ID проекта][find-project-id]
   - `PLAYCANVAS_BRANCH_ID` - [Где найти ID ветки][find-branch-id]
4. В командной строке выполните `npm install` для установки пакетов.
5. В командной строке выполните npm-скрипт `npm run watch-push:debug`.
6. Этот скрипт будет следить за изменениями в папке `src`, компилировать файлы в `build/main.bundle.js` и при успешной компиляции загружать их в ваш проект на playcanvas.com.

> Обратите внимание: если вы добавляете новые `pc.ScriptTypes` или атрибуты к существующим, вам потребуется вручную проанализировать скрипт после загрузки в PlayCanvas Editor. [Подробности здесь][playcanvas-sync-new-script-types].

## npm-скрипты

| Команда                      | Описание                                                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `npm run build:debug`        | Компиляция файлов TypeScript с debug-конфигурацией и сборка в `build/main.bundle.js`                       |
| `npm run build:release`      | Компиляция файлов TypeScript с release-конфигурацией и сборка в `build/main.bundle.js`                     |
| `npm run watch:debug`        | Компиляция файлов TypeScript с debug-конфигурацией при изменениях кода и сборка в `build/main.bundle.js`   |
| `npm run watch:release`      | Компиляция файлов TypeScript с release-конфигурацией при изменениях кода и сборка в `build/main.bundle.js` |
| `npm run push`               | Загрузка `build/main.bundle.js` в проект на playcanvas.com                                                 |
| `npm run build-push:debug`   | Выполняет скрипты `build:debug` и `push`                                                                   |
| `npm run build-push:release` | Выполняет скрипты `build:release` и `push`                                                                 |
| `npm run watch-push:debug`   | Выполняет скрипты `watch:debug` и `push`                                                                   |
| `npm run watch-push:release` | Выполняет скрипты `watch:release` и `push`                                                                 |
| `npm run rollup:build`       | Сборка проекта с помощью Rollup                                                                            |
| `npm run rollup:watch`       | Сборка проекта с помощью Rollup в режиме наблюдения за изменениями                                         |
| `npm run build-push`         | Выполняет скрипты `rollup:build` и `push`                                                                  |
| `npm run watch-push`         | Выполняет скрипты `rollup:watch`                                                                           |
|  |

[playcanvas-sync]: https://github.com/playcanvas/playcanvas-sync
[playcanvas-sync-pcconfig-instructions]: https://github.com/playcanvas/playcanvas-sync#config-variables
[playcanvas-sync-new-script-types]: https://github.com/playcanvas/playcanvas-sync#adding-new-files-as-script-components
[create-api-key]: https://developer.playcanvas.com/user-manual/api/#authorization
[find-project-id]: https://developer.playcanvas.com/user-manual/api/#project_id
[find-branch-id]: https://developer.playcanvas.com/user-manual/api/#branch_id
