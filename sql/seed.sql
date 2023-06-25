USE work_db;

--departments 
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

SELECT * FROM department

--roles
INSERT INTO role (title, salary, department_id)
VALUES ("Salesman", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Financial Analyst", 120000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 250000, 4);

SELECT * FROM roles