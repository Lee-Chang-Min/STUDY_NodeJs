const { Worker ,isMainTread, parentPort, workerData } = require('worker_threads');

if (isMainTread) { //메인 쓰레드

    const threads = new Set();
    threads.add(new Worker(__filename, {
        workerData: {start: 1},
    }));
    threads.add(new Worker(__filename, {
        workerData: {start: 1},
    }));

    for (let worker of threads) {
        worker.on('message', (value) => console.log('워커로부터', value));
        worker.on('exit', () => {
            threads.delete(worker);
            console.log('워커 끝~')
        });
    }
    
} else { //워커스레드
   const data = workerData;
   parentPort.postMessage(data.start + 100)
}