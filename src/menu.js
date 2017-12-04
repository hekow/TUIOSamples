/**
 * @author Kevin Duglué
 * @author Rémy Kaloustian
 */

// Import JQuery
import $ from 'jquery/dist/jquery.min';
// Import ImageWidget
import ImageElementWidget from 'tuiomanager/widgets/ElementWidget/ImageElementWidget/ImageElementWidget';
import VideoElementWidget from 'tuiomanager/widgets/ElementWidget/VideoElementWidget/VideoElementWidget';
import CircularMenu from 'tuiomanager/widgets/CircularMenu/CircularMenu';
import LibraryStack from 'tuiomanager/widgets/Library/LibraryStack/LibraryStack'

let widgets = [];

function AddWidgetToScreen(widget) {
  $('#example-container').append(widget.domElem);
  widgets.push(widget);
}//AddWidgetToScreen()

function RemoveWidgets() {
  $('#example-container').empty();
  for (let i = 0; i < widgets.length; i += 1) {
    widgets[i].deleteWidget();
  }
  widgets=[];
}



function getRand(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

function buildBackButton() {
  $('#example-container').append('<button id="back-button">Back</button>');
  $('#back-button').on('click', () => {
    RemoveWidgets();
    buildMenu();
  });
}//  displayMenu()

function buildDevelopment() {
  $('#example-container').empty();
  buildBackButton();
  const imageWidget = new ImageElementWidget(0, 0, 250, 333, 0, 2, 'assets/IMG_20150304_201145.jpg', 'B3', 'C9', '38');
  AddWidgetToScreen(imageWidget);
  const videoWidget = new VideoElementWidget(100, 100, 250, 140, 0, 1, 'assets/video/video.mp4', 'B3', 'C9', '38', '3');
  AddWidgetToScreen(videoWidget);

  //test de LibraryStack
  const libstack = new LibraryStack(600,300, 300, 300);
  AddWidgetToScreen(libstack);
  const imageWidget2 = new ImageElementWidget(0, 0, 250, 333, 0, 2, 'assets/IMG_20150304_201145.jpg', 'B3', 'C9', '38');
  const imageWidget3 = new ImageElementWidget(0, 0, 250, 333, 0, 2, 'assets/IMG_20150304_201145.jpg', 'B3', 'C9', '38');
  const imageWidget4 = new ImageElementWidget(0, 0, 250, 333, 0, 2, 'assets/IMG_20150304_201145.jpg', 'B3', 'C9', '38');
  const imageWidget5 = new ImageElementWidget(0, 0, 250, 333, 0, 2, 'assets/IMG_20150304_201145.jpg', 'B3', 'C9', '38');

  libstack.addElementWidget(imageWidget2);
  libstack.addElementWidget(imageWidget3);
  libstack.addElementWidget(imageWidget4);
  libstack.addElementWidget(imageWidget5);



  const menuWidgetDev = new CircularMenu('6D', 8);
  //$('#app').append(menuWidgetDev.domElem);
  AddWidgetToScreen(menuWidgetDev);
  menuWidgetDev.addMenuItemText('Facile', '#F00', '', () => {
    console.log('Facile Texte');
  });
  menuWidgetDev.addMenuItemText('Moyen', '#F00', '', () => {
    console.log('Moyen Texte');
  });
  menuWidgetDev.addMenuItemText('Difficile', '#FF0', '', () => {
    console.log('Difficile Texte');
  });
  menuWidgetDev.addMenuItemIcon('fa fa-2x fa-hand-lizard-o', '#F00', '#0F0', () => {
    console.log('Lizard Hand');
  });
  menuWidgetDev.addMenuItemIcon('fa fa-2x fa-star-o', '#F0F', '#FF0', () => {
    console.log('Facile Icone');
  });
  menuWidgetDev.addMenuItemIcon('fa fa-2x fa-star-half-o', '#F00', '', () => {
    console.log('Moyen Icone');
  });
  menuWidgetDev.addMenuItemIcon('fa fa-2x fa-star', '#FFF', '#c62828', () => {
    console.log('Difficile Icon');
  });
  menuWidgetDev.addMenuItemText('Un texte très très long', '#F00', '', () => {
    console.log('Difficile Texte');
  });
}// buildDevelopment()

function buildHealth() {
  $('#example-container').empty();
  buildBackButton();
  $('#example-container').append('<div id="main-container"> </div>');
  $('#main-container').append('<div id="healthy-container">  <h1>Healthy</h1> <h1 class="title-bottom">Healthy</h1> </div>');
  $('#main-container').append('<div id="unhealthy-container">  <h1>Unhealthy</h1> <h1 class="title-bottom">Unhealthy</h1> </div>');
  const height = $('#main-container').height() - ($('#main-container h1').height() * 3);

  $('.title-bottom').css('marginTop', `${height}px`);

  const candiesImage = new ImageElementWidget(100, 150, 110, 110, 0, 1, 'assets/example-health/candies.png', 'B3', 'C9', '38');
  AddWidgetToScreen(candiesImage);
  const appleImage = new ImageElementWidget(850, 20, 110, 110, 0, 1, 'assets/example-health/apple.png', 'B3', 'C9', '38');
  AddWidgetToScreen(appleImage);
  const bananaImage = new ImageElementWidget(1700, 500, 110, 110, 0, 1, 'assets/example-health/banana.png', 'B3', 'C9', '38');
  AddWidgetToScreen(bananaImage);
  const chipsImage = new ImageElementWidget(1500, 20, 110, 110, 0, 1, 'assets/example-health/chips.png', 'B3', 'C9', '38');
  AddWidgetToScreen(chipsImage);
  const broccoliImage = new ImageElementWidget(200, 700, 110, 110, 0, 1, 'assets/example-health/broccoli.png', 'B3', 'C9', '38');
  AddWidgetToScreen(broccoliImage);
  const tomatoImage = new ImageElementWidget(1000, 850, 110, 110, 90, 1, 'assets/example-health/tomato.png', 'B3', 'C9', '38');
  AddWidgetToScreen(tomatoImage);
}// buildHealth()

function SpawnRotation(difficulty) {
  if (difficulty === 'medium' || difficulty === 'difficult') {
    return getRand(0, 360);
  }
  return 0;
}//  SpawnRotation()

function SpawnScale(difficulty) {
  if(difficulty === 'difficult') {
    return getRand(0.5, 1.4);
  }
  return 1;
}// SpawnRotation()

function buildPuzzle(difficulty) {
  const pieces = [];
  $('#example-container').empty();
  buildBackButton();

  const puz1 = new ImageElementWidget(10, 100, 505, 414, SpawnRotation(difficulty), SpawnScale(difficulty), 'assets/example-puzzle/1.png', 'B3', 'C9', '38');
  pieces.push(puz1);
  const puz2 = new ImageElementWidget(600, 40, 539, 305, SpawnRotation(difficulty), SpawnScale(difficulty), 'assets/example-puzzle/2.png', 'B3', 'C9', '38');
  pieces.push(puz2);
  const puz3 = new ImageElementWidget(200, 10, 574, 655, SpawnRotation(difficulty), SpawnScale(difficulty), 'assets/example-puzzle/3.png', 'B3', 'C9', '38');
  pieces.push(puz3);
  const puz4 = new ImageElementWidget(500, 250, 524, 482, SpawnRotation(difficulty), SpawnScale(difficulty), 'assets/example-puzzle/4.png', 'B3', 'C9', '38');
  pieces.push(puz4);
  const puz5 = new ImageElementWidget(800, 500, 558, 420, SpawnRotation(difficulty), SpawnScale(difficulty), 'assets/example-puzzle/5.png', 'B3', 'C9', '38');
  pieces.push(puz5);
  const puz6 = new ImageElementWidget(850, 150, 429, 475, SpawnRotation(difficulty), SpawnScale(difficulty), 'assets/example-puzzle/6.png', 'B3', 'C9', '38');
  pieces.push(puz6);
  const puz7 = new ImageElementWidget(200, 500, 340, 338, SpawnRotation(difficulty), SpawnScale(difficulty), 'assets/example-puzzle/7.png', 'B3', 'C9', '38');
  pieces.push(puz7);
  const puz8 = new ImageElementWidget(50, 400, 340, 558, SpawnRotation(difficulty), SpawnScale(difficulty), 'assets/example-puzzle/8.png', 'B3', 'C9', '38');
  pieces.push(puz8);

  for (let i = 0; i < pieces.length; i += 1) {
    AddWidgetToScreen(pieces[i]);

    if (difficulty === 'easy') {
      pieces[i].canZoom(false, false);
      pieces[i].canDelete(false, false);
      pieces[i].canRotate(false, false);
    } else if (difficulty === 'medium') {
      pieces[i].canZoom(false, false);
      pieces[i].canDelete(false, false);
      pieces[i].canRotate(true, true);
    }
  }
  const menuWidget = new CircularMenu('6D', 3);
  //$('#app').append(menuWidget.domElem);
  AddWidgetToScreen(menuWidget);
  menuWidget.addMenuItemText('Facile', '#FFF', '#2E7D32', () => {
    menuWidget.deleteWidget();
    RemoveWidgets();
    buildPuzzle('easy');
  });
  menuWidget.addMenuItemText('Moyen', '#FFF', '#D84315', () => {
    menuWidget.deleteWidget();
    RemoveWidgets();
    buildPuzzle('medium');
  });
  menuWidget.addMenuItemText('Difficile', '#FFF', '#c62828', () => {
    menuWidget.deleteWidget();
    RemoveWidgets();
    buildPuzzle('difficult');
  });
}// buildPuzzle()

function buildMusic() {
  $('#example-container').empty();
  buildBackButton();
  $('#example-container').append('<div id="music-container"> </div>');
  $('#music-container').append('<div class="music-subcontainer"><img src="assets/example-music/guitar.png" > <div class="music-target"></div> </div>');
  $('#music-container').append('<div class="music-subcontainer"><img src="assets/example-music/piano.png" ><div class="music-target"></div> </div>');
  $('#music-container').append('<div class="music-subcontainer"><img src="assets/example-music/saxophone.png" ><div class="music-target"></div> </div>');

  const fluteVid = new VideoElementWidget(250, 800, 150, 84, SpawnRotation('medium'), 1, 'assets/example-music/flute.mp4', 'B3', 'C9', '38', '3', '');
  AddWidgetToScreen(fluteVid);
  const pianoVid = new VideoElementWidget(450, 100, 150, 84, SpawnRotation('medium'), 1, 'assets/example-music/piano.mp4', 'B3', 'C9', '38', '3', '');
  AddWidgetToScreen(fluteVid);
  const drumsVid = new VideoElementWidget(650, 800, 150, 84, SpawnRotation('medium'), 1, 'assets/example-music/drums.mp4', 'B3', 'C9', '38', '3', '');
  AddWidgetToScreen(fluteVid);
  const guitarVid = new VideoElementWidget(850, 100, 150, 84, SpawnRotation('medium'), 1, 'assets/example-music/guitar.mp4', 'B3', 'C9', '38', '3', '');
  AddWidgetToScreen(fluteVid);
  const saxophoneVid = new VideoElementWidget(1050, 800, 150, 84, SpawnRotation('medium'), 1, 'assets/example-music/saxophone.mp4', 'B3', 'C9', '38', '3', '');
  AddWidgetToScreen(fluteVid);
} // buildMusic()


export function buildMenu() {
  $('#example-container').append('<h1> TUIO Showcase </h1>');
  $('#example-container').append('<button id="development" class="menu-button"> Development </button> </br>');
  $('#example-container').append('<button id="health" class="menu-button"> Health (using ImageElementWidget) </button></br>');
  $('#example-container').append('<button class="menu-button puzzle" data-difficulty="easy"> Puzzle (using ImageElementWidget) </button></br>');
  $('#example-container').append('<button id="music" class="menu-button"> Music (using VideoElementWidget) </button></br>');


  $('#development').on('click', () => {
    buildDevelopment();
  });
  $('#health').on('click', () => {
    buildHealth();
  });
  $('.puzzle').on('click', (elem) => {
    buildPuzzle($(elem.target).data('difficulty'));
  });
  $('#music').on('click', () => {
    buildMusic();
  });
}// buildMenu()
