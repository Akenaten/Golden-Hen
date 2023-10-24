.import --csv users.csv temp_users

INSERT INTO 'users' ("username", "password", "email", "first_name" , "middle_name" , "last_name", "created_at")
SELECT * FROM 'temp_users';

SELECT * FROM "temp_users";

DROP TABLE "temp_users";

-- .import --csv accounts.csv temp_users

-- INSERT INTO 'accounts' ("user_id", "account_number", "balance", "account_type" , "created_at")
-- SELECT * FROM 'temp_users';


-- DROP TABLE "temp_users";


