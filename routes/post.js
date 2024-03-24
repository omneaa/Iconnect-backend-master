const{
    createPost,deletePost,userPosts,updatePost,specificPost,addComment
}=require('../controllers/PostController');
const validateResource = require('../middlewares/validateResource');
require('dotenv').config();
const { storage } = require('../storage/storage');
const multer = require('multer');
const upload = multer({ storage });
module.exports = (router,passport) => {
	 router.post('/addPost',passport.authenticate('jwt', { session: false }),upload.single('image'),createPost);
     router.post('/addComment/:UserID/:authorID',passport.authenticate('jwt', { session: false }),upload.single('image'),addComment);
     router.put('/updatePost/:PostId/:UserId',passport.authenticate('jwt', { session: false }),upload.single('image'),updatePost);
     router.delete('/deletePost/:PostId/:UserId',passport.authenticate('jwt', { session: false }),deletePost);
     router.get('/userPosts/:UserId',userPosts);
     router.get('/Post/:PostId',specificPost);

	return router;
};