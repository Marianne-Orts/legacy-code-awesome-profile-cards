import Icon from "./Icon";

function IconsList() {
  return (
    <section className="page__icons">
      <Icon
        icon={"icon-phone"}
        iconLink={"fas fa-mobile-alt link"}
        alt={"icon-phone"}
      />
      <Icon
        icon={"icon-mail"}
        iconLink={"far fa-envelope link"}
        alt={"icon-mail"}
      />

      <Icon
        icon={"icon-linkedin"}
        iconLink={"fab fa-linkedin-in link"}
        alt={"icon-linkedin"}
      />

      <Icon
        icon={"icon-github"}
        iconLink={"fab fa-github-alt link"}
        alt={"icon-github"}
      />
    </section>
  );
}
export default IconsList;
