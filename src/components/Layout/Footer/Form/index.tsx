import React, { useState } from "react";
import swal from "sweetalert";
import "../styles.sass";
const inicialState = {
  name: "",
  surnames: "",
  email: "",
  phone: "",
  documenttype: "",
  document: "",
  terms: false,
};

const Form = () => {
  const [state, setState] = useState(inicialState);

  const onChange = (e: any) => {
    const { name, value, checked, type } = e.target;
    type !== "checkbox"
      ? setState({ ...state, [name]: value })
      : setState({ ...state, [name]: checked });
  };

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    swal("", "Se a suscrito exitosamente", "success");
    setState(inicialState);
  };

  return (
    <div>
      <div className="container mt-3">
        <form onSubmit={onSubmitForm}>
          <div className="row mb-2">
            <div className="col-lg-6  col-xs-12  mb-2 ">
              <input
                type="text"
                className="form-control"
                placeholder="NOMBRE"
                name="name"
                value={state.name}
                required={true}
                onChange={onChange}
              />
            </div>
            <div className="col-lg-6 col-xs-12 mb">
              <input
                type="email"
                className="form-control"
                placeholder="CORREO ELECTRÓNICO"
                aria-label="CORREO ELECTRÓNICO"
                name="email"
                value={state.email}
                required
                onChange={onChange}
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-lg-6  col-xs-12  mb-2">
              <select
                className="form-select"
                aria-label="TIPO DE DOCUMENTO"
                name="documenttype"
                value={state.documenttype}
                required
                onChange={onChange}
              >
                <option value="">TIPO DE DOCUMENTO</option>
                <option value="13">Cédula de ciudadanía</option>
                <option value="21">Tarjeta de extranjería</option>
                <option value="22">Cédula de extranjería</option>
                <option value="31">Nit</option>
                <option value="41">Pasaporte</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <input
                type="text"
                className="form-control"
                placeholder="NÚMERO DE DOCUMENTO"
                aria-label="NÚMERO DE DOCUMENTO"
                name="document"
                required
                value={state.document}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-lg-6 col-md-6 col-xs-12  mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="TÉLEFONO"
                aria-label="TÉLEFONO"
                name="phone"
                value={state.phone}
                onChange={onChange}
                required
              />
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12  mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  name="terms"
                  checked={state.terms}
                  onChange={onChange}
                  required
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Acepto términos y condiciones
                </label>
              </div>
            </div>
            <div className="col col-xs-12">
              <button type="submit" className="btn btn-primary">
                SUSCRIBIRME
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
