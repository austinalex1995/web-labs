/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
let content = document.getElementById("content");
let button = document.getElementById("button");
button.addEventListener("click", getFact);

/**
 * This function will resolve the promise containing an HTTP response from the catfact API, and it will also
 * convert the incoming stream of data into JSON.
 *
 * the responseObject contains all of the information you'll need to display the fact on your site. You can check
 * what the responseObject contains by using console.log (or even testing the endpoint yourself in postman), but an
 * example is here:
 * Object {
 *      fact: "A cat can jump up to five times its own height in a single bound.",
 *      length: 65
 *      }
 * therefore, you'll need to display the 'fact' of the responseObject on the site.
 * You should always understand the format of the required request/response JSON before you attempt to
 * interact with an API in your code.
 *
 * TODO: working off of the provided code, display a random fact from the cat fact API on your site.
 */
async function getFact(){
    let HTTPResponse = await fetch("https://catfact.ninja/fact");
    let responseObject = await HTTPResponse.json();
    console.log(responseObject);
}
