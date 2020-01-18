import React, { Component } from 'react';
import Camera from 'react-camera';
import Icon from './../../img/8f252c2b.svg'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCamera: false
    }
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera.capture()
      .then(blob => {
        this.img.src = URL.createObjectURL(blob);
        this.img.onload = () => { URL.revokeObjectURL(this.src); }
      })
  }

  renderCamera() {
    return (
      <Camera
        style={style.preview}
        ref={(cam) => {
          this.camera = cam;
        }}
      >
        <div style={style.captureContainer} onClick={this.takePicture}>
          <div style={style.captureButton} />
        </div>
      </Camera>
    )
  }

  onCameraHandler() {
    this.setState({ isCamera: !this.state.isCamera })
  }
  render() {
    return (
      <div style={style.container}>
        {(this.state.isCamera) ?
          this.renderCamera()
          : ""}

<center>
        <img onClick={this.onCameraHandler.bind(this)}  src={Icon} width="50" style={{cursor: 'pointer'}} />
        </center>
        <img
          style={style.captureImage}
          ref={(img) => {
            this.img = img;
          }}
        />
      </div>
    );
  }
}

const style = {
  preview: {
    position: 'relative',
    width: '50%',
    margin: ' auto ',


  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20
  },
  captureImage: {
    width: '50%',
  }
};