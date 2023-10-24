const sqlite3 = require('sqlite3').verbose();


// TESTING THE USE OF A LOCAL DATABASE USING SQLITE3
// ----------------------------------------------------------------------------------------

const local_db = "./local_db/test.db"; //Database Location

let test_user = {"firstName": "Jonathan" , "lastName": "Jacobo" , "email" : "yahooacc33@yahoo.com" , "password" : "totallysafe", "username" : "notAbot22"} //VALID

let invalid_user = {"firstName": "Antonio" , "lastName": "Vegnini" , "email" : "colonspec2rec@hotmail.com" , "password" : "10001000"} //INVALID, NO USERNAME

//CONNECT TO THE DATABASE
let db = new sqlite3.Database(local_db, sqlite3.OPEN_READWRITE, (err)=>{
    if (err){
        return console.error(err.message);
    }
    console.log("Connected to the in-memory SQLite databse.");
    CreateUser(test_user);
});



//CREATING A NEW USER
function CreateUser(Info = null, DATABASE = "sqlite3"){

    if(validateNewUserInfo(Info)) //IF THE INFORMATION ABOUT THE USER IS EXAMINED AND FOUND SOUND, PROCEED
    {

        db.run(
            "INSERT INTO users (username, first_name, last_name, email, password) VALUES ($user, $fname, $lname, $email, $password)" , {
                $user: Info.username,
                $fname: Info.firstName,
                $lname:Info.lastName,
                $email:Info.email,
                $password:Info.password
            }, err => {
                if(err){
                    console.log(err.message);
                }
            }
        )
        

    } else // IF THE INFORMATION IS BAD, DO NOTHING.
    {
        console.log("Unable to create user, no information provided.");
    }

}

function validateNewUserInfo(Info){ //MAKE SURE USER INFORMATION IS CORRECT

    if(Info) //HAS SOMETHING EVEN BEEN PROVIDED?
    {
        let parameters = ["firstName", "lastName", "email", "password", "username"] // PARAMETERS THE USER OBJECT MUST HAVE.

        parameters.forEach(parameter => { //CHECK IF ALL OF THE ABOVE PARAMETERS EXIST, OTHERWISE HALT FURTHER EXECUTION.
            if(!Info.hasOwnProperty(parameter)){
                console.log(`${parameter} has failed the check.`);
                return false;
            }
        })

        if(checkUsernameAvailability(Info.username)){ //IS THE USER'S CHOSEN USERNAME AVAILABLE? YES -> PROCEED / NO -> HALT EXECUTION
            return true;
        } else {
            console.log("username availability failed.");
            return false;
        }
    }
    return false;
}

function checkUsernameAvailability(c_usrname){
    db.get("SELECT * FROM users WHERE username = ?" , c_usrname, (err,row)=> {
        if(err){
            console.log(err.message);
            return false;
        } else {

        }

        if(row != undefined){
            console.log("Username already exists.");
            return false;
        }
        else{
            console.log("Username available");
            return true;

        }
    })

}

function checkEmailAvailability(c_email){
    db.get("SELECT * FROM users WHERE email = ?" , c_email, (err,row)=> {
        if(err){
            console.log(err.message);
            return false;
        }
        if(row){
            console.log("Email already exists.");
            return false;
        }
        else{
            console.log("Email available");
            return true;

        }
    });

}

db.close((err)=>{
    if (err) {
        return console.error(err.message);
      }
      console.log('Close the database connection.');
})

// ----------------------------------------------------------------------------------------
