class MainMenuDialog extends Dialog {
  constructor(name) {
    super(name);

    this.title = document.createElement("div");
    this.title.innerHTML = "<h1>" + appDesc.appName + "</h1>";
    this.title.setAttribute("class", "title");
    this.dialog.appendChild(this.title);

    this.playButton = document.createElement("button");
    this.playButton.innerHTML = "Play";
    this.playButton.setAttribute("class", "play-button");
    this.dialog.appendChild(this.playButton);

    this.version = document.createElement("div");
    this.version.innerHTML = "<div>" + appDesc.appVersion + "</div>";
    this.version.setAttribute("class", "version");
    this.dialog.appendChild(this.version);
  }
}
