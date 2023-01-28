class Inhaler{
    constructor(Inhaler_ID, Inhaler_Name, 
    Start_Date, Expiry_Date, Num_of_Puffs,
    Puffs_Per_Day){
        this.ID = Inhaler_ID;
        this.name = Inhaler_Name;
        this.startDate = Start_Date;
        this.expiryDate = Expiry_Date;
        this.numOfPuffs = Num_of_Puffs;
        this.puffsPerDay = Puffs_Per_Day;
    }

    info(){
        console.log('Inhaler Info', '\n', 'Inhaler ID: ', this.ID, '\n', 'Name:', this.name, '\n',
        'StartDate:', this.startDate, '\n','ExpiryDate:', this.expiryDate, '\n',
        'Number of Puffs: ', this.numOfPuffs, '\n', 'Puffs Per Day: ', this.puffsPerDay);
    }
}

Device = new Inhaler(1, 'Fluticasone', '01 Jan 2023', '01 Sept 2023', 120, 2)

Device.info();