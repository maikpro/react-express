# react-express

## CREATE BACKEND:

1.) create package.json: npm init

1.1) npm i express concurrently

2.) Install Nodemon: npm i nodemon --save-dev

3.) in package.json file:
in "scripts": change to 
"start": "node server.js", (**)
"server": "nodemon server.js"

4.) create server.js file:
-require express, app
-app.get('route'(****), (req, res) => {
 ###data from DB!
-res.json(data from DB!)
})

-const port = 5000
-app.listen(port, () => console.log(`server started on ${port}`))

5.) Use npm run server => uses nodemon to start server.js **

--------------------------------------------------------------------------------------------------
open new terminal && npm i -g create-react-app 

##CREATE FRONTEND:

7.) create-react-app client && cd to client

8.) in client>package.json
add below: 
"proxy": "http://localhost:5000" 
###***(based on the port of backend!!)

9.) use 
	componentDidMount(){
		fetch(<route of backend>) ****because of proxy you dont need to http://localhost/blablabla/blublublu
		.then(res => res.json())
		.then(data => this.setState({data: data}), console.log('Data fetched...', data))
	}
10.) map the data to frontend

change in backend package.json:
add:
"client": "npm start --prefix client",
"dev": "concurrently \"npm run server\" \"npm run client\""

so you only need to npm run dev to starts react & express at the same time!!!

you can also add:
"client-install": "cd client && npm install 
so you don't need to go into client to install react
