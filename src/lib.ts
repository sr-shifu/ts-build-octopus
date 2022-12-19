export async function run() {
  let type = "";
  const workerPath = "./worker.js";
  try {
    type = "CJS";
    // require and __dirname are not supported in ESM
    // see: https://nodejs.org/api/esm.html#differences-between-es-modules-and-commonjs
    const { Worker, isMainThread } = require("worker_threads");
    if (isMainThread) {
      const worker = new Worker(__dirname + "/" + workerPath);
      worker.on("exit", (code: number) => {
        console.log(`Nodejs worker finished with code ${code}`);
      });
    }
  } catch (e) {
    type = "ESM";
    if (typeof Worker !== "undefined") {
      new Worker(workerPath);
    } else {
      console.log("Sorry, your runtime does not support Web Workers");

      await import(workerPath);
    }
  }
  console.log(`Completed ${type} build run.`);
}
