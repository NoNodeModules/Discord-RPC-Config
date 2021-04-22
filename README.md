# Discord-rpc-for-rw
- Игровой статус дискорд с проверкой онлайна RevolutionWorlds
- Чтобы настроить скрипт следуйте инструкции ниже
- Чтобы скачать файлы репозитории `Code` > `Download ZIP`
# Необходимые программы
- NodeJS LTS - https://nodejs.org/en/download/
- И сам Discord
# Инструкция
- Создвние приложение
- 1 > Заходим по ссылке https://discord.com/developers/applications
- 2 > Нажинаем на `New application` и вводим имя приложения которые вы хотите
- 3 > Тыкаем на приложение(если вас не направило сразу) и ищем `APPLICATION ID` и снизу будет айди вашего приложения
- 4 > Если хотите картинки то переходите в `Rich Presence` и нажимаете `Add image`
- В папке репезитории будет 3 файла bat и js, это 3 варианта статуса. Некоторые с 1-2 кнопками, один без кнопок
- Вы должны настроить Config.json, там все описано где что, ток с кнопками будьте осторожно, если вы будете с одной кнопкой, то настройте только `ButtonNameOne` и `ButtonUrlOne`, если два то `ButtonNameOne`, `ButtonUrlOne`,`ButtonNameTwo` и `ButtonUrlTwo`
- `Пример:`
```json
{
    "idApplication": "1234567890",
    "MainText": " Статус включен!",
    "Descreption": "by Простоки",
    "Image": "ProstockyLogo",
    "ImageDescreption": "Логотип Простоки",
    "Image2": "twitter",
    "ImageDescreption2": "Twitter @Prostocky",
    "Timed" : "10000", 
    "ButtonNameOne": "Twitter",
    "ButtonUrlOne": "https://twitter.com/prostocky",
    "ButtonNameTwo": "GitHub",
    "ButtonUrlTwo": "https://github.com/prostocky"
}
```
- И пожалуйста загрузите картинку которая у вас в папке `rw.png`, это иконка ReWorlds. Чтобы нормально работал показ онлайна сервера
- *Обязательно должны в каждой переменой "", в ImageDescreption если не хотите картинку то оставьте описание!!!
- Если что то не понятно, то соре, я плохо объясняю 🚧
# Запуск
- `run-status(no-buttons).bat` запускает скрипт без кнопок
- `run-status(one-button).bat` запускает скрипт с одной кнопкой
- `run-status(two-buttons).bat` запускает скрипт с двумя кнопками
# Значение конфига
- "idApplication" - ID вашего приложение
- "MainText" - Верхний текст
- "Descreption" - Нижный текст
- "Image" - Имя изображение которое будет как иконка
- "ImageDescreption" - Описание иконки при воде курсора
- "Image2" - Имя мального кружочка в лево-нижнем углу
- "ImageDescreption2"- Описание кружочка при воде курсора
- "Timed" - Время, рекомендуется 10000(10 секунд). Каждая секунда это `1000`
- "ButtonNameOne" - Имя первой кнопки
- "ButtonUrlOne" - Ссылка первой кнопки
- "ButtonNameTwo" - Имя второй кнопки
- "ButtonUrlTwo" - Ссылка второй
# Q&A
- `Что если у меня вылезает ошибка` - Попробуйте другой вариант скрипта, если не помогло обратитесь ко мне в дискорд сервер(`RevolutionWorlds` либо в `Простоки Family`)
- `Почему скрипт разделен на 3 части` - Я тупой и не смог сделать вариатны в одном скрипте
- `Что если пишет что тип нет пакетного файла node` - Скачайте и установите NodeJS lts https://nodejs.org/en/download/
- `Какие модули используеться` - discord-rpc, minecraft-server-util
- `Какой язык` - JavaScript под NodeJS
