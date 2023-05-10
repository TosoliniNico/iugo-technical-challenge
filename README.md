# iugo-technical-challenge
NodeJs Technical Test

### **Exercise 1, 2 & 3**

Run `npm test`

### **Exercise 4**

1. Create an `.env` file in the root directory of your project with a `JWT_SECRET` value. For example: `JWT_SECRET=mysupersecretkey`.

2. Start the Express server by running the command `node src/middlewareExercise/index.js` in your terminal.

3. Generate a JWT token using a tool like [jwt.io](https://jwt.io/). This will be used to authenticate your requests.

4. Add the JWT token to the Authorization header of your requests. The header should have the following format: `Authorization: Bearer <jwt_token>`. Replace `<jwt_token>` with the token you generated in step 3.

5. Make a GET request to the desired endpoint using Postman. The URL should be something like `http://localhost:3000/private-route` if you're testing the private route. If everything is set up correctly, you should receive a response with the message "Welcome to the private route".