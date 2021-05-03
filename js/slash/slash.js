import python from "./python/python.js"

export default function(args) {
  if(args.lang === 0) {
    return python(args);
  }
}