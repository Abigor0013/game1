let mainMenuDialog = new MainMenuDialog("mainMenuDialog");
let gameDialog = new GameDialog("gameDialog");
mainMenuDialog.show();

mainMenuDialog.playButton.addEventListener("click", function() {
  mainMenuDialog.hide();
  gameDialog.show();
});

gameDialog.toMainMenuButton.addEventListener("click", function() {
  gameDialog.hide();
  mainMenuDialog.show();
});
