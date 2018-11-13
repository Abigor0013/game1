class GameDialog extends Dialog {
  constructor(name) {
    super(name);

    this.score = document.createElement("div");
    this.score.innerHTML = "Score: 0";
    this.score.setAttribute("class", "score");
    this.dialog.appendChild(this.score);

    this.field = document.createElement("div");
    this.field.setAttribute("class", "field");
    this.dialog.appendChild(this.field);

    this.toMainMenuButton = document.createElement("button");
    this.toMainMenuButton.innerHTML = "To Main Menu";
    this.toMainMenuButton.setAttribute("class", "to-main-menu-button");
    this.dialog.appendChild(this.toMainMenuButton);
  }
}
