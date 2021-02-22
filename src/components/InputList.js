import Input from "./Input";

function InputList() {
  return (
    <div className="collapsable__content hidden dropdownfillcontainer dropdowncontainer">
      <form className="form__container jsform">
        <Input
          id={"name"}
          placeholder={"Ej: Paquita Salas"}
          label={"Nombre completo"}
        />
        <Input
          id={"job"}
          placeholder={"Ej: CEO PS management"}
          label={"Puesto"}
        />
        {/* GET AVATAR  */}
        <Input
          id={"email"}
          placeholder={"Ej: nombre.apellidos@email.com"}
          label={"Email"}
          type={"email"}
        />
        <Input
          id={"phone"}
          placeholder={"Ej: 555-452-369"}
          label={"Teléfono"}
          type={"tel"}
        />
        <Input
          id={"linkedin"}
          placeholder={"Ej: linkedin.com/in/paquita.salas"}
          label={"Linkedin"}
        />
        <Input
          id={"github"}
          placeholder={"Ej: @paquita-salas"}
          label={"Github"}
        />
      </form>
    </div>
  );
}

export default InputList;