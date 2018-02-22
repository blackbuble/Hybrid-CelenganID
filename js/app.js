// Dom7
var $ = Dom7;
var login_screen;

// Framework7 App main instance
var app  = new Framework7({
  init: false,
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  //routes: routes,
  on: {
    init: function () {
        console.log('App initialized');
        //createLogin();
    },
    pageInit: function () {
        console.log('Page initialized');
    },
  },
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  //routes: routes,
});

// Init/Create views
/* var homeView = app.views.create('#view-home', {
  url: '/'
}); */
/* var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var profileView = app.views.create('#view-profile', {
  url: '/profile/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});
 */
 
 //Firebase initial
 var dbRef = firebase.database();
 var usersRef = dbRef.ref('User')

//Swiper Initial 
var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
  },
});


//Login Window
function createLogin(){
    login_screen = app.loginScreen.create({
    content: '<div class="login-screen">'+
                '<div class="view">'+
                    '<div class="page views tabs">'+
                    '<div class="page-content login-screen-content">'+
                        '<div class="login-screen-title color-orange">'+
                            'CelenganID'+
                        '</div>'+
                        '<form id="frmLogin">'+
                        '<div class="list">'+
                            '<ul>'+
							'<li class="item-content item-input">'+
                                '<div class="item-inner">'+
                                '<div class="item-title item-label">Masuk</div>'+
                                
                                '</div>'+
                            '</li>'+
                            '<li class="item-content item-input">'+
                                '<div class="item-inner">'+
                                '<div class="item-title item-label">Email</div>'+
                                '<div class="item-input-wrap">'+
                                    '<input type="email" name="email" id="email" placeholder="Email Pengguna">'+
                                    '<span class="input-clear-button"></span>'+
                                '</div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="item-content item-input">'+
                                '<div class="item-inner">'+
                                '<div class="item-title item-label">Password</div>'+
                                '<div class="item-input-wrap">'+
                                    '<input type="password" name="password" id="password" placeholder="Password">'+
                                    '<span class="input-clear-button"></span>'+
                                '</div>'+
                                '</div>'+
                            '</li>'+
                            '</ul>'+
                        '</div>'+
                        '<div class="list">'+
                            '<ul>'+
                            '<li>'+
                                '<a href="#" class="item-link list-button button-login button button button-big button-raised" >Masuk</a>'+
                            '</li>'+
							'<li>'+
                                '<a href="#" class="item-link list-button button-register button button button-big button-raised">Daftar</a>'+
                            '</li>'+
                            '</ul>'+
                            '<div class="block-footer">'+
                              
                                'https:///www.celengan.id '+ '<br/>' +' App Ver : beta 2.0'+
                            '</div>'+
                        '</div>'+
                        '</form>'+
						'<form id="frmReg">'+
                        '<div class="list">'+
                            '<ul>'+
                            '<li class="item-content item-input">'+
                                '<div class="item-inner">'+
                                '<div class="item-title item-label">Daftar</div>'+
                                
                                '</div>'+
                            '</li>'+
							'<li class="item-content item-input">'+
                                '<div class="item-inner">'+
                                '<div class="item-title item-label">Email</div>'+
                                '<div class="item-input-wrap">'+
                                    '<input type="email" name="email" id="RegEmail" placeholder="Email Pengguna">'+
                                    '<span class="input-clear-button"></span>'+
                                '</div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="item-content item-input">'+
                                '<div class="item-inner">'+
                                '<div class="item-title item-label">Password</div>'+
                                '<div class="item-input-wrap">'+
                                    '<input type="password" name="password" id="RegPassword" placeholder="Password">'+
                                    '<span class="input-clear-button"></span>'+
                                '</div>'+
                                '</div>'+
                            '</li>'+
							'<li class="item-content item-input">'+
                                '<div class="item-inner">'+
                                '<div class="item-title item-label">Ulangi Password</div>'+
                                '<div class="item-input-wrap">'+
                                    '<input type="password" name="repassword" id="RePassword" placeholder="Ulangi Password">'+
                                    '<span class="input-clear-button"></span>'+
                                '</div>'+
                                '</div>'+
                            '</li>'+
							
							'<li class="item-content item-input">'+
                                '<div class="item-inner">'+
                                '<div class="item-title item-label">Dengan menekan tombol DAFTAR, maka anda setuju dengan semua syarat & ketentuan celenganID</div>'+
                                
                                '</div>'+
                            '</li>'+
							
                            '</ul>'+
                        '</div>'+
                        '<div class="list">'+
                            '<ul>'+
                            '<li>'+
                                '<a href="#" class="item-link list-button button-register-new button button button-big button-raised" >Daftar</a>'+
                            '</li>'+
							'<li>'+
                                '<a href="#" class="item-link list-button link-login" >Telah mempunyai akun celenganID</a>'+
                            '</li>'+
                            '</ul>'+
                            '<div class="block-footer">'+
                              
                                'https:///www.celengan.id '+ '<br/>' +' App Ver : beta 2.0'+
                            '</div>'+
                        '</div>'+
                        '</form>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                '</div>',
        on: {
        opened: function () {
            console.log('Login Screen opened')
        }
        }
    });
    login_screen.open(false);
    checkLogin();

	

$('.link-login').on('click', function (e) {
	 document.getElementById('frmReg').style.display = "none";
	 document.getElementById('frmLogin').style.display = "block";
	 console.log('Login should show');
});	

$('.button-register').on('click', function (e) {
	e.preventDefault();
	 document.getElementById('frmReg').style.display = "block";
	 document.getElementById('frmLogin').style.display = "none";
});

$('.button-register-new').on('click', function (e) {
	e.preventDefault();
	 document.getElementById('frmReg').style.display = "block";
	 document.getElementById('frmLogin').style.display = "none";
	 console.log('Register press');
	 var data = {
		 area: '',
		 celengan:0,
		 exchange_count: 0,
		 firstLogin: true,
		 imageURL: '',
		 name: '',
		 no_hp: '',
		 st_check:'',
		 status: 'user',
		 unique_code: 0,
		 username:''
	 }
	 console.log(data);
	 var email = $('#RegEmail').val();
	 var passwords = {
      password : $('#RegPassword').val(), //get the pass from Form
      cPassword : $('#RePassword').val(), //get the confirmPass from Form
    }
	console.log(email);
	
	if (email.length < 4) {
          alert('Please enter an email address.');
          return;
    }
    if (passwords.password.length < 4) {
          alert('Please enter a password.');
          return;
    }
	if (passwords.cPassword.length < 4) {
          alert('Please enter a password.');
          return;
    }
	
	if( email != '' && passwords.password != ''  && passwords.cPassword != '' ){
      if( passwords.password == passwords.cPassword ){
        //create the user
        
        firebase.auth()
          .createUserWithEmailAndPassword(email, passwords.password)
          .then(function(user){
            //now user is needed to be logged in to save data
            console.log("Authenticated successfully with payload:", user);
            auth = user;
            //now saving the profile data
            usersRef
              .child(user.uid)
              .set(data)
              .then(function(){
				 firebase.auth().signOut();  
                console.log("User Information Saved:", user.uid);
				app.dialog.alert('Selamat, anda telah menjadi user celenganID. Silahkan login untuk menggunakan aplikasi celenganID','Terimakasih');
				document.getElementById('frmReg').style.display = "none";
				document.getElementById('frmLogin').style.display = "block";
              })
           
          })
          .catch(function(error){
            console.log("Error creating user:", error);
            alert(error);
          });
      } else {
        //password and confirm password didn't match
      alert('Password not match.');
      }
    }  
	
});	

 $('.button-login').on('click', function (e) {
	 console.log('Login Press');
       // Check User login 1st
		if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
		console.log('Signout');
        // [END signout]
      } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
		console.log(email);
		console.log(password);
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password)
		
		// Check user & redirect to other page
		.then((firebaseUser) => {
        return firebaseUser
		})
		.then((firebaseUser) => {
		  firebase.auth().onAuthStateChanged(function(firebaseUser) {
			if (firebaseUser) {
				app.loginScreen.close();
				localStorage.setItem("token", "true");
				console.log('Login Success');
				document.getElementById('myEmail').innerHTML = firebaseUser.email;
				console.log(firebaseUser.uid);
			}
		  });
		})
		// End Check
		
		.catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
         // document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
		  
      }
      //document.getElementById('quickstart-sign-in').disabled = true;
		
		
	   });  
}

