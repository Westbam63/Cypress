describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail'). type('german@dolnikov.ru'); // Сввели верный логин
        cy.get('#pass'). type('iLoveqastudio1');// ввели верный праль
        cy.get('#loginButton'). click();// нажать войти
        cy.get('#messageHeader'). contains('Авторизация прошла успешно') // проверка текста
        cy.get('#exitMessageButton > .exitIcon'). should('be.visible'); //Есть крестик
        
        })
    })
    it('Любой е-мэйл и забыли пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail'). type('koshka@ribka.ru'); // Ввели любой е-мейл
        cy.get('#pass'). type('iLoveqastudio7');// ввели верный праль
        cy.get('#loginButton'). click();// нажать войти
        cy.get('#forgotEmailButton'). click(); // нажать забыли пароль

        })
        it('Не верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail'). type('german@dolnikov.ru'); // Сввели верный логин
        cy.get('#pass'). type('iLoveqastudio');// ввели верный праль
        cy.get('#loginButton'). click();// нажать войти
        cy.get('#messageHeader'). contains('Авторизация прошла успешно') // проверка текста
        cy.get('#exitMessageButton > .exitIcon'). should('be.visible'); //Есть крестик
        cy.get('#forgotEmailButton'). click(); // нажать забыли пароль

        })

    it('негатиавный кейс валидации', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#mail'). type('germandolnikov.ru'); // Сввели верный логин
    cy.get('#pass'). type('iLoveqastudio1');// ввели верный праль
    cy.get('#loginButton'). click();// нажать войти
    cy.get('#messageHeader'). contains('Нужно исправить проблему валидации') // проверка текста
    cy.get('#exitMessageButton > .exitIcon'). should('be.visible'); //Есть крестик
    cy.get('#forgotEmailButton'). click(); // нажать забыли пароль

    })

it('Не верный пароль и верный логин', function () {
cy.visit('https://login.qa.studio/'); // зашли на сайт
cy.get('#mail'). type('GerMan@Dolnikov.ru'); // Сввели верный логин
cy.get('#pass'). type('iLoveqastudio1');// ввели верный праль
cy.get('#loginButton'). click();// нажать войти
cy.get('#messageHeader'). contains('Такого логина и пароля нет') // проверка текста
})

describe('Покупка аватара', function () {                               // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('Argentina');      // вводим логин
         cy.get('input[type="password"]').type('Kozel0302!!!');    // вводим пароль
         cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
         cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
         cy.get('.available > button').first().click();                  // кликаем по кнопке Купить у первого доступного аватара
         cy.get('.credit').type('4620869113632996');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
         cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });


// План
 // Ввести правильный логин
 // Ввести правильный пароль
// Нажать войти
// Проверить нужный текст и наличие кнопки крестик
 