import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

export default class Fireworks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.isAnimationEnabled = props.isAnimationEnabled || false;
    this.state.animationInstance = null;
    this.state.isAnimationEnabled
      ? (this.intervalId = setInterval(this.nextTickAnimation, 400))
      : this.stopAnimation();
  }

  getAnimationSettings(originXA, originXB) {
    return {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      particleCount: 150,
      origin: {
        x: randomInRange(originXA, originXB),
        y: Math.random() - 0.2,
      },
    };
  }

  nextTickAnimation = () => {
    this.state.animationInstance &&
      this.state.animationInstance(this.getAnimationSettings(0.1, 0.3));
    this.state.animationInstance &&
      this.state.animationInstance(this.getAnimationSettings(0.7, 0.9));
  };

  startAnimation() {
    if (!this.state.isAnimationEnabled) {
      this.intervalId = setInterval(this.nextTickAnimation, 400);
    }
  }

  stopAnimation() {
    this.state.animationInstance && this.state.animationInstance.reset();
    return this.intervalId && clearInterval(this.intervalId);
  }

  componentDidUpdate() {
    this.state.isAnimationEnabled
      ? this.startAnimation()
      : this.stopAnimation();
  }
  componentWillUnmount() {
    this.setState((state, props) => ({ isAnimationEnabled: false }));
    this.intervalId && clearInterval(this.intervalId);
  }

  getInstance = (instance) => {
    this.setState((state, props) => ({ animationInstance: instance }));
  };

  render() {
    return (
      <>
        <ReactCanvasConfetti
          refConfetti={this.getInstance}
          style={canvasStyles}
        />
      </>
    );
  }
}
