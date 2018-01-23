import React from 'react';
import GazeButton from 'react-vr-gaze-button';
import { View, Text, Pano, AppRegistry, Sound, Model, VideoPano, Plane, asset, Image, StyleSheet, AmbientLight, VrButton, Animated, NativeModules, VrHeadModel} from 'react-vr';
import items0 from "./items0.json";
import items1 from "./items1.json";
import items2 from "./items2.json";
import items3 from "./items3.json";
import levels from "./levels.json";
import TimeConsole from "./TimeConsole.js";
<<<<<<< HEAD
import Timer from './Timer';
import Button from './Button';
import TextboxVr from './TextboxVr';
import MissionItemExpirZero from './MissionItemExpirZero';
import MissionItemExpirOne from './MissionItemExpirOne';
import MissionItemExpirTwo from './MissionItemExpirTwo';
import Score from './Score';
import StartButton from './StartButton';
=======
import Timer from './Timer.js';
import Button from './Button.js';
import TextboxVr from './TextboxVr.js';
import MissionItemExpir from './MissionItemExpir.js';
import Score from './Score.js';
import StartButton from './StartButton.js';


    // let levelStart;
    // if(this.state.win){
    //   levelStart =
    //       <View style={styles.gazeView}>
    //         <GazeButton onClick={()=> this.increment()} duration={500}
    //           >
    //           {time => (
    //             <Text style={styles.gazeText}>
    //               {GazeButtClicked ? 'BLAST OFF!' : `YOU WON. NICE.${time}`}
    //             </Text>
    //           )}
    //         </GazeButton>
    //       </View>
    // }else if ((!this.state.win && this.state.level === 0) || (!this.state.win && this.state.level === 1)){
    //   <View>
    //     <StartButton start={this.start.bind(this)} {...this.state} />
    //   </View>
    // }else if((!this.state.win && !this.state.level === 0) || (!this.state.win && !this.state.level === 1)){
    //   console.log("Run workmhole here");
    //   <View>
    //     <Score score={this.state.score} />
    //     <Timer timer={this.state.timer} score={this.state.score}{...this.state} />
    //     <Button startGame={this.startGame.bind(this)} {...this.state} />
    //   </View>
    // }
>>>>>>> temporary

const vrTextboxContent =
  'The game Time Console is not available!';
const itemsArray = [ items0, items0, items0, items1, items2, items3];
class TimeBender extends React.Component {
    state = {
          level: 0,
          GazeButtClicked: false,
          items: items0,
          timer: 20,
          status: '',
          fadeAnim: new Animated.Value(1),
          currentItem: 1,
          deviceConnected: false,
          renderVrTextbox: false,
          visibleZero: 'active',
          visibleOne: 'active',
          visibleTwo: 'active',
          score: 0,
          win: false,
          transitionComplete: true,
          introduced: false,
          rotation: 130
        };
    startTimer = this.startTimer.bind(this);
    _toggleDisplay = this.toggleDisplay.bind(this);
    lastUpdate = Date.now();
<<<<<<< HEAD
    animateProgress = this.animateProgress.bind(this);
    stopProgress = this.stopProgress.bind(this);
    onGaze = this.onGaze.bind(this);
    rotate = this.rotate.bind(this);
    start = this.start.bind(this);

   // componentDidMount() {
   //    this.rotate();
   //  }

=======

    stopProgressZero = this.stopProgress.bind(this);
    onGazeZero = this.onGazeZero.bind(this);
    animateProgressZero = this.animateProgressZero.bind(this);
    onGazeOne = this.onGazeOne.bind(this);
    animateProgressOne = this.animateProgressOne.bind(this);
    onGazeTwo = this.onGazeTwo.bind(this);
    animateProgressTwo = this.animateProgressTwo.bind(this);
>>>>>>> temporary

    rotate = this.rotate.bind(this);
    start = this.start.bind(this);
   // componentDidMount() {
   //    this.rotate();
   //  }
   rotate() {
      const rando = Math.floor(Math.random() * 7);
      const now = Date.now();
      const delta = now - this.lastUpdate;
      rotate = this.rotate.bind(this);
      this.lastUpdate = now;
      this.setState({
          rotation: this.state.rotation + delta / 8
      });
      this.frameHandle = requestAnimationFrame(this.rotate);
    }

    foundItem = (itemIndex) => {
      console.log("Hello, item index: "+ itemIndex);
      const nextItems = this.state.items;
      console.log("json copy: "+ nextItems);
      nextItems[itemIndex].found = true;
      this.setState({items: nextItems}, () => {
        const nextState = {
          items: this.state.items
        };
        //socket.emit('updateState', nextState);
        console.log("Found: "+this.state.items[itemIndex].found);
      });
    };

