module.exports = {
  apps: [{
    name: "rpiserver",
    script: "index.js",
    output: './logs/out.log',
    error: './logs/error.log',
    log: './logs/combined.outerr.log',
    merge_logs: true,
    instances: 0,
    watch: false,
    exec_mode: "cluster",
    env_development: {
      NODE_ENV: "development",
      PORT: 3000,
      UPLOAD_PATH: "uploads/",
      AI_URL: "http://parking-classifier:5000/",
      AI_MODE: "traffic"
    }
  }]
};
