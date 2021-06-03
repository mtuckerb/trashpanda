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
    this.state.isAnimationEnabled = this.state.isAnimationEnabled || false;
    this.state.animationInstance = null;
    if (this.state.isAnimationEnabled) {
      this.intervalId = setTimeout(this.nextTickAnimation, 3000);
    }
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

  componentDidUpdate() {
    if (this.props.isAnimationEnabled) {
      this.intervalId = setTimeout(this.nextTickAnimation, 3000);
    }
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
