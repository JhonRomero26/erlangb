const wasmExports = WebAssembly.instantiateStreaming(
  fetch("/src/assembly/erlangb.wasm"),
  {}
).then((results) => {
  return results.instance.exports;
});

export default wasmExports;