   componentDidUpdate(){
    switch (this.state.status) {
        case 'started':
          this.timer;
          break;
        case 'stopped':
          clearInterval(this.timer);
          break;
      }
  }
   toggleDisplay() {
    if (VrHeadModel.inVR()) {
      this.setState({renderVrTextbox: !this.state.renderVrTextbox});
    } else {
      // Not in VR, so let's use the dom overlay!
      NativeModules.DomOverlayModule.openOverlay(this.state.items);
    }
  }
  startTimer(){
  let x = this.state.timer
  if(x === 0){
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 0}
    ).start();
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 1}
    ).start();
   return this.setState({status: 'stopped', timer: levels[this.state.level].timer});
  } else{
    x -= 1
    this.setState({timer: x})
    }
  }
  startGame(){
    this.setState({transitionComplete:false})
    this.timer = setInterval(this.startTimer,1000);
    this.setState({status: 'started'})
    this.setState({introduced:true});
  }
<<<<<<< HEAD

  start(){
   
   level = (this.state.level + 1)
   
   this.setState({level: level})

  }

=======
  start(){
   level = (this.state.level += 1)
   this.setState({level: level})
  }
>>>>>>> temporary
  animateProgress() {
    console.log("Progress helloo");
    this.timeout = setTimeout(this.onGaze, 1000);
    // begin animation
  }
  stopProgress() {
    clearTimeout(this.timeout);
    this.timeout = null;
    // end animation
  }

  onGazeZero(){
  //set state which sets opacity? set opacity?
    console.log("helloo");
    this.state.score +=1;
    this.setState({visibleZero: 'inactive'})
  //  this.toggleDisplay()
  if(this.state.score == 3 && this.state.status == 'started'){
    this.setState({win: true, timer: 0, status: 'stopped'})
    }
  this.foundItem(0);
  }

   onGazeOne(){
  //set state which sets opacity? set opacity?
    console.log("helloo");
    this.state.score +=1;
    this.setState({visibleOne: 'inactive'})
  //  this.toggleDisplay()
  if(this.state.score == 3 && this.state.status == 'started'){
    this.setState({win: true, timer: 0, status: 'stopped'})
    }
    this.foundItem(1);
  }

   onGazeTwo(){
  //set state which sets opacity? set opacity?
    console.log("helloo");
    this.state.score +=1;
    this.setState({visibleTwo: 'inactive'})
  //  this.toggleDisplay()
  if(this.state.score == 3 && this.state.status == 'started'){
    this.setState({win: true, timer: 0, status: 'stopped'})
    }
    this.foundItem(2);
  }

  increment(){
    console.log("It incremented!");
    this.state.level +=1;
   return this.setState({status: 'stopped', timer: levels[this.state.level].timer, items: itemsArray[this.state.level], visibleZero: 'active', visibleOne: 'active', visibleTwo: 'active', score: 0, win: false});
  }
  //begin object gaze button functions
  animateProgressZero() {
    this.timeout = setTimeout(this.onGazeZero, 1000);
    // begin animation
  }
   //begin object gaze button functions
  animateProgressOne() {
    this.timeout = setTimeout(this.onGazeOne, 1000);
    // begin animation
  }
   //begin object gaze button functions
  animateProgressTwo() {
    this.timeout = setTimeout(this.onGazeTwo, 1000);
    // begin animation
  }
  stopProgressZero() {
    clearTimeout(this.timeout);
    this.timeout = null;
    // end animation
  }
   stopProgressOne() {
    clearTimeout(this.timeout);
    this.timeout = null;
    // end animation
  }
   stopProgressTwo() {
    clearTimeout(this.timeout);
    this.timeout = null;
    // end animation
  }
