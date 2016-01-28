module.exports = false;
try {
  module.exports = self instanceof WorkerGlobalScope
} catch(e) {}