const { version } = require("../package.json");

const dev = {
    api: {
        dragon: "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
    }
};

const prod = {
    api: {
        dragon: "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
    }
};

const config = (process.env.NODE_ENV === "development" ? dev : prod);

export default {
    project_title : "South WEB",
    version,
    ...config
}