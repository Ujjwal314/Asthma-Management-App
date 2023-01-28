class Assessment{
    constructor(Assessment_ID, Assessment_No, Assessment_Date, Assessment_Score){
        this.ID = Assessment_ID;
        this.no = Assessment_No;
        this.date = Assessment_Date;
        this.score = Assessment_Score;
    }

    info(){
        console.log('Assessment', '\n', 'AssessmentID: ', this.ID, '\n', 'AssessmentNo: ', this.no, '\n', 'AssessmentDate:', this.date, '\n', 'AssessmentScore: ', this.score);
    }
}

Task = new Assessment(1, 1, '01Jan2023', 70/100);

Task.info();