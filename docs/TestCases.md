## Employees List
#### WHEN
User navigates to http://webmd-web-app-20191216181919-hostingbucket-develop.s3-website-us-east-1.amazonaws.com/
#### THEN
User sees list of Employees with their information (id, firstName, lastName, phoneNumber, city, state, country, hireDate, employmentEndDate)



## User create
#### GIVEN 
User1 and User2 are on separate computers and navigate to http://webmd-web-app-20191216181919-hostingbucket-develop.s3-website-us-east-1.amazonaws.com/

User1 Click create

User1 fills out create fields fields (id, firstName, lastName, phoneNumber, city, state, country, hireDate, employmentEndDate)

#### WHEN
User1 clicks submit
#### THEN
User1 sees the employee added to the employees list

User2 sees the employee add to the employees list


## User Delete
#### GIVEN
User1 and User2 are on separate computers and navigate to http://webmd-web-app-20191216181919-hostingbucket-develop.s3-website-us-east-1.amazonaws.com/
#### WHEN
User1 clicks the delete button on the first employee
#### THEN
User1 sees the employee removed from the employees list

User2 sees the employee removed from the employees list

## User Update
 - Defect. Employee does not get updated. 
#### GIVEN
User1 and User2 are on separate computers and navigate to http://webmd-web-app-20191216181919-hostingbucket-develop.s3-website-us-east-1.amazonaws.com/
#### WHEN
User1 clicks the update button on the first employee
#### THEN
User1 the update form filled out with the users information

#### WHEN
User1 changes the first and last name of the first employee

#### THEN
User1 sees the employee updated in the employees list

User2 sees the employee updated in the employees list
