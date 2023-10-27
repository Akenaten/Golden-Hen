const sqlite3 = require('sqlite3').verbose();


// TESTING THE USE OF A LOCAL DATABASE USING SQLITE3
// ----------------------------------------------------------------------------------------

const local_db = "./local_db/test.db"; //Database Location

let test_user = { "firstName": "Yonah",
                  "lastName": "Abdul", 
                  "email": "tester1234@gmail.com", 
                  "password": "AbdulsHeaven!",
                  "username": "DesertEagle" } ;








 //CONNECT TO THE DATABASE----------------------------------------------------------------------------------------
let db = new sqlite3.Database(local_db, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    // console.log("Connected to the in-memory SQLite databse.");
});
//----------------------------------------------------------------------------------------



//-------------------------------------------ADDING A NEW USER-----------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------

// VERIFIES THAT THE OBJECT "USER" EXISTS AND CONTAINS CERTAIN PROPERTIES / FIELDS / ATTRIBUTES.
// PROCEEDS TO CALL checkUsrName with the "USER" object if the test is successful.
function userInfoIntegrity(USER = null){ 
    let current_status = true;

    var fields = ["firstName", "lastName", "email", "username" , "password"];
    if(USER){
        fields.forEach(field => {
            if(USER.hasOwnProperty(field)){

            }
            else{
                current_status = false;
                console.log(`Field of ${field} is missing from the User object.`);
            }
        })

        if(current_status){
            checkUsrName(USER);
        }

    }
    else{
        current_status = false;
        console.log("No user object provided.");
    }

}

//CHECKS WETHER THE user's USERNAME is already registered.
//If not, proceeds to call checkUsrMail.
function checkUsrName(USER){
    db.get("SELECT username FROM users WHERE username = ?" , [USER.username] , (err, row) => {
        if(!err){
            if(row != undefined){
                console.log(`Username of ${USER.username} already exists.`);
                
            }
            else{
                console.log("Username available.");
                checkUsrMail(USER);
            
            }
        }
        else{
            console.log("error.");
            
        }
    })
}

//CHECKS WETHER THE user's EMAIL is already registered.
//If not, proceeds to call addUser.
function checkUsrMail(USER){
    
    db.get("SELECT email FROM users WHERE email = ?" , [USER.email] , (err, row) => {
        if(!err){
            if(row != undefined){
                console.log(`Email of ${USER.email} already exists.`);
                
            }
            else{
                console.log("Email available.");
                addUser(USER);
            
            }
        }
        else{
            console.log("error.");
            
        }
    })
}

//Adds the USER object to the "users" table of the test.db database.
//Fields "middle_name" and "created_at" are currently optional (no need to include them in the USER object.)
function addUser(USER){

    db.run("INSERT INTO users (first_name, last_name, middle_name, username, email, password, created_at) VALUES ($fname, $lname , $mname, $usrname, $email, $pass , $date)",
    {
        $fname: USER.firstName,
        $lname: USER.lastName,
        $usrname: USER.username,
        $email: USER.email,
        $pass: USER.password,
        $date: USER.created_at ? USER.created_at : '01-01-1991',
        $mname: USER.middleName ? USER.middleName : null
    }, (err) => {
        if(err){
            console.log(err.message);
        } else {
            console.log("User successfully added!");
        }
    });

}

//Starting point for the addition of a new User to the test database.
// The chain sequence goes: userInfoIntegrity -> checkUsrName -> checkUsrMail -> addUser.
function CommenceUserAddition(USER){
    userInfoIntegrity(USER);
}

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------






































// ----------------------------------------------------CLOSE DATABASE-----------------------
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    // console.log('Close the database connection.');
})

// ----------------------------------------------------------------------------------------
