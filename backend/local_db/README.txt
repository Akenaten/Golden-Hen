Testing a locally hosted database to be managed through Node's sqlite3 module.

During Testing, Akenaten, has been using a local instalment of sqlite3.

Below is an explanation of each SQL file in this directory.

table_maker => Creates all the tables. Details on types, columns etc. can be viewed in the project's diagram that's available in Google Docs.
wiper => Drops all of the tables created by table_maker.
populate => Inserts a few rows into a table. All data used in CSV format.
test => Is used to execute commands / queries etc. that i change too often.