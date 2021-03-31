import express = require('express');
let router = express.Router();

// Contact Model
const ContactModel = require('../Models/contact');
const Contact =  ContactModel.Model;

/* GET Home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home', user: '' });
});

/* GET Home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home', user: '' });
});

/* GET About page. */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About Us', page: 'about', user: '' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Our Projects', page: 'projects', user: '' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Our Services', page: 'services', user: '' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact Us', page: 'contact', user: '' });
});

/* GET Login page. */
router.get('/login', function(req, res, next) 
{
  res.render('index', { title: 'Login', page: 'login', user: '' });
});

/* GET Register page. */
router.get('/register', function(req, res, next) 
{
  res.render('index', { title: 'Register', page: 'register', user: '' });
});

/* GET Logout page. AKA/ Logout Route */
router.get('/logout', function(req, res, next) 
{
  res.render('index', { title: 'Logout', page: 'logout', user: '' });
});


/***************************| TEMPORARY ROUTING |***********************************/

/* GET Contact List page. */
router.get('/contact-list', function(req, res, next) 
{
  res.render('index', { title: 'Contact List', page: 'contact-list', user: 'admin' });
});

/* GET Edit page. */
router.get('/edit', function(req, res, next) 
{
  res.render('index', { title: 'Add', page: 'edit', user: 'admin' });
});

/* GET Register page. */
router.get('/edit/:id', function(req, res, next) 
{
  let id = req.params.id;
  res.render('edit', { title: 'Edit', page: 'edit', contactID: id, user: 'admin'  });
});

module.exports = router;
