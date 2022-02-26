// implement a route function which to handle "link default behavior" and "location changes"
const route = (event) => {
  // Capture the click event for the link
  event = event || window.event;
  // Prevent the "anchor" tag from performing it's default behavior.
  event.preventDefault();
  // use browser's history API to update the URL on the browser.
  window.history.pushState({}, "", event.target.href);
  // Calling handleLocation each time we call the route function, will finish the override of our link's default behavior to route within our app instead.
  handleLocation();
};

// create an object to define some routes for the path.
const routes = {
  404: "/views/404.html",
  "/": "/views/home.html",
  "/blogs": "/views/blogs.html",
  "/settings": "/views/settings.html",
};
// We'll call this function every time we have a navigation in our app
const handleLocation = async () => {
  // Capture pathname from the current location
  const path = window.location.pathname;
  // use th epathname to find the desired path route or default to the 404 route if it does not exist.
  const route = routes[path] || routes[404];
  // Load the html for our route and transform the response to text
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("content").innerHTML = html;
};

// Handle the browser routing functionality and first page load
// call the handleLocation for the window.onpopstate to handle cases where users click the forward and back browser buttons
window.onpopstate = handleLocation;
// Give a global access to our route function
window.route = route;
// Load the correct page for whatever route the user first lands on
handleLocation();
