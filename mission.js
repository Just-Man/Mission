/**
 * Created by just on 19.09.15.
 */
function mission(){
    var
        i,
        j,
        k,
        l,
        m,
        time = 24,
        setWorkTime = +document.getElementById("setWorkTime").value,
        sleepTime = +document.getElementById("sleepTime").value,
        careers =
                {
                    lessons: 10,
                    exam: 0,
                    score: 0,
                    problems: 0,
                    skills: 0,
                    creativity: 5,
                    difficult: 10,
                    goodIdea: 0,
                    greatIdea: 0,
                    doneGreatIdea: 0,
                    price: 0,
                    workTime: 0,
                    overTime: 0,
                    tiredness: 1,
                    workAsshole: parseInt(Math.random() * 10)
                },
        personalLive =
                {
                    happiness: 0,
                    time: 0,
                    selfTime: {
                        sportTime: 0,
                        hobbyTime:0
                    },
                    family: 0,
                    wife: 0,
                    timeForWife: 0,
                    wifeHappy:0,
                    wifeSurprise: parseInt(Math.random() * 20),
                    womenFactor:  parseInt(Math.random() * 20),
                    money: 0,
                    friendsTime: parseInt(Math.random() * 10),
                    bills: 5,
                    tax: 0,
                    food: 10,
                    child: 0,
                    childTime: 0,
                    pet: 0,
                    holiday: 0
                },
        month = {
                    january: 31,
                    february: 28,
                    march: 31,
                    april: 30,
                    may: 31,
                    june: 30,
                    july: 31,
                    august: 31,
                    september: 30,
                    october: 31,
                    november: 30,
                    december: 31
        };
    personalLive.selfTime.sportTime = +document.getElementById("sportTime").value;
    personalLive.selfTime.hobbyTime = +document.getElementById("hobbyTime").value;
    personalLive.time = time - (setWorkTime + sleepTime);
    careers.workTime = (setWorkTime / 10) + 0.1;                       //Добавя се 0.1 за да може при стандартен работен ден от 9 часа стойността да се получи 1-ца
    if(setWorkTime > 12){                                              //Корекция заради умора и/или невъзможност за достатъчно фокъсуране върху задачите
        careers.overTime = setWorkTime - 10;
        for (i = 1;i < careers.overTime; i += 1){
            careers.tiredness = careers.tiredness - 0.1;}
        careers.workTime = careers.workTime * careers.tiredness;
    }
    if(setWorkTime === 0) {                                            //При липса на време за работа няма и професионално развитие
        careers.workTime = 0;
        careers.exam = 0;
    } else {
        for (careers.exam; careers.exam < careers.lessons;) {
            for (j = 1; j < careers.difficult; j += 1) {
                careers.problems = careers.lessons * careers.difficult;
                for (k = 1; k < careers.problems; k += 1) {
                    careers.skills += 0.1 * careers.workTime;           //Уменията се увеличават спрямо броя решени проблеми и отделеното време за работа
                }
                careers.creativity += 10 * careers.workTime;            //Креативността за идеии се увеичава с опита
            }
            careers.score = parseInt(Math.random() * 7);
            console.log(careers.score);
            if (careers.score >= 5) {                                   //Изпит се взима само след много добри резултати
                careers.exam += 1;
                console.log('Exam=' + careers.exam);
                console.log('Skills=' + parseInt(careers.skills));
            }
        }careers.goodIdea = parseInt(careers.creativity * 0.05);        //Истински добрите идеи са % от креативността
        careers.greatIdea = parseInt(careers.goodIdea * 0.01);          //Брилянтните идеи са много малка част от всички добри идеии
        careers.doneGreatIdea = careers.greatIdea * 0.1;
    }
    careers.price = Math.random() * 1000;
    personalLive.money = careers.doneGreatIdea * careers.price;
    personalLive.money = parseInt(personalLive.money);
    personalLive.timeForWife = personalLive.time - ((+personalLive.selfTime.hobbyTime)
        + (+personalLive.selfTime.sportTime));
    for (l = 0; l < personalLive.timeForWife; l +=1){
        personalLive.wifeHappy += 10;
    }
    if (personalLive.money < 30) {
        for (m = 30; m > personalLive.money; m-=1) {
            personalLive.wifeHappy -= 5;
        }
    }
    if (personalLive.wifeHappy < 20){
        personalLive.wifeHappy = 20
    }
    personalLive.wifeHappy = personalLive.wifeHappy +
                             personalLive.friendsTime +
                             personalLive.wifeSurprise -
                             personalLive.womenFactor;

    personalLive.happiness = personalLive.wifeHappy +
                             personalLive.friendsTime +
                             (personalLive.selfTime.hobbyTime * 5) +
                             (personalLive.selfTime.sportTime * 2) -
                             careers.workAsshole;

    document.getElementById('workResult').innerHTML = '<dl> Work </dl>' +
        '<dt> Total Lessons </dt><dd><span>' + careers.lessons + '</span></dd>' +
        '<dt> Difficult </dt><dd><div class="difficult"></div><span>' + careers.difficult + '</span></dd>' +
        '<dt> Creativity </dt><dd><div class="creativity"></div><span>' + careers.creativity + '</span></dd>' +
        '<dt> Good Ideas </dt><dd><div class="goodIdea"></div><span>' + careers.goodIdea + '</span></dd>' +
        '<dt> Great Ideas </dt><dd><div class="greatIdea"></div><span>' + careers.greatIdea + '</span></dd>';

    document.getElementById('personalResult').innerHTML = '<dl> Personal </dl>' +
        '<dt> Happiness </dt><dd><div class="status" style="background:#0f0;width:'+ personalLive.happiness +'%"></div><span>' + personalLive.happiness + '</span></dd>' +
        '<dt> Wife happiness </dt><dd><div class="status" style="background:#0f0;width:'+ personalLive.happiness +'%"></div><span>' + personalLive.wifeHappy + '</span></dd>' +
        '<dt> Money </dt><dd><div class="money"></div><span>' + personalLive.money + '<span></dd>' +
        '<dt> Creativity </dt><dd><div class="creativity"></div><span>' + careers.creativity + '<span></dd>' +
        '<dt> Good Ideas </dt><dd><div class="goodIdea"></div><span>' + careers.goodIdea + '<span></dd>' +
        '<dt> Great Ideas </dt><dd><div class="greatIdea"></div><span>' + careers.greatIdea + '<span></dd>';
}

function background(){
    var a = 5;
}