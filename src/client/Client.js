class Client {

  constructor(options = {}) {

    Object.defineProperty(this, 'token', { writable: true });
    if ( !this.token && 'TWITTER_TOKEN' in process.env ) {
      /**
       * Authorization token for the logged in bot.
       * If `process.env.TWITTER_TOKEN` is present, it will default to `process.env.TWITTER_TOKEN` when instantiating the client
       * <warn>This should be kept private at all times.</warn>
       * @type {?string}
       */
      this.token = process.env.TWITTER_TOKEN;
    } else {
      this.token = null;
    }
    

 
    this.user = null;

    this.readyAt = null;
  }

  get readyTimestamp() {
    return this.readyAt ? this.readyAt.getTime() : null;
  }
  get uptime() {
    return this.readyAt ? Date.now() - this.readyAt : null;
  }

  destroy () {
    this.token = null;
  }

}

module.exports = Client;
