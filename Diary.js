console.log('This is Diary')

class Diary{
    constructor(Diary_ID, Title, Date, Time, Content){
        this.ID = Diary_ID;
        this.title = Title;
        this.date = Date;
        this.time = Time;
        this.content = Content;
    }

    info(){
        console.log('23 Dec', '\n', 'ID: ', this.ID, '\n', 'Title:', this.title, 
        '\n', 'Date:', this.date, 'Time:', this.time, '\n', 'Content- ', '\n',
        this.content)
    }
}

let Journal = new Diary(001, 'Daily Inhaler count', '23 Dec 2022',
             '07:00pm', 'First at 10am, Second at 1pm. So today up until now 2 times');

Journal.info();