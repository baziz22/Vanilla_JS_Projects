<div id="scene">
  <div id="scene-header">
    <div>
      Score: <span id="score">15</span>
    </div>
    <div>
      High Score: <span id="high-score">0</span>
    </div>
  </div>
  <hr />
  <div id="scene-messages">
    <div id="game-title">Find Secret Number</div>
    <div id="rules">
      Secret number is between <span id="between"></span>
    </div>
    <div id="secret-number">
      <span id="the-secret">?</span>
    </div>
  </div>
  <div id="scene-body">
    <div id="message">Start The Game ↙️</div>
    <input id="guess-box" type="number" min="1" max="" />
    <button id="guess-btn">Guess</button>
  </div>
  <hr />
  <div id="scene-footer">
    <button id="start-btn">Start</button>
    <select id="level" title="levels">
      <option value="beginner">Beginner</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </div>
</div>;
