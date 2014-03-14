// Wait till the browser is ready to render the game (avoids glitches)
var GM;

window.requestAnimationFrame(function () {
  GM = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

function loadScript () {
  var customizedScript = eval(document.getElementById('customzied-script').value);
  GM.loadScript(customizedScript);
}
