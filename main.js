function move() {
    let id = null;
    const ball = document.getElementById("box");
    let pos = 0;
    clearInterval(id);
    id = setInterval(move_right, 5);

    function move_right() {
      if (pos == 450) {
        id = setInterval(move_left, 5);
      } else {
        pos++;
        ball.style.left = pos + 'px';
      }
    }

    function move_left() {
        if (pos == 0) {
          id = setInterval(move_right, 5);
        } else {
          pos--;
          ball.style.left = pos + 'px';
        }
      }
  }