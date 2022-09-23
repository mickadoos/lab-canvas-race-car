window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  document.body.addEventListener('keydown', e => {
    if(e.key == 'ArrowLeft'){
      if (x_car > 0) x_car -= 10;
      // if(x_car < 0) x_car = 0;
      // if(x_car < (canvas.getAttribute('width') - 60) && x_car > 10) x_car -= 10;
    } else if (e.key == 'ArrowRight'){
      if (x_car < (canvas.getAttribute('width') - 70)) x_car += 10;
      // if(x_car > (canvas.getAttribute('width') - 60)) x_car = (canvas.getAttribute('width') - 60);
      // if(x_car < (canvas.getAttribute('width') - 60) && x_car > 10) x_car += 10;
    }
  });

  // document.getElementById('start-button').addEventListener('click', () => {
  //   startGame();
  // });

  // document.createElement('canvas'); si hubiera que crearlo
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const imgBack = document.createElement('img');
  const imgCar = document.createElement('img');
  // imgBack.src = "../images/road.png";
  imgBack.setAttribute('src', '../images/road.png');
  imgCar.setAttribute('src', '/images/car.png')

  let x_car = (canvas.getAttribute('width') - 70 )/2 ;
  //obstacle
  // let width_max_obstacle = canvas.getAttribute('width')-100;
  // let width_obstacle = Math.floor(Math.random() * width_max_obstacle);
  // let x_obstacle = Math.floor(Math.random() * (canvas.getAttribute('width') - width_obstacle));
  // let y_obstacle = -30;
  let frames = 0;
  const obstaclesArr = [];
  function startGame() {
    setInterval(update, 20);
  }
  function update() {
    console.log('yey');
    frames++;
    //clear
     ctx.clearRect(0, 0, canvas.getAttribute('width'), canvas.getAttribute('height'));
    //recalcular -- obstacles position
    obstaclesArr.forEach((obstacle) => obstacle.y += 5);

    if(frames % 200 === 0) {
      console.log('new obstacle');
      let obstacle = new Obstacle();
      obstaclesArr.push(obstacle);
    };
    // obstaclesArr.forEach(obstacle => )
    
    //print -- board/car/obstacles
    ctx.drawImage(imgBack, 0, 0, canvas.getAttribute('width'), canvas.getAttribute('height'));
    ctx.drawImage(imgCar, x_car, 550, 70, 120);
    // ctx.fillColor('red');
    // ctx.fillRect(x_obstacle, y_obstacle, width_obstacle, 30);
    obstaclesArr.forEach((obstacle) => {
      obstacle.print();
      //check collisions
    });
    
  }

  class Obstacle {
    constructor(){
      this.widthMax = canvas.getAttribute('width') - 150;
      this.width = Math.floor(Math.random() * this.width_max_obstacle);
      this.height = 30;
      this.x = Math.floor(Math.random() * (canvas.getAttribute('width') - this.width));
      this.y = -30;
    }
    print() {
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    // collides () {
    //   if (!()){

    //   }
    // }
  }
};