function checkLogin(){
  var token = "";
  if (typeof(Storage) !== "undefined" && localStorage.getItem("token")!=="") {
      token = localStorage.getItem("token");
  }
  if(token){
  login_screen.close();
  //firebase.auth().currentUser();
  var uid = firebase.auth().currentUser.uid;
  console.log(usersRef.child(uid));
  firebase.database().ref('User/'+uid).on('value', function(snapshot){
    console.log(snapshot.val());
   var user = snapshot.val();
   console.log(user.celengan);
   document.getElementById('amount').innerHTML = 'Rp ' + user.celengan;
   document.getElementById('amountLeft').innerHTML = 'Rp ' + user.celengan;
   if (user.status == "user"){
	   document.getElementById('coinAgen').style.display = "none";
   }else{
	   document.getElementById('coinAgen').style.display = "block";
   }
});
  document.getElementById('myEmail').innerHTML = firebase.auth().currentUser.email;
  
  }else{
  login_screen.open();
  }
  }


$(document).on('page:init', function (e) {  
  // Code for About page
  var page = e.detail;
   if (page.name === 'home') {
       //getDashboard();
   }
});

$('.button-logout').on('click', function (e) {
	console.log('Exit button press');
    app.dialog.confirm('Yakin ingin keluar aplikasi ?','Konfirmasi Keluar', function () {
        localStorage.removeItem("token");
        checkLogin();
		firebase.auth().signOut();
        //location.reload();
    });    
});



app.init();