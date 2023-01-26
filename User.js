// public class User {
//     private int User_ID;
//     private String F_Name;
//     private String L_Name;
//     private int P_Number;
//     private String Email;
//     private String DOB;
//     private String Address;
//     private String Medical_Condition;
// }

class User {
    // constructor(FName){
    //     this.firstName = FName;
    // }

    // get F_Name(){
    //     return this.firstName;
    // }

    // set F_Name(FName){
    //     this.firstName = FName;
    // }

    constructor(User_ID, F_Name, L_Name, P_Number, Email, DOB, Addresses, Medical_Condition){
        this.UID = User_ID;
        this.firstName = F_Name;
        this.lastName = L_Name;
        this.patientNum = P_Number;
        this.email = Email;
        this.dateOfBirth = DOB;
        this.address = Addresses;
        this.medicalCondition = Medical_Condition;
    }

    info(){
        console.log('UserInfo', '\n', 'UID: ', this.UID, '\n', 'FirstName: ', this.firstName, '\n', 'LastName: ', 
        this.lastName, '\n', 'Patient No.: ', this.patientNum, '\n', 'Email: ', this.email, 
        '\n', 'DOB: ', this.dateOfBirth, '\n', 'Address: ', this.address, '\n', 
        'Medical Conditions: ', this.medicalCondition);
    }

}

let Account = new User(1, 'John', 'Smith', 001, 'JSmith@gmail.com', '01/10/1990', '5 last Avenue', 'Pollen and Humidity');
let Account2 = new User(2, 'Julia', 'Dek', 002, 'JDekk@gmail.com', '05/07/1989', '7 Ocean Drive', 'High Humidity');

Account.info();
Account2.info();