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

SELECT * FROM department;

--roles
INSERT INTO roles (title, salary, department_id)
VALUES ("Salesman", 100000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("Engineer", 150000, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ("Financial Analyst", 120000, 3);
INSERT INTO roles (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
INSERT INTO roles (title, salary, department_id)
VALUES ("Lawyer", 250000, 4);

SELECT * FROM roles;

-- employee
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Adams", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Tyson", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Allan", "Watts", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Maria", "Zardoya", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Julian", "Casablancas", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Summer", "Day", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dan", "Auerbach", 1, 2);

SELECT * FROM employee;