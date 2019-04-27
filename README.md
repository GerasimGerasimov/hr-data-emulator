# hr-data-emulator
1. Создаёт фэйковые данные на 500 Кандидатов, по шаблону
```
export default class Candidate {
    constructor () {
        this.ID = 0 //кол-во кандидатов найденных БОТом (заполняется БОТом)
        this.Group = 0 //ID группы
        this.FullName = '', //Имя кандидата
        this.ProfileURI ='',//Ссылка на LinkedIn
        this.Company = '',//Текущее место работы кандидата
        this.Position = '',//Должность кандидата
        this.Status = '',//Статус. Возможные статусы:
                            // 0) Added Кандидат добавлен ещё НЕ принял приглашение
                            // 1) InvitationAccepted Кандидат принял предложение
                            // 2) PrivateMessageRespond Кандидат ответил на личное сообщение
        this.StatusDate = Date.now().toString() //дата изменения статуса
        this.Note = '' //Примечание HR`a о Кандидате
        this.Checked = false,//
        this.uri = ''   //ссылка на Кандидата для API
    }  
}
```
В итоговом JSON имеем объект формата:
```
{
  "data": {
    "data/candidates/0": {
      "ID": 0,
      "Group": 0,
      "FullName": "Mrs. Franco Crist",
```

2. Создаёт список кандидатов и кол-во кандидатов для вставки в свойства Группы
в формате:
```
{
  "CandidatesCount": 2,
  "Candidates": {
    "0": "data/candidates/0",
    "1": "data/candidates/1",
  }
}
```
## Запуск
node index.js

## Результат
В образовавшейся директории "data" создаётся два файла:
1. candidates.json - кандидаты
2. CandidatesList.json - список кандидатов для вставки в группу