//   onGaze(){
//   //set state which sets opacity? set opacity?
//   console.log("helloo")
//   this.state.score +=1;
//   this.setState({visible: 'inactive'})
// //  this.toggleDisplay()
// if(this.state.score == 4 && this.state.status == 'started'){
//   this.setState({win: true, timer: 0, status: 'stopped'})
//   }
// }
// end item disappear button
  render() {
    const {GazeButtClicked} = this.state
    return (
      <View style={styles.rootView}>
        <View style={styles.triggerContainer}>
          <VrButton style={styles.triggerButton} onEnter={this._toggleDisplay}>
            <Text style={styles.triggerText}>AMPLIFY!</Text>
          </VrButton>
        </View>
        {this.state.renderVrTextbox && <TextboxVr text={vrTextboxContent} />}

          <AmbientLight intensity={ 1.6 }  />

          <Animated.View>
          <Model
            source={{
              obj: asset('scientist_projection.obj'),
              mtl: asset('scientist_projection.mtl')
              }}
            style={{
            transform: [
              {translate: [15, 1, -20]},
              {scale: 0.20 },
              {rotateY: 3},
              {rotateX: this.state.rotation},
              {rotateZ: 3}
            ],
          }}
          />
          </Animated.View>
          <TimeConsole/>
          <Pano source={asset(levels[this.state.level].image)}/>

          <MissionItemExpir
            visible={this.state.visibleZero}
            status={this.state.status}

            title={this.state.items[0].title}
            source={this.state.items[0].source}
            texture={this.state.items[0].texture}
            translate={this.state.items[0].translate}
            rotate={this.state.items[0].rotate}
            scale={this.state.items[0].scale}
            found={this.state.items[0].found}
            image={this.state.items[0].image}
            lit={this.state.items[0].lit}
            onEnter={ () => this.animateProgressZero() }
            onExit={ () => this.stopProgressZero() }
            onClick={ () => this.onGazeZero() }
          />

          <MissionItemExpir
            visible={this.state.visibleOne}
            status={this.state.status}

            title={this.state.items[1].title}
            source={this.state.items[1].source}
            texture={this.state.items[1].texture}
            translate={this.state.items[1].translate}
            rotate={this.state.items[1].rotate}
            scale={this.state.items[1].scale}
            found={this.state.items[1].found}
            image={this.state.items[1].image}
            lit={this.state.items[1].lit}
            onEnter={ () => this.animateProgressOne() }
            onExit={ () => this.stopProgressOne() }
            onClick={ () => this.onGazeOne() }
          />

          <MissionItemExpir
            visible={this.state.visibleTwo}
            status={this.state.status}

            title={this.state.items[2].title}
            source={this.state.items[2].source}
            texture={this.state.items[2].texture}
            translate={this.state.items[2].translate}
            rotate={this.state.items[2].rotate}
            scale={this.state.items[2].scale}
            found={this.state.items[2].found}
            image={this.state.items[2].image}
            lit={this.state.items[2].lit}
            onEnter={ () => this.animateProgressTwo() }
            onExit={ () => this.stopProgressTwo() }
            onClick={ () => this.onGazeTwo() }
          />

          <View>
            { this.state.win ?
            <VrButton style={styles.gazeView}
              onClick={()=>this.increment()}>
              <Text style={styles.gazeText}>VICTORY! NEXT LEVEL?</Text>
            </VrButton>
                  :
            <View>
            </View>
              }
              <View>
<<<<<<< HEAD
              {(this.state.level === 0) ?
                starter = 
=======
              {(this.state.level === 0) || (this.state.level === 1) ?
                starter =
>>>>>>> temporary
                <View>
                <StartButton start={this.start.bind(this)} {...this.state} />
                </View>
                :
                starter = <View>
                <Score score={this.state.score} />
              <Timer timer={this.state.timer} score={this.state.score}{...this.state} />
            <Button startGame={this.startGame.bind(this)} {...this.state} />
            </View>
          }
          </View>
<<<<<<< HEAD

=======
>>>>>>> temporary
        </View>
    </View>
    );
  }
};

const styles = StyleSheet.create({
  onGaze:{
    fontSize: 0.3,
    backgroundColor: '#fff',
    width: 0.5,
    height: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.01,
    color: 'black',
    borderRadius: 0.25,
    transform: [{translate: [2, 2, -4]}],
  },

  imageStyle:{
    width: 50,
    height: 50,
    transform: [{translate: [1, 2, -5]}]
  },

  invisiGaze:{
    display: 'none',
    fontSize: 0.3,
    backgroundColor: '#fff',
    width: 0.5,
    height: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.01,
    color: 'black',
    borderRadius: 0.25,
    transform: [{translate: [2, 2, -4]}],
  },

  gazeView:{
    fontSize: 0.3,
    backgroundColor: '#fff',
    width: 0.7,
    height: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.01,
    color: 'black',
    borderRadius: 0.25,
    transform: [{translate: [0, 1, -4]}],
  },

  gazeText:{
    textAlign: 'center',
    fontSize: 0.15,
    color: 'red'
  },

  timer:{
    textAlign: 'center',
    fontSize: 0.15,
    color: '#fff',
    transform: [{translate: [2, 0, -4]}]
  },

  rootView: {
    layoutOrigin: [0.5, 0.5],
    position: 'absolute',
  },

  triggerContainer: {
    transform: [{translate: [0.24, -3.3, -4]}]
  },

  triggerButton: {
    transform: [{rotateX: -45}],
    borderRadius: 0.05,
    height: 0.4,
    width: 0.7,
    backgroundColor: '#F00',
    justifyContent: 'center',
  },

  triggerText: {
    alignSelf: 'center',
    fontSize: 0.15,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})

AppRegistry.registerComponent('TimeBender', () => TimeBender);