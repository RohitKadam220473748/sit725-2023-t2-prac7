const cardList = [
  {
      title: 'cat 1',
      path: 'images/cat1.jpg',
      subTitle: 'About Cat 1',
      description: 'Description of Cat 1 <p> Hi there I am looking for owner please adopt me I am a nice behaving cat, I am very obedient. </p>'
  },
  {
      title: 'cat 2',
      path: 'images/cat2.jpg',
      subTitle: 'About Cat 2',
      description: 'Description of Cat 2 <p> Hi there I am looking for owner please adopt me I am a nice behaving cat and also I will protect you. </p>'
  },
  {
      title: 'cat 3',
      path: 'images/cat3.jpg',
      subTitle: 'About Cat 3',
      description: 'Description of Cat 3 <p> Hi there I am looking for owner please adopt me I am a nice behaving cat, I am lot better than other cats. </p>'
  }
];


const addCards = (items) => {
  const cardSection = document.getElementById('card-section');
  items.forEach(item => {
     let contentcard = `
      <div class="col s4 center-align">
          <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${item.path}">
              </div>
              <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
                  <p><a href="#">${item.subTitle}</a></p>
              </div>
              <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                  <p class="card-text">${item.description}</p>
              </div>
          </div>
          </div>
      `;

      $(cardSection).append(contentcard)
  });
};

const formSubmitted = () => {
  let formData = {};
  formData.firstName = $('#first_name').val();
  formData.lastName = $('#last_name').val();
  formData.password = $('#password').val();
  formData.email = $('#email').val();

  console.log(formData);
  
};

function validateForm() {
  const fName = $('#first_name').val();
  const ltName = $('#last_name').val();
  const pass = $('#password').val();
  const mail = $('#email').val();

  if (fName === '' || ltName === '' || pass === '' || mail === '') {
      alert('Please enter all required fields.');
  } else {
      formSubmitted();
      $('.modal').modal('close');
      alert('Thanks for submitting the data'); 
  }
}


const formCanceled = () => {
  $('.modal').modal('close');
};

$(document).ready(function () {
  $('.materialboxed').materialbox();
  
  $('#formcancel').click(() => {
    formCanceled();
  });
  addCards(cardList);
  $('.modal').modal();
});
