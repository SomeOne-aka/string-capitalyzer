export default function (str) {
  if (str === undefined || typeof str != "string") {
    throw new Error(
      "Problem with passed argument to stringCapitalyzer library"
    );
  } else {
    str = str.trim();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
