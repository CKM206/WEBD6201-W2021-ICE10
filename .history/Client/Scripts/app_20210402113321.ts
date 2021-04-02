namespace core
{

  let linkData: string;
  
  function testFullName(): void
  {
    let messageArea = $("#messageArea").hide();
    let fullNamePattern = /([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*/;

        
    $("#fullName").on("blur", function()
    {
      if(!fullNamePattern.test($(this).val().toString()))
      {
        $(this).trigger("focus").trigger("select");
        messageArea.show().addClass("alert alert-danger").text("Please enter a valid Full Name. This must include at least a Capitalized first name followed by a Capitlalized last name.");
      }
      else
      {
          messageArea.removeAttr("class").hide();
      }
    });
  }

  function testContactNumber(): void
  {
    let messageArea = $("#messageArea");
    let contactNumberPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        
    $("#contactNumber").on("blur", function()
      {
        if(!contactNumberPattern.test($(this).val().toString()))
        {
          $(this).trigger("focus").trigger("select");
          messageArea.show().addClass("alert alert-danger").text("Please enter a valid Contact Number. Country code and area code are both optional");
        }
        else
        {
          messageArea.removeAttr("class").hide();
        }
      });
  }

  function testEmailAddress(): void
  {
    let messageArea = $("#messageArea");
    let emailAddressPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        
    $("#emailAddress").on("blur", function()
      {
        if(!emailAddressPattern.test($(this).val().toString()))
        {
          $(this).trigger("focus").trigger("select");
          messageArea.show().addClass("alert alert-danger").text("Please enter a valid Email Address.");
        }
        else
        {
            messageArea.removeAttr("class").hide();
        }
      });
  }

  function formValidation(): void
  {
    testFullName();
    testContactNumber();
    testEmailAddress();
  }

  function displayContact(): void
  {
    // form validation
    formValidation();

    $("#sendButton").on("click", () => 
    {
      // Get each InputElement from the page
      let subscribeCheckbox = $("#subscribeCheckbox")[0] as HTMLInputElement;
      let fullName = $("#fullName")[0] as HTMLInputElement;
      let contactNumber = $("#contactNumber")[0] as HTMLInputElement;
      let emailAddress = $("#emailAddress")[0] as HTMLInputElement;

      // Use the InputElements for checking
      if (subscribeCheckbox.checked) 
      {
        let contact = new core.Contact(
          fullName.value,
          contactNumber.value,
          emailAddress.value
        );

        if (contact.serialize()) 
        {
          let key = contact.FullName.substring(0, 1) + Date.now();

          localStorage.setItem(key, contact.serialize());
        }
      }

      // return to the contact list
      location.href = "/contact";
    });
    
    $("#cancelButton").on("click", function () {
      // return to the contact list
      location.href = "/contact";
    });
  }
  
  function displayContactList(): void
  {
    // First Check to see if someone is logged in
    authGuard();
    
      $("a.delete").on("click", function () {
        if (confirm("Are you sure?")) {
          localStorage.removeItem($(this).val().toString());
        }
        location.href = "/contact-list";
      });

    // if (localStorage.length > 0) 
    // {
    //   let contactList = document.getElementById("contactList");

    //   let data = "";

    //   let keys = Object.keys(localStorage);

    //   let index = 1;

    //   for (const key of keys) {
    //     let contactData = localStorage.getItem(key);

    //     let contact = new core.Contact();
    //     contact.deserialize(contactData);

    //     data += `<tr>
    //       <th scope="row" class="text-center">${index}</th>
    //       <td>${contact.FullName}</td>
    //       <td>${contact.ContactNumber}</td>
    //       <td>${contact.EmailAddress}</td>
    //       <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
    //       <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
    //       </tr>`;

    //     index++;
    //   }

    //   contactList.innerHTML = data;

    //   $("button.edit").on("click", function () {
    //     // Load the edit page, include the data to be passed
    //     location.href = '/edit/' + $(this).val().toString();  // Load link + Data
    //   });

    // }
    // $("#addButton").on("click", function () {
    //   location.href = "/edit";
    // });
  }

  function displayEdit(): void
  {
    //   // Get the linkData
    //   let key = $("body")[0].dataset.contactid;

    //   console.log(key);

    //   let contact = new core.Contact();

    //   // check to ensure that the key is not empty
    //   if(key != undefined && key != "")
    //   {
    //     // get contact info from localStorage
    //     contact.deserialize(localStorage.getItem(key));

    //     // display contact information in the form
    //     $("#fullName").val(contact.FullName);
    //     $("#contactNumber").val(contact.ContactNumber);
    //     $("#emailAddress").val(contact.EmailAddress);
    //   }
    //   else
    //   {
    //     // modify the page so that it shows "Add Contact" in the header 
    //     $("main>h1").text("Add Contact");
    //     // modify edit button so that it shows "Add" as well as the appropriate icon
    //     $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);
    //   }

    //   // form validation
       formValidation();
      
    //  $("#editButton").on("click", function() 
    //  {
    //    // check to see if key is empty
    //    if (key == "") {
    //      // create a new key
    //      key = contact.FullName.substring(0, 1) + Date.now();
    //    }

    //    // copy contact info from form to contact object
    //    contact.FullName = $("#fullName").val().toString();
    //    contact.ContactNumber = $("#contactNumber").val().toString();
    //    contact.EmailAddress = $("#emailAddress").val().toString();

    //    // Only allow a new Contact if all info is present
    //    if (contact.serialize()) 
    //    {
    //      // add the contact info to localStorage
    //      localStorage.setItem(key, contact.serialize());
    //      // return to the contact list
    //    }

    //    // Remove any link data
    //    linkData = '';
    //    location.href = "/contact-list";
    //  });
   

      // $("#cancelButton").on("click", function()
      // {
      //   // Remove any link data
      //   linkData = '';
        
      //   // return to the contact list
      //   location.href = '/contact-list';
      // });
  }

  function displayLogin(): void
  {
    let messageArea = $("#messageArea");
    messageArea.hide();

    $("#loginButton").on("click", function () 
    {
      let username = $("#username");
      let password = $("#password");
      let success = false;
      let newUser = new core.User();

      // use ajax to access the json file
      $.get("./Data/users.json", function (data) 
      {
        // check each user in the users.json file  (linear search)
        for (const user of data.users) {
          if (username.val() == user.Username &&
              password.val() == user.Password) 
          {
            newUser.fromJSON(user);
            success = true;
            break;
          }
        }

        // if username and password matches - success... then perform login
        if (success) 
        {
          // add user to session storage
          sessionStorage.setItem("user", newUser.serialize());

          // hide any error message
          messageArea.removeAttr("class").hide();

          // redirect user to secure area - contact-list.html
          //loadLink("contact-list"); // This is from before Express
          location.href = "/contact-list";
        } 
        else 
        {
          // display an error message
          username.trigger("focus").trigger("select");
          messageArea.show()
                     .addClass("alert alert-danger")
                     .text("Error: Invalid login information");
        }
      });
    });

    $("#cancelButton").on("click", function () 
    {
      // clear the login form
      document.forms[0].reset();

      // return to the home page
      location.href = "/home";
    });
  }

  function authGuard(): void
  {
    // check if the user is not logged in
    if (!sessionStorage.getItem("user")) 
    {
      // redirect back to login page
      //loadLink("login"); // This is before Express
      location.href = "/login";
    }
  }

  function performLogout(): void
  {
    sessionStorage.clear();
    location.href = '/login';
  }


  /**
   * This is the Entry-Point for the program program
   */
  function Start(): void
  {
    // All this code is from before express
    // console.log("App Started...");
    // loadHeader(router.ActiveLink);
    // loadContent(router.ActiveLink, ActiveLinkCallback(router.ActiveLink));
    // loadFooter();

    // Do this now that we use Express
    let pageID = $("body")[0].getAttribute("id");

    switch (pageID) 
    {
      case "contact":
        displayContact();
        break;
      case "contact-list":
        displayContactList();
        break;
      case "edit":
        displayEdit();
        break;
      case "login":
        displayLogin();
        break;
      case "logout":
        performLogout();
        break;  
    }
  }
    window.addEventListener("load", Start);

}