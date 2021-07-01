import React, { Component } from "react";

export default class Register extends Component {
  displayName = Register.name;

  render() {
    return (
      <div>
        <form action="" method="POST">
          <div className="form-group">
            <h4>Kayıt Ol</h4>
            <input
              className="form-input"
              type="text"
              placeholder="Adınız, Soyadınız"
              required
            />
            <input
              className="form-input"
              type="email"
              placeholder="E-Mail Adresiniz."
              required
            />
            <input
              className="form-input"
              type="password"
              placeholder="Şifreniz"
              required
            />
             <input
              className="form-input"
              type="password"
              placeholder="Şifre Tekrar"
              required
            />
            <input
              className="button button-success"
              type="submit"
              value="GİRİŞ"
            />
          </div>
        </form>
      </div>
    );
  }
}
