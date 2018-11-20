class Model {
  constructor() {
    this.items = ["", "", "", "", "", "", "", "", ""];
  }

  startGame() {
    let mainMenuDialog = new MainMenuDialog("mainMenuDialog");
    let gameDialog = new GameDialog("gameDialog");

    mainMenuDialog.show();

    mainMenuDialog.playButton.addEventListener("click", function() {
      mainMenuDialog.hide();
      gameDialog.show();
      gameDialog.updateField(model.getItems());
    });

    gameDialog.toMainMenuButton.addEventListener("click", function() {
      gameDialog.hide();
      mainMenuDialog.show();
    });
  }

  getItems() {
    return this.items;
  }

  setItem(itemId, item) {
    if (this.items[itemId] == 0) {
      this.items[itemId] = item;
    } else {
      alert("It`s busy");
    }
  }
}

let model = new Model();
model.startGame();
