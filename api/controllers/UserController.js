/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	createnewuser: function(req, res){

		return res.json({
			title: JSON.stringify(req.body)
		});

		// return res.json(req);
	}
	
};

