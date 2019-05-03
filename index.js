const fs = require('fs').promises
const faker = require('faker')

const today = () => {
    let today  = new Date()
    let dd = today.getDate();
    let mm = today.getMonth()+1;
        mm = (mm < 10)? `0${mm}`:mm 
    let yyyy = today.getFullYear();
    return `${dd}.${mm}.${yyyy}`
}

class Candidate {
    constructor () {
        this.ID = 0 //кол-во кандидатов найденных БОТом (заполняется БОТом)
        this.Group = 0 //ID группы
        this.FullName = faker.name.findName(), //Имя кандидата
        this.ProfileURI = "https://www.linkedin.com/in/gerasim-gerasimov-b55936a5/",//Ссылка на LinkedIn
        this.Company = faker.company.companyName(),//Текущее место работы кандидата
        this.Position = faker.name.jobTitle(),//Должность кандидата
        this.Status = faker.random.arrayElement(['Added','InvitationAccepted','PrivateMessageRespond']),//Статус. Возможные статусы:
                            // 0) Added Кандидат добавлен ещё НЕ принял приглашение
                            // 1) InvitationAccepted Кандидат принял предложение
                            // 2) PrivateMessageRespond Кандидат ответил на личное сообщение
        this.StatusDate = today(), //дата изменения статуса
        this.Note = faker.random.arrayElement(['','Адекватный','Не ищет работу','В поиске работы']), //Примечание HR`a о Кандидате
        this.Checked = faker.random.boolean()//
    }  
}

//объект для JSON всех кандидатов
var candidates = {
    data:{}
}

//объект для вставки списка кандидатов в свойства группы
var uriList = {
    CandidatesCount:0,
    Candidates:{}
}

for (let i=0; i < 500; i++){
    let uri = `data/candidates/${i}`
    candidates.data[uri] = new Candidate()
    uriList.CandidatesCount = i
    uriList.Candidates[i] = uri
}

//console.log(JSON.stringify(uriList, null, 2))

//данные о кандидатах
fs.writeFile('data/candidates.json',
                JSON.stringify(candidates, null, 2),
                    'utf8')
.then (
    console.log('Canditates.JSON Ready!')
)

//перечень кандидатов для вставки в совойства группы
fs.writeFile('data/CandidatesList.json',
                JSON.stringify(uriList, null, 2),
                    'utf8')
.then (
    console.log('CanditatesList.JSON Ready!')
)