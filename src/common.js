class Dialog {
  constructor(name) {
    this.name = name;
    this.dialog = document.createElement("div");
    this.dialog.setAttribute("id", this.name);
    this.dialog.style.backgroundColor = "grey";
    this.dialog.style.height = "100%";
    this.dialog.style.display = "none";
    document.getElementById("app").appendChild(this.dialog);
  }

  hide() {
    this.dialog.style.display = "none";
  }

  show() {
    this.dialog.style.display = "block";
  }
}
// let mainMenuDialog = new Dialog("mainMenuDialog");
