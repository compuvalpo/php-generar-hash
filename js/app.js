$(document).ready(function () {


});

function SwalMensaje(title, text, icon, url) {
    swal.fire({
	  title: title,
	  text: text,
	  icon: icon,
	  confirmButtonText: 'OK',
	  timer: 1500,
	  timerProgressBar: true
	}).then((result) => {

		//window.location =  url
		//window.location.reload();
	});
}

function GenerarHash(){
	
		let inputData = $("#inputData").val();
        $.ajax({
            url: './hash.php',
            type: 'post',
            dataType: 'json',
            data: {"data": inputData},
            success: function(data) {

				if(data){
					setTimeout(function () {

						let div = '<div class="input-group col-12 mb-2"><span class="btn-primary badge">';
						
						$('.card-data').html("");
						$('.card-data').append(div +'MD5</span><span class="form-control" id="md5">'+ data.md5 +'</span></div>');
						$('.card-data').append(div +'SHA1</span><span class="form-control" id="sha1">'+ data.sha1 +'</span></div>');
						$('.card-data').append(div +'SHA256</span><span class="form-control" id="sha256">'+ data.sha256 +'</span></div>');
						$('.card-data').append(div +'SHA512</span><span class="form-control" id="sha512">'+ data.sha512 +'</span></div>');
						$('.card-data').append(div +'WHIRLPOOL</span><span class="form-control" id="whirlpool">'+ data.whirlpool +'</span></div>');

					}, 100);
					//SwalMensaje('Hash Generados', 'Se han generado los Hash.', 'success');
				}else{
					SwalMensaje('Error', 'Error al intentar de generar los Hash.', 'error');
				}
            },
            error: function(jqXHR, status, error) {
				SwalMensaje('Hash no Generados', 'No se han generado los Hash.', 'error');
            }
        });
	
}