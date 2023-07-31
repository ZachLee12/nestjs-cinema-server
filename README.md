# NestJS Cinema Server
This project is the backend of a cinema application that I am building as my personal project during the semester break. 
I built this project for my Software Engineer module in my 4th semester using Express, and now the backend is rewritten using NestJS.

## Tasks left to do
1. Display seats that are already booked
2. Rewrite the prisma schema for UserBooking
3. Create a form to allow user to change account settings like username and details (Angular reactive forms)
4. For some reason, don't know why, the HTTP interceptor is executed like 5 times per interception.

## Nice to have
1. Connection polling per 5 seconds, if connection from Angular to NestJS fails.
2. OAuth with Google Account 

## TechStack
### Frontend
- [Angular](https://angular.io/)
  
### Backend
- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)

### API
- [GraphQL](https://graphql.org/)
- REST

### Auth
- [JWT](https://jwt.io/)

### DevOps
- Will deploy on probably Netlify, AWS or Heroku
- For demo purposes, will deploy the full-stack app in a [Kubernetes](https://kubernetes.io/) cluster or just [Docker Compose](https://docs.docker.com/compose/) 
