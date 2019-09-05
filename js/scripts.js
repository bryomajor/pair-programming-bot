$(document).ready(function () {


	$("button#sinup").click(function () {
		$("form#sighnin").hide(2500)
		$("form#sighnup").show(2500);
		$("form#sighnup").slideDown(200);
	})

	$("button#sininup").click(function () {
		$("form#sighnup").hide(2500);
		$("form#sighnin").slideDown(200);
	})
	$("button#sin").click(function(){
    $("#skills-modal").modal("show");
    $('#enrollModal').modal('hide');
    
		
	})
let countDownDate = new Date("Sep 3, 2019 8:50:10").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);


  $(document).ready(function () {
    $('#days').text(days);
    $('#hours').text(hours);
    $('#mins').text(minutes);
    $('#secs').text(seconds);
  })

  console.log(distance)
  if (days == 0 && hours == 0 && minutes == 5 && seconds == 0) {
    $('#skillSetModal').modal('show');
  }

  if (distance < 0) {
    clearInterval(x);
    $('button#time-elapsed').text('SESSION DESTROYED')

  }
}, 1000);
$('#skills-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes    
    var modal = $(this)
    modal.find('.modal-body input').val(recipient)
});

$("img#proceed").click(function () {

    $("#skilltest").show(2500);
    $(".why-skills").hide(2500);
});

$('.enroll').click(function(){
  $('#enrollModal').modal('show');
  });

  $('#create_account').click(function () {
    let name = $('#name').val();
    let email = $('#email').val();
    let passion = $('#passion').val();
    let uclass = $('#class').val();
    let password = $('#password').val();
    if (name != '' && email != '' && passion != '' && uclass != '' && password != '') {
      $.ajax({
        url: "register.php",
        method: "POST",
        data: {
          name: name,
          email: email,
          passion: passion,
          uclass: uclass,
          password: password
        },
        success: function (data) {
          switch (data) {
            case '1':
              $('#enrollModal').modal('hide');
              $('#m_alert').html('<div class="alert alert-warning msucess-alert" role="alert">' +
                '<h5><strong>You are already enrolled. Please Login</strong></h5>' +
                '</div>');
              $(".msucess-alert").delay(2500).slideUp('slow', function () {
                $('#m_alert').hide('slow', function () {
                  $('#loginModal').modal('show');
                });
              });

              break;
            case '2':
              $('#enrollModal').modal('hide');
              $('#m_alert').html('<div class="alert alert-success msucess-alert" role="alert">' +
                '<h5><strong>You have been enrolled successfully. Proceed to login.</strong></h5>' +
                '</div>');
              $(".msucess-alert").delay(2500).slideUp('slow', function () {
                $('#m_alert').hide('slow', function () {
                  $('#loginModal').modal('show');
                });

              });
              break;
            case '3':
              $('#enrollModal').modal('hide');
              $('#m_alert').html('<div class="alert alert-danger msucess-alert" role="alert">' +
                '<h5><strong>Sorry, Error occured. Please try again later.</strong></h5>' +
                '</div>');
              $(".msucess-alert").delay(2500).slideUp('slow', function () {
              });
              break;
            default:
              $('#enrollModal').modal('hide');
              $('#m_alert').html('<div class="alert alert-danger msucess-alert" role="alert">' +
                '<h5><strong>Sorry, We could not enroll you at this time. Try gain after some time</strong></h5>' +
                '</div>');
              $(".msucess-alert").delay(2500).slideUp('slow', function () {
              });
              break;

          }
        }
      })

})

});
