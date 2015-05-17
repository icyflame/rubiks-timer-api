/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 module.exports = {

 	loginuser: function(req, res){

 		var parsedReq = JSON.parse(JSON.stringify(req.body));

 		var currentUser = User.findOne({ email: parsedReq.email }).exec(function(err, user){

 			if(!user){
 				return res.json({
 					user: "does not exist"
 				})
 			}

 			else{

 				if (parsedReq.password === user.password){
 					req.session.authenticated = true;
 					req.session.username = user.email;
 					return res.json({
 						user: "authenticated",
 					});
 				}

 				else
 					return res.json({
 						user: "invalid password"
 					})
 			}
 		});
 	}	
 };

