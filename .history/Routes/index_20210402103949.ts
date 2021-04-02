import express from 'express';
export const router = express.Router();

// Contact Model
import * as ContactModel from '../Models/contact';
const Contact =  ContactModel.Model;  // Contact Alias

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
  // db.contacts.find()
  Contact.find(function(err, contacts){
    if (err)
    {
      return console.error(err);
    }
    // console.log(contacts);
    // res.json(contacts);
    res.render('index', { title: 'Contact List', page: 'contact-list', user: '', contacts: contacts });
    
  });

});

/* GET Edit page. */
router.get('/edit/:id', function(req, res, next) 
{
  res.render('index', { title: 'Edit', page: 'edit', user: ''  });
});

/* POST Edit page. */
router.post('/edit/:id', function(req, res, next) 
{
  res.redirect('/contact-list');
});



