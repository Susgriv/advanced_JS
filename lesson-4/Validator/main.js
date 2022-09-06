class Validator {
  constructor(form) {
    this.patterns = {
      name: /^[a-zA-zа-яёА-яЁ]+$/i,
      phone: /^\+7\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/,
      email: /^[\w.-]+@[\w.-]+\.[a-z]{2,4}$/i
    }
    this.errors = {
      name: 'Имя содержит только буквы',
      phone: 'Телефон подчиняется шаблону +7(XXX) XXX-XX-XX',
      email: 'E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru'
    };
    this.errorClass = 'error-mgs';
    this.form = form;
    this.valid = false;
    this._validateForm();
  }

  _validateForm() {
    const formEL = this.form;
    let errors = [...document.querySelector(formEL).querySelectorAll(`.${this.errorClass}`)];
    for (let error of errors) {
      error.remove();
    }

    let formFields = [...document.querySelector(formEL).querySelectorAll('.input')];
    for (let field of formFields) {
      this._validate(field);
    }
    if([...document.querySelector(formEL).querySelectorAll('.invalid')].length) {
      return;
    }this.valid = true;
  }

  _validate(field) {
    if (this.patterns[field.name]) {
      if (!this.patterns[field.name].test(field.value)) {
        field.classList.add('invalid');
        this._addErrorMsg(field);
        this._watchField(field);
      }
    }
  }

  _addErrorMsg(field) {
    let error = `<div class="${this.errorClass}">${this.errors[field.name]}</div>`;
    field.parentNode.insertAdjacentHTML('beforeend', error);
  }

  _watchField(field) {
    field.addEventListener('input', () => {
      let error = field.parentNode.querySelector(`.${this.errorClass}`);
      if (this.patterns[field.name].test(field.value)) {
        field.classList.remove('invalid');
        field.classList.add('valid');
        if (error) {
          error.remove();
        }
      } else {
        field.classList.remove('valid');
        field.classList.add('invalid');
        if (!error) {
          this._addErrorMsg(field);
        }
      }
    })
  }
}
