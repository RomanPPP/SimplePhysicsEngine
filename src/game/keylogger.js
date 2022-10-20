export default class Keylogger {
  constructor() {
    this.keys = new Set();
  }
  logDown({ key }) {
    this.keys.add(key);
  }
  logUp({ key }) {
    this.keys.delete(key);
  }
  listen() {
    const logDown = this.logDown.bind(this);
    const logUp = this.logUp.bind(this);
    document.addEventListener("keydown", logDown);
    document.addEventListener("keyup", logUp);
    this.unsubsicribe = () => {
      document.removeEventListener("keydown", logDown);
      document.removeEventListener("keyup", logUp);
    };
  }
}
