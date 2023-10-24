CREATE TABLE IF NOT EXISTS "users"(
    "id" INTEGER,
    "username" TEXT UNIQUE,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "middle_name" TEXT,
    "last_name" TEXT NOT NULL,
    "created_at" NUMERIC,
    PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS "accounts"(
    "id" INTEGER,
    "user_id",
    "account_number" TEXT,
    "balance" NUMERIC,
    "account_type" TEXT,
    "created_at" NUMERIC,
    PRIMARY KEY("id")
    FOREIGN KEY("user_id") REFERENCES "users"("id")
);

CREATE TABLE IF NOT EXISTS "transactions"(
    "id" INTEGER,
    "sender_account_id" INTEGER,
    "receiver_account_id" INTEGER,
    "transaction_type" CHECK("transaction_type" IN ('Deposit', 'Withdrawal', 'Transfer')),
    "amount" NUMERIC,
    "description" TEXT,
    "created_at" NUMERIC,
    PRIMARY KEY("id"),
    FOREIGN KEY("sender_account_id") REFERENCES "accounts"("id"),
    FOREIGN KEY("receiver_account_id") REFERENCES "accounts"("id")
);