let user = {
    name: 'Dima',
    age: 20,
    status: 'Student',
    getInfo: function () {
        console.log(`Информация пользователя:
Имя - ${this.name},
Возраст - ${this.age},
Статус - ${this.status}`)
    }
}

user.getInfo()