export function run() {
  let type = "";
  try {
    type = "CJS";
    // require and __dirname are not supported in ESM
    // see: https://nodejs.org/api/esm.html#differences-between-es-modules-and-commonjs
    const { Worker, isMainThread } = require("worker_threads");
    if (isMainThread) {
      const worker = new Worker(__dirname + "/worker.js");
      worker.on("exit", (code: number) => {
        console.log(`Nodejs worker finished with code ${code}`);
      });
    }
  } catch (e) {
    type = "ESM";
    if (typeof Worker !== "undefined") {
      const worker = new Worker("worker.js");
    } else {
      console.log("Sorry, your browser does not support Web Workers");
    }
  }
  console.log(`Using ${type} build..`);
}
