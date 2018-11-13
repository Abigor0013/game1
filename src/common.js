var appDesc = {
  appName: "Game",
  appVersion: "v.0.0.0"
};

class Dialog {
  constructor(name) {
    this.name = name;
    this.dialog = document.createElement("div");
    this.dialog.setAttribute("id", this.name);
    this.dialog.setAttribute("class", "dialog");
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
