function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}

async function show_form() {
  Swal.fire({
    title: "Notificações",
    html: ` <div class="mb-3"> 
    <strong><label class="form-label">Informe o seu nome</label></strong>
    <input type="text" class="form-control" id="inputNome" aria-describedby="nomeHelp">
    </div> 
    <div class="mb-3"> 
    <strong><label class="form-label">Informe o seu email</label></strong>
    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"> 
    <div id="emailHelp" class="form-text">Nunca iremos compartilhar suas informações!</div> 
    </div> 
    <div class="mb-3 form-check"> 
    <input type="checkbox" id="inputCheckbox" class="form-check-input"> 
    <label class="form-check-label">Receber mais novidades por email</label> 
    </div> `,
    confirmButtonText: "Confirmar",
    confirmButtonColor: "#a4d37e",
    preConfirm: function () {
      const nome = Swal.getPopup().querySelector("#inputNome").value;
      const email = Swal.getPopup().querySelector("#inputEmail").value;
      const checkbox = Swal.getPopup().querySelector("#inputCheckbox").checked;
      if (!nome) {
        Swal.showValidationMessage(`Por favor, insira um nome.`);
      } else if (!email) {
        Swal.showValidationMessage(`Por favor, insira um endereço de email.`);
      } else if (!validateEmail(email)) {
        Swal.showValidationMessage(
          `Por favor, insira um endereço de email válido.`
        );
      }
      return {
        email: email,
        nome: nome,
        checkbox: checkbox,
      };
    },
  })
    .then(function (result) {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Formulário enviado com sucesso!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(JSON.stringify(result.value));
      }
    })
    .catch(swal.noop);
}
