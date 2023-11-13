// Node.js {
// Key features and characteristics of Node.js include
// }

// Global {
// The difference between Global and window
// }

// Inport and Export in node.js

// os module

// File system in node.js {
// Reading from file -
// Writing on life -
// create and remove directory -
// }

// Stream {
// Read Stream -
// Write Stream -
// }

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Node.js

// // Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code server-side. It is designed to build scalable network applications, and it's particularly well-suited for building web servers and other networked software. Node.js is built on the V8 JavaScript runtime engine, which is the same engine that powers the Google Chrome browser. //

//============================================================================================================================================//

// // Key features and characteristics of Node.js include

// // JavaScript on the Server: Node.js allows developers to use JavaScript for server-side scripting. This unifies the development language, as JavaScript is typically associated with client-side scripting in web browsers. //

// // Non-Blocking I/O: Node.js is designed to be non-blocking and event-driven. This means that it can handle a large number of concurrent connections without the need for multi-threading. It uses an event loop to efficiently manage I/O operations. //

// // Fast Execution: The V8 engine used by Node.js is highly optimized for performance. It compiles JavaScript code into machine code for faster execution. //

// // Package Management with npm: Node.js comes with npm (Node Package Manager), a package manager that allows developers to easily manage and share JavaScript libraries and tools. npm is one of the largest package ecosystems in the world. //

// // Single-Threaded, Event-Driven Architecture: While Node.js is single-threaded, it can handle concurrent requests using asynchronous, non-blocking I/O operations. This makes it suitable for handling a large number of concurrent connections. //

// // Scalability: Node.js is known for its ability to scale horizontally by adding more servers to a network. It is commonly used in building scalable and high-performance applications. //

// // Wide Adoption: Node.js has gained widespread adoption and is used by many large companies and organizations for building server-side applications and microservices. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Global

// // In Node.js, the term "global" refers to the global object in the runtime environment. In the browser, the global object is window, but in Node.js, it is global. The global object provides a global scope for variables and functions in a Node.js application. //

//============================================================================================================================================//

// // The difference between Global and window

// // 1. Node.js (global):
// // Context: In the context of Node.js, the global object is referred to as global.
// // Usage: Variables and functions declared without using var, let, or const become properties of the global object in Node.js.

// // 2. Browser (window):
// // Context: In the browser environment, the global object is referred to as window.
// // Usage: Variables and functions declared without using var, let, or const become properties of the window object in the browser.

//============================================================================================================================================//

// console.log(global);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// setTimeout(() => {
//   console.log("Reset");
//   clearInterval(myInt);
// }, 5000);

// const myInt = setInterval(() => {
//   console.log("🗿");
// }, 1000);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(__filename);
// console.log(__dirname);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Inport and Export in node.js

// // In Node.js, the import and export statements are used to work with modules. Modules are a way to organize code into separate files, making it easier to manage and maintain large projects. The import statement is used to bring functionality from one module into another, and the export statement is used to expose functionality from one module to be used in another module. //

//============================================================================================================================================//

// const { group1, group2 } = require("./player");

// console.log(group1);
// console.log(group2);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // os module

// // The os module in Node.js provides a way to interact with the operating system. It allows you to retrieve information about the system's platform, network interfaces, CPU architecture, memory usage, and more. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const myOS = require("os");

// console.log(myOS.freemem());
// console.log(myOS.version());
// console.log(myOS.uptime());
// console.log(myOS.arch());
// console.log(myOS.tmpdir());

// // This code snippet imports the os module using require and then logs various pieces of information about the operating system to the console. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // File system in node.js

// // In Node.js, the fs (File System) module provides an API for interacting with the file system. It allows you to perform various file-related operations, such as reading from and writing to files, creating and deleting files and directories, and more. //

//============================================================================================================================================//

// // Reading from file

// const fs = require("fs");

// fs.readFile("./texts/text1.txt", (err, data) => {
//   if (err) console.log(err);
//   console.log(data.toString());
// });

// console.log("Last line");
// // this is a async function, so it does not

//============================================================================================================================================//

// // Writing on life

// const fs = require("fs");

// fs.writeFile("./texts/text1.txt", "hello again", () => {
//   console.log("File Was Written Successfully");
// });

// // thes method replace any existent test. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const fs = require("fs");

// fs.writeFile("./texts/text2.txt", "Hello World", () => {
//   console.log("File Way Writtn Successfully");
// });

// // If the targeted file do not exists then it will create a new file. //

//============================================================================================================================================//

// // create and remove directory

// const fs = require("fs");

// if (!fs.existsSync("./node")) {
//   fs.mkdir("./node", (err) => {
//     if (err) console.log(err);

//     console.log("Folder Created");
//   });
// } else {
//   fs.rmdir("./node", (err) => {
//     if (err) console.log(ree);

//     console.log("Folder removed");
//   });
// }

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Stream

// // In Node.js, streams are a powerful and efficient way to handle data, particularly when dealing with large volumes of data. Streams provide an abstraction for reading or writing data in chunks, rather than loading the entire data set into memory. This can be especially beneficial for performance, memory efficiency, and handling real-time scenarios. //

//============================================================================================================================================//

// // Read Stream

// const fs = require("fs");

// const myReadStream = fs.createReadStream("./texts/text3.txt", {
//   encoding: "utf8",
// });

// myReadStream.on("data", (chunk) => {
//   console.log(
//     "=================================================================================="
//   );
//   console.log(chunk.toString());
// });

//============================================================================================================================================//

// // Write Stream

// const fs = require("fs");

// const myReadStream = fs.createReadStream("./texts/text3.txt", {
//   encoding: "utf8",
// });

// const myWriteStream = fs.createWriteStream("./texts/text4.txt");

// myReadStream.on("data", (chunk) => {
//   myWriteStream.write(
//     "==========================================================="
//   );
//   myWriteStream.write(chunk);
// });
