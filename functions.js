const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
const url = "http://localhost:5000/constellations";
axios
    .get(url)
    .then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data);
})
.catch((error) => {
    console.log(error.message);
});
}

function create(body) {
const url = "http://localhost:5000/constellations";
axios   
.post(url, {
    name: body.name,
    meaning: body.meaning,
    starsWithPlanets: body.starsWithPlanets,
    quadrant: body.quadrant,
})
    .then((response) => {
    console.log(response.data)
});
}

function show(id) {
    const url = `${BASE_URL}/constellations/${id}`;
axios 
    .get(url)
    .then((response) => {
    console.log(response.data)
 });
}

function update(id, body) {
const url = `${BASE_URL}/constellations/${id}`;
axios   
.put(url, {
    id: body.id,
    name: body.name,
    meaning: body.meaning,
    starsWithPlanets: body.starsWithPlanets,
    quadrant: body.quadrant,
})
    .then((response) => {
    console.log(response.data)
});
}

function destroy(id) {
    const url = `${BASE_URL}/constellations/${id}`;
axios .delete(url)
    .then((response) => {
    console.log(response.data)
});
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
