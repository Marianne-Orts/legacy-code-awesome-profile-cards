import Input from "./Input";
import GetAvatar from "./GetAvatar";
function InputList(props) {
  return (
    <div
      className={
        "collapsable__content dropdownfillcontainer dropdowncontainer " +
        props.hidden
      }
    >
      <form className="form__container jsform">
        <Input
          id={"name"}
          placeholder={"Ej: Paquita Salas"}
          label={"Nombre completo"}
          handleInput={props.handleInput}
          handleReset={props.handleReset}
          value={props.data.name}
        />
        <Input
          id={"job"}
          placeholder={"Ej: CEO PS management"}
          label={"Puesto"}
          handleInput={props.handleInput}
          handleReset={props.handleReset}
          value={props.data.job}
        />
        <GetAvatar
          avatar={props.data.photo}
          updateAvatar={props.handleUpdateAvatar}
        />

        <Input
          id={"email"}
          placeholder={"Ej: nombre.apellidos@email.com"}
          label={"Email"}
          type={"email"}
          handleInput={props.handleInput}
          handleReset={props.handleReset}
          value={props.data.email}
        />
        <Input
          id={"phone"}
          placeholder={"Ej: 555-452-369"}
          label={"Teléfono"}
          type={"tel"}
          handleInput={props.handleInput}
          handleReset={props.handleReset}
          value={props.data.phone}
        />
        <Input
          id={"linkedin"}
          placeholder={"Ej: linkedin.com/in/paquita.salas"}
          label={"Linkedin"}
          handleInput={props.handleInput}
          handleReset={props.handleReset}
          value={props.data.linkedin}
        />
        <Input
          id={"github"}
          placeholder={"Ej: @paquita-salas"}
          label={"Github"}
          handleInput={props.handleInput}
          handleReset={props.handleReset}
          value={props.data.github}
        />
      </form>
    </div>
  );
}

export default InputList;
