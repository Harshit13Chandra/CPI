To Run the Project
Setup a Mysql database

in src/main/resources/application.properites (java backend)

edit according to your local database credentials
spring.application.name=CPIProject


spring.datasource.url=jdbc:mysql://localhost:3306/<your database name goes here>
spring.datasource.username=<username>
spring.datasource.password=<password>
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.jpa.show-sqt=true
spring.jpa.properties.hibernate.format_sql=true


Insert some dummy users and grocery list and restaurants and then test the api via front end

Install node.js to run the react front end
